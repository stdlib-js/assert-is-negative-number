// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=r,f=function(t,e,r){var c,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),b&&a&&a.call(t,e,r.set),t},p=e()?c:f;var b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var y=function(t){return"number"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(t){return m.call(t)},d=Object.prototype.hasOwnProperty;var g=function(t,e){return null!=t&&d.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",O=g,w=S,h=s;var P=j,T=function(t){var e,r,n;if(null==t)return h.call(t);r=t[w],e=O(t,w);try{t[w]=void 0}catch(e){return h.call(t)}return n=h.call(t),e?t[w]=r:delete t[w],n},E=_()?T:P,k=Number,x=k.prototype.toString;var A=E,G=k,N=function(t){try{return x.call(t),!0}catch(t){return!1}},V=_();var C=function(t){return"object"==typeof t&&(t instanceof G||(V?N(t):"[object Number]"===A(t)))},F=y,q=C;var z=b,B=function(t){return F(t)||q(t)},D=y,H=C;function I(t){return D(t)&&t<0}function J(t){return H(t)&&t.valueOf()<0}function K(t){return I(t)||J(t)}z(B,"isPrimitive",D),z(B,"isObject",H),b(K,"isPrimitive",I),b(K,"isObject",J);export{K as default,J as isObject,I as isPrimitive};
//# sourceMappingURL=mod.js.map
