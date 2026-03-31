import {
  useCollector,
  useCollectorReturnType,
  QueryCallbacksFor,
  wrapConnectorHooks,
  EventHandlerConnectors,
  ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT,
} from '@craftjs/utils';
import { useContext, useEffect, useMemo } from 'react';
import invariant from 'tiny-invariant';

import { EditorContext } from './EditorContext';
import { QueryMethods } from './query';
import { EditorStore } from './store';

import { CoreEventHandlers } from '../events/CoreEventHandlers';
import { useEventHandler } from '../events/EventContext';
import { EditorState } from '../interfaces';

export type EditorCollector<C> = (
  state: EditorState,
  query: QueryCallbacksFor<typeof QueryMethods>
) => C;

export type useInternalEditorReturnType<C = null> = useCollectorReturnType<
  EditorStore,
  C
> & {
  inContext: boolean;
  store: EditorStore;
  connectors: EventHandlerConnectors<CoreEventHandlers, React.ReactElement>;
};

export function useInternalEditor<C>(
  collector?: EditorCollector<C>
): useInternalEditorReturnType<C> {
  const handler = useEventHandler();
  const store = useContext(EditorContext);
  invariant(store, ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT);

  const collected = useCollector(store, collector);

  const connectorsUsage = useMemo(
    () => handler && handler.createConnectorsUsage(),
    [handler]
  );

  useEffect(() => {
    if (!connectorsUsage) return;

    connectorsUsage.register();

    return () => {
      connectorsUsage.cleanup();
    };
  }, [connectorsUsage]);

  // When Events is skipped (enabled=false), provide no-op passthrough connectors
  const noopConnectors = useMemo(() => {
    const noop = (el: HTMLElement) => el;
    return wrapConnectorHooks({
      connect: noop,
      drag: noop,
      select: noop,
      hover: noop,
      create: noop,
    } as any);
  }, []);

  const connectors = useMemo(
    () =>
      connectorsUsage
        ? wrapConnectorHooks(connectorsUsage.connectors)
        : noopConnectors,
    [connectorsUsage, noopConnectors]
  );

  return {
    ...collected,
    connectors,
    inContext: !!store,
    store,
  };
}
