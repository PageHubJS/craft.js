import { isChromium, isLinux } from '@craftjs/utils';
import isFunction from 'lodash/isFunction';
import React from 'react';

import { CoreEventHandlers, CreateHandlerOptions } from './CoreEventHandlers';
import { Positioner } from './Positioner';
import { createShadow } from './createShadow';

import { Indicator, NodeId, DragTarget, NodeTree } from '../interfaces';

export type DefaultEventHandlersOptions = {
  isMultiSelectEnabled: (e: MouseEvent) => boolean;
  removeHoverOnMouseleave: boolean;
};

/**
 * Specifies Editor-wide event handlers and connectors
 */
export class DefaultEventHandlers<O = {}> extends CoreEventHandlers<
  DefaultEventHandlersOptions & O
> {
  /**
   * Note: Multiple drag shadows (ie: via multiselect in v0.2 and higher) do not look good on Linux Chromium due to way it renders drag shadows in general,
   * so will have to fallback to the single shadow approach above for the time being
   * see: https://bugs.chromium.org/p/chromium/issues/detail?id=550999
   */
  static forceSingleDragShadow = isChromium() && isLinux();

  draggedElementShadow: HTMLElement;
  dragTarget: DragTarget;
  positioner: Positioner | null = null;
  currentSelectedElementIds = [];

  // rAF-coalesced dragover: native dragover fires up to ~1000Hz on high-DPI mice.
  // We collapse all events within a single frame to one indicator computation +
  // one state write, eliminating redundant getBoundingClientRect work and
  // React re-renders of the drop indicator.
  private pendingDragover: {
    targetId: NodeId;
    x: number;
    y: number;
  } | null = null;
  private dragoverRafId: number = 0;

  private flushDragover = () => {
    this.dragoverRafId = 0;
    const pending = this.pendingDragover;
    this.pendingDragover = null;
    if (!pending || !this.positioner) return;
    const indicator = this.positioner.computeIndicator(
      pending.targetId,
      pending.x,
      pending.y
    );
    if (!indicator) return;
    this.options.store.actions.setIndicator(indicator);
  };

  private cancelPendingDragover() {
    if (this.dragoverRafId) {
      cancelAnimationFrame(this.dragoverRafId);
      this.dragoverRafId = 0;
    }
    this.pendingDragover = null;
  }

  onDisable() {
    this.cancelPendingDragover();
    this.options.store.actions.clearEvents();
  }

  /**
   * Called at drop time to execute the placement.
   * Override in subclass to handle custom intent types (alignment, etc).
   */
  protected executeDrop(dragTarget: DragTarget, indicator: Indicator): void {
    const store = this.options.store;
    const where = indicator.placement.where;

    if (where !== 'before' && where !== 'after') {
      const onBesideDrop = store.query.getOptions().onBesideDrop;
      if (onBesideDrop) {
        onBesideDrop(dragTarget, indicator, store.actions, store.query);
        return;
      }
    }

    const index = indicator.placement.index + (where === 'after' ? 1 : 0);

    if (dragTarget.type === 'existing') {
      store.actions.move(
        dragTarget.nodes,
        indicator.placement.parent.id,
        index
      );
    } else {
      store.actions.addNodeTree(
        dragTarget.tree,
        indicator.placement.parent.id,
        index
      );
    }
  }

  handlers() {
    const store = this.options.store;

    return {
      connect: (el: HTMLElement, id: NodeId) => {
        store.actions.setDOM(id, el);

        return this.reflect((connectors) => {
          connectors.select(el, id);
          connectors.hover(el, id);
          connectors.drop(el, id);
        });
      },
      select: (el: HTMLElement, id: NodeId) => {
        const unbindOnMouseDown = this.addCraftEventListener(
          el,
          'mousedown',
          (e) => {
            e.craft.stopPropagation();

            let newSelectedElementIds = [];

            if (id) {
              const { query } = store;
              const selectedElementIds = query.getEvent('selected').all();
              const isMultiSelect = this.options.isMultiSelectEnabled(e);

              /**
               * Retain the previously select elements if the multi-select condition is enabled
               * or if the currentNode is already selected
               *
               * so users can just click to drag the selected elements around without holding the multi-select key
               */

              if (isMultiSelect || selectedElementIds.includes(id)) {
                newSelectedElementIds = selectedElementIds.filter(
                  (selectedId) => {
                    const descendants = query
                      .node(selectedId)
                      .descendants(true);
                    const ancestors = query.node(selectedId).ancestors(true);

                    // Deselect ancestors/descendants
                    if (descendants.includes(id) || ancestors.includes(id)) {
                      return false;
                    }

                    return true;
                  }
                );
              }

              if (!newSelectedElementIds.includes(id)) {
                newSelectedElementIds.push(id);
              }
            }

            store.actions.setNodeEvent('selected', newSelectedElementIds);
          }
        );

        const unbindOnClick = this.addCraftEventListener(el, 'click', (e) => {
          e.craft.stopPropagation();

          const { query } = store;
          const selectedElementIds = query.getEvent('selected').all();

          const isMultiSelect = this.options.isMultiSelectEnabled(e);
          const isNodeAlreadySelected = this.currentSelectedElementIds.includes(
            id
          );

          let newSelectedElementIds = [...selectedElementIds];

          if (isMultiSelect && isNodeAlreadySelected) {
            newSelectedElementIds.splice(newSelectedElementIds.indexOf(id), 1);
            store.actions.setNodeEvent('selected', newSelectedElementIds);
          } else if (!isMultiSelect && selectedElementIds.length > 1) {
            newSelectedElementIds = [id];
            store.actions.setNodeEvent('selected', newSelectedElementIds);
          }

          this.currentSelectedElementIds = newSelectedElementIds;
        });

        return () => {
          unbindOnMouseDown();
          unbindOnClick();
        };
      },
      hover: (el: HTMLElement, id: NodeId) => {
        const unbindMouseover = this.addCraftEventListener(
          el,
          'mouseover',
          (e) => {
            e.craft.stopPropagation();
            store.actions.setNodeEvent('hovered', id);
          }
        );

        let unbindMouseleave: (() => void) | null = null;

        if (this.options.removeHoverOnMouseleave) {
          unbindMouseleave = this.addCraftEventListener(
            el,
            'mouseleave',
            (e) => {
              e.craft.stopPropagation();
              store.actions.setNodeEvent('hovered', null);
            }
          );
        }

        return () => {
          unbindMouseover();

          if (!unbindMouseleave) {
            return;
          }

          unbindMouseleave();
        };
      },
      drop: (el: HTMLElement, targetId: NodeId) => {
        const unbindDragOver = this.addCraftEventListener(
          el,
          'dragover',
          (e) => {
            e.craft.stopPropagation();
            e.preventDefault();

            if (!this.positioner) {
              return;
            }

            // Coalesce dragover at frame rate. Native dragover fires far faster
            // than React can re-render the indicator; collapsing to one
            // computeIndicator + setIndicator per frame eliminates redundant
            // getBoundingClientRect work and indicator re-renders.
            this.pendingDragover = {
              targetId,
              x: e.clientX,
              y: e.clientY,
            };
            if (!this.dragoverRafId) {
              this.dragoverRafId = requestAnimationFrame(this.flushDragover);
            }
          }
        );

        const unbindDragEnter = this.addCraftEventListener(
          el,
          'dragenter',
          (e) => {
            e.craft.stopPropagation();
            e.preventDefault();
          }
        );

        return () => {
          unbindDragEnter();
          unbindDragOver();
        };
      },
      drag: (el: HTMLElement, id: NodeId) => {
        if (!store.query.node(id).isDraggable()) {
          return () => {};
        }

        el.setAttribute('draggable', 'true');

        const unbindDragStart = this.addCraftEventListener(
          el,
          'dragstart',
          (e) => {
            e.craft.stopPropagation();

            const { query, actions } = store;

            let selectedElementIds = query.getEvent('selected').all();

            const isMultiSelect = this.options.isMultiSelectEnabled(e);
            const isNodeAlreadySelected = this.currentSelectedElementIds.includes(
              id
            );

            if (!isNodeAlreadySelected) {
              if (isMultiSelect) {
                selectedElementIds = [...selectedElementIds, id];
              } else {
                selectedElementIds = [id];
              }
              store.actions.setNodeEvent('selected', selectedElementIds);
            }

            actions.setNodeEvent('dragged', selectedElementIds);

            // Filter out null DOM refs (node exists in state but ref callback
            // hasn't attached yet — can happen with programmatically-inserted
            // nodes that are dragged before first paint). createShadow will crash
            // on getBoundingClientRect otherwise.
            const selectedDOMs = selectedElementIds
              .map((id) => query.node(id).get().dom)
              .filter((dom): dom is HTMLElement => dom != null);

            if (selectedDOMs.length > 0) {
              this.draggedElementShadow = createShadow(
                e,
                selectedDOMs,
                DefaultEventHandlers.forceSingleDragShadow
              );
            }

            this.dragTarget = {
              type: 'existing',
              nodes: selectedElementIds,
            };

            this.positioner = new Positioner(
              this.options.store,
              this.dragTarget
            );
          }
        );

        const unbindDragEnd = this.addCraftEventListener(el, 'dragend', (e) => {
          e.craft.stopPropagation();

          this.dropElement((dragTarget, indicator) => {
            if (dragTarget.type === 'new') {
              return;
            }
            this.executeDrop(dragTarget, indicator);
          });
        });

        return () => {
          el.setAttribute('draggable', 'false');
          unbindDragStart();
          unbindDragEnd();
        };
      },
      create: (
        el: HTMLElement,
        userElement: React.ReactElement | (() => NodeTree | React.ReactElement),
        options?: Partial<CreateHandlerOptions>
      ) => {
        el.setAttribute('draggable', 'true');

        const unbindDragStart = this.addCraftEventListener(
          el,
          'dragstart',
          (e) => {
            e.craft.stopPropagation();
            let tree;
            if (typeof userElement === 'function') {
              const result = userElement();
              if (React.isValidElement(result)) {
                tree = store.query.parseReactElement(result).toNodeTree();
              } else {
                tree = result;
              }
            } else {
              tree = store.query.parseReactElement(userElement).toNodeTree();
            }

            const dom = e.currentTarget as HTMLElement;
            this.draggedElementShadow = createShadow(
              e,
              [dom],
              DefaultEventHandlers.forceSingleDragShadow
            );
            this.dragTarget = {
              type: 'new',
              tree,
            };

            this.positioner = new Positioner(
              this.options.store,
              this.dragTarget
            );
          }
        );

        const unbindDragEnd = this.addCraftEventListener(el, 'dragend', (e) => {
          e.craft.stopPropagation();
          this.dropElement((dragTarget, indicator) => {
            if (dragTarget.type === 'existing') {
              return;
            }
            this.executeDrop(dragTarget, indicator);
            if (options && isFunction(options.onCreate)) {
              options.onCreate(dragTarget.tree);
            }
          });
        });

        return () => {
          el.removeAttribute('draggable');
          unbindDragStart();
          unbindDragEnd();
        };
      },
    };
  }

  protected dropElement(
    onDropNode: (dragTarget: DragTarget, placement: Indicator) => void
  ) {
    const store = this.options.store;

    // Drop a pending dragover frame — its setIndicator would race with the
    // setIndicator(null) below and leave a stale indicator on screen.
    this.cancelPendingDragover();

    if (!this.positioner) {
      return;
    }

    const draggedElementShadow = this.draggedElementShadow;

    const indicator = this.positioner.getIndicator();

    if (this.dragTarget && indicator && !indicator.error) {
      onDropNode(this.dragTarget, indicator);
    }

    if (draggedElementShadow) {
      draggedElementShadow.parentNode.removeChild(draggedElementShadow);
      this.draggedElementShadow = null;
    }

    this.dragTarget = null;

    store.actions.setIndicator(null);
    store.actions.setNodeEvent('dragged', null);
    this.positioner.cleanup();

    this.positioner = null;
  }
}
