if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const b=e=>a(e,i),c={module:{uri:i},exports:r,require:b};s[i]=Promise.all(d.map((e=>c[e]||b(e)))).then((e=>(f(...e),r)))}}define(["./workbox-0717e078"],(function(e){"use strict";e.setCacheNameDetails({prefix:"魔法崩坏"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.4f55f6ef.js",revision:"c85dfae4ca970ff417bd5716dfdbf181"},{url:"assets/404.html.5f52d4ad.js",revision:"bcc9a511a2e81a3d3b60ba1ee3a4b179"},{url:"assets/404.html.c2c5882b.js",revision:"d905cde39fecf9a42712272691ff605d"},{url:"assets/app.821b4245.js",revision:"844e966799c28037dd1416e1f382bdc3"},{url:"assets/Blog.e3aed960.js",revision:"c86624fc30c6495579962456f0be4447"},{url:"assets/giscus.es.1e066ee8.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/home.html.0476b6c6.js",revision:"c2371c8b1f3c59214bccf234ba241419"},{url:"assets/home.html.675d271d.js",revision:"2e3324df3ea330aef5f8a4092eb9fdac"},{url:"assets/index.cecffef2.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.0e5829fb.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.2378a0be.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.23fda77e.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.27efe737.js",revision:"f1204da8a8096c2cc193448527a40c7d"},{url:"assets/index.html.338d7d18.js",revision:"52b1936e55a675a2c72532278a1f5be1"},{url:"assets/index.html.36bc225a.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.58e0c13c.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.616393ba.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.6bd2b5ca.js",revision:"c949e03e73b371b49e2e69bc4bf488c4"},{url:"assets/index.html.76954aeb.js",revision:"f5e790a7dc3c19580986212293e63460"},{url:"assets/index.html.7fbf7a45.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.83ae97de.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.94b6115d.js",revision:"eaf6979894d35f163f7ad36af050fbf7"},{url:"assets/index.html.a6114137.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.c5c5a2ad.js",revision:"1468a792097dffd8e55cf099d67fe5c4"},{url:"assets/index.html.c7069bcb.js",revision:"70336fe18f0121a6dee4fb7e3bab3df6"},{url:"assets/index.html.c7f2cbc5.js",revision:"c6c6cde77dcab3e8f72d0865bc1d5102"},{url:"assets/index.html.d936640f.js",revision:"25dcec910d7bb8f6fe136facf14779ef"},{url:"assets/index.html.e11b9849.js",revision:"27c27d18baada2311056ae654dd64eb7"},{url:"assets/index.html.e2e2f02d.js",revision:"5c5d57ef34f82428c0a9e43559a22d06"},{url:"assets/index.html.e3ad1d5d.js",revision:"16e1b870947d4be377b88cf918cb5113"},{url:"assets/index.html.e75cd78f.js",revision:"ad14a7cec05966c6ec6fc4f9f8615ef3"},{url:"assets/Layout.a3d139a0.js",revision:"4f8f7b1db6e31c3918e8cfa8eeda7333"},{url:"assets/photoswipe.esm.bae68db6.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.3996a0b9.js",revision:"ee433e80e753d2aaa55b250b3d1730b4"},{url:"assets/style.15890344.css",revision:"59d41f563720fe04cdca6000035e544a"},{url:"assets/updatelog.html.a5755f2d.js",revision:"62f4a7e0d36d714baec1aa584e531fa6"},{url:"assets/updatelog.html.da14a039.js",revision:"08e60e080b245eadfe458f0959441685"},{url:"assets/第一节.html.6a411d21.js",revision:"16ff0dfbb4f8c7d9a6c41dbbdf8c1ad9"},{url:"assets/第一节.html.b465915e.js",revision:"4450978f4874d71e95d79dcf16880937"},{url:"index.html",revision:"64031f3daed5456117e604e653ef9bb6"},{url:"404.html",revision:"294eb64590ac08c19d34bc4ab482ebb1"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
