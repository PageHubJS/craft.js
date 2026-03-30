import { ERROR_TOP_LEVEL_ELEMENT_NO_ID } from '@craftjs/utils';
import React, { useState } from 'react';
import invariant from 'tiny-invariant';
import { NodeElement } from './NodeElement';
import { useInternalNode } from './useInternalNode';
import { useInternalEditor } from '../editor/useInternalEditor';
export const defaultElementProps = {
    is: 'div',
    canvas: false,
    custom: {},
    hidden: false,
};
export const elementPropToNodeData = {
    is: 'type',
    canvas: 'isCanvas',
};
export function Element({ id, children, ...elementProps }) {
    const { is } = {
        ...defaultElementProps,
        ...elementProps,
    };
    const { query, actions } = useInternalEditor();
    const { id: nodeId, inNodeContext } = useInternalNode();
    const [linkedNodeId] = useState(() => {
        invariant(!!id, ERROR_TOP_LEVEL_ELEMENT_NO_ID);
        const node = query.node(nodeId).get();
        if (inNodeContext) {
            const existingNode = node.data.linkedNodes[id]
                ? query.node(node.data.linkedNodes[id]).get()
                : null;
            // Render existing linked Node if it already exists (and is the same type as the JSX)
            if (existingNode && existingNode.data.type === is) {
                return existingNode.id;
            }
            // otherwise, create and render a new linked Node
            const linkedElement = React.createElement(Element, elementProps, children);
            const tree = query.parseReactElement(linkedElement).toNodeTree();
            actions.history.ignore().addLinkedNodeFromTree(tree, nodeId, id);
            return tree.rootNodeId;
        }
        return null;
    });
    return linkedNodeId ? React.createElement(NodeElement, { id: linkedNodeId }) : null;
}
//# sourceMappingURL=Element.js.map