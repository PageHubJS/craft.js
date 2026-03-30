"undefined"!=typeof window&&(window.__CRAFTJS__||(window.__CRAFTJS__={}),window.__CRAFTJS__["@craftjs/layers"]="0.2.7");import{useCollector as e,wrapConnectorHooks as t,RenderIndicator as n,useMethods as r,ROOT_NODE as a}from"@craftjs/utils";import*as o from"react";import i,{createContext as d,useContext as c,useMemo as s,useState as l,useLayoutEffect as p,useRef as u,useEffect as f,useCallback as v}from"react";import{useEditor as g,ROOT_NODE as h,DerivedCoreEventHandlers as m,useEventHandler as y}from"@craftjs/core";import{styled as b}from"styled-components";import x from"react-contenteditable";const w=i.createContext({}),E=d({});function O(t){const{store:n}=c(E),r=e(n,t);return s((()=>({store:n,...r})),[n,r])}function C(e){const{id:n,depth:r,connectors:a}=c(w),{actions:o,...i}=O((t=>n&&t.layers[n]&&e&&e(t.layers[n]))),{children:d}=g(((e,t)=>({children:e.nodes[n]&&t.node(n).descendants()}))),l=s((()=>({toggleLayer:()=>o.toggleLayer(n),setExpandedState:e=>o.setExpandedState(n,e)})),[o,n]),p=s((()=>t({layer:e=>a.layer(e,n),drag:e=>a.drag(e,n),layerHeader:e=>a.layerHeader(e,n)})),[a,n]);return{id:n,depth:r,children:d,actions:l,connectors:p,...i}}const j=()=>{const{id:e,depth:t,children:n,expanded:r}=C((e=>({expanded:e.expanded}))),{data:a,shouldBeExpanded:o}=g(((t,n)=>{const r=n.getEvent("selected").first();return{data:t.nodes[e]&&t.nodes[e].data,shouldBeExpanded:r&&n.node(r).ancestors(!0).includes(e)}})),{actions:{registerLayer:d,toggleLayer:c},renderLayer:s,expandRootOnLoad:v}=O((e=>({renderLayer:e.options.renderLayer,expandRootOnLoad:e.options.expandRootOnLoad}))),[m,y]=l(!1);p((()=>{d(e),y(!0)}),[d,e]);const b=u(r);b.current=r;const x=u(v&&e===h);return f((()=>{!b.current&&o&&c(e)}),[c,e,o]),f((()=>{x.current&&c(e)}),[c,e]),a&&m?i.createElement("div",{className:`craft-layer-node ${e}`},i.createElement(s,{},n&&r?n.map((e=>i.createElement(L,{key:e,id:e,depth:t+1}))):null)):null},$=d(null),L=({id:e,depth:n})=>{const r=c($),{store:a}=c(E);u(a).current=a;const o=s((()=>r.createConnectorsUsage()),[r]),d=s((()=>t(o.connectors)),[o]);f((()=>(o.register(),()=>{o.cleanup()})),[o]);const{exists:l}=g((t=>({exists:!!t.nodes[e]})));return l?i.createElement(w.Provider,{value:{id:e,depth:n,connectors:d}},i.createElement(j,null)):null},P=e=>({setLayerEvent:(t,n)=>{if(null!==n&&!e.layers[n])return;const r=e.events[t];r&&n!==r&&(e.layers[r].event[t]=!1),n?(e.layers[n].event[t]=!0,e.events[t]=n):e.events[t]=null},registerLayer:t=>{e.layers[t]||(e.layers[t]={dom:null,headingDom:null,expanded:!1,id:t,event:{selected:!1,hovered:!1}})},setDOM:(t,n)=>{e.layers[t]={...e.layers[t],...n.dom?{dom:n.dom}:{},...n.headingDom?{headingDom:n.headingDom}:{}}},toggleLayer:t=>{e.layers[t].expanded=!e.layers[t].expanded},setExpandedState:(t,n)=>{e.layers[t].expanded=n},setIndicator:t=>{e.events.indicator=t}});function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function H(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(i,m);var t,n,r,a,o=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(a){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"getLayer",value:function(e){return this.options.layerStore.getState().layers[e]}},{key:"handlers",value:function(){var e=this,t=this.derived.options.store,n=this.options.layerStore;return{layer:function(r,a){n.actions.setDOM(a,{dom:r});var o=e.inherit((function(e){e.select(r,a),e.hover(r,a),e.drag(r,a)})),d=e.addCraftEventListener(r,"mouseover",(function(e){e.craft.stopPropagation(),n.actions.setLayerEvent("hovered",a)})),c=null;e.derived.options.removeHoverOnMouseleave&&(c=e.addCraftEventListener(r,"mouseleave",(function(e){e.craft.stopPropagation(),n.actions.setLayerEvent("hovered",null)})));var s=e.addCraftEventListener(r,"dragover",(function(r){r.craft.stopPropagation(),r.preventDefault();var a=i.events,o=a.indicator,d=a.currentCanvasHovered;if(d&&o){var c=e.getLayer(d.id).headingDom.getBoundingClientRect();if(r.clientY>c.top+10&&r.clientY<c.bottom-10){var s=d.data.nodes[d.data.nodes.length-1];if(!s)return void(i.events.indicator=D(D({},o),{},{placement:D(D({},o.placement),{},{index:0,where:"before",parent:d}),onCanvas:!0}));i.events.indicator=D(D({},o),{},{placement:{currentNode:t.query.node(s).get(),index:d.data.nodes.length,where:"after",parent:d},onCanvas:!0}),n.actions.setIndicator(i.events.indicator)}}})),l=e.addCraftEventListener(r,"dragenter",(function(r){r.craft.stopPropagation(),r.preventDefault();var o=i.draggedElement;if(o){var d=t.query.getDropPlaceholder(o,a,{x:r.clientX,y:r.clientY},(function(t){var n=e.getLayer(t.id);return n&&n.dom}));if(d){var c=d.placement.parent,s=e.getLayer(c.id).headingDom.getBoundingClientRect();if(i.events.currentCanvasHovered=null,t.query.node(c.id).isCanvas()&&c.data.parent){var l=t.query.node(c.data.parent).get();t.query.node(l.id).isCanvas()&&(i.events.currentCanvasHovered=c,(r.clientY>s.bottom-10&&!e.getLayer(c.id).expanded||r.clientY<s.top+10)&&(d.placement.parent=l,d.placement.currentNode=c,d.placement.index=l.data.nodes?l.data.nodes.indexOf(c.id):0,r.clientY>s.bottom-10&&!e.getLayer(c.id).expanded?d.placement.where="after":r.clientY<s.top+10&&(d.placement.where="before")))}i.events.indicator=D(D({},d),{},{onCanvas:!1}),n.actions.setIndicator(i.events.indicator)}}}));return function(){o(),d(),s(),l(),c&&c()}},layerHeader:function(e,t){n.actions.setDOM(t,{headingDom:e})},drag:function(r,a){r.setAttribute("draggable","true");var o=e.addCraftEventListener(r,"dragstart",(function(e){e.craft.stopPropagation(),i.draggedElement=a})),d=e.addCraftEventListener(r,"dragend",(function(e){e.craft.stopPropagation();var r=i.events;if(r.indicator&&!r.indicator.error){var a=r.indicator.placement;t.actions.move(i.draggedElement,a.parent.id,a.index+("after"===a.where?1:0))}i.draggedElement=null,i.events.indicator=null,n.actions.setIndicator(null)}));return function(){r.removeAttribute("draggable"),o(),d()}}}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}();k(S,"draggedElement",void 0),k(S,"events",{indicator:null,currentCanvasHovered:null});const B=({children:e})=>{const{layers:t,events:r}=O((e=>e)),{query:a}=g((e=>({enabled:e.options.enabled}))),{indicator:o}=a.getOptions(),d=s((()=>{const{indicator:e}=r;if(e){const{placement:{where:n,parent:r,currentNode:a},error:i}=e,d=a?a.id:r.id;let c;const s=i?o.error:o.success;if(e.onCanvas&&null!=t[r.id].dom){const e=t[r.id].dom.getBoundingClientRect(),n=t[r.id].headingDom.getBoundingClientRect();return{top:n.top,left:e.left,width:e.width,height:n.height,background:"transparent",borderWidth:"1px",borderColor:s}}{if(!t[d])return;const e=t[d].headingDom.getBoundingClientRect(),r=t[d].dom.getBoundingClientRect();return c="after"!==n&&a?r.top:r.top+r.height,{top:c,left:e.left,width:r.width+r.left-e.left,height:2,borderWidth:0,background:s}}}}),[r,o.error,o.success,t]);return i.createElement("div",null,r.indicator?i.createElement(n,{style:d}):null,e)},M=({children:e})=>{const{store:t}=O(),n=y(),r=s((()=>n.derive(S,{layerStore:t})),[n,t]);return i.createElement($.Provider,{value:r},i.createElement(B,null),e)},T=()=>{const{id:e}=C(),{displayName:t,actions:n}=g((t=>({displayName:t.nodes[e]&&t.nodes[e].data.custom.displayName?t.nodes[e].data.custom.displayName:t.nodes[e].data.displayName,hidden:t.nodes[e]&&t.nodes[e].data.hidden}))),[r,a]=l(!1),o=u(null),d=v((e=>{o.current&&!o.current.contains(e.target)&&a(!1)}),[]);return f((()=>()=>{window.removeEventListener("click",d)}),[d]),i.createElement(x,{html:t,disabled:!r,ref:e=>{e&&(o.current=e.el.current,window.removeEventListener("click",d),window.addEventListener("click",d))},onChange:t=>{n.setCustom(e,(e=>e.displayName=t.target.value))},tagName:"h2",onDoubleClick:()=>{r||a(!0)}})};var z;function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}var Y,q,I=function(e){return o.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 6"},e),z||(z=o.createElement("path",{d:"M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707Z"})))};function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}var J,V,Z=function(e){return o.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16},e),Y||(Y=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),q||(q=o.createElement("path",{d:"M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})))};function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var U=function(e){return o.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},e),J||(J=o.createElement("path",{className:"linked_svg__a",d:"M16.5 9h-1a.5.5 0 0 0-.5.5V15H3V3h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z"})),V||(V=o.createElement("path",{className:"linked_svg__a",d:"M16.75 1h-5.373a.4.4 0 0 0-.377.4.392.392 0 0 0 .117.28l1.893 1.895-3.52 3.521a.5.5 0 0 0 0 .707l.706.708a.5.5 0 0 0 .708 0l3.521-3.521 1.893 1.892A.39.39 0 0 0 16.6 7a.4.4 0 0 0 .4-.377V1.25a.25.25 0 0 0-.25-.25Z"})))};const X=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  background: ${e=>e.$selected?"#2680eb":"transparent"};
  color: ${e=>e.$selected?"#fff":"inherit"};
  svg {
    fill: ${e=>e.$selected?"#fff":"#808184"};
    margin-top: 2px;
  }
  .inner {
    flex: 1;
    > div {
      padding: 0px;
      flex: 1;
      display: flex;
      margin-left: ${e=>10*e.$depth}px;
      align-items: center;
      div.layer-name {
        flex: 1;
        h2 {
          font-size: 15px;
          line-height: 26px;
        }
      }
    }
  }
