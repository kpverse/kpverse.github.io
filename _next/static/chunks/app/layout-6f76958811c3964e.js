(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{102:function(e,t,n){Promise.resolve().then(n.t.bind(n,3015,23)),Promise.resolve().then(n.bind(n,5286)),Promise.resolve().then(n.t.bind(n,6685,23)),Promise.resolve().then(n.bind(n,7052)),Promise.resolve().then(n.t.bind(n,8788,23)),Promise.resolve().then(n.t.bind(n,1969,23)),Promise.resolve().then(n.t.bind(n,9486,23))},3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(o(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y},default:function(){return _}});let r=n(1024),a=n(8533),o=r._(n(4887)),l=a._(n(2265)),i=n(1330),s=n(3453),c=n(8043),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:c,stylesheets:h}=e,m=n||t;if(m&&d.has(m))return;if(u.has(t)){d.add(m),u.get(t).then(r,c);return}let y=()=>{a&&a(),d.add(m)},v=document.createElement("script"),_=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(o?(v.innerHTML=o.__html||"",y()):l?(v.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(v.src=t,u.set(t,_)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();v.setAttribute(e,r)}"worker"===i&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",i),h&&p(h),document.body.appendChild(v)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:u,stylesheets:f,...p}=e,{updateScripts:m,scripts:y,getIsSsr:v,appDir:_,nonce:g}=(0,l.useContext)(i.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&d.has(e)&&a(),b.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...p}]),m(y)):v&&v()?d.add(t||n):v&&!v()&&h(e)),_){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let _=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5286:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437);let a="GTM-N7M5N3CW",o=e=>{void 0!==window.dataLayer?window.dataLayer.push({event:"pageview",page:e}):console.log({event:"pageview",page:e})};var l=n(4033),i=n(8475),s=n.n(i),c=n(2265);function u(){let e=(0,l.usePathname)(),t=(0,l.useSearchParams)();return(0,c.useEffect)(()=>{e&&o(e)},[e,t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=".concat(a),height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,r.jsx)(s(),{id:"gtm-script",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer', '".concat(a,"');")}})]})}},7052:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437);n(764);var a="".concat("/","about/"),o="".concat("/","dominar/"),l="".concat("/","dynamic-colors/"),i=n(1396),s=n.n(i);function c(e){let{orientation:t,runOnClick:n}=e;return(0,r.jsx)(r.Fragment,{children:[{path:o,text:"Dominar"},{path:l,text:"Dynamic Colors"},{path:a,text:"About"}].map((e,a)=>(0,r.jsx)(s(),{className:"nav-".concat(t,"-link"),href:e.path,onClick:()=>{n&&n()},children:e.text},a))})}var u=n(2265);function d(e){let{isOpen:t}=e;return(0,r.jsx)("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t?(0,r.jsx)("path",{d:"M25.7856 6.22985C25.1799 5.62407 24.2013 5.62407 23.5955 6.22985L16 13.8099L8.40444 6.21431C7.79866 5.60853 6.82009 5.60853 6.21431 6.21431C5.60853 6.82009 5.60853 7.79866 6.21431 8.40444L13.8099 16L6.21431 23.5955C5.60853 24.2013 5.60853 25.1799 6.21431 25.7856C6.82009 26.3914 7.79866 26.3914 8.40444 25.7856L16 18.1901L23.5955 25.7856C24.2013 26.3914 25.1799 26.3914 25.7856 25.7856C26.3914 25.1799 26.3914 24.2013 25.7856 23.5955L18.1901 16L25.7856 8.40444C26.3759 7.81419 26.3759 6.82009 25.7856 6.22985Z",fill:"black"}):(0,r.jsx)("path",{d:"M6.83777 15.8734C6.83777 13.9901 5.3107 12.48 3.39344 12.48C1.52706 12.48 0 13.9901 0 15.8734C0 17.7568 1.52706 19.2668 3.39344 19.2668C5.3107 19.2668 6.83777 17.7568 6.83777 15.8734ZM19.3934 15.8734C19.3934 13.9901 17.8834 12.48 16 12.48C14.1336 12.48 12.6236 13.9901 12.6236 15.8734C12.6236 17.7568 14.1336 19.2668 16 19.2668C17.8834 19.2668 19.3934 17.7568 19.3934 15.8734ZM32 15.8734C32 13.9901 30.49 12.48 28.6066 12.48C26.6893 12.48 25.1792 13.9901 25.1792 15.8734C25.1792 17.7568 26.6893 19.2668 28.6066 19.2668C30.49 19.2668 32 17.7568 32 15.8734Z",fill:"black"})})}function f(){let[e,t]=(0,u.useState)(!1);return(0,r.jsxs)("header",{className:"header ".concat(e?"nav-open":""),children:[(0,r.jsxs)("div",{className:"nav-horizontal",children:[(0,r.jsx)(s(),{className:"home-link",href:"/",onClick:()=>{t(!1)},children:(0,r.jsx)("img",{className:"home-link-icon",src:"https://cdn.jsdelivr.net/gh/patelka2211/kpverse@latest/kpverse.svg",alt:"KPVERESE"})}),(0,r.jsx)("div",{className:"nav-horizontal-links",children:(0,r.jsx)(c,{orientation:"horizontal"})}),(0,r.jsx)("div",{className:"nav-vertical-btn",onClick:()=>{t(!e)},children:(0,r.jsx)(d,{isOpen:e})})]}),(0,r.jsx)("div",{className:"nav-vertical-links ".concat(e?"":"hide"),children:(0,r.jsx)(c,{orientation:"vertical",runOnClick:()=>{t(!1)}})})]})}},764:function(){},9486:function(e){e.exports={footer:"Footer_footer__NzM_y"}},1969:function(e){e.exports={layout:"layout_layout__r87On"}},8788:function(e){e.exports={style:{fontFamily:"'__Inter_448d91', '__Inter_Fallback_448d91'",fontStyle:"normal"},className:"__className_448d91"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(6685)},4033:function(e,t,n){e.exports=n(8165)},8475:function(e,t,n){e.exports=n(3015)}},function(e){e.O(0,[685,478,596,744],function(){return e(e.s=102)}),_N_E=e.O()}]);