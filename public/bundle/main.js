(()=>{var e,t,r,n,o={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var d=2&n&&r;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".main.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="webpack-pyodide-demo:",a.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var d,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){d=p;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var s=(t,n)=>{d.onerror=d.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),c&&document.head.appendChild(d)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),d=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,d,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);c&&c(a)}for(t&&t(r);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[i[l]]=0},r=self.webpackChunkwebpack_pyodide_demo=self.webpackChunkwebpack_pyodide_demo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),async function(){const e=await a.e(729).then(a.t.bind(a,729,23));(await e.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.1a1/full/"})).runPython('\n      import js\n\n      main_div = js.document.getElementById("status")\n      if main_div:\n        main_div.innerHTML = "Loaded!"\n\n      div = js.document.createElement("div")\n      div.innerHTML = "<h1>Hello Pyodide! This element was created from Python</h1>"\n      js.document.body.prepend(div)\n  ')}()})();