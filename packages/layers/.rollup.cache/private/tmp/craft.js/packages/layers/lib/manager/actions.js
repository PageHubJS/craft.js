export const LayerMethods = (state) => ({
    setLayerEvent: (eventType, id) => {
        if (id !== null && !state.layers[id])
            return;
        const current = state.events[eventType];
        if (current && id !== current) {
            state.layers[current].event[eventType] = false;
        }
        if (id) {
            state.layers[id].event[eventType] = true;
            state.events[eventType] = id;
        }
        else {
            state.events[eventType] = null;
        }
    },
    registerLayer: (id) => {
        if (!state.layers[id]) {
            state.layers[id] = {
                dom: null,
                headingDom: null,
                expanded: false,
                id,
                event: {
                    selected: false,
                    hovered: false,
                },
            };
        }
    },
    setDOM: (id, domCollection) => {
        state.layers[id] = {
            ...state.layers[id],
            ...(domCollection.dom ? { dom: domCollection.dom } : {}),
            ...(domCollection.headingDom
                ? { headingDom: domCollection.headingDom }
                : {}),
        };
    },
    toggleLayer: (id) => {
        state.layers[id].expanded = !state.layers[id].expanded;
    },
    setExpandedState: (id, expanded) => {
        state.layers[id].expanded = expanded;
    },
    setIndicator: (indicator) => {
        state.events.indicator = indicator;
    },
});
//# sourceMappingURL=actions.js.map