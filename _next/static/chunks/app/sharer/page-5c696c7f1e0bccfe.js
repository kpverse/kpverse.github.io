(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{7106:function(t,e,n){Promise.resolve().then(n.t.bind(n,6685,23)),Promise.resolve().then(n.bind(n,1603)),Promise.resolve().then(n.bind(n,8446)),Promise.resolve().then(n.t.bind(n,3699,23)),Promise.resolve().then(n.t.bind(n,2569,23))},1603:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var s=n(7437),i=n(2759),a=n(1396),r=n.n(a),l=n(2265),c=n(2569),o=n.n(c);function p(){let[t,e]=(0,l.useState)(""),[n,i]=(0,l.useState)(!0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{id:o()["activation-chkbx"],children:[(0,s.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(t){let{checked:e}=t.target;e?i(!0):i(void 0)}}),(0,s.jsxs)("div",{style:{marginLeft:16},children:["Keep it selected, if you would like to"," ",(0,s.jsx)("strong",{children:"activate Sharer button"})," on your website or web app."]})]}),(0,s.jsx)("input",{id:o()["color-input"],className:void 0===t?o()["invalid-color"]:void 0,type:"text",placeholder:"Sharer theme hex color (optional)",onKeyUp:function(t){let{value:n}=t.target;if(""===n.trim()){e(n===n.trim()?"":void 0);return}let s=function(t){if(/^#[0-9A-Fa-f]{6}$/i.test(t))return t.toLowerCase()}(n.trim());e(null==s?void 0:s.replace("#",""))}}),(0,s.jsx)("textarea",{id:o()["script-tags"],value:["<!-- Sharer scripts start -->",'<script src="https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/DynamicColors.js"></script>','<script src="https://cdn.jsdelivr.net/gh/patelka2211/dominar@1.2.4/Dominar.js"></script>','<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>','<script src="https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/Sharer.js"></script>',n||t?'<script defer id="sharer-utility-js" class="'.concat([n?"activate-button":"",t&&""!==t.trim()?"set-color-".concat(t):""].join(" "),'" src="https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/utility.js"></script>'):"","<!-- Sharer scripts end -->"].join("")}),(0,s.jsx)("button",{className:o()["copy-btn"],onClick:async function(t){t.preventDefault();let e=t.target,n=document.getElementById(o()["script-tags"]);try{await navigator.clipboard.writeText(n.value),e.innerHTML="Code copied \uD83D\uDC4D\uD83C\uDFFB",setTimeout(()=>{e.innerHTML="Copy code"},5e3),setTimeout(()=>{alert('Paste this code as high in the "<head>" of the page as possible.')},100)}catch(t){e.innerHTML="Unable to copy",setTimeout(()=>{e.innerHTML="Try again"},5e3),n.focus(),n.select(),setTimeout(()=>{alert("Unable to copy the code. Try to manually copy the selected code.")},100)}},children:"Copy code"})]})}function d(){let[t,e]=(0,l.useState)("script");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("hr",{className:o()["thin-line"]}),(0,s.jsx)(r(),{href:"#install",id:"install",className:o()["install-link"],children:"Install as"}),(0,s.jsxs)("div",{className:o()["btn-box"],children:[(0,s.jsx)("button",{className:[o()["usage-btns"],"package"===t?o()["btn-selected"]:""].join(" "),onClick:function(){e("package")},children:"NPM package"}),(0,s.jsxs)("button",{className:[o()["usage-btns"],"script"===t?o()["btn-selected"]:""].join(" "),onClick:function(){e("script")},children:[(0,s.jsx)("strong",{children:"<script>"})," tag"]})]}),"package"===t?(0,s.jsx)(r(),{className:o()["npm-pkg-link"],href:"https://npmjs.com/package/@patelka2211/sharer/",target:"_blank",children:(0,s.jsx)("img",{src:i.Z+"npm-pkg-badge.svg",alt:""})}):(0,s.jsx)(s.Fragment,{}),"script"===t?(0,s.jsx)(p,{}):(0,s.jsx)(s.Fragment,{})]})}},2759:function(t,e){"use strict";e.Z="https://cdn.jsdelivr.net/gh/patelka2211/kpverse@latest/"},8446:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var s=n(7437),i=n(8742),a=n(1794),r=n.n(a),l=n(7852),c=n.n(l);function o(t){let{innerHTML:e,className:n}=t;return(0,s.jsx)("button",{className:[c().className,n||r()["share-btn"]].join(" "),onClick:function(){(0,i.bA)()},children:e||"Share this page"})}},2569:function(t){t.exports={main:"style_main__8wsvt","intro-video":"style_intro-video__xg5fJ","library-name":"style_library-name__HVs_v",tagline:"style_tagline__YVfZb","feedback-link":"style_feedback-link__BYFdW","thin-line":"style_thin-line___8BWR","install-link":"style_install-link__lS9Cb","btn-box":"style_btn-box__6GPIk","usage-btns":"style_usage-btns__ly8t2","btn-selected":"style_btn-selected__iw8mO","npm-pkg-link":"style_npm-pkg-link__emxJG","activation-chkbx":"style_activation-chkbx__Dy6NT","color-input":"style_color-input__L1DUq","invalid-color":"style_invalid-color__CAbII","script-tags":"style_script-tags__14KuB","copy-btn":"style_copy-btn__BP5Dd"}},1794:function(t){t.exports={"share-btn":"SharerComponent_share-btn__iWPBY"}},1396:function(t,e,n){t.exports=n(6685)}},function(t){t.O(0,[337,685,363,478,596,744],function(){return t(t.s=7106)}),_N_E=t.O()}]);