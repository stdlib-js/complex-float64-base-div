"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var f=l(function(Y,E){"use strict";function D(a,r,e,s,u,i){var t;return u===0?(a+s*(r/e))*i:(t=r*u,t===0?a*i+r*i*u:(a+t)*i)}E.exports=D});var R=l(function($,A){"use strict";var g=f();function M(a,r,e,s){var u,i,t;return u=[0,0],i=s/e,t=1/(e+s*i),u[0]=g(a,r,e,s,i,t),u[1]=g(r,-a,e,s,i,t),u}A.exports=M});var d=l(function(Z,H){"use strict";var q=require("@stdlib/math-base-special-abs"),T=require("@stdlib/math-base-special-max"),B=require("@stdlib/constants-float64-max"),Q=require("@stdlib/constants-float64-smallest-normal"),S=require("@stdlib/constants-float64-eps"),_=R(),b=B*.5,C=Q*(2/S),o=2/(S*S);function h(a,r,e,s,u,i,t){var n,c,L,v;return c=T(q(a),q(r)),L=T(q(e),q(s)),v=1,c>=b?(a*=.5,r*=.5,v*=2):c<=C&&(a*=o,r*=o,v/=o),L>=b?(e*=.5,s*=.5,v*=.5):L<=C&&(e*=o,s*=o,v*=o),q(s)<=q(e)?n=_(a,r,e,s):(n=_(r,a,s,e),n[1]*=-1),n[0]*=v,n[1]*=v,u[t]=n[0],u[t+i]=n[1],u}H.exports=h});var G=l(function(z,F){"use strict";var I=require("@stdlib/complex-float64-real"),O=require("@stdlib/complex-float64-imag"),j=require("@stdlib/array-float64"),k=require("@stdlib/complex-float64-ctor"),J=d(),p=new j(2);function K(a,r){var e,s,u,i;return e=I(a),s=I(r),u=O(a),i=O(r),p=J(e,u,s,i,p,1,0),new k(p[0],p[1])}F.exports=K});var w=l(function(m,P){"use strict";var N=d();function U(a,r,e,s,u,i,t,n,c){return N(a[e],a[e+r],s[i],s[i+u],t,n,c)}P.exports=U});var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),x=G(),V=d(),W=w();y(x,"assign",V);y(x,"strided",W);module.exports=x;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
