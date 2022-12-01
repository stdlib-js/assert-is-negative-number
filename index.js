// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var a,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(e,t)||l.call(e,t)?(a=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=a):e[t]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,c.get),y&&i&&i.call(e,t,c.set),e};function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[_],i=_,t=null!=(o=e)&&s.call(o,i);try{e[_]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[_]=r:delete e[_],n}:function(e){return b.call(e)},m=Number,v=m.prototype.toString,g=y();function j(e){return"object"==typeof e&&(e instanceof m||(g?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function S(e){return f(e)||j(e)}function h(e){return f(e)&&e<0}function O(e){return j(e)&&e.valueOf()<0}function w(e){return h(e)||O(e)}return a(S,"isPrimitive",f),a(S,"isObject",j),a(w,"isPrimitive",h),a(w,"isObject",O),w},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNegativeNumber=t();
//# sourceMappingURL=index.js.map
