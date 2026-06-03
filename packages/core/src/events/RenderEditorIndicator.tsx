import { RenderIndicator, getDOMInfo } from '@craftjs/utils';
import React, { useEffect } from 'react';

import { useEventHandler } from './EventContext';
import movePlaceholder from './movePlaceholder';

import { useInternalEditor } from '../editor/useInternalEditor';

export const RenderEditorIndicator = () => {
  const { indicator, indicatorOptions, enabled } = useInternalEditor(
    (state) => ({
      indicator: state.indicator,
      indicatorOptions: state.options.indicator,
      enabled: state.options.enabled,
    })
  );

  const handler = useEventHandler();

  useEffect(() => {
    if (!handler) {
      return;
    }

    if (!enabled) {
      handler.disable();
      return;
    }

    handler.enable();
  }, [enabled, handler]);

  if (!indicator || indicatorOptions?.enabled === false) {
    return null;
  }

  // Determine if this is a section-level drop (fat indicator)
  const parentType = indicator.placement.parent?.data?.props?.type;
  const sectionParentTypes = indicatorOptions.sectionParentTypes || [];
  const isSectionDrop = sectionParentTypes.includes(parentType);
  const effectiveThickness = isSectionDrop
    ? indicatorOptions.sectionThickness || indicatorOptions.thickness
    : indicatorOptions.thickness;

  const pos = movePlaceholder(
    indicator.placement,
    getDOMInfo(indicator.placement.parent.dom),
    indicator.placement.currentNode &&
      getDOMInfo(indicator.placement.currentNode.dom),
    effectiveThickness,
    indicatorOptions.fullWidth ?? false
  );

  // Center the fat bar on the boundary between sections
  if (isSectionDrop && indicator.placement.currentNode) {
    const offset = (effectiveThickness - indicatorOptions.thickness) / 2;
    pos.top = `${parseFloat(pos.top) - offset}px`;
  }

  return React.createElement(RenderIndicator, {
    className: [
      indicatorOptions.className,
      isSectionDrop ? 'drop-zone-section' : '',
    ]
      .filter(Boolean)
      .join(' '),
    style: {
      ...pos,
      backgroundColor: indicator.error
        ? indicatorOptions.error
        : indicatorOptions.success,
      transition: indicatorOptions.transition || '0.2s ease-in',
      ...(isSectionDrop && !indicator.error
        ? {
            opacity: 0.35,
            borderRadius: '8px',
          }
        : {}),
      ...(indicatorOptions.style ?? {}),
    },
    parentDom: indicator.placement.parent.dom,
  });
};
