(function(e){function t(t){for(var r,c,s=t[0],i=t[1],a=t[2],d=0,l=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac40e":"8e140c33","chunk-2d0c4a74":"233e6442","chunk-2d0c5018":"5945dbf1","chunk-2d0c96cd":"043b2212","chunk-3fd527de":"0f7e8f92"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3fd527de":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ac40e":"31d6cfe0","chunk-2d0c4a74":"31d6cfe0","chunk-2d0c5018":"31d6cfe0","chunk-2d0c96cd":"31d6cfe0","chunk-3fd527de":"36f9af0b"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var a=u[s],d=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){a=l[s],d=a.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var l=new Error;a=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/simon/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"control-panel"},[e._v(" Раунд: "+e._s(e.round)+" "),n("ul",{staticClass:"difficulty"},e._l(e.difficulty,(function(t,r){return n("li",{key:r},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.current_speed,expression:"current_speed"}],attrs:{type:"radio"},domProps:{value:t.speed,checked:e._q(e.current_speed,t.speed)},on:{change:function(n){e.current_speed=t.speed}}}),e._v(" "+e._s(t.name)+" ")])])})),0)]),n("div",{staticClass:"simon"},[n("div",{staticClass:"simon__sectors"},e._l(e.sectors,(function(t,r){return n("div",{key:r,staticClass:"simon__sector",class:{simon__sector_active:t.active},on:{click:function(t){return e.setValue(r)}}})})),0),n("button",{on:{click:e.start}},[e._v("Start")])])])},o=[],u=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("04d3"),n("159b"),function(){return n.e("chunk-3fd527de").then(n.bind(null,"cd1e"))}),i=null;function a(e,t){return Math.floor(Math.random()*(t-e+1))+e}var d={components:{AppSector:s},data:function(){return{sectors:[{active:!1},{active:!1},{active:!1},{active:!1}],sequence:[],round:0,cursor:0,difficulty:[{name:"hard",speed:400},{name:"normal",speed:1e3},{name:"easy",speed:1500}],current_speed:1500,current_audio:null,process_game:!1}},methods:{start:function(){this.reset(),this.process_game=!0,this.updateSequence()},setValue:function(e){var t=this;this.process_game&&this.sequence.length&&(this.sequence[this.cursor]===e?(this.blink(this.cursor),this.cursor++,i&&clearTimeout(i),this.cursor<this.sequence.length?i=setTimeout((function(){t.reset()}),this.current_speed):setTimeout((function(){t.cursor=0,t.updateSequence()}),1e3)):this.reset())},updateSequence:function(){this.process_game&&(this.round++,this.sequence.push(a(0,3)),this.autoBlink(0))},autoBlink:function(e){var t=this;this.blink(e),setTimeout((function(){var n=e+1,r=n<t.sequence.length;r&&t.autoBlink(n)}),500)},blink:function(e){var t=this.sequence[e],n=this.sectors[t],r=new Audio(n.audio);this.current_audio=r,r.play(),n.active=!0,setTimeout((function(){n.active=!1,r.pause()}),500)},reset:function(){this.sequence=[],this.round=0,this.cursor=0,this.process_game=!1,i&&clearTimeout(i),this.current_audio&&this.current_audio.pause()}},mounted:function(){this.sectors.forEach(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n("7618")("./".concat(r,".mp3"));case 2:c=e.sent,t.audio=c.default;case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},l=d,f=(n("5c0b"),n("2877")),p=Object(f["a"])(l,c,o,!1,null,null,null),h=p.exports,m=n("2f62");r["a"].use(m["a"]);var v=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:v,render:function(e){return e(h)}}).$mount("#app"),r["a"].config.devtools=!0},"5c0b":function(e,t,n){"use strict";n("9c0c")},7618:function(e,t,n){var r={"./0.mp3":["58a5","chunk-2d0c96cd"],"./1.mp3":["3c6d","chunk-2d0c4a74"],"./2.mp3":["3cf8","chunk-2d0c5018"],"./3.mp3":["196f","chunk-2d0ac40e"]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n.t(c,7)}))}c.keys=function(){return Object.keys(r)},c.id="7618",e.exports=c},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.d469b5b1.js.map