`,G=b.a`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform: rotate(${e=>e.$expanded?180:0}deg);
  opacity: 0.7;
  cursor: pointer;
`,K=b.a`
  width: 14px;
  height: 14px;
  margin-right: 10px;
  position: relative;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: ${e=>e.$isHidden?.2:1};
  }
  &:after {
    content: ' ';
    width: 2px;
    height: ${e=>e.$isHidden?100:0}%;
    position: absolute;
    left: 2px;
    top: 3px;
    background: ${e=>e.$selected?"#fff":"#808184"};
    transform: rotate(-45deg);
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: 0% 0%;
    opacity: ${e=>e.$isHidden?.4:1};
  }
`,Q=b.div`
  margin-left: -22px;
  margin-right: 10px;

  svg {
    width: 12px;
    height: 12px;
  }
`,ee=()=>{const{id:e,depth:t,expanded:n,children:r,connectors:{drag:a,layerHeader:o},actions:{toggleLayer:d}}=C((e=>({expanded:e.expanded}))),{hidden:c,actions:s,selected:l,topLevel:p}=g(((t,n)=>{const r=n.getEvent("selected").first()===e;return{hidden:t.nodes[e]&&t.nodes[e].data.hidden,selected:r,topLevel:n.node(e).isTopLevelCanvas()}}));return i.createElement(X,{$selected:l,ref:e=>{a(e)},$depth:t},i.createElement(K,{$selected:l,$isHidden:c,onClick:()=>s.setHidden(e,!c)},i.createElement(Z,null)),i.createElement("div",{className:"inner"},i.createElement("div",{ref:e=>{o(e)}},p?i.createElement(Q,null,i.createElement(U,null)):null,i.createElement("div",{className:"layer-name s"},i.createElement(T,null)),i.createElement("div",null,r&&r.length?i.createElement(G,{$expanded:n,onMouseDown:()=>d()},i.createElement(I,null)):null))))},te=b.div`
  background: ${e=>e.$hovered?"#f1f1f1":"transparent"};
  display: block;
  padding-bottom: ${e=>e.$hasCanvases&&e.$expanded?5:0}px;
