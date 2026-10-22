// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import{isPrimitive as t,isObject as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.3-esm/index.mjs";function s(e){return t(e)&&e<0}function n(e){return i(e)&&e.valueOf()<0}function r(e){return s(e)||n(e)}e(r,"isPrimitive",s),e(r,"isObject",n);export{r as default,n as isObject,s as isPrimitive};
//# sourceMappingURL=index.mjs.map
