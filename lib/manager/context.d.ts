import { SubscriberAndCallbacksFor } from '@craftjs/utils';
import { LayerMethods } from './actions';
export type LayerStore = SubscriberAndCallbacksFor<typeof LayerMethods>;
export type LayerManagerContextType = {
    store: LayerStore;
};
export declare const LayerManagerContext: import("react").Context<LayerManagerContextType>;
