if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-0717e078"],(function(e){"use strict";e.setCacheNameDetails({prefix:"魔法崩坏"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.cdc173d5.js",revision:"0a4f9882889385ef549afb8eeb1c99fe"},{url:"assets/404.html.584317cd.js",revision:"99c314510777f1818b6ace1b819e66e7"},{url:"assets/404.html.5f52d4ad.js",revision:"bcc9a511a2e81a3d3b60ba1ee3a4b179"},{url:"assets/app.93bdc737.js",revision:"396c9e8a4311321348c6c3f9a1ed860d"},{url:"assets/article1.html.6db98b83.js",revision:"dfd900b1032a7cac599f1256e6447cae"},{url:"assets/article1.html.7b107075.js",revision:"99b325787c261d839083ff47b3f490ed"},{url:"assets/article10.html.73383b7d.js",revision:"4c6961534d23ff1c0447250b5e07c724"},{url:"assets/article10.html.9a19b477.js",revision:"6193d37eec99738f9a25eebefaa6da45"},{url:"assets/article11.html.7a1f43ca.js",revision:"4400501d4c42c478f0fc360b7330b2b8"},{url:"assets/article11.html.9be035ab.js",revision:"1470c68b742ced5084740654feabb836"},{url:"assets/article12.html.4f1e409d.js",revision:"d6a6b0002b892d32372e7794ec5fb5d0"},{url:"assets/article12.html.f977320a.js",revision:"e72774c1ec29dea1b1038834f5d46601"},{url:"assets/article2.html.9d234c56.js",revision:"b1314f4c23fb20b67bea8ea87fa284d1"},{url:"assets/article2.html.e1688068.js",revision:"e44412e5befe57bf7c801cd68febd657"},{url:"assets/article3.html.6494b78a.js",revision:"ca4f6816f5de4e24415a626be5475019"},{url:"assets/article3.html.82aefaeb.js",revision:"d33852ba3b959955fd5db14fa669e9d7"},{url:"assets/article4.html.1306e523.js",revision:"9aed44fe44a0a97d7797473b93272d13"},{url:"assets/article4.html.373b0d9c.js",revision:"064857ab054573952acf00eee8e7b74b"},{url:"assets/article5.html.737272fd.js",revision:"e1d01bfb920200a56ce5e4c7f0f32e56"},{url:"assets/article5.html.e536d59c.js",revision:"e307c4bfa3416477fc06b817898fb538"},{url:"assets/article6.html.119a576f.js",revision:"9e18c9ecddaf34b6be4aa7ace715cab7"},{url:"assets/article6.html.e8d10bdc.js",revision:"cacaff21154b66ceaef3975f2fbf8ac2"},{url:"assets/article7.html.ec151f6c.js",revision:"01bd15a18249e62afb800c49ad7fd586"},{url:"assets/article7.html.fc5b8fdb.js",revision:"51da5a8349389a9207a20fad02792d32"},{url:"assets/article8.html.aa503b19.js",revision:"75e7e244f716732315c2bb89fa38f03f"},{url:"assets/article8.html.b9f96348.js",revision:"23d679bc97704fe39e61d5ddc7fda66d"},{url:"assets/article9.html.049b5a8a.js",revision:"f8ae0b01b87278cb004f0516619102eb"},{url:"assets/article9.html.3fe15c59.js",revision:"727a8aac5c58dd56afd5e2e3d0d76baa"},{url:"assets/Blog.e359ea5e.js",revision:"4b036258bb7470221d6d646332ea8ca4"},{url:"assets/disable.html.5559fed8.js",revision:"7cb0100ffeb98539c721601603f5e033"},{url:"assets/disable.html.f9d80c01.js",revision:"12d70553721ab4d5dfb15cb3506a06a1"},{url:"assets/encrypt.html.195df0f1.js",revision:"13fb0ca6debc05ce99b5f06d314fa3bf"},{url:"assets/encrypt.html.5c389fc7.js",revision:"12238134b86aa413e74b74222f8710fc"},{url:"assets/giscus.es.1e066ee8.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/home.html.675d271d.js",revision:"2e3324df3ea330aef5f8a4092eb9fdac"},{url:"assets/home.html.d6c48ae5.js",revision:"47f4183973a88096cba38925f89dea98"},{url:"assets/index.html.0192d601.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.03c1b6b5.js",revision:"913d8d30072f15ff5705032618715de9"},{url:"assets/index.html.1c42b445.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.1dfa29fd.js",revision:"e5da323513c30544c87e1c4333b000ce"},{url:"assets/index.html.2552fb63.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.25a277a3.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.34cc986e.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.41a707a0.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.66bc6e05.js",revision:"6f3e39e7009905c30d708b9d62fdd077"},{url:"assets/index.html.6bd2b5ca.js",revision:"c949e03e73b371b49e2e69bc4bf488c4"},{url:"assets/index.html.6c8cb998.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.7092fa7d.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.76954aeb.js",revision:"f5e790a7dc3c19580986212293e63460"},{url:"assets/index.html.80c05339.js",revision:"a23d86b03504b8d48fd155519d9e43c7"},{url:"assets/index.html.8b15516c.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.8cc6b678.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.8d0a919a.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.912d4c2a.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.92f69360.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.94b6115d.js",revision:"eaf6979894d35f163f7ad36af050fbf7"},{url:"assets/index.html.9858b295.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.9b491685.js",revision:"6fd2e04b1607859d963b2e516b37af0e"},{url:"assets/index.html.9be2fd42.js",revision:"e6dd909eac025a1364a7cab449a69d48"},{url:"assets/index.html.b66b8c82.js",revision:"e1b0eff73d6e92cf2b9fcc8543796067"},{url:"assets/index.html.b8dfc2cf.js",revision:"127fbbbbb550c7db3930d4cc3abbd266"},{url:"assets/index.html.bf68f6de.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.c10570e2.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.c11d180c.js",revision:"6aec6311c7a2fd72752ea2ddb03e6bac"},{url:"assets/index.html.c5c5a2ad.js",revision:"1468a792097dffd8e55cf099d67fe5c4"},{url:"assets/index.html.c7f2cbc5.js",revision:"c6c6cde77dcab3e8f72d0865bc1d5102"},{url:"assets/index.html.d936640f.js",revision:"25dcec910d7bb8f6fe136facf14779ef"},{url:"assets/index.html.e11b9849.js",revision:"27c27d18baada2311056ae654dd64eb7"},{url:"assets/index.html.e2e2f02d.js",revision:"5c5d57ef34f82428c0a9e43559a22d06"},{url:"assets/index.html.e2ee23c7.js",revision:"38051c93a0831830275cc6c9cf44f1a2"},{url:"assets/index.html.e3ad1d5d.js",revision:"16e1b870947d4be377b88cf918cb5113"},{url:"assets/index.html.ec7cbad1.js",revision:"83e8500ed16ad2f31975425fa2e1ece0"},{url:"assets/index.html.f0c91393.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/index.html.fa10d583.js",revision:"81b7f8a9fbc1a5c67c3ef85477e1e7e3"},{url:"assets/intro.html.13f039dc.js",revision:"44cacf878fa0e5748304280e6588664d"},{url:"assets/intro.html.649b6454.js",revision:"91170cd8e756e2ab25c31abb54a6f483"},{url:"assets/Layout.4ca0806d.js",revision:"ff99679740e3fdf612b274508f81b662"},{url:"assets/markdown.html.018d278e.js",revision:"6a5db166b30a7a2eed724e5c900300b7"},{url:"assets/markdown.html.6545222b.js",revision:"d8d8512419e27a01c0a6f50ec8349f00"},{url:"assets/page.html.ac69dd03.js",revision:"e8b30757eddfdc79eaa75bbd95dccc01"},{url:"assets/page.html.e7164f39.js",revision:"db02b39f1cd8d69d60e98287c881f424"},{url:"assets/photoswipe.esm.bae68db6.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/SkipLink.7b88f881.js",revision:"071dc52a3e11e1b940af350b48ef67dd"},{url:"assets/style.7441fb6e.css",revision:"0ee9c2540f6080ce9b4e148304df8578"},{url:"index.html",revision:"52334ec36df398520b09609578fb9599"},{url:"404.html",revision:"bff2e44b058bcad062d333ad1615126e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map