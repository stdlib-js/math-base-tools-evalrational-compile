import*as r from"https://deno.land/std@0.90.0/path/mod.ts";import{Buffer as t}from"https://deno.land/std@0.90.0/node/buffer.ts";!globalThis.Buffer&&Object.defineProperty(globalThis,"Buffer",{value:t,enumerable:!1,writable:!0,configurable:!0}),!globalThis.global&&Object.defineProperty(globalThis,"global",{value:globalThis,writable:!1,enumerable:!1,configurable:!0});import e from"path";import n from"fs";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return i({},"x",{}),!0}catch(r){return!1}},a=Object.defineProperty,f=Object.prototype,l=f.toString,c=f.__defineGetter__,s=f.__defineSetter__,v=f.__lookupGetter__,p=f.__lookupSetter__;var b=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===l.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(v.call(r,t)||p.call(r,t)?(n=r.__proto__,r.__proto__=f,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(r,t,e.get),u&&s&&s.call(r,t,e.set),r},y=a,g=b,m=u()?y:g;var d=function(r,t,e){m(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},h=d,j=n.readFile;var _=function(){var r,t;for(r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);j.apply(null,r)},w=n.readFileSync;var S=function(r,t){var e;try{e=arguments.length>1?w(r,t):w(r)}catch(r){return r}return e},E=_;h(E,"sync",S);var T=E;var P=function(r){return"string"==typeof r};var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return N&&"symbol"==typeof Symbol.toStringTag},x=Object.prototype.toString,I=x;var A=function(r){return I.call(r)},B=Object.prototype.hasOwnProperty;var V=function(r,t){return null!=r&&B.call(r,t)},G="function"==typeof Symbol?Symbol.toStringTag:"",F=V,C=G,D=x;var R=A,L=function(r){var t,e,n;if(null==r)return D.call(r);e=r[C],t=F(r,C);try{r[C]=void 0}catch(t){return D.call(r)}return n=D.call(r),t?r[C]=e:delete r[C],n},M=O()?L:R,k=String.prototype.valueOf;var Q=M,$=function(r){try{return k.call(r),!0}catch(r){return!1}},U=O();var X=function(r){return"object"==typeof r&&(r instanceof String||(U?$(r):"[object String]"===Q(r)))},Y=P,q=X;var z=h,H=function(r){return Y(r)||q(r)},J=X;z(H,"isPrimitive",P),z(H,"isObject",J);var K=H,W=K.isPrimitive,Z=/[-\/\\^$*+?.()|[\]{}]/g;var rr=function(r){var t,e;if(!W(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(e=r.length-1;e>=0&&"/"!==r[e];e--);return void 0===e||e<=0?r.replace(Z,"\\$&"):(t=(t=r.substring(1,e)).replace(Z,"\\$&"),r=r[0]+t+r.substring(e))},tr=/./;var er=function(r){return"boolean"==typeof r},nr=Boolean.prototype.toString;var or=M,ir=function(r){try{return nr.call(r),!0}catch(r){return!1}},ur=O();var ar=function(r){return"object"==typeof r&&(r instanceof Boolean||(ur?ir(r):"[object Boolean]"===or(r)))},fr=er,lr=ar;var cr=h,sr=function(r){return fr(r)||lr(r)},vr=ar;cr(sr,"isPrimitive",er),cr(sr,"isObject",vr);var pr="object"==typeof self?self:null,br="object"==typeof window?window:null,yr=sr.isPrimitive,gr=function(){return new Function("return this;")()},mr=pr,dr=br,hr="object"==typeof o?o:null;var jr=function(r){if(arguments.length){if(!yr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return gr()}if(mr)return mr;if(dr)return dr;if(hr)return hr;throw new Error("unexpected error. Unable to resolve global object.")},_r=jr(),wr=_r.document&&_r.document.childNodes,Sr=Int8Array,Er=tr,Tr=wr,Pr=Sr;var Nr=function(){return"function"==typeof Er||"object"==typeof Pr||"function"==typeof Tr};var Or=function(){return/^\s*function\s*([^(]*)/i},xr=Or;h(xr,"REGEXP",Or());var Ir=xr,Ar=M;var Br=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ar(r)};var Vr=function(r){return null!==r&&"object"==typeof r};h(Vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!Br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Vr));var Gr=Vr;var Fr=M,Cr=Ir.REGEXP,Dr=function(r){return Gr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Rr=function(r){var t,e,n;if(("Object"===(e=Fr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Cr.exec(n.toString()))return t[1]}return Dr(r)?"Buffer":e},Lr=Rr;var Mr=Rr;var kr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?Lr(r).toLowerCase():t},Qr=function(r){return Mr(r).toLowerCase()},$r=Nr()?Qr:kr;var Ur=function(r){return"function"===$r(r)},Xr=RegExp.prototype.exec;var Yr=M,qr=function(r){try{return Xr.call(r),!0}catch(r){return!1}},zr=O();var Hr=rr,Jr=Ur,Kr=K.isPrimitive,Wr=function(r){return"object"==typeof r&&(r instanceof RegExp||(zr?qr(r):"[object RegExp]"===Yr(r)))};var Zr=function(r,t,e){if(!Kr(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Kr(t))t=Hr(t),t=new RegExp(t,"g");else if(!Wr(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!Kr(e)&&!Jr(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return r.replace(t,e)};var rt=function(r){return"number"==typeof r},tt=Number,et=tt.prototype.toString;var nt=M,ot=tt,it=function(r){try{return et.call(r),!0}catch(r){return!1}},ut=O();var at=function(r){return"object"==typeof r&&(r instanceof ot||(ut?it(r):"[object Number]"===nt(r)))},ft=rt,lt=at;var ct=h,st=function(r){return ft(r)||lt(r)},vt=at;ct(st,"isPrimitive",rt),ct(st,"isObject",vt);var pt=st,bt=Number.POSITIVE_INFINITY,yt=tt.NEGATIVE_INFINITY,gt=Math.floor;var mt=bt,dt=yt,ht=function(r){return gt(r)===r};var jt=function(r){return r<mt&&r>dt&&ht(r)},_t=pt.isPrimitive,wt=jt;var St=function(r){return _t(r)&&wt(r)},Et=pt.isObject,Tt=jt;var Pt=function(r){return Et(r)&&Tt(r.valueOf())},Nt=St,Ot=Pt;var xt=h,It=function(r){return Nt(r)||Ot(r)},At=Pt;xt(It,"isPrimitive",St),xt(It,"isObject",At);var Bt=It,Vt=e.join,Gt=T.sync,Ft=Zr,Ct=Bt.isPrimitive,Dt={encoding:"utf8"},Rt=Vt(r.dirname(r.fromFileUrl(import.meta.url)),"templates"),Lt=Gt(Vt(Rt,"coefficient_ratio.js.txt"),Dt),Mt=Gt(Vt(Rt,"evalrational.js.txt"),Dt),kt=Gt(Vt(Rt,"loop.js.txt"),Dt),Qt=Gt(Vt(Rt,"nan.js.txt"),Dt);function $t(r){var t=r.toString();return Ct(r)&&(t+=".0"),t}function Ut(r){var t,e,n,o;for(n=(e=r.length)-1,t="",o=0;o<e;o++)t+="\t"+r[o].toString(),Ct(r[o])&&(t+=".0"),o<n&&(t+=",\n");return t}function Xt(r){var t,e,n,o;for(n=(e=r.length)-1,t=r[0].toString(),Ct(r[0])&&(t+=".0"),o=1;o<e;o++)t+=" + (x * ",o<n&&(t+="("),t+=r[o].toString(),Ct(r[o])&&(t+=".0");for(o=0;o<2*n-1;o++)t+=")";return t}function Yt(r){var t,e,n;for(t=r[e=r.length-1].toString(),Ct(r[e])&&(t+=".0"),n=e-1;n>=0;n--)t+=" + (x * ",n>0&&(t+="("),t+=r[n].toString(),Ct(r[n])&&(t+=".0");for(n=0;n<2*e-1;n++)t+=")";return t}function qt(r,t,e){var n=Ft(r,"{{"+t+"}}",e);return n=e.length>66?Ft(n,"{{"+t+"_ESLINT}}"," // eslint-disable-line max-len"):Ft(n,"{{"+t+"_ESLINT}}","")}var zt=function(r,t){var e,n;return 0===(n=r.length)||n!==t.length?Qt:1===n?Ft(Lt,"{{ratio}}",$t(r[0]/t[0])):n>500?(e=Ft(kt,"{{P}}",Ut(r)),e=Ft(e,"{{Q}}",Ut(t)),Ft(e,"{{ratio}}",$t(r[0]/t[0]))):(e=qt(Mt,"P_ASCENDING",Xt(r)),e=qt(e,"Q_ASCENDING",Xt(t)),e=qt(e,"P_DESCENDING",Yt(r)),e=qt(e,"Q_DESCENDING",Yt(t)),Ft(e,"{{ratio}}",$t(r[0]/t[0])))};export{zt as default};
