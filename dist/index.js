"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(g,v){
var b=require('@stdlib/assert-is-number/dist').isPrimitive;function q(r){return b(r)&&r<0}v.exports=q
});var s=i(function(d,a){
var N=require('@stdlib/assert-is-number/dist').isObject;function o(r){return N(r)&&r.valueOf()<0}a.exports=o
});var n=i(function(y,c){
var O=t(),f=s();function j(r){return O(r)||f(r)}c.exports=j
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),p=t(),x=s();m(u,"isPrimitive",p);m(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
