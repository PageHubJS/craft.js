import { useEditor } from '@craftjs/core';
import { wrapConnectorHooks } from '@craftjs/utils';
import { useContext, useMemo } from 'react';
import { LayerContext } from './LayerContext';
import { useLayerManager } from '../manager';
export function useLayer(collect) {
    const { id, depth, connectors: internalConnectors } = useContext(LayerContext);
    const { actions: managerActions, ...collected } = useLayerManager((state) => {
        return id && state.layers[id] && collect && collect(state.layers[id]);
    });
    const { children } = useEditor((state, query) => ({
        children: state.nodes[id] && query.node(id).descendants(),
    }));
    const actions = useMemo(() => {
        return {
            toggleLayer: () => managerActions.toggleLayer(id),
            setExpandedState: (expanded) => managerActions.setExpandedState(id, expanded),
        };
    }, [managerActions, id]);
    const connectors = useMemo(() => wrapConnectorHooks({
        layer: (el) => internalConnectors.layer(el, id),
        drag: (el) => internalConnectors.drag(el, id),
        layerHeader: (el) => internalConnectors.layerHeader(el, id),
    }), [internalConnectors, id]);
    return {
        id,
        depth,
        children,
        actions,
        connectors,
        ...collected,
    };
}
//# sourceMappingURL=useLayer.js.map