import { deprecationWarning, ROOT_NODE } from '@craftjs/utils';
import React, { useRef } from 'react';

import { useInternalEditor } from '../editor/useInternalEditor';
import { SerializedNodes } from '../interfaces';
import { NodeElement } from '../nodes/NodeElement';

export type FrameProps = {
  children?: React.ReactNode;
  json?: string;
  data?: string | SerializedNodes;
};

const RenderRootNode = ({ loaded }: { loaded: boolean }) => {
  const { timestamp, enabled } = useInternalEditor((state) => ({
    timestamp:
      state.nodes[ROOT_NODE] && state.nodes[ROOT_NODE]._hydrationTimestamp,
    enabled: state.options.enabled,
  }));

  // Use loaded flag from Frame to handle SSR — the store subscription
  // won't re-fire during the same server render pass after deserialize.
  if (!timestamp && !loaded) {
    return null;
  }

  // In viewer mode (enabled=false), skip the timestamp key so React diffs
  // instead of tearing down and rebuilding the entire tree on deserialize.
  return <NodeElement id={ROOT_NODE} key={enabled ? timestamp : ROOT_NODE} />;
};

/**
 * A React Component that defines the editable area
 */
export const Frame = ({ children, json, data }: FrameProps) => {
  const { actions, query } = useInternalEditor();

  if (!!json) {
    deprecationWarning('<Frame json={...} />', {
      suggest: '<Frame data={...} />',
    });
  }

  const isLoaded = useRef(false);

  if (!isLoaded.current) {
    const initialData = data || json;

    if (initialData) {
      actions.history.ignore().deserialize(initialData);
    } else if (children) {
      const rootNode = React.Children.only(children) as React.ReactElement;

      const node = query.parseReactElement(rootNode).toNodeTree((node, jsx) => {
        if (jsx === rootNode) {
          node.id = ROOT_NODE;
        }
        return node;
      });

      actions.history.ignore().addNodeTree(node);
    }

    isLoaded.current = true;
  }

  return <RenderRootNode loaded={isLoaded.current} />;
};
