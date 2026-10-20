(self["webpackChunkbuddhist_name"]=self["webpackChunkbuddhist_name"]||[]).push([[504],{4601:function(e,t,n){var r=n(8420),i=n(3838),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},7473:function(e,t,n){var r=n(8420),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},298:function(e,t,n){var r=n(1602),i=n(3105),s=n(3610).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},5190:function(e,t,n){var r=n(7658),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},3938:function(e,t,n){var r=n(5335),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},6004:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},5343:function(e,t,n){"use strict";var r,i,s,o=n(6004),a=n(5077),c=n(200),l=n(8420),u=n(5335),h=n(6490),d=n(3062),f=n(3838),p=n(7712),g=n(7485),m=n(6477),_=n(7658),v=n(7970),y=n(9686),w=n(1602),b=n(665),E=n(9206),T=E.enforce,C=E.get,I=c.Int8Array,S=I&&I.prototype,k=c.Uint8ClampedArray,R=k&&k.prototype,A=I&&v(I),O=S&&v(S),P=Object.prototype,N=c.TypeError,x=w("toStringTag"),D=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!y&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(j,t)},q=function(e){var t=v(e);if(u(t)){var n=C(t);return n&&h(n,L)?n[L]:q(t)}},$=function(e){if(!u(e))return!1;var t=d(e);return h(U,t)||h(j,t)},V=function(e){if($(e))return e;throw N("Target is not a typed array")},W=function(e){if(l(e)&&(!y||_(A,e)))return e;throw N(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(l){}}}O[e]&&!n||g(O,e,n?t:M&&S[e]||t,r)}},z=function(e,t,n){var r,i;if(a){if(y){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return g(A,e,n?t:M&&A[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!l(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},M))for(r in U)c[r]&&y(c[r],A);if((!M||!O||O===P)&&(O=A.prototype,M))for(r in U)c[r]&&y(c[r].prototype,O);if(M&&v(R)!==O&&y(R,O),a&&!h(O,x))for(r in F=!0,m(O,x,{configurable:!0,get:function(){return u(this)?this[D]:void 0}}),U)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&D,aTypedArray:V,aTypedArrayConstructor:W,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:B,isTypedArray:$,TypedArray:A,TypedArrayPrototype:O}},8186:function(e,t,n){var r=n(5476),i=n(6539),s=n(3493),o=function(e){return function(t,n,o){var a,c=r(t),l=s(c),u=i(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={m:o(!0),q:o(!1)}},6648:function(e,t,n){"use strict";var r=n(5077),i=n(8679),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},9609:function(e,t,n){var r=n(281);e.exports=r([].slice)},1867:function(e,t,n){var r=n(3493),i=n(9328),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),l=c<0?a+c:c;if(l>=a||l<0)throw s("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?o:e[h];return u}},1332:function(e,t,n){var r=n(3938),i=n(9868);e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},8569:function(e,t,n){var r=n(281),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},3062:function(e,t,n){var r=n(3129),i=n(8420),s=n(8569),o=n(1602),a=o("toStringTag"),c=Object,l="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},4361:function(e,t,n){var r=n(6490),i=n(5816),s=n(7632),o=n(3610);e.exports=function(e,t,n){for(var a=i(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},7168:function(e,t,n){var r=n(2074);e.exports=!r(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},8296:function(e){e.exports=function(e,t){return{value:e,done:t}}},7712:function(e,t,n){var r=n(5077),i=n(3610),s=n(6843);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6843:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6477:function(e,t,n){var r=n(8218),i=n(3610);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},7485:function(e,t,n){var r=n(8420),i=n(3610),s=n(8218),o=n(9430);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&s(n,l,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},2760:function(e,t,n){var r=n(7485);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},9430:function(e,t,n){var r=n(200),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5077:function(e,t,n){var r=n(2074);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},6568:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},3262:function(e,t,n){var r=n(200),i=n(5335),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7242:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},6567:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6874:function(e){e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},2050:function(e,t,n){var r=n(7061);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5223:function(e,t,n){var r=n(8569);e.exports="undefined"!=typeof process&&"process"==r(process)},7061:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},6845:function(e,t,n){var r,i,s=n(200),o=n(7061),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},290:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6452:function(e,t,n){var r=n(281),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},1605:function(e,t,n){var r=n(200),i=n(7632).f,s=n(7712),o=n(7485),a=n(9430),c=n(4361),l=n(4977);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,_=e.stat;if(u=m?r:_?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},2074:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9070:function(e,t,n){var r=n(8823),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6885:function(e,t,n){var r=n(3091),i=n(4601),s=n(8823),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},8823:function(e,t,n){var r=n(2074);e.exports=!r(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})},2368:function(e,t,n){var r=n(8823),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},2071:function(e,t,n){var r=n(5077),i=n(6490),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,i2:l}},1385:function(e,t,n){var r=n(281),i=n(4601);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},3091:function(e,t,n){var r=n(8569),i=n(281);e.exports=function(e){if("Function"===r(e))return i(e)}},281:function(e,t,n){var r=n(8823),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},6492:function(e,t,n){var r=n(200),i=n(8420),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},938:function(e,t,n){var r=n(4601),i=n(3938);e.exports=function(e){return{iterator:e,next:r(i(e).next)}}},1898:function(e,t,n){var r=n(3062),i=n(6457),s=n(8406),o=n(2228),a=n(1602),c=a("iterator");e.exports=function(e){if(!s(e))return i(e,c)||i(e,"@@iterator")||o[r(e)]}},9526:function(e,t,n){var r=n(2368),i=n(4601),s=n(3938),o=n(3838),a=n(1898),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw c(o(e)+" is not iterable")}},6457:function(e,t,n){var r=n(4601),i=n(8406);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},200:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6490:function(e,t,n){var r=n(281),i=n(2612),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},7708:function(e){e.exports={}},8890:function(e,t,n){var r=n(6492);e.exports=r("document","documentElement")},7694:function(e,t,n){var r=n(5077),i=n(2074),s=n(3262);e.exports=!r&&!i(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},8664:function(e,t,n){var r=n(281),i=n(2074),s=n(8569),o=Object,a=r("".split);e.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(e){return"String"==s(e)?a(e,""):o(e)}:o},3054:function(e,t,n){var r=n(8420),i=n(5335),s=n(9686);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9965:function(e,t,n){var r=n(281),i=n(8420),s=n(9310),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9206:function(e,t,n){var r,i,s,o=n(8369),a=n(200),c=n(5335),l=n(7712),u=n(6490),h=n(9310),d=n(5904),f=n(7708),p="Object already initialized",g=a.TypeError,m=a.WeakMap,_=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw g(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},s=function(e){return y.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(u(e,w))throw g(p);return t.facade=e,l(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},s=function(e){return u(e,w)}}e.exports={set:r,get:i,has:s,enforce:_,getterFor:v}},9034:function(e,t,n){var r=n(1602),i=n(2228),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},8679:function(e,t,n){var r=n(8569);e.exports=Array.isArray||function(e){return"Array"==r(e)}},7472:function(e,t,n){var r=n(3062);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},8420:function(e,t,n){var r=n(6568),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4977:function(e,t,n){var r=n(2074),i=n(8420),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},8406:function(e){e.exports=function(e){return null===e||void 0===e}},5335:function(e,t,n){var r=n(8420),i=n(6568),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},6926:function(e){e.exports=!1},2328:function(e,t,n){var r=n(6492),i=n(8420),s=n(7658),o=n(5225),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},2929:function(e,t,n){var r=n(6885),i=n(2368),s=n(3938),o=n(3838),a=n(9034),c=n(3493),l=n(7658),u=n(9526),h=n(1898),d=n(9868),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},g=p.prototype;e.exports=function(e,t,n){var m,_,v,y,w,b,E,T=n&&n.that,C=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_RECORD),S=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),R=r(t,T),A=function(e){return m&&d(m,"normal",e),new p(!0,e)},O=function(e){return C?(s(e),k?R(e[0],e[1],A):R(e[0],e[1])):k?R(e,A):R(e)};if(I)m=e.iterator;else if(S)m=e;else{if(_=h(e),!_)throw f(o(e)+" is not iterable");if(a(_)){for(v=0,y=c(e);y>v;v++)if(w=O(e[v]),w&&l(g,w))return w;return new p(!1)}m=u(e,_)}b=I?e.next:m.next;while(!(E=i(b,m)).done){try{w=O(E.value)}catch(P){d(m,"throw",P)}if("object"==typeof w&&w&&l(g,w))return w}return new p(!1)}},9868:function(e,t,n){var r=n(2368),i=n(3938),s=n(6457);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},1523:function(e,t,n){"use strict";var r=n(2368),i=n(3105),s=n(7712),o=n(2760),a=n(1602),c=n(9206),l=n(6457),u=n(9306).H,h=n(8296),d=n(9868),f=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=c.set,_=function(e){var t=c.getterFor(e?g:p);return o(i(u),{next:function(){var n=t(this);if(e)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=t(this),i=n.iterator;if(n.done=!0,e){var s=l(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,"normal")}catch(o){return d(i,"throw",o)}return d(i,"normal"),h(void 0,!0)}})},v=_(!0),y=_(!1);s(y,f,"Iterator Helper"),e.exports=function(e,t){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=t?g:p,r.nextHandler=e,r.counter=0,r.done=!1,m(this,r)};return n.prototype=t?v:y,n}},8318:function(e,t,n){"use strict";var r=n(2368),i=n(4601),s=n(3938),o=n(938),a=n(1523),c=n(1332),l=a(function(){var e=this.iterator,t=s(r(this.next,e)),n=this.done=!!t.done;if(!n)return c(e,this.mapper,[t.value,this.counter++],!0)});e.exports=function(e){return new l(o(this),{mapper:i(e)})}},9306:function(e,t,n){"use strict";var r,i,s,o=n(2074),a=n(8420),c=n(5335),l=n(3105),u=n(7970),h=n(7485),d=n(1602),f=n(6926),p=d("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var e={};return r[p].call(e)!==e});m?r={}:f&&(r=l(r)),a(r[p])||h(r,p,function(){return this}),e.exports={H:r,BUGGY_SAFARI_ITERATORS:g}},2228:function(e){e.exports={}},3493:function(e,t,n){var r=n(3747);e.exports=function(e){return r(e.length)}},8218:function(e,t,n){var r=n(281),i=n(2074),s=n(8420),o=n(6490),a=n(5077),c=n(2071).i2,l=n(9965),u=n(9206),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),_=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),y=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=_(y,"string"==typeof t?t:"")),e};Function.prototype.toString=w(function(){return s(this)&&d(this).source||l(this)},"toString")},9830:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},610:function(e,t,n){var r=n(5362);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3105:function(e,t,n){var r,i=n(3938),s=n(5318),o=n(290),a=n(7708),c=n(8890),l=n(3262),u=n(5904),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},_=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(_("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(_("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?v(r):y():v(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:s.f(n,t)}},5318:function(e,t,n){var r=n(5077),i=n(4491),s=n(3610),o=n(3938),a=n(5476),c=n(1641);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),l=i.length,u=0;while(l>u)s.f(e,n=i[u++],r[n]);return e}},3610:function(e,t,n){var r=n(5077),i=n(7694),s=n(4491),o=n(3938),a=n(6032),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7632:function(e,t,n){var r=n(5077),i=n(2368),s=n(9304),o=n(6843),a=n(5476),c=n(6032),l=n(6490),u=n(7694),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},4789:function(e,t,n){var r=n(6347),i=n(290),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},8916:function(e,t){t.f=Object.getOwnPropertySymbols},7970:function(e,t,n){var r=n(6490),i=n(8420),s=n(2612),o=n(5904),a=n(7168),c=o("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?u:null}},7658:function(e,t,n){var r=n(281);e.exports=r({}.isPrototypeOf)},6347:function(e,t,n){var r=n(281),i=n(6490),s=n(5476),o=n(8186).q,a=n(7708),c=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},1641:function(e,t,n){var r=n(6347),i=n(290);e.exports=Object.keys||function(e){return r(e,i)}},9304:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},9686:function(e,t,n){var r=n(1385),i=n(3938),s=n(7473);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9751:function(e,t,n){var r=n(2368),i=n(8420),s=n(5335),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},5816:function(e,t,n){var r=n(6492),i=n(281),s=n(4789),o=n(8916),a=n(3938),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1229:function(e,t,n){var r=n(8406),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},8827:function(e,t,n){"use strict";var r=n(200),i=n(9070),s=n(8420),o=n(6874),a=n(7061),c=n(9609),l=n(6589),u=r.Function,h=/MSIE .\./.test(a)||o&&function(){var e=r.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();e.exports=function(e,t){var n=t?2:1;return h?function(r,o){var a=l(arguments.length,1)>n,h=s(r)?r:u(r),d=a?c(arguments,n):[],f=a?function(){i(h,this,d)}:h;return t?e(f,o):e(f)}:e}},5904:function(e,t,n){var r=n(2),i=n(665),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},9310:function(e,t,n){var r=n(200),i=n(9430),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2:function(e,t,n){var r=n(6926),i=n(9310);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},2072:function(e,t,n){var r=n(6845),i=n(2074);e.exports=!!Object.getOwnPropertySymbols&&!i(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41})},4922:function(e,t,n){var r,i,s,o,a=n(200),c=n(9070),l=n(6885),u=n(8420),h=n(6490),d=n(2074),f=n(8890),p=n(9609),g=n(3262),m=n(6589),_=n(2050),v=n(5223),y=a.setImmediate,w=a.clearImmediate,b=a.process,E=a.Dispatch,T=a.Function,C=a.MessageChannel,I=a.String,S=0,k={},R="onreadystatechange";d(function(){r=a.location});var A=function(e){if(h(k,e)){var t=k[e];delete k[e],t()}},O=function(e){return function(){A(e)}},P=function(e){A(e.data)},N=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};y&&w||(y=function(e){m(arguments.length,1);var t=u(e)?e:T(e),n=p(arguments,1);return k[++S]=function(){c(t,void 0,n)},i(S),S},w=function(e){delete k[e]},v?i=function(e){b.nextTick(O(e))}:E&&E.now?i=function(e){E.now(O(e))}:C&&!_?(s=new C,o=s.port2,s.port1.onmessage=P,i=l(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",P,!1)):i=R in g("script")?function(e){f.appendChild(g("script"))[R]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(O(e),0)}),e.exports={h:y,I:w}},6539:function(e,t,n){var r=n(9328),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},3005:function(e,t,n){var r=n(874),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5476:function(e,t,n){var r=n(8664),i=n(1229);e.exports=function(e){return r(i(e))}},9328:function(e,t,n){var r=n(9830);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3747:function(e,t,n){var r=n(9328),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},2612:function(e,t,n){var r=n(1229),i=Object;e.exports=function(e){return i(r(e))}},874:function(e,t,n){var r=n(2368),i=n(5335),s=n(2328),o=n(6457),a=n(9751),c=n(1602),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6032:function(e,t,n){var r=n(874),i=n(2328);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3129:function(e,t,n){var r=n(1602),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},5362:function(e,t,n){var r=n(3062),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},3838:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},665:function(e,t,n){var r=n(281),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},5225:function(e,t,n){var r=n(2072);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4491:function(e,t,n){var r=n(5077),i=n(2074);e.exports=r&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},6589:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},8369:function(e,t,n){var r=n(200),i=n(8420),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},1602:function(e,t,n){var r=n(200),i=n(2),s=n(6490),o=n(665),a=n(2072),c=n(5225),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(l,e)?l[e]:h("Symbol."+e)),u[e]}},7746:function(e,t,n){"use strict";var r=n(1605),i=n(8186).m,s=n(2074),o=n(298),a=s(function(){return!Array(1).includes()});r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},8743:function(e,t,n){"use strict";var r=n(1605),i=n(2612),s=n(3493),o=n(6648),a=n(7242),c=n(2074),l=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},6736:function(e,t,n){"use strict";var r=n(1867),i=n(5343),s=n(7472),o=n(9328),a=n(3005),c=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=c(this),i=o(e),u=s(n)?a(t):+t;return r(n,l(n),i,u)}}["with"],!h)},3725:function(e,t,n){"use strict";var r=n(1605),i=n(200),s=n(5190),o=n(8420),a=n(7712),c=n(2074),l=n(6490),u=n(1602),h=n(9306).H,d=n(6926),f=u("toStringTag"),p=i.Iterator,g=d||!o(p)||p.prototype!==h||!c(function(){p({})}),m=function(){s(this,h)};l(h,f)||a(h,f,"Iterator"),!g&&l(h,"constructor")&&h.constructor!==Object||a(h,"constructor",m),m.prototype=h,r({global:!0,constructor:!0,forced:g},{Iterator:m})},178:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(4601),o=n(938);r({target:"Iterator",proto:!0,real:!0},{every:function(e){var t=o(this),n=0;return s(e),!i(t,function(t,r){if(!e(t,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},5019:function(e,t,n){"use strict";var r=n(1605),i=n(2368),s=n(4601),o=n(3938),a=n(938),c=n(1523),l=n(1332),u=c(function(){var e,t,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(e=o(i(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,l(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0},{filter:function(e){return new u(a(this),{predicate:s(e)})}})},2598:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(4601),o=n(938);r({target:"Iterator",proto:!0,real:!0},{find:function(e){var t=o(this),n=0;return s(e),i(t,function(t,r){if(e(t,n++))return r(t)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},9838:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(4601),o=n(938);r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){var t=o(this),n=0;s(e),i(t,function(t){e(t,n++)},{IS_RECORD:!0})}})},1339:function(e,t,n){var r=n(1605),i=n(8318);r({target:"Iterator",proto:!0,real:!0},{map:i})},9471:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(4601),o=n(938),a=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){var t=o(this);s(e);var n=arguments.length<2,r=n?void 0:arguments[1],c=0;if(i(t,function(t){n?(n=!1,r=t):r=e(r,t,c),c++},{IS_RECORD:!0}),n)throw a("Reduce of empty iterator with no initial value");return r}})},9229:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(4601),o=n(938);r({target:"Iterator",proto:!0,real:!0},{some:function(e){var t=o(this),n=0;return s(e),i(t,function(t,r){if(e(t,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},7060:function(e,t,n){"use strict";var r=n(1605),i=n(2929),s=n(938),o=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var e=[];return i(s(this),o,{that:e,IS_RECORD:!0}),e}})},1319:function(e,t,n){n(6736)},1857:function(e,t,n){var r=n(1605),i=n(200),s=n(4922).I;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},9078:function(e,t,n){"use strict";var r=n(1605),i=n(200),s=n(6492),o=n(6843),a=n(3610).f,c=n(6490),l=n(5190),u=n(3054),h=n(610),d=n(6567),f=n(6452),p=n(5077),g=n(6926),m="DOMException",_=s("Error"),v=s(m),y=function(){l(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=_(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),u(r,this,y),r},w=y.prototype=v.prototype,b="stack"in _(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!T&&!(T.writable&&T.configurable),I=b&&!C&&!E;r({global:!0,constructor:!0,forced:g||I},{DOMException:I?y:v});var S=s(m),k=S.prototype;if(k.constructor!==S)for(var R in g||a(k,"constructor",o(1,S)),d)if(c(d,R)){var A=d[R],O=A.s;c(S,O)||a(S,O,o(6,A.c))}},5417:function(e,t,n){n(1857),n(9708)},9708:function(e,t,n){var r=n(1605),i=n(200),s=n(4922).h,o=n(8827),a=i.setImmediate?o(s,!1):s;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},4046:function(e,t,n){"use strict";n.d(t,{$L:function(){return $},$g:function(){return x},A4:function(){return f},Am:function(){return Z},As:function(){return V},FA:function(){return j},Fy:function(){return S},I9:function(){return ee},Im:function(){return Y},Ku:function(){return ue},ZQ:function(){return k},bD:function(){return J},cY:function(){return I},dI:function(){return ae},eX:function(){return M},g:function(){return U},gR:function(){return K},gz:function(){return ne},hp:function(){return te},jZ:function(){return R},kH:function(){return X},lT:function(){return N},lV:function(){return P},nr:function(){return D},sr:function(){return O},tD:function(){return re},yw:function(){return G},zW:function(){return L}});n(9078),n(8743),n(7746),n(3725),n(9838);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==h)throw new l;const d=t<<2|o>>4;if(r.push(d),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=p(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e=void 0;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return _()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},T=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function R(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function A(){var e;const t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function O(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function D(){return!A()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L(){try{return"object"===typeof indexedDB}catch(e){return!1}}function M(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="FirebaseError";class U extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=F,Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?B(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new U(r,o,n);return a}}function B(e,t){return e.replace(q,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const q=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=$(d(s[0])||""),n=$(d(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},H=function(e){const t=W(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},z=function(e){const t=W(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Y(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function X(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function J(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Q(n)&&Q(s)){if(!J(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ee(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function te(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):u<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const e=(s<<5|s>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function re(e,t){const n=new ie(e,t);return n.subscribe.bind(n)}class ie{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=se(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=oe),void 0===r.error&&(r.error=oe),void 0===r.complete&&(r.complete=oe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function se(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function oe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ce=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},le=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(e){return e&&e._delegate?e._delegate:e}n.d(t,["Cv",0,H,"Hk",0,s,"K3",0,c,"KA",0,u,"OE",0,le,"T9",0,T,"Uj",0,h,"XA",0,C,"kj",0,ce,"qc",0,z,"u",0,d,"vA",0,i,"yU",0,E])},144:function(e,t,n){"use strict";n.d(t,{BA:function(){return Fe},C4:function(){return S},EW:function(){return qe},Gc:function(){return we},IG:function(){return Re},IJ:function(){return xe},KR:function(){return Ne},Kh:function(){return ye},Pr:function(){return je},R1:function(){return Me},Tm:function(){return Ce},X2:function(){return h},bl:function(){return k},fE:function(){return Ie},g8:function(){return Te},hV:function(){return Ke},hZ:function(){return U},i9:function(){return Pe},jr:function(){return l},ju:function(){return Se},o5:function(){return c},qA:function(){return B},u4:function(){return F},uY:function(){return a},ux:function(){return ke},wB:function(){return ze},yC:function(){return o}});n(8743),n(1339),n(3725),n(9838),n(5019),n(9229);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&i&&(i.active?(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes){const n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes){const n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}const n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){if(this._on>0&&0===--this._on){if(i===this)i=this.prevScope;else{let e=i;while(e){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(e){return new o(e)}function c(){return i}function l(e,t=!1){i&&i.cleanups.push(e)}const u=new WeakSet;class h{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&(i.active?i.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,u.has(this)&&(u.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||g(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,R(this),v(this);const e=s,t=C;s=this,C=!0;try{return this.fn()}finally{0,y(this),s=e,C=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)E(e);this.deps=this.depsTail=void 0,R(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){w(this)&&this.run()}get dirty(){return w(this)}}let d,f,p=0;function g(e,t=!1){if(e.flags|=8,t)return e.next=f,void(f=e);e.next=d,d=e}function m(){p++}function _(){if(--p>0)return;if(f){let e=f;f=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(d){let n=d;d=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function v(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function y(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),E(r),T(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function w(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===A)return;if(e.globalVersion=A,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!w(e)))return;e.flags|=2;const t=e.dep,n=s,i=C;s=e,C=!0;try{v(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,C=i,y(e),e.flags&=-3}}function E(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)E(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function T(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let C=!0;const I=[];function S(){I.push(C),C=!1}function k(){const e=I.pop();C=void 0===e||e}function R(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let A=0;class O{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class P{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!s||!C||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new O(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,N(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,A++,this.notify(e)}notify(e){m();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{_()}}}function N(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)N(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const x=new WeakMap,D=Symbol(""),L=Symbol(""),M=Symbol("");function F(e,t,n){if(C&&s){let t=x.get(e);t||x.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new P),r.map=t,r.key=n),r.track()}}function U(e,t,n,i,s,o){const a=x.get(e);if(!a)return void A++;const c=e=>{e&&e.trigger()};if(m(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach((t,n)=>{("length"===n||n===M||!(0,r.Bm)(n)&&n>=e)&&c(t)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(M)),t){case"add":s?o&&c(a.get("length")):(c(a.get(D)),(0,r.CE)(e)&&c(a.get(L)));break;case"delete":s||(c(a.get(D)),(0,r.CE)(e)&&c(a.get(L)));break;case"set":(0,r.CE)(e)&&c(a.get(D));break}}_()}function j(e){const t=ke(e);return t===e?t:(F(t,"iterate",M),Ie(e)?t:Ce(e)?Te(e)?t.map(e=>Oe(Ae(e))):t.map(Oe):t.map(Ae))}function B(e){return F(e=ke(e),"iterate",M),e}function q(e,t){return Ce(e)?Te(e)?Oe(Ae(t)):Oe(t):Ae(t)}const $={__proto__:null,[Symbol.iterator](){return V(this,Symbol.iterator,e=>q(this,e))},concat(...e){return j(this).concat(...e.map(e=>(0,r.cy)(e)?j(e):e))},entries(){return V(this,"entries",e=>(e[1]=q(this,e[1]),e))},every(e,t){return z(this,"every",e,t,void 0,arguments)},filter(e,t){return z(this,"filter",e,t,e=>e.map(e=>q(this,e)),arguments)},find(e,t){return z(this,"find",e,t,e=>q(this,e),arguments)},findIndex(e,t){return z(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return z(this,"findLast",e,t,e=>q(this,e),arguments)},findLastIndex(e,t){return z(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return z(this,"forEach",e,t,void 0,arguments)},includes(...e){return G(this,"includes",e)},indexOf(...e){return G(this,"indexOf",e)},join(e){return j(this).join(e)},lastIndexOf(...e){return G(this,"lastIndexOf",e)},map(e,t){return z(this,"map",e,t,void 0,arguments)},pop(){return Y(this,"pop")},push(...e){return Y(this,"push",e)},reduce(e,...t){return K(this,"reduce",e,t)},reduceRight(e,...t){return K(this,"reduceRight",e,t)},shift(){return Y(this,"shift")},some(e,t){return z(this,"some",e,t,void 0,arguments)},splice(...e){return Y(this,"splice",e)},toReversed(){return j(this).toReversed()},toSorted(e){return j(this).toSorted(e)},toSpliced(...e){return j(this).toSpliced(...e)},unshift(...e){return Y(this,"unshift",e)},values(){return V(this,"values",e=>q(this,e))}};function V(e,t,n){const r=B(e),i=r[t],s=i.call(r);if(r!==e&&!Ie(e)){if("Array Iterator"===s[Symbol.toStringTag]){const e=Object.create(Object.getPrototypeOf(s));return e.next=()=>W(s.next(),n),i!==H[t]&&Object.defineProperties(e,{return:{get(){const e=s.return;return"function"===typeof e?e.bind(s):e}},throw:{get(){const e=s.throw;return"function"===typeof e?e.bind(s):e}}}),e}s._next=s.next,s.next=()=>W(s._next(),n)}return s}function W(e,t){return e.done||(e.value=t(e.value)),e}const H=Array.prototype;function z(e,t,n,r,i,s){const o=B(e),a=o!==e&&!Ie(e),c=o[t];if(c!==H[t]){const t=c.apply(e,s);return a?Ae(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,q(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function K(e,t,n,r){const i=B(e),s=i!==e&&!Ie(e);let o=n,a=!1;i!==e&&(s?(a=0===r.length,o=function(t,r,i){return a&&(a=!1,t=q(e,t)),n.call(this,t,q(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));const c=i[t](o,...r);return a?q(e,c):c}function G(e,t,n){const r=ke(e);F(r,"iterate",M);const i=r[t](...n);return-1!==i&&!1!==i||!Se(n[0])?i:(n[0]=ke(n[0]),r[t](...n))}function Y(e,t,n=[]){S(),m();const r=ke(e)[t].apply(e,n);return _(),k(),r}const X=(0,r.pD)("__proto__,__v_isRef,__isVue"),J=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r.Bm));function Q(e){(0,r.Bm)(e)||(e=String(e));const t=ke(this);return F(t,"has",e),t.hasOwnProperty(e)}class Z{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?_e:me:s?ge:pe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=$[t]))return e;if("hasOwnProperty"===t)return Q}const a=Reflect.get(e,t,Pe(e)?e:n);if((0,r.Bm)(t)?J.has(t):X(t))return a;if(i||F(e,"get",t),s)return a;if(Pe(a)){const e=o&&(0,r.yI)(t)?a:a.value;return i&&(0,r.Gv)(e)?be(e):e}return(0,r.Gv)(a)?i?be(a):ye(a):a}}class ee extends Z{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];const o=(0,r.cy)(e)&&(0,r.yI)(t);if(!this._isShallow){const e=Ce(s);if(Ie(n)||Ce(n)||(s=ke(s),n=ke(n)),!o&&Pe(s)&&!Pe(n))return e||(s.value=n),!0}const a=o?Number(t)<e.length:(0,r.$3)(e,t),c=Reflect.set(e,t,n,Pe(e)?e:i);return e===ke(i)&&c&&(a?(0,r.$H)(n,s)&&U(e,"set",t,n,s):U(e,"add",t,n)),c}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&U(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&J.has(t)||F(e,"has",t),n}ownKeys(e){return F(e,"iterate",(0,r.cy)(e)?"length":D),Reflect.ownKeys(e)}}class te extends Z{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ne=new ee,re=new te,ie=new ee(!0),se=e=>e,oe=e=>Reflect.getPrototypeOf(e);function ae(e,t,n){return function(...i){const s=this["__v_raw"],o=ke(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?se:t?Oe:Ae;return!t&&F(o,"iterate",l?L:D),(0,r.X$)(Object.create(u),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}}})}}function ce(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function le(e,t){const n={get(n){const i=this["__v_raw"],s=ke(i),o=ke(n);e||((0,r.$H)(n,o)&&F(s,"get",n),F(s,"get",o));const{has:a}=oe(s),c=t?se:e?Oe:Ae;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&F(ke(t),"iterate",D),t.size},has(t){const n=this["__v_raw"],i=ke(n),s=ke(t);return e||((0,r.$H)(t,s)&&F(i,"has",t),F(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=ke(s),a=t?se:e?Oe:Ae;return!e&&F(o,"iterate",D),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}};(0,r.X$)(n,e?{add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear")}:{add(e){const n=ke(this),i=oe(n),s=ke(e),o=t||Ie(e)||Ce(e)?e:s,a=i.has.call(n,o)||(0,r.$H)(e,o)&&i.has.call(n,e)||(0,r.$H)(s,o)&&i.has.call(n,s);return a||(n.add(o),U(n,"add",o,o)),this},set(e,n){t||Ie(n)||Ce(n)||(n=ke(n));const i=ke(this),{has:s,get:o}=oe(i);let a=s.call(i,e);a||(e=ke(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&U(i,"set",e,n,c):U(i,"add",e,n),this},delete(e){const t=ke(this),{has:n,get:r}=oe(t);let i=n.call(t,e);i||(e=ke(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&U(t,"delete",e,void 0,s),o},clear(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&U(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach(r=>{n[r]=ae(r,e,t)}),n}function ue(e,t){const n=le(e,t);return(i,s,o)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_isShallow"===s?t:"__v_raw"===s?i:Reflect.get((0,r.$3)(n,s)&&s in i?n:i,s,o)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,ge=new WeakMap,me=new WeakMap,_e=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return Ce(e)?e:Ee(e,!1,ne,he,pe)}function we(e){return Ee(e,!1,ie,de,ge)}function be(e){return Ee(e,!0,re,fe,me)}function Ee(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;if(e["__v_skip"]||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const a=ve((0,r.Zf)(e));if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Te(e){return Ce(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Se(e){return!!e&&!!e["__v_raw"]}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function Re(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Gv)(e)?ye(e):e,Oe=e=>(0,r.Gv)(e)?be(e):e;function Pe(e){return!!e&&!0===e["__v_isRef"]}function Ne(e){return De(e,!1)}function xe(e){return De(e,!0)}function De(e,t){return Pe(e)?e:new Le(e,t)}class Le{constructor(e,t){this.dep=new P,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:ke(e),this._value=t?e:Ae(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ie(e)||Ce(e);e=n?e:ke(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ae(e),this.dep.trigger())}}function Me(e){return Pe(e)?e.value:e}function Fe(e){return(0,r.Tn)(e)?e():Me(e)}const Ue={get:(e,t,n)=>"__v_raw"===t?e:Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Te(e)?e:new Proxy(e,Ue)}class Be{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new P(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return g(this,!0),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qe(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Be(i,s,n);return o}const $e={},Ve=new WeakMap;let We;function He(e,t=!1,n=We){if(n){let t=Ve.get(n);t||Ve.set(n,t=[]),t.push(e)}else 0}function ze(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:l,call:u}=n,d=e=>s?e:Ie(e)||!1===s||0===s?Ke(e,1):Ke(e);let f,p,g,m,_=!1,v=!1;if(Pe(e)?(p=()=>e.value,_=Ie(e)):Te(e)?(p=()=>d(e),_=!0):(0,r.cy)(e)?(v=!0,_=e.some(e=>Te(e)||Ie(e)),p=()=>e.map(e=>Pe(e)?e.value:Te(e)?d(e):(0,r.Tn)(e)?u?u(e,2):e():void 0)):p=(0,r.Tn)(e)?t?u?()=>u(e,2):e:()=>{if(g){S();try{g()}finally{k()}}const t=We;We=f;try{return u?u(e,3,[m]):e(m)}finally{We=t}}:r.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>Ke(e(),t)}const y=c(),w=()=>{f.stop(),y&&y.active&&(0,r.TF)(y.effects,f)};if(o&&t){const e=t;t=(...t)=>{try{return e(...t)}finally{w()}}}let b=v?new Array(e.length).fill($e):$e;const E=e=>{if(1&f.flags&&(f.dirty||e))if(t){const n=f.run();if(e||s||_||(v?n.some((e,t)=>(0,r.$H)(e,b[t])):(0,r.$H)(n,b))){const e=We;S();try{g&&g(),We=f;const e=[n,b===$e?void 0:v&&b[0]===$e?[]:b,m];b=n,u?u(t,3,e):t(...e)}finally{We=e,k()}}}else f.run()};return l&&l(E),f=new h(p),f.scheduler=a?()=>a(E,!1):E,m=e=>He(e,!1,f),g=f.onStop=()=>{const e=Ve.get(f);if(e){if(u)u(e,4);else for(const t of e)t();Ve.delete(f)}},t?i?E(!0):b=f.run():a?a(E.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function Ke(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Map,(n.get(e)||0)>=t)return e;if(n.set(e,t),t--,Pe(e))Ke(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Ke(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach(e=>{Ke(e,t,n)});else if((0,r.Qd)(e)){for(const r in e)Ke(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ke(e[r],t,n)}return e}n.d(t,["a1",0,Oe,"lJ",0,Ae])},6768:function(e,t,n){"use strict";n.d(t,{CE:function(){return Xt},Fv:function(){return ln},Gt:function(){return x},K9:function(){return kt},Lk:function(){return nn},Q3:function(){return un},WQ:function(){return D},bo:function(){return P},dY:function(){return m},eW:function(){return cn},g2:function(){return ye},h:function(){return Bn},k6:function(){return O},pI:function(){return Te},pM:function(){return G},qL:function(){return o},uX:function(){return Ht},wB:function(){return F}});n(8743),n(1339),n(3725),n(9838),n(7746),n(178),n(9229),n(9471),n(5019);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch(e=>{a(e,t,n)}),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(l)return(0,r.C4)(),s(l,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const l=[];let u=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(e){const t=g||p;return e?t.then(this?e.bind(this):e):t}function _(e){let t=u+1,n=l.length;while(t<n){const r=t+n>>>1,i=l[r],s=I(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function v(e){if(!(1&e.flags)){const t=I(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=I(n)?l.push(e):l.splice(_(t),0,e),e.flags|=1,y()}}function y(){g||(g=p.then(S))}function w(e){if((0,i.cy)(e))for(let t=0;t<e.length;t++)h.push(e[t]);else d&&-1===e.id?d.splice(f+1,0,e):1&e.flags||(h.push(e),e.flags|=1);y()}function b(e,t,n,r=u+1){for(0;r<l.length;r++){const n=l[r];if(n&&2&n.flags){if(e&&n.id!==e.uid||void 0!==t&&!(n.id>=t))continue;0,l.splice(r,1),r=e?r-1:u,4&n.flags&&(n.flags&=-2),n(),4&n.flags||(n.flags&=-2)}}}function E(e,t,n=0){if(h.length){let e=h,r=0;if(t){e=[];for(let i=0;i<h.length;i++){const s=h[i];(void 0!==s.i?!s.i||s.i.uid<n:t.has(s))?h[r++]=s:e.push(s)}}const i=[...new Set(e)].sort((e,t)=>I(e)-I(t));if(h.length=r,d){for(let e=0;e<i.length;e++)d.push(i[e]);return}for(d=i,f=0;f<d.length;f++){const e=d[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,f=0}}let T=!1;function C(e,t){if(T)return void e();const n=void 0===t?void 0:new Set(h);e(),T=!0;try{b(void 0,t),E(void 0,n,t)}finally{T=!1}}const I=e=>null==e.id?2&e.flags?-1:1/0:e.id;function S(e){i.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,E(e),g=null,(l.length||h.length)&&S(e)}}let k=null,R=null;function A(e){const t=k;return k=e,R=e&&e.type.__scopeId||null,t}function O(e,t=k,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gt(-1);const i=A(t),s=Vt.length;let o;try{o=e(...n)}finally{for(let e=Vt.length;e>s;e--)zt();A(i),r._d&&Gt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function P(e,t){if(null===k)return e;const n=Mn(k),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,l=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function N(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),o(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}function x(e,t){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[e]=t}}function D(e,t,n=!1){const r=bn();if(r||Ke){let s=Ke?Ke._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const L=Symbol.for("v-scx"),M=()=>{{const e=D(L);return e}};function F(e,t,n){return U(e,t,n)}function U(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(An)if("sync"===c){const e=M();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=wn;u.call=(e,t,n)=>o(e,f,t,n);let p=!1;"post"===c?u.scheduler=e=>{e.i=f,St(e,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(e,t)=>{t?e():v(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const g=(0,r.wB)(e,t,u);return An&&(d?d.push(g):h&&g()),g}function j(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?B(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=Cn(this),c=U(s,o.bind(r),n);return a(),c}function B(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const q=Symbol("_vte"),$=e=>e.__isTeleport;const V=Symbol("_leaveCb");function W(e){let t=e[0];if(e.length>1){let n=!1;for(const r of e)if(r.type!==qt){0,t=r,n=!0;break}}return t}function H(e){if(!te(e))return $(e.type)&&e.children?W(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function z(e,t){if(6&e.shapeFlag&&e.component){e.transition=t;const n=e.component.subTree;z($(n.type)&&H(n)||n,t)}else if(128&e.shapeFlag)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===jt&&(0,i.cy)(e.children)){const n=et(e.children,!1);n&&z(n,t)}}function K(e){if(e.component)return K(e.component.subTree);if(e.type===jt){const t=(0,i.cy)(e.children)&&et(e.children,!1);return t?K(t):void 0}return e.type!==qt?e:void 0}function G(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function Y(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function X(e,t){let n;return!(!(n=Object.getOwnPropertyDescriptor(e,t))||n.configurable)}const J=new WeakMap;function Q(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach((e,r)=>Q(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a));if(ee(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&Q(e,t,n,o.component.subTree));const c=4&o.shapeFlag?Mn(o.component):o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:e=>!X(f,e)&&(0,i.$3)(g,e),_=(e,t)=>!t||!X(f,t);if(null!=d&&d!==h)if(Z(t),(0,i.Kg)(d))f[d]=null,m(d)&&(p[d]=null);else if((0,r.i9)(d)){const e=t;_(d,e.k)&&(d.value=null),e.k&&(f[e.k]=null)}if((0,i.Tn)(h))s(h,u,12,[l,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?m(h)?p[h]:f[h]:_(h)||!e.k?h.value:f[e.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(t)f[h]=[c],m(h)&&(p[h]=f[h]);else{const t=[c];_(h,e.k)&&(h.value=t),e.k&&(f[e.k]=t)}}else t?(f[h]=l,m(h)&&(p[h]=l)):s&&(_(h,e.k)&&(h.value=l),e.k&&(f[e.k]=l))};if(l){const t=()=>{r(),J.delete(e)};t.id=-1,J.set(e,t),St(t,n)}else Z(e),r()}else 0}}function Z(e){const t=J.get(e);t&&(t.flags|=8,J.delete(e))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const ee=e=>!!e.type.__asyncLoader;const te=e=>e.type.__isKeepAlive;function ne(e,t){ie(e,"a",t)}function re(e,t){ie(e,"da",t)}function ie(e,t,n=wn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(oe(t,r,n),n){let e=n.parent;while(e&&e.parent)te(e.parent.vnode)&&se(r,t,n,e),e=e.parent}}function se(e,t,n,r){const s=oe(t,e,r,!0);fe(()=>{(0,i.TF)(r[t],s)},n)}function oe(e,t,n=wn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=Cn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ae=e=>(t,n=wn)=>{An&&"sp"!==e||oe(e,(...e)=>t(...e),n)},ce=ae("bm"),le=ae("m"),ue=ae("bu"),he=ae("u"),de=ae("bum"),fe=ae("um"),pe=ae("sp"),ge=ae("rtg"),me=ae("rtc");function _e(e,t=wn){oe("ec",e,t)}const ve="components";function ye(e,t){return be(ve,e,!0,t)||e}const we=Symbol.for("v-ndc");function be(e,t,n=!0,r=!1){const s=k||wn;if(s){const n=s.type;if(e===ve){const e=Fn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=Ee(s[e]||n[e],t)||Ee(s.appContext[e],t);return!o&&r?n:o}}function Ee(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function Te(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1,s=!1;n&&(i=!(0,r.fE)(e),s=(0,r.Tm)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let c=0,l=e.length;c<l;c++)o[c]=t(i?s?(0,r.a1)((0,r.lJ)(e[c])):(0,r.lJ)(e[c]):e[c],c,void 0,a&&a[c])}else if("number"===typeof e)if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const Ce=e=>e?Sn(e)?Mn(e):Ce(e.parent):null,Ie=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ce(e.parent),$root:e=>Ce(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>De(e),$forceUpdate:e=>e.f||(e.f=()=>{v(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>j.bind(e)}),Se=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),ke={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;if("$"!==t[0]){const e=c[t];if(void 0!==e)switch(e){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Se(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((0,i.$3)(a,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ae&&(c[t]=0)}}const h=Ie[t];let d,f;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(d=l.__cssModules)&&(d=d[t])?d:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(f=u.config.globalProperties,(0,i.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Se(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:a}},c){let l;return!!(n[c]||e!==i.MZ&&"$"!==c[0]&&(0,i.$3)(e,c)||Se(t,c)||(0,i.$3)(o,c)||(0,i.$3)(r,c)||(0,i.$3)(Ie,c)||(0,i.$3)(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Re(e){return(0,i.cy)(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let Ae=!0;function Oe(e){const t=De(e),n=e.proxy,s=e.ctx;Ae=!1,t.beforeCreate&&Ne(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:C,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:R,inheritAttrs:A,components:O,directives:P,filters:N}=t,D=null;if(h&&Pe(h,s,D),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ae=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=jn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)xe(l[r],s,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{x(t,e[t])})}function L(e,t){(0,i.cy)(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Ne(d,e,"c"),L(ce,f),L(le,p),L(ue,g),L(he,m),L(ne,_),L(re,v),L(_e,S),L(me,C),L(ge,I),L(de,w),L(fe,E),L(pe,k),(0,i.cy)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=A&&(e.inheritAttrs=A),O&&(e.components=O),P&&(e.directives=P),k&&Y(e)}function Pe(e,t,n=i.tE){(0,i.cy)(e)&&(e=je(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?D(n.from||s,n.default,!0):D(n.from||s):D(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ne(e,t,n){o((0,i.cy)(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function xe(e,t,n,r){let s=r.includes(".")?B(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&F(s,n)}else if((0,i.Tn)(e))F(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach(e=>xe(e,t,n,r));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&F(s,r,e)}else 0}function De(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach(e=>Le(l,e,a,!0)),Le(l,t,a)):l=t,(0,i.Gv)(t)&&o.set(t,l),l}function Le(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Le(e,s,n,!0),i&&i.forEach(t=>Le(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Me[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Me={data:Fe,props:$e,emits:$e,methods:qe,computed:qe,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:qe,directives:qe,watch:Ve,provide:Fe,inject:Ue};function Fe(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Ue(e,t){return qe(je(e),je(t))}function je(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Be(e,t){return e?[...new Set([].concat(e,t))]:t}function qe(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function $e(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Re(e),Re(null!=t?t:{})):t}function Ve(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=Be(e[r],t[r]);return n}function We(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let He=0;function ze(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=We(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:He++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(i,o,a){if(!l){0;const c=u._ceVNode||rn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Mn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=Ke;Ke=u;try{return e()}finally{Ke=t}}};return u}}let Ke=null;const Ge=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Ye(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&Ge(r,t.slice(7));let l;c&&(c.trim&&(s=n.map(e=>(0,i.Kg)(e)?e.trim():e)),c.number&&(s=s.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}const Xe=new WeakMap;function Je(e,t,n=!1){const r=n?Xe:t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Je(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(e=>a[e]=null):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Qe(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2),t="Once"===t?t:t.replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Ze(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:_}=e,v=A(e);let y,w;try{if(4&n.shapeFlag){const e=s||r,t=e;y=hn(h.call(t,e,d,f,g,p,m)),w=l}else{const e=t;0,y=hn(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),w=t.props?l:tt(l)}}catch(E){Vt.length=0,a(E,e,1),y=rn(qt)}let b=y;if(w&&!1!==_){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(i.CP)&&(w=nt(w,o)),b=an(b,w,!1,!0))}if(n.dirs&&(b=an(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition){const e=$(b.type)&&H(b)||b;0,z(e,n.transition)}return y=b,A(v),y}function et(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!Qt(t))return;if(t.type!==qt||"v-if"===t.children){if(n)return;n=t}}return n}const tt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},nt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function rt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||it(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?it(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(st(o,r,n)&&!Qe(l,n))return!0}}return!1}function it(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(!(0,i.$3)(e,o)||st(t,e,o)&&!Qe(n,o))return!0}return!1}function st(e,t,n){const r=e[n],s=t[n];return"style"===n&&(0,i.Gv)(r)&&(0,i.Gv)(s)?!(0,i.BX)(r,s):r!==s}function ot({vnode:e,parent:t,suspense:n},r){while(t){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n!==e)break;(e=t.vnode).el=r,t=t.parent}n&&n.activeBranch===e&&(n.vnode.el=r)}const at={},ct=()=>Object.create(at),lt=e=>Object.getPrototypeOf(e)===at;function ut(e,t,n,i=!1){const s={},o=ct();e.propsDefaults=Object.create(null),dt(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function ht(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;dt(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ft(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Qe(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=ft(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function dt(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Qe(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ft(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return l}function ft(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Cn(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const pt=new WeakMap;function gt(e,t,n=!1){const r=n?pt:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=gt(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);mt(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(mt(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let l=!1,u=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function mt(e){return"$"!==e[0]&&!(0,i.SU)(e)}const _t=e=>"_"===e||"_ctx"===e||"$stable"===e,vt=e=>(0,i.cy)(e)?e.map(hn):[hn(e)],yt=(e,t,n)=>{if(t._n)return t;const r=O((...e)=>vt(t(...e)),n);return r._c=!1,r},wt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_t(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=yt(s,n,r);else if(null!=n){0;const e=vt(n);t[s]=()=>e}}},bt=(e,t)=>{const n=vt(t);e.slots.default=()=>n},Et=(e,t,n)=>{for(const r in t)!n&&_t(r)||(e[r]=t[r])},Tt=(e,t,n)=>{const r=e.slots=ct();if(32&e.vnode.shapeFlag){const e=t._;e?(Et(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):wt(t,r)}else t&&bt(e,t)},Ct=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:Et(s,t,n):(o=!t.$stable,wt(t,s)),a=t}else t&&(bt(e,t),a={default:1});if(o)for(const i in s)_t(i)||null!=a[i]||delete s[i]};function It(){}const St=Ut;function kt(e){return Rt(e)}function Rt(e,t){It();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,_=(e,t,n,r=null,s=null,o=null,a=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zt(e,t)&&(r=Z(e),z(e,s,o,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===i.Oj&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);const{type:u,ref:h,shapeFlag:d}=t;switch(u){case Bt:y(e,t,n,r);break;case qt:w(e,t,n,r);break;case $t:null==e&&E(t,n,r,a);break;case jt:D(e,t,n,r,s,o,a,c,l);break;default:1&d?S(e,t,n,r,s,o,a,c,l):6&d?L(e,t,n,r,s,o,a,c,l):(64&d||128&d)&&u.process(e,t,n,r,s,o,a,c,l,re)}null!=h&&s?Q(h,e&&e.ref,o,t||e,!t):null==h&&e&&null!=e.ref&&Q(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{if("svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e)k(t,n,r,i,s,o,a,c);else{const n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,s,o,a,c)}finally{n&&n._endPatch()}}},k=(e,t,n,r,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:_,dirs:v}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?d(f,e.children):16&m&&A(e.children,f,null,r,o,At(e,l),u,h),v&&N(e,null,r,"created"),R(f,e,e.scopeId,u,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(f,e,null,g[e],l,r);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&gn(p,r,e)}v&&N(e,null,r,"beforeMount");const y=Pt(o,_);if(y&&_.beforeEnter(f),s(f,t,n),(p=g&&g.onVnodeMounted)||y||v){St(()=>{try{p&&gn(p,r,e),y&&_.enter(f),v&&N(e,null,r,"mounted")}finally{0}},o)}},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n||Ft(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?dn(e[l]):hn(e[l]);_(null,c,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Ot(n,!1),(m=g.onVnodeBeforeUpdate)&&gn(m,n,t,e),f&&N(t,e,n,"beforeUpdate"),n&&Ot(n,!0),!h||e.dynamicChildren&&e.dynamicChildren.length===h.length||(u=0,c=!1,h=null),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(l,""),h?P(e.dynamicChildren,h,l,n,r,At(t,s),o):c||B(e,t,l,null,n,r,At(t,s),o,!1),u>0){if(16&u)x(l,p,g,n,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(l,r,i,o,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,p,g,n,s);((m=g.onVnodeUpdated)||f)&&St(()=>{m&&gn(m,n,t,e),f&&N(t,e,n,"updated")},r)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el||Mt(c),h=u&&(c.type===jt||!Zt(c,l)||198&c.shapeFlag)?f(u):n;_(c,l,h,null,r,i,s,o,!0)}},x=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},D=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),A(t.children||[],n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren&&e.dynamicChildren.length===p.length?(P(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Nt(e,t,!0)):B(e,t,n,d,i,o,a,c,u)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):F(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=yn(e,r,i);if(te(e)&&(a.ctx.renderer=re),On(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,U,o,s),!e.el){const r=a.subTree=rn(qt);w(null,r,t,n),e.placeholder=r.el}}else U(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(rt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return t.el=e.el,t.placeholder=e.placeholder,void j(r,t,n);r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Dt(e);if(n)return t&&(t.el=l.el,j(e,t,c)),void n.asyncDep.then(()=>{St(()=>{e.isUnmounted||h()},o)})}let u,d=t;0,Ot(e,!1),t?(t.el=l.el,j(e,t,c)):t=l,n&&(0,i.DY)(n),(u=t.props&&t.props.onVnodeBeforeUpdate)&&gn(u,s,t,l),Ot(e,!0);const p=Ze(e);0;const g=e.subTree;e.subTree=p,_(g,p,f(g.el),Z(g),e,o,a),t.el=p.el,null===d&&ot(e,p.el),r&&St(r,o),(u=t.props&&t.props.onVnodeUpdated)&&St(()=>gn(u,s,t,l),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:f,type:p}=e,g=ee(t);if(Ot(e,!1),u&&(0,i.DY)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&gn(r,d,t),Ot(e,!0),c&&se){const t=()=>{e.subTree=Ze(e),se(c,e.subTree,e,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);const r=e.subTree=Ze(e);0,_(null,r,n,s,e,o,a),t.el=r.el}if(h&&St(h,o),!g&&(r=l&&l.onVnodeMounted)){const e=t;St(()=>gn(r,d,e),o)}(256&t.shapeFlag||d&&ee(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&St(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>v(d),Ot(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ht(e,t.props,i,n),Ct(e,t.children,n),(0,r.C4)(),b(e),(0,r.bl)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,h,n,r,i,s,o,a,c);if(256&f)return void $(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&J(l,i,s),h!==l&&d(n,h)):16&u?16&p?W(l,h,n,r,i,s,o,a,c):J(l,i,s,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?dn(t[f]):hn(t[f]);_(e[f],r,n,null,s,o,a,c,l)}u>h?J(e,s,o,!0,!1,d):A(t,n,r,s,o,a,c,l,d)},W=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?dn(t[u]):hn(t[u]);if(!Zt(r,i))break;_(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?dn(t[f]):hn(t[f]);if(!Zt(r,i))break;_(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)_(null,t[u]=l?dn(t[u]):hn(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)z(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=l?dn(t[u]):hn(t[u]);null!=e.key&&m.set(e.key,u)}let v,y=0;const w=f-g+1;let b=!1,E=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&Zt(r,t[v])){i=v;break}void 0===i?z(r,s,o,!0):(T[i-g]=u+1,i>=E?E=i:b=!0,_(r,t[i],n,null,s,o,a,c,l),y++)}const C=b?xt(T):i.Oj;for(v=C.length-1,u=w-1;u>=0;u--){const e=g+u,i=t[e],d=t[e+1],f=e+1<h?d.el||Mt(d):r;0===T[u]?_(null,i,n,f,s,o,a,c,l):b&&(v<0||u!==C[v]?H(i,n,f,2):v--)}}},H=(e,t,n,r,i=null)=>{const{el:a,type:c,transition:l,children:u,shapeFlag:h}=e;if(6&h)return void H(e.component.subTree,t,n,r);if(128&h)return void e.suspense.move(t,n,r);if(64&h)return void c.move(e,t,n,re);if(c===jt){s(a,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void s(e.anchor,t,n)}if(c===$t)return void T(e,t,n);const d=2!==r&&1&h&&l;if(d)if(0===r)l.persisted&&!a[V]?s(a,t,n):(l.beforeEnter(a),s(a,t,n),St(()=>l.enter(a),i));else{const{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?o(a):s(a,t,n)},h=()=>{const e=a._isLeaving||!!a[V];a._isLeaving&&a[V](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,h):h()}else s(a,t,n)},z=(e,t,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:l,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:f,cacheIndex:p,memo:g}=e;if((-2===d||u&&u.hasOnce)&&(s=!1),null!=c&&((0,r.C4)(),Q(c,null,n,e,!0),(0,r.bl)()),null==p||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),256&h)return void t.ctx.deactivate(e);const m=1&h&&f,_=!ee(e);let v;if(_&&(v=a&&a.onVnodeBeforeUnmount)&&gn(v,t,e),6&h)X(e.component,n,i);else{if(128&h)return void e.suspense.unmount(n,i);m&&N(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,re,i):u&&!u.hasOnce&&(o!==jt||d>0&&64&d)?J(u,t,n,!1,!0):(o===jt&&384&d||!s&&16&h)&&J(l,t,n),i&&G(e)}const y=null!=g&&null==p;(_&&(v=a&&a.onVnodeUnmounted)||m||y)&&St(()=>{v&&gn(v,t,e),m&&N(e,null,t,"unmounted"),y&&(e.el=null)},n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e,s=t===jt;if(s&&!i)return void Y(n,r);if(t===$t)return I(e),void(i&&!i.persisted&&i.afterLeave&&i.afterLeave());const a=s?K(e):e,c=()=>{s?f(n)&&Y(n,r):o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(a&&1&a.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:t}=i,n=a.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},Y=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;Lt(l),Lt(u),r&&(0,i.DY)(r),s.stop(),o?(o.flags|=8,z(a,e,t,n)):e.vnode.el&&a&&(a.transition=e.vnode.transition,z(a,e,t,n)),c&&St(c,t),St(()=>{e.isUnmounted=!0},t)},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},Z=e=>{if(6&e.shapeFlag)return Z(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[q];return n?p(n):t},ne=(e,t,n)=>{const r=e&&t._vnode?void 0:e&&e.component?e.component.uid:vn();C(()=>{null==e?t._vnode&&z(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),t._vnode=e},r)},re={p:_,um:z,m:H,r:G,mt:M,mc:A,pc:B,pbc:P,n:Z,o:e};let ie,se;return t&&([ie,se]=t(re)),{render:ne,hydrate:ie,createApp:ze(ne,ie)}}function At({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Pt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=dn(s[i]),t.el=e.el),n||-2===t.patchFlag||Nt(e,t)),t.type===Bt&&(-1===t.patchFlag&&(t=s[i]=dn(t)),t.el=e.el),t.type!==qt||t.el||(t.el=e.el)}}function xt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Dt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Dt(t)}function Lt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Mt(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Mt(t.subTree):null}const Ft=e=>e.__isSuspense;function Ut(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const jt=Symbol.for("v-fgt"),Bt=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),Vt=[];let Wt=null;function Ht(e=!1){Vt.push(Wt=e?null:[])}function zt(){Vt.pop(),Wt=Vt[Vt.length-1]||null}let Kt=1;function Gt(e,t=!1){Kt+=e,e<0&&Wt&&t&&(Wt.hasOnce=!0)}function Yt(e){return e.dynamicChildren=Kt>0?Wt||i.Oj:null,zt(),Kt>0&&Wt&&Wt.push(e),e}function Xt(e,t,n,r,i,s){return Yt(nn(e,t,n,r,i,s,!0))}function Jt(e,t,n,r,i){return Yt(rn(e,t,n,r,i,!0))}function Qt(e){return!!e&&!0===e.__v_isVNode}function Zt(e,t){return e.type===t.type&&e.key===t.key}const en=({key:e})=>null!=e?e:null,tn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:k,r:e,k:t,f:!!n}:e:null);function nn(e,t=null,n=null,r=0,s=null,o=(e===jt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&en(t),ref:t&&tn(t),scopeId:R,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:k};return c?(fn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Kt>0&&!a&&Wt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Wt.push(l),l}const rn=sn;function sn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==we||(e=qt),Qt(e)){const r=an(e,t,!0);return n&&fn(r,n),Kt>0&&!a&&Wt&&(6&r.shapeFlag?Wt[Wt.indexOf(e)]=r:Wt.push(r)),r.patchFlag=-2,r}if(Un(e)&&(e=e.__vccOpts),t){t=on(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Ft(e)?128:$(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return nn(e,t,n,s,o,c,a,!0)}function on(e){return e?(0,r.ju)(e)||lt(e)?(0,i.X$)({},e):e:null}function an(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?pn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&en(u),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(tn(t)):[o,tn(t)]:tn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&z(h,l.clone(h)),h}function cn(e=" ",t=0){return rn(Bt,null,e,t)}function ln(e,t){const n=rn($t,null,e);return n.staticCount=t,n}function un(e="",t=!1){return t?(Ht(),Jt(qt,null,e)):rn(qt,null,e)}function hn(e){return null==e||"boolean"===typeof e?rn(qt):(0,i.cy)(e)?rn(jt,null,e.slice()):Qt(e)?dn(e):rn(Bt,null,String(e))}function dn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:an(e)}function fn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),fn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||lt(t)?3===r&&k&&(1===k.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=k}}else if((0,i.Tn)(t)){if(65&r)return void fn(e,{default:t});t={default:t,_ctx:k},n=32}else t=String(t),64&r?(n=16,t=[cn(t)]):n=8;e.children=t,e.shapeFlag|=n}function pn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)?null!=s||null!=n||(0,i.CP)(e)||(t[e]=s):t[e]=n?[].concat(n,s):s}else""!==e&&(t[e]=r[e])}return t}function gn(e,t,n,r=null){o(e,t,7,[n,r])}const mn=We();let _n=0;function vn(){return _n}function yn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||mn,a={uid:_n++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gt(s,o),emitsOptions:Je(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ye.bind(null,a),e.ce&&e.ce(a),a}let wn=null;const bn=()=>wn||k;let En,Tn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};En=t("__VUE_INSTANCE_SETTERS__",e=>wn=e),Tn=t("__VUE_SSR_SETTERS__",e=>An=e)}const Cn=e=>{const t=wn;return En(e),e.scope.on(),()=>{e.scope.off(),En(t)}},In=()=>{wn&&wn.scope.off(),En(null)};function Sn(e){return 4&e.vnode.shapeFlag}let kn,Rn,An=!1;function On(e,t=!1,n=!1){t&&Tn(t);const{props:r,children:i}=e.vnode,s=Sn(e);ut(e,r,s,t),Tt(e,i,n||t);const o=s?Pn(e,t):void 0;return t&&Tn(!1),o}function Pn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ke);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?Ln(e):null,c=Cn(e),l=s(o,e,0,[e.props,n]),u=(0,i.yL)(l);if((0,r.bl)(),c(),!u&&!e.sp||ee(e)||Y(e),u){if(l.then(In,In),t)return l.then(n=>{Tn(!0);try{Nn(e,n,t)}finally{Tn(!1)}}).catch(t=>{a(t,e,0)});e.asyncDep=l}else Nn(e,l,t)}else xn(e,t)}function Nn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),xn(e,n)}function xn(e,t,n){const s=e.type;if(!e.render){if(!t&&kn&&!s.render){const t=s.template||De(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=kn(t,c)}}e.render=s.render||i.tE,Rn&&Rn(e)}{const t=Cn(e);(0,r.C4)();try{Oe(e)}finally{(0,r.bl)(),t()}}}const Dn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Ln(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Dn),slots:e.slots,emit:e.emit,expose:t}}function Mn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ie?Ie[n](e):void 0},has(e,t){return t in e||t in Ie}})):e.proxy}function Fn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Un(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const jn=(e,t)=>{const n=(0,r.EW)(e,t,An);return n};function Bn(e,t,n){try{Gt(-1);const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Qt(t)?rn(e,null,[t]):rn(e,t):rn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qt(n)&&(n=[n]),rn(e,t,n))}finally{Gt(1)}}const qn="3.5.44";n.d(t,["EW",0,jn,"FK",0,jt,"SS",0,pe,"bF",0,rn,"nI",0,bn])},5130:function(e,t,n){"use strict";n(3725),n(9838),n(9229),n(1339),n(8743),n(7746),n(5019),n(2598);var r=n(6768),i=(n(144),n(4232));
/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(de){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc");function p(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),m=Symbol("_vsh"),_={name:"show",beforeMount(e,{value:t},{transition:n}){e[g]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):v(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),v(e,!0),r.enter(e)):r.leave(e,()=>{v(e,!1)}):v(e,t))},beforeUnmount(e,{value:t}){v(e,t)}};function v(e,t){e.style.display=t?e[g]:"none",e[m]=!t}const y=Symbol("");const w=/(?:^|;)\s*display\s*:/;function b(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&T(r,t,"")}else for(const e in t)null==n[e]&&T(r,e,"");for(const s in n){"display"===s&&(o=!0);const a=n[s];null!=a?k(e,s,!(0,i.Kg)(t)&&t?t[s]:void 0,a)||T(r,s,a):T(r,s,"")}}else if(s){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,o=w.test(n)}}else t&&e.removeAttribute("style");g in e&&(s&&t===n||(e[g]=o?r.display:""),e[m]&&(r.display="none"))}const E=/\s*!important$/;function T(e,t,n){if((0,i.cy)(n))n.forEach(n=>T(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))E.test(n)?e.setProperty(t,n.replace(E,""),"important"):e.setProperty(t,n);else{const r=S(e,t);E.test(n)?e.setProperty((0,i.Tg)(r),n.replace(E,""),"important"):e[r]=n}}const C=["Webkit","Moz","ms"],I={};function S(e,t){const n=I[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return I[t]=r;r=(0,i.ZH)(r);for(let i=0;i<C.length;i++){const n=C[i]+r;if(n in e)return I[t]=n}return t}function k(e,t,n,r){return"TEXTAREA"===e.tagName&&("width"===t||"height"===t)&&(0,i.Kg)(r)&&n===r}const R="http://www.w3.org/1999/xlink";function A(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(R,t.slice(6,t.length)):e.setAttributeNS(R,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function O(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(de){0}c&&e.removeAttribute(s||t)}function P(e,t,n,r){e.addEventListener(t,n,r)}function N(e,t,n,r){e.removeEventListener(t,n,r)}const x=Symbol("_vei");function D(e,t,n,r,i=null){const s=e[x]||(e[x]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=F(t);if(r){const o=s[t]=q(r,i);P(e,n,o,a)}else o&&(N(e,n,o,a),s[t]=void 0)}}const L=/(Once|Passive|Capture)$/,M=/^on:?(?:Once|Passive|Capture)$/;function F(e){let t,n;while((n=e.match(L))&&!M.test(e))t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;const r=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[r,t]}let U=0;const j=Promise.resolve(),B=()=>U||(j.then(()=>U=0),U=Date.now());function q(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();const s=n.value;if((0,i.cy)(s)){const n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};const i=s.slice(),o=[e];for(let s=0;s<i.length;s++){if(e._stopped)break;const n=i[s];n&&(0,r.qL)(n,t,5,o)}}else(0,r.qL)(s,t,5,[e])};return n.value=e,n.attached=B(),n}const $=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,V=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?p(e,r,a):"style"===t?b(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||D(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):W(e,t,r,a))?(O(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||A(e,t,r,a,o,"value"!==t)):e._isVueCE&&(H(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!(0,i.Kg)(r)))?O(e,(0,i.PT)(t),r,o,t):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),A(e,t,r,a))};function W(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&$(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("sandbox"===t&&"IFRAME"===e.tagName)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$(t)||!(0,i.Kg)(n))&&t in e}function H(e,t){const n=e._def.props;if(!n)return!1;const r=(0,i.PT)(t);return Array.isArray(n)?n.some(e=>(0,i.PT)(e)===r):Object.keys(n).some(e=>(0,i.PT)(e)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function K(e){e.target.composing=!0}function G(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Y=Symbol("_assign"),X=Symbol("_initialValue");function J(e,t,n){return t&&(e=e.trim()),n&&(e=(0,i.bB)(e)),e}const Q={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&("text"===e.type?e[X]=e.defaultValue.replace(/[\r\n]/g,""):"textarea"===e.type&&(e[X]=e.defaultValue.replace(/\r\n?/g,"\n"))),e[Y]=z(i);const s=r||i.props&&"number"===i.props.type;P(e,t?"change":"input",t=>{t.target.composing||e[Y](J(e.value,n,s))}),(n||s)&&P(e,"change",()=>{e.value=J(e.value,n,s)}),t||(P(e,"compositionstart",K),P(e,"compositionend",G),P(e,"change",G))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const i=null==t?"":t,s=e[X];delete e[X],void 0===s||"text"!==e.type&&"textarea"!==e.type||e.value===s?e.value=i:e[Y](J(e.value,n,r))},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[Y]=z(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),l=null==t?"":t;if(c===l)return;const u=e.getRootNode();if((u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}};const Z={deep:!0,created(e,{value:t,modifiers:{number:n}},s){e._modelValue=t,P(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?(0,i.bB)(ne(e)):ne(e)),s=e.multiple,o=s?(0,i.vM)(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[s,s?(0,i.cy)(o)?t.slice():t:o];try{e[Y](o)}finally{(0,r.dY)(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[Y]=z(s)},mounted(e,{value:t}){te(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Y]=z(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,n&&n[0]===e.multiple&&ee(t,n[1],n[0])||te(e,t)}};function ee(e,t,n){if(!n)return(0,i.BX)(e,t);if((0,i.cy)(e))return(0,i.BX)(e,t);if((0,i.vM)(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function te(e,t){const n=e.multiple,r=(0,i.cy)(t);if(!n||r||(0,i.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=ne(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some(e=>String(e)===String(a)):(0,i.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,i.BX)(ne(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ne(e){return"_value"in e?e._value:e.value}const re=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>re.some(n=>e[`${n}Key`]&&!t.includes(n))},se=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)})},oe=(0,i.X$)({patchProp:V},d);let ae;function ce(){return ae||(ae=(0,r.K9)(oe))}const le=(...e)=>{const t=ce().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=he(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,ue(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function ue(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function he(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}n.d(t,["D$",0,se,"Ef",0,le,"Jo",0,Q,"aG",0,_,"u1",0,Z])},4232:function(e,t,n){"use strict";n.d(t,{BX:function(){return ne},C4:function(){return G},Tr:function(){return V},Y2:function(){return J},pD:function(){return r},u3:function(){return re}});n(3725),n(5019),n(8743),n(9838),n(1319),n(9471),n(1339);
/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===C(e),m=e=>"[object Set]"===C(e),_=e=>"[object Date]"===C(e),v=e=>"function"===typeof e,y=e=>"string"===typeof e,w=e=>"symbol"===typeof e,b=e=>null!==e&&"object"===typeof e,E=e=>(b(e)||v(e))&&v(e.then)&&v(e.catch),T=Object.prototype.toString,C=e=>T.call(e),I=e=>C(e).slice(8,-1),S=e=>"[object Object]"===C(e),k=e=>y(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},O=/-\w/g,P=A(e=>e.replace(O,e=>e.slice(1).toUpperCase())),N=/\B([A-Z])/g,x=A(e=>e.replace(N,"-$1").toLowerCase()),D=A(e=>e.charAt(0).toUpperCase()+e.slice(1)),L=A(e=>{const t=e?`on${D(e)}`:"";return t}),M=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=y(e)?Number(e):NaN;return isNaN(t)?e:t};let q;const $=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function V(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=y(r)?K(r):V(r);if(i)for(const e in i)t[e]=i[e]}return t}if(y(e)||b(e))return e}const W=/;(?![^(]*\))/g,H=/:([^]+)/,z=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function K(e){const t={};return e.replace(z,e=>e.startsWith("/*")?"":e).split(W).forEach(e=>{if(e){const n=e.split(H);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function G(e){let t="";if(y(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=G(e[n]);r&&(t+=r+" ")}else if(b(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",X=r(Y);function J(e){return!!e||""===e}function Q(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=ne(e[i],t[i],n);return r}function Z(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),i=new Uint8Array(r.length);for(const s of e){let e=-1;for(let t=0;t<r.length;t++)if(!i[t]&&ne(s,r[t],n)){e=t;break}if(e<0)return!1;i[e]=1}return!0}function ee(e,t,n){let r=g(e),i=g(t);if(r||i)return!(!r||!i)&&Z(e,t,n);if(r=m(e),i=m(t),r||i)return!(!r||!i)&&Z(e,t,n);const s=Object.keys(e).length,o=Object.keys(t).length;if(s!==o)return!1;for(const a in e){const r=e.hasOwnProperty(a),i=t.hasOwnProperty(a);if(r&&!i||!r&&i||!ne(e[a],t[a],n))return!1}return String(e)===String(t)}function te(e,t,n,r){n||(n=[new Map,new Map]);const[i,s]=n;if(i.has(e)||s.has(t))return i.get(e)===t&&s.get(t)===e;i.set(e,t),s.set(t,e);const o=r(e,t,n);return i.delete(e),s.delete(t),o}function ne(e,t,n){if(e===t)return!0;let r=_(e),i=_(t);return r||i?!(!r||!i)&&e.getTime()===t.getTime():(r=w(e),i=w(t),r||i?e===t:(r=p(e),i=p(t),r||i?!(!r||!i)&&te(e,t,n,Q):(r=b(e),i=b(t),r||i?!(!r||!i)&&te(e,t,n,ee):String(e)===String(t))))}function re(e,t){return e.findIndex(e=>ne(e,t))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>y(e)?e:null==e?"":p(e)||b(e)&&(e.toString===T||!v(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ae(e))}:w(t)?ae(t):!b(t)||p(t)||S(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};n.d(t,["$3",0,f,"$H",0,M,"Bm",0,w,"CE",0,g,"CP",0,l,"DY",0,F,"Gv",0,b,"J$",0,X,"Kg",0,y,"MZ",0,i,"Mp",0,c,"NO",0,a,"Oj",0,s,"PT",0,P,"Qd",0,S,"Ro",0,B,"SU",0,R,"TF",0,h,"Tg",0,x,"Tn",0,v,"We",0,$,"X$",0,u,"ZH",0,D,"Zf",0,I,"bB",0,j,"cy",0,p,"rU",0,L,"tE",0,o,"vM",0,m,"v_",0,se,"yI",0,k,"yL",0,E,"yQ",0,U])},4458:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then(function(){i()?(c(e,s,n),navigator.serviceWorker.ready.then(function(e){s("ready",e)}).catch(function(e){return o(s,e)})):(a(e,s,n),navigator.serviceWorker.ready.then(function(e){s("ready",e)}).catch(function(e){return o(s,e)}))})}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then(function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}}).catch(function(e){return o(t,e)})}function c(e,t,n){fetch(e).then(function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),l()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),l()):a(e,t,n)}).catch(function(e){return o(t,e)})}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){return o(emit,e)})}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise(function(e){return window.addEventListener("load",e)}):{then:function(e){return window.addEventListener("load",e)}})},6942:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});n(3725),n(9838),n(178);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if(!e.vueAxiosInstalled){var n=a(t)?c(t):t;if(l(n)){var r=u(e);if(r){var i=r<3?s:o;Object.keys(n).forEach(function(t){i(e,t,n[t])}),e.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function s(e,t,n){Object.defineProperty(e.prototype,t,{get:function(){return n}}),e[t]=n}function o(e,t,n){e.config.globalProperties[t]=n,e[t]=n}function a(e){return e&&"function"==typeof e.get&&"function"==typeof e.post}function c(e){return{axios:e,$http:e}}function l(e){return"object"===r(e)&&Object.keys(e).every(function(t){return a(e[t])})}function u(e){return e&&e.version&&Number(e.version.split(".")[0])}e=n.hmd(e),"object"==("undefined"==typeof exports?"undefined":r(exports))?e.exports=i:"function"==typeof define&&n.amdO?define([],function(){return i}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(i,window.axios)},1241:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},1776:function(e,t,n){"use strict";n.d(t,{j6:function(){return ue},om:function(){return le},Sx:function(){return ge},Wp:function(){return pe},KO:function(){return me}});n(3725),n(5019),n(1339),n(8743),n(9229),n(2598);var r=n(852),i=n(1363),s=n(4046);n(7746),n(9078);const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),g.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}y(e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",N="0.9.13",x=new i.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",B="@firebase/auth-compat",q="@firebase/database",$="@firebase/database-compat",V="@firebase/functions",W="@firebase/functions-compat",H="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="[DEFAULT]",se={[P]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[j]:"fire-auth",[B]:"fire-auth-compat",[q]:"fire-rtdb",[$]:"fire-rtdb-compat",[V]:"fire-fn",[W]:"fire-fn-compat",[H]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},oe=new Map,ae=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ae.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ae.set(t,e);for(const n of oe.values())ce(n,e);return!0}function ue(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new s.FA("app","Firebase",he);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw de.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw de.create("no-options");const a=oe.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw de.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ae.values())c.addComponent(r);const l=new fe(n,i,c);return oe.set(o,l),l}function ge(e=ie){const t=oe.get(e);if(!t&&e===ie&&(0,s.T9)())return pe();if(!t)throw de.create("no-app",{appName:e});return t}function me(e,t,n){var i;let s=null!==(i=se[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}le(new r.uA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",ve=1,ye="firebase-heartbeat-store";let we=null;function be(){return we||(we=C(_e,ve,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ye)}}}).catch(e=>{throw de.create("idb-open",{originalErrorMessage:e.message})})),we}async function Ee(e){try{const t=await be(),n=await t.transaction(ye).objectStore(ye).get(Ce(e));return n}catch(t){if(t instanceof s.g)x.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Te(e,t){try{const n=await be(),r=n.transaction(ye,"readwrite"),i=r.objectStore(ye);await i.put(t,Ce(e)),await r.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const e=de.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=1024,Se=2592e6;class ke{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Se}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=Ie){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){le(new r.uA("platform-logger",e=>new A(e),"PRIVATE")),le(new r.uA("heartbeat",e=>new ke(e),"PRIVATE")),me(P,N,e),me(P,N,"esm2017"),me("fire-js","")}Ne("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return l},uA:function(){return i}});n(1339),n(3725),n(5019);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return i},Vy:function(){return l}});n(8743),n(3725),n(9838),n(5019),n(1339);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},5141:function(e,t,n){"use strict";n.d(t,{A:function(){return Er}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Rt},hasStandardBrowserEnv:function(){return Ot},hasStandardBrowserWebWorkerEnv:function(){return Pt},navigator:function(){return At},origin:function(){return Nt}});n(8743),n(3725),n(178),n(1319),n(7746),n(9838),n(5417);function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,{iterator:a,toStringTag:c}=Symbol,l=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),u=e=>"string"===typeof e&&("__proto__"===e||"constructor"===e||"prototype"===e),h=(e,t,n)=>e===Object.prototype||!n&&null===t,d=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(t=>{if(u(t))return!1;const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&n.configurable&&!0===n.writable})},f=(e,t)=>{let n=e;const r=[];while(null!=n){if(-1!==r.indexOf(n))return!1;r.push(n);const i=o(n);if(h(n,i,n===e))return!1;if(l(n,t))return!0;n=i}return!1},p=(e,t)=>null!=e&&f(e,t)?e[t]:void 0,g=e=>{if(null==e||"object"!==typeof e&&"function"!==typeof e)return e;const t=o(e);if(null===t&&d(e))return e;const n=Object.create(null),r=Object.create(null),i=[];let s=e;while(null!=s){if(-1!==i.indexOf(s))break;i.push(s);const a=s===e?t:o(s);if(h(s,a,s===e))break;const c=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&c.push(...Object.getOwnPropertySymbols(s));for(const t of c)u(t)||l(r,t)||(n[t]=e[t],r[t]=!0);s=a}return n},m=(e=>t=>{const n=s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>m(t)===e),v=e=>t=>typeof t===e,{isArray:y}=Array,w=v("undefined");function b(e){return null!==e&&!w(e)&&null!==e.constructor&&!w(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const E=_("ArrayBuffer");function T(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&E(e.buffer),t}const C=v("string"),I=v("function"),S=v("number"),k=e=>null!==e&&"object"===typeof e,R=e=>!0===e||!1===e,A=e=>{if(!k(e))return!1;const t=o(e);return(null===t||t===Object.prototype||null===o(t))&&!f(e,c)&&!f(e,a)},O=e=>{if(!k(e)||b(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(t){return!1}},P=_("Date"),N=_("File"),x=e=>!(!e||"undefined"===typeof e.uri),D=e=>e&&"undefined"!==typeof e.getParts,L=_("Blob"),M=_("FileList"),F=_("Set"),U=e=>k(e)&&I(e.pipe);function j(){return"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const B=j(),q="undefined"!==typeof B.FormData?B.FormData:void 0,$=e=>{if(!e)return!1;if(q&&e instanceof q)return!0;const t=o(e);if(!t||t===Object.prototype)return!1;if(!I(e.append))return!1;const n=m(e);return"formdata"===n||"object"===n&&I(e.toString)&&"[object FormData]"===e.toString()},V=_("URLSearchParams"),[W,H,z,K]=["ReadableStream","Request","Response","Headers"].map(_),G=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Y(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),y(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(b(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function X(e,t){if(b(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const J=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:n.g)(),Q=e=>!w(e)&&e!==J;function Z(...e){const{caseless:t,skipUndefined:n}=Q(this)&&this||{},r={},i=(e,i)=>{if("__proto__"===i||"constructor"===i||"prototype"===i)return;const s=t&&"string"===typeof i&&X(r,i)||i,o=l(r,s)?r[s]:void 0;A(o)&&A(e)?r[s]=Z(o,e):A(e)?r[s]=Z({},e):y(e)?r[s]=e.slice():n&&w(e)||(r[s]=e)};for(let s=0,o=e.length;s<o;s++){const t=e[s];if(!t||b(t))continue;if(Y(t,i),"object"!==typeof t||y(t))continue;const n=Object.getOwnPropertySymbols(t);for(let e=0;e<n.length;e++){const r=n[e];he.call(t,r)&&i(t[r],r)}}return r}const ee=(e,t,n,{allOwnKeys:r}={})=>(Y(t,(t,r)=>{n&&I(t)?Object.defineProperty(e,r,{__proto__:null,value:i(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),te=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),ne=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},re=(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),s=i.length;while(s-- >0)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ie=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},se=e=>{if(!e)return null;if(y(e))return e;let t=e.length;if(!S(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},oe=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&o(Uint8Array)),ae=(e,t)=>{const n=e&&e[a],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},ce=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},le=_("HTMLFormElement"),ue=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:he}=Object.prototype,de=_("RegExp"),fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Y(n,(n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)}),Object.defineProperties(e,r)},pe=e=>{fe(e,(t,n)=>{if(I(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];I(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},ge=(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return y(e)?r(e):r(String(e).split(t)),n},me=()=>{},_e=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t;function ve(e){return!!(e&&I(e.append)&&"FormData"===e[c]&&e[a])}const ye=e=>{const t=new WeakSet,n=e=>{if(k(e)){if(t.has(e))return;if(b(e))return e;if(!("toJSON"in e)){let r;if(t.add(e),F(e)){r=[];for(const t of e){const e=n(t);!w(e)&&r.push(e)}}else r=y(e)?[]:{},Y(e,(e,t)=>{const i=n(e);!w(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},we=_("AsyncFunction"),be=e=>e&&(k(e)||I(e))&&I(e.then)&&I(e.catch),Ee=((e,t)=>e?setImmediate:t?((e,t)=>(J.addEventListener("message",({source:n,data:r})=>{n===J&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),J.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,I(J.postMessage)),Te="undefined"!==typeof queueMicrotask?queueMicrotask.bind(J):"undefined"!==typeof process&&process.nextTick||Ee,Ce=e=>null!=e&&I(e[a]),Ie=e=>null!=e&&f(e,a)&&Ce(e);var Se={isArray:y,isArrayBuffer:E,isBuffer:b,isFormData:$,isArrayBufferView:T,isString:C,isNumber:S,isBoolean:R,isObject:k,isPlainObject:A,isEmptyObject:O,isReadableStream:W,isRequest:H,isResponse:z,isHeaders:K,isUndefined:w,isDate:P,isFile:N,isReactNativeBlob:x,isReactNative:D,isBlob:L,isRegExp:de,isFunction:I,isStream:U,isURLSearchParams:V,isTypedArray:oe,isFileList:M,forEach:Y,merge:Z,extend:ee,trim:G,stripBOM:te,inherits:ne,toFlatObject:re,kindOf:m,kindOfTest:_,endsWith:ie,toArray:se,forEachEntry:ae,matchAll:ce,isHTMLForm:le,hasOwnProperty:l,hasOwnProp:l,hasOwnInPrototypeChain:f,getSafeProp:p,toSafeFlatObject:g,reduceDescriptors:fe,freezeMethods:pe,toObjectSet:ge,toCamelCase:ue,noop:me,toFiniteNumber:_e,findKey:X,global:J,isContextDefined:Q,isSpecCompliantForm:ve,toJSONObject:ye,isAsyncFn:we,isThenable:be,setImmediate:Ee,asap:Te,isIterable:Ce,isSafeIterable:Ie};n(1339),n(9229),n(7060),n(5019);const ke=Se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Re=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach(function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();const s=Se.hasOwnProp(t,n);!n||s&&Se.hasOwnProp(ke,n)||("set-cookie"===n?s?t[n].push(r):t[n]=[r]:t[n]=s?t[n]+", "+r:r)}),t};function Ae(e){let t=0,n=e.length;while(t<n){const n=e.charCodeAt(t);if(9!==n&&32!==n)break;t+=1}while(n>t){const t=e.charCodeAt(n-1);if(9!==t&&32!==t)break;n-=1}return 0===t&&n===e.length?e:e.slice(t,n)}n.dn(Re);const Oe=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Pe=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Ne(e,t){return Se.isArray(e)?e.map(e=>Ne(e,t)):Ae(String(e).replace(t,""))}const xe=e=>Ne(e,Oe),De=e=>Ne(e,Pe);function Le(e){const t=Object.create(null);return Se.forEach(e.toJSON(),(e,n)=>{t[n]=De(e)}),t}const Me=Symbol("internals");function Fe(e){return e&&String(e).trim().toLowerCase()}function Ue(e){return!1===e||null==e?e:Se.isArray(e)?e.map(Ue):xe(String(e))}function je(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Be=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function qe(e){let t=0,n=e.length;while(t<n){const n=e.charCodeAt(t);if(9!==n&&32!==n)break;t+=1}while(n>t){const t=e.charCodeAt(n-1);if(9!==t&&32!==t)break;n-=1}return 0===t&&n===e.length?e:e.slice(t,n)}function $e(e){const t=e.length-1;if(t<1||34!==e.charCodeAt(0)||34!==e.charCodeAt(t))return e;let n="";for(let r=1;r<t;r++){const i=e.charCodeAt(r);if(34===i)return e;if(92===i&&(r+=1,r>=t))return e;n+=e[r]}return n}function Ve(e){const t=Object.create(null),n=String(e);let r=0,i=!1,s=!1;function o(e){const i=qe(n.slice(r,e)),s=i.indexOf("=");if(s<1)return;const o=qe(i.slice(0,s));if(!Be.test(o))return;const a=o.toLowerCase();if("__proto__"===a||"constructor"===a||"prototype"===a)return;const c=qe(i.slice(s+1));t[a]=$e(c)}for(let a=0;a<n.length;a++){const e=n.charCodeAt(a);i?s?s=!1:92===e?s=!0:34===e&&(i=!1):34===e?i=!0:44!==e&&59!==e||(o(a),r=a+1)}return o(n.length),t}const We=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function He(e,t,n,r,i){return Se.isFunction(r)?r.call(this,t,n):(i&&(t=n),Se.isString(t)?Se.isString(r)?-1!==t.indexOf(r):Se.isRegExp(r)?r.test(t):void 0:void 0)}function ze(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ke(e,t){const n=Se.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}class Ge{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Fe(t);if(!i)return;const s=Se.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ue(e))}const s=(e,t)=>Se.forEach(e,(e,n)=>i(e,n,t));if(Se.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(Se.isString(e)&&(e=e.trim())&&!We(e))s(Re(e),t);else if(Se.isObject(e)&&Se.isSafeIterable(e)){let n,r,i=Object.create(null);for(const t of e){if(!Se.isArray(t))throw new TypeError("Object iterator must return a key-value pair");r=t[0],Se.hasOwnProp(i,r)?(n=i[r],i[r]=Se.isArray(n)?[...n,t[1]]:[n,t[1]]):i[r]=t[1]}s(i,t)}else null!=e&&i(t,e,n);return this}get(e,t){if(e=Fe(e),e){const n=Se.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return je(e);if(Se.isFunction(t))return t.call(this,e,n);if(Se.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Fe(e),e){const n=Se.findKey(this,e);return!(!n||void 0===this[n]||t&&!He(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Fe(e),e){const i=Se.findKey(n,e);!i||t&&!He(n,n[i],i,t)||(delete n[i],r=!0)}}return Se.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!He(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return Se.forEach(this,(r,i)=>{const s=Se.findKey(n,i);if(s)return t[s]=Ue(r),void delete t[i];const o=e?ze(i):String(i).trim();o!==i&&delete t[i],t[o]=Ue(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Se.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Se.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){const e=this.get("set-cookie");return Se.isArray(e)?e:null==e||!1===e?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Ve(e)}static concat(e,...t){const n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){const t=this[Me]=this[Me]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=Fe(e);n[t]||(Ke(r,e),n[t]=!0)}return Se.isArray(e)?e.forEach(i):i(e),this}}Ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Se.reduceDescriptors(Ge.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),Se.freezeMethods(Ge);var Ye=Ge;const Xe="[REDACTED ****]";function Je(e){if(Se.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);while(t&&t!==Object.prototype){if(Se.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Qe(e,t){const n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(null===e||"object"!==typeof e)return e;if(Se.isBuffer(e))return e;if(-1!==r.indexOf(e))return;let t;if(e instanceof Ye&&(e=e.toJSON()),r.push(e),Se.isArray(e))t=[],e.forEach((e,n)=>{const r=i(e);Se.isUndefined(r)||(t[n]=r)});else{if(!Se.isPlainObject(e)&&Je(e))return r.pop(),e;t=Object.create(null);for(const[r,s]of Object.entries(e)){const e=n.has(r.toLowerCase())?Xe:i(s);Se.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function Ze(e){try{return String(e)}catch(t){return""}}function et(e){const t=e.errors.map(e=>{try{return e&&e.message?Ze(e.message):Ze(e)}catch(t){return""}}).filter(Boolean).join("; ");return t||e.name||"AggregateError"}class tt extends Error{static from(e,t,n,r,i,s){let o=e.message;!o&&Se.isArray(e.errors)&&e.errors.length&&(o=et(e));const a=new tt(o,t||e.code,n,r,i);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,null!=e.status&&null==a.status&&(a.status=e.status),s&&Object.assign(a,s),a}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){const e=this.config,t=e&&Se.hasOwnProp(e,"redact")?e.redact:void 0,n=Se.isArray(t)&&t.length>0?Qe(e,t):Se.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}}tt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",tt.ERR_BAD_OPTION="ERR_BAD_OPTION",tt.ECONNABORTED="ECONNABORTED",tt.ETIMEDOUT="ETIMEDOUT",tt.ECONNREFUSED="ECONNREFUSED",tt.ERR_NETWORK="ERR_NETWORK",tt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",tt.ERR_DEPRECATED="ERR_DEPRECATED",tt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",tt.ERR_BAD_REQUEST="ERR_BAD_REQUEST",tt.ERR_CANCELED="ERR_CANCELED",tt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",tt.ERR_INVALID_URL="ERR_INVALID_URL",tt.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";var nt=tt;const rt=100;function it(e){return Se.isPlainObject(e)||Se.isArray(e)}function st(e){return Se.endsWith(e,"[]")?e.slice(0,-2):e}function ot(e,t,n){return e?e.concat(t).map(function(e,t){return e=st(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}function at(e){return Se.isArray(e)&&!e.some(it)}const ct=Se.toFlatObject(Se,{},null,function(e){return/^is[A-Z]/.test(e)});function lt(e,t,n){if(!Se.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(e,t)=>{const r=Se.getSafeProp(n,e);return Se.isUndefined(r)?t:r},i=r("metaTokens",!0),s=r("visitor")||g,o=r("dots",!1),a=r("indexes",!1),c=r("Blob")||"undefined"!==typeof Blob&&Blob,l=r("maxDepth",rt),u=c&&Se.isSpecCompliantForm(t),h=[];if(!Se.isFunction(s))throw new TypeError("visitor must be a function");function d(e){if(null===e)return"";if(Se.isDate(e))return e.toISOString();if(Se.isBoolean(e))return e.toString();if(!u&&Se.isBlob(e))throw new nt("Blob is not supported. Use a Buffer instead.");if(Se.isArrayBuffer(e)||Se.isTypedArray(e)){if(u&&"function"===typeof c)return new c([e]);throw new nt("Blob is not supported. Use a Buffer instead.",nt.ERR_NOT_SUPPORT)}return e}function f(e){if(e>l)throw new nt("Object is too deeply nested ("+e+" levels). Max depth: "+l,nt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(l===1/0)return JSON.stringify(e);const n=[];return JSON.stringify(e,function(e,r){if(!Se.isObject(r))return r;while(n.length&&n[n.length-1]!==this)n.pop();return n.push(r),f(t+n.length-1),r})}function g(e,n,r){let s=e;if(Se.isReactNative(t)&&Se.isReactNativeBlob(e))return t.append(ot(r,n,o),d(e)),!1;if(e&&!r&&"object"===typeof e)if(Se.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=p(e,1);else if(Se.isArray(e)&&at(e)||(Se.isFileList(e)||Se.endsWith(n,"[]"))&&(s=Se.toArray(e)))return n=st(n),s.forEach(function(e,r){!Se.isUndefined(e)&&null!==e&&t.append(!0===a?ot([n],r,o):null===a?n:n+"[]",d(e))}),!1;return!!it(e)||(t.append(ot(r,n,o),d(e)),!1)}const m=Object.assign(ct,{defaultVisitor:g,convertValue:d,isVisitable:it});function _(e,n,r=0){if(!Se.isUndefined(e)){if(f(r),-1!==h.indexOf(e))throw new Error("Circular reference detected in "+n.join("."));h.push(e),Se.forEach(e,function(e,i){const o=!(Se.isUndefined(e)||null===e)&&s.call(t,e,Se.isString(i)?i.trim():i,n,m);!0===o&&_(e,n?n.concat(i):[i],r+1)}),h.pop()}}if(!Se.isObject(e))throw new TypeError("data must be an object");return _(e),t}var ut=lt;function ht(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function dt(e,t){this._pairs=[],e&&ut(e,this,t)}const ft=dt.prototype;ft.append=function(e,t){this._pairs.push([e,t])},ft.toString=function(e){const t=e?t=>e.call(this,t,ht):ht;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var pt=dt;function gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function mt(e,t,n){if(!t)return e;e=e||"";const r=Se.isFunction(n)?{serialize:n}:n,i=Se.getSafeProp(r,"encode")||gt,s=Se.getSafeProp(r,"serialize");let o;if(o=s?s(t,r):Se.isURLSearchParams(t)?t.toString():new pt(t,r).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const _t=Symbol("internals");function vt(e){return e?e.length:0}function yt(e){if(e)while(e.length&&null===e[e.length-1])e.pop()}function wt(e,t){const n=e.handlers,r=vt(n);n!==t.handlersRef?(t.handlersRef=n,t.handlerEntries.clear()):r!==t.handlersLength&&(r?t.handlerEntries.forEach(function(e,r){n[e.index]!==e.handler&&t.handlerEntries.delete(r)}):t.handlerEntries.clear()),t.handlersLength=r}class bt{constructor(){this.handlers=[],this[_t]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,t,n){const r={fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null},i=this[_t];null==this.handlers&&(this.handlers=[]),wt(this,i);const s=i.nextId++;return this.handlers.push(r),i.handlerEntries.set(s,{handler:r,index:this.handlers.length-1}),i.handlersLength=this.handlers.length,s}eject(e){const t=this[_t];wt(this,t);const n=t.handlerEntries.get(e);if(n){if(t.handlerEntries.delete(e),this.handlers[n.index]!==n.handler)return;this.handlers[n.index]=null,t.iterationDepth||(yt(this.handlers),t.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],wt(this,this[_t]))}forEach(e){const t=this[_t];wt(this,t),t.iterationDepth++;try{Se.forEach(this.handlers,function(t){null!==t&&e(t)})}finally{--t.iterationDepth||(wt(this,t),yt(this.handlers),t.handlersLength=vt(this.handlers))}}}var Et=bt,Tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ct="undefined"!==typeof URLSearchParams?URLSearchParams:pt,It="undefined"!==typeof FormData?FormData:null,St="undefined"!==typeof Blob?Blob:null,kt={isBrowser:!0,classes:{URLSearchParams:Ct,FormData:It,Blob:St},protocols:["http","https","file","blob","url","data"]};const Rt="undefined"!==typeof window&&"undefined"!==typeof document,At="object"===typeof navigator&&navigator||void 0,Ot=Rt&&(!At||["ReactNative","NativeScript","NS"].indexOf(At.product)<0),Pt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Nt=Rt&&window.location.href||"http://localhost";var xt={...r,...kt};function Dt(e,t){return ut(e,new xt.classes.URLSearchParams,{visitor:function(e,t,n,r){return xt.isNode&&Se.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}const Lt=100;function Mt(e){if(e>Lt)throw new nt("FormData field is too deeply nested ("+e+" levels). Max depth: "+Lt,nt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ft(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;while(null!==(r=n.exec(e)))Mt(t.length),t.push("[]"===r[0]?"":r[1]||r[0]);return t}function Ut(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function jt(e){function t(e,n,r,i){Mt(i);let s=e[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&Se.isArray(r)?r.length:s,a)return Se.hasOwnProp(r,s)?r[s]=Se.isArray(r[s])?r[s].concat(n):[r[s],n]:r[s]=n,!o;Se.hasOwnProp(r,s)&&Se.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&Se.isArray(r[s])&&(r[s]=Ut(r[s])),!o}if(Se.isFormData(e)&&Se.isFunction(e.entries)){const n={};return Se.forEachEntry(e,(e,r)=>{t(Ft(e),r,n,0)}),n}return null}var Bt=jt;const qt=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]);var $t=qt;const Vt=(e,t)=>null!=e&&Se.hasOwnProp(e,t)?e[t]:void 0;function Wt(e,t,n){if(Se.isString(e))try{return(t||JSON.parse)(e),Se.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Ht={transitional:Tt,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=Se.isObject(e);i&&Se.isHTMLForm(e)&&(e=new FormData(e));const s=Se.isFormData(e);if(s)return r?JSON.stringify(Bt(e)):e;if(Se.isArrayBuffer(e)||Se.isBuffer(e)||Se.isStream(e)||Se.isFile(e)||Se.isBlob(e)||Se.isReadableStream(e))return e;if(Se.isArrayBufferView(e))return e.buffer;if(Se.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){const t=Vt(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dt(e,t).toString();if((o=Se.isFileList(e))||n.indexOf("multipart/form-data")>-1){const n=Vt(this,"env"),r=n&&n.FormData;return ut(o?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType("application/json",!1),Wt(e)):e}],transformResponse:[function(e){const t=Vt(this,"transitional")||Ht.transitional,n=t&&t.forcedJSONParsing,r=Vt(this,"responseType"),i="json"===r;if(Se.isResponse(e)||Se.isReadableStream(e))return e;if(e&&Se.isString(e)&&(n&&!r||i)){const n=t&&t.silentJSONParsing,r=!n&&i;try{return JSON.parse(e,Vt(this,"parseReviver"))}catch(s){if(r){if("SyntaxError"===s.name)throw nt.from(s,nt.ERR_BAD_RESPONSE,this,null,Vt(this,"response"));throw s}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xt.classes.FormData,Blob:xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Se.forEach($t,e=>{Ht.headers[e]={}});var zt=Ht;function Kt(e,t){const n=this||zt,r=t||n,i=Ye.from(r.headers);let s=r.data;return Se.forEach(e,function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Gt(e){return!(!e||!e.__CANCEL__)}class Yt extends nt{constructor(e,t,n){super(null==e?"canceled":e,nt.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}}var Xt=Yt;function Jt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new nt("Request failed with status code "+n.status,n.status>=400&&n.status<500?nt.ERR_BAD_REQUEST:nt.ERR_BAD_RESPONSE,n.config,n.request,n)):e(n)}const Qt=/[\t\n\r]/g;function Zt(e){if("string"!==typeof e)return e;let t=0;while(t<e.length&&e.charCodeAt(t)<=32)t++;return e.slice(t).replace(Qt,"")}function en(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[o];i||(i=c),n[s]=a,r[s]=c;let u=o,h=0;while(u!==s)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}}var nn=tn;function rn(e,t){let n,r,i=0,s=1e3/t;const o=(t,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),e(...t)},a=(...e)=>{const t=Date.now(),a=t-i;a>=s?o(e,t):(n=e,r||(r=setTimeout(()=>{r=null,o(n)},s-a)))},c=()=>n&&o(n),l=(...e)=>o(e);return[a,c,l]}var sn=rn;const on=(e,t,n=3)=>{let r=0;const i=nn(50,250);return sn(n=>{if(!n||!Se.isNumber(n.loaded))return;const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=Math.max(0,null!=o?Math.min(s,o):s),c=Math.max(0,a-r),l=i(c);r=Math.max(r,a);const u={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-a)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0};e(u)},n)},an=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},cn=(e,t=Se.asap)=>(...n)=>t(()=>e(...n));n(9078);var ln=xt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,xt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(xt.origin),xt.navigator&&/(msie|trident)/i.test(xt.navigator.userAgent)):()=>!0,un=xt.hasStandardBrowserEnv?{write(e,t,n,r,i,s,o){if("undefined"===typeof document)return;const a=[`${e}=${encodeURIComponent(t)}`];Se.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),Se.isString(r)&&a.push(`path=${r}`),Se.isString(i)&&a.push(`domain=${i}`),!0===s&&a.push("secure"),Se.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(e){if("undefined"===typeof document)return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const i=t[r].replace(/^\s+/,""),s=i.indexOf("=");if(-1!==s&&i.slice(0,s)===e)try{return decodeURIComponent(i.slice(s+1))}catch(n){return i.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function hn(e){return"string"===typeof e&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dn(e,t){if(!t)return e;let n=e.length;while(n>0&&47===e.charCodeAt(n-1))n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const fn=/^https?:(?!\/\/)/i;function pn(e){return e?e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n="")=>`${t}${n}${Xe}`):e}function gn(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Xe}@`),n=t.indexOf("#"),r=-1===n?t:t.slice(0,n),i=r.replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Xe}`);return-1===n?i:`${i}#${pn(t.slice(n+1))}`}function mn(e,t){if("string"===typeof e){const n=Zt(e);if(fn.test(n))throw new nt(`Invalid URL ${JSON.stringify(gn(n))}: missing "//" after protocol`,nt.ERR_INVALID_URL,t)}}function _n(e,t,n,r){mn(t,r);let i=!hn(t);return e&&(i||!1===n)?(mn(e,r),dn(e,t)):t}const vn=e=>e instanceof Ye?{...e}:e,yn=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function wn(e,t){e=e||{},t=t||{};const n=Object.create(null);function r(e,t,n,r){return Se.isPlainObject(e)&&Se.isPlainObject(t)?Se.merge.call({caseless:r},e,t):Se.isPlainObject(t)?Se.merge({},t):Se.isArray(t)?t.slice():t}function i(e,t,n,i){return Se.isUndefined(t)?Se.isUndefined(e)?void 0:r(void 0,e,n,i):r(e,t,n,i)}function s(e,t){if(!Se.isUndefined(t))return r(void 0,t)}function o(e,t){return Se.isUndefined(t)?Se.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n){const r=Se.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!Se.isUndefined(r)){if(!Se.isPlainObject(r))return;if(Se.hasOwnProp(r,n))return r[n]}const i=Se.hasOwnProp(e,"transitional")?e.transitional:void 0;if(Se.isPlainObject(i)&&Se.hasOwnProp(i,n))return i[n]}function c(n,i,s){return Se.hasOwnProp(t,s)?r(n,i):Se.hasOwnProp(e,s)?r(void 0,n):void 0}Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(vn(e),vn(t),n,!0)};return Se.forEach(yn({...e,...t}),function(r){if("__proto__"===r||"constructor"===r||"prototype"===r)return;const s=Se.hasOwnProp(l,r)?l[r]:i,o=Se.hasOwnProp(e,r)?e[r]:void 0,a=Se.hasOwnProp(t,r)?t[r]:void 0,u=s(o,a,r);Se.isUndefined(u)&&s!==c||(n[r]=u)}),Se.hasOwnProp(t,"validateStatus")&&Se.isUndefined(t.validateStatus)&&!1===a("validateStatusUndefinedResolves")&&(Se.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const bn=["content-type","content-length"];function En(e,t,n){"content-only"===n?Object.entries(t||{}).forEach(([t,n])=>{bn.includes(t.toLowerCase())&&e.set(t,n)}):e.set(t)}const Tn=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Cn(e){const t=wn({},e),n=e=>Se.hasOwnProp(t,e)?t[e]:void 0,r=n("data");let i=n("withXSRFToken");const s=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const c=n("auth"),l=n("baseURL"),u=n("allowAbsoluteUrls"),h=n("url");if(t.headers=a=Ye.from(a),t.url=mt(_n(l,h,u,t),n("params"),n("paramsSerializer")),c){const t=Se.getSafeProp(c,"username")||"",n=Se.getSafeProp(c,"password")||"";try{a.set("Authorization","Basic "+btoa(t+":"+(n?Tn(n):"")))}catch(d){throw nt.from(d,nt.ERR_BAD_OPTION_VALUE,e)}}if(Se.isFormData(r)){const e=Se.getSafeProp(r,"getHeaders");xt.hasStandardBrowserEnv||xt.hasStandardBrowserWebWorkerEnv||Se.isReactNative(r)?a.setContentType(void 0):Se.isFunction(e)&&En(a,e.call(r),n("formDataHeaderPolicy"))}if(xt.hasStandardBrowserEnv){Se.isFunction(i)&&(i=i(t));const e=!0===i||null==i&&ln(t.url);if(e){const e=s&&o&&un.read(o);e&&a.set(s,e)}}return t}var In=Cn;const Sn="undefined"!==typeof XMLHttpRequest;var kn=Sn&&function(e){return new Promise(function(t,n){const r=In(e);let i=r.data;const s=Ye.from(r.headers).normalize();let o,a,c,l,u,h,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function g(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let m=new XMLHttpRequest;function _(i){if(!m)return;if(0===m.status&&"file"!==(en(Zt(r.url))||en(xt.origin))&&(!m.responseURL||!m.responseURL.startsWith("file:")))return n(new nt("Request aborted",nt.ECONNABORTED,e,m)),g(),void(m=null);try{i?h&&h(i):u&&u()}catch(c){setTimeout(()=>{throw c})}if(!m)return;const s=Ye.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),o=d&&"text"!==d&&"json"!==d?m.response:m.responseText,a={data:o,status:m.status,statusText:m.statusText,headers:s,config:e,request:m};Jt(function(e){t(e),g()},function(e){n(e),g()},a),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=_:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&m.responseURL.startsWith("file:"))&&setTimeout(_)},m.onabort=function(){m&&(n(new nt("Request aborted",nt.ECONNABORTED,e,m)),g(),m=null)},m.onerror=function(t){const r=t&&t.message?t.message:"Network Error",i=new nt(r,nt.ERR_NETWORK,e,m);i.event=t||null,n(i),g(),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Tt;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new nt(t,i.clarifyTimeoutError?nt.ETIMEDOUT:nt.ECONNABORTED,e,m)),g(),m=null},void 0===i&&s.setContentType(null),"setRequestHeader"in m&&Se.forEach(Le(s),function(e,t){m.setRequestHeader(t,e)}),Se.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([c,u,h]=on(p,!0),m.addEventListener("progress",c)),f&&m.upload&&([a,l]=on(f),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(o=t=>{m&&(n(!t||t.type?new Xt(null,e,m):t),m.abort(),g(),m=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const v=en(r.url);if(v&&!xt.protocols.includes(v))return n(new nt("Unsupported protocol "+v+":",nt.ERR_BAD_REQUEST,e)),void g();m.send(i||null)})};const Rn=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const i=function(e){if(!r){r=!0,o();const t=e instanceof Error?e:this.reason;n.abort(t instanceof nt?t:new Xt(t instanceof Error?t.message:t))}};let s=t&&setTimeout(()=>{s=null,i(new nt(`timeout of ${t}ms exceeded`,nt.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)}),e=null)};e.forEach(e=>{r||(e.aborted?i.call(e):e.addEventListener("abort",i,{once:!0}))});const{signal:a}=n;return a.unsubscribe=()=>Se.asap(o),a};var An=Rn;const On=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;while(i<n)r=i+t,yield e.slice(i,r),i=r},Pn=async function*(e,t){for await(const n of Nn(e))yield*On(n,t)},Nn=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},xn=(e,t,n,r)=>{const i=Pn(e,t);let s,o=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=o+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel(e){return a(e),i.return()}},{highWaterMark:2})},Dn=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Ln=(e,t,n)=>t+2<n&&Dn(e.charCodeAt(t+1))&&Dn(e.charCodeAt(t+2)),Mn=e=>e<=57?e-48:(223&e)-55,Fn=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||43===e||47===e||45===e||95===e,Un=e=>9===e||10===e||12===e||13===e||32===e,jn=e=>{const t=Math.floor(e/4),n=e%4;return 3*t+(2===n?1:3===n?2:0)},Bn=e=>{const t=e.length;let n=0;return t>0&&61===e.charCodeAt(t-1)&&(n++,t>1&&61===e.charCodeAt(t-2)&&n++),Math.floor(3*(t-n)/4)},qn=e=>{const t=e.length;let n=0,r=0,i=!1;for(let s=0;s<t;s++){let o=e.charCodeAt(s);37===o&&Ln(e,s,t)&&(o=16*Mn(e.charCodeAt(s+1))+Mn(e.charCodeAt(s+2)),s+=2),Un(o)||(61!==o?!Fn(o)||r>0?i=!0:n++:r++)}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?Bn(e):jn(n)},$n=(e,t)=>{if(!e||"string"!==typeof e)return 0;if(!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const r=e.slice(5,n),i=e.slice(n+1),s=/;base64/i.test(r);if(s)return t(i);let o=0;for(let a=0,c=i.length;a<c;a++){const e=i.charCodeAt(a);if(37===e&&Ln(i,a,c))o+=1,a+=2;else if(e<128)o+=1;else if(e<2048)o+=2;else if(e>=55296&&e<=56319&&a+1<c){const e=i.charCodeAt(a+1);e>=56320&&e<=57343?(o+=4,a++):o+=3}else o+=3}return o};function Vn(e){const t="string"===typeof e?e.indexOf("#"):-1;return $n(-1===t?e:e.slice(0,t),qn)}const Wn=65536,Hn={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:zn}=Se,Kn=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Gn=e=>{if(!Se.isString(e))return e;try{return decodeURIComponent(e)}catch(t){return e}},Yn=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Xn=e=>{const t=e.indexOf("://");let n=e;return-1!==t&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},Jn=e=>{const t=void 0!==Se.global&&null!==Se.global?Se.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=Se.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:i,Request:s,Response:o}=e,a=i?zn(i):"function"===typeof fetch,c=zn(s),l=zn(o);if(!a)return!1;const u=a&&zn(n),h=a&&("function"===typeof r?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new s(e).arrayBuffer())),d=c&&u&&Yn(()=>{let e=!1;const t=new s(xt.origin,{body:new n,method:"POST",get duplex(){return e=!0,"half"}}),r=t.headers.has("Content-Type");return null!=t.body&&t.body.cancel(),e&&!r}),f=l&&u&&Yn(()=>Se.isReadableStream(new o("").body)),p={stream:f&&(e=>e.body)};a&&(()=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!p[e]&&(p[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new nt(`Response type '${e}' is not supported`,nt.ERR_NOT_SUPPORT,n)})})})();const g=async e=>{if(null==e)return 0;if(Se.isBlob(e))return e.size;if(Se.isSpecCompliantForm(e)){const t=new s(xt.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Se.isArrayBufferView(e)||Se.isArrayBuffer(e)?e.byteLength:(Se.isURLSearchParams(e)&&(e+=""),Se.isString(e)?(await h(e)).byteLength:void 0)},m=async(e,t)=>{const n=Se.toFiniteNumber(e.getContentLength());return null==n?g(t):n};return async e=>{let{url:t,method:n,data:a,signal:l,cancelToken:h,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:w,headers:b,withCredentials:E="same-origin",fetchOptions:T,maxContentLength:C,maxBodyLength:I,maxRedirects:S}=In(e);const k=Se.isNumber(C)&&C>-1,R=Se.isNumber(I)&&I>-1,A=t=>Se.hasOwnProp(e,t)?e[t]:void 0;let O=i||fetch;w=w?(w+"").toLowerCase():"text";let P=An([l,h&&h.toAbortSignal()],_),N=null;const x=P&&P.unsubscribe&&(()=>{P.unsubscribe()});let D,L=null;const M=()=>new nt("Request body larger than maxBodyLength limit",nt.ERR_BAD_REQUEST,e,N);try{let i;const l=A("auth");if(l){const e=Se.getSafeProp(l,"username")||"",t=Se.getSafeProp(l,"password")||"";i={username:e,password:t}}if(Xn(t)){const e=new URL(t,xt.origin);if(!i&&(e.username||e.password)){const t=Gn(e.username),n=Gn(e.password);i={username:t,password:n}}(e.username||e.password)&&(e.username="",e.password="",t=e.href)}if(i&&(b.delete("authorization"),b.set("Authorization","Basic "+btoa(Kn((i.username||"")+":"+(i.password||""))))),k&&"string"===typeof t&&t.startsWith("data:")){const n=Vn(t);if(n>C)throw new nt("maxContentLength size of "+C+" exceeded",nt.ERR_BAD_RESPONSE,e,N)}if(R&&"get"!==n&&"head"!==n){const e=await g(a);if("number"===typeof e&&isFinite(e)&&(D=e,e>I))throw M()}const h=R&&(Se.isReadableStream(a)||Se.isStream(a)),_=(e,t,n)=>xn(e,Wn,e=>{if(R&&e>I)throw L=M();t&&t(e)},n);if(d&&"get"!==n&&"head"!==n&&(y||h)){if(D=null==D?await m(b,a):D,0!==D||h){let e,n=new s(t,{method:"POST",body:a,duplex:"half"});if(Se.isFormData(a)&&(e=n.headers.get("content-type"))&&b.setContentType(e),n.body){const[e,t]=y&&an(D,on(cn(y)))||[];a=_(n.body,e,t)}}}else if(h&&!c&&u&&"get"!==n&&"head"!==n)a=_(a);else if(h&&c&&!d&&"get"!==n&&"head"!==n)throw new nt("Stream request bodies are not supported by the current fetch implementation",nt.ERR_NOT_SUPPORT,e,N);Se.isString(E)||(E=E?"include":"omit");const F=c&&"credentials"in s.prototype;if(Se.isFormData(a)){const e=b.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&b.delete("content-type")}b.set("User-Agent","axios/1.20.0",!1);const U=null==T?T:Object.assign(Object.create(null),T);U&&(delete U.body,delete U.headers,delete U.method,delete U.signal,delete U.duplex,delete U.credentials);const j=Object.assign(Object.create(null),U,{signal:P,method:n.toUpperCase(),headers:Le(b.normalize()),body:a,duplex:"half",credentials:F?E:void 0});c&&(Se.forEach(Hn,(e,t)=>{void 0===j[t]&&(j[t]=e)}),void 0===j.signal&&(j.signal=null),void 0===j.body&&(j.body=null)),0===S&&(j.redirect="manual",U&&(U.redirect="manual")),N=c&&new s(t,j);let B=await(c?O(N,U):O(t,j));const q=Ye.from(B.headers);if(k){const t=Se.toFiniteNumber(q.getContentLength());if(null!=t&&t>C)throw new nt("maxContentLength size of "+C+" exceeded",nt.ERR_BAD_RESPONSE,e,N)}const $=f&&("stream"===w||"response"===w);if(f&&B.body&&(v||k||$&&x)){const t={};["status","statusText","headers"].forEach(e=>{t[e]=B[e]});const n=Se.toFiniteNumber(q.getContentLength()),[r,i]=v&&an(n,on(cn(v),!0))||[];let s=0;const a=t=>{if(k&&(s=t,s>C))throw new nt("maxContentLength size of "+C+" exceeded",nt.ERR_BAD_RESPONSE,e,N);r&&r(t)};B=new o(xn(B.body,Wn,a,()=>{i&&i(),x&&x()}),t)}w=w||"text";let V=await p[Se.findKey(p,w)||"text"](B,e);if(k&&!f&&!$){let t;if(null!=V&&("number"===typeof V.byteLength?t=V.byteLength:"number"===typeof V.size?t=V.size:"string"===typeof V&&(t="function"===typeof r?(new r).encode(V).byteLength:V.length)),"number"===typeof t&&t>C)throw new nt("maxContentLength size of "+C+" exceeded",nt.ERR_BAD_RESPONSE,e,N)}return!$&&x&&x(),await new Promise((t,n)=>{Jt(t,n,{data:V,headers:Ye.from(B.headers),status:B.status,statusText:B.statusText,config:e,request:N})})}catch(F){if(x&&x(),P&&P.aborted&&P.reason instanceof nt){const t=P.reason;throw t.config=e,N&&(t.request=N),F!==t&&Object.defineProperty(t,"cause",{__proto__:null,value:F,writable:!0,enumerable:!1,configurable:!0}),t}if(L)throw N&&!L.request&&(L.request=N),L;if(F instanceof nt)throw N&&!F.request&&(F.request=N),F;if(F&&"TypeError"===F.name&&/Load failed|fetch/i.test(F.message)){const t=new nt("Network Error",nt.ERR_NETWORK,e,N,F&&F.response);throw Object.defineProperty(t,"cause",{__proto__:null,value:F.cause||F,writable:!0,enumerable:!1,configurable:!0}),t}throw nt.from(F,F&&F.code,e,N,F&&F.response)}}},Qn=new Map,Zn=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:i}=t,s=[r,i,n];let o,a,c=s.length,l=c,u=Qn;while(l--)o=s[l],a=u.get(o),void 0===a&&u.set(o,a=l?new Map:Jn(t)),u=a;return a};Zn();const er={http:null,xhr:kn,fetch:{get:Zn}};Se.forEach(er,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch(n){}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const tr=e=>`- ${e}`,nr=e=>Se.isFunction(e)||null===e||!1===e;function rr(e,t){e=Se.isArray(e)?e:[e];const{length:n}=e;let r,i;const s={};for(let o=0;o<n;o++){let n;if(r=e[o],i=r,!nr(r)&&(i=er[(n=String(r)).toLowerCase()],void 0===i))throw new nt(`Unknown adapter '${n}'`);if(i&&(Se.isFunction(i)||(i=i.get(t))))break;s[n||"#"+o]=i}if(!i){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));let t=n?e.length>1?"since :\n"+e.map(tr).join("\n"):" "+tr(e[0]):"as no adapter specified";throw new nt("There is no suitable adapter to dispatch the request "+t,nt.ERR_NOT_SUPPORT)}return i}var ir={getAdapter:rr,adapters:er};function sr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Xt(null,e)}function or(e){const t=Se.toSafeFlatObject(e);sr(t),t.headers=Ye.from(Se.getSafeProp(t,"headers")),t.data=Kt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const n=ir.getAdapter(t.adapter||zt.adapter,t);return n(t).then(function(e){sr(t),t.response=e;try{e.data=Kt.call(t,t.transformResponse,e)}finally{delete t.response}return e.headers=Ye.from(e.headers),e},function(e){if(!Gt(e)&&(sr(t),e&&e.response)){t.response=e.response;try{e.response.data=Kt.call(t,t.transformResponse,e.response)}finally{delete t.response}e.response.headers=Ye.from(e.response.headers)}return Promise.reject(e)})}const ar={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ar[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const cr={};function lr(e,t,n){if("object"!==typeof e||null===e)throw new nt("options must be an object",nt.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=Object.prototype.hasOwnProperty.call(t,s)?t[s]:void 0;if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new nt("option "+s+" must be "+n,nt.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new nt("Unknown option "+s,nt.ERR_BAD_OPTION)}}ar.transitional=function(e,t,n){function r(e,t){return"[Axios v1.20.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new nt(r(i," has been removed"+(t?" in "+t:"")),nt.ERR_DEPRECATED);return t&&!cr[i]&&(cr[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}},ar.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};var ur={assertOptions:lr,validators:ar};const hr=ur.validators;class dr{constructor(e){this.defaults=e||{},this.interceptors={request:new Et,response:new Et}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error)try{let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack;let r="";if("string"===typeof t){const e=t.indexOf("\n");r=-1===e?"":t.slice(e+1)}if(n.stack){if(r){const e=r.indexOf("\n"),t=-1===e?-1:r.indexOf("\n",e+1),i=-1===t?"":r.slice(t+1);String(n.stack).endsWith(i)||(n.stack+="\n"+r)}}else n.stack=r}catch(r){}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=wn(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&ur.assertOptions(n,{silentJSONParsing:hr.transitional(hr.boolean),forcedJSONParsing:hr.transitional(hr.boolean),clarifyTimeoutError:hr.transitional(hr.boolean),legacyInterceptorReqResOrdering:hr.transitional(hr.boolean),advertiseZstdAcceptEncoding:hr.transitional(hr.boolean),validateStatusUndefinedResolves:hr.transitional(hr.boolean)},!1),null!=r&&(Se.isFunction(r)?t.paramsSerializer={serialize:r}:ur.assertOptions(r,{encode:hr.function,serialize:hr.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ur.assertOptions(t,{baseUrl:hr.spelling("baseURL"),withXsrfToken:hr.spelling("withXSRFToken")},!0),t.method=(Se.getSafeProp(t,"method")||Se.getSafeProp(this.defaults,"method")||"get").toLowerCase();let s=i&&Se.merge(i.common,i[t.method]);i&&Se.forEach($t.concat("common"),e=>{delete i[e]}),t.headers=Ye.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach(function(e){if("function"===typeof e.runWhen&&!1===e.runWhen(t))return;a=a&&e.synchronous;const n=t.transitional||Tt,r=n&&n.legacyInterceptorReqResOrdering;r?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});const c=[];let l;this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let u,h=0;if(!a){const e=[or.bind(this),void 0];e.unshift(...o),e.push(...c),u=e.length,l=Promise.resolve(t);while(h<u)l=l.then(e[h++],e[h++]);return l}u=o.length;let d=t;while(h<u){const e=o[h++],t=o[h++];try{d=e?e(d):d}catch(f){if(!t){l=Promise.reject(f);break}try{const e=t.call(this,f);Se.isThenable(e)&&(l=Promise.resolve(e).then(()=>or.call(this,d)))}catch(p){l=Promise.reject(p)}break}}if(!l)try{l=or.call(this,d)}catch(f){l=Promise.reject(f)}h=0,u=c.length;while(h<u)l=l.then(c[h++],c[h++]);return l}getUri(e){e=wn(this.defaults,e);const t=_n(e.baseURL,e.url,e.allowAbsoluteUrls,e);return mt(t,e.params,e.paramsSerializer)}}Se.forEach(["delete","get","head","options"],function(e){dr.prototype[e]=function(t,n){return this.request(wn(n||{},{method:e,url:t,data:n&&Se.hasOwnProp(n,"data")?n.data:void 0}))}}),Se.forEach(["post","put","patch","query"],function(e){function t(t){return function(n,r,i){return this.request(wn(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}dr.prototype[e]=t(),"query"!==e&&(dr.prototype[e+"Form"]=t(!0))});var fr=dr;class pr{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Xt(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new pr(function(t){e=t});return{token:t,cancel:e}}}var gr=pr;function mr(e){return function(t){return e.apply(null,t)}}function _r(e){return Se.isObject(e)&&!0===e.isAxiosError}const vr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vr).forEach(([e,t])=>{void 0===vr[t]&&(vr[t]=e)});var yr=vr;function wr(e){const t=new fr(e),n=i(fr.prototype.request,t);return Se.extend(n,fr.prototype,t,{allOwnKeys:!0}),Se.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return wr(wn(e,t))},n}const br=wr(zt);br.Axios=fr,br.CanceledError=Xt,br.CancelToken=gr,br.isCancel=Gt,br.VERSION="1.20.0",br.toFormData=ut,br.AxiosError=nt,br.Cancel=br.CanceledError,br.all=function(e){return Promise.all(e)},br.spread=mr,br.isAxiosError=_r,br.mergeConfig=wn,br.AxiosHeaders=Ye,br.formToJSON=e=>Bt(Se.isHTMLForm(e)?new FormData(e):e),br.getAdapter=ir.getAdapter,br.HttpStatusCode=yr,br.default=br;var Er=br},6400:function(e,t,n){"use strict";n.d(t,{Sx:function(){return r.Sx},Wp:function(){return r.Wp}});var r=n(1776),i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},393:function(e,t,n){"use strict";n.d(t,{HF:function(){return lt},F0:function(){return Ot},hk:function(){return hr},iM:function(){return Nt},Gt:function(){return rn},Nu:function(){return je},iZ:function(){return yt},df:function(){return vn}});n(3725),n(5019),n(9229),n(1339),n(7746),n(8743),n(2598),n(9838),n(9471);var r=n(4046),i=n(1776);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(1363),a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (9.23.0): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (9.23.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,i,s={}){return D(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof r.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function L(e,t,n,r,i={}){const s=await x(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=W(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(V(s.auth_time)),issuedAtTime:q(V(s.iat)),expirationTime:q(V(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function H(e){const t=W(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&K(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await z(e,B(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Z(s.providerUserInfo):[],a=Q(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function J(e){const t=(0,r.Ku)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Q(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Z(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t){const n=await D(e,{},async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=M(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ee(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new te;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return J(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;y(v&&T,e,"internal-error");const C=te.fromJSON(this.name,T);y("string"===typeof v,e,"internal-error"),ne(u,e.name),ne(h,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof b,e,"internal-error"),ne(d,e.name),ne(f,e.name),ne(p,e.name),ne(g,e.name),ne(m,e.name),ne(_,e.name);const I=new re({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:_});return E&&Array.isArray(E)&&(I.providerData=E.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new te;r.updateFromServerResponse(t);const i=new re({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Map;function se(e){b(e instanceof Function,"Expected a class definition");let t=ie.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ie.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(se(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||se(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=re._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(_e(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function de(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.ZQ)()){return/crios\//i.test(e)}function pe(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function ge(e=(0,r.ZQ)()){return/android/i.test(e)}function me(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function _e(e=(0,r.ZQ)()){return/webos/i.test(e)}function ve(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.ZQ)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.lT)()&&10===document.documentMode}function be(e=(0,r.ZQ)()){return ve(e)||ge(e)||_e(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.ZQ)());break;case"Worker":n=`${ue((0,r.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/9.23.0/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t){return x(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){return void 0!==e&&void 0!==e.enterprise}class Se{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Re(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ke().appendChild(r)})}function Ae(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Oe="https://www.google.com/recaptcha/enterprise.js?render=",Pe="recaptcha-enterprise",Ne="NO_RECAPTCHA";class xe{constructor(e){this.type=Pe,this.auth=Fe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Ce(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Se(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Ie(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Ne)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Ie(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Re(Oe+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function De(e,t,n,r=!1){const i=new xe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ue(this),this.idTokenSubscription=new Ue(this),this.beforeStateQueue=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=se(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}async initializeRecaptchaConfig(){const e=await Ce(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Se(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new xe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&se(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[se(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Fe(e){return(0,r.Ku)(e)}class Ue{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Be(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(se);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ve(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function We(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function He(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await De(e,n,"signInWithPassword");return Ve(e,t)}return Ve(e,n).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await De(e,n,"signInWithPassword");return Ve(e,t)}return Promise.reject(t)});case"emailLink":return We(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return He(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="http://localhost";class Ye extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ye(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ke(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ke(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ke(e,t)}buildRequest(){const e={requestUri:Ge,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function Je(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function Qe(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const Ze={["USER_NOT_FOUND"]:"user-not-found"};async function et(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),Ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Je(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return et(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new tt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rt(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class it{constructor(e){var t,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=nt(null!==(i=c["mode"])&&void 0!==i?i:null);y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=rt(e);try{return new it(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(){this.providerId=st.PROVIDER_ID}static credential(e,t){return ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=it.parseLink(t);return y(n,"argument-error"),ze._fromEmailAndCode(e,n.code,n.tenantId)}}st.PROVIDER_ID="password",st.EMAIL_PASSWORD_SIGN_IN_METHOD="password",st.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ot{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct extends at{constructor(){super("facebook.com")}static credential(e){return Ye._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch(t){return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com",ct.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt extends at{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ye._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return lt.credential(t,n)}catch(r){return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com",lt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends at{constructor(){super("github.com")}static credential(e){return Ye._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch(t){return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com",ut.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht extends at{constructor(){super("twitter.com")}static credential(e,t){return Ye._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ht.credential(t,n)}catch(r){return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com",ht.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await re._fromIdTokenResponse(e,n,r),s=ft(n),o=new dt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ft(n);return new dt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ft(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends r.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,pt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new pt(e,t,n,r)}}function gt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw pt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t,n=!1){const r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await z(e,gt(r,i,t,e),n);y(s.idToken,r,"internal-error");const o=W(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),dt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(e,t,n=!1){const r="signIn",i=await gt(e,r,t),s=await dt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function yt(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function bt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function Et(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Tt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Ct="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ct,"1"),this.storage.removeItem(Ct),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){const e=(0,r.ZQ)();return de(e)||ve(e)}const kt=1e3,Rt=10;class At extends It{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=St()&&Ee(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}At.type="LOCAL";const Ot=At;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends It{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pt.type="SESSION";const Nt=Pt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Dt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await xt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.receivers=[];class Mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Lt("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function Ut(e){Ft().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return"undefined"!==typeof Ft()["WorkerGlobalScope"]&&"function"===typeof Ft()["importScripts"]}async function Bt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function $t(){return jt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="firebaseLocalStorageDb",Wt=1,Ht="firebaseLocalStorage",zt="fbase_key";class Kt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gt(e,t){return e.transaction([Ht],t?"readwrite":"readonly").objectStore(Ht)}function Yt(){const e=indexedDB.deleteDatabase(Vt);return new Kt(e).toPromise()}function Xt(){const e=indexedDB.open(Vt,Wt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ht,{keyPath:zt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ht)?t(n):(n.close(),await Yt(),t(await Xt()))})})}async function Jt(e,t,n){const r=Gt(e,!0).put({[zt]:t,value:n});return new Kt(r).toPromise()}async function Qt(e,t){const n=Gt(e,!1).get(t),r=await new Kt(n).toPromise();return void 0===r?null:r.value}function Zt(e,t){const n=Gt(e,!0).delete(t);return new Kt(n).toPromise()}const en=800,tn=3;class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Xt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance($t()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bt(),!this.activeServiceWorker)return;this.sender=new Mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await Jt(e,Ct,"1"),await Zt(e,Ct),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Qt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gt(e,!1).getAll();return new Kt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function on(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function an(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn="recaptcha";async function ln(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===cn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await wt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await sn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Xe(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this.providerId=un.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,t){return ln(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return tt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return un.credentialFromTaggedObject(t)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?tt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t){return t?se(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class dn extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fn(e){return vt(e.auth,new dn(e),e.bypassAuthState)}function pn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),_t(n,new dn(e),e.bypassAuthState)}async function gn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),mt(n,new dn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return gn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new k(2e3,1e4);async function vn(e,t,n){const r=Fe(e);_(e,t,ot);const i=hn(r,n),s=new yn(r,"signInViaPopup",t,i);return s.executeNotNull()}class yn extends mn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,_n.get())};e()}}yn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",bn=new Map;class En extends mn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const t=await Tn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Tn(e,t){const n=Sn(t),r=In(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Cn(e,t){bn.set(e._key(),t)}function In(e){return se(e._redirectPersistence)}function Sn(e){return ce(wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t,n=!1){const r=Fe(e),i=hn(r,t),s=new En(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn=6e5;class An{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Pn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Nn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ln=/^https?/;async function Mn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xn(e);for(const r of t)try{if(Fn(r))return}catch(n){}p(e,"unauthorized-domain")}function Fn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ln.test(n))return!1;if(Dn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new k(3e4,6e4);function jn(){const e=Ft().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bn(e){return new Promise((t,n)=>{var r,i,s;function o(){jn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jn(),n(g(e,"network-request-failed"))},timeout:Un.get()})}if(null===(i=null===(r=Ft().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ft().gapi)||void 0===s?void 0:s.load)){const t=Ae("iframefcb");return Ft()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Re(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw qn=null,e})}let qn=null;function $n(e){return qn=qn||Bn(e),qn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new k(5e3,15e3),Wn="__/auth/iframe",Hn="emulator/auth/iframe",zn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Hn):`https://${e.config.authDomain}/${Wn}`,i={apiKey:t.apiKey,appName:e.name,v:"9.23.0"},s=Kn.get(e.config.apiHost);s&&(i.eid=s);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${(0,r.Am)(i).slice(1)}`}async function Yn(e){const t=await $n(e),n=Ft().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Gn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=Ft().setTimeout(()=>{r(i)},Vn.get());function o(){Ft().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Qn=600,Zn="_blank",er="http://localhost";class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nr(e,t,n,i=Jn,s=Qn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Xn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(c=fe(u)?Zn:n),he(u)&&(t=t||er,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(u)&&"_self"!==c)return rr(t||"",c),new tr(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tr(d)}function rr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__/auth/handler",sr="emulator/auth/handler",or=encodeURIComponent("fac");async function ar(e,t,n,i,s,o){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.23.0",eventId:s};if(t instanceof ot){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof at){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const l=await e._getAppCheckToken(),u=l?`#${or}=${encodeURIComponent(l)}`:"";return`${cr(e)}?${(0,r.Am)(c).slice(1)}${u}`}function cr({config:e}){return e.emulator?R(e,sr):`https://${e.authDomain}/${ir}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="webStorageSupport";class ur{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nt,this._completeRedirectFn=kn,this._overrideRedirectResult=Cn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await ar(e,t,n,E(),r);return nr(e,s,Lt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await ar(e,t,n,E(),r);return Ut(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Yn(e),n=new An(e);return t.register("authEvent",t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(lr,{type:lr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==i&&t(!!i),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return be()||de()||ve()}}const hr=ur;class dr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class fr extends dr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fr(e)}_finalizeEnroll(e,t,n){return bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return on(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pr{constructor(){}static assertion(e){return fr._fromCredential(e)}}pr.FACTOR_ID="phone";class gr{static assertionForEnrollment(e,t){return mr._fromSecret(e,t)}static assertionForSignIn(e,t){return mr._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;y("undefined"!==typeof t.auth,"internal-error");const n=await Et(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return _r._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}gr.FACTOR_ID="totp";class mr extends dr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new mr(t,void 0,e)}static _fromEnrollmentId(e,t){return new mr(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),Tt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return an(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class _r{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new _r(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(vr(e)||vr(t))&&(r=!0),r&&(vr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),vr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function vr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var yr="@firebase/auth",wr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tr(e){(0,i.om)(new a.uA("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},l=new Me(r,i,s,c);return Be(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),(0,i.om)(new a.uA("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(e=>new br(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(yr,wr,Er(e)),(0,i.KO)(yr,wr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=300;(0,r.XA)("authIdTokenMaxAge");Tr("Browser")},4161:function(e,t,n){"use strict";n.d(t,{Jt:function(){return Vo},C3:function(){return oa},_O:function(){return Go},M4:function(){return Yo},X1:function(){return Xo},U0:function(){return Jo},Zy:function(){return Ko},KR:function(){return Bo},hZ:function(){return $o}});n(8743),n(3725),n(2598),n(1339),n(9838),n(5019),n(178);var r=n(1776),i=n(852),s=n(4046),o=n(1363);const a="@firebase/database",c="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new o.Vy("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,s.kj)(e),n=new s.gz;n.update(t);const r=n.digest();return s.K3.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,s.As)(r):r,t+=" "}return t};let w=null,b=!0;const E=function(e,t){(0,s.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o.$b.VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,g.remove("logging_enabled"))},T=function(...e){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=y.apply(null,e);w(t)}},C=function(e){return function(...t){T(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw m.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},R=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O=function(e){if((0,s.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",N="[MAX_NAME]",x=function(e,t){if(e===t)return 0;if(e===P||t===N)return-1;if(t===P||e===N)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.As)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.As)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,s.As)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,s.vA)(!A(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,l;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function $(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const V=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,H=2147483647,z=function(e){if(V.test(e)){const t=Number(e);if(t>=W&&t<=H)return t}return null},K=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t},Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,s.vA)("string"===typeof t,"typeof type must == string"),(0,s.vA)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return U(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},ge={};function me(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function _e(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",we="close",be="pLPCommand",Ee="pRTLPCB",Te="id",Ce="pw",Ie="ser",Se="cb",ke="seg",Re="ts",Ae="d",Oe="dframe",Pe=1870,Ne=30,xe=Pe-Ne,De=25e3,Le=3e4;class Me{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),O(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,s.$g)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.KA)(t),r=F(n,xe);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Oe]="t",n[Te]=e,n[Ce]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[be+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){T("frame writing exception"),i.stack&&T(i.stack),T(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[Ce]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ne+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+r+"="+e.seg+"&"+Re+r+"="+e.ts+"&"+Ae+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(De)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,s.$g)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,je=45e3;let Be=null;"undefined"!==typeof MozWebSocket?Be=MozWebSocket:"undefined"!==typeof WebSocket&&(Be=WebSocket);class qe{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=me(t),this.connURL=qe.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[ee]=Z,!(0,s.$g)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[ne]=re),t&&(o[te]=t),n&&(o[se]=n),r&&(o[ae]=r),i&&(o[oe]=i),de(e,ce,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,s.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/buddhist_name/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Be(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Be&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(je))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of $e.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);$e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$e.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=6e4,We=5e3,He=10240,ze=102400,Ke="t",Ge="d",Ye="s",Xe="r",Je="e",Qe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new $e(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Xe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Xe?this.onReset_(n):t===Je?I("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(We))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,s.vA)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.jZ)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _t(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return wt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Et(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.OE)(this.parts_[n]);St(this)}}function Ct(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.OE)(t),St(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=(0,s.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Rt}getInitialEvent(e){return(0,s.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,Ot=3e5,Pt=3e4,Nt=1.3,xt=3e4,Dt="server_kill",Lt=3;class Mt extends it{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Mt.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=Ot,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,s.As)(i)),(0,s.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.cY,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.vA)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,i=>{const s=i["d"],o=i["s"];Mt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.gR)(e,"w")){const n=(0,s.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,s.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>xt&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)},i))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.Im)(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.jZ)()?e["framework.cordova"]=1:(0,s.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.Im)(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(P,e),r=new Ft(P,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class Bt extends Ut{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return x(e.name,t.name)}isDefinedOn(e){throw(0,s.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(N,jt)}makePost(e,t){return(0,s.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,jt)}toString(){return".key"}}const qt=new Bt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=r?r:Ht.EMPTY_NODE,this.right=null!=i?i:Ht.EMPTY_NODE}copy(e,t,n,r,i){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ht.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Wt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,t=Ht.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ht(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return x(e.name,t.name)}function Kt(e,t){return x(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Yt(e){Gt=e}Ht.EMPTY_NODE=new Wt;const Xt=function(e){return"number"===typeof e?"number:"+j(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.gR)(t,".sv"),"Priority must be a string or number.")}else(0,s.vA)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,s.vA)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,s.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=tn.VALUE_TYPE_ORDER.indexOf(t),i=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.vA)(r>=0,"Unknown leaf type: "+t),(0,s.vA)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?x(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(N,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Ft(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Vt(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Vt.BLACK):(a(r,Vt.BLACK),a(r,Vt.RED))}return s},o=new cn(e.length),a=s(o);return new Ht(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.vA)(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=(0,s.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ht?t:null}hasIndex(e){return(0,s.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.vA)(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(e,t){const n=(0,s.kH)(this.indexes_,(n,r)=>{const i=(0,s.yw)(this.indexSet_,r);if((0,s.vA)(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),ln(n,i.getCompare())}return hn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.kH)(this.indexes_,n=>{if(n===hn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&(0,s.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new Ht(Kt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new pn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?fn:this.priorityNode_;return new pn(r,s,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(on,(s,o)=>{t[s]=o.val(e),n++,i&&pn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends pn{constructor(){super(new Ht(Kt),pn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pn.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Ft,{MIN:{value:new Ft(P,pn.EMPTY_NODE)},MAX:{value:new Ft(N,mn)}}),Bt.__EMPTY_NODE=pn.EMPTY_NODE,tn.__childrenNodeConstructor=pn,Yt(mn),rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=!0;function vn(e,t=null){if(null===e)return pn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,vn(t))}if(e instanceof Array||!_n){let n=pn.EMPTY_NODE;return U(e,(t,r)=>{if((0,s.gR)(e,t)&&"."!==t.substring(0,1)){const e=vn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(vn(t))}{const n=[];let r=!1;const i=e;if(U(i,(e,t)=>{if("."!==e.substring(0,1)){const i=vn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}}),0===n.length)return pn.EMPTY_NODE;const s=ln(n,zt,e=>e.name,Kt);if(r){const e=ln(n,on.getCompare());return new pn(s,vn(t),new dn({".priority":e},{".priority":on}))}return new pn(s,vn(t),dn.Default)}}nn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ut{constructor(e){super(),this.indexPath_=e,(0,s.vA)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?x(e.name,t.name):i}makePost(e,t){const n=vn(e),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=pn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Ft(N,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?x(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=vn(e);return new Ft(t,n)}toString(){return".value"}}const bn=new wn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Cn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function In(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){(0,s.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Cn(t,a)):(0,s.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(In(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,r)=>{t.hasChild(e)||n.trackChildChange(Cn(e,r))}),t.isLeafNode()||t.forEachChild(on,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(In(t,r,i))}else n.trackChildChange(Tn(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.indexedFilter_=new kn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rn.getStartPost_(e),this.endPost_=Rn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Ft(t,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return t.forEachChild(on,(e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,pn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Rn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Ft(t,n))||(n=pn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=pn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),i=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?n++:r=r.updateImmediateChild(t.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.vA)(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(In(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Cn(t,e));const n=a.updateImmediateChild(t,pn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(Cn(l.name,l.node)),i.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new On;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pn(e){return e.loadsAllData()?new kn(e.getIndex()):e.hasLimit()?new An(e):new Rn(e)}function Nn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===on?n="$priority":e.index_===bn?n="$value":e.index_===qt?n="$key":((0,s.vA)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function xn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Dn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Nn(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,s.yw)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Dn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Nn(e._queryParams),n=e._path.toString(),r=new s.cY;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.Am)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.$L)(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function Fn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Mn());const i=e.children.get(r);t=ft(t),Fn(i,t,n)}}function Un(e,t,n){null!==e.value?n(t,e.value):jn(e,(e,r)=>{const i=new lt(t.toString()+"/"+e);Un(r,i,n)})}function jn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1e4,$n=3e4,Vn=3e5;class Wn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bn(e);const n=qn+($n-qn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,(e,r)=>{r>0&&(0,s.gR)(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;function zn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));class Yn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Hn.ACK_USER_WRITE,this.source=zn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Yn(ut(),t,this.revert)}}return(0,s.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Yn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=Hn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Xn(this.source,ut()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Hn.OVERWRITE}operationForChild(e){return yt(this.path)?new Jn(this.source,ut(),this.snap.getImmediateChild(e)):new Jn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Hn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Jn(this.source,ut(),t.value):new Qn(this.source,ut(),t)}return(0,s.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qn(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tr(e,t,n,r){const i=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Sn(t.childName,t.snapshotNode))}),nr(e,i,"child_removed",t,r,n),nr(e,i,"child_added",t,r,n),nr(e,i,"child_moved",s,r,n),nr(e,i,"child_changed",t,r,n),nr(e,i,"value",t,r,n),i}function nr(e,t,n,r,i,s){const o=r.filter(e=>e.type===n);o.sort((t,n)=>ir(e,t,n)),o.forEach(n=>{const r=rr(e,n,s);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function rr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ir(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.Hk)("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){return{eventCache:e,serverCache:t}}function or(e,t,n,r){return sr(new Zn(t,n,r),e.serverCache)}function ar(e,t,n,r){return sr(e.eventCache,new Zn(t,n,r))}function cr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function lr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const hr=()=>(ur||(ur=new Ht(D)),ur);class dr{constructor(e,t=hr()){this.value=e,this.children=t}static fromObject(e){let t=new dr(null);return U(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=vt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new dr(null)}}set(e,t){if(yt(e))return new dr(t,this.children);{const n=ht(e),r=this.children.get(n)||new dr(null),i=r.set(ft(e),t),s=this.children.insert(n,i);return new dr(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new dr(null):new dr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new dr(null):new dr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new dr(null),i=r.setTree(ft(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new dr(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(vt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),vt(t,r),n):new dr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new dr(null))}}function pr(e,t,n){if(yt(t))return new fr(new dr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=wt(i,t);return s=s.updateChild(o,n),new fr(e.writeTree_.set(i,s))}{const r=new dr(n),i=e.writeTree_.setTree(t,r);return new fr(i)}}}function gr(e,t,n){let r=e;return U(n,(e,n)=>{r=pr(r,vt(t,e),n)}),r}function mr(e,t){if(yt(t))return fr.empty();{const n=e.writeTree_.setTree(t,new dr(null));return new fr(n)}}function _r(e,t){return null!=vr(e,t)}function vr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function yr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function wr(e,t){if(yt(t))return e;{const n=vr(e,t);return new fr(null!=n?new dr(n):e.writeTree_.subtree(t))}}function br(e){return e.writeTree_.isEmpty()}function Er(e,t){return Tr(ut(),e.writeTree_,t)}function Tr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?((0,s.vA)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Tr(vt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e,t){return zr(t,e)}function Ir(e,t,n,r,i){(0,s.vA)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=pr(e.visibleWrites,t,n)),e.lastWriteId=r}function Sr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function kr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);(0,s.vA)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Rr(t,r.path)?i=!1:Et(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Ar(e),!0;if(r.snap)e.visibleWrites=mr(e.visibleWrites,r.path);else{const t=r.children;U(t,t=>{e.visibleWrites=mr(e.visibleWrites,vt(r.path,t))})}return!0}return!1}function Rr(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(vt(e.path,n),t))return!0;return!1}function Ar(e){e.visibleWrites=Pr(e.allWrites,Or,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Or(e){return e.visible}function Pr(e,t,n){let r=fr.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)Et(n,e)?(t=wt(n,e),r=pr(r,t,o.snap)):Et(e,n)&&(t=wt(e,n),r=pr(r,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.Hk)("WriteRecord should have .snap or .children");if(Et(n,e))t=wt(n,e),r=gr(r,t,o.children);else if(Et(e,n))if(t=wt(e,n),yt(t))r=gr(r,ut(),o.children);else{const e=(0,s.yw)(o.children,ht(t));if(e){const n=e.getChild(ft(t));r=pr(r,ut(),n)}}}}}return r}function Nr(e,t,n,r,i){if(r||i){const s=wr(e.visibleWrites,t);if(!i&&br(s))return n;if(i||null!=n||_r(s,ut())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},o=Pr(e.allWrites,s,t),a=n||pn.EMPTY_NODE;return Er(o,a)}return null}{const r=vr(e.visibleWrites,t);if(null!=r)return r;{const r=wr(e.visibleWrites,t);if(br(r))return n;if(null!=n||_r(r,ut())){const e=n||pn.EMPTY_NODE;return Er(r,e)}return null}}}function xr(e,t,n){let r=pn.EMPTY_NODE;const i=vr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(on,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=wr(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=Er(wr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)}),yr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=wr(e.visibleWrites,t);return yr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Dr(e,t,n,r,i){(0,s.vA)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(_r(e.visibleWrites,o))return null;{const t=wr(e.visibleWrites,o);return br(t)?i.getChild(n):Er(t,i.getChild(n))}}function Lr(e,t,n,r){const i=vt(t,n),s=vr(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=wr(e.visibleWrites,i);return Er(t,r.getNode().getImmediateChild(n))}return null}function Mr(e,t){return vr(e.visibleWrites,t)}function Fr(e,t,n,r,i,s,o){let a;const c=wr(e.visibleWrites,t),l=vr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Er(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ur(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function jr(e,t,n,r){return Nr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return xr(e.writeTree,e.treePath,t)}function qr(e,t,n,r){return Dr(e.writeTree,e.treePath,t,n,r)}function $r(e,t){return Mr(e.writeTree,vt(e.treePath,t))}function Vr(e,t,n,r,i,s){return Fr(e.writeTree,e.treePath,t,n,r,i,s)}function Wr(e,t,n){return Lr(e.writeTree,e.treePath,t,n)}function Hr(e,t){return zr(vt(e.treePath,t),e.writeTree)}function zr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,In(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Cn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,s.Hk)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,In(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Yr=new Gr;class Xr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:lr(this.viewCache_),i=Vr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){return{filter:e}}function Qr(e,t){(0,s.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Zr(e,t,n,r,i){const o=new Kr;let a,c;if(n.type===Hn.OVERWRITE){const l=n;l.source.fromUser?a=ri(e,t,l.path,l.snap,r,i,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=ni(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===Hn.MERGE){const l=n;l.source.fromUser?a=si(e,t,l.path,l.children,r,i,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ai(e,t,l.path,l.children,r,i,c,o))}else if(n.type===Hn.ACK_USER_WRITE){const s=n;a=s.revert?ui(e,t,s.path,r,i,o):ci(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==Hn.LISTEN_COMPLETE)throw(0,s.Hk)("Unknown operation type: "+n.type);a=li(e,t,n.path,r,o)}const l=o.getChanges();return ei(t,a,l),{viewCache:a,changes:l}}function ei(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(En(cr(t)))}}function ti(e,t,n,r,i,o){const a=t.eventCache;if(null!=$r(r,n))return t;{let c,l;if(yt(n))if((0,s.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=lr(t),i=n instanceof pn?n:pn.EMPTY_NODE,s=Br(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=jr(r,lr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.vA)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=qr(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=qr(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Wr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return or(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ni(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,Yr,null)}const h=ar(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Xr(i,h,s);return ti(e,h,n,i,d,a)}function ri(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new Xr(i,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=or(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=or(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(i);let h;if(yt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(s)&&e.getChild(_t(s)).isEmpty()?e:e.updateChild(s,r):pn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,u,o);c=or(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ii(e,t){return e.eventCache.isCompleteForChild(t)}function si(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const l=vt(n,r);ii(t,ht(l))&&(a=ri(e,a,l,c,i,s,o))}),r.foreach((r,c)=>{const l=vt(n,r);ii(t,ht(l))||(a=ri(e,a,l,c,i,s,o))}),a}function oi(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ai(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?r:new dr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=oi(e,c,r);l=ni(e,l,new lt(n),u,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=oi(e,c,r);l=ni(e,l,new lt(n),u,i,s,o,a)}}),l}function ci(e,t,n,r,i,s,o){if(null!=$r(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ni(e,t,n,c.getNode().getChild(n),i,s,a,o);if(yt(n)){let r=new dr(null);return c.getNode().forEachChild(qt,(e,t)=>{r=r.set(new lt(e),t)}),ai(e,t,n,r,i,s,a,o)}return t}{let l=new dr(null);return r.foreach((e,t)=>{const r=vt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),ai(e,t,n,l,i,s,a,o)}}function li(e,t,n,r,i){const s=t.serverCache,o=ar(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return ti(e,o,n,r,Yr,i)}function ui(e,t,n,r,i,o){let a;if(null!=$r(r,n))return t;{const c=new Xr(r,t,i),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=jr(r,lr(t));else{const e=t.serverCache.getNode();(0,s.vA)(e instanceof pn,"serverChildren would be complete if leaf node"),n=Br(r,e)}u=e.filter.updateFullNode(l,n,o)}else{const i=ht(n);let s=Wr(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,ft(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,pn.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=jr(r,lr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=$r(r,ut()),or(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new kn(n.getIndex()),i=Pn(n);this.processor_=Jr(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),l=new Zn(a,s.isFullyInitialized(),r.filtersNodes()),u=new Zn(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=sr(u,l),this.eventGenerator_=new er(this.query_)}get query(){return this.query_}}function di(e){return e.viewCache_.serverCache.getNode()}function fi(e){return cr(e.viewCache_)}function pi(e,t){const n=lr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gi(e){return 0===e.eventRegistrations_.length}function mi(e,t){e.eventRegistrations_.push(t)}function _i(e,t,n){const r=[];if(n){(0,s.vA)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function vi(e,t,n,r){t.type===Hn.MERGE&&null!==t.source.queryId&&((0,s.vA)(lr(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.vA)(cr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=Zr(e.processor_,i,t,n,r);return Qr(e.processor_,o.viewCache),(0,s.vA)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,wi(e,o.changes,o.viewCache.eventCache.getNode(),null)}function yi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,(e,t)=>{r.push(Tn(e,t))})}return n.isFullyInitialized()&&r.push(En(n.getNode())),wi(e,r,n.getNode(),t)}function wi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return tr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi,Ei;class Ti{constructor(){this.views=new Map}}function Ci(e){(0,s.vA)(!bi,"__referenceConstructor has already been defined"),bi=e}function Ii(){return(0,s.vA)(bi,"Reference.ts has not been loaded"),bi}function Si(e){return 0===e.views.size}function ki(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return(0,s.vA)(null!=o,"SyncTree gave us an op for an invalid query."),vi(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(vi(s,t,n,r));return i}}function Ri(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=jr(n,i?r:null),s=!1;e?s=!0:r instanceof pn?(e=Br(n,r),s=!1):(e=pn.EMPTY_NODE,s=!1);const o=sr(new Zn(e,s,!1),new Zn(r,i,!1));return new hi(t,o)}return o}function Ai(e,t,n,r,i,s){const o=Ri(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),mi(o,n),yi(o,n)}function Oi(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Li(e);if("default"===i)for(const[c,l]of e.views.entries())o=o.concat(_i(l,n,r)),gi(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(i);t&&(o=o.concat(_i(t,n,r)),gi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Li(e)&&s.push(new(Ii())(t._repo,t._path)),{removed:s,events:o}}function Pi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ni(e,t){let n=null;for(const r of e.views.values())n=n||pi(r,t);return n}function xi(e,t){const n=t._queryParams;if(n.loadsAllData())return Mi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Di(e,t){return null!=xi(e,t)}function Li(e){return null!=Mi(e)}function Mi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){(0,s.vA)(!Ei,"__referenceConstructor has already been defined"),Ei=e}function Ui(){return(0,s.vA)(Ei,"Reference.ts has not been loaded"),Ei}let ji=1;class Bi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qi(e,t,n,r,i){return Ir(e.pendingWriteTree_,t,n,r,i),i?Zi(e,new Jn(zn(),t,n)):[]}function $i(e,t,n=!1){const r=Sr(e.pendingWriteTree_,t),i=kr(e.pendingWriteTree_,t);if(i){let t=new dr(null);return null!=r.snap?t=t.set(ut(),!0):U(r.children,e=>{t=t.set(new lt(e),!0)}),Zi(e,new Yn(r.path,t,n))}return[]}function Vi(e,t,n){return Zi(e,new Jn(Kn(),t,n))}function Wi(e,t,n){const r=dr.fromObject(n);return Zi(e,new Qn(Kn(),t,r))}function Hi(e,t){return Zi(e,new Xn(Kn(),t))}function zi(e,t,n){const r=ss(e,n);if(r){const n=os(r),i=n.path,s=n.queryId,o=wt(i,t),a=new Xn(Gn(s),o);return as(e,i,a)}return[]}function Ki(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Di(o,t))){const c=Oi(o,t,n,r);Si(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(s,(e,t)=>Li(t));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=cs(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=ns(e,r);e.listenProvider_.startListening(ls(i),rs(e,i),s.hashFn,s.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(ls(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(is(t));e.listenProvider_.stopListening(ls(t),n)})}us(e,l)}return a}function Gi(e,t,n,r){const i=ss(e,r);if(null!=i){const r=os(i),s=r.path,o=r.queryId,a=wt(s,t),c=new Jn(Gn(o),a,n);return as(e,s,c)}return[]}function Yi(e,t,n,r){const i=ss(e,r);if(i){const r=os(i),s=r.path,o=r.queryId,a=wt(s,t),c=dr.fromObject(n),l=new Qn(Gn(o),a,c);return as(e,s,l)}return[]}function Xi(e,t,n,r=!1){const i=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=wt(e,i);o=o||Ni(t,n),a=a||Li(t)});let c,l=e.syncPointTree_.get(i);if(l?(a=a||Li(l),o=o||Ni(l,ut())):(l=new Ti,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=o)c=!0;else{c=!1,o=pn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=Ni(t,ut());n&&(o=o.updateImmediateChild(e,n))})}const u=Di(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=is(t);(0,s.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=hs();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Cr(e.pendingWriteTree_,i);let d=Ai(l,t,n,h,o,c);if(!u&&!a&&!r){const n=xi(l,t);d=d.concat(ds(e,t,n))}return d}function Ji(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=wt(e,t),i=Ni(n,r);if(i)return i});return Nr(i,t,s,n,r)}function Qi(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=wt(e,n);r=r||Ni(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Ni(i,ut()):(i=new Ti,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Zn(r,!0,!1):null,a=Cr(e.pendingWriteTree_,t._path),c=Ri(i,t,a,s?o.getNode():pn.EMPTY_NODE,s);return fi(c)}function Zi(e,t){return es(t,e.syncPointTree_,null,Cr(e.pendingWriteTree_,ut()))}function es(e,t,n,r){if(yt(e.path))return ts(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Ni(i,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Hr(r,o);s=s.concat(es(a,c,e,t))}return i&&(s=s.concat(ki(i,e,r,n))),s}}function ts(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Ni(i,ut()));let s=[];return t.children.inorderTraversal((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Hr(r,t),c=e.operationForChild(t);c&&(s=s.concat(ts(c,i,o,a)))}),i&&(s=s.concat(ki(i,e,r,n))),s}function ns(e,t){const n=t.query,r=rs(e,n);return{hashFn:()=>{const e=di(t)||pn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?zi(e,n._path,r):Hi(e,n._path);{const r=$(t,n);return Ki(e,n,null,r)}}}}function rs(e,t){const n=is(t);return e.queryToTagMap.get(n)}function is(e){return e._path.toString()+"$"+e._queryIdentifier}function ss(e,t){return e.tagToQueryMap.get(t)}function os(e){const t=e.indexOf("$");return(0,s.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function as(e,t,n){const r=e.syncPointTree_.get(t);(0,s.vA)(r,"Missing sync point for query tag that we're tracking");const i=Cr(e.pendingWriteTree_,t);return ki(r,n,i,null)}function cs(e){return e.fold((e,t,n)=>{if(t&&Li(t)){const e=Mi(t);return[e]}{let e=[];return t&&(e=Pi(t)),U(n,(t,n)=>{e=e.concat(n)}),e}})}function ls(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ui())(e._repo,e._path):e}function us(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=is(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function hs(){return ji++}function ds(e,t,n){const r=t._path,i=rs(e,t),o=ns(e,n),a=e.listenProvider_.startListening(ls(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,s.vA)(!Li(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!yt(e)&&t&&Li(t))return[Mi(t).query];{let e=[];return t&&(e=e.concat(Pi(t).map(e=>e.query))),U(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(ls(r),rs(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fs(t)}node(){return this.node_}}class ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new ps(this.syncTree_,t)}node(){return Ji(this.syncTree_,this.path_)}}const gs=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ms=function(e,t,n){return e&&"object"===typeof e?((0,s.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_s(e[".sv"],t,n):"object"===typeof e[".sv"]?vs(e[".sv"],t):void(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_s=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.vA)(!1,"Unexpected server value: "+e)}},vs=function(e,t,n){e.hasOwnProperty("increment")||(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,s.vA)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,s.vA)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},ys=function(e,t,n,r){return bs(t,new ps(n,e),r)},ws=function(e,t,n){return bs(e,new fs(t),n)};function bs(e,t,n){const r=e.getPriority().val(),i=ms(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=ms(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new tn(s,vn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new tn(i))),r.forEachChild(on,(e,r)=>{const i=bs(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ts(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=(0,s.yw)(r.node.children,i)||{children:{},childCount:0};r=new Es(i,r,e),n=ft(n),i=ht(n)}return r}function Cs(e){return e.node.value}function Is(e,t){e.node.value=t,Ns(e)}function Ss(e){return e.node.childCount>0}function ks(e){return void 0===Cs(e)&&!Ss(e)}function Rs(e,t){U(e.node.children,(n,r)=>{t(new Es(n,e,r))})}function As(e,t,n,r){n&&!r&&t(e),Rs(e,e=>{As(e,t,!0,r)}),n&&r&&t(e)}function Os(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ps(e){return new lt(null===e.parent?e.name:Ps(e.parent)+"/"+e.name)}function Ns(e){null!==e.parent&&xs(e.parent,e.name,e)}function xs(e,t,n){const r=ks(n),i=(0,s.gR)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ns(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ns(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=/[\[\].#$\/\u0000-\u001F\u007F]/,Ls=/[\[\].#$\u0000-\u001F\u007F]/,Ms=10485760,Fs=function(e){return"string"===typeof e&&0!==e.length&&!Ds.test(e)},Us=function(e){return"string"===typeof e&&0!==e.length&&!Ls.test(e)},js=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Us(e)},Bs=function(e,t,n,r){r&&void 0===t||qs((0,s.dI)(e,"value"),t,n)},qs=function(e,t,n){const r=n instanceof lt?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(r));if("function"===typeof t)throw new Error(e+"contains a function "+kt(r)+" with contents = "+t.toString());if(A(t))throw new Error(e+"contains "+t.toString()+" "+kt(r));if("string"===typeof t&&t.length>Ms/3&&(0,s.OE)(t)>Ms)throw new Error(e+"contains a string greater than "+Ms+" utf8 bytes "+kt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(U(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Fs(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ct(r,t),qs(e,s,r),It(r)}),n&&i)throw new Error(e+' contains ".value" child '+kt(r)+" in addition to actual children.")}},$s=function(e,t,n,r){if((!r||void 0!==n)&&!Us(n))throw new Error((0,s.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Vs=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$s(e,t,n,r)},Ws=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Hs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!js(n))throw new Error((0,s.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ks(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||bt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Gs(e,t,n){Ks(e,n),Xs(e,e=>bt(e,t))}function Ys(e,t,n){Ks(e,n),Xs(e,e=>Et(e,t)||Et(t,e))}function Xs(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Js(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Js(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&T("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="repo_interrupt",Zs=25;class eo{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new Es,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function to(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||G())e.server_=new Dn(e.repoInfo_,(t,n,r,i)=>{io(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>so(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.As)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mt(e.repoInfo_,t,(t,n,r,i)=>{io(e,t,n,r,i)},t=>{so(e,t)},t=>{oo(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=_e(e.repoInfo_,()=>new Wn(e.stats_,e.server_)),e.infoData_=new Ln,e.infoSyncTree_=new Bi({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Vi(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),ao(e,"connected",!1),e.serverSyncTree_=new Bi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);Ys(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function no(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ro(e){return gs({timestamp:no(e)})}function io(e,t,n,r,i){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,s.kH)(n,e=>vn(e));a=Yi(e.serverSyncTree_,o,t,i)}else{const t=vn(n);a=Gi(e.serverSyncTree_,o,t,i)}else if(r){const t=(0,s.kH)(n,e=>vn(e));a=Wi(e.serverSyncTree_,o,t)}else{const t=vn(n);a=Vi(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=bo(e,o)),Ys(e.eventQueue_,c,a)}function so(e,t){ao(e,"connected",t),!1===t&&ho(e)}function oo(e,t){U(t,(t,n)=>{ao(e,t,n)})}function ao(e,t,n){const r=new lt("/.info/"+t),i=vn(n);e.infoData_.updateSnapshot(r,i);const s=Vi(e.infoSyncTree_,r,i);Ys(e.eventQueue_,r,s)}function co(e){return e.nextWriteId_++}function lo(e,t,n){const r=Qi(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{const i=vn(r).withIndex(t._queryParams.getIndex());let s;if(Xi(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Vi(e.serverSyncTree_,t._path,i);else{const n=rs(e.serverSyncTree_,t);s=Gi(e.serverSyncTree_,t._path,i,n)}return Ys(e.eventQueue_,t._path,s),Ki(e.serverSyncTree_,t,n,null,!0),i},n=>(mo(e,"get for query "+(0,s.As)(t)+" failed: "+n),Promise.reject(new Error(n))))}function uo(e,t,n,r,i){mo(e,"set",{path:t.toString(),value:n,priority:r});const s=ro(e),o=vn(n,r),a=Ji(e.serverSyncTree_,t),c=ws(o,a,s),l=co(e),u=qi(e.serverSyncTree_,t,c,l,!0);Ks(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=$i(e.serverSyncTree_,l,!s);Ys(e.eventQueue_,t,o),_o(e,i,n,r)});const h=ko(e,t);bo(e,h),Ys(e.eventQueue_,h,[])}function ho(e){mo(e,"onDisconnectEvents");const t=ro(e),n=Mn();Un(e.onDisconnect_,ut(),(r,i)=>{const s=ys(r,i,e.serverSyncTree_,t);Fn(n,r,s)});let r=[];Un(n,ut(),(t,n)=>{r=r.concat(Vi(e.serverSyncTree_,t,n));const i=ko(e,t);bo(e,i)}),e.onDisconnect_=Mn(),Ys(e.eventQueue_,ut(),r)}function fo(e,t,n){let r;r=".info"===ht(t._path)?Xi(e.infoSyncTree_,t,n):Xi(e.serverSyncTree_,t,n),Gs(e.eventQueue_,t._path,r)}function po(e,t,n){let r;r=".info"===ht(t._path)?Ki(e.infoSyncTree_,t,n):Ki(e.serverSyncTree_,t,n),Gs(e.eventQueue_,t._path,r)}function go(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qs)}function mo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function _o(e,t,n,r){t&&K(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function vo(e,t,n){return Ji(e.serverSyncTree_,t,n)||pn.EMPTY_NODE}function yo(e,t=e.transactionQueueTree_){if(t||So(e,t),Cs(t)){const n=Co(e,t);(0,s.vA)(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&wo(e,Ps(t),n)}else Ss(t)&&Rs(t,t=>{yo(e,t)})}function wo(e,t,n){const r=n.map(e=>e.currentWriteId),i=vo(e,t,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,r=>{mo(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat($i(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();So(e,Ts(e.transactionQueueTree_,t)),yo(e,e.transactionQueueTree_),Ys(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}bo(e,t)}},a)}function bo(e,t){const n=To(e,t),r=Ps(n),i=Co(e,n);return Eo(e,i,r),r}function Eo(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],l=wt(n,o.path);let u,h=!1;if((0,s.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat($i(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Zs)h=!0,u="maxretry",i=i.concat($i(e.serverSyncTree_,o.currentWriteId,!0));else{const n=vo(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){qs("transaction failed: Data returned ",r,o.path);let t=vn(r);const c="object"===typeof r&&null!=r&&(0,s.gR)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=ro(e),h=ws(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=co(e),a.splice(a.indexOf(l),1),i=i.concat(qi(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat($i(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat($i(e.serverSyncTree_,o.currentWriteId,!0))}Ys(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(u),!1,null))))}So(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)K(r[s]);yo(e,e.transactionQueueTree_)}function To(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Cs(r))r=Ts(r,n),t=ft(t),n=ht(t);return r}function Co(e,t){const n=[];return Io(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Io(e,t,n){const r=Cs(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rs(t,t=>{Io(e,t,n)})}function So(e,t){const n=Cs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Is(t,n.length>0?n:void 0)}Rs(t,t=>{So(e,t)})}function ko(e,t){const n=Ps(To(e,t)),r=Ts(e.transactionQueueTree_,t);return Os(r,t=>{Ro(e,t)}),Ro(e,r),As(r,t=>{Ro(e,t)}),n}function Ro(e,t){const n=Cs(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.vA)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat($i(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Is(t,void 0):n.length=o+1,Ys(e.eventQueue_,Ps(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Oo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const Po=function(e,t){const n=No(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},No=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Ao(e.substring(u,h)));const d=Oo(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},xo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.As)(this.snapshot.exportVal())}}class Lo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Uo(this._repo,this._path)}get _queryIdentifier(){const e=xn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return xn(this._queryParams)}isEqual(e){if(e=(0,s.Ku)(e),!(e instanceof Fo))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}class Uo extends Fo{constructor(e,t){super(e,t,new On,!1)}get parent(){const e=_t(this._path);return null===e?null:new Uo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class jo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=qo(this.ref,e);return new jo(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new jo(n,qo(this.ref,t),on)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bo(e,t){return e=(0,s.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?qo(e._root,t):e._root}function qo(e,t){return e=(0,s.Ku)(e),null===ht(e._path)?Vs("child","path",t,!1):$s("child","path",t,!1),new Uo(e._repo,vt(e._path,t))}function $o(e,t){e=(0,s.Ku)(e),Ws("set",e._path),Bs("set",t,e._path,!1);const n=new s.cY;return uo(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Vo(e){e=(0,s.Ku)(e);const t=new Mo(()=>{}),n=new Wo(t);return lo(e._repo,e,n).then(t=>new jo(t,new Uo(e._repo,e._path),e._queryParams.getIndex()))}class Wo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Do("value",this,new jo(e.snapshotNode,new Uo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lo(this,e,t):null}matches(e){return e instanceof Wo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ho{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lo(this,e,t):null}createEvent(e,t){(0,s.vA)(null!=e.childName,"Child events should have a childName.");const n=qo(new Uo(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Do(e.type,this,new jo(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ho&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function zo(e,t,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{po(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Mo(n,s||void 0),a="value"===t?new Wo(o):new Ho(t,o);return fo(e._repo,e,a),()=>po(e._repo,e,a)}function Ko(e,t,n,r){return zo(e,"value",t,n,r)}function Go(e,t,n,r){return zo(e,"child_added",t,n,r)}function Yo(e,t,n,r){return zo(e,"child_changed",t,n,r)}function Xo(e,t,n,r){return zo(e,"child_moved",t,n,r)}function Jo(e,t,n,r){return zo(e,"child_removed",t,n,r)}Ci(Uo),Fi(Uo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qo="FIREBASE_DATABASE_EMULATOR_HOST",Zo={};let ea=!1;function ta(e,t,n,r){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function na(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Po(s,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/buddhist_name/"}[Qo]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Po(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const u=i&&o?new Q(Q.OWNER):new J(e.name,e.options,t);Hs("Invalid Firebase Database URL",c),yt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ia(l,e,u,new X(e.name,n));return new sa(h,e)}function ra(e,t){const n=Zo[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),go(e),delete n[e.key]}function ia(e,t,n,r){let i=Zo[t.name];i||(i={},Zo[t.name]=i);let s=i[e.toURLString()];return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eo(e,ea,n,r),i[e.toURLString()]=s,s}class sa{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(to(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Uo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ra(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function oa(e=(0,r.Sx)(),t){const n=(0,r.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,s.yU)("database");e&&aa(n,...e)}return n}function aa(e,t,n,r={}){e=(0,s.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Q(Q.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,s.Fy)(r.mockUserToken,e.app.options.projectId);o=new Q(t)}ta(i,t,n,o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ca(e){u("9.23.0"),(0,r.om)(new i.uA("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return na(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(a,c,e),(0,r.KO)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ca()},1387:function(e,t,n){"use strict";n.d(t,{Bt:function(){return B},aE:function(){return nt}});n(1339),n(3725),n(178),n(8743),n(7746),n(9838),n(5019),n(2598),n(9471),n(9229);var r=n(6768),i=n(144);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&_(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!y(e[n],t[n]))return!1;return!0}function y(e,t){return u(e)?w(e,t):u(t)?w(t,e):e===t}function w(e,t){return u(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function S(e,t){return e.replace(I,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=k(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function O(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function N(e,t){P.set(e,t)}function x(e){const t=P.get(e);return P.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:u,type:E.pop,direction:u?u>0?T.forward:T.back:T.unknown})})};function l(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:R()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:R()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function j(e){e=C(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),j(e)}function q(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function z(e,t){return a(new Error,{type:e,[W]:!0},t)}function K(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Y={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},Y,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;s.push({name:e,repeatable:n,optional:c});const u=l||G;if(u!==G){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:l}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Q(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function ie(e,t,n){const r=J(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!le(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:l}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!le(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw z(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params&&oe(e.params,i.keys.map(e=>e.name))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw z(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:ue(l)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function le(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce((e,t)=>a(e,t.meta),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some(t=>t===e||de(e,t))}const fe=/#/g,pe=/&/g,ge=/\//g,me=/=/g,_e=/\?/g,ve=/\+/g,ye=/%5B/g,we=/%5D/g,be=/%5E/g,Ee=/%60/g,Te=/%7B/g,Ce=/%7C/g,Ie=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ce,"|").replace(ye,"[").replace(we,"]")}function Re(e){return ke(e).replace(Te,"{").replace(Ie,"}").replace(be,"^")}function Ae(e){return ke(e).replace(ve,"%2B").replace(Se,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ie,"}").replace(be,"^")}function Oe(e){return Ae(e).replace(me,"%3D")}function Pe(e){return ke(e).replace(fe,"%23").replace(_e,"%3F")}function Ne(e){return null==e?"":Pe(e).replace(ge,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=xe(n<0?e:e.slice(0,n)),o=n<0?null:xe(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),je=Symbol(""),Be=Symbol(""),qe=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(z(4,{from:n,to:t})):e instanceof Error?a(e):q(e)?a(z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function We(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(Ve(c,n,r,s,e))}else{let c=a();0,i.push(()=>c.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&Ve(l,n,r,s,e)()}))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.WQ)(je),n=(0,r.WQ)(Be),s=(0,r.EW)(()=>t.resolve((0,i.R1)(e.to))),o=(0,r.EW)(()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(_.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(_.bind(null,e[t-2])):o}),a=(0,r.EW)(()=>o.value>-1&&Xe(n.params,s.value.params)),c=(0,r.EW)(()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params));function u(n={}){return Ye(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(l):Promise.resolve()}return{route:s,href:(0,r.EW)(()=>s.value.href),isActive:a,isExactActive:c,navigate:u}}const Ke=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.Kh)(ze(e)),{options:s}=(0,r.WQ)(je),o=(0,r.EW)(()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=Ke;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(qe),o=(0,r.EW)(()=>e.route||s.value),c=(0,r.WQ)(Ue,0),l=(0,r.EW)(()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e}),u=(0,r.EW)(()=>o.value.matched[l.value]);(0,r.Gt)(Ue,(0,r.EW)(()=>l.value+1)),(0,r.Gt)(Fe,u),(0,r.Gt)(qe,o);const h=(0,i.KR)();return(0,r.wB)(()=>[h.value,u.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&_(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=e.name,c=u.value,l=c&&c.components[s];if(!l)return et(n.default,{Component:l,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:i})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Le,h=e.history;const d=$e(),g=$e(),_=$e(),v=(0,i.IJ)(V);let y=V;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,e=>""+e),b=c.bind(null,Ne),T=c.bind(null,xe);function C(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map(e=>e.record)}function k(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:xe(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(e.params)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=w(T(s.params));const l=p(o,a({},e,{hash:Re(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function D(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(y!==e)return z(8,{from:t,to:e})}function M(e){return j(e)}function F(e){return M(a(D(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function j(e,t){const n=y=P(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,l=U(n);if(l)return j(a(D(l),{state:"object"===typeof l?a({},i,l.state):i,force:s,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&m(o,r,n)&&(h=z(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):q(u,r)).catch(e=>K(e)?K(e,2)?e:te(e):Z(e,u,r)).then(e=>{if(e){if(K(e,2))return j(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||u)}else e=H(u,r,!0,c,i);return W(u,r,e),e})}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,s]=it(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const o=B.bind(null,e,t);return n.push(o),rt(n).then(()=>{n=[];for(const r of d.list())n.push(Ve(r,e,t));return n.push(o),rt(n)}).then(()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(o),rt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(o),rt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=We(s,"beforeRouteEnter",e,t),n.push(o),rt(n))).then(()=>{n=[];for(const r of g.list())n.push(Ve(r,e,t));return n.push(o),rt(n)}).catch(e=>K(e,8)?e:Promise.reject(e))}function W(e,t,n){for(const r of _.list())r(e,t,n)}function H(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===V,l=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let G;function Y(){G||(G=h.listen((e,t,n)=>{if(!ae.listening)return;const r=P(e),i=U(r);if(i)return void j(a(i,{replace:!0}),r).catch(l);y=r;const o=v.value;s&&N(O(o.fullPath,n.delta),R()),q(r,o).catch(e=>K(e,12)?e:K(e,2)?(j(e.to,r).then(e=>{K(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)}).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o))).then(e=>{e=e||H(r,o,!1),e&&(n.delta&&!K(e,8)?h.go(-n.delta,!1):n.type===E.pop&&K(e,20)&&h.go(-1,!1)),W(r,o,e)}).catch(l)}))}let X,J=$e(),Q=$e();function Z(e,t,n){te(e);const r=Q.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ee(){return X&&v.value!==V?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function te(e){return X||(X=!e,Y(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&x(O(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then(()=>a(t,n,c)).then(e=>e&&A(e)).catch(e=>Z(e,t,n))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:C,removeRoute:I,hasRoute:k,getRoutes:S,resolve:P,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:g.add,afterEach:_.add,onError:Q.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(v)}),s&&!ie&&v.value===V&&(ie=!0,M(h.location).catch(e=>{0}));const n={};for(const i in V)n[i]=(0,r.EW)(()=>v.value[i]);e.provide(je,t),e.provide(Be,(0,i.Kh)(n)),e.provide(qe,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(y=V,G&&G(),G=null,v.value=V,ie=!1,X=!1),o()}}};return ae}function rt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>_(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>_(e,a))||i.push(a))}return[n,r,i]}},1391:function(e,t,n){"use strict";n.d(t,{Nz:function(){return ga},zJ:function(){return ua},R_:function(){return la},t7:function(){return pa}});n(1339),n(3725),n(9838),n(8743),n(9471),n(5019);var r=n(393),i=n(6768),s=!1;var o=n(144),a=(n(7746),n(1776)),c=n(852),l=n(4046),u=n(1363);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h=new Map,d={activated:!1,tokenObservers:[]},f={initialized:!1,enabled:!1};function p(e){return h.get(e)||Object.assign({},d)}function g(){return f}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m="https://content-firebaseappcheck.googleapis.com/v1",_="exchangeDebugToken",v={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new l.cY,await w(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new l.cY,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}function w(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},E=new l.FA("appCheck","AppCheck",b);function T(e){if(!p(e).activated)throw E.create("use-before-activation",{appName:e.name})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function C({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&(r["X-Firebase-Client"]=e)}const s={method:"POST",body:JSON.stringify(t),headers:r};let o,a;try{o=await fetch(e,s)}catch(h){throw E.create("fetch-network-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}if(200!==o.status)throw E.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(h){throw E.create("fetch-parse-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw E.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),u=Date.now();return{token:a.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function I(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${m}/projects/${n}/apps/${r}:${_}?key=${i}`,body:{debug_token:t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="firebase-app-check-database",k=1,R="firebase-app-check-store";let A=null;function O(){return A||(A=new Promise((e,t)=>{try{const n=indexedDB.open(S,k);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(E.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(R,{keyPath:"compositeKey"})}}}catch(n){t(E.create("storage-open",{originalErrorMessage:null===n||void 0===n?void 0:n.message}))}}),A)}function P(e,t){return N(x(e),t)}async function N(e,t){const n=await O(),r=n.transaction(R,"readwrite"),i=r.objectStore(R),s=i.put({compositeKey:e,value:t});return new Promise((e,t)=>{s.onsuccess=t=>{e()},r.onerror=e=>{var n;t(E.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}})}function x(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new u.Vy("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return(0,l.zW)()?P(e,t).catch(e=>{D.warn(`Failed to write token to IndexedDB. Error: ${e}`)}):Promise.resolve()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(){const e=g();return e.enabled}async function F(){const e=g();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U={error:"UNKNOWN_ERROR"};function j(e){return l.K3.encodeString(JSON.stringify(e),!1)}async function B(e,t=!1){const n=e.app;T(n);const r=p(n);let i,s=r.token;if(s&&!K(s)&&(r.token=void 0,s=void 0),!s){const e=await r.cachedTokenPromise;e&&(K(e)?s=e:await L(n,void 0))}if(!t&&s&&K(s))return{token:s.token};let o,a=!1;if(M()){r.exchangeTokenPromise||(r.exchangeTokenPromise=C(I(n,await F()),e.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const t=await r.exchangeTokenPromise;return await L(n,t),r.token=t,{token:t.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),s=await p(n).exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?D.warn(c.message):D.error(c),i=c}return s?i?o=K(s)?{token:s.token,internalError:i}:G(i):(o={token:s.token},r.token=s,await L(n,s)):o=G(i),a&&z(n,o),o}async function q(e){const t=e.app;T(t);const{provider:n}=p(t);if(M()){const n=await F(),{token:r}=await C(I(t,n),e.heartbeatServiceProvider);return{token:r}}{const{token:e}=await n.getToken();return{token:e}}}function $(e,t,n,r){const{app:i}=e,s=p(i),o={next:n,error:r,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&K(s.token)){const t=s.token;Promise.resolve().then(()=>{n({token:t.token}),W(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>W(e))}function V(e,t){const n=p(e),r=n.tokenObservers.filter(e=>e.next!==t);0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function W(e){const{app:t}=e,n=p(t);let r=n.tokenRefresher;r||(r=H(e),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function H(e){const{app:t}=e;return new y(async()=>{const n=p(t);let r;if(r=n.token?await B(e,!0):await B(e),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const e=p(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0},v.RETRIAL_MIN_WAIT,v.RETRIAL_MAX_WAIT)}function z(e,t){const n=p(e).tokenObservers;for(const i of n)try{"EXTERNAL"===i.type&&null!=t.error?i.error(t.error):i.next(t)}catch(r){}}function K(e){return e.expireTimeMillis-Date.now()>0}function G(e){return{token:j(U),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=p(this.app);for(const t of e)V(this.app,t.next);return Promise.resolve()}}function X(e,t){return new Y(e,t)}function J(e){return{getToken:t=>B(e,t),getLimitedUseToken:()=>q(e),addTokenListener:t=>$(e,"INTERNAL",t),removeTokenListener:t=>V(e.app,t)}}const Q="@firebase/app-check",Z="0.8.0";const ee="app-check",te="app-check-internal";function ne(){(0,a.om)(new c.uA(ee,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return X(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(te).initialize()})),(0,a.om)(new c.uA(te,e=>{const t=e.getProvider("app-check").getImmediate();return J(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),(0,a.KO)(Q,Z)}ne();var re=n(6400);const ie=Symbol("firebaseApp");function se(e){return(0,i.nI)()&&(0,i.WQ)(ie,null)||(0,re.Sx)(e)}const oe=()=>{},ae="undefined"!==typeof window;function ce(e){return!!e&&"object"===typeof e}Object.prototype;function le(e){return ce(e)&&"document"===e.type}function ue(e){return ce(e)&&"collection"===e.type}function he(e){return le(e)||ue(e)}function de(e){return ce(e)&&"query"===e.type}function fe(e){return ce(e)&&"ref"in e}function pe(e){return ce(e)&&"string"===typeof e.bucket}const ge=Symbol.for("v-scx");function me(){const e=(0,i.nI)();return!!(s?e&&e.proxy.$isServer:(0,i.WQ)(ge,0))}const _e=new WeakMap;function ve(e,t){if(!_e.has(e)){const n=(0,o.uY)(!0);_e.set(e,n);const{unmount:r}=t;t.unmount=()=>{r.call(t),n.stop(),_e.delete(e)}}return _e.get(e)}const ye=new WeakMap;const we=new WeakMap;function be(e){const t=se(e);if(!we.has(t)){let e;const n=new Promise(t=>{e=t}),r=[n,n=>{we.set(t,n),e(n.value)}];we.set(t,r)}return we.get(t)}function Ee(e,t){(0,r.iZ)(t,t=>{const n=be();e.value=t,Array.isArray(n)&&n[1](e)})}Symbol("app-check-token");var Te,Ce=n(4161),Ie=(n(1319),n(178),n(7060),n(2598),n(9078),n(9229),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),Se={},ke=ke||{},Re=Ie||self;function Ae(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function Oe(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Pe(e){return Object.prototype.hasOwnProperty.call(e,Ne)&&e[Ne]||(e[Ne]=++xe)}var Ne="closure_uid_"+(1e9*Math.random()>>>0),xe=0;function De(e,t,n){return e.call.apply(e.bind,arguments)}function Le(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Me(e,t,n){return Me=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?De:Le,Me.apply(null,arguments)}function Fe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Ue(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function je(){this.s=this.s,this.o=this.o}var Be=0;je.prototype.s=!1,je.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==Be)||Pe(this)},je.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qe=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function $e(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ve(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(Ae(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function We(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var He=function(){if(!Re.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Re.addEventListener("test",()=>{},t),Re.removeEventListener("test",()=>{},t)}catch(n){}return e}();function ze(e){return/^[\s\xa0]*$/.test(e)}function Ke(){var e=Re.navigator;return e&&(e=e.userAgent)?e:""}function Ge(e){return-1!=Ke().indexOf(e)}function Ye(e){return Ye[" "](e),e}function Xe(e,t){var n=Fi;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}Ye[" "]=function(){};var Je,Qe,Ze=Ge("Opera"),et=Ge("Trident")||Ge("MSIE"),tt=Ge("Edge"),nt=tt||et,rt=Ge("Gecko")&&!(-1!=Ke().toLowerCase().indexOf("webkit")&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),it=-1!=Ke().toLowerCase().indexOf("webkit")&&!Ge("Edge");function st(){var e=Re.document;return e?e.documentMode:void 0}e:{var ot="",at=function(){var e=Ke();return rt?/rv:([^\);]+)(\)|;)/.exec(e):tt?/Edge\/([\d\.]+)/.exec(e):et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):it?/WebKit\/(\S+)/.exec(e):Ze?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(at&&(ot=at?at[1]:""),et){var ct=st();if(null!=ct&&ct>parseFloat(ot)){Je=String(ct);break e}}Je=ot}if(Re.document&&et){var lt=st();Qe=lt||(parseInt(Je,10)||void 0)}else Qe=void 0;var ut=Qe;function ht(e,t){if(We.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rt){e:{try{Ye(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:dt[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ht.$.h.call(this)}}Ue(ht,We);var dt={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),pt=0;function gt(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++pt,this.fa=this.ia=!1}function mt(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function _t(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function vt(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function yt(e){const t={};for(const n in e)t[n]=e[n];return t}const wt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bt(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<wt.length;t++)n=wt[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Et(e){this.src=e,this.g={},this.h=0}function Tt(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=qe(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(mt(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ct(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}Et.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ct(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new gt(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var It="closure_lm_"+(1e6*Math.random()|0),St={};function kt(e,t,n,r,i){if(r&&r.once)return Ot(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)kt(e,t[s],n,r,i);return null}return n=Ft(n),e&&e[ft]?e.O(t,n,Oe(r)?!!r.capture:!!r,i):Rt(e,t,n,!1,r,i)}function Rt(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Oe(i)?!!i.capture:!!i,a=Lt(e);if(a||(e[It]=a=new Et(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=At(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)He||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(xt(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function At(){function e(n){return t.call(e.src,e.listener,n)}const t=Dt;return e}function Ot(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ot(e,t[s],n,r,i);return null}return n=Ft(n),e&&e[ft]?e.P(t,n,Oe(r)?!!r.capture:!!r,i):Rt(e,t,n,!0,r,i)}function Pt(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Pt(e,t[s],n,r,i);else r=Oe(r)?!!r.capture:!!r,n=Ft(n),e&&e[ft]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ct(s,n,r,i),-1<n&&(mt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Lt(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ct(t,n,r,i)),(n=-1<e?t[e]:null)&&Nt(n))}function Nt(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ft])Tt(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(xt(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Lt(t))?(Tt(n,e),0==n.h&&(n.src=null,t[It]=null)):mt(e)}}}function xt(e){return e in St?St[e]:St[e]="on"+e}function Dt(e,t){if(e.fa)e=!0;else{t=new ht(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Nt(e),e=n.call(r,t)}return e}function Lt(e){return e=e[It],e instanceof Et?e:null}var Mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ft(e){return"function"===typeof e?e:(e[Mt]||(e[Mt]=function(t){return e.handleEvent(t)}),e[Mt])}function Ut(){je.call(this),this.i=new Et(this),this.S=this,this.J=null}function jt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new We(t,e);else if(t instanceof We)t.target=t.target||e;else{var i=t;t=new We(r,e),bt(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Bt(o,r,!0,t)&&i}if(o=t.g=e,i=Bt(o,r,!0,t)&&i,i=Bt(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Bt(o,r,!1,t)&&i}function Bt(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tt(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Ue(Ut,je),Ut.prototype[ft]=!0,Ut.prototype.removeEventListener=function(e,t,n,r){Pt(this,e,t,n,r)},Ut.prototype.N=function(){if(Ut.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mt(n[r]);delete t.g[e],t.h--}}this.J=null},Ut.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ut.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var qt=Re.JSON.stringify;class $t{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Vt(){var e=Jt;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wt{constructor(){this.h=this.g=null}add(e,t){const n=Ht.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ht=new $t(()=>new zt,e=>e.reset());class zt{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Kt(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gt(e){Re.setTimeout(()=>{throw e},0)}let Yt,Xt=!1,Jt=new Wt,Qt=()=>{const e=Re.Promise.resolve(void 0);Yt=()=>{e.then(Zt)}};var Zt=()=>{for(var e;e=Vt();){try{e.h.call(e.g)}catch(n){Gt(n)}var t=Ht;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Xt=!1};function en(e,t){Ut.call(this),this.h=e||1,this.g=t||Re,this.j=Me(this.qb,this),this.l=Date.now()}function tn(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function nn(e,t,n){if("function"===typeof e)n&&(e=Me(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Me(e.handleEvent,e)}return 2147483647<Number(t)?-1:Re.setTimeout(e,t||0)}function rn(e){e.g=nn(()=>{e.g=null,e.i&&(e.i=!1,rn(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Ue(en,Ut),Te=en.prototype,Te.ga=!1,Te.T=null,Te.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),jt(this,"tick"),this.ga&&(tn(this),this.start()))}},Te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Te.N=function(){en.$.N.call(this),tn(this),delete this.g};class sn extends je{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rn(this)}N(){super.N(),this.g&&(Re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(e){je.call(this),this.h=e,this.g={}}Ue(on,je);var an=[];function cn(e,t,n,r){Array.isArray(n)||(n&&(an[0]=n.toString()),n=an);for(var i=0;i<n.length;i++){var s=kt(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ln(e){_t(e.g,function(e,t){this.g.hasOwnProperty(t)&&Nt(e)},e),e.g={}}function un(){this.g=!0}function hn(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}function dn(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}function fn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+gn(e,n)+(r?" "+r:"")})}function pn(e,t){e.info(function(){return"TIMEOUT: "+t})}function gn(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return qt(n)}catch(a){return t}}on.prototype.N=function(){on.$.N.call(this),ln(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},un.prototype.Ea=function(){this.g=!1},un.prototype.info=function(){};var mn={},_n=null;function vn(){return _n=_n||new Ut}function yn(e){We.call(this,mn.Ta,e)}function wn(e){const t=vn();jt(t,new yn(t))}function bn(e,t){We.call(this,mn.STAT_EVENT,e),this.stat=t}function En(e){const t=vn();jt(t,new bn(t,e))}function Tn(e,t){We.call(this,mn.Ua,e),this.size=t}function Cn(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Re.setTimeout(function(){e()},t)}mn.Ta="serverreachability",Ue(yn,We),mn.STAT_EVENT="statevent",Ue(bn,We),mn.Ua="timingevent",Ue(Tn,We);var In={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kn(){}function Rn(e){return e.h||(e.h=e.i())}function An(){}kn.prototype.h=null;var On,Pn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nn(){We.call(this,"d")}function xn(){We.call(this,"c")}function Dn(){}function Ln(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new on(this),this.P=Fn,e=nt?125:void 0,this.V=new en(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mn}function Mn(){this.i=null,this.g="",this.h=!1}Ue(Nn,We),Ue(xn,We),Ue(Dn,kn),Dn.prototype.g=function(){return new XMLHttpRequest},Dn.prototype.i=function(){return{}},On=new Dn;var Fn=45e3,Un={},jn={};function Bn(e,t,n){e.L=1,e.v=cr(rr(t)),e.s=n,e.S=!0,qn(e,null)}function qn(e,t){e.G=Date.now(),Hn(e),e.A=rr(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),br(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Mn,e.g=Si(e.l,n?t:null,!e.s),0<e.O&&(e.M=new sn(Me(e.Pa,e,e.g),e.O)),cn(e.U,e.g,"readystatechange",e.nb),t=e.I?yt(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),wn(),hn(e.j,e.u,e.A,e.m,e.W,e.s)}function $n(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Vn(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Wn(e,n),r==jn){4==t&&(e.o=4,En(14),i=!1),fn(e.j,e.m,null,"[Incomplete Response]");break}if(r==Un){e.o=4,En(15),fn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}fn(e.j,e.m,r,null),Xn(e,r)}$n(e)&&r!=jn&&r!=Un&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,En(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vi(t),t.M=!0,En(11))):(fn(e.j,e.m,n,"[Invalid Chunked Response]"),Yn(e),Gn(e))}function Wn(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?jn:(n=Number(t.substring(n,r)),isNaN(n)?Un:(r+=1,r+n>t.length?jn:(t=t.slice(r,r+n),e.C=r+n,t)))}function Hn(e){e.Y=Date.now()+e.P,zn(e,e.P)}function zn(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Cn(Me(e.lb,e),t)}function Kn(e){e.B&&(Re.clearTimeout(e.B),e.B=null)}function Gn(e){0==e.l.H||e.J||bi(e.l,e)}function Yn(e){Kn(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,tn(e.V),ln(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xn(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Ar(n.i,e)))if(!e.K&&Ar(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;wi(n),li(n)}_i(n),En(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Cn(Me(n.ib,n),6e3));if(1>=Rr(n.i)&&n.oa){try{n.oa()}catch(l){}n.oa=void 0}}else Ti(n,11)}else if((e.K||n.g==e)&&wi(n),!ze(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=l[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Or(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,ar(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ii(r,r.J?r.pa:null,r.Y),o.K){Pr(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Kn(a),Hn(a)),r.g=o}else mi(r);0<n.j.length&&hi(n)}else"stop"!=l[0]&&"close"!=l[0]||Ti(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Ti(n,7):ci(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}wn(4)}catch(l){}}function Jn(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(Ae(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Qn(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(Ae(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Zn(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ae(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Qn(e),r=Jn(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}Te=Ln.prototype,Te.setTimeout=function(e){this.P=e},Te.nb=function(e){e=e.target;const t=this.M;t&&3==ti(e)?t.l():this.Pa(e)},Te.Pa=function(e){try{if(e==this.g)e:{const u=ti(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(3!=u||nt||this.g&&(this.h.h||this.g.ja()||ni(this.g)))){this.J||4!=u||7==t||wn(8==t||0>=h?3:2),Kn(this);var n=this.g.da();this.ca=n;t:if($n(this)){var r=ni(this.g);e="";var i=r.length,s=4==ti(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Yn(this),Gn(this);var o="";break t}this.h.i=new Re.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,dn(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,En(12),Yn(this),Gn(this);break e}fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xn(this,n)}this.S?(Vn(this,u,o),nt&&this.i&&3==u&&(cn(this.U,this.V,"tick",this.mb),this.V.start())):(fn(this.j,this.m,o,null),Xn(this,o)),4==u&&Yn(this),this.i&&!this.J&&(4==u?bi(this.l,this):(this.i=!1,Hn(this)))}else ri(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,En(12)):(this.o=0,En(13)),Yn(this),Gn(this)}}}catch(u){}},Te.mb=function(){if(this.g){var e=ti(this.g),t=this.g.ja();this.C<t.length&&(Kn(this),Vn(this,e,t),this.i&&4!=e&&Hn(this))}},Te.cancel=function(){this.J=!0,Yn(this)},Te.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(pn(this.j,this.A),2!=this.L&&(wn(),En(17)),Yn(this),this.o=2,Gn(this)):zn(this,this.Y-e)};var er=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tr(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nr){this.h=e.h,ir(this,e.j),this.s=e.s,this.g=e.g,sr(this,e.m),this.l=e.l;var t=e.i,n=new _r;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),or(this,n),this.o=e.o}else e&&(t=String(e).match(er))?(this.h=!1,ir(this,t[1]||"",!0),this.s=lr(t[2]||""),this.g=lr(t[3]||"",!0),sr(this,t[4]),this.l=lr(t[5]||"",!0),or(this,t[6]||"",!0),this.o=lr(t[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}function rr(e){return new nr(e)}function ir(e,t,n){e.j=n?lr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function or(e,t,n){t instanceof _r?(e.i=t,Tr(e.i,e.h)):(n||(t=ur(t,gr)),e.i=new _r(t,e.h))}function ar(e,t,n){e.i.set(t,n)}function cr(e){return ar(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ur(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,hr),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hr(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}nr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ur(t,dr,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ur(t,dr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ur(n,"/"==n.charAt(0)?pr:fr,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ur(n,mr)),e.join("")};var dr=/[#\/\?@]/g,fr=/[#\?:]/g,pr=/[#\?]/g,gr=/[#\?@]/g,mr=/#/g;function _r(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vr(e){e.g||(e.g=new Map,e.h=0,e.i&&tr(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function yr(e,t){vr(e),t=Er(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wr(e,t){return vr(e),t=Er(e,t),e.g.has(t)}function br(e,t,n){yr(e,t),0<n.length&&(e.i=null,e.g.set(Er(e,t),$e(n)),e.h+=n.length)}function Er(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tr(e,t){t&&!e.j&&(vr(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(yr(this,t),br(this,n,e))},e)),e.j=t}Te=_r.prototype,Te.add=function(e,t){vr(this),this.i=null,e=Er(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Te.forEach=function(e,t){vr(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},Te.ta=function(){vr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Te.Z=function(e){vr(this);let t=[];if("string"===typeof e)wr(this,e)&&(t=t.concat(this.g.get(Er(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Te.set=function(e,t){return vr(this),this.i=null,e=Er(this,e),wr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Te.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},Te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var Cr=class{constructor(e,t){this.g=e,this.map=t}};function Ir(e){this.l=e||Sr,Re.PerformanceNavigationTiming?(e=Re.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Re.g&&Re.g.Ka&&Re.g.Ka()&&Re.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sr=10;function kr(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Rr(e){return e.h?1:e.g?e.g.size:0}function Ar(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Or(e,t){e.g?e.g.add(t):e.h=t}function Pr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Nr(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return $e(e.i)}Ir.prototype.cancel=function(){if(this.i=Nr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var xr=class{stringify(e){return Re.JSON.stringify(e,void 0)}parse(e){return Re.JSON.parse(e,void 0)}};function Dr(){this.g=new xr}function Lr(e,t,n){const r=n||"";try{Zn(e,function(e,n){let i=e;Oe(e)&&(i=qt(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Mr(e,t){const n=new un;if(Re.Image){const r=new Image;r.onload=Fe(Fr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Fe(Fr,n,r,"TestLoadImage: error",!1,t),r.onabort=Fe(Fr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Fe(Fr,n,r,"TestLoadImage: timeout",!1,t),Re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Fr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ur(e){this.l=e.fc||null,this.j=e.ob||!1}function jr(e,t){Ut.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Br,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Ur,kn),Ur.prototype.g=function(){return new jr(this.l,this.j)},Ur.prototype.i=function(e){return function(){return e}}({}),Ue(jr,Ut);var Br=0;function qr(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function $r(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vr(e)}function Vr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Te=jr.prototype,Te.open=function(e,t){if(this.readyState!=Br)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vr(this)},Te.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Re).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$r(this)),this.readyState=Br},Te.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof Re.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qr(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Te.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$r(this):Vr(this),3==this.readyState&&qr(this)}},Te.Za=function(e){this.g&&(this.response=this.responseText=e,$r(this))},Te.Ya=function(e){this.g&&(this.response=e,$r(this))},Te.ka=function(){this.g&&$r(this)},Te.setRequestHeader=function(e,t){this.v.append(e,t)},Te.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Te.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(jr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Wr=Re.JSON.parse;function Hr(e){Ut.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zr,this.L=this.M=!1}Ue(Hr,Ut);var zr="",Kr=/^https?$/i,Gr=["POST","PUT"];function Yr(e){return et&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Xr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jr(e),Zr(e)}function Jr(e){e.F||(e.F=!0,jt(e,"complete"),jt(e,"error"))}function Qr(e){if(e.h&&"undefined"!=typeof ke&&(!e.C[1]||4!=ti(e)||2!=e.da()))if(e.v&&4==ti(e))nn(e.La,0,e);else if(jt(e,"readystatechange"),4==ti(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(er)[1]||null;!i&&Re.self&&Re.self.location&&(i=Re.self.location.protocol.slice(0,-1)),r=!Kr.test(i?i.toLowerCase():"")}n=r}if(n)jt(e,"complete"),jt(e,"success");else{e.m=6;try{var s=2<ti(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Jr(e)}}finally{Zr(e)}}}function Zr(e,t){if(e.g){ei(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||jt(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function ei(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Re.clearTimeout(e.A),e.A=null)}function ti(e){return e.g?e.g.readyState:0}function ni(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case zr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(ts){return null}}function ri(e){const t={};e=(e.g&&2<=ti(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(ze(e[r]))continue;var n=Kt(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}vt(t,function(e){return e.join(", ")})}function ii(e){let t="";return _t(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function si(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ii(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):ar(e,t,n))}function oi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ai(e){this.Ga=0,this.j=[],this.l=new un,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,e),this.hb=oi("retryDelaySeedMs",1e4,e),this.eb=oi("forwardChannelMaxRetries",2,e),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ir(e&&e.concurrentRequestLimit),this.Ja=new Dr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ci(e){if(ui(e),3==e.H){var t=e.W++,n=rr(e.I);if(ar(n,"SID",e.K),ar(n,"RID",t),ar(n,"TYPE","terminate"),pi(e,n),t=new Ln(e,e.l,t),t.L=2,t.v=cr(rr(n)),n=!1,Re.navigator&&Re.navigator.sendBeacon)try{n=Re.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&Re.Image&&((new Image).src=t.v,n=!0),n||(t.g=Si(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Hn(t)}Ci(e)}function li(e){e.g&&(vi(e),e.g.cancel(),e.g=null)}function ui(e){li(e),e.u&&(Re.clearTimeout(e.u),e.u=null),wi(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Re.clearTimeout(e.m),e.m=null)}function hi(e){if(!kr(e.i)&&!e.m){e.m=!0;var t=e.Na;Yt||Qt(),Xt||(Yt(),Xt=!0),Jt.add(t,e),e.C=0}}function di(e,t){return!(Rr(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=Cn(Me(e.Na,e,t),Ei(e,e.C)),e.C++,!0))}function fi(e,t){var n;n=t?t.m:e.W++;const r=rr(e.I);ar(r,"SID",e.K),ar(r,"RID",n),ar(r,"AID",e.V),pi(e,r),e.o&&e.s&&si(r,e.o,e.s),n=new Ln(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=gi(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Or(e.i,n),Bn(n,r,t)}function pi(e,t){e.na&&_t(e.na,function(e,n){ar(t,n,e)}),e.h&&Zn({},function(e,n){ar(t,n,e)})}function gi(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Me(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Lr(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function mi(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Yt||Qt(),Xt||(Yt(),Xt=!0),Jt.add(t,e),e.A=0}}function _i(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Cn(Me(e.Ma,e),Ei(e,e.A)),e.A++,!0)}function vi(e){null!=e.B&&(Re.clearTimeout(e.B),e.B=null)}function yi(e){e.g=new Ln(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=rr(e.wa);ar(t,"RID","rpc"),ar(t,"SID",e.K),ar(t,"AID",e.V),ar(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ar(t,"TO",e.qa),ar(t,"TYPE","xmlhttp"),pi(e,t),e.o&&e.s&&si(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=cr(rr(t)),n.s=null,n.S=!0,qn(n,e)}function wi(e){null!=e.v&&(Re.clearTimeout(e.v),e.v=null)}function bi(e,t){var n=null;if(e.g==t){wi(e),vi(e),e.g=null;var r=2}else{if(!Ar(e.i,t))return;n=t.F,Pr(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=vn(),jt(r,new Tn(r,n)),hi(e)}else mi(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&di(e,t)||2==r&&_i(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ti(e,5);break;case 4:Ti(e,10);break;case 3:Ti(e,6);break;default:Ti(e,2)}}function Ei(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ti(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=Me(e.pb,e);n||(n=new nr("//www.google.com/images/cleardot.gif"),Re.location&&"http"==Re.location.protocol||ir(n,"https"),cr(n)),Mr(n.toString(),r)}else En(2);e.H=0,e.h&&e.h.za(t),Ci(e),ui(e)}function Ci(e){if(e.H=0,e.ma=[],e.h){const t=Nr(e.i);0==t.length&&0==e.j.length||(Ve(e.ma,t),Ve(e.ma,e.j),e.i.i.length=0,$e(e.j),e.j.length=0),e.h.ya()}}function Ii(e,t,n){var r=n instanceof nr?rr(n):new nr(n);if(""!=r.g)t&&(r.g=t+"."+r.g),sr(r,r.m);else{var i=Re.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new nr(null);r&&ir(s,r),t&&(s.g=t),i&&sr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ar(r,n,t),ar(r,"VER",e.ra),pi(e,r),r}function Si(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Hr(new Ur({ob:!0})):new Hr(e.va),t.Oa(e.J),t}function ki(){}function Ri(){if(et&&!(10<=Number(ut)))throw Error("Environmental error: no available transport.")}function Ai(e,t){Ut.call(this),this.g=new ai(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ze(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ni(this)}function Oi(e){Nn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Pi(){xn.call(this),this.status=1}function Ni(e){this.g=e}function xi(){this.blockSize=-1}function Di(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Li(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Mi(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}Te=Hr.prototype,Te.Oa=function(e){this.M=e},Te.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():On.g(),this.C=this.u?Rn(this.u):Rn(On),this.g.onreadystatechange=Me(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Xr(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=Re.FormData&&e instanceof Re.FormData,!(0<=qe(Gr,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ei(this),0<this.B&&((this.L=Yr(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.ua,this)):this.A=nn(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Xr(this,s)}},Te.ua=function(){"undefined"!=typeof ke&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jt(this,"timeout"),this.abort(8))},Te.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,jt(this,"complete"),jt(this,"abort"),Zr(this))},Te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zr(this,!0)),Hr.$.N.call(this)},Te.La=function(){this.s||(this.G||this.v||this.l?Qr(this):this.kb())},Te.kb=function(){Qr(this)},Te.isActive=function(){return!!this.g},Te.da=function(){try{return 2<ti(this)?this.g.status:-1}catch(e){return-1}},Te.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Te.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Wr(t)}},Te.Ia=function(){return this.m},Te.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Te=ai.prototype,Te.ra=8,Te.H=1,Te.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ln(this,this.l,e);let s=this.s;if(this.U&&(s?(s=yt(s),bt(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=gi(this,i,t),n=rr(this.I),ar(n,"RID",e),ar(n,"CVER",22),this.F&&ar(n,"X-HTTP-Session-Id",this.F),pi(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ii(s)))+"&"+t:this.o&&si(n,this.o,s)),Or(this.i,i),this.bb&&ar(n,"TYPE","init"),this.P?(ar(n,"$req",t),ar(n,"SID","null"),i.aa=!0,Bn(i,n,null)):Bn(i,n,t),this.H=2}}else 3==this.H&&(e?fi(this,e):0==this.j.length||kr(this.i)||fi(this))},Te.Ma=function(){if(this.u=null,yi(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Cn(Me(this.jb,this),e)}},Te.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,En(10),li(this),yi(this))},Te.ib=function(){null!=this.v&&(this.v=null,li(this),_i(this),En(19))},Te.pb=function(e){e?(this.l.info("Successfully pinged google.com"),En(2)):(this.l.info("Failed to ping google.com"),En(1))},Te.isActive=function(){return!!this.h&&this.h.isActive(this)},Te=ki.prototype,Te.Ba=function(){},Te.Aa=function(){},Te.za=function(){},Te.ya=function(){},Te.isActive=function(){return!0},Te.Va=function(){},Ri.prototype.g=function(e,t){return new Ai(e,t)},Ue(Ai,Ut),Ai.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;En(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ii(e,null,e.Y),hi(e)},Ai.prototype.close=function(){ci(this.g)},Ai.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=qt(e),e=n);t.j.push(new Cr(t.fb++,e)),3==t.H&&hi(t)},Ai.prototype.N=function(){this.g.h=null,delete this.j,ci(this.g),delete this.g,Ai.$.N.call(this)},Ue(Oi,Nn),Ue(Pi,xn),Ue(Ni,ki),Ni.prototype.Ba=function(){jt(this.g,"a")},Ni.prototype.Aa=function(e){jt(this.g,new Oi(e))},Ni.prototype.za=function(e){jt(this.g,new Pi)},Ni.prototype.ya=function(){jt(this.g,"b")},Ue(Di,xi),Di.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Di.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Li(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Li(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Li(this,r),i=0;break}}this.h=i,this.i+=t},Di.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Fi={};function Ui(e){return-128<=e&&128>e?Xe(e,function(e){return new Mi([0|e],0>e?-1:0)}):new Mi([0|e],0>e?-1:0)}function ji(e){if(isNaN(e)||!isFinite(e))return $i;if(0>e)return Ki(ji(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=qi;return new Mi(t,0)}function Bi(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Ki(Bi(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ji(Math.pow(t,8)),r=$i,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ji(Math.pow(t,s)),r=r.R(s).add(ji(o))):(r=r.R(n),r=r.add(ji(o)))}return r}var qi=4294967296,$i=Ui(0),Vi=Ui(1),Wi=Ui(16777216);function Hi(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function zi(e){return-1==e.h}function Ki(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Mi(n,~e.h).add(Vi)}function Gi(e,t){return e.add(Ki(t))}function Yi(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Xi(e,t){this.g=e,this.h=t}function Ji(e,t){if(Hi(t))throw Error("division by zero");if(Hi(e))return new Xi($i,$i);if(zi(e))return t=Ji(Ki(e),t),new Xi(Ki(t.g),Ki(t.h));if(zi(t))return t=Ji(e,Ki(t)),new Xi(Ki(t.g),t.h);if(30<e.g.length){if(zi(e)||zi(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Vi,r=t;0>=r.X(e);)n=Qi(n),r=Qi(r);var i=Zi(n,1),s=Zi(r,1);for(r=Zi(r,2),n=Zi(n,2);!Hi(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Zi(r,1),n=Zi(n,1)}return t=Gi(e,i.R(t)),new Xi(i,t)}for(i=$i;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ji(n),o=s.R(t);zi(o)||0<o.X(e);)n-=r,s=ji(n),o=s.R(t);Hi(s)&&(s=Vi),i=i.add(s),e=Gi(e,o)}return new Xi(i,e)}function Qi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Mi(n,e.h)}function Zi(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Mi(i,e.h)}Te=Mi.prototype,Te.ea=function(){if(zi(this))return-Ki(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:qi+r)*t,t*=qi}return e},Te.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Hi(this))return"0";if(zi(this))return"-"+Ki(this).toString(e);for(var t=ji(Math.pow(e,6)),n=this,r="";;){var i=Ji(n,t).g;n=Gi(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Hi(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Te.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Te.X=function(e){return e=Gi(this,e),zi(e)?-1:Hi(e)?0:1},Te.abs=function(){return zi(this)?Ki(this):this},Te.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Mi(n,-2147483648&n[n.length-1]?-1:0)},Te.R=function(e){if(Hi(this)||Hi(e))return $i;if(zi(this))return zi(e)?Ki(this).R(Ki(e)):Ki(Ki(this).R(e));if(zi(e))return Ki(this.R(Ki(e)));if(0>this.X(Wi)&&0>e.X(Wi))return ji(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Yi(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Yi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Yi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Yi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Mi(n,0)},Te.gb=function(e){return Ji(this,e).h},Te.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Mi(n,this.h&e.h)},Te.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Mi(n,this.h|e.h)},Te.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Mi(n,this.h^e.h)},Ri.prototype.createWebChannel=Ri.prototype.g,Ai.prototype.send=Ai.prototype.u,Ai.prototype.open=Ai.prototype.m,Ai.prototype.close=Ai.prototype.close,In.NO_ERROR=0,In.TIMEOUT=8,In.HTTP_ERROR=6,Sn.COMPLETE="complete",An.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",Ut.prototype.listen=Ut.prototype.O,Hr.prototype.listenOnce=Hr.prototype.P,Hr.prototype.getLastError=Hr.prototype.Sa,Hr.prototype.getLastErrorCode=Hr.prototype.Ia,Hr.prototype.getStatus=Hr.prototype.da,Hr.prototype.getResponseJson=Hr.prototype.Wa,Hr.prototype.getResponseText=Hr.prototype.ja,Hr.prototype.send=Hr.prototype.ha,Hr.prototype.setWithCredentials=Hr.prototype.Oa,Di.prototype.digest=Di.prototype.l,Di.prototype.reset=Di.prototype.reset,Di.prototype.update=Di.prototype.j,Mi.prototype.add=Mi.prototype.add,Mi.prototype.multiply=Mi.prototype.R,Mi.prototype.modulo=Mi.prototype.gb,Mi.prototype.compare=Mi.prototype.X,Mi.prototype.toNumber=Mi.prototype.ea,Mi.prototype.toString=Mi.prototype.toString,Mi.prototype.getBits=Mi.prototype.D,Mi.fromNumber=ji,Mi.fromString=Bi;Se.createWebChannelTransport=function(){return new Ri},Se.getStatEventTarget=function(){return vn()},Se.ErrorCode=In,Se.EventType=Sn,Se.Event=mn,Se.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Se.FetchXmlHttpFactory=Ur,Se.WebChannel=An,Se.XhrIo=Hr,Se.Md5=Di;var es=Se.Integer=Mi;const ts="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ns.UNAUTHENTICATED=new ns(null),ns.GOOGLE_CREDENTIALS=new ns("google-credentials-uid"),ns.FIRST_PARTY=new ns("first-party-uid"),ns.MOCK_USER=new ns("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let rs="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new u.Vy("@firebase/firestore");function ss(e,...t){if(is.logLevel<=u.$b.DEBUG){const n=t.map(as);is.debug(`Firestore (${rs}): ${e}`,...n)}}function os(e,...t){if(is.logLevel<=u.$b.ERROR){const n=t.map(as);is.error(`Firestore (${rs}): ${e}`,...n)}}function as(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e="Unexpected state"){const t=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+e;throw os(t),new Error(t)}function ls(e,t){e||cs()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const us={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hs extends l.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ps{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ns.UNAUTHENTICATED))}shutdown(){}}class gs{constructor(e){this.t=e,this.currentUser=ns.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ds,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{ss("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ss("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ds)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ss("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ls("string"==typeof t.accessToken),new fs(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ls(null===e||"string"==typeof e),new ns(e)}}class ms{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ns.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _s{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ms(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ns.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ys{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ss("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ss("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{ss("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ss("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(ls("string"==typeof e.token),this.T=e.token,new vs(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ws(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ws(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Es(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(e,t,n){void 0===t?t=0:t>e.length&&cs(),void 0===n?n=e.length-t:n>e.length-t&&cs(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ts.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ts?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Cs extends Ts{construct(e,t,n){return new Cs(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new hs(us.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Cs(t)}static emptyPath(){return new Cs([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(e){this.path=e}static fromPath(e){return new Is(Cs.fromString(e))}static fromName(e){return new Is(Cs.fromString(e).popFirst(5))}static empty(){return new Is(Cs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Cs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Cs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Is(new Cs(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ss.UNKNOWN_ID=-1;function ks(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function As(e){return 0===e&&1/e==-1/0}Rs.ct=-1;const Os=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ps=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ns=Ps;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e,t){this.comparator=e,this.root=t||Ls.EMPTY}insert(e,t){return new xs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ls.BLACK,null,null))}remove(e){return new xs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ls.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ls{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ls.RED,this.left=null!=r?r:Ls.EMPTY,this.right=null!=i?i:Ls.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ls(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ls.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ls.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ls.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ls.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw cs();if(this.right.isRed())throw cs();const e=this.left.check();if(e!==this.right.check())throw cs();return e+(this.isRed()?0:1)}}Ls.EMPTY=null,Ls.RED=!0,Ls.BLACK=!1,Ls.EMPTY=new class{constructor(){this.size=0}get key(){throw cs()}get value(){throw cs()}get color(){throw cs()}get left(){throw cs()}get right(){throw cs()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ls(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(e){this.comparator=e,this.data=new xs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fs(this.data.getIterator())}getIteratorFrom(e){return new Fs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ms))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ms(this.comparator);return t.data=e,t}}class Fs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Us("Invalid base64 string: "+e):e}}(e);return new js(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new js(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Es(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}js.EMPTY_BYTE_STRING=new js("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function qs(e){return"string"==typeof e?js.fromBase64String(e):js.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Vs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new xs(Is.comparator);new xs(Is.comparator);new xs(Is.comparator),new Ms(Is.comparator);new Ms(Es);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hs,zs;(zs=Hs||(Hs={}))[zs.OK=0]="OK",zs[zs.CANCELLED=1]="CANCELLED",zs[zs.UNKNOWN=2]="UNKNOWN",zs[zs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zs[zs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zs[zs.NOT_FOUND=5]="NOT_FOUND",zs[zs.ALREADY_EXISTS=6]="ALREADY_EXISTS",zs[zs.PERMISSION_DENIED=7]="PERMISSION_DENIED",zs[zs.UNAUTHENTICATED=16]="UNAUTHENTICATED",zs[zs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zs[zs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zs[zs.ABORTED=10]="ABORTED",zs[zs.OUT_OF_RANGE=11]="OUT_OF_RANGE",zs[zs.UNIMPLEMENTED=12]="UNIMPLEMENTED",zs[zs.INTERNAL=13]="INTERNAL",zs[zs.UNAVAILABLE=14]="UNAVAILABLE",zs[zs.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new es([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Bs(e.integerValue));else if("doubleValue"in e){const n=Bs(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),As(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(qs(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Ws(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):cs()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Is.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Ks.Ve=new Ks;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class Gs{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Gs(e,Gs.DEFAULT_COLLECTION_PERCENTILE,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.DEFAULT_COLLECTION_PERCENTILE=10,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gs.DEFAULT=new Gs(41943040,Gs.DEFAULT_COLLECTION_PERCENTILE,Gs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gs.DISABLED=new Gs(-1,0,0);function Ys(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&ss("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Js(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hs(us.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qs(e,t){if(os("AsyncQueue",`${t}: ${e}`),ks(e))return new hs(us.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ns.UNAUTHENTICATED,this.clientId=bs.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{ss("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ss("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hs(us.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Qs(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const to=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t,n,r){if(!0===t&&!0===r)throw new hs(us.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new hs(us.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hs(us.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}no("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eo(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new hs(us.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new hs(us.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new hs(us.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class io{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ro({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new hs(us.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hs(us.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ro(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ps;switch(e.type){case"firstParty":return new _s(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hs(us.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=to.get(e);t&&(ss("ComponentProvider","Removing Datastore"),to.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Xs(this,"async_queue_retry"),this.Xc=()=>{const e=Ys();e&&ss("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Ys();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ys();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new ds;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ks(e))throw e;ss("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw os("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Js.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&cs()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class oo extends io{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new so,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ao(this),this._firestoreClient.terminate()}}function ao(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new $s(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,eo(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Zs(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){!function(e){rs=e}("9.23.0"),(0,a.om)(new c.uA("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new oo(new gs(e.getProvider("auth-internal")),new ys(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hs(us.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,a.KO)(ts,"3.13.0",e),(0,a.KO)(ts,"3.13.0","esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const co="firebasestorage.googleapis.com",lo="storageBucket",uo=12e4,ho=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo extends l.g{constructor(e,t,n=0){super(mo(e),`Firebase Storage: ${t} (${mo(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fo.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var po,go;function mo(e){return"storage/"+e}function _o(){const e="An unknown error occurred, please check the error payload for server response.";return new fo(po.UNKNOWN,e)}function vo(){return new fo(po.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yo(){return new fo(po.CANCELED,"User canceled the upload/download.")}function wo(e){return new fo(po.INVALID_URL,"Invalid URL '"+e+"'.")}function bo(e){return new fo(po.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Eo(e){return new fo(po.INVALID_ARGUMENT,e)}function To(){return new fo(po.APP_DELETED,"The Firebase app was deleted.")}function Co(e){return new fo(po.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(po||(po={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Io.makeFromUrl(e,t)}catch(r){return new Io(e,"")}if(""===n.path)return n;throw bo(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${l}/b/${r}/o${h}`,"i"),f={bucket:1,path:3},p=t===co?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",m=new RegExp(`^https?://${p}/${r}/${g}`,"i"),_={bucket:1,path:2},v=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:c},{regex:m,indices:_,postModify:c}];for(let y=0;y<v.length;y++){const t=v[y],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new Io(e,i),t.postModify(n);break}}if(null==n)throw wo(e);return n}}class So{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),l||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function Ro(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){return void 0!==e}function Oo(e,t,n,r){if(r<t)throw Eo(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Eo(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(go||(go={}));class xo{constructor(e,t,n,r,i,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Do(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===go.NO_ERROR,i=n.getStatus();if(!t||No(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===go.ABORT;return void e(!1,new Do(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Do(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());Ao(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=_o();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?To():yo();r(e)}else{const e=vo();r(e)}};this.canceled_?t(!1,new Do(!1,null,!0)):this.backoffId_=ko(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Ro(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Do{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Lo(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Mo(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Fo(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Uo(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function jo(e,t,n,r,i,s,o=!0){const a=Po(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Fo(l,t),Lo(l,n),Mo(l,s),Uo(l,r),new xo(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function qo(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(e,t){this._service=e,this._location=t instanceof Io?t:Io.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $o(e,t)}get root(){const e=new Io(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qo(this._location.path)}get storage(){return this._service}get parent(){const e=Bo(this._location.path);if(null===e)return null;const t=new Io(this._location.bucket,e);return new $o(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw Co(e)}}function Vo(e,t){const n=null===t||void 0===t?void 0:t[lo];return null==n?null:Io.makeFromBucketSpec(n,e)}class Wo{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=co,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uo,this._maxUploadRetryTime=ho,this._requests=new Set,this._bucket=null!=r?Io.makeFromBucketSpec(r,this._host):Vo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Io.makeFromBucketSpec(this._url,e):this._bucket=Vo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Oo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Oo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $o(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new So(To());{const s=jo(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ho="@firebase/storage",zo="0.11.2",Ko="storage";function Go(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Wo(n,r,i,t,"9.23.0")}function Yo(){(0,a.om)(new c.uA(Ko,Go,"PUBLIC").setMultipleInstances(!0)),(0,a.KO)(Ho,zo,""),(0,a.KO)(Ho,zo,"esm2017")}Yo();const Xo=new WeakMap;function Jo(e,t){return Xo.has(t)||Xo.set(t,e||{f:{},r:{},s:{},u:{}}),Xo.get(t)}function Qo(e,t,n,r){if(!e)return n;const[i,s]=ea(e);if(!i)return n;const o=Jo(void 0,r)[i]||{},a=t||s;return a&&a in o?o[a]:n}function Zo(e,t,n,r){if(!e)return;const[i,s]=ea(e);if(!i)return;const o=Jo(void 0,r)[i],a=t||s;return a?(n.then(e=>{o[a]=e}).catch(oe),a):void 0}function ea(e){return he(e)||de(e)?["f",e.path]:fe(e)?["r",e.toString()]:pe(e)?["s",e.toString()]:[]}const ta=new WeakMap;function na(e,t,n){const r=se();ta.has(r)||ta.set(r,new Map);const i=ta.get(r),s=Zo(t,n,e,r);return s&&i.set(s,e),s?()=>i.delete(s):oe}function ra(e){if(!e.exists())return null;const t=e.val();return ce(t)?Object.defineProperty(t,"id",{value:e.key}):{$value:t,id:e.key}}function ia(e,t){for(let n=0;n<e.length;n++)if(e[n].id===t)return n;return-1}const sa={reset:!1,serialize:ra,wait:!0};function oa(e,t,n,r,i){const s=Object.assign({},sa,i);let o=oe;function a(t){const r=s.serialize(t);e.value=r,n(r)}return s.once?(0,Ce.Jt)(t).then(a).catch(r):o=(0,Ce.Zy)(t,a,r),t=>{if(o(),t){const n="function"===typeof t?t():null;e.value=n}}}function aa(e,t,n,r,i){const s=Object.assign({},sa,i);let a=s.wait?[]:e;s.wait||(e.value=[]);let c=oe,l=oe,u=oe,h=oe,d=oe;return s.once?(0,Ce.Jt)(t).then(t=>{const r=[];t.forEach(e=>{r.push(s.serialize(e))}),n(e.value=r)}).catch(r):(c=(0,Ce._O)(t,(e,t)=>{const n=(0,o.BA)(a),r=t?ia(n,t)+1:0;n.splice(r,0,s.serialize(e))},r),u=(0,Ce.U0)(t,e=>{const t=(0,o.BA)(a);t.splice(ia(t,e.key),1)},r),l=(0,Ce.M4)(t,e=>{const t=(0,o.BA)(a);t.splice(ia(t,e.key),1,s.serialize(e))},r),h=(0,Ce.X1)(t,(e,t)=>{const n=(0,o.BA)(a),r=ia(n,e.key),i=n.splice(r,1)[0],s=t?ia(n,t)+1:0;n.splice(s,0,i)},r),d=(0,Ce.Zy)(t,()=>{const t=(0,o.BA)(a);s.wait&&(e.value=t,a=e),n(t),d()},r)),t=>{if(d(),c(),u(),l(),h(),t){const n="function"===typeof t?t():[];e.value=n}}}function ca(e,t={},n=!1){let r=oe;const s=Object.assign({},sa,t),a=(0,o.BA)(e),c=s.target||(0,o.KR)();const l=me();l&&(s.once=!0);const u=Qo(a,s.ssrKey,c.value,se());c.value=u;const h=n?(u||[]).length>0:void 0!==u;let d=!h;const f=(0,o.KR)(),p=(0,o.KR)(!1),g=(0,o.IJ)(),m=(0,o.o5)();let _=oe;function v(){const t=(0,o.BA)(e),n=new Promise((e,n)=>{if(r(s.reset),!t)return r=oe,e(null);p.value=d,d=!0,r=Array.isArray(c.value)?aa(c,t,e,n,s):oa(c,t,e,n,s)}).catch(e=>{throw g.value===n&&(f.value=e),e}).finally(()=>{g.value===n&&(p.value=!1)});g.value=n}let y=oe;function w(e=s.reset){y(),_(),r(e)}return((0,o.i9)(e)||"function"===typeof e)&&(y=(0,i.wB)(e,v)),v(),a&&(_=na(g.value,a,s.ssrKey)),m&&((0,o.jr)(w),(0,i.nI)()&&(0,i.SS)(()=>g.value)),Object.defineProperties(c,{data:{get:()=>c},error:{get:()=>f},pending:{get:()=>p},promise:{get:()=>g},stop:{get:()=>w}})}function la(e,t){const n=(0,o.KR)([]);return ca(e,{target:n,...t},!0)}Symbol();function ua(e){return da({initialUser:e,dependencies:{popupRedirectResolver:r.hk,persistence:[r.Gt,r.F0,r.iM]}})}const ha=Symbol("VueFireAuth");function da({dependencies:e,initialUser:t}){return(n,r)=>{const[i,s]=fa(n,r,t,e);Ee(i,s)}}function fa(e,t,n,i,s=(0,r.Nu)(e,i)){const a=ve(e,t).run(()=>(0,o.KR)(n));return ye.set(e,a),t.provide(ha,s),[a,s]}function pa(e){return ae?(0,i.WQ)(ha):null}function ga(e,{firebaseApp:t,modules:n=[]}){e.provide(ie,t);for(const r of n)r(t,e)}}}]);
//# sourceMappingURL=chunk-vendors.5c6ed702.js.map