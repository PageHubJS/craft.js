import { DropPosition, DOMInfo } from '../interfaces';

export default function movePlaceholder(
  pos: DropPosition,
  canvasDOMInfo: DOMInfo, // which canvas is cursor at
  bestTargetDomInfo: DOMInfo | null, // closest element in canvas (null if canvas is empty)
  thickness: number = 2,
  fullWidth: boolean = false
) {
  let t = 0,
    l = 0,
    w = 0,
    h = 0,
    where = pos.where;

  const elDim = bestTargetDomInfo;

  if (elDim) {
    if (where === 'beside-left' || where === 'beside-right') {
      // Vertical indicator at left or right edge of the target
      w = thickness;
      h = elDim.outerHeight;
      t = elDim.top;
      l =
        where === 'beside-left'
          ? elDim.left
          : elDim.left + elDim.outerWidth - thickness;
    } else if (!elDim.inFlow) {
      // If it's not in flow (like 'float' element)
      w = thickness;
      h = elDim.outerHeight;
      t = elDim.top;
      l = where === 'before' ? elDim.left : elDim.left + elDim.outerWidth;
    } else {
      // In-flow element: fullWidth uses parent width, default uses child width
      if (fullWidth && canvasDOMInfo) {
        w =
          canvasDOMInfo.outerWidth -
          canvasDOMInfo.padding.right -
          canvasDOMInfo.padding.left -
          canvasDOMInfo.margin.left -
          canvasDOMInfo.margin.right;
        l = canvasDOMInfo.left + canvasDOMInfo.padding.left;
      } else {
        w = elDim.outerWidth;
        l = elDim.left;
      }
      h = thickness;
      t = where === 'before' ? elDim.top : elDim.bottom;
    }
  } else {
    if (canvasDOMInfo) {
      t = canvasDOMInfo.top + canvasDOMInfo.padding.top;
      l = canvasDOMInfo.left + canvasDOMInfo.padding.left;
      w =
        canvasDOMInfo.outerWidth -
        canvasDOMInfo.padding.right -
        canvasDOMInfo.padding.left -
        canvasDOMInfo.margin.left -
        canvasDOMInfo.margin.right;
      h = thickness;
    }
  }
  return {
    top: `${t}px`,
    left: `${l}px`,
    width: `${w}px`,
    height: `${h}px`,
  };
}
