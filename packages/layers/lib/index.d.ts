import React from 'react';
import { LayerOptions } from './interfaces';
export { useLayer, DefaultLayer, DefaultLayerHeader, EditableLayerName, } from './layers';
type LayersProps = Partial<LayerOptions>;
export declare const Layers: ({ ...options }: LayersProps) => React.JSX.Element;
