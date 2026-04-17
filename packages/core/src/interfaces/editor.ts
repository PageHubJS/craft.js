import { QueryCallbacksFor, Delete, PatchListenerAction } from '@craftjs/utils';

import { DragTarget, NodeInfo, Placement } from './events';
import { Nodes, NodeEventTypes, NodeId, Node } from './nodes';

import { QueryMethods } from '../editor/query';
import { EditorStore, ActionMethodsWithConfig } from '../editor/store';
import { useInternalEditorReturnType } from '../editor/useInternalEditor';
import { CoreEventHandlers } from '../events';

export type Options = {
  onRender: React.ComponentType<{ render: React.ReactElement }>;
  onBeforeMoveEnd: (
    targetNode: Node,
    newParentNode: Node,
    existingParentNode: Node
  ) => void;
  onNodesChange: (query: QueryCallbacksFor<typeof QueryMethods>) => void;
  resolver: Resolver;
  enabled: boolean;
  indicator: Partial<{
    success: string;
    error: string;
    transition: string;
    thickness: number;
    sectionThickness: number;
    sectionParentTypes: string[];
    className: string;
    style: React.CSSProperties;
    /** When true, in-flow drop indicators span the parent container width instead of the child width. */
    fullWidth: boolean;
  }>;
  handlers: (store: EditorStore) => CoreEventHandlers;
  normalizeNodes: (
    state: EditorState,
    previousState: EditorState,
    actionPerformed: Delete<
      PatchListenerAction<typeof ActionMethodsWithConfig>,
      'patches'
    >,
    query: QueryCallbacksFor<typeof QueryMethods>
  ) => void;
  /** Called by findPosition to detect horizontal (beside) intent during drag. Return 'beside-left' or 'beside-right' to trigger a beside drop, or null for normal behavior. */
  besideDetector?: (
    parent: Node,
    childDim: NodeInfo,
    posX: number,
    posY: number
  ) => string | null;
  /** Called on drop when placement.where is a custom value (not 'before'/'after'). Consumer handles the restructuring. */
  onBesideDrop?: (
    dragTarget: DragTarget,
    indicator: Indicator,
    actions: any,
    query: any
  ) => void;
};

export type Resolver = Record<string, string | React.ElementType>;

export interface Indicator {
  placement: Placement;
  error: string | null;
}

export type EditorEvents = Record<NodeEventTypes, Set<NodeId>>;

export type EditorState = {
  nodes: Nodes;
  events: EditorEvents;
  options: Options;
  indicator: Indicator;
};

export type ConnectedEditor<S = null> = useInternalEditorReturnType<S>;
