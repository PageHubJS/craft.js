import { ERROR_NOT_IN_RESOLVER } from '@craftjs/utils';
import invariant from 'tiny-invariant';
let CACHED_RESOLVER_DATA = null;
const getReversedResolver = (resolver) => {
    if (CACHED_RESOLVER_DATA && CACHED_RESOLVER_DATA.resolver === resolver) {
        return CACHED_RESOLVER_DATA.reversed;
    }
    CACHED_RESOLVER_DATA = {
        resolver,
        reversed: new Map(),
    };
    for (const [name, comp] of Object.entries(resolver)) {
        CACHED_RESOLVER_DATA.reversed.set(comp, name);
    }
    return CACHED_RESOLVER_DATA.reversed;
};
const getComponentName = (component) => {
    return component.name || component.displayName;
};
const searchComponentInResolver = (resolver, comp) => {
    const name = getReversedResolver(resolver).get(comp);
    return name !== undefined ? name : null;
};
export const resolveComponent = (resolver, comp) => {
    if (typeof comp === 'string') {
        return comp;
    }
    const resolvedName = searchComponentInResolver(resolver, comp);
    invariant(resolvedName, ERROR_NOT_IN_RESOLVER.replace('%node_type%', getComponentName(comp)));
    return resolvedName;
};
//# sourceMappingURL=resolveComponent.js.map