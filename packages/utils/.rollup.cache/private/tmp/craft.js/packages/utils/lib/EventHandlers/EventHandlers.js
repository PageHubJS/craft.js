import { ConnectorRegistry } from './ConnectorRegistry';
import { EventHandlerUpdates, } from './interfaces';
import { isEventBlockedByDescendant } from './isEventBlockedByDescendant';
export class EventHandlers {
    options;
    registry = new ConnectorRegistry();
    subscribers = new Set();
    constructor(options) {
        this.options = options;
    }
    listen(cb) {
        this.subscribers.add(cb);
        return () => this.subscribers.delete(cb);
    }
    disable() {
        if (this.onDisable) {
            this.onDisable();
        }
        this.registry.disable();
        this.subscribers.forEach((listener) => {
            listener(EventHandlerUpdates.HandlerDisabled);
        });
    }
    enable() {
        if (this.onEnable) {
            this.onEnable();
        }
        this.registry.enable();
        this.subscribers.forEach((listener) => {
            listener(EventHandlerUpdates.HandlerEnabled);
        });
    }
    cleanup() {
        this.disable();
        this.subscribers.clear();
        this.registry.clear();
    }
    addCraftEventListener(el, eventName, listener, options) {
        const bindedListener = (e) => {
            if (!isEventBlockedByDescendant(e, eventName, el)) {
                e.craft.stopPropagation = () => {
                    if (!e.craft.blockedEvents[eventName]) {
                        e.craft.blockedEvents[eventName] = [];
                    }
                    e.craft.blockedEvents[eventName].push(el);
                };
                listener(e);
            }
        };
        el.addEventListener(eventName, bindedListener, options);
        return () => el.removeEventListener(eventName, bindedListener, options);
    }
    /**
     * Creates a record of chainable connectors and tracks their usages
     */
    createConnectorsUsage() {
        const handlers = this.handlers();
        // Track all active connector ids here
        // This is so we can return a cleanup method below so the callee can programmatically cleanup all connectors
        const activeConnectorIds = new Set();
        let canRegisterConnectors = false;
        const connectorsToRegister = new Map();
        const connectors = Object.entries(handlers).reduce((accum, [name, handler]) => ({
            ...accum,
            [name]: (el, required, options) => {
                const registerConnector = () => {
                    const connector = this.registry.register(el, {
                        required,
                        name,
                        options,
                        connector: handler,
                    });
                    activeConnectorIds.add(connector.id);
                    return connector;
                };
                connectorsToRegister.set(this.registry.getConnectorId(el, name), registerConnector);
                /**
                 * If register() has been called,
                 * register the connector immediately.
                 *
                 * Otherwise, registration is deferred until after register() is called
                 */
                if (canRegisterConnectors) {
                    registerConnector();
                }
                return el;
            },
        }), {});
        return {
            connectors,
            register: () => {
                canRegisterConnectors = true;
                connectorsToRegister.forEach((registerConnector) => {
                    registerConnector();
                });
            },
            cleanup: () => {
                canRegisterConnectors = false;
                activeConnectorIds.forEach((connectorId) => this.registry.remove(connectorId));
            },
        };
    }
    derive(type, opts) {
        return new type(this, opts);
    }
    // This method allows us to execute multiple connectors and returns a single cleanup method for all of them
    createProxyHandlers(instance, cb) {
        const connectorsToCleanup = [];
        const handlers = instance.handlers();
        const proxiedHandlers = new Proxy(handlers, {
            get: (target, key, receiver) => {
                if (key in handlers === false) {
                    return Reflect.get(target, key, receiver);
                }
                return (el, ...args) => {
                    const cleanup = handlers[key](el, ...args);
                    if (!cleanup) {
                        return;
                    }
                    connectorsToCleanup.push(cleanup);
                };
            },
        });
        cb(proxiedHandlers);
        return () => {
            connectorsToCleanup.forEach((cleanup) => {
                cleanup();
            });
        };
    }
    // This lets us to execute and cleanup sibling connectors
    reflect(cb) {
        return this.createProxyHandlers(this, cb);
    }
}
//# sourceMappingURL=EventHandlers.js.map