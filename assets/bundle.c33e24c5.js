!function(a){var o={};function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=a,i.c=o,i.d=function(a,o,e){i.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:e})},i.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,o){if(1&o&&(a=i(a)),8&o)return a;if(4&o&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&o&&"string"!=typeof a)for(var n in a)i.d(e,n,function(o){return a[o]}.bind(null,n));return e},i.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(o,"a",o),o},i.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},i.p="",i(i.s=13)}([function(a,o,i){"use strict";i.d(o,"j",function(){return c}),i.d(o,"k",function(){return p}),i.d(o,"g",function(){return l}),i.d(o,"i",function(){return d}),i.d(o,"h",function(){return j}),i.d(o,"b",function(){return b}),i.d(o,"d",function(){return f}),i.d(o,"c",function(){return y}),i.d(o,"e",function(){return w}),i.d(o,"f",function(){return v}),i.d(o,"l",function(){return z}),i.d(o,"a",function(){return E});var e=i(2),n=i(4),t=i(5),s=i(9);const r=t.f,u=r.length,m=t.g.length;function c(a){return/^https?:/.test(a)}function p(a,o){try{return o?new URL(a,o):new URL(a)}catch(a){}}function l(a){const o=a.href;return!c(i=o)||i.startsWith(r)?o:r+o;var i}const k=n.f(),g=n.g(),h=g&&y(location.href);function d(a,o){let i;if(k)i=o;else if(g)i=h;else{const{doc:a}=n.e(o);i=a.baseURI}const e=p(a,i);return e?l(e):a}function j(a){const o=p(a);return o?l(o):a}function b(a){const o=a.href;return o.startsWith(r)?o.substr(u):o}function f(a,o){let i;if(g)i=h;else{const{doc:a}=n.e(o);i=a.baseURI}const e=p(a,i);return e?b(e):a}function y(a){const o=p(a);return o?b(o):a}function w(a){const o=a.indexOf("#");return-1===o?a:a.substr(0,o)}function v(a){const o=a.indexOf("://");return-1===o?a:a.substr(o+3)}function z(a,o){return a.replace(/(;\s*url=)(.+)/i,(a,i,e)=>i+d(e,o))}const x={"www.google.com":["google","gg","g"],"www.youtube.com":["youtube","yt","y"],"www.wikipedia.org":["wikipedia","wiki","wk","w"],"www.facebook.com":["facebook","fb","f"],"twitter.com":["twitter","tw","t"]},_="https://s.fqjh.cf/";let q;function E(a){const o=a.substr(u),i=p(o);if(i){const e=o.match(/\/-----GithubFromClosty-----(https?:\/\/.+)$/);if(e)return r+e[1];if(c(i.protocol)&&r+i.href===a)return}const n=a.substr(m).replace(/^-*/,""),t=function(a){if(!q){q=new Map;for(const[a,o]of Object.entries(x))for(const i of o)q.set(i,a)}const o=q.get(a);if(o)return"https://"+o+"/"}(n)||function(a){const o=c(a)?a:`http://${a}`,i=p(o);if(!i)return;const{hostname:n}=i;return n.includes(".")&&s.a(n)&&(!e.d(n)||o.includes(n))?i.href:void 0}(n);if(t)return r+t;const l=n.replace(/&/g,"%26");return r+_.replace("%s",l)}},function(a,o,i){"use strict";i.d(o,"a",function(){return s}),i.d(o,"c",function(){return r}),i.d(o,"d",function(){return u}),i.d(o,"b",function(){return m});const{getOwnPropertyDescriptor:e,defineProperty:n,apply:t}=Reflect,s={};function r(a,o,i){const e=a[o];if(!e)return!1;const n=i(e);Object.keys(e).forEach(a=>{n[a]=e[a]});const t=e.prototype;return t&&(n.prototype=t),a[o]=n,!0}function u(a,o,i,t){const s=e(a,o);return!!s&&(i&&r(s,"get",i),t&&r(s,"set",t),n(a,o,s),!0)}function m(a){function o(a,o,i,e){u(a,o,a=>(function(){const o=a.call(this);return i.call(this,o)}),a=>(function(o){(o=e.call(this,o))!==s&&a.call(this,o)}))}const i=a.Element.prototype,e=i.getAttribute,n=i.setAttribute,m={},c={},p={},l={};return{attr:function(a,i,...e){let n,u,k,g;e.forEach(e=>{const t=e.name.replace(/-(\w)/g,(a,o)=>o.toUpperCase());if(o(i,t,e.onget,e.onset),"innerText"===t)return void(c[a]=e);m[a]?(m[a].push(e),n=!0):(m[a]=[e],p[a]={},l[a]={}),k||(k=p[a],g=l[a]);const s=e.name.toLocaleLowerCase();k[s]=e.onset,g[s]=e.onget,u=!0}),!n&&u&&(r(i,"getAttribute",a=>(function(o){const i=(o+"").toLocaleLowerCase(),e=g[i];if(!e)return t(a,this,arguments);const n=this["_k"+i];if(void 0!==n)return n;const s=t(a,this,arguments);return e.call(this,s)})),r(i,"setAttribute",a=>(function(o,i){const e=(o+"").toLocaleLowerCase(),n=k[e];if(n){this["_k"+e]=i;const a=n.call(this,i);if(a===s)return;arguments[1]=a}return t(a,this,arguments)})),r(i,"setAttributeNode",a=>(function(o){return console.warn("setAttributeNode:",o,this),t(a,this,arguments)})))},addNode:function(a){const o=a.nodeType;if(1===o){const o=a,i=m[o.tagName];i&&i.forEach(a=>{!function(a,o){const i=o.name;if(!a.hasAttribute(i))return;const t=e.call(a,i),r=o.onset.call(a,t,!0);r!==s&&n.call(a,i,r)}(o,a)})}else if(3===o){const o=a.parentElement;if(o){const i=c[o.tagName];i&&function(a,o,i){const e=a.nodeValue,n=o.onset.call(i,e,!0);n!==s&&(a.nodeValue=n)}(a,i,o)}}},delNode:function(a){}}}},function(a,o,i){"use strict";i.d(o,"i",function(){return n}),i.d(o,"a",function(){return t}),i.d(o,"f",function(){return s}),i.d(o,"d",function(){return u}),i.d(o,"e",function(){return c}),i.d(o,"b",function(){return p}),i.d(o,"h",function(){return l}),i.d(o,"g",function(){return k}),i.d(o,"c",function(){return g});const e=new TextEncoder;function n(a){return e.encode(a)}function t(a,o="utf-8"){return new TextDecoder(o).decode(a)}function s(a){return/^utf-?8$/i.test(a)}const r=/^(?:\d+\.){0,3}\d+$/;function u(a){return r.test(a)}const m=new Set(["text/javascript","application/javascript","application/ecmascript","application/x-ecmascript","module"]);function c(a){return m.has(a)}function p(a){let o=0;a.forEach(a=>{o+=a.length});let i=new Uint8Array(o),e=0;return a.forEach(a=>{i.set(a,e),e+=a.length}),i}function l(a){let o=0;for(let i=0,e=a.length;i<e;i++)o=31*o+a.charCodeAt(i)>>>0;return o}function k(a,o){return("00000000"+a.toString(16)).slice(-o)}function g(){return Date.now()/1e3|0}},function(a,o,i){"use strict";i.d(o,"d",function(){return e}),i.d(o,"l",function(){return n}),i.d(o,"c",function(){return t}),i.d(o,"k",function(){return s}),i.d(o,"e",function(){return r}),i.d(o,"f",function(){return u}),i.d(o,"b",function(){return m}),i.d(o,"a",function(){return c}),i.d(o,"h",function(){return p}),i.d(o,"j",function(){return l}),i.d(o,"i",function(){return k}),i.d(o,"g",function(){return g}),i.d(o,"m",function(){return h});const e=1,n=2,t=3,s=4,r=5,u=6,m=110,c=111,p=112,l=112,k=113,g=200,h=201},function(a,o,i){"use strict";i.d(o,"a",function(){return e}),i.d(o,"c",function(){return n}),i.d(o,"b",function(){return t}),i.d(o,"h",function(){return r}),i.d(o,"f",function(){return u}),i.d(o,"g",function(){return m}),i.d(o,"d",function(){return p}),i.d(o,"e",function(){return l});const e=1,n=2,t=3;let s=0;function r(a){s=a}function u(){return s===t}function m(){return s===n}const c=new WeakMap;function p(a,o){c.set(a.Function,o)}function l(a){const o=a.constructor.constructor;return c.get(o)}},function(a,o,i){"use strict";i.d(o,"g",function(){return e}),i.d(o,"d",function(){return n}),i.d(o,"b",function(){return t}),i.d(o,"e",function(){return s}),i.d(o,"c",function(){return r}),i.d(o,"a",function(){return u}),i.d(o,"f",function(){return m});const e=function(){const a=self.__PATH__;if(a)return a;let o=location.href;const i=o.indexOf("/-----GithubFromClosty-----http");o=-1===i?o.replace(/[^\/]+$/,""):o.substr(0,i);return o.replace(/\/*$/,"/")}(),n=e+"index.html",t=e+"conf.js",s=e+"favicon.ico",r=e+"__sys__/helper.js",u=e+"__sys__/assets/",m=e+"-----GithubFromClosty-----"},function(a,o,i){"use strict";i.d(o,"a",function(){return c}),i.d(o,"b",function(){return p}),i.d(o,"d",function(){return l}),i.d(o,"c",function(){return k}),i.d(o,"e",function(){return h});i(11);let e=new Set;function n(){this.id="",this.name="",this.value="",this.domain="",this.hostOnly=!1,this.path="",this.expires=NaN,this.isExpired=!1,this.secure=!1,this.httpOnly=!1,this.sameSite=""}function t(a,o){return o===a||(a.endsWith("/")||(a+="/"),o.startsWith(a))}function s(a,o){const i=a.expires;return!isNaN(i)&&i<o}class r{constructor(){this.items=null,this.children={}}nextChild(a){return this.children[a]||(this.children[a]=new r)}getChild(a){return this.children[a]}addCookie(a){this.items?this.items.push(a):this.items=[a]}}const u=new Map,m=new r;function c(){const a=[];for(const o of u.values())o.httpOnly||a.push(o);return a}function p(a,o,i){const e=new n,r=a.split(";");for(let a=0;a<r.length;a++){let o,n;const t=r[a].trim(),s=t.indexOf("=");if(-1!==s?(o=t.substr(0,s),n=t.substr(s+1)):(o=0===a?"":t,n=0===a?t:""),0!==a)switch(o.toLocaleLowerCase()){case"expires":isNaN(e.expires)&&(e.expires=Date.parse(n));break;case"domain":"."===n[0]&&(n=n.substr(1)),e.domain=n;break;case"path":e.path=n;break;case"httponly":e.httpOnly=!0;break;case"secure":e.secure=!0;break;case"max-age":e.expires=i+1e3*+n;break;case"samesite":e.sameSite=n}else e.name=o,e.value=n}if(s(e,i)&&(e.isExpired=!0),e.name.startsWith("__Secure-")&&("https:"!==o.protocol||!e.secure))return;if(e.name.startsWith("__Host-")&&("https:"!==o.protocol||!e.secure||""!==e.domain||"/"!==e.path))return;if(e.secure&&"http:"===o.protocol)return;const u=o.hostname;if(e.domain){if(m=e.domain,(c=u)!==m&&!c.endsWith("."+m))return void console.warn("[jsproxy] invalid cookie domain! `%s` ⊄ `%s`",e.domain,u)}else e.domain=u,e.hostOnly=!0;var m,c;const p=o.pathname;if(e.path){if(!t(e.path,p))return void console.warn("[jsproxy] invalid cookie path! `%s` ⊄ `%s`",e.path,p)}else e.path=p;return e.id=(e.secure?";":"")+e.name+";"+e.domain+e.path,e}function l(a){const o=a.id,i=u.get(o);if(i)a.isExpired?(u.delete(o),i.isExpired=!0):(t=a,(n=i).id=t.id,n.name=t.name,n.value=t.value,n.domain=t.domain,n.hostOnly=t.hostOnly,n.path=t.path,n.expires=t.expires,n.isExpired=t.isExpired,n.secure=t.secure,n.httpOnly=t.httpOnly,n.sameSite=t.sameSite),e.add(i);else{const i=a.domain.split(".");let n=i.length,t=m;do{t=t.nextChild(i[--n])}while(0!==n);t.addCookie(a),u.set(o,a),e.add(a)}var n,t}function k(a){const o=[],i=Date.now(),e=a.hostname,n=a.pathname,r="https:"===a.protocol,u=e.split(".");let c=u.length,p=m;do{if(!(p=p.getChild(u[--c])))break;const a=p.items;if(a)for(let e=0;e<a.length;e++){const u=a[e];if(!r&&u.secure)continue;if(u.hostOnly&&0!==c)continue;if(!t(u.path,n))continue;if(u.isExpired)continue;if(s(u,i)){u.isExpired=!0;continue}let m=u.value;u.name&&(m=u.name+"="+m),o.push(m)}}while(0!==c);return o.join("; ")}let g;async function h(a){g=a;const o=Date.now();await g.enum("cookie",a=>(s(a,o)?g.delete("cookie",a.id):l(a),!0)),setInterval(d,3e3)}async function d(){if(0===e.size)return;const a=e;e=new Set;for(const o of a)o.isExpired?await g.delete("cookie",o.id):isNaN(o.expires)||await g.put("cookie",o)}},function(a,o,i){"use strict";i.d(o,"a",function(){return u}),i.d(o,"c",function(){return m}),i.d(o,"b",function(){return c}),i.d(o,"d",function(){return p});var e=i(0),n=i(2);let t,s;function r(a,o){let i=0;for(const{weight:e,host:n}of s[o])if((i+=e)>a)return n}function u(a,o){return`${o}${function(a){return/^(localhost|127\.\d+\.\d+\.\d+)([:\/]|$)/.test(a)}(a)?"":"s"}://${a}/${o}`}function m(a,o){let i=t.node_default;return 2===o&&(i=t.node_acc),r(a,i)}function c(a,o){let i="https";switch(a.protocol){case"wss:":break;case"ws:":i="http";break;default:return null}const s=e.f(e.e(a.href));return o.url__=i+"://"+s,o.ver__=t.ver,u(r(n.h(a.href),t.node_default),"ws")+"?"+new URLSearchParams(o)}function p(a){t=a,s={};for(const[o,i]of Object.entries(a.node_map)){const a=[];let e=0;for(const[o,n]of Object.entries(i.lines))e+=n,a.push({host:o,weight:n});for(const o of a)o.weight=o.weight/e*4294967295>>>0;a.sort((a,o)=>o.weight-a.weight),s[o]=a}}},function(a,o,i){"use strict";i.d(o,"a",function(){return e});class e{constructor(){this._promise=new Promise((a,o)=>{this._resolve=a,this._reject=o})}wait(){return this._promise}notify(a){this._resolve(a)}abort(a){this._reject(a)}}},function(a,o,i){"use strict";var e=i(2);i.d(o,"a",function(){return s});const n=new Map,t=new Set("youtu.be".split(","));function s(a){let o=n.get(a);return void 0!==o?o:(o=Object(e.d)(a)?a:function(a){if(r(a))return a;let o=0;for(;;){if(-1===(o=a.indexOf(".",o+1)))return"";const i=a.substr(o+1);if(r(i))return i}}(a),n.set(a,o),o)}function r(a){return t.has(a)}},function(a,o,i){"use strict";i.d(o,"b",function(){return n}),i.d(o,"a",function(){return t});var e=i(2);function n(a){let o=!1;return a=(a=a.replace(/(\b)location(\b)/g,(a,i,e)=>(o=!0,i+"__location"+e))).replace(/postMessage\s*\(/g,a=>(o=!0,a+"...(self.__set_srcWin?__set_srcWin():[]), ")),o?a:null}function t(a,o){const i=e.a(a,o),t=n(i);return null!==t?e.i(t):o&&!e.f(o)?e.i(i):null}},function(a,o,i){"use strict";i.d(o,"a",function(){return n});var e=i(8);class n{constructor(a){this._name=a,this._db=null}_getStore(a,o){return this._db.transaction(a,o).objectStore(a)}open(a){const o=new e.a,i=indexedDB.open(this._name);return i.onsuccess=(e=>{const n=i.result;this._db=n,n.onclose=(o=>{console.warn("[jsproxy] indexedDB disconnected, reopen..."),this.open(a)}),o.notify()}),i.onerror=(a=>{console.warn("req.onerror:",a),o.abort(i.error)}),i.onupgradeneeded=(o=>{const e=i.result;for(const[o,i]of Object.entries(a))e.createObjectStore(o,i)}),o.wait()}close(){this._db.close()}get(a,o){const i=new e.a,n=this._getStore(a,"readonly").get(o);return n.onsuccess=(a=>{i.notify(n.result)}),n.onerror=(a=>{i.abort(n.error)}),i.wait()}put(a,o){const i=new e.a,n=this._getStore(a,"readwrite").put(o);return n.onsuccess=(a=>{i.notify()}),n.onerror=(a=>{i.abort(n.error)}),i.wait()}delete(a,o){const i=new e.a,n=this._getStore(a,"readwrite").delete(o);return n.onsuccess=(a=>{i.notify()}),n.onerror=(a=>{i.abort(n.error)}),i.wait()}enum(a,o,...i){const n=new e.a,t=this._getStore(a,"readonly").openCursor(...i);return t.onsuccess=(a=>{const{result:i}=t;i?!1!==o(i.value)&&i.continue():n.notify()}),t.onerror=(a=>{n.abort(t.error)}),n.wait()}}},function(a,o,i){"use strict";i.r(o);var e=i(0),n=i(7),t=i(4),s=i(1);const{defineProperty:r,setPrototypeOf:u}=Object;function m(a,o){r(a,"__location",{get:()=>o,set(i){console.log("[jsproxy] %s set location: %s",a,i),o.href=i}})}const{apply:c,defineProperty:p,ownKeys:l,getOwnPropertyDescriptor:k}=Reflect,g=void 0;function h(a,o,i){const e=a[o];if(!e)return;const n=i.length,t={getItem:s,setItem:r,removeItem:u,clear:function(){m().forEach(u)},key:function(a){const o=m()[0|a];if(o===g)return null;return o},constructor:e.constructor,toString:()=>e.toString(),[Symbol.toStringTag]:"Storage",get length(){return m().length}};function s(a){return e.getItem(i+a)}function r(a,o){e.setItem(i+a,o)}function u(a){return e.removeItem(i+a)}function m(){const a=[],o=l(e);for(let e=0;e<o.length;e++){const t=o[e];"string"==typeof t&&(t.startsWith(i)&&a.push(t.substr(n)))}return a}const c=new Proxy(e,{get(a,i){const e=t[i];if(e!==g)return e;console.log("[jsproxy] %s get: %s",o,i);const n=s(i);return null===n?g:n},set(a,i,e){if(!(i in t))return console.log("[jsproxy] %s set: %s = %s",o,i,e),r(i,e),!0;t[i]=e},deleteProperty:(a,i)=>(console.log("[jsproxy] %s del: %s",o,i),u(i),!0),has:(a,e)=>(console.log("[jsproxy] %s has: %s",o,e),"string"==typeof e&&i+e in a),ownKeys:a=>m(),getOwnPropertyDescriptor(a,o){if("string"==typeof o)return k(e,i+o)}});p(a,o,{value:c})}i.d(o,"init",function(){return b});const{apply:d,construct:j}=Reflect;function b(a,o){!function(a,o){const i=o+"$",n=i.length;function t(a){return a.substr(n)}function r(a){return function(){const o=a.call(this);return o&&t(o)}}h(a,"localStorage",i),h(a,"sessionStorage",i);const u=a.StorageEvent.prototype;function m(a){return function(o){return arguments.length>0&&(arguments[0]=i+o),c(a,this,arguments)}}s.d(u,"key",r),s.d(u,"url",a=>(function(){const o=a.call(this);return e.c(o)}));const p=a.IDBFactory.prototype;s.c(p,"open",m),s.c(p,"databases",a=>(async function(){const o=await c(a,this,arguments),i=[];for(const a of o)"."!==a.name[0]&&(a.name=t(a.name),i.push(a));return i})),s.c(p,"deleteDatabase",m);const l=a.IDBDatabase.prototype;s.d(l,"name",r);const k=a.CacheStorage.prototype;s.c(k,"open",m),s.c(k,"keys",a=>(async function(){const o=await c(a,this,arguments),i=[];for(const a of o)"."!==a[0]&&i.push(t(a));return i})),s.c(k,"delete",m),s.c(a,"openDatabase",m)}(a,o);!function(a){const o=a.location;let i;function n(a){return new URL(e.b(a))}const t={get href(){return n(o).href},get protocol(){return n(o).protocol},get host(){return n(o).host},get hostname(){return n(o).hostname},get port(){return n(o).port},get pathname(){return n(o).pathname},get search(){return n(o).search},get hash(){return n(o).hash},get origin(){return n(o).origin},toString(){return this.href},toLocaleString(){return this.href},get ancestorOrigins(){if(!i){i=[];let o=a;for(;(o=o.parent)!==top;){const a=n(o.location);i.unshift(a.origin)}}return i},set href(a){console.log("[jsproxy] set location.href:",a),o.href=e.i(a,this)},set protocol(a){console.log("[jsproxy] set location.protocol:",a);const i=n(o);i.href=a,o.href=e.g(i)},set host(a){console.log("[jsproxy] set location.host:",a);const i=n(o);i.host=a,o.href=e.g(i)},set hostname(a){console.log("[jsproxy] set location.hostname:",a);const i=n(o);i.hostname=a,o.href=e.g(i)},set port(a){console.log("[jsproxy] set location.port:",a);const i=n(o);i.port=a,o.href=e.g(i)},set pathname(a){console.log("[jsproxy] set location.pathname:",a);const i=n(o);i.pathname=a,o.href=e.g(i)},set search(a){o.search=a},set hash(a){o.hash=a},reload(){return console.warn("[jsproxy] location.reload"),o.reload(...arguments)},replace(a){return a&&(console.warn("[jsproxy] location.replace:",a),arguments[0]=e.i(a,this)),o.replace(...arguments)},assign(a){return a&&(console.warn("[jsproxy] location.assign:",a),arguments[0]=e.i(a,this)),o.assign(...arguments)}},s=o.constructor.prototype,r=u(t,s);m(a,r);const c=a.Document;c&&m(c.prototype,r)}(a);const i=a.PerformanceEntry.prototype;s.d(i,"name",a=>(function(){const o=a.call(this);return/^https?:/.test(o)?e.c(o):o}));const r=a.XMLHttpRequest.prototype;function p(o){s.c(a,o,a=>(function(i){return i&&(console.log("[jsproxy] new %s: %s",o,i),arguments[0]=e.i(i,this)),j(a,arguments)}))}s.c(r,"open",a=>(function(o,i){return i&&(arguments[1]=e.i(i,this)),d(a,this,arguments)})),s.d(r,"responseURL",a=>(function(o){const i=a.call(this);return e.d(i,this)})),s.c(a,"fetch",a=>(function(o){if(o)if(o.url){const a=e.h(o.url);arguments[0]=new Request(a,o)}else arguments[0]=e.i(o,o);return d(a,this,arguments)})),s.c(a,"WebSocket",a=>(function(o){const i=e.k(o);if(i){const{ori:a}=t.e(this);if(a){const o={origin:a.origin};arguments[0]=n.b(i,o)}}return j(a,arguments)})),p("Worker"),p("SharedWorker"),s.c(a,"importScripts",a=>(function(...o){const i=o.map(e.i);return console.log("[jsproxy] importScripts:",i),d(a,this,i)}))}},function(a,o,i){"use strict";i.r(o);var e,n=i(4);"onclick"in(e=self)?function(a){if(n.h(n.a),a===top){let o;a.__init__=function(a){e.init(a),console.log("[jsproxy] child page inited.",a.location.href)},a.__set_srcWin=function(i){return o=i||a,[]},a.__get_srcWin=function(){const a=o;return o=null,a};const e=i(14);e.init(a),console.log("[jsproxy] top page inited")}else top.__init__(a),a.__set_srcWin=function(){return top.__set_srcWin(a)}}(e):"onfetch"in e?(n.h(n.b),i(15)):function(a){n.h(n.c),i(12).init(a,location.origin),a.__set_srcWin=function(){return[]}}(e)},function(a,o,i){"use strict";i.r(o),i.d(o,"init",function(){return g});var e=i(3),n=i(7),t=i(2),s=i(0),r=i(1),u=i(6),m=i(10),c=i(4),p=i(12);const{apply:l}=Reflect;function k(a,o){const i=a.document,e=i.head,n=i.getElementsByTagName("base")[0];i.__baseElem=n;const t=new WeakSet;function s(a){if(t.has(a))return;t.add(a);const i=a.childNodes;for(let a=0,o=i.length;a<o;a++)s(i[a]);o.addNode(a)}function r(a){t.delete(a);const i=a.childNodes;for(let a=0,o=i.length;a<o;a++)r(i[a]);o.delNode(a),a===n&&(e.insertBefore(n,e.firstChild),console.warn("[jsproxy] base elem restored"))}new a.MutationObserver(function(a){a.forEach(a=>{a.addedNodes.forEach(s),a.removedNodes.forEach(r)})}).observe(i,{childList:!0,subtree:!0})}function g(a){if(!a)return;try{a.x}catch(a){return void console.warn("not same origin")}const o=a.document,i=c.e(a.Math);if(i){const{doc:e,domHook:n}=i;return void(e!==o&&(k(a,n),i[1]=o))}const{location:h,navigator:d}=a,j=new URL(o.baseURI),b=r.b(a);c.d(a,{loc:h,doc:o,ori:j,domHook:b}),p.init(a,j.origin),k(a,b);const f=d.serviceWorker,y=f.controller;function w(a,o){y&&y.postMessage([a,o])}let v;!function(){const a=o.currentScript;if(!a)return;const i=+a.dataset.id;i?(v=function(){w(e.f,i)},w(e.e,i),w(e.d)):console.warn("[jsproxy] missing page id")}(),f.addEventListener("message",a=>{const[o,i]=a.data;switch(o){case e.k:i.forEach(u.d);break;case e.l:i.cookies.forEach(u.d),n.d(i.conf),v();break;case e.i:n.d(i)}a.stopImmediatePropagation()},!0),f.startMessages&&f.startMessages();const z=a.ServiceWorkerContainer.prototype;function x(o){const i=a.History.prototype;r.c(i,o,a=>(function(i,e,n){console.log("[jsproxy] history.%s: %s",o,n);const{loc:t,doc:r}=c.e(this);if(r&&n){const a=s.k(n,r.baseURI);if(a){const i=s.b(t),e=new URL(i);if(e.origin!==a.origin)throw Error(`Failed to execute '${o}' on 'History': A history state object with URL '${n}' cannot be created in a document with origin '${e.origin}' and URL '${i}'.`);arguments[2]=s.g(a)}}return l(a,this,arguments)}))}z&&(r.c(z,"register",a=>(function(){return console.warn("access serviceWorker.register blocked"),new Promise(function(){})})),r.c(z,"getRegistration",a=>(function(){return console.warn("access serviceWorker.getRegistration blocked"),new Promise(function(){})})),r.c(z,"getRegistrations",a=>(function(){return console.warn("access serviceWorker.getRegistrations blocked"),new Promise(function(){})}))),x("pushState"),x("replaceState"),r.c(a,"open",a=>(function(o){return o&&(arguments[0]=s.i(o,o)),l(a,this,arguments)}));const _=a.frames;a.frames=new Proxy(_,{get(a,o){if("number"==typeof o){console.log("get frames index:",o);const a=_[o];return g(a),a}return _[o]}}),r.c(d,"registerProtocolHandler",a=>(function(o,i,e){return console.log("registerProtocolHandler:",arguments),l(a,this,arguments)}));const q=a.Document.prototype;let E=j.hostname;function S(a){return function(){const o=a.call(this);return o&&s.c(o)}}r.d(q,"domain",a=>(function(){return E}),a=>(function(o){console.log("[jsproxy] set document.domain:",o),E=o,a.call(this,h.hostname)})),r.d(q,"cookie",a=>(function(){const{ori:a}=c.e(this);return u.c(a)}),a=>(function(a){const{ori:o}=c.e(this),i=u.b(a,o,Date.now());i&&(u.d(i),w(e.c,i))})),r.d(q,"referrer",S),r.d(q,"URL",S),r.d(q,"documentURI",S);const R=a.Node.prototype;r.d(R,"baseURI",S);const L=a.MessageEvent.prototype;r.d(L,"origin",a=>(function(){const{ori:a}=c.e(this);return a.origin})),r.c(a,"postMessage",a=>(function(o,i){const e=top.__get_srcWin()||this;return i&&"*"!==i&&(arguments[1]="*"),l(a,e,arguments)}));const O=a.HTMLMetaElement.prototype;function M(a,o,i){b.attr(a,o,{name:i,onget(a){return null===a?"":s.d(a,this)},onset(a){return""===a?a:s.i(a,this)}})}b.attr("META",O,{name:"http-equiv",onget:a=>a,onset(a){let o;switch(a.toLowerCase()){case"refresh":(o=s.l(this.content,this))!==a&&(console.warn("[jsproxy] meta redir"),this.content=o);break;case"content-security-policy":console.warn("[jsproxy] meta csp removed"),this.remove();break;case"content-type":this.remove()}return a}},{name:"charset",onget:a=>a,onset:a=>"utf-8"});const P=a.HTMLAnchorElement.prototype;M("A",P,"href");const T=a.HTMLAreaElement.prototype;M("AREA",T,"href");const W=a.HTMLFormElement.prototype;M("FORM",W,"action");const A=a.HTMLScriptElement.prototype,N=a.HTMLLinkElement.prototype;"http:"===j.protocol&&(M("SCRIPT",A,"src"),M("LINK",N,"href")),M("EMBED",a.HTMLEmbedElement.prototype,"src"),M("OBJECT",a.HTMLObjectElement.prototype,"data");const $=a.HTMLIFrameElement.prototype;M("IFRAME",$,"src"),M("FRAME",a.HTMLFrameElement.prototype,"src");const U=a.HTMLBaseElement.prototype;function D(a){function o(o){r.d(a,o,a=>(function(){return new URL(this.href)[o]}),a=>(function(a){const i=new URL(this.href);i[o]=a,this.href=i.href}))}o("protocol"),o("hostname"),o("host"),o("port"),o("pathname"),o("origin")}b.attr("BASE",U,{name:"href",onget(a){return this.__href||a},onset(a){const o=this.ownerDocument.__baseElem;if(!o||o===this)return a;console.log("[jsproxy] baseURI updated:",a);const i=s.k(a,o.href);return o.href=i.href,this.__href=a,""}}),r.d($,"contentWindow",a=>(function(){const o=a.call(this);return g(o),o})),r.d($,"contentDocument",a=>(function(){const o=a.call(this);return o&&g(o.defaultView),o})),D(P),D(T),r.c(W,"submit",a=>(function(){return this.action=this.action,l(a,this,arguments)}));const I=a.HTMLElement.prototype;r.c(I,"click",a=>(function(){let o=this;if(!o.isConnected){for(;o;){const a=o.tagName;if("A"===a||"AREA"===a){o.href=o.href;break}o=o.parentNode}return l(a,this,arguments)}}));const H=new WeakMap,C=new WeakMap;b.attr("SCRIPT",A,{name:"charset",onget(a){return C.get(this)||a},onset(a){return t.f(a)||(a="utf-8"),C.set(this,a),a}},{name:"integrity",onget(a){return H.get(this)||""},onset(a){return H.set(this,a),""}},{name:"innerText",onget:a=>a,onset(a,o){const i=F(this,a);return null===i?o?r.a:a:i}}),r.d(A,"text",a=>(function(){return a.call(this)}),a=>(function(o){const i=F(this,o);null===i&&a.call(this,o),a.call(this,i)}));const B=new WeakSet;function F(a,o){const i=a.type;return i&&!t.e(i)?null:B.has(a)?null:(B.add(a),m.b(o))}function J(a){const i=new WeakSet;o.addEventListener(a.substr(2),o=>{!function o(e){if(!i.has(e)&&(i.add(e),1==e.nodeType)){if(e[a]){const o=e.getAttribute(a);if(o){const i=m.b(o);i&&(e[a]=i,console.log("[jsproxy] jsfilter onevent:",a))}}o(e.parentNode)}}(o.target)},!0)}J("onerror"),J("onload"),J("onclick")}},function(a,o,i){"use strict";i.r(o);var e=i(5),n=i(7),t=i(0),s=i(2),r=i(6),u=i(9);const m="https://cdn.jsdelivr.net/npm/jsproxy-cache-01@0.0.";let c=-1,p=new Map,l=new Set;async function k(a){const o=a.assets_cdn+a.direct_host_list,i=await fetch(o),e=await i.text();for(const a of e.split("\n"))a&&"#"!==a[0]&&l.add(a)}async function g(a){const o=a.static_boost;if(!o||!o.enable)return;const i=o.ver;if(c>=i)return;c=i,console.log("[jsproxy] cdn cache ver:",i);const e=await fetch(m+i+"/full"),n=await e.arrayBuffer(),t=new Uint32Array(n);let s=0;for(let a=0;a<=i;a++){const o=t[s++];for(let i=0;i<o;i++){const o=t[s++];p.set(o,a)}}}function h(a){return l.has(a)}async function d(a){try{const o=await fetch(a,{referrerPolicy:"no-referrer"}),{status:i}=o;if(200===i||206===i)return o;console.warn("direct status:",i,a)}catch(o){console.warn("direct fail:",a)}}function j(a){return p.get(a)}async function b(a,o){try{return await async function(a,o){const i=s.g(a,8),e=await fetch(m+o+"/"+i+".txt");if(200!==e.status)throw"bad status: "+e.status;const n=await e.arrayBuffer(),t=new Uint8Array(n),r=t[0]<<8|t[1],u=t.subarray(2,2+r),c=s.a(u),p=JSON.parse(c),l=t.subarray(2+r);return p.date=(new Date).toUTCString(),new Response(l,{headers:p})}(a,o)}catch(a){console.warn("cdn fail:",a)}}var f=i(11);const y=location.origin+"/",w=!0;let v,z,x=!0;function _(a){z=a,function(a){Promise.all([g(a),k(a)])}(a)}function q(a){return v.get("url-cache",a)}async function E(a,o,i,e){await v.put("url-cache",{url:a,host:o,info:i,expires:e})}const S=/[\x00-\x08\x0a-\x1f\x22\x28\x29\x3a\x3c\x3e\x3f\x40\x5b\x5c\x5d\x7b\x7d\x7f]/;function R(a,o,i){const e=new Headers,n={"--ver":z.ver,"--mode":a.mode,"--type":a.destination||"",origin:""};x&&(n["--aceh"]="1"),a.headers.forEach((a,o)=>{"user-agent"!==o&&(!function(a,o){return"content-type"===a?"application/x-www-form-urlencoded"===o||"multipart/form-data"===o||"text/plain"===o:"accept"===a||"accept-language"===a||"content-language"===a?o.length<256&&!S.test(o):void 0}(o,a)?n[o]=a:e.set(o,a))}),n.origin&&(n.origin=i.origin);const s=a.referrer;return s&&(n.referer=s===y?i.origin+"/":t.c(s)),n.cookie=function(a,o,i){const e=i.credentials;if("omit"===e)return"";if("same-origin"===e&&u.a(a.hostname)!==u.a(o.hostname))return"";return r.c(a)}(o,i,a),{reqHdr:e,reqMap:n}}function L(a,o){a.referrer="/?"+new URLSearchParams(o)}const O=5;async function M(a,o,i){const{method:e}=a,m={mode:"cors",method:e};if("POST"===e&&!a.bodyUsed)if(a.body)m.body=a.body;else{const o=await a.arrayBuffer();o.byteLength>0&&(m.body=o)}if(a.signal&&(m.signal=a.signal),!t.j(o.protocol)){return{res:await fetch(a)}}const c=o.href,p=s.h(c);let l="",k="";const{reqHdr:g,reqMap:f}=R(a,o,i);for(m.headers=g;"GET"===e;){const a=await q(c);if(a&&a.host){if(s.c()<a.expires){l=a.host,k=a.info;break}}if(h(o.host)){console.log("direct hit:",c);const a=await d(c);if(a)return E(c,"","",0),{res:a}}const i=j(p);if(i>=0){console.log("cdn hit:",c);const a=await b(p,i);if(a)return E(c,"","",0),{res:a}}break}let y,v,z=1;l&&(z=0);for(let a=0;a<O;a++){0===a&&l||(l=n.c(p,z));const i=t.e(o.href);let e=n.a(l,"http")+"/"+i;k?f["--raw-info"]=k:delete f["--raw-info"],y=null;try{f["--level"]=z,L(m,f),y=await fetch(e,m)}catch(a){console.warn("fetch fail:",e);break}if(v=y.headers,x&&v.has("--t")&&(x=!1,delete f["--aceh"]),v.has("--switched")){k=v.get("--raw-info"),z++;continue}const s=v.get("--error");if(!s)break;console.warn("[jsproxy] cfworker fail:",s),k="",z=0}if(!y)return;const{status:_,headers:S,cookieStrArr:M}=function(a){const o=a.headers;let i=a.status;const e=[],n=new Headers;return o.forEach((a,o)=>{if("access-control-allow-origin"===o||"access-control-expose-headers"===o)return;if("--s"===o)return void(i=+a);if("--t"===o)return;const t=o.match(/^\d+-(.+)/);t?"set-cookie"===(o=t[1])?e.push(a):n.append(o,a):(o.startsWith("--")&&(o=o.substr(2)),"set-cookie"!==o?n.set(o,a):e.push(a))}),{status:i,headers:n,cookieStrArr:e}}(y);if("GET"===e&&200===_){const a=function(a){const o=a.get("cache-control");if(o){if(/no-cache/i.test(o))return-1;const a=o.match(/(?:^|,\s*)max-age=["]?(\d+)/i);if(a){const o=+a[1];if(o>0)return o}}const i=a.get("expires");if(i){const a=Date.parse(i);if(a>0)return(a-Date.now())/1e3|0}return 0}(S);if(a>=0){E(c,l,k,s.c()+a+1e3)}}const P=S.get("refresh");if(P){const a=t.l(P,c);a!==P&&(console.log("[jsproxy] http refresh:",P),S.set("refresh",a))}let T;if(M.length){const a=function(a,o,i){if(!w){const a=u.a(o.hostname);if(u.a(i.hostname)!==a)return}const e=[],n=Date.now();for(const i of a){const a=r.b(i,o,n);a&&(r.d(a),a.httpOnly||e.push(a))}return e}(M,o,i);a.length&&(T=a)}return{res:y,status:_,headers:S,cookies:T}}var P=i(3),T=i(10);let W;const A=s.i(`if (typeof importScripts === 'function' && !self.window && !self.__PATH__) {\n  self.__PATH__ = '${e.g}';\n  importScripts('${e.c}');\n}\n`);const N=" ".repeat(500),$="'self' 'unsafe-inline' file: data: blob: mediastream: filesystem: chrome-extension-resource: ";var U=i(8);const D=3e5;let I;const H=5,C=self,B=C.clients;let F;function J(a,o,i){a?a.postMessage([o,i]):console.warn("invalid target",o,i)}let G=0;const V=new Map;function K(a,o){const i=V.get(a);if(!i)return void console.warn("[jsproxy] unknown page id:",a);const[e,n]=i;o?(V.delete(a),e.notify(!0)):clearTimeout(n)}function X(a,o=200){return new Response(a,{status:o,headers:{"content-type":"text/html; charset=utf-8"}})}function Y(a,o,i){const n=a.body.getReader();let t=!1;const r=new ReadableStream({async pull(a){if(!t){t=!0;const o=++G,n=function(a,o){const i=e.f+a.origin+"/favicon.ico",n=W.inject_html||"";return s.i(`\x3c!-- JS PROXY HELPER --\x3e\n<!doctype html>\n<link rel="icon" href="${i}" type="image/x-icon">\n<meta http-equiv="content-security-policy" content="frame-src ${$}; object-src ${$}">\n<base href="${a.href}">\n<script data-id="${o}" src="${e.c}"><\/script>\n${n}\n\x3c!-- PADDING ${N} --\x3e\n\n`)}(i,o);a.enqueue(n),await function(a){const o=new U.a,i=setTimeout(i=>{V.delete(a),o.notify(!1)},2e3);return V.set(a,[o,i]),o.wait()}(o)||console.warn("[jsproxy] page wait timeout. id: %d url: %s",o,i.href)}const o=await n.read();o.done?a.close():a.enqueue(o.value)}});return new Response(r,o)}async function Q(a,o,i){const e=await B.matchAll({type:"window"});for(const n of e)"top-level"===n.frameType&&(i&&n.id===i||J(n,a,o))}const Z=new Map;async function aa(a,o,i,e){const n=await M(a,o,i);if(!n)return X("load fail");let{res:r,status:u,headers:m,cookies:c}=n;c&&Q(P.k,c),u||(u=r.status||200);let p=!0;m||(m=r.headers,p=!1);const l=(a,o)=>{p||(m=new Headers(m),p=!0),m.set(a,o)},k=m.get("gateway-err--");if(k)return function(a,o,i){let e="";const{msg:n,addr:t,url:s}=JSON.parse(a);switch(o){case 204:switch(n){case"ORIGIN_NOT_ALLOWED":e="当前域名不在服务器外链白名单";break;case"CIRCULAR_DEPENDENCY":e="当前请求出现循环代理";break;case"SITE_MOVE":e=`当前站点移动到: <a href="${s}">${s}</a>`}break;case 500:e="代理服务器内部错误";break;case 502:e=t?`代理服务器无法连接网站 ${i.origin} (${t})`:`代理服务器无法解析域名 ${i.host}`;break;case 504:e=`代理服务器连接网站超时 ${i.origin}`,t&&(e+=` (${t})`)}return X(e)}(k,u,o);const g={status:u,headers:m};if(101===u||204===u||205===u||304===u)return new Response(null,g);if(301===u||302===u||303===u||307===u||308===u){const n=m.get("location"),s=n&&t.k(n,o);if(s){if("follow"===a.redirect)return++e===H?X("重定向过多",500):aa(a,s,i,e);l("location",t.g(s))}return new Response(null,g)}const h=m.get("content-type")||"",[,d,j]=h.toLocaleLowerCase().match(/([^;]*)(?:.*?charset=['"]?([^'"]+))?/),b=a.destination;if("script"===b||"worker"===b||"sharedworker"===b){const a=function(a,o){const i=new Uint8Array(a),e=T.a(i,o)||i;return s.b([A,e])}(await r.arrayBuffer(),j);return l("content-type","text/javascript"),new Response(a,g)}return"navigate"===a.mode&&"text/html"===d?Y(r,g,o):new Response(r.body,g)}async function oa(a,o){const i=a.clientId;let e;i&&(e=Z.get(i)||await async function(a){const o=await B.get(a);if(!o)return;const i=t.c(o.url);return Z.set(a,i),i}(i)),e||(e=o.href);const n=new URL(e);try{return await aa(a.request,o,n,0)}catch(a){return console.error(a),X("前端脚本错误<br><pre>"+a.stack+"</pre>",500)}}let ia,ea;async function na(){ia=new f.a(".sys"),await ia.open({"url-cache":{keyPath:"url"},cookie:{keyPath:"id"}}),await async function(a){v=a}(ia),await r.e(ia)}function ta(a,o){if(!o&&I){if(a.ver<=I.ver)return;a.node_map[I.node_default]?a.node_default=I.node_default:console.warn("default node %s -> %s",I.node_default,a.node_default),Q(P.i,I)}!function(a){W=a}(a),n.d(a),_(a),F=function(a){const o={};if(!a)return o;for(const[i,e]of Object.entries(a))o[i]=e;return o}(a.url_handler),async function(a){const o=JSON.stringify(a),i=await caches.open(".sys"),e=new Request("/conf.json"),n=new Response(o);i.put(e,n)}(a),I=a}async function sa(){const a=await fetch("conf.js"),o=await a.text();self.jsproxy_config=ta,Function(o)()}async function ra(){if(ea){const a=new U.a;return ea.push(a),a.wait()}let a;ea=[];try{a=await async function(){const a=await caches.open(".sys"),o=new Request("/conf.json"),i=await a.match(o);if(i)return i.json()}()}catch(a){console.warn("load conf fail:",a)}a||(a=self.__CONF__),a?ta(a):a=await sa(),setInterval(sa,D),ea.forEach(a=>a.notify()),ea=null}C.addEventListener("fetch",a=>{a.respondWith(async function(a){I||await ra(),ia||await na();const o=a.request,i=t.e(o.url);if(i===e.g||i===e.d){let a=I.assets_cdn+I.index_path;return I.index_path||(a=I.assets_cdn+"index_v3.html"),X((await fetch(a)).body)}if(i===e.b||i===e.e)return fetch(i);if(i===e.c)return fetch(self.__FILE__);if(i.startsWith(e.a)){const a=i.substr(e.a.length);return fetch(I.assets_cdn+a)}if("navigate"===o.mode){const a=t.a(i);if(a)return Response.redirect(a,301)}let n=t.c(i);const s=F[n];if(s){const{redir:a,content:o,replace:i}=s;if(a)return Response.redirect("/-----GithubFromClosty-----"+a);if(o)return X(o);i&&(n=i)}const r=t.k(n);return r?oa(a,r):X("invalid url: "+n,500)}(a))}),C.addEventListener("message",a=>{const[o,i]=a.data,e=a.source;switch(o){case P.c:r.d(i),Q(P.k,[i],e.id);break;case P.d:J(e,P.l,{cookies:r.a(),conf:I});break;case P.e:K(i,!1);break;case P.f:K(i,!0);break;case P.a:I?J(e,P.j,I):ra().then(a=>{J(e,P.j,I)});break;case P.b:ta(i,!0),Q(P.i,I);break;case P.h:sa();break;case P.g:J(e,P.m),sa()}}),C.addEventListener("install",a=>{console.log("oninstall:",a),a.waitUntil(C.skipWaiting())}),C.addEventListener("activate",a=>{console.log("onactivate:",a),Q(P.m,1),a.waitUntil(B.claim())}),console.log("[jsproxy] sw inited")}]);
