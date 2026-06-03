import React from 'react';

import { DefaultRender } from './DefaultRender';

import { useInternalEditor } from '../editor/useInternalEditor';
import { useInternalNode } from '../nodes/useInternalNode';

type RenderNodeToElementProps = {
  render?: React.ReactElement;
  children?: React.ReactNode;
};
export const RenderNodeToElement = ({ render }: RenderNodeToElementProps) => {
  const { hidden, exists } = useInternalNode((node) => ({
    hidden: node.data.hidden,
    exists: !!node.data.props,
  }));

  const { onRender } = useInternalEditor((state) => ({
    onRender: state.options.onRender,
  }));

  // node is orphaned/partially-restored (e.g. after undo on a corrupted patch
  // sequence) — bail before any collector dereferences node.data.props
  if (!exists) {
    return null;
  }

  // don't display the node since it's hidden
  if (hidden) {
    return null;
  }

  return React.createElement(onRender, { render: render || <DefaultRender /> });
};
