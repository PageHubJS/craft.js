import { useCollector } from '@craftjs/utils';
import { useContext, useMemo } from 'react';
import { LayerManagerContext } from './context';
export function useLayerManager(collector) {
    const { store } = useContext(LayerManagerContext);
    const collected = useCollector(store, collector);
    return useMemo(() => ({
        store,
        ...collected,
    }), [store, collected]);
}
//# sourceMappingURL=useLayerManager.js.map