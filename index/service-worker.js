if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const t=s=>e(s,r),u={module:{uri:r},exports:n,require:t};i[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(c(...s),n)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"nsgs"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/index.html",revision:"a2937c284882d92202b60625339775fb"},{url:"/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/manifest.json",revision:"b00d08f3deb3cf1b34368bed053c57ec"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/static/css/522.2263af89.css",revision:null},{url:"/static/css/551.e718993d.css",revision:null},{url:"/static/css/682.867cbcf5.css",revision:null},{url:"/static/css/685.1449fba0.css",revision:null},{url:"/static/css/872.d2f3e63e.css",revision:null},{url:"/static/css/app.4b8c0c04.css",revision:null},{url:"/static/js/522.f928fa70.js",revision:null},{url:"/static/js/523.c2085bc8.js",revision:null},{url:"/static/js/551.d36c5b93.js",revision:null},{url:"/static/js/682.ab994e8a.js",revision:null},{url:"/static/js/685.ae7ff4c9.js",revision:null},{url:"/static/js/71.f7147c0e.js",revision:null},{url:"/static/js/872.3a65c182.js",revision:null},{url:"/static/js/app.8ffd4b90.js",revision:null},{url:"/static/js/chunk-vendors.59e402ea.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
