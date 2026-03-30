'use strict';
'undefined' != typeof window &&
  (window.__CRAFTJS__ || (window.__CRAFTJS__ = {}),
  (window.__CRAFTJS__['@craftjs/core'] = '0.2.12')),
  Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('@craftjs/utils'),
  t = require('react'),
  n = require('tiny-invariant'),
  r = require('lodash/isFunction'),
  o = require('lodash/cloneDeep');
function a(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
function i(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        if ('default' !== n) {
          var r = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                }
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
var d = a(t),
  s = i(t),
  c = a(n),
  u = a(r),
  l = a(o);
const f = d.default.createContext(null),
  p = ({ id: e, related: t = !1, children: n }) =>
    d.default.createElement(f.Provider, { value: { id: e, related: t } }, n);
function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? v(Object(n), !0).forEach(function (t) {
          O(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : v(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function y(e) {
  return (
    (y =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    y(e)
  );
}
function g(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function E(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, x(r.key), r);
  }
}
function m(e, t, n) {
  return (
    t && E(e.prototype, t),
    n && E(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function O(e, t, n) {
  return (
    (t = x(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function N(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && R(e, t);
}
function b(e) {
  return (
    (b = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    b(e)
  );
}
function R(e, t) {
  return (
    (R = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    R(e, t)
  );
}
function T(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++)
        t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      t.indexOf((n = a[r])) >= 0 ||
        (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function _(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function D(e) {
  var t = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var n,
      r = b(e);
    if (t) {
      var o = b(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return (function (e, t) {
      if (t && ('object' == typeof t || 'function' == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return _(e);
    })(this, n);
  };
}
function C(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null != n) {
        var r,
          o,
          a,
          i,
          d = [],
          s = !0,
          c = !1;
        try {
          if (((a = (n = n.call(e)).next), 0 === t)) {
            if (Object(n) !== n) return;
            s = !1;
          } else
            for (
              ;
              !(s = (r = a.call(n)).done) && (d.push(r.value), d.length !== t);
              s = !0
            );
        } catch (e) {
          (c = !0), (o = e);
        } finally {
          try {
            if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
              return;
          } finally {
            if (c) throw o;
          }
        }
        return d;
      }
    })(e, t) ||
    S(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function I(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return w(e);
    })(e) ||
    (function (e) {
      if (
        ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    })(e) ||
    S(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function S(e, t) {
  if (e) {
    if ('string' == typeof e) return w(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? w(e, t)
        : void 0
    );
  }
}
function w(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function x(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, 'string');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
  })(e);
  return 'symbol' == typeof t ? t : String(t);
}
const k = t.createContext(null);
var j = t.createContext(null),
  P = function () {
    return t.useContext(j);
  };
function A(n) {
  var r = P(),
    o = t.useContext(k);
  c.default(o, e.ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT);
  var a = e.useCollector(o, n),
    i = t.useMemo(
      function () {
        return r && r.createConnectorsUsage();
      },
      [r]
    );
  t.useEffect(
    function () {
      return (
        i.register(),
        function () {
          i.cleanup();
        }
      );
    },
    [i]
  );
  var d = t.useMemo(
    function () {
      return i && e.wrapConnectorHooks(i.connectors);
    },
    [i]
  );
  return h(h({}, a), {}, { connectors: d, inContext: !!o, store: o });
}
var L = ['actions', 'query', 'connectors'];
function M(n) {
  var r = t.useContext(f);
  c.default(r, e.ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT);
  var o = r.id,
    a = r.related,
    i = A(function (e) {
      return o && e.nodes[o] && n && n(e.nodes[o]);
    }),
    d = i.actions,
    s = i.connectors,
    u = T(i, L),
    l = t.useMemo(
      function () {
        return e.wrapConnectorHooks({
          connect: function (e) {
            return s.connect(e, o);
          },
          drag: function (e) {
            return s.drag(e, o);
          },
        });
      },
      [s, o]
    ),
    p = t.useMemo(
      function () {
        return {
          setProp: function (e, t) {
            t ? d.history.throttle(t).setProp(o, e) : d.setProp(o, e);
          },
          setCustom: function (e, t) {
            t ? d.history.throttle(t).setCustom(o, e) : d.setCustom(o, e);
          },
          setHidden: function (e) {
            return d.setHidden(o, e);
          },
        };
      },
      [d, o]
    );
  return h(
    h({}, u),
    {},
    { id: o, related: a, inNodeContext: !!r, actions: p, connectors: l }
  );
}
var q = ['id', 'related', 'actions', 'inNodeContext', 'connectors'];
function F(t) {
  var n = M(t),
    r = n.id,
    o = n.related,
    a = n.actions,
    i = n.inNodeContext,
    d = n.connectors;
  return h(
    h({}, T(n, q)),
    {},
    {
      actions: a,
      id: r,
      related: o,
      setProp: function (t, n) {
        return (
          e.deprecationWarning('useNode().setProp()', {
            suggest: 'useNode().actions.setProp()',
          }),
          a.setProp(t, n)
        );
      },
      inNodeContext: i,
      connectors: d,
    }
  );
}
const V = ({ render: e }) => {
    const {
      connectors: { connect: t, drag: n },
    } = F();
    return 'string' == typeof e.type ? t(n(d.default.cloneElement(e))) : e;
  },
  H = () => {
    const { type: e, props: n, nodes: r, hydrationTimestamp: o } = M((e) => ({
      type: e.data.type,
      props: e.data.props,
      nodes: e.data.nodes,
      hydrationTimestamp: e._hydrationTimestamp,
    }));
    return t.useMemo(() => {
      let t = n.children;
      r &&
        r.length > 0 &&
        (t = d.default.createElement(
          d.default.Fragment,
          null,
          r.map((e) => d.default.createElement(B, { id: e, key: e }))
        ));
      const o = d.default.createElement(e, n, t);
      return 'string' == typeof e
        ? d.default.createElement(V, { render: o })
        : o;
    }, [e, n, o, r]);
  },
  z = ({ render: e }) => {
    const { hidden: t } = M((e) => ({ hidden: e.data.hidden })),
      { onRender: n } = A((e) => ({ onRender: e.options.onRender }));
    return t
      ? null
      : d.default.createElement(n, {
          render: e || d.default.createElement(H, null),
        });
  },
  B = ({ id: e, render: t }) =>
    d.default.createElement(
      p,
      { id: e },
      d.default.createElement(z, { render: t })
    ),
  W = { is: 'div', canvas: !1, custom: {}, hidden: !1 },
  U = { is: 'type', canvas: 'isCanvas' };
function $({ id: n, children: r, ...o }) {
  const { is: a } = { ...W, ...o },
    { query: i, actions: s } = A(),
    { id: u, inNodeContext: l } = M(),
    [f] = t.useState(() => {
      c.default(!!n, e.ERROR_TOP_LEVEL_ELEMENT_NO_ID);
      const t = i.node(u).get();
      if (l) {
        const e = t.data.linkedNodes[n]
          ? i.node(t.data.linkedNodes[n]).get()
          : null;
        if (e && e.data.type === a) return e.id;
        const c = d.default.createElement($, o, r),
          l = i.parseReactElement(c).toNodeTree();
        return s.history.ignore().addLinkedNodeFromTree(l, u, n), l.rootNodeId;
      }
      return null;
    });
  return f ? d.default.createElement(B, { id: f }) : null;
}
const J = () =>
  e.deprecationWarning('<Canvas />', { suggest: '<Element canvas={true} />' });
function Canvas({ ...e }) {
  return (
    t.useEffect(() => J(), []), d.default.createElement($, { ...e, canvas: !0 })
  );
}
const G = () => {
  const { timestamp: t } = A((t) => ({
    timestamp: t.nodes[e.ROOT_NODE] && t.nodes[e.ROOT_NODE]._hydrationTimestamp,
  }));
  return t ? d.default.createElement(B, { id: e.ROOT_NODE, key: t }) : null;
};
var X;
(exports.NodeSelectorType = void 0),
  ((X = exports.NodeSelectorType || (exports.NodeSelectorType = {}))[
    (X.Any = 0)
  ] = 'Any'),
  (X[(X.Id = 1)] = 'Id'),
  (X[(X.Obj = 2)] = 'Obj');
const Y = (e) => {
  const {
    addLinkedNodeFromTree: t,
    setDOM: n,
    setNodeEvent: r,
    replaceNodes: o,
    reset: a,
    ...i
  } = e;
  return i;
};
function K(e) {
  const { connectors: n, actions: r, query: o, store: a, ...i } = A(e),
    d = Y(r);
  return {
    connectors: n,
    actions: t.useMemo(
      () => ({
        ...d,
        history: {
          ...d.history,
          ignore: (...e) => Y(d.history.ignore(...e)),
          throttle: (...e) => Y(d.history.throttle(...e)),
        },
      }),
      [d]
    ),
    query: o,
    store: a,
    ...i,
  };
}
var Q = function (e) {
    return Object.fromEntries
      ? Object.fromEntries(e)
      : e.reduce(function (e, t) {
          var n = C(t, 2),
            r = n[0],
            o = n[1];
          return h(h({}, e), {}, O({}, r, o));
        }, {});
  },
  Z = function (t, n, r) {
    var o = Array.isArray(n) ? n : [n],
      a = h({ existOnly: !1, idOnly: !1 }, r || {}),
      i = o
        .filter(function (e) {
          return !!e;
        })
        .map(function (e) {
          return 'string' == typeof e
            ? { node: t[e], exists: !!t[e] }
            : 'object' !== y(e) || a.idOnly
            ? { node: null, exists: !1 }
            : { node: e, exists: !!t[e.id] };
        });
    return (
      a.existOnly &&
        c.default(
          0 ===
            i.filter(function (e) {
              return !e.exists;
            }).length,
          e.ERROR_INVALID_NODEID
        ),
      i
    );
  },
  ee = ['history'],
  te = null,
  ne = function (t, n) {
    if ('string' == typeof n) return n;
    var r,
      o = (function (e, t) {
        var n = (function (e) {
          if (te && te.resolver === e) return te.reversed;
          te = { resolver: e, reversed: new Map() };
          for (var t = 0, n = Object.entries(e); t < n.length; t++) {
            var r = C(n[t], 2);
            te.reversed.set(r[1], r[0]);
          }
          return te.reversed;
        })(e).get(t);
        return void 0 !== n ? n : null;
      })(t, n);
    return (
      c.default(
        o,
        e.ERROR_NOT_IN_RESOLVER.replace(
          '%node_type%',
          (r = n).name || r.displayName
        )
      ),
      o
    );
  };
const re = (e, t) => ('string' == typeof e ? e : { resolvedName: ne(t, e) }),
  oe = (e, n) => {
    let { type: r, isCanvas: o, props: a } = e;
    return (
      (a = Object.keys(a).reduce((e, r) => {
        const o = a[r];
        return (
          null == o ||
            'function' == typeof o ||
            (e[r] =
              'children' === r && 'string' != typeof o
                ? t.Children.map(o, (e) =>
                    'string' == typeof e ? e : oe(e, n)
                  )
                : 'function' == typeof o.type
                ? oe(o, n)
                : o),
          e
        );
      }, {})),
      { type: re(r, n), isCanvas: !!o, props: a }
    );
  },
  ae = (e, t) => {
    const { type: n, props: r, isCanvas: o, name: a, ...i } = e;
    return { ...oe({ type: n, isCanvas: o, props: r }, t), ...i };
  };
function ie(t, n) {
  c.default('string' == typeof n, e.ERROR_INVALID_NODE_ID);
  var r = t.nodes[n],
    o = function (e) {
      return ie(t, e);
    };
  return {
    isCanvas: function () {
      return !!r.data.isCanvas;
    },
    isRoot: function () {
      return r.id === e.ROOT_NODE;
    },
    isLinkedNode: function () {
      return r.data.parent && o(r.data.parent).linkedNodes().includes(r.id);
    },
    isTopLevelNode: function () {
      return this.isRoot() || this.isLinkedNode();
    },
    isDeletable: function () {
      return !this.isTopLevelNode();
    },
    isParentOfTopLevelNodes: function () {
      return r.data.linkedNodes && Object.keys(r.data.linkedNodes).length > 0;
    },
    isParentOfTopLevelCanvas: function () {
      return (
        e.deprecationWarning('query.node(id).isParentOfTopLevelCanvas', {
          suggest: 'query.node(id).isParentOfTopLevelNodes',
        }),
        this.isParentOfTopLevelNodes()
      );
    },
    isSelected: function () {
      return t.events.selected.has(n);
    },
    isHovered: function () {
      return t.events.hovered.has(n);
    },
    isDragged: function () {
      return t.events.dragged.has(n);
    },
    get: function () {
      return r;
    },
    ancestors: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (function n(r) {
        var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = t.nodes[r];
        return i
          ? (o.push(r),
            i.data.parent
              ? ((e || (!e && 0 === a)) && (o = n(i.data.parent, o, a + 1)), o)
              : o)
          : o;
      })(r.data.parent);
    },
    descendants: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r = arguments.length > 1 ? arguments[1] : void 0;
      return (function n(a) {
        var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          d =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return (e || (!e && 0 === d)) && t.nodes[a]
          ? ('childNodes' !== r &&
              o(a)
                .linkedNodes()
                .forEach(function (e) {
                  i.push(e), (i = n(e, i, d + 1));
                }),
            'linkedNodes' !== r &&
              o(a)
                .childNodes()
                .forEach(function (e) {
                  i.push(e), (i = n(e, i, d + 1));
                }),
            i)
          : i;
      })(n);
    },
    linkedNodes: function () {
      return Object.values(r.data.linkedNodes || {});
    },
    childNodes: function () {
      return r.data.nodes || [];
    },
    isDraggable: function (n) {
      try {
        var a = r;
        return (
          c.default(!this.isTopLevelNode(), e.ERROR_MOVE_TOP_LEVEL_NODE),
          c.default(
            ie(t, a.data.parent).isCanvas(),
            e.ERROR_MOVE_NONCANVAS_CHILD
          ),
          c.default(a.rules.canDrag(a, o), e.ERROR_CANNOT_DRAG),
          !0
        );
      } catch (e) {
        return n && n(e), !1;
      }
    },
    isDroppable: function (n, a) {
      var i = Z(t.nodes, n),
        d = r;
      try {
        c.default(this.isCanvas(), e.ERROR_MOVE_TO_NONCANVAS_PARENT),
          c.default(
            d.rules.canMoveIn(
              i.map(function (e) {
                return e.node;
              }),
              d,
              o
            ),
            e.ERROR_MOVE_INCOMING_PARENT
          );
        var s = {};
        return (
          i.forEach(function (n) {
            var r = n.node,
              a = n.exists;
            if (
              (c.default(r.rules.canDrop(d, r, o), e.ERROR_MOVE_CANNOT_DROP), a)
            ) {
              c.default(!o(r.id).isTopLevelNode(), e.ERROR_MOVE_TOP_LEVEL_NODE);
              var i = o(r.id).descendants(!0);
              c.default(
                !i.includes(d.id) && d.id !== r.id,
                e.ERROR_MOVE_TO_DESCENDANT
              );
              var u = r.data.parent && t.nodes[r.data.parent];
              c.default(u.data.isCanvas, e.ERROR_MOVE_NONCANVAS_CHILD),
                c.default(
                  u || (!u && !t.nodes[r.id]),
                  e.ERROR_DUPLICATE_NODEID
                ),
                u.id !== d.id && (s[u.id] || (s[u.id] = []), s[u.id].push(r));
            }
          }),
          Object.keys(s).forEach(function (n) {
            var r = t.nodes[n];
            c.default(
              r.rules.canMoveOut(s[n], r, o),
              e.ERROR_MOVE_OUTGOING_PARENT
            );
          }),
          !0
        );
      } catch (e) {
        return a && a(e), !1;
      }
    },
    toSerializedNode: function () {
      return ae(r.data, t.options.resolver);
    },
    toNodeTree: function (e) {
      var t = [n].concat(I(this.descendants(!0, e))).reduce(function (e, t) {
        return (e[t] = o(t).get()), e;
      }, {});
      return { rootNodeId: n, nodes: t };
    },
    decendants: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (
        e.deprecationWarning('query.node(id).decendants', {
          suggest: 'query.node(id).descendants',
        }),
        this.descendants(t)
      );
    },
    isTopLevelCanvas: function () {
      return !this.isRoot() && !r.data.parent;
    },
  };
}
function de(e, t, n, r) {
  for (
    var o = { parent: e, index: 0, where: 'before' },
      a = 0,
      i = 0,
      d = 0,
      s = 0,
      c = 0,
      u = 0,
      l = 0,
      f = t.length;
    l < f;
    l++
  ) {
    var p = t[l];
    if (
      ((u = p.top + p.outerHeight),
      (s = p.left + p.outerWidth / 2),
      (c = p.top + p.outerHeight / 2),
      !((i && p.left > i) || (d && c >= d) || (a && p.left + p.outerWidth < a)))
    )
      if (((o.index = l), p.inFlow)) {
        if (r < c) {
          o.where = 'before';
          break;
        }
        o.where = 'after';
      } else
        r < u && (d = u),
          n < s
            ? ((i = s), (o.where = 'before'))
            : ((a = s), (o.where = 'after'));
  }
  return o;
}
var se = function (e) {
  return 'string' == typeof e ? e : e.name;
};
function ce(t, n) {
  var r = t.data.type,
    o = {
      id: t.id || e.getRandomId(),
      _hydrationTimestamp: Date.now(),
      data: h(
        {
          type: r,
          name: se(r),
          displayName: se(r),
          props: {},
          custom: {},
          parent: null,
          isCanvas: !1,
          hidden: !1,
          nodes: [],
          linkedNodes: {},
        },
        t.data
      ),
      info: {},
      related: {},
      events: { selected: !1, dragged: !1, hovered: !1 },
      rules: {
        canDrag: function () {
          return !0;
        },
        canDrop: function () {
          return !0;
        },
        canMoveIn: function () {
          return !0;
        },
        canMoveOut: function () {
          return !0;
        },
      },
      dom: null,
    };
  if (o.data.type === $ || o.data.type === Canvas) {
    var a = h(h({}, W), o.data.props);
    (o.data.props = Object.keys(o.data.props).reduce(function (e, t) {
      return (
        Object.keys(W).includes(t)
          ? (o.data[U[t] || t] = a[t])
          : (e[t] = o.data.props[t]),
        e
      );
    }, {})),
      (o.data.name = se((r = o.data.type))),
      (o.data.displayName = se(r)),
      o.data.type === Canvas && ((o.data.isCanvas = !0), J());
  }
  n && n(o);
  var i = r.craft;
  if (i) {
    if (
      ((o.data.displayName = i.displayName || i.name || o.data.displayName),
      (o.data.props = h(h({}, i.props || i.defaultProps || {}), o.data.props)),
      (o.data.custom = h(h({}, i.custom || {}), o.data.custom)),
      null != i.isCanvas && (o.data.isCanvas = i.isCanvas),
      i.rules &&
        Object.keys(i.rules).forEach(function (e) {
          ['canDrag', 'canDrop', 'canMoveIn', 'canMoveOut'].includes(e) &&
            (o.rules[e] = i.rules[e]);
        }),
      i.related)
    ) {
      var s = { id: o.id, related: !0 };
      Object.keys(i.related).forEach(function (e) {
        o.related[e] = function (t) {
          return d.default.createElement(
            p,
            s,
            d.default.createElement(i.related[e], t)
          );
        };
      });
    }
    i.info && (o.info = i.info);
  }
  return o;
}
const ue = (e, t, n) => {
    let { type: r, props: o } = e;
    const a = ((e, t) =>
      'object' == typeof e && e.resolvedName
        ? 'Canvas' === e.resolvedName
          ? Canvas
          : t[e.resolvedName]
        : 'string' == typeof e
        ? e
        : null)(r, t);
    if (!a) return;
    (o = Object.keys(o).reduce((e, n) => {
      const r = o[n];
      return (
        (e[n] =
          null == r
            ? null
            : 'object' == typeof r && r.resolvedName
            ? ue(r, t)
            : 'children' === n && Array.isArray(r)
            ? r.map((e) => ('string' == typeof e ? e : ue(e, t)))
            : r),
        e
      );
    }, {})),
      n && (o.key = n);
    const i = { ...d.default.createElement(a, { ...o }) };
    return { ...i, name: ne(t, i.type) };
  },
  le = (t, n) => {
    const { type: r, props: o, ...a } = t;
    c.default(
      (void 0 !== r && 'string' == typeof r) ||
        (void 0 !== r && void 0 !== r.resolvedName),
      e.ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER.replace(
        '%displayName%',
        t.displayName
      ).replace('%availableComponents%', Object.keys(n).join(', '))
    );
    const { type: i, name: d, props: s } = ue(t, n),
      {
        parent: u,
        custom: l,
        displayName: f,
        isCanvas: p,
        nodes: v,
        hidden: h,
      } = a;
    return {
      type: i,
      name: d,
      displayName: f || d,
      props: s,
      custom: l || {},
      isCanvas: !!p,
      hidden: !!h,
      parent: u,
      linkedNodes: a.linkedNodes || a._childCanvas || {},
      nodes: v || [],
    };
  },
  fe = (e, t) => {
    if (t.length < 1) return { [e.id]: e };
    const n = t.map(({ rootNodeId: e }) => e),
      r = { ...e, data: { ...e.data, nodes: n } };
    return t.reduce(
      (t, n) => {
        const r = n.nodes[n.rootNodeId];
        return {
          ...t,
          ...n.nodes,
          [r.id]: { ...r, data: { ...r.data, parent: e.id } },
        };
      },
      { [e.id]: r }
    );
  },
  pe = (e, t) => ({ rootNodeId: e.id, nodes: fe(e, t) });
function ve(n) {
  const r = n && n.options,
    o = () => ve(n);
  return {
    getDropPlaceholder: (t, r, a, i = (e) => n.nodes[e.id].dom) => {
      const d = n.nodes[r],
        s = o().node(d.id).isCanvas() ? d : n.nodes[d.data.parent];
      if (!s) return;
      const c = s.data.nodes || [],
        u = de(
          s,
          c
            ? c.reduce((t, r) => {
                const o = i(n.nodes[r]);
                if (o) {
                  const n = { id: r, ...e.getDOMInfo(o) };
                  t.push(n);
                }
                return t;
              }, [])
            : [],
          a.x,
          a.y
        ),
        l = c.length && n.nodes[c[u.index]],
        f = { placement: { ...u, currentNode: l }, error: null };
      return (
        Z(n.nodes, t).forEach(({ node: e, exists: t }) => {
          t &&
            o()
              .node(e.id)
              .isDraggable((e) => (f.error = e));
        }),
        o()
          .node(s.id)
          .isDroppable(t, (e) => (f.error = e)),
        f
      );
    },
    getOptions: () => r,
    getNodes: () => n.nodes,
    node: (e) => ie(n, e),
    getSerializedNodes() {
      const e = Object.keys(n.nodes).map((e) => [
        e,
        this.node(e).toSerializedNode(),
      ]);
      return Q(e);
    },
    getEvent: (e) =>
      (function (e, t) {
        var n = e.events[t];
        return {
          contains: function (e) {
            return n.has(e);
          },
          isEmpty: function () {
            return 0 === this.all().length;
          },
          first: function () {
            return this.all()[0];
          },
          last: function () {
            var e = this.all();
            return e[e.length - 1];
          },
          all: function () {
            return Array.from(n);
          },
          size: function () {
            return this.all().length;
          },
          at: function (e) {
            return this.all()[e];
          },
          raw: function () {
            return n;
          },
        };
      })(n, e),
    serialize() {
      return JSON.stringify(this.getSerializedNodes());
    },
    parseReactElement: (e) => ({
      toNodeTree(r) {
        let a = (function (e, n) {
            let r = e;
            return (
              'string' == typeof r &&
                (r = d.default.createElement(t.Fragment, {}, r)),
              ce({ data: { type: r.type, props: { ...r.props } } }, (e) => {
                n && n(e, r);
              })
            );
          })(e, (e, t) => {
            const o = ne(n.options.resolver, e.data.type);
            (e.data.displayName = e.data.displayName || o),
              (e.data.name = o),
              r && r(e, t);
          }),
          i = [];
        return (
          e.props &&
            e.props.children &&
            (i = d.default.Children.toArray(e.props.children).reduce(
              (e, t) => (
                d.default.isValidElement(t) &&
                  e.push(o().parseReactElement(t).toNodeTree(r)),
                e
              ),
              []
            )),
          pe(a, i)
        );
      },
    }),
    parseSerializedNode: (t) => ({
      toNode(r) {
        const a = le(t, n.options.resolver);
        c.default(a.type, e.ERROR_NOT_IN_RESOLVER);
        const i = 'string' == typeof r && r;
        return (
          i &&
            e.deprecationWarning('query.parseSerializedNode(...).toNode(id)', {
              suggest:
                'query.parseSerializedNode(...).toNode(node => node.id = id)',
            }),
          o()
            .parseFreshNode({ ...(i ? { id: i } : {}), data: a })
            .toNode(!i && r)
        );
      },
    }),
    parseFreshNode: (t) => ({
      toNode: (r) =>
        ce(t, (t) => {
          t.data.parent === e.DEPRECATED_ROOT_NODE &&
            (t.data.parent = e.ROOT_NODE);
          const o = ne(n.options.resolver, t.data.type);
          c.default(null !== o, e.ERROR_NOT_IN_RESOLVER),
            (t.data.displayName = t.data.displayName || o),
            (t.data.name = o),
            r && r(t);
        }),
    }),
    createNode(t, n) {
      e.deprecationWarning(`query.createNode(${t})`, {
        suggest: `query.parseReactElement(${t}).toNodeTree()`,
      });
      const r = this.parseReactElement(t).toNodeTree(),
        o = r.nodes[r.rootNodeId];
      return n
        ? (n.id && (o.id = n.id),
          n.data && (o.data = { ...o.data, ...n.data }),
          o)
        : o;
    },
    getState: () => n,
  };
}
var he = (function (t) {
    N(r, e.EventHandlers);
    var n = D(r);
    function r() {
      return g(this, r), n.apply(this, arguments);
    }
    return (
      m(r, [
        {
          key: 'handlers',
          value: function () {
            return {
              connect: function (e, t) {},
              select: function (e, t) {},
              hover: function (e, t) {},
              drag: function (e, t) {},
              drop: function (e, t) {},
              create: function (e, t, n) {},
            };
          },
        },
      ]),
      r
    );
  })(),
  ye = (function (t) {
    N(r, e.DerivedEventHandlers);
    var n = D(r);
    function r() {
      return g(this, r), n.apply(this, arguments);
    }
    return m(r);
  })(),
  ge = function (e) {
    e.preventDefault();
  },
  Ee = (function () {
    function t(e, n) {
      g(this, t),
        O(this, 'store', void 0),
        O(this, 'dragTarget', void 0),
        O(this, 'currentDropTargetId', void 0),
        O(this, 'currentDropTargetCanvasAncestorId', void 0),
        O(this, 'currentIndicator', null),
        O(this, 'currentTargetId', void 0),
        O(this, 'currentTargetChildDimensions', void 0),
        O(this, 'dragError', void 0),
        O(this, 'draggedNodes', void 0),
        O(this, 'onScrollListener', void 0),
        (this.store = e),
        (this.dragTarget = n),
        (this.currentDropTargetId = null),
        (this.currentDropTargetCanvasAncestorId = null),
        (this.currentTargetId = null),
        (this.currentTargetChildDimensions = null),
        (this.currentIndicator = null),
        (this.dragError = null),
        (this.draggedNodes = this.getDraggedNodes()),
        this.validateDraggedNodes(),
        (this.onScrollListener = this.onScroll.bind(this)),
        window.addEventListener('scroll', this.onScrollListener, !0),
        window.addEventListener('dragover', ge, !1);
    }
    return (
      m(t, [
        {
          key: 'cleanup',
          value: function () {
            window.removeEventListener('scroll', this.onScrollListener, !0),
              window.removeEventListener('dragover', ge, !1);
          },
        },
        {
          key: 'onScroll',
          value: function (t) {
            var n = t.target,
              r = this.store.query.node(e.ROOT_NODE).get();
            n instanceof Element &&
              r &&
              r.dom &&
              n.contains(r.dom) &&
              (this.currentTargetChildDimensions = null);
          },
        },
        {
          key: 'getDraggedNodes',
          value: function () {
            return Z(
              this.store.query.getNodes(),
              'new' === this.dragTarget.type
                ? this.dragTarget.tree.nodes[this.dragTarget.tree.rootNodeId]
                : this.dragTarget.nodes
            );
          },
        },
        {
          key: 'validateDraggedNodes',
          value: function () {
            var e = this;
            'new' !== this.dragTarget.type &&
              this.draggedNodes.forEach(function (t) {
                t.exists &&
                  e.store.query.node(t.node.id).isDraggable(function (t) {
                    e.dragError = t;
                  });
              });
          },
        },
        {
          key: 'isNearBorders',
          value: function (e, n, r) {
            return (
              e.top + t.BORDER_OFFSET > r ||
              e.bottom - t.BORDER_OFFSET < r ||
              e.left + t.BORDER_OFFSET > n ||
              e.right - t.BORDER_OFFSET < n
            );
          },
        },
        {
          key: 'isDiff',
          value: function (e) {
            return (
              !this.currentIndicator ||
              this.currentIndicator.placement.parent.id !== e.parent.id ||
              this.currentIndicator.placement.index !== e.index ||
              this.currentIndicator.placement.where !== e.where
            );
          },
        },
        {
          key: 'getChildDimensions',
          value: function (t) {
            var n = this,
              r = this.currentTargetChildDimensions;
            return this.currentTargetId === t.id && r
              ? r
              : t.data.nodes.reduce(function (t, r) {
                  var o = n.store.query.node(r).get().dom;
                  return o && t.push(h({ id: r }, e.getDOMInfo(o))), t;
                }, []);
          },
        },
        {
          key: 'getCanvasAncestor',
          value: function (e) {
            var t = this;
            if (
              e === this.currentDropTargetId &&
              this.currentDropTargetCanvasAncestorId
            ) {
              var n = this.store.query
                .node(this.currentDropTargetCanvasAncestorId)
                .get();
              if (n) return n;
            }
            return (function e(n) {
              var r = t.store.query.node(n).get();
              return r && r.data.isCanvas
                ? r
                : r.data.parent
                ? e(r.data.parent)
                : null;
            })(e);
          },
        },
        {
          key: 'computeIndicator',
          value: function (t, n, r) {
            var o = this.getCanvasAncestor(t);
            if (
              o &&
              ((this.currentDropTargetId = t),
              (this.currentDropTargetCanvasAncestorId = o.id),
              o.data.parent &&
                this.isNearBorders(e.getDOMInfo(o.dom), n, r) &&
                !this.store.query.node(o.id).isLinkedNode() &&
                (o = this.store.query.node(o.data.parent).get()),
              o)
            ) {
              (this.currentTargetChildDimensions = this.getChildDimensions(o)),
                (this.currentTargetId = o.id);
              var a = de(o, this.currentTargetChildDimensions, n, r);
              if (this.isDiff(a)) {
                var i = this.dragError;
                i ||
                  this.store.query.node(o.id).isDroppable(
                    this.draggedNodes.map(function (e) {
                      return e.node;
                    }),
                    function (e) {
                      i = e;
                    }
                  );
                var d = o.data.nodes[a.index],
                  s = d && this.store.query.node(d).get();
                return (
                  (this.currentIndicator = {
                    placement: h(h({}, a), {}, { currentNode: s }),
                    error: i,
                  }),
                  this.currentIndicator
                );
              }
            }
          },
        },
        {
          key: 'getIndicator',
          value: function () {
            return this.currentIndicator;
          },
        },
      ]),
      t
    );
  })();
O(Ee, 'BORDER_OFFSET', 10);
var me = function (e, t) {
    if (
      1 === t.length ||
      (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    ) {
      var n = t[0].getBoundingClientRect(),
        r = n.width,
        o = n.height,
        a = t[0].cloneNode(!0);
      return (
        (a.style.position = 'absolute'),
        (a.style.left = '-100%'),
        (a.style.top = '-100%'),
        (a.style.width = ''.concat(r, 'px')),
        (a.style.height = ''.concat(o, 'px')),
        (a.style.pointerEvents = 'none'),
        a.classList.add('drag-shadow'),
        document.body.appendChild(a),
        e.dataTransfer.setDragImage(a, 0, 0),
        a
      );
    }
    var i = document.createElement('div');
    return (
      (i.style.position = 'absolute'),
      (i.style.left = '-100%'),
      (i.style.top = '-100%'),
      (i.style.width = '100%'),
      (i.style.height = '100%'),
      (i.style.pointerEvents = 'none'),
      i.classList.add('drag-shadow-container'),
      t.forEach(function (e) {
        var t = e.getBoundingClientRect(),
          n = t.width,
          r = t.height,
          o = t.top,
          a = t.left,
          d = e.cloneNode(!0);
        (d.style.position = 'absolute'),
          (d.style.left = ''.concat(a, 'px')),
          (d.style.top = ''.concat(o, 'px')),
          (d.style.width = ''.concat(n, 'px')),
          (d.style.height = ''.concat(r, 'px')),
          d.classList.add('drag-shadow'),
          i.appendChild(d);
      }),
      document.body.appendChild(i),
      e.dataTransfer.setDragImage(i, e.clientX, e.clientY),
      i
    );
  },
  Oe = (function (e) {
    N(n, he);
    var t = D(n);
    function n() {
      var e;
      g(this, n);
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        O(
          _((e = t.call.apply(t, [this].concat(o)))),
          'draggedElementShadow',
          void 0
        ),
        O(_(e), 'dragTarget', void 0),
        O(_(e), 'positioner', null),
        O(_(e), 'currentSelectedElementIds', []),
        e
      );
    }
    return (
      m(n, [
        {
          key: 'onDisable',
          value: function () {
            this.options.store.actions.clearEvents();
          },
        },
        {
          key: 'handlers',
          value: function () {
            var e = this,
              t = this.options.store;
            return {
              connect: function (n, r) {
                return (
                  t.actions.setDOM(r, n),
                  e.reflect(function (e) {
                    e.select(n, r), e.hover(n, r), e.drop(n, r);
                  })
                );
              },
              select: function (n, r) {
                var o = e.addCraftEventListener(n, 'mousedown', function (n) {
                    n.craft.stopPropagation();
                    var o = [];
                    if (r) {
                      var a = t.query,
                        i = a.getEvent('selected').all();
                      (e.options.isMultiSelectEnabled(n) || i.includes(r)) &&
                        (o = i.filter(function (e) {
                          var t = a.node(e).descendants(!0),
                            n = a.node(e).ancestors(!0);
                          return !t.includes(r) && !n.includes(r);
                        })),
                        o.includes(r) || o.push(r);
                    }
                    t.actions.setNodeEvent('selected', o);
                  }),
                  a = e.addCraftEventListener(n, 'click', function (n) {
                    n.craft.stopPropagation();
                    var o = t.query.getEvent('selected').all(),
                      a = e.options.isMultiSelectEnabled(n),
                      i = e.currentSelectedElementIds.includes(r),
                      d = I(o);
                    a && i
                      ? (d.splice(d.indexOf(r), 1),
                        t.actions.setNodeEvent('selected', d))
                      : !a &&
                        o.length > 1 &&
                        t.actions.setNodeEvent('selected', (d = [r])),
                      (e.currentSelectedElementIds = d);
                  });
                return function () {
                  o(), a();
                };
              },
              hover: function (n, r) {
                var o = e.addCraftEventListener(n, 'mouseover', function (e) {
                    e.craft.stopPropagation(),
                      t.actions.setNodeEvent('hovered', r);
                  }),
                  a = null;
                return (
                  e.options.removeHoverOnMouseleave &&
                    (a = e.addCraftEventListener(n, 'mouseleave', function (e) {
                      e.craft.stopPropagation(),
                        t.actions.setNodeEvent('hovered', null);
                    })),
                  function () {
                    o(), a && a();
                  }
                );
              },
              drop: function (n, r) {
                var o = e.addCraftEventListener(n, 'dragover', function (n) {
                    if (
                      (n.craft.stopPropagation(),
                      n.preventDefault(),
                      e.positioner)
                    ) {
                      var o = e.positioner.computeIndicator(
                        r,
                        n.clientX,
                        n.clientY
                      );
                      o && t.actions.setIndicator(o);
                    }
                  }),
                  a = e.addCraftEventListener(n, 'dragenter', function (e) {
                    e.craft.stopPropagation(), e.preventDefault();
                  });
                return function () {
                  a(), o();
                };
              },
              drag: function (r, o) {
                if (!t.query.node(o).isDraggable()) return function () {};
                r.setAttribute('draggable', 'true');
                var a = e.addCraftEventListener(r, 'dragstart', function (r) {
                    r.craft.stopPropagation();
                    var a = t.query,
                      i = t.actions,
                      d = a.getEvent('selected').all(),
                      s = e.options.isMultiSelectEnabled(r);
                    e.currentSelectedElementIds.includes(o) ||
                      ((d = s ? [].concat(I(d), [o]) : [o]),
                      t.actions.setNodeEvent('selected', d)),
                      i.setNodeEvent('dragged', d);
                    var c = d.map(function (e) {
                      return a.node(e).get().dom;
                    });
                    (e.draggedElementShadow = me(
                      r,
                      c,
                      n.forceSingleDragShadow
                    )),
                      (e.dragTarget = { type: 'existing', nodes: d }),
                      (e.positioner = new Ee(e.options.store, e.dragTarget));
                  }),
                  i = e.addCraftEventListener(r, 'dragend', function (n) {
                    n.craft.stopPropagation(),
                      e.dropElement(function (e, n) {
                        'new' !== e.type &&
                          t.actions.move(
                            e.nodes,
                            n.placement.parent.id,
                            n.placement.index +
                              ('after' === n.placement.where ? 1 : 0)
                          );
                      });
                  });
                return function () {
                  r.setAttribute('draggable', 'false'), a(), i();
                };
              },
              create: function (r, o, a) {
                r.setAttribute('draggable', 'true');
                var i = e.addCraftEventListener(r, 'dragstart', function (r) {
                    var a;
                    if ((r.craft.stopPropagation(), 'function' == typeof o)) {
                      var i = o();
                      a = d.default.isValidElement(i)
                        ? t.query.parseReactElement(i).toNodeTree()
                        : i;
                    } else a = t.query.parseReactElement(o).toNodeTree();
                    (e.draggedElementShadow = me(
                      r,
                      [r.currentTarget],
                      n.forceSingleDragShadow
                    )),
                      (e.dragTarget = { type: 'new', tree: a }),
                      (e.positioner = new Ee(e.options.store, e.dragTarget));
                  }),
                  s = e.addCraftEventListener(r, 'dragend', function (n) {
                    n.craft.stopPropagation(),
                      e.dropElement(function (e, n) {
                        'existing' !== e.type &&
                          (t.actions.addNodeTree(
                            e.tree,
                            n.placement.parent.id,
                            n.placement.index +
                              ('after' === n.placement.where ? 1 : 0)
                          ),
                          a && u.default(a.onCreate) && a.onCreate(e.tree));
                      });
                  });
                return function () {
                  r.removeAttribute('draggable'), i(), s();
                };
              },
            };
          },
        },
        {
          key: 'dropElement',
          value: function (e) {
            var t = this.options.store;
            if (this.positioner) {
              var n = this.draggedElementShadow,
                r = this.positioner.getIndicator();
              this.dragTarget && r && !r.error && e(this.dragTarget, r),
                n &&
                  (n.parentNode.removeChild(n),
                  (this.draggedElementShadow = null)),
                (this.dragTarget = null),
                t.actions.setIndicator(null),
                t.actions.setNodeEvent('dragged', null),
                this.positioner.cleanup(),
                (this.positioner = null);
            }
          },
        },
      ]),
      n
    );
  })();
function Ne(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
    o = 0,
    a = 0,
    i = 0,
    d = 0,
    s = e.where;
  return (
    n
      ? n.inFlow
        ? ((i = n.outerWidth),
          (d = r),
          (o = 'before' === s ? n.top : n.bottom),
          (a = n.left))
        : ((i = r),
          (d = n.outerHeight),
          (o = n.top),
          (a = 'before' === s ? n.left : n.left + n.outerWidth))
      : t &&
        ((o = t.top + t.padding.top),
        (a = t.left + t.padding.left),
        (i =
          t.outerWidth -
          t.padding.right -
          t.padding.left -
          t.margin.left -
          t.margin.right),
        (d = r)),
    {
      top: ''.concat(o, 'px'),
      left: ''.concat(a, 'px'),
      width: ''.concat(i, 'px'),
      height: ''.concat(d, 'px'),
    }
  );
}
O(Oe, 'forceSingleDragShadow', e.isChromium() && e.isLinux());
const be = () => {
    const { indicator: n, indicatorOptions: r, enabled: o } = A((e) => ({
        indicator: e.indicator,
        indicatorOptions: e.options.indicator,
        enabled: e.options.enabled,
      })),
      a = P();
    return (
      t.useEffect(() => {
        a && (o ? a.enable() : a.disable());
      }, [o, a]),
      n
        ? d.default.createElement(e.RenderIndicator, {
            className: r.className,
            style: {
              ...Ne(
                n.placement,
                e.getDOMInfo(n.placement.parent.dom),
                n.placement.currentNode &&
                  e.getDOMInfo(n.placement.currentNode.dom),
                r.thickness
              ),
              backgroundColor: n.error ? r.error : r.success,
              transition: r.transition || '0.2s ease-in',
              ...(r.style ?? {}),
            },
            parentDom: n.placement.parent.dom,
          })
        : null
    );
  },
  Re = ({ children: e }) => {
    const n = t.useContext(k),
      r = t.useMemo(() => n.query.getOptions().handlers(n), [n]);
    return r
      ? d.default.createElement(
          j.Provider,
          { value: r },
          d.default.createElement(be, null),
          e
        )
      : null;
  },
  Te = {
    nodes: {},
    events: { dragged: new Set(), selected: new Set(), hovered: new Set() },
    indicator: null,
    options: {
      onNodesChange: () => null,
      onRender: ({ render: e }) => e,
      onBeforeMoveEnd: () => null,
      resolver: {},
      enabled: !0,
      indicator: { error: 'red', success: 'rgb(98, 196, 98)' },
      handlers: (e) =>
        new Oe({
          store: e,
          removeHoverOnMouseleave: !1,
          isMultiSelectEnabled: (e) => !!e.metaKey,
        }),
      normalizeNodes: () => {},
    },
  },
  _e = {
    methods: function (t, n) {
      return h(
        h(
          {},
          (function (t, n) {
            var r = function (n, r, a) {
                if (
                  ((function r(o, a) {
                    var i = n.nodes[o];
                    'string' != typeof i.data.type &&
                      c.default(
                        t.options.resolver[i.data.name],
                        e.ERROR_NOT_IN_RESOLVER.replace(
                          '%node_type%',
                          ''.concat(i.data.type.name)
                        )
                      ),
                      (t.nodes[o] = h(
                        h({}, i),
                        {},
                        { data: h(h({}, i.data), {}, { parent: a }) }
                      )),
                      i.data.nodes.length > 0 &&
                        (delete t.nodes[o].data.props.children,
                        i.data.nodes.forEach(function (e) {
                          return r(e, i.id);
                        })),
                      Object.values(i.data.linkedNodes).forEach(function (e) {
                        return r(e, i.id);
                      });
                  })(n.rootNodeId, r),
                  r || n.rootNodeId !== e.ROOT_NODE)
                ) {
                  var i = o(r);
                  if ('child' !== a.type)
                    i.data.linkedNodes[a.id] = n.rootNodeId;
                  else {
                    var d = a.index;
                    null != d
                      ? i.data.nodes.splice(d, 0, n.rootNodeId)
                      : i.data.nodes.push(n.rootNodeId);
                  }
                }
              },
              o = function (n) {
                c.default(n, e.ERROR_NOPARENT);
                var r = t.nodes[n];
                return c.default(r, e.ERROR_INVALID_NODEID), r;
              },
              a = function e(n) {
                var r = t.nodes[n],
                  o = t.nodes[r.data.parent];
                if (
                  (r.data.nodes &&
                    I(r.data.nodes).forEach(function (t) {
                      return e(t);
                    }),
                  r.data.linkedNodes &&
                    Object.values(r.data.linkedNodes).map(function (t) {
                      return e(t);
                    }),
                  o.data.nodes.includes(n))
                ) {
                  var a = o.data.nodes;
                  a.splice(a.indexOf(n), 1);
                } else {
                  var i = Object.keys(o.data.linkedNodes).find(function (e) {
                    return o.data.linkedNodes[e] === e;
                  });
                  i && delete o.data.linkedNodes[i];
                }
                !(function (e, t) {
                  Object.keys(e.events).forEach(function (n) {
                    var r = e.events[n];
                    r &&
                      r.has &&
                      r.has(t) &&
                      (e.events[n] = new Set(
                        Array.from(r).filter(function (e) {
                          return t !== e;
                        })
                      ));
                  });
                })(t, n),
                  delete t.nodes[n];
              };
            return {
              addLinkedNodeFromTree: function (e, t, n) {
                var i = o(t).data.linkedNodes[n];
                i && a(i), r(e, t, { type: 'linked', id: n });
              },
              add: function (t, n, o) {
                var a = [t];
                Array.isArray(t) &&
                  (e.deprecationWarning('actions.add(node: Node[])', {
                    suggest: 'actions.add(node: Node)',
                  }),
                  (a = t)),
                  a.forEach(function (e) {
                    r({ nodes: O({}, e.id, e), rootNodeId: e.id }, n, {
                      type: 'child',
                      index: o,
                    });
                  });
              },
              addNodeTree: function (e, t, n) {
                r(e, t, { type: 'child', index: n });
              },
              delete: function (r) {
                Z(t.nodes, r, { existOnly: !0, idOnly: !0 }).forEach(function (
                  t
                ) {
                  var r = t.node;
                  c.default(
                    !n.node(r.id).isTopLevelNode(),
                    e.ERROR_DELETE_TOP_LEVEL_NODE
                  ),
                    a(r.id);
                });
              },
              deserialize: function (t) {
                var r = 'string' == typeof t ? JSON.parse(t) : t,
                  o = Object.keys(r).map(function (t) {
                    var o = t;
                    return (
                      t === e.DEPRECATED_ROOT_NODE && (o = e.ROOT_NODE),
                      [
                        o,
                        n.parseSerializedNode(r[t]).toNode(function (e) {
                          return (e.id = o);
                        }),
                      ]
                    );
                  });
                this.replaceNodes(Q(o));
              },
              move: function (e, r, o) {
                var a = Z(t.nodes, e, { existOnly: !0 }),
                  i = t.nodes[r],
                  d = new Set();
                a.forEach(function (e, a) {
                  var s = e.node,
                    c = s.id,
                    u = s.data.parent;
                  n.node(r).isDroppable([c], function (e) {
                    throw new Error(e);
                  }),
                    t.options.onBeforeMoveEnd(s, i, t.nodes[u]);
                  var l = t.nodes[u].data.nodes;
                  d.add(l);
                  var f = l.indexOf(c);
                  (l[f] = '$$'),
                    i.data.nodes.splice(o + a, 0, c),
                    (t.nodes[c].data.parent = r);
                }),
                  d.forEach(function (e) {
                    var t = e.length;
                    I(e)
                      .reverse()
                      .forEach(function (n, r) {
                        '$$' === n && e.splice(t - 1 - r, 1);
                      });
                  });
              },
              replaceNodes: function (e) {
                this.clearEvents(), (t.nodes = e);
              },
              clearEvents: function () {
                this.setNodeEvent('selected', null),
                  this.setNodeEvent('hovered', null),
                  this.setNodeEvent('dragged', null),
                  this.setIndicator(null);
              },
              reset: function () {
                this.clearEvents(), this.replaceNodes({});
              },
              setOptions: function (e) {
                e(t.options);
              },
              setNodeEvent: function (e, n) {
                if (
                  (t.events[e].forEach(function (n) {
                    t.nodes[n] && (t.nodes[n].events[e] = !1);
                  }),
                  (t.events[e] = new Set()),
                  n)
                ) {
                  var r = Z(t.nodes, n, { idOnly: !0, existOnly: !0 }),
                    o = new Set(
                      r.map(function (e) {
                        return e.node.id;
                      })
                    );
                  o.forEach(function (n) {
                    t.nodes[n].events[e] = !0;
                  }),
                    (t.events[e] = o);
                }
              },
              setCustom: function (e, n) {
                Z(t.nodes, e, { idOnly: !0, existOnly: !0 }).forEach(function (
                  e
                ) {
                  return n(t.nodes[e.node.id].data.custom);
                });
              },
              setDOM: function (e, n) {
                t.nodes[e] && (t.nodes[e].dom = n);
              },
              setIndicator: function (e) {
                (e &&
                  (!e.placement.parent.dom ||
                    (e.placement.currentNode &&
                      !e.placement.currentNode.dom))) ||
                  (t.indicator = e);
              },
              setHidden: function (e, n) {
                t.nodes[e].data.hidden = n;
              },
              setProp: function (e, n) {
                Z(t.nodes, e, { idOnly: !0, existOnly: !0 }).forEach(function (
                  e
                ) {
                  return n(t.nodes[e.node.id].data.props);
                });
              },
              selectNode: function (e) {
                if (e) {
                  var n = Z(t.nodes, e, { idOnly: !0, existOnly: !0 });
                  this.setNodeEvent(
                    'selected',
                    n.map(function (e) {
                      return e.node.id;
                    })
                  );
                } else this.setNodeEvent('selected', null);
                this.setNodeEvent('hovered', null);
              },
            };
          })(t, n)
        ),
        {},
        {
          setState: function (e) {
            var n = T(this, ee);
            e(t, n);
          },
        }
      );
    },
    ignoreHistoryForActions: [
      'setDOM',
      'setNodeEvent',
      'selectNode',
      'clearEvents',
      'setOptions',
      'setIndicator',
    ],
    normalizeHistory: (e) => {
      Object.keys(e.events).forEach((t) => {
        Array.from(e.events[t] || []).forEach((n) => {
          e.nodes[n] || e.events[t].delete(n);
        });
      }),
        Object.keys(e.nodes).forEach((t) => {
          const n = e.nodes[t];
          Object.keys(n.events).forEach((t) => {
            n.events[t] &&
              e.events[t] &&
              !e.events[t].has(n.id) &&
              (n.events[t] = !1);
          });
        });
    },
  },
  De = (t, n) =>
    e.useMethods(_e, { ...Te, options: { ...Te.options, ...t } }, ve, n);
var Ce = ['events', 'data'],
  Ie = ['nodes'],
  Se = ['nodes'],
  we = ['_hydrationTimestamp', 'rules'],
  xe = ['_hydrationTimestamp', 'rules'],
  ke = function (e) {
    var t = e.events,
      n = e.data,
      r = n.nodes,
      o = n.linkedNodes,
      a = T(e, Ce),
      i = ce(l.default(e));
    return {
      node: (e = h(
        h(h({}, i), a),
        {},
        { events: h(h({}, i.events), t), dom: e.dom || i.dom }
      )),
      childNodes: r,
      linkedNodes: o,
    };
  },
  je = function (e) {
    var t = {};
    return (
      (function e(n) {
        var r = ke(n),
          o = r.node,
          a = r.childNodes,
          i = r.linkedNodes;
        (t[o.id] = o),
          a &&
            a.forEach(function (n, r) {
              var a = ke(n),
                i = a.node,
                d = a.childNodes,
                s = a.linkedNodes;
              (i.data.parent = o.id),
                (t[i.id] = i),
                (o.data.nodes[r] = i.id),
                e(
                  h(
                    h({}, i),
                    {},
                    {
                      data: h(
                        h({}, i.data),
                        {},
                        { nodes: d || [], linkedNodes: s || {} }
                      ),
                    }
                  )
                );
            }),
          i &&
            Object.keys(i).forEach(function (n) {
              var r = ke(i[n]),
                a = r.node,
                d = r.childNodes,
                s = r.linkedNodes;
              (o.data.linkedNodes[n] = a.id),
                (a.data.parent = o.id),
                (t[a.id] = a),
                e(
                  h(
                    h({}, a),
                    {},
                    {
                      data: h(
                        h({}, a.data),
                        {},
                        { nodes: d || [], linkedNodes: s || {} }
                      ),
                    }
                  )
                );
            });
      })(e),
      t
    );
  };
Object.defineProperty(exports, 'ROOT_NODE', {
  enumerable: !0,
  get: function () {
    return e.ROOT_NODE;
  },
}),
  (exports.ActionMethodsWithConfig = _e),
  (exports.Canvas = Canvas),
  (exports.CoreEventHandlers = he),
  (exports.DefaultEventHandlers = Oe),
  (exports.DerivedCoreEventHandlers = ye),
  (exports.Editor = ({ children: t, ...n }) => {
    void 0 !== n.resolver &&
      c.default(
        'object' == typeof n.resolver &&
          !Array.isArray(n.resolver) &&
          null !== n.resolver,
        e.ERROR_RESOLVER_NOT_AN_OBJECT
      );
    const r = s.useRef(n),
      o = De(r.current, (t, n, r, o, a) => {
        if (!r) return;
        const { patches: i, ...d } = r;
        for (let r = 0; r < i.length; r++) {
          const { path: s } = i[r],
            c = s.length > 2 && 'nodes' === s[0] && 'data' === s[2];
          if (
            ([e.HISTORY_ACTIONS.IGNORE, e.HISTORY_ACTIONS.THROTTLE].includes(
              d.type
            ) &&
              d.params &&
              (d.type = d.params[0]),
            ['setState', 'deserialize'].includes(d.type) || c)
          ) {
            a((e) => {
              t.options.normalizeNodes && t.options.normalizeNodes(e, n, d, o);
            });
            break;
          }
        }
      });
    return (
      s.useEffect(() => {
        o &&
          void 0 !== n.enabled &&
          o.query.getOptions().enabled !== n.enabled &&
          o.actions.setOptions((e) => {
            e.enabled = n.enabled;
          });
      }, [o, n.enabled]),
      s.useEffect(() => {
        o.subscribe(
          (e) => ({ json: o.query.serialize() }),
          () => {
            o.query.getOptions().onNodesChange(o.query);
          }
        );
      }, [o]),
      o
        ? s.createElement(
            k.Provider,
            { value: o },
            s.createElement(Re, null, t)
          )
        : null
    );
  }),
  (exports.Element = $),
  (exports.Events = Re),
  (exports.Frame = ({ children: n, json: r, data: o }) => {
    const { actions: a, query: i } = A();
    r &&
      e.deprecationWarning('<Frame json={...} />', {
        suggest: '<Frame data={...} />',
      });
    const s = t.useRef(!1);
    if (!s.current) {
      const t = o || r;
      if (t) a.history.ignore().deserialize(t);
      else if (n) {
        const t = d.default.Children.only(n),
          r = i
            .parseReactElement(t)
            .toNodeTree((n, r) => (r === t && (n.id = e.ROOT_NODE), n));
        a.history.ignore().addNodeTree(r);
      }
      s.current = !0;
    }
    return d.default.createElement(G, null);
  }),
  (exports.NodeElement = B),
  (exports.NodeHelpers = ie),
  (exports.NodeProvider = p),
  (exports.Positioner = Ee),
  (exports.QueryMethods = ve),
  (exports.connectEditor = function (e) {
    return (t) => (n) => {
      const r = e ? K(e) : K();
      return d.default.createElement(t, { ...r, ...n });
    };
  }),
  (exports.connectNode = function (e) {
    return function (t) {
      return (n) => {
        const r = F(e);
        return d.default.createElement(t, { ...r, ...n });
      };
    };
  }),
  (exports.createShadow = me),
  (exports.createTestNodes = je),
  (exports.createTestState = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.nodes,
      n = e.events;
    return h(
      h(h({}, Te), e),
      {},
      { nodes: t ? je(t) : {}, events: h(h({}, Te.events), n || {}) }
    );
  }),
  (exports.defaultElementProps = W),
  (exports.deprecateCanvasComponent = J),
  (exports.editorInitialState = Te),
  (exports.elementPropToNodeData = U),
  (exports.expectEditorState = function (e, t) {
    var n = t.nodes,
      r = T(t, Ie),
      o = e.nodes,
      a = T(e, Se);
    expect(a).toEqual(r);
    var i = Object.keys(n).reduce(function (e, t) {
        var r = T(n[t], we);
        return (e[t] = r), e;
      }, {}),
      d = Object.keys(o).reduce(function (e, t) {
        var n = T(o[t], xe);
        return (e[t] = n), e;
      }, {});
    expect(d).toEqual(i);
  }),
  (exports.serializeNode = ae),
  (exports.useEditor = K),
  (exports.useEditorStore = De),
  (exports.useEventHandler = P),
  (exports.useNode = F);
//# sourceMappingURL=index.js.map
