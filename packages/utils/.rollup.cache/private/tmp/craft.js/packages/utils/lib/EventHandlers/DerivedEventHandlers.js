import { EventHandlers } from './EventHandlers';
import { EventHandlerUpdates } from './interfaces';
// Creates EventHandlers that depends on another EventHandlers instance
// This lets us to easily create new connectors that composites of the parent EventHandlers instance
export class DerivedEventHandlers extends EventHandlers {
    derived;
    unsubscribeParentHandlerListener;
    constructor(derived, options) {
        super(options);
        this.derived = derived;
        this.options = options;
        // Automatically disable/enable depending on the parent handlers
        this.unsubscribeParentHandlerListener = this.derived.listen((msg) => {
            switch (msg) {
                case EventHandlerUpdates.HandlerEnabled: {
                    return this.enable();
                }
                case EventHandlerUpdates.HandlerDisabled: {
                    return this.disable();
                }
                default: {
                    return;
                }
            }
        });
    }
    // A method to easily inherit parent connectors
    inherit(cb) {
        return this.createProxyHandlers(this.derived, cb);
    }
    cleanup() {
        super.cleanup();
        this.unsubscribeParentHandlerListener();
    }
}
//# sourceMappingURL=DerivedEventHandlers.js.map