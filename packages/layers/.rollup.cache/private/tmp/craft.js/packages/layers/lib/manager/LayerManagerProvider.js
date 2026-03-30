import { useMethods } from '@craftjs/utils';
import React from 'react';
import { LayerMethods } from './actions';
import { LayerManagerContext } from './context';
import { LayerEventContextProvider } from '../events';
import { DefaultLayer } from '../layers';
export const LayerManagerProvider = ({ children, options, }) => {
    // TODO: fix type
    const store = useMethods(LayerMethods, {
        layers: {},
        events: {
            selected: null,
            dragged: null,
            hovered: null,
        },
        options: {
            renderLayer: DefaultLayer,
            ...options,
        },
    });
    return (React.createElement(LayerManagerContext.Provider, { value: { store } },
        React.createElement(LayerEventContextProvider, null, children)));
};
//# sourceMappingURL=LayerManagerProvider.js.map