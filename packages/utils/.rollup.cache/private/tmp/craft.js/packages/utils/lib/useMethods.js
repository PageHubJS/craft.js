// https://github.com/pelotom/use-methods
import produce, { produceWithPatches, enableMapSet, enablePatches, } from 'immer';
import isEqualWith from 'lodash/isEqualWith';
import { useMemo, useEffect, useRef, useCallback } from 'react';
import { History, HISTORY_ACTIONS } from './History';
enableMapSet();
enablePatches();
export function useMethods(methodsOrOptions, initialState, queryMethods, patchListener) {
    const history = useMemo(() => new History(), []);
    let methodsFactory;
    let ignoreHistoryForActionsRef = useRef([]);
    let normalizeHistoryRef = useRef(() => { });
    if (typeof methodsOrOptions === 'function') {
        methodsFactory = methodsOrOptions;
    }
    else {
        methodsFactory = methodsOrOptions.methods;
        ignoreHistoryForActionsRef.current = methodsOrOptions.ignoreHistoryForActions;
        normalizeHistoryRef.current = methodsOrOptions.normalizeHistory;
    }
    const patchListenerRef = useRef(patchListener);
    patchListenerRef.current = patchListener;
    const stateRef = useRef(initialState);
    const reducer = useMemo(() => {
        const { current: normalizeHistory } = normalizeHistoryRef;
        const { current: ignoreHistoryForActions } = ignoreHistoryForActionsRef;
        const { current: patchListener } = patchListenerRef;
        return (state, action) => {
            const query = queryMethods && createQuery(queryMethods, () => state, history);
            let finalState;
            let [nextState, patches, inversePatches] = produceWithPatches(state, (draft) => {
                switch (action.type) {
                    case HISTORY_ACTIONS.UNDO: {
                        return history.undo(draft);
                    }
                    case HISTORY_ACTIONS.REDO: {
                        return history.redo(draft);
                    }
                    case HISTORY_ACTIONS.CLEAR: {
                        history.clear();
                        return {
                            ...draft,
                        };
                    }
                    // TODO: Simplify History API
                    case HISTORY_ACTIONS.IGNORE:
                    case HISTORY_ACTIONS.MERGE:
                    case HISTORY_ACTIONS.THROTTLE: {
                        const [type, ...params] = action.payload;
                        methodsFactory(draft, query)[type](...params);
                        break;
                    }
                    default:
                        methodsFactory(draft, query)[action.type](...action.payload);
                }
            });
            finalState = nextState;
            if (patchListener) {
                patchListener(nextState, state, { type: action.type, params: action.payload, patches }, query, (cb) => {
                    let normalizedDraft = produceWithPatches(nextState, cb);
                    finalState = normalizedDraft[0];
                    patches = [...patches, ...normalizedDraft[1]];
                    inversePatches = [...normalizedDraft[2], ...inversePatches];
                });
            }
            if ([HISTORY_ACTIONS.UNDO, HISTORY_ACTIONS.REDO].includes(action.type) &&
                normalizeHistory) {
                finalState = produce(finalState, normalizeHistory);
            }
            if (![
                ...ignoreHistoryForActions,
                HISTORY_ACTIONS.UNDO,
                HISTORY_ACTIONS.REDO,
                HISTORY_ACTIONS.IGNORE,
                HISTORY_ACTIONS.CLEAR,
            ].includes(action.type)) {
                if (action.type === HISTORY_ACTIONS.THROTTLE) {
                    history.throttleAdd(patches, inversePatches, action.config && action.config.rate);
                }
                else if (action.type === HISTORY_ACTIONS.MERGE) {
                    history.merge(patches, inversePatches);
                }
                else {
                    history.add(patches, inversePatches);
                }
            }
            return finalState;
        };
    }, [history, methodsFactory, queryMethods]);
    const getState = useCallback(() => stateRef.current, []);
    const watcher = useMemo(() => new Watcher(getState), [getState]);
    const dispatch = useCallback((action) => {
        const newState = reducer(stateRef.current, action);
        stateRef.current = newState;
        watcher.notify();
    }, [reducer, watcher]);
    useEffect(() => {
        watcher.notify();
    }, [watcher]);
    const query = useMemo(() => !queryMethods
        ? []
        : createQuery(queryMethods, () => stateRef.current, history), [history, queryMethods]);
    const actions = useMemo(() => {
        const actionTypes = Object.keys(methodsFactory(null, null));
        const { current: ignoreHistoryForActions } = ignoreHistoryForActionsRef;
        return {
            ...actionTypes.reduce((accum, type) => {
                accum[type] = (...payload) => dispatch({ type, payload });
                return accum;
            }, {}),
            history: {
                undo() {
                    return dispatch({
                        type: HISTORY_ACTIONS.UNDO,
                    });
                },
                redo() {
                    return dispatch({
                        type: HISTORY_ACTIONS.REDO,
                    });
                },
                clear: () => {
                    return dispatch({
                        type: HISTORY_ACTIONS.CLEAR,
                    });
                },
                throttle: (rate) => {
                    return {
                        ...actionTypes
                            .filter((type) => !ignoreHistoryForActions.includes(type))
                            .reduce((accum, type) => {
                            accum[type] = (...payload) => dispatch({
                                type: HISTORY_ACTIONS.THROTTLE,
                                payload: [type, ...payload],
                                config: {
                                    rate: rate,
                                },
                            });
                            return accum;
                        }, {}),
                    };
                },
                ignore: () => {
                    return {
                        ...actionTypes
                            .filter((type) => !ignoreHistoryForActions.includes(type))
                            .reduce((accum, type) => {
                            accum[type] = (...payload) => dispatch({
                                type: HISTORY_ACTIONS.IGNORE,
                                payload: [type, ...payload],
                            });
                            return accum;
                        }, {}),
                    };
                },
                merge: () => {
                    return {
                        ...actionTypes
                            .filter((type) => !ignoreHistoryForActions.includes(type))
                            .reduce((accum, type) => {
                            accum[type] = (...payload) => dispatch({
                                type: HISTORY_ACTIONS.MERGE,
                                payload: [type, ...payload],
                            });
                            return accum;
                        }, {}),
                    };
                },
            },
        };
    }, [dispatch, methodsFactory]);
    return useMemo(() => ({
        getState,
        subscribe: (collector, cb, collectOnCreate) => watcher.subscribe(collector, cb, collectOnCreate),
        actions,
        query,
        history,
    }), [actions, query, watcher, getState, history]);
}
export function createQuery(queryMethods, getState, history) {
    const queries = Object.keys(queryMethods()).reduce((accum, key) => {
        return {
            ...accum,
            [key]: (...args) => {
                return queryMethods(getState())[key](...args);
            },
        };
    }, {});
    return {
        ...queries,
        history: {
            canUndo: () => history.canUndo(),
            canRedo: () => history.canRedo(),
        },
    };
}
class Watcher {
    getState;
    subscribers = [];
    constructor(getState) {
        this.getState = getState;
    }
    /**
     * Creates a Subscriber
     * @returns {() => void} a Function that removes the Subscriber
     */
    subscribe(collector, onChange, collectOnCreate) {
        const subscriber = new Subscriber(() => collector(this.getState()), onChange, collectOnCreate);
        this.subscribers.push(subscriber);
        return this.unsubscribe.bind(this, subscriber);
    }
    unsubscribe(subscriber) {
        if (this.subscribers.length) {
            const index = this.subscribers.indexOf(subscriber);
            if (index > -1)
                return this.subscribers.splice(index, 1);
        }
    }
    notify() {
        this.subscribers.forEach((subscriber) => subscriber.collect());
    }
}
class Subscriber {
    collected;
    collector;
    onChange;
    id;
    /**
     * Creates a Subscriber
     * @param collector The method that returns an object of values to be collected
     * @param onChange A callback method that is triggered when the collected values has changed
     * @param collectOnCreate If set to true, the collector/onChange will be called on instantiation
     */
    constructor(collector, onChange, collectOnCreate = false) {
        this.collector = collector;
        this.onChange = onChange;
        // Collect and run onChange callback when Subscriber is created
        if (collectOnCreate)
            this.collect();
    }
    collect() {
        try {
            const recollect = this.collector();
            if (!isEqualWith(recollect, this.collected)) {
                this.collected = recollect;
                if (this.onChange)
                    this.onChange(this.collected);
            }
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.warn(err);
        }
    }
}
//# sourceMappingURL=useMethods.js.map