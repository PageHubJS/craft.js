"use strict";"undefined"!=typeof window&&(window.__CRAFTJS__||(window.__CRAFTJS__={}),window.__CRAFTJS__["@craftjs/layers"]="0.2.7"),Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@craftjs/utils"),t=require("react"),n=require("@craftjs/core"),r=require("styled-components"),a=require("react-contenteditable");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var d=o(t),s=i(t),l=o(a);const c=d.default.createContext({}),u=t.createContext({});function f(n){const{store:r}=t.useContext(u),a=e.useCollector(r,n);return t.useMemo((()=>({store:r,...a})),[r,a])}function p(r){const{id:a,depth:o,connectors:i}=t.useContext(c),{actions:d,...s}=f((e=>a&&e.layers[a]&&r&&r(e.layers[a]))),{children:l}=n.useEditor(((e,t)=>({children:e.nodes[a]&&t.node(a).descendants()}))),u=t.useMemo((()=>({toggleLayer:()=>d.toggleLayer(a),setExpandedState:e=>d.setExpandedState(a,e)})),[d,a]),p=t.useMemo((()=>e.wrapConnectorHooks({layer:e=>i.layer(e,a),drag:e=>i.drag(e,a),layerHeader:e=>i.layerHeader(e,a)})),[i,a]);return{id:a,depth:o,children:l,actions:u,connectors:p,...s}}const v=()=>{const{id:e,depth:r,children:a,expanded:o}=p((e=>({expanded:e.expanded}))),{data:i,shouldBeExpanded:s}=n.useEditor(((t,n)=>{const r=n.getEvent("selected").first();return{data:t.nodes[e]&&t.nodes[e].data,shouldBeExpanded:r&&n.node(r).ancestors(!0).includes(e)}})),{actions:{registerLayer:l,toggleLayer:c},renderLayer:u,expandRootOnLoad:v}=f((e=>({renderLayer:e.options.renderLayer,expandRootOnLoad:e.options.expandRootOnLoad}))),[g,y]=t.useState(!1);t.useLayoutEffect((()=>{l(e),y(!0)}),[l,e]);const m=t.useRef(o);m.current=o;const b=t.useRef(v&&e===n.ROOT_NODE);return t.useEffect((()=>{!m.current&&s&&c(e)}),[c,e,s]),t.useEffect((()=>{b.current&&c(e)}),[c,e]),i&&g?d.default.createElement("div",{className:`craft-layer-node ${e}`},d.default.createElement(u,{},a&&o?a.map((e=>d.default.createElement(h,{key:e,id:e,depth:r+1}))):null)):null},g=t.createContext(null),h=({id:r,depth:a})=>{const o=t.useContext(g),{store:i}=t.useContext(u);t.useRef(i).current=i;const s=t.useMemo((()=>o.createConnectorsUsage()),[o]),l=t.useMemo((()=>e.wrapConnectorHooks(s.connectors)),[s]);t.useEffect((()=>(s.register(),()=>{s.cleanup()})),[s]);const{exists:f}=n.useEditor((e=>({exists:!!e.nodes[r]})));return f?d.default.createElement(c.Provider,{value:{id:r,depth:a,connectors:l}},d.default.createElement(v,null)):null},y=e=>({setLayerEvent:(t,n)=>{if(null!==n&&!e.layers[n])return;const r=e.events[t];r&&n!==r&&(e.layers[r].event[t]=!1),n?(e.layers[n].event[t]=!0,e.events[t]=n):e.events[t]=null},registerLayer:t=>{e.layers[t]||(e.layers[t]={dom:null,headingDom:null,expanded:!1,id:t,event:{selected:!1,hovered:!1}})},setDOM:(t,n)=>{e.layers[t]={...e.layers[t],...n.dom?{dom:n.dom}:{},...n.headingDom?{headingDom:n.headingDom}:{}}},toggleLayer:t=>{e.layers[t].expanded=!e.layers[t].expanded},setExpandedState:(t,n)=>{e.layers[t].expanded=n},setIndicator:t=>{e.events.indicator=t}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(d,n.DerivedCoreEventHandlers);var t,r,a,o,i=(a=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(a);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),i.apply(this,arguments)}return t=d,(r=[{key:"getLayer",value:function(e){return this.options.layerStore.getState().layers[e]}},{key:"handlers",value:function(){var e=this,t=this.derived.options.store,n=this.options.layerStore;return{layer:function(r,a){n.actions.setDOM(a,{dom:r});var o=e.inherit((function(e){e.select(r,a),e.hover(r,a),e.drag(r,a)})),i=e.addCraftEventListener(r,"mouseover",(function(e){e.craft.stopPropagation(),n.actions.setLayerEvent("hovered",a)})),s=null;e.derived.options.removeHoverOnMouseleave&&(s=e.addCraftEventListener(r,"mouseleave",(function(e){e.craft.stopPropagation(),n.actions.setLayerEvent("hovered",null)})));var l=e.addCraftEventListener(r,"dragover",(function(r){r.craft.stopPropagation(),r.preventDefault();var a=d.events,o=a.indicator,i=a.currentCanvasHovered;if(i&&o){var s=e.getLayer(i.id).headingDom.getBoundingClientRect();if(r.clientY>s.top+10&&r.clientY<s.bottom-10){var l=i.data.nodes[i.data.nodes.length-1];if(!l)return void(d.events.indicator=b(b({},o),{},{placement:b(b({},o.placement),{},{index:0,where:"before",parent:i}),onCanvas:!0}));d.events.indicator=b(b({},o),{},{placement:{currentNode:t.query.node(l).get(),index:i.data.nodes.length,where:"after",parent:i},onCanvas:!0}),n.actions.setIndicator(d.events.indicator)}}})),c=e.addCraftEventListener(r,"dragenter",(function(r){r.craft.stopPropagation(),r.preventDefault();var o=d.draggedElement;if(o){var i=t.query.getDropPlaceholder(o,a,{x:r.clientX,y:r.clientY},(function(t){var n=e.getLayer(t.id);return n&&n.dom}));if(i){var s=i.placement.parent,l=e.getLayer(s.id).headingDom.getBoundingClientRect();if(d.events.currentCanvasHovered=null,t.query.node(s.id).isCanvas()&&s.data.parent){var c=t.query.node(s.data.parent).get();t.query.node(c.id).isCanvas()&&(d.events.currentCanvasHovered=s,(r.clientY>l.bottom-10&&!e.getLayer(s.id).expanded||r.clientY<l.top+10)&&(i.placement.parent=c,i.placement.currentNode=s,i.placement.index=c.data.nodes?c.data.nodes.indexOf(s.id):0,r.clientY>l.bottom-10&&!e.getLayer(s.id).expanded?i.placement.where="after":r.clientY<l.top+10&&(i.placement.where="before")))}d.events.indicator=b(b({},i),{},{onCanvas:!1}),n.actions.setIndicator(d.events.indicator)}}}));return function(){o(),i(),l(),c(),s&&s()}},layerHeader:function(e,t){n.actions.setDOM(t,{headingDom:e})},drag:function(r,a){r.setAttribute("draggable","true");var o=e.addCraftEventListener(r,"dragstart",(function(e){e.craft.stopPropagation(),d.draggedElement=a})),i=e.addCraftEventListener(r,"dragend",(function(e){e.craft.stopPropagation();var r=d.events;if(r.indicator&&!r.indicator.error){var a=r.indicator.placement;t.actions.move(d.draggedElement,a.parent.id,a.index+("after"===a.where?1:0))}d.draggedElement=null,d.events.indicator=null,n.actions.setIndicator(null)}));return function(){r.removeAttribute("draggable"),o(),i()}}}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),d}();x(C,"draggedElement",void 0),x(C,"events",{indicator:null,currentCanvasHovered:null});const j=({children:r})=>{const{layers:a,events:o}=f((e=>e)),{query:i}=n.useEditor((e=>({enabled:e.options.enabled}))),{indicator:s}=i.getOptions(),l=t.useMemo((()=>{const{indicator:e}=o;if(e){const{placement:{where:t,parent:n,currentNode:r},error:o}=e,i=r?r.id:n.id;let d;const l=o?s.error:s.success;if(e.onCanvas&&null!=a[n.id].dom){const e=a[n.id].dom.getBoundingClientRect(),t=a[n.id].headingDom.getBoundingClientRect();return{top:t.top,left:e.left,width:e.width,height:t.height,background:"transparent",borderWidth:"1px",borderColor:l}}{if(!a[i])return;const e=a[i].headingDom.getBoundingClientRect(),n=a[i].dom.getBoundingClientRect();return d="after"!==t&&r?n.top:n.top+n.height,{top:d,left:e.left,width:n.width+n.left-e.left,height:2,borderWidth:0,background:l}}}}),[o,s.error,s.success,a]);return d.default.createElement("div",null,o.indicator?d.default.createElement(e.RenderIndicator,{style:l}):null,r)},L=({children:e})=>{const{store:r}=f(),a=n.useEventHandler(),o=t.useMemo((()=>a.derive(C,{layerStore:r})),[a,r]);return d.default.createElement(g.Provider,{value:o},d.default.createElement(j,null),e)},$=()=>{const{id:e}=p(),{displayName:r,actions:a}=n.useEditor((t=>({displayName:t.nodes[e]&&t.nodes[e].data.custom.displayName?t.nodes[e].data.custom.displayName:t.nodes[e].data.displayName,hidden:t.nodes[e]&&t.nodes[e].data.hidden}))),[o,i]=t.useState(!1),s=t.useRef(null),c=t.useCallback((e=>{s.current&&!s.current.contains(e.target)&&i(!1)}),[]);return t.useEffect((()=>()=>{window.removeEventListener("click",c)}),[c]),d.default.createElement(l.default,{html:r,disabled:!o,ref:e=>{e&&(s.current=e.el.current,window.removeEventListener("click",c),window.addEventListener("click",c))},onChange:t=>{a.setCustom(e,(e=>e.displayName=t.target.value))},tagName:"h2",onDoubleClick:()=>{o||i(!0)}})};var P;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}var D,R,k=function(e){return s.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 6"},e),P||(P=s.createElement("path",{d:"M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707Z"})))};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}var M,N,S=function(e){return s.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16},e),D||(D=s.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),R||(R=s.createElement("path",{d:"M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})))};function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var q=function(e){return s.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},e),M||(M=s.createElement("path",{className:"linked_svg__a",d:"M16.5 9h-1a.5.5 0 0 0-.5.5V15H3V3h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z"})),N||(N=s.createElement("path",{className:"linked_svg__a",d:"M16.75 1h-5.373a.4.4 0 0 0-.377.4.392.392 0 0 0 .117.28l1.893 1.895-3.52 3.521a.5.5 0 0 0 0 .707l.706.708a.5.5 0 0 0 .708 0l3.521-3.521 1.893 1.892A.39.39 0 0 0 16.6 7a.4.4 0 0 0 .4-.377V1.25a.25.25 0 0 0-.25-.25Z"})))};const T=r.styled.div`
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
`,z=r.styled.a`
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
`,A=r.styled.a`
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
`,Y=r.styled.div`
  margin-left: -22px;
  margin-right: 10px;

  svg {
    width: 12px;
    height: 12px;
  }
`,I=()=>{const{id:e,depth:t,expanded:r,children:a,connectors:{drag:o,layerHeader:i},actions:{toggleLayer:s}}=p((e=>({expanded:e.expanded}))),{hidden:l,actions:c,selected:u,topLevel:f}=n.useEditor(((t,n)=>{const r=n.getEvent("selected").first()===e;return{hidden:t.nodes[e]&&t.nodes[e].data.hidden,selected:r,topLevel:n.node(e).isTopLevelCanvas()}}));return d.default.createElement(T,{$selected:u,ref:e=>{o(e)},$depth:t},d.default.createElement(A,{$selected:u,$isHidden:l,onClick:()=>c.setHidden(e,!l)},d.default.createElement(S,null)),d.default.createElement("div",{className:"inner"},d.default.createElement("div",{ref:e=>{i(e)}},f?d.default.createElement(Y,null,d.default.createElement(q,null)):null,d.default.createElement("div",{className:"layer-name s"},d.default.createElement($,null)),d.default.createElement("div",null,a&&a.length?d.default.createElement(z,{$expanded:r,onMouseDown:()=>s()},d.default.createElement(k,null)):null))))},F=r.styled.div`
  background: ${e=>e.$hovered?"#f1f1f1":"transparent"};
  display: block;
  padding-bottom: ${e=>e.$hasCanvases&&e.$expanded?5:0}px;
`,J=r.styled.div`
  margin: 0 0 0 ${e=>e.$hasCanvases?35:0}px;
  background: ${e=>e.$hasCanvases?"rgba(255, 255, 255, 0.02)":"transparent"};
  position: relative;

  ${e=>e.$hasCanvases?'\n\n  box-shadow: 0px 0px 44px -1px #00000014;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom:5px;\n  margin-top:5px;\n  > * { overflow:hidden; }\n    &:before {\n      position:absolute;\n      left:-19px;\n      width: 2px;\n      height:100%;\n      content: " ";\n      background:#00000012;\n    }\n  ':""}
`,V=({children:e})=>{const{id:t,expanded:r,hovered:a,connectors:{layer:o}}=p((e=>({hovered:e.event.hovered,expanded:e.expanded}))),{hasChildCanvases:i}=n.useEditor(((e,n)=>({hasChildCanvases:n.node(t).isParentOfTopLevelNodes()})));return d.default.createElement(F,{ref:e=>{o(e)},$expanded:r,$hasCanvases:i,$hovered:a},d.default.createElement(I,null),e?d.default.createElement(J,{$hasCanvases:i,className:"craft-layer-children"},e):null)},Z=({children:t,options:n})=>{const r=e.useMethods(y,{layers:{},events:{selected:null,dragged:null,hovered:null},options:{renderLayer:V,...n}});return d.default.createElement(u.Provider,{value:{store:r}},d.default.createElement(L,null,t))};exports.DefaultLayer=V,exports.DefaultLayerHeader=I,exports.EditableLayerName=$,exports.Layers=({...t})=>d.default.createElement(Z,{options:t},d.default.createElement(h,{id:e.ROOT_NODE,depth:0})),exports.useLayer=p;
//# sourceMappingURL=index.js.map
