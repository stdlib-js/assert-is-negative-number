"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(b){throw (e=0, b)}};};var t=i(function(d,v){
var q=require('@stdlib/assert-is-number/dist').isPrimitive;function N(r){return q(r)&&r<0}v.exports=N
});var s=i(function(y,a){
var o=require('@stdlib/assert-is-number/dist').isObject;function O(r){return o(r)&&r.valueOf()<0}a.exports=O
});var n=i(function(R,c){
var f=t(),j=s();function p(r){return f(r)||j(r)}c.exports=p
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),x=t(),P=s();m(u,"isPrimitive",x);m(u,"isObject",P);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