`,ne=b.div`
  margin: 0 0 0 ${e=>e.$hasCanvases?35:0}px;
  background: ${e=>e.$hasCanvases?"rgba(255, 255, 255, 0.02)":"transparent"};
  position: relative;

  ${e=>e.$hasCanvases?'\n\n  box-shadow: 0px 0px 44px -1px #00000014;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom:5px;\n  margin-top:5px;\n  > * { overflow:hidden; }\n    &:before {\n      position:absolute;\n      left:-19px;\n      width: 2px;\n      height:100%;\n      content: " ";\n      background:#00000012;\n    }\n  ':""}
`,re=({children:e})=>{const{id:t,expanded:n,hovered:r,connectors:{layer:a}}=C((e=>({hovered:e.event.hovered,expanded:e.expanded}))),{hasChildCanvases:o}=g(((e,n)=>({hasChildCanvases:n.node(t).isParentOfTopLevelNodes()})));return i.createElement(te,{ref:e=>{a(e)},$expanded:n,$hasCanvases:o,$hovered:r},i.createElement(ee,null),e?i.createElement(ne,{$hasCanvases:o,className:"craft-layer-children"},e):null)},ae=({children:e,options:t})=>{const n=r(P,{layers:{},events:{selected:null,dragged:null,hovered:null},options:{renderLayer:re,...t}});return i.createElement(E.Provider,{value:{store:n}},i.createElement(M,null,e))},oe=({...e})=>i.createElement(ae,{options:e},i.createElement(L,{id:a,depth:0}));export{re as DefaultLayer,ee as DefaultLayerHeader,T as EditableLayerName,oe as Layers,C as useLayer};
//# sourceMappingURL=index.js.map
