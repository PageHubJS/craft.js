import { useEffect } from 'react';
export const useEffectOnce = (effect) => {
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    useEffect(effect, []);
};
//# sourceMappingURL=useEffectOnce.js.map