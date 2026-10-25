(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,N=33779,P=35840,F=35841,I=35842,ne=35843,re=36196,ie=37492,ae=37496,oe=37488,L=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,Ae=2300,R=2301,je=2302,Me=2303,Ne=2400,z=2401,Pe=2402,B=3200,Fe=`srgb`,Ie=`srgb-linear`,Le=`linear`,Re=`srgb`,ze=7680,Be=35044,Ve=35048,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in qe||(qe[t]=!0,V(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function U(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*nt}function vt(e){return e*rt}function yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Tt={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:U,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:wt,denormalize:Ct},Et=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(U(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new W,kt=new Dt,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new G,jt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:Ie,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Le:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ie]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ge(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new W,Wt=class r extends $e{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=it(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this.w=U(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this.w=U(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new W,Qt=new Xt,$t=new W(0,0,0),en=new W(1,1,1),tn=new W,nn=new W,rn=new W,an=new Xt,on=new Dt,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(U(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-U(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(U(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-U(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(U(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-U(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ln=0,un=new W,dn=new Dt,fn=new Xt,pn=new W,mn=new W,hn=new W,gn=new Dt,_n=new W(1,0,0),vn=new W(0,1,0),yn=new W(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new sn,r=new Dt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new G}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new W(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=at(e,1),t=U(t,0,1),n=U(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=On[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(U(Mn.r*255,0,255))*65536+Math.round(U(Mn.g*255,0,255))*256+Math.round(U(Mn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Fe){Pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ct(kn.h,An.h,t),r=ct(kn.s,An.s,t),i=ct(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new K;K.NAMES=On;var Nn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new W,Fn=new W,In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new Gt,Gn=new Gt,Kn=new Gt,qn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Zn=new Jn,Qn=new W,$n=new W,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new W,ur=new Et,dr=0,fr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Be,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new W,vr=new W,yr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Xt,Sr=new wn,Cr=new W,wr=new Jn,Tr=new Jn,Er=new W,Dr=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new Et,f=new Et,p=new Et,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Be,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},kr=new W,Ar=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix4(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyNormalMatrix(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.transformDirection(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ct(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ct(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ct(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ct(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Je(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new fr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Je(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=new W,Mr=new W,Nr=new G,Pr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jr.subVectors(n,t).cross(Mr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(jr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nr.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fr=0,Ir=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Pr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Et().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Lr=new W,Rr=new W,zr=new W,Br=new W,Vr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,F=T-M*D,I=E-N*D,ne=O-M*A,re=k-N*A,ie=ee-M*te,ae=j-N*te,oe=ie*re-ae*ne,L=F*ae-I*ie,se=ne*I-re*F;if(r){if(oe<0||L<0||se<0)return null}else if((oe<0||L<0||se<0)&&(oe>0||L>0||se>0))return null;let ce=oe+L+se;if(ce===0)return null;let le=P*(oe*D+L*A+se*te);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ur=new Xt,Wr=new Vr,Gr=new yr,Kr=new W,qr=new W,Jr=new W,Yr=new W,Xr=new W,Zr=new W,Qr=new W,$r=new W,ei=class extends wn{constructor(e=new Dr,t=new Hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xr.fromBufferAttribute(s,e),a?Zr.addScaledVector(Xr,r):Zr.addScaledVector(Xr.sub(t),r))}t.add(Zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Wr.copy(e.ray).recast(e.near),!(Gr.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Gr,Kr)===null||Wr.origin.distanceToSquared(Kr)>(e.far-e.near)**2))&&(Ur.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Ur),(n.boundingBox===null||Wr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$r.copy(s),$r.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($r);return l<n.near||l>n.far?null:{distance:l,point:$r.clone(),object:e}}function ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qr),e.getVertexPosition(c,Jr),e.getVertexPosition(l,Yr);let u=ti(e,t,n,r,qr,Jr,Yr,Qr);if(u){let e=new W;qn.getBarycoord(Qr,qr,Jr,Yr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new Et)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new Et)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};qn.getNormal(qr,Jr,Yr,t.normal),u.face=t,u.barycoord=e}return u}var ri=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ai=new yr,oi=new Et(.5,.5),si=new W,ci=class{constructor(e=new Pr,t=new Pr,n=new Pr,r=new Pr,i=new Pr,a=new Pr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476+oi.distanceTo(e.center),ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(si.x=r.normal.x>0?e.max.x:e.min.x,si.y=r.normal.y>0?e.max.y:e.min.y,si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},li=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ui=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fi=class extends di{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pi=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mi=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},hi=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function gi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(vi(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(vi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function _i(e){let t={};for(let n=0;n<e.length;n++){let r=gi(e[n]);for(let e in r)t[e]=r[e]}return t}function vi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var xi={clone:gi,merge:_i},Si=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ci=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Si,this.fragmentShader=Ci,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=yi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Et().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ti=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ei=class extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=B,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Di=class extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ki(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ai=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ji=class extends Ai{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case z:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case z:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Mi=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ni=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pi=class extends Ai{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Li(n,t,g,y,r);i[p]=Fi(x,o,_,b,m)}return i}};function Fi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ii(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Li(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Fi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ii(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ri=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ki(e.settings)&&(n.settings={inTangents:Oi(e.settings.inTangents,Array),outTangents:Oi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ni(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case R:t=this.InterpolantFactoryMethodLinear;break;case je:t=this.InterpolantFactoryMethodSmooth;break;case Me:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return R;case this.InterpolantFactoryMethodSmooth:return je;case this.InterpolantFactoryMethodBezier:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ki(this.settings)&&(zi(this.settings.inTangents,e),zi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===je,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ki(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function zi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ri.prototype.ValueTypeName=``,Ri.prototype.TimeBufferType=Float32Array,Ri.prototype.ValueBufferType=Float32Array,Ri.prototype.DefaultInterpolation=R;var Bi=class extends Ri{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName=`bool`,Bi.prototype.ValueBufferType=Array,Bi.prototype.DefaultInterpolation=Ae,Bi.prototype.InterpolantFactoryMethodLinear=void 0,Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}};Vi.prototype.ValueTypeName=`color`;var Hi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}};Hi.prototype.ValueTypeName=`number`;var Ui=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Wi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ui(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName=`quaternion`,Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Ri{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName=`string`,Gi.prototype.ValueBufferType=Array,Gi.prototype.DefaultInterpolation=Ae,Gi.prototype.InterpolantFactoryMethodLinear=void 0,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}};Ki.prototype.ValueTypeName=`vector`;var qi=new W,Ji=new Dt,Yi=new W,Xi=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qi,Ji,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qi,Ji,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qi,Ji,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qi,Ji,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new W,Qi=new Et,$i=new Et,ea=class extends Xi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Qi,$i),t.subVectors($i,Qi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ta=class extends Xi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},na=class extends Dr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ra=-90,ia=1,aa=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ea(ra,ia,e,t);r.layers=this.layers,this.add(r);let i=new ea(ra,ia,e,t);i.layers=this.layers,this.add(i);let a=new ea(ra,ia,e,t);a.layers=this.layers,this.add(a);let o=new ea(ra,ia,e,t);o.layers=this.layers,this.add(o);let s=new ea(ra,ia,e,t);s.layers=this.layers,this.add(s);let c=new ea(ra,ia,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oa=class extends ea{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},sa=`\\[\\]\\.:\\/`,ca=RegExp(`[\\[\\]\\.:\\/]`,`g`),la=`[^\\[\\]\\.:\\/]`,ua=`[^`+sa.replace(`\\.`,``)+`]`,da=`((?:WC+[\\/:])*)`.replace(`WC`,la),fa=`(WCOD+)?`.replace(`WCOD`,ua),pa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,la),ma=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,la),ha=RegExp(`^`+da+fa+pa+ma+`$`),ga=[`material`,`materials`,`bones`,`map`],_a=class{constructor(e,t,n){let r=n||va.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},va=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ca,``)}static parseTrackName(e){let t=ha.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ga.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};va.Composite=_a,va.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},va.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},va.prototype.GetterByBindingType=[va.prototype._getValue_direct,va.prototype._getValue_array,va.prototype._getValue_arrayElement,va.prototype._getValue_toArray],va.prototype.SetterByBindingTypeAndVersioning=[[va.prototype._setValue_direct,va.prototype._setValue_direct_setNeedsUpdate,va.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[va.prototype._setValue_array,va.prototype._setValue_array_setNeedsUpdate,va.prototype._setValue_array_setMatrixWorldNeedsUpdate],[va.prototype._setValue_arrayElement,va.prototype._setValue_arrayElement_setNeedsUpdate,va.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[va.prototype._setValue_fromArray,va.prototype._setValue_fromArray_setNeedsUpdate,va.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ya=class extends Or{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ba(e,t,n,r){let i=xa(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case F:case ne:return Math.max(e,16)*Math.max(t,8)/4;case P:case I:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case oe:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xa(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Sa(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ca(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},wa={basic:{uniforms:_i([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:_i([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:_i([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:_i([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:_i([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:_i([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:_i([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:_i([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:_i([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:_i([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:_i([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:_i([J.common,J.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:_i([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};wa.physical={uniforms:_i([wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Ta={r:0,b:0,g:0},Ea=new Xt,Da=new G;Da.set(-1,0,0,0,1,0,0,0,1);function Oa(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ei(new mi(1,1,1),new wi({name:`BackgroundCubeMaterial`,uniforms:gi(wa.backgroundCube.uniforms),vertexShader:wa.backgroundCube.vertexShader,fragmentShader:wa.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ea.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Da),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Re,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ei(new hi(2,2),new wi({name:`BackgroundMaterial`,uniforms:gi(wa.background.uniforms),vertexShader:wa.background.vertexShader,fragmentShader:wa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Re,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ta,bi(e)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ka(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Aa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ja(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ma(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Pr,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Na=4,Pa=6,Fa=20,Ia=256,La=new ta,Ra=new K,za=null,Ba=0,Va=0,Ha=!1,Ua=new W,Wa=new W,Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ua}=i;za=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ba,Va),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ie,depthBuffer:!1},r=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ka(r)),this._blurMaterial=Xa(r,e,t),this._ggxMaterial=Ya(r,e,t)}return r}_compileMaterial(e){let t=new ei(new Dr,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r,i){let a=new ea(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ra),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new mi,new Hr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ra),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ja(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ja(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Na?n-d+Na:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ja(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,La),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ja(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,La)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ja(t,3*l*(r>this._lodMax-Na?r-this._lodMax+Na:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,La)}};function Ka(e){let t=[],n=[],r=e,i=e-Na+1+Pa;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Wa.set(1,r,n):e===1?Wa.set(-n,1,-r):e===2?Wa.set(-n,r,1):e===3?Wa.set(-1,r,-n):e===4?Wa.set(-n,-1,r):Wa.set(n,r,-1),Wa.toArray(l,(e*6+t)*3)}}let u=new Dr;u.setAttribute(`position`,new fr(c,3)),u.setAttribute(`outputDirection`,new fr(l,3)),n.push(new ei(u,null)),r>Na&&r--}return{lodMeshes:n,sizeLods:t}}function qa(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ja(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ya(e,t,n){return new wi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ia,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xa(e,t,n){return new wi({name:`SphericalGaussianBlur`,defines:{SAMPLES:Fa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Za(){return new wi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qa(){return new wi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eo=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new li(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mi(5,5,5),i=new wi({name:`CubemapFromEquirect`,uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ei(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new aa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function to(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new eo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ga(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ga(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function no(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ro(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function io(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ao(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function oo(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Et(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function so(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var co={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function lo(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Dr;l.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let u=new Ti({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ei(l,u),f=new ta(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Pt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=co[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var uo=new Wt,fo=new di(1,1),po=new Jt,mo=new Yt,ho=new li,go=[],_o=[],vo=new Float32Array(16),yo=new Float32Array(9),bo=new Float32Array(4);function xo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=go[i];if(a===void 0&&(a=new Float32Array(i),go[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function So(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Co(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wo(e,t){let n=_o[t];n===void 0&&(n=new Int32Array(t),_o[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function To(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2fv(this.addr,t),Co(n,t)}}function Do(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(So(n,t))return;e.uniform3fv(this.addr,t),Co(n,t)}}function Oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4fv(this.addr,t),Co(n,t)}}function ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;bo.set(r),e.uniformMatrix2fv(this.addr,!1,bo),Co(n,r)}}function Ao(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;yo.set(r),e.uniformMatrix3fv(this.addr,!1,yo),Co(n,r)}}function jo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;vo.set(r),e.uniformMatrix4fv(this.addr,!1,vo),Co(n,r)}}function Mo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function No(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2iv(this.addr,t),Co(n,t)}}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(So(n,t))return;e.uniform3iv(this.addr,t),Co(n,t)}}function Fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4iv(this.addr,t),Co(n,t)}}function Io(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2uiv(this.addr,t),Co(n,t)}}function Ro(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(So(n,t))return;e.uniform3uiv(this.addr,t),Co(n,t)}}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4uiv(this.addr,t),Co(n,t)}}function Bo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fo.compareFunction=n.isReversedDepthBuffer()?518:515,a=fo):a=uo,n.setTexture2D(t||a,i)}function Vo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mo,i)}function Ho(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ho,i)}function Uo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||po,i)}function Wo(e){switch(e){case 5126:return To;case 35664:return Eo;case 35665:return Do;case 35666:return Oo;case 35674:return ko;case 35675:return Ao;case 35676:return jo;case 5124:case 35670:return Mo;case 35667:case 35671:return No;case 35668:case 35672:return Po;case 35669:case 35673:return Fo;case 5125:return Io;case 36294:return Lo;case 36295:return Ro;case 36296:return zo;case 35678:case 36198:case 36298:case 36306:case 35682:return Bo;case 35679:case 36299:case 36307:return Vo;case 35680:case 36300:case 36308:case 36293:return Ho;case 36289:case 36303:case 36311:case 36292:return Uo}}function Go(e,t){e.uniform1fv(this.addr,t)}function Ko(e,t){let n=xo(t,this.size,2);e.uniform2fv(this.addr,n)}function qo(e,t){let n=xo(t,this.size,3);e.uniform3fv(this.addr,n)}function Jo(e,t){let n=xo(t,this.size,4);e.uniform4fv(this.addr,n)}function Yo(e,t){let n=xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xo(e,t){let n=xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zo(e,t){let n=xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qo(e,t){e.uniform1iv(this.addr,t)}function $o(e,t){e.uniform2iv(this.addr,t)}function es(e,t){e.uniform3iv(this.addr,t)}function ts(e,t){e.uniform4iv(this.addr,t)}function ns(e,t){e.uniform1uiv(this.addr,t)}function rs(e,t){e.uniform2uiv(this.addr,t)}function is(e,t){e.uniform3uiv(this.addr,t)}function as(e,t){e.uniform4uiv(this.addr,t)}function os(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fo:uo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ss(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mo,a[e])}function cs(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ho,a[e])}function ls(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||po,a[e])}function us(e){switch(e){case 5126:return Go;case 35664:return Ko;case 35665:return qo;case 35666:return Jo;case 35674:return Yo;case 35675:return Xo;case 35676:return Zo;case 5124:case 35670:return Qo;case 35667:case 35671:return $o;case 35668:case 35672:return es;case 35669:case 35673:return ts;case 5125:return ns;case 36294:return rs;case 36295:return is;case 36296:return as;case 35678:case 36198:case 36298:case 36306:case 35682:return os;case 35679:case 36299:case 36307:return ss;case 35680:case 36300:case 36308:case 36293:return cs;case 36289:case 36303:case 36311:case 36292:return ls}}var ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wo(t.type)}},fs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=us(t.type)}},ps=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ms=/(\w+)(\])?(\[|\.)?/g;function hs(e,t){e.seq.push(t),e.map[t.id]=t}function gs(e,t,n){let r=e.name,i=r.length;for(ms.lastIndex=0;;){let a=ms.exec(r),o=ms.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){hs(n,l===void 0?new ds(s,e,t):new fs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ps(s),hs(n,e)),n=e}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);gs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function vs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ys=37297,bs=0;function xs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ss=new G;function Cs(e){Pt._getMatrix(Ss,Pt.workingColorSpace,e);let t=`mat3( ${Ss.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case Le:return[t,`LinearTransferOETF`];case Re:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ws(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+xs(e.getShaderSource(t),r)}return i}function Ts(e,t){let n=Cs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Es={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ds(e,t){let n=Es[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Os=new W;function ks(){return Pt.getLuminanceCoefficients(Os),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Os.x.toFixed(4)}, ${Os.y.toFixed(4)}, ${Os.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function As(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ns).join(`
`)}function js(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ms(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ns(e){return e!==``}function Ps(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Is=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ls(e){return e.replace(Is,zs)}var Rs=new Map;function zs(e,t){let n=q[t];if(n===void 0){let e=Rs.get(t);if(e!==void 0)n=q[e],V(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ls(n)}var Bs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vs(e){return e.replace(Bs,Hs)}function Hs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Us(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ws={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Gs(e){return Ws[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ks={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function qs(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ks[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Js={302:`ENVMAP_MODE_REFRACTION`};function Ys(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Js[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Xs={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Zs(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Xs[e.combine]||`ENVMAP_BLENDING_NONE`}function Qs(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function $s(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Gs(n),l=qs(n),u=Ys(n),d=Zs(n),f=Qs(n),p=As(n),m=js(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ns).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ns).join(`
`),_.length>0&&(_+=`
`)):(g=[Us(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ns).join(`
`),_=[Us(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:Ds(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,Ts(`linearToOutputTexel`,n.outputColorSpace),ks(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ns).join(`
`)),o=Ls(o),o=Ps(o,n),o=Fs(o,n),s=Ls(s),s=Ps(s,n),s=Fs(s,n),o=Vs(o),s=Vs(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=vs(i,i.VERTEX_SHADER,y),S=vs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ws(i,x,`vertex`),n=ws(i,S,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new _s(i,h),T=Ms(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ys)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ec=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nc(e),t.set(e,n)),n}},nc=class{constructor(e){this.id=ec++,this.code=e,this.usedTimes=0}};function rc(e){return e===1030||e===37490||e===36285}function ic(e,t,n,r,i,a){let o=new cn,s=new tc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wa[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!x,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=ce&&!!i.anisotropyMap,ge=le&&!!i.clearcoatMap,_e=le&&!!i.clearcoatNormalMap,ve=le&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,be=fe&&!!i.iridescenceThicknessMap,xe=pe&&!!i.sheenColorMap,Se=pe&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=me&&!!i.transmissionMap,De=me&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,R=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&x.mapping,envMapCubeUVHeight:S,aoMap:I,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&rc(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:he,clearcoat:le,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:me,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:R,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:I&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=wa[t];n=xi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new $s(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ac(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function oc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||oc),r.length>1&&r.sort(t||sc),i.length>1&&i.sort(t||sc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function lc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new cc,e.set(t,[i])):n>=r.length?(i=new cc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function uc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var fc=0;function pc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function mc(e){let t=new uc,n=dc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(pc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=fc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function hc(e){let t=new mc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function gc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new hc(e),t.set(n,[a])):r>=i.length?(a=new hc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var _c=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yc=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],bc=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],xc=new Xt,Sc=new W,Cc=new W;function wc(e,t,n){let i=new ci,a=new Et,s=new Et,c=new Gt,l=new Ei,u=new Di,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:_c,fragmentShader:vc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ei(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){V(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new di(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new eo(a.x),p.map.depthTexture=new fi(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new di(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Sc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Sc),Cc.copy(e.position),Cc.add(yc[t]),e.up.copy(bc[t]),e.lookAt(Cc),e.updateMatrixWorld(),n.makeTranslation(-Sc.x,-Sc.y,-Sc.z),xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new qt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Tc(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,F={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Gt().fromArray(I),ie=new Gt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(te&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function Se(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function z(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Pe(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function B(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,F={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:R,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:B,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:z,viewport:Pe,reset:Ie}}function Ec(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Et,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ge(`canvas`)}function T(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Le:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),N(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t)}function N(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function P(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function F(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let I=0;function ne(){I=0}function re(){return I}function ie(e){I=e}function ae(){let e=I;return e>=p.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),I+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(e,t){let n=f.get(e);if(e.isVideoTexture&&R(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?_e(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ce(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?_e(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?ve(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ue={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},de={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},fe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function pe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ue[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ue[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ue[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,de[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,de[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,fe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function me(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=oe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&P(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=he(r.start,t.width,4),c=he(n.start,t.width,4);r.start<=o+1&&s===c&&he(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function _e(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=me(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=je(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);pe(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ge(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ba(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ba(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Me(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Me(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ve(e,t,n){if(t.image.length!==6)return;let r=me(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=je(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);pe(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Me(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ae(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,ke(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function be(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ae(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ke(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ke(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Ae(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ke(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ke(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function xe(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),pe(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else L(t.depthTexture,0);let a=i.__webglTexture,o=ke(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ae(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ae(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)xe(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?xe(t.__webglFramebuffer[0],e,0):xe(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),be(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),be(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){let r=f.get(e);t!==void 0&&ye(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Se(e)}function we(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ae(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=ke(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),be(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),pe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ye(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ye(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),pe(o,r),ye(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),pe(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ye(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ye(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Se(e)}function Te(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Ee=[],De=[];function Oe(e){if(e.samples>0){if(Ae(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ee.length=0,De.length=0,Ee.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Ee.push(a),De.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,De)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ee))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function ke(e){return Math.min(p.maxSamples,e.samples)}function Ae(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function R(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=L,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Dc(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Oc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wi({vertexShader:Oc,fragmentShader:kc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Ac,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new Et,k=null,A=null,ee=new ea;ee.viewport=new Gt;let j=new ea;j.viewport=new Gt;let te=[ee,j],M=new oa,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function F(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new di(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let re=new W,ie=new W;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),L(e,M,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new ea,o.layers.enable(n),o.viewport=new Gt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new pi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let le=new Sa;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Mc=new Xt,Nc=new G;Nc.set(-1,0,0,0,1,0,0,0,1);function Pc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,bi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Mc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Nc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Fc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return H(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ic=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Lc=null;function Rc(){return Lc===null&&(Lc=new ri(Ic,16,16,k,g),Lc.name=`DFG_LUT`,Lc.minFilter=o,Lc.magFilter=o,Lc.wrapS=t,Lc.wrapT=t,Lc.generateMipmaps=!1,Lc.needsUpdate=!0),Lc}var zc=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new W,k=null,j=null,te=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,I=null,ne=null,re=null,ie=null;this._outputColorSpace=Fe;let ae=0,oe=0,L=null,se=-1,ce=null,le=new Gt,ue=new Gt,de=null,fe=new K(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Gt(0,0,me,he),be=new Gt(0,0,me,he),xe=!1,Se=new ci,Ce=!1,we=!1,Te=new Xt,Ee=new W,De=new Gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return L===null?ge:1}let R=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,z,Pe,B,Ie,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),R===null){let t=`webgl2`;if(R=je(t,e),R===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),H(`WebGLRenderer: `+e.message),e}function it(){Me=new no(R),Me.init(),tt=new Dc(R,Me),Ne=new ja(R,Me,e,tt),z=new Tc(R,Me),Ne.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),ne=R.createFramebuffer(),re=R.createFramebuffer(),ie=R.createFramebuffer(),Pe=new ao(R),B=new ac,Ie=new Ec(R,Me,z,B,Ne,tt,Pe),Le=new to(P),Re=new Ca(R),nt=new ka(R,Re),ze=new ro(R,Re,Pe,nt),Be=new so(R,ze,Re,nt,Pe),Qe=new oo(R,Ne,Ie),qe=new Ma(B),Ve=new ic(P,Le,Me,Ne,nt,qe),Ue=new Pc(P,B),We=new lc,Ge=new gc(Me),Xe=new Oa(P,Le,z,Be,x,s),Ye=new wc(P,Be,Ne),rt=new Fc(R,Pe,Ne,z),$e=new Aa(R,Me,Pe),et=new io(R,Me,Pe),Pe.programs=Ve.programs,P.capabilities=Ne,P.extensions=Me,P.properties=B,P.renderLists=We,P.shadowMap=Ye,P.state=z,P.info=Pe}S!==1009&&(N=new lo(S,t.width,t.height,o,r,i));let U=new jc(P,R);this.xr=U,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){U.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(le.copy(ye).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(ue.copy(be).multiplyScalar(ge).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),We.dispose(),Ge.dispose(),B.dispose(),Le.dispose(),Be.dispose(),nt.dispose(),rt.dispose(),Ve.dispose(),U.dispose(),U.removeEventListener(`sessionstart`,mt),U.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),F=!0}function ot(){Je(`WebGLRenderer: Context Restored.`),F=!1;let e=Pe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;it(),Pe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),B.remove(e)}function ut(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),Ce===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),j=Ge.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),I!==null&&I.updateLights(j.state.lightsArray),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),Ce===!0&&qe.setGlobalState(this.clippingPlanes,t),I!==null&&Ye.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),j=M.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Sa;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,U.setAnimationLoop(e),e===null?gt.stop():gt.start()},U.addEventListener(`sessionstart`,mt),U.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(F===!0)return;I!==null&&I.renderStart(e,t);let n=U.enabled===!0&&U.isPresenting===!0,r=N!==null&&(L===null||n)&&N.begin(P,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(U.cameraAutoUpdate===!0&&U.updateCamera(t),t=U.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,L),j=Ge.get(e,M.length),j.init(t),j.state.textureUnits=Ie.getTextureUnits(),M.push(j),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Te,He,t.reversedDepth),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),k=We.get(e,te.length),k.init(),te.push(k),U.enabled===!0&&U.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,P.sortObjects)}_t(e,t,0,P.sortObjects),k.finish(),I!==null&&I.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(_e,ve),ke=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,ke&&Xe.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&qe.beginShadows();let i=j.state.shadowsArray;if(Ye.render(i,e,t),Ce===!0&&qe.endShadows(),(r&&N.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&Xe.render(e),vt(k,e,t)}L!==null&&oe===0&&(Ie.updateMultisampleRenderTarget(L),Ie.updateRenderTargetMipmap(L)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),nt.resetDefaultState(),se=-1,ce=null,M.pop(),M.length>0?(j=M[M.length-1],Ie.setTextureUnits(j.state.textureUnits),Ce===!0&&qe.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,I!==null&&I.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Se)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Be.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Se))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ce===!0&&qe.setGlobalState(P.clippingPlanes,n),r&&z.viewport(le.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(fe),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),ke&&Xe.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ce===!0&&qe.setGlobalState(P.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),P.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Oe);let r=B.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ve.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,P),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),wt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=_s.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=j.state.lights;if(Ce===!0&&(we===!0||e!==ce)){let t=e===ce&&r.id===se;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(z.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=Tt(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ce!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(R,`projectionMatrix`,e.projectionMatrix),T.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(R,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&T.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(R,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&T.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&T.setValue(R,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&T.setValue(R,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){T.setOptional(R,i,`bindMatrix`),T.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(R,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(T.setOptional(R,i,`batchingTexture`),T.setValue(R,`batchingTexture`,i._matricesTexture,Ie),T.setOptional(R,i,`batchingIdTexture`),T.setValue(R,`batchingIdTexture`,i._indirectTexture,Ie),T.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(R,`batchingColorTexture`,i._colorsTexture,Ie));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Rc()),C){if(T.setValue(R,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Dt(E,w),a&&r.fog===!0&&Ue.refreshFogUniforms(E,a),Ue.refreshMaterialUniforms(E,r,ge,he,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}_s.upload(R,Ct(v),E,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(_s.upload(R,Ct(v),E,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(R,`center`,i.center),T.setValue(R,`modelViewMatrix`,i.modelViewMatrix),T.setValue(R,`normalMatrix`,i.normalMatrix),T.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(le),z.scissor(ue),z.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=ne),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(le),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}se=-1};function kt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ze(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,re),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,z.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}},Bc=[`S`,`SE`,`E`,`NE`,`N`,`NW`,`W`,`SW`],Vc=.5;function Hc(e,t,n=-1){let r=Math.PI/4,i=(e-t)%(Math.PI*2);i<0&&(i+=Math.PI*2);let a=Math.round(i/r)%8;if(n<0||a===n)return a;let o=n*r,s=Math.abs(i-o);return s=Math.min(s,Math.PI*2-s),s>r/2+10*Math.PI/180?a:n}var Y=32,X={Asphalt:0,AsphaltLine:1,Pavement:2,Curb:3,Brick:4,Planks:5,Cinder:6,Concrete:7,Roof:8,Dirt:9,Metal:10,Shutter:11,WindowDark:12,Grass:13,WindowLit:14,Lamp:15,Steel:16,Crate:17,Paint:18,Glass:19,Tire:20,Rust:21,Canvas:22,Sandbag:23,Drum:24,Corrugated:25,Fire:26,Chrome:27,Slab:28,ParkLine:29,Gravel:30,Leaves:31};function Uc(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wc=e=>e<0?0:e>255?255:e|0,Gc=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Kc=(e,t)=>[e[0]+t,e[1]+t,e[2]+t],qc=class{rand;px=new Uint8Array(Y*Y*4);constructor(e){this.rand=e}set(e,t,n,r=!1){if(e<0||t<0||e>=Y||t>=Y)return;let i=(t*Y+e)*4;this.px[i]=Wc(n[0]),this.px[i+1]=Wc(n[1]),this.px[i+2]=Wc(n[2]),this.px[i+3]=r?0:255}get(e,t){let n=(t*Y+e)*4;return[this.px[n],this.px[n+1],this.px[n+2]]}fill(e,t=0){for(let n=0;n<Y;n++)for(let r=0;r<Y;r++)this.set(r,n,Kc(e,(this.rand()-.5)*2*t))}speckle(e,t){for(let n=0;n<Y;n++)for(let r=0;r<Y;r++)this.rand()<e&&this.set(r,n,Kc(this.get(r,n),this.rand()<.5?-t:t))}};function Jc(e,t,n,r,i,a,o=!0){for(let s=0;s<Y/n;s++){let c=o&&s%2?t/2:0;for(let o=-1;o<Y/t+1;o++){let l=Gc(r,1+(e.rand()-.5)*a);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let u=o*t+c+a,d=s*n+r;u<0||u>=Y||(r===n-1||a===t-1?e.set(u,d,i):e.set(u,d,Kc(r===0?Kc(l,10):l,(e.rand()-.5)*10)))}}}}var Yc={[X.Asphalt]:e=>{e.fill([44,46,52],3),e.speckle(.18,8),e.speckle(.03,18)},[X.AsphaltLine]:e=>{Yc[X.Asphalt](e);for(let t=14;t<18;t++)for(let n=3;n<29;n++)e.rand()>.12&&e.set(n,t,Kc([186,152,54],(e.rand()-.5)*20))},[X.Pavement]:e=>{for(let t=0;t<2;t++)for(let n=0;n<2;n++){let r=Kc([108,108,104],(e.rand()-.5)*14);for(let i=0;i<16;i++)for(let a=0;a<16;a++){let o=n*16+a,s=t*16+i;a===15||i===15?e.set(o,s,[74,74,72]):a===0||i===0?e.set(o,s,Kc(r,12)):e.set(o,s,Kc(r,(e.rand()-.5)*12))}}e.speckle(.04,10)},[X.Curb]:e=>{e.fill([128,128,122],4),e.speckle(.1,8);for(let t=0;t<Y;t++)e.set(t,0,[156,156,150]),e.set(t,1,[146,146,140]),e.set(t,30,[86,86,82]),e.set(t,31,[70,70,68])},[X.Brick]:e=>{Jc(e,16,8,[124,58,46],[72,64,60],.25),e.speckle(.05,12)},[X.Planks]:e=>{for(let t=0;t<4;t++){let n=Gc([138,98,60],1+(e.rand()-.5)*.22),r=6+Math.floor(e.rand()*20);for(let i=0;i<Y;i++)for(let a=0;a<8;a++){let o=t*8+a;if(a===7)e.set(o,i,[40,28,18]);else{let s=Math.sin(i*.5+a*2.1+t*5)>.82?-16:0,c=a===0?12:a===6?-10:0;e.set(o,i,Kc(n,s+c+(e.rand()-.5)*8-(i===r&&a>2&&a<5?30:0)))}}e.set(t*8+3,4,[168,168,160]),e.set(t*8+3,27,[168,168,160])}},[X.Cinder]:e=>{Jc(e,16,8,[98,100,102],[66,68,72],.12),e.speckle(.12,10)},[X.Concrete]:e=>{e.fill([112,112,110],4),e.speckle(.15,8),e.speckle(.02,20)},[X.Roof]:e=>{e.fill([50,48,54],3),e.speckle(.25,10);for(let t=0;t<Y;t++)e.set(t,31,[40,38,44])},[X.Dirt]:e=>{e.fill([86,68,50],6),e.speckle(.2,10);for(let t=0;t<10;t++){let t=Math.floor(e.rand()*31),n=Math.floor(e.rand()*31);e.set(t,n,[112,102,90]),e.set(t+1,n,[96,88,78]),e.set(t,n+1,[64,50,36])}},[X.Metal]:e=>{e.fill([70,80,92],3);for(let t=0;t<Y;t++)e.set(0,t,[44,50,58]),e.set(31,t,[44,50,58]);for(let t=0;t<Y;t++)e.set(t,0,[104,114,126]),e.set(t,15,[44,50,58]),e.set(t,16,[96,106,118]);for(let t=0;t<26;t++){let t=Math.floor(e.rand()*31),n=Math.floor(e.rand()*31);e.set(t,n,[118,70,38]),e.rand()<.5&&e.set(t+1,n,[92,54,30])}},[X.Shutter]:e=>{for(let t=0;t<Y;t++)for(let n=0;n<Y;n++){let r=t%4,i=r===0?[112,116,122]:r===3?[64,68,74]:[90,94,100];e.set(n,t,Kc(i,(e.rand()-.5)*8-(t>24?10:0)))}},[X.WindowDark]:e=>Xc(e,!1),[X.Grass]:e=>{e.fill([38,58,34],5),e.speckle(.25,10);for(let t=0;t<40;t++){let t=Math.floor(e.rand()*32),n=Math.floor(e.rand()*31);e.set(t,n,[62,88,46]),e.set(t,n+1,[48,72,40])}},[X.WindowLit]:e=>Xc(e,!0),[X.Lamp]:e=>{for(let t=0;t<Y;t++)for(let n=0;n<Y;n++)n<2||t<2||n>29||t>29?e.set(n,t,[70,72,76]):e.set(n,t,Kc([255,236,190],-Math.abs(n-15.5)*1.5-Math.abs(t-15.5)*1.5),!0)},[X.Steel]:e=>{e.fill([62,66,72],2);for(let t=0;t<Y;t++)for(let n=0;n<Y;n++)n%8==1&&e.set(n,t,[96,100,108]);e.speckle(.06,10)},[X.Crate]:e=>{Yc[X.Planks](e);for(let t=0;t<Y;t++){for(let n of[0,1,30,31])e.set(t,n,[96,66,38]),e.set(n,t,[96,66,38]);e.set(t,t,[104,72,42]),e.set(t,Math.min(31,t+1),[80,54,32])}},[X.Paint]:e=>{e.fill([206,206,204],2);for(let t=0;t<Y;t++)e.set(31,t,[150,150,150]),e.set(0,t,[222,222,220]);for(let t=22;t<Y;t++)for(let n=0;n<Y;n++)e.rand()<(t-20)/22&&e.set(n,t,Kc(e.get(n,t),-18-e.rand()*14));e.speckle(.02,14)},[X.Glass]:e=>{e.fill([34,44,58],2);for(let t=0;t<Y;t++)for(let n=0;n<Y;n++){let r=n+t;(r>10&&r<15||r>18&&r<20)&&e.set(n,t,[86,104,124])}for(let t=0;t<Y;t++)e.set(t,0,[70,84,100])},[X.Tire]:e=>{e.fill([30,30,32],2);for(let t=0;t<Y;t++)if(t%4==0)for(let n=0;n<Y;n++)e.set(n,t,[46,46,48]);e.speckle(.05,8)},[X.Rust]:e=>{e.fill([112,64,38],6),e.speckle(.3,14);for(let t=0;t<30;t++){let t=Math.floor(e.rand()*31),n=Math.floor(e.rand()*31);e.set(t,n,[70,38,24]),e.set(t+1,n,[146,88,50])}},[X.Canvas]:e=>{for(let t=0;t<Y;t++)for(let n=0;n<Y;n++){let r=(n+t)%2?4:-4;e.set(n,t,Kc([196,194,186],r+(e.rand()-.5)*6))}for(let t=0;t<Y;t++)e.set(15,t,[150,148,140]),e.set(16,t,[214,212,204])},[X.Sandbag]:e=>{for(let t=0;t<4;t++){let n=t%2?8:0;for(let r=-1;r<3;r++){let i=Kc([152,132,96],(e.rand()-.5)*18);for(let a=0;a<8;a++)for(let o=0;o<16;o++){let s=r*16+n+o,c=t*8+a;s<0||s>=Y||((o===0||o===15)&&(a===0||a===7)?e.set(s,c,[74,64,48]):a===7||o===15?e.set(s,c,[96,84,62]):e.set(s,c,Kc(i,(a===1?14:a>5?-14:0)+(e.rand()-.5)*10)))}}}},[X.Drum]:e=>{e.fill([196,196,194],3);for(let t=0;t<Y;t++)for(let[n,r]of[[3,30],[4,-30],[15,30],[16,-30],[27,30],[28,-30]])e.set(t,n,Kc(e.get(t,n),r));for(let t=0;t<16;t++)e.set(Math.floor(e.rand()*32),Math.floor(e.rand()*32),[120,74,44])},[X.Corrugated]:e=>{for(let t=0;t<Y;t++)for(let n=0;n<Y;n++){let r=n%4,i=r===0?[214,214,216]:r===1?[186,186,190]:r===2?[140,140,146]:[170,170,174];e.set(n,t,Kc(i,(e.rand()-.5)*6))}for(let t=0;t<40;t++){let t=Math.floor(e.rand()*32),n=18+Math.floor(e.rand()*14);e.set(t,n,[128,76,44])}},[X.Fire]:e=>{for(let t=0;t<Y;t++)for(let n=0;n<Y;n++){let r=10+9*Math.sin(n*.7)*Math.sin(n*.23+1)+e.rand()*5,i=Y-t;if(i>r+8)e.set(n,t,Kc([40,30,26],(e.rand()-.5)*8));else{let a=Math.min(1,i/(r+8)),o=a<.35?[255,236,150]:a<.7?[255,168,52]:[214,72,28];e.set(n,t,Kc(o,(e.rand()-.5)*16),!0)}}},[X.Chrome]:e=>{e.fill([176,182,188],3);for(let t=0;t<Y;t++)e.set(4,t,[230,234,238]),e.set(5,t,[214,218,224]);for(let t=0;t<Y;t++)e.set(t,31,[120,124,130])},[X.Slab]:e=>{e.fill([142,140,134],3),e.speckle(.1,6),e.speckle(.015,16);for(let t=0;t<Y;t++)e.set(t,31,[124,122,118]),e.set(31,t,[124,122,118])},[X.ParkLine]:e=>{Yc[X.Asphalt](e);for(let t=0;t<Y;t++)for(let n=0;n<3;n++)e.rand()>.1&&e.set(n,t,Kc([200,200,192],(e.rand()-.5)*20))},[X.Gravel]:e=>{e.fill([102,96,88],6);for(let t=0;t<140;t++){let t=Math.floor(e.rand()*31),n=Math.floor(e.rand()*31),r=Kc([126,120,110],(e.rand()-.5)*30);e.set(t,n,r),e.set(t+1,n,Kc(r,-16)),e.set(t,n+1,Kc(r,-28))}},[X.Leaves]:e=>{e.fill([40,70,38],6);for(let t=0;t<26;t++){let t=e.rand()*32,n=e.rand()*32,r=2+e.rand()*3;for(let i=Math.floor(n-r);i<=n+r;i++)for(let a=Math.floor(t-r);a<=t+r;a++){if((a-t)**2+(i-n)**2>r*r)continue;let o=a-t+(i-n)<-1?26:8;e.set((a%32+32)%32,(i%32+32)%32,Kc([56,92,46],o+(e.rand()-.5)*10))}}for(let t=0;t<18;t++)e.set(Math.floor(e.rand()*32),Math.floor(e.rand()*32),[24,40,24])}};function Xc(e,t){Jc(e,16,8,[124,58,46],[72,64,60],.25);for(let n=6;n<26;n++)for(let r=6;r<26;r++)if(r===6||r===25||n===6||r===15||r===16||n===15)e.set(r,n,[58,58,62]);else if(t){let t=r<10||r>21&&n>9;e.set(r,n,t?[176,112,52]:Kc([236,186,96],(n-6)*-1.5+(e.rand()-.5)*6),!0)}else{let t=r-n>-4&&r-n<0;e.set(r,n,t?[44,54,74]:[22,28,40])}for(let t=4;t<28;t++)e.set(t,26,[150,148,140]),e.set(t,27,[104,100,96])}function Zc(e=1234){let t=8*Y,n=4*Y,r=new Uint8Array(t*n*4),i=Object.values(X);for(let n of i){let i=new qc(Uc(e+n*7919));Yc[n](i);let a=n%8*Y,o=Math.floor(n/8)*Y;for(let e=0;e<Y;e++)r.set(i.px.subarray(e*Y*4,(e+1)*Y*4),((o+e)*t+a)*4)}return r}function Qc(e){let t=new ri(Zc(e),8*Y,4*Y);return $c(t),t.needsUpdate=!0,t}function $c(e){return e.magFilter=r,e.minFilter=r,e.generateMipmaps=!1,e.flipY=!1,e.colorSpace=``,e.wrapS=e.wrapT=t,e}var Z={Air:0,Brick:1,Cinder:2,Planks:3,WindowDark:4,WindowLit:5,Shutter:6,Metal:7,Concrete:8,Crate:9,Sheet:10},el=[];el[Z.Air]={top:0,side:0,bottom:0},el[Z.Brick]={top:X.Roof,side:X.Brick,bottom:X.Brick},el[Z.Cinder]={top:X.Concrete,side:X.Cinder,bottom:X.Cinder},el[Z.Planks]={top:X.Planks,side:X.Planks,bottom:X.Planks},el[Z.WindowDark]={top:X.Roof,side:X.WindowDark,bottom:X.Brick},el[Z.WindowLit]={top:X.Roof,side:X.WindowLit,bottom:X.Brick},el[Z.Shutter]={top:X.Roof,side:X.Shutter,bottom:X.Brick},el[Z.Metal]={top:X.Metal,side:X.Metal,bottom:X.Metal},el[Z.Concrete]={top:X.Roof,side:X.Concrete,bottom:X.Concrete},el[Z.Crate]={top:X.Crate,side:X.Crate,bottom:X.Crate},el[Z.Sheet]={top:X.Rust,side:X.Corrugated,bottom:X.Corrugated};function tl(e,t,n){return t>=e.x0&&t<e.x1&&n>=e.z0&&n<e.z1}function Q(e,t,n,r,i,a,o,s=o,c){return{min:[e,t,n],max:[r,i,a],side:o,top:s,tint:c}}function nl(e,t,n,r){let{L:i,W:a}=e,o=(e,o)=>r===0?[t+e,n+o]:r===2?[t+i-e,n+a-o]:r===1?[t+a-o,n+e]:[t+o,n+i-e],s=e.boxes.map(e=>{let[t,n]=o(e.min[0],e.min[2]),[r,i]=o(e.max[0],e.max[2]);return{...e,min:[Math.min(t,r),e.min[1],Math.min(n,i)],max:[Math.max(t,r),e.max[1],Math.max(n,i)]}}),c=r===0||r===2,l={x0:t,z0:n,x1:t+(c?i:a),z1:n+(c?a:i)},u=[],d=[];for(let t of e.lights??[]){let[e,n]=o(t.lx,t.lz);(t.fire?d:u).push({...t.light,x:e,z:n})}return{boxes:s,footprint:l,lights:u,fires:d}}var $={red:[.72,.2,.18],blue:[.26,.38,.62],white:[.92,.92,.9],silver:[.66,.68,.7],black:[.2,.21,.23],green:[.3,.46,.32],yellow:[.9,.72,.24],teal:[.24,.52,.54],brown:[.48,.34,.24],beige:[.78,.7,.56],olive:[.42,.44,.28],orange:[.86,.46,.18]},rl=[.55,.5,.48],il=[.9,.16,.12],al=[1.05,1,.82],ol=[.78,.62,.42];function sl(e){let t=e>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function cl(e,t,n=1){let r=sl(n*7919+e.length),i=e===`van`||e===`pickup`,a=i?4.8:e===`hatch`?3.7:4.2,o=i?2:1.9,s=e===`wreck`,c=s?rl:t,l=s?X.Rust:X.Paint,u=[],d=s||r()<.25,f=d?.48:.62,p=d?.08:0,m=i?[.7,a-1.25]:[.55,a-1.25];for(let e of m)for(let t of[0,1]){let n=t?o-.3:-.02;if(u.push(Q(e,0,n,e+.7,f,n+.32,X.Tire)),!s){let n=t?o+.02:-.04;u.push(Q(e+.22,f*.32,n,e+.48,f*.72,n+.02,X.Chrome))}}let h=.28-p;if(e===`van`){let e=1.95-p;u.push(Q(.05,h,.08,a-.75,e,o-.08,l,l,c)),u.push(Q(a-.75,h,.1,a-.05,1-p,o-.1,l,l,c)),u.push(Q(a-.95,1-p,.18,a-.73,e-.18,o-.18,X.Glass)),u.push(Q(a-1.6,1.05-p,.06,a-.85,e-.25,o-.06,X.Glass)),u.push(Q(.6,.75-p,.05,a-1.8,.82-p,o-.05,l,l,ll(c,.75))),u.push(Q(-.04,.95-p,.25,.06,e-.2,o/2-.03,l,l,ll(c,.85))),u.push(Q(-.04,.95-p,o/2+.03,.06,e-.2,o-.25,l,l,ll(c,.85))),r()<.6&&u.push(Q(.4,e,.3,a-1.4,e+.08,o-.3,X.Steel))}else if(e===`pickup`){let e=2.15;u.push(Q(e,h,.08,a-.05,.98-p,o-.08,l,l,c)),ul(u,2.25,a-1.3,o,.98-p,1.62-p,c,l,r,s),u.push(Q(.05,h,.08,e,.6-p,o-.08,l,l,ll(c,.8))),u.push(Q(.05,.6-p,.08,e,1.02-p,.2,l,l,c)),u.push(Q(.05,.6-p,o-.2,e,1.02-p,o-.08,l,l,c)),u.push(Q(.05,.6-p,.2,.17,.98-p,o-.2,l,l,ll(c,.9))),r()<.5&&u.push(Q(.5,.6-p,.4,1.3,1.25-p,1.2,X.Crate)),r()<.5&&u.push(Q(1.4,.6-p,1,1.95,1.15-p,o-.3,X.Drum,X.Drum,$.blue))}else{let t=e===`hatch`;if(u.push(Q(.05,h,.1,a-.05,.8-p,o-.1,l,l,c)),u.push(Q(a-1.1,.8-p,.14,a-.08,.86-p,o-.14,l,l,ll(c,1.06))),t||u.push(Q(.08,.8-p,.14,.95,.9-p,o-.14,l,l,ll(c,1.04))),ul(u,t?.25:1.1,a-1.15,o,.8-p,1.36-p,c,l,r,s),e===`police`){u.push(Q(1.25,.34-p,.08,a-1.25,.78-p,o-.08,X.Paint,X.Paint,$.black));let e=1.44-p;u.push(Q(1.75,e,.45,2.4,e+.12,.95,X.Chrome,X.Chrome,[1.1,.25,.2])),u.push(Q(1.75,e,.95,2.4,e+.12,1.45,X.Chrome,X.Chrome,[.3,.45,1.2]))}}let g=.3-p;if(u.push(Q(a-.06,g,.12,a+.06,g+.18,o-.12,X.Steel)),u.push(Q(-.06,g,.12,.06,g+.18,o-.12,X.Steel)),!s){let t=(e===`van`||e===`pickup`?.66:.56)-p;u.push(Q(a-.04,t,.2,a+.02,t+.13,.55,X.Chrome,X.Chrome,al)),u.push(Q(a-.04,t,o-.55,a+.02,t+.13,o-.2,X.Chrome,X.Chrome,al)),u.push(Q(a-.04,g+.2,.62,a+.02,t+.1,o-.62,X.Steel)),u.push(Q(-.02,t,.16,.04,t+.14,.45,X.Paint,X.Paint,il)),u.push(Q(-.02,t,o-.45,.04,t+.14,o-.16,X.Paint,X.Paint,il))}let _=s?0:Math.floor(r()*3);for(let e=0;e<_;e++){let e=.4+r()*(a-1.4),t=r()<.5?.095:o-.1-.005;u.push(Q(e,.36-p+r()*.15,t-.006,e+.25+r()*.4,.62-p,t+.012,X.Rust))}if(!s&&r()<.3){let e=1.3+r()*1.2;u.push(Q(e,.45-p,o-.1,e+.5,.7-p,o-.08,X.Paint,X.Paint,[.42,.06,.06]))}return{boxes:u,L:a,W:o}}function ll(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function ul(e,t,n,r,i,a,o,s,c,l){let u=l?X.Tire:X.Glass,d=!l&&c()<.3,f=i+(a-i)*.55;e.push(Q(t+.25,i,.2,n-.25,a,r-.2,u,u,d?[1.5,1.5,1.5]:void 0)),e.push(Q(n-.25,i,.24,n+.1,f,r-.24,u)),e.push(Q(t-.1,i,.24,t+.25,f,r-.24,u)),e.push(Q(t+.3,a,.22,n-.3,a+.07,r-.22,s,s,o));let p=t=>e.push(Q(t-.05,i,.18,t+.05,a,r-.18,s,s,o));p(t+.28),p(n-.28),p((t+n)/2),l||(e.push(Q(n-.05,i+.05,.02,n+.08,i+.16,.18,s,s,o)),e.push(Q(n-.05,i+.05,r-.18,n+.08,i+.16,r-.02,s,s,o)))}function dl(e=1){let t=sl(e),n=t()<.5?[.32,.5,.36]:[.34,.42,.6];return{L:2,W:1.1,boxes:[Q(.08,.12,.08,1.92,1.1,1.02,X.Paint,X.Paint,n),Q(.02,1.1,.04,1.98,1.2,1.06,X.Paint,X.Paint,ll(n,.8)),Q(.2,0,.2,.36,.14,.36,X.Tire),Q(1.6400000000000001,0,.7400000000000001,1.8,.14,.9000000000000001,X.Tire),Q(0,.7,.3,.08,.8,.8,X.Steel),...t()<.6?[Q(.3,1.2,.2,.9,1.45,.75,X.Paint,X.Paint,[.2,.2,.22])]:[]]}}function fl(){return{L:1,W:1,boxes:[Q(.04,0,.04,.96,.9,.96,X.Crate)]}}function pl(e,t=!1){let n={L:.7,W:.7,boxes:[Q(.08,0,0,.62,.95,.7,X.Drum,X.Rust,e),Q(0,0,.08,.7,.95,.62,X.Drum,X.Rust,e)]};return t&&(n.boxes.push(Q(.14,.95,.14,.56,1.25,.56,X.Fire)),n.lights=[{lx:.35,lz:.35,fire:!0,light:{radius:6,r:.9,g:.48,b:.16,flicker:1}}]),n}function ml(e=3){let t=[];for(let n=0;n<e;n++){let e=n*.7;t.push(Q(e,0,0,e+.4,.06,.4,X.Paint,X.Paint,$.orange)),t.push(Q(e+.08,.06,.08,e+.32,.3,.32,X.Paint,X.Paint,$.orange)),t.push(Q(e+.11,.3,.11,e+.29,.42,.29,X.Paint,X.Paint,$.white)),t.push(Q(e+.14,.42,.14,e+.26,.58,.26,X.Paint,X.Paint,$.orange))}return{L:e*.7-.3,W:.4,boxes:t}}function hl(e=2.4){let t=[Q(.1,0,.1,.25,.9,.3,X.Steel),Q(e-.25,0,.1,e-.1,.9,.3,X.Steel)],n=Math.round(e/.4);for(let r=0;r<n;r++)t.push(Q(r*e/n,.6,.14,(r+1)*e/n,.85,.26,X.Paint,X.Paint,r%2?$.white:$.red));return{L:e,W:.4,boxes:t}}function gl(){return{L:1.8,W:.6,boxes:[Q(.1,0,.1,.2,.45,.5,X.Steel),Q(1.6,0,.1,1.7,.45,.5,X.Steel),Q(0,.42,.05,1.8,.5,.55,X.Planks),Q(0,.5,.48,1.8,.9,.56,X.Planks)]}}function _l(){let e=[.82,.18,.14];return{L:.4,W:.4,boxes:[Q(.08,0,.08,.32,.55,.32,X.Paint,X.Paint,e),Q(0,.3,.14,.4,.42,.26,X.Paint,X.Paint,e),Q(.12,.55,.12,.28,.65,.28,X.Chrome)]}}function vl(){let e=3.2,t=e=>[Q(e,.18,.2,e+.7,1.55,.8,X.Paint,X.Paint,$.white),Q(e-.02,1,.18,e+.72,1.3,.82,X.Paint,X.Paint,$.red),Q(e+.15,1.35,.17,e+.55,1.5,.19,X.Glass),Q(e+.15,1.35,.81,e+.55,1.5,.83,X.Glass),Q(e+.72,.5,.45,e+.8,.95,.55,X.Tire)];return{L:e,W:1,boxes:[Q(0,0,0,e,.18,1,X.Concrete),...t(.35),...t(2.1)]}}function yl(e=3){let t=[];for(let n=0;n<e;n++){let e=n*.35;t.push(Q(e,.3,.05,e+.9,.34,.55,X.Chrome)),t.push(Q(e,.34,.05,e+.06,.9,.55,X.Chrome)),t.push(Q(e+.84,.34,.05,e+.9,.95,.55,X.Chrome)),t.push(Q(e,.85,.05,e+.9,.9,.09,X.Chrome)),t.push(Q(e,.85,.51,e+.9,.9,.55,X.Chrome))}return{L:(e-1)*.35+.95,W:.6,boxes:t}}function bl(e=1){let t=sl(e),n=1.6+t()*.6,r=t()<.5?[.85,1,.85]:[1.05,1,.8],i=[Q(.85,0,.85,1.15,n+.4,1.15,X.Planks,X.Planks,[.6,.45,.35])],a=[[n,n+.8,.1],[n+.8,n+1.5,.3],[n+1.5,n+2,.6]];for(let[e,t,n]of a)i.push(Q(n,e,n,2-n,t,2-n,X.Leaves,X.Leaves,r));return{L:2,W:2,boxes:i}}function xl(e=2){let t=[];for(let n=0;n<e;n++){let e=n*.75,r=2+n*7%3;for(let n=0;n<r;n++){let r=n*.22;t.push(Q(e+.08,r,0,e+.62,r+.2,.7,X.Tire),Q(e,r,.08,e+.7,r+.2,.62,X.Tire))}t.push(Q(e+.22,r*.22-.02,.22,e+.48,r*.22,.48,X.Steel))}return{L:e*.75-.05,W:.7,boxes:t}}function Sl(e=[.82,.2,.18]){return{L:1,W:.8,boxes:[Q(0,0,0,1,1.85,.8,X.Paint,X.Paint,e),Q(.08,.7,.8,.62,1.7,.82,X.Glass),Q(.68,1.1,.8,.92,1.5,.82,X.Chrome),Q(.1,.2,.8,.9,.45,.82,X.Tire)]}}function Cl(){let e=[.92,.7,.2];return{L:2,W:2,boxes:[Q(.05,0,.15,1.95,.16,1.85,X.Steel),Q(.2,.16,.3,1.5,1.05,1.7,X.Paint,X.Paint,e),Q(.25,1.05,.35,1.45,1.15,1.65,X.Paint,X.Paint,ll(e,.82)),Q(1.5,.16,.4,1.85,.95,1.6,X.Steel),Q(1.84,.25,.5,1.87,.85,1.5,X.Corrugated,X.Corrugated,[.5,.5,.52]),Q(.35,1.15,.5,.48,1.75,.63,X.Steel),Q(.32,1.72,.47,.51,1.8,.66,X.Rust),Q(.6,.55,.26,1.1,.95,.3,X.Chrome),Q(.7,.75,.25,.8,.85,.26,X.Lamp),Q(0,.16,1.4,.35,.65,1.95,X.Drum,X.Rust,[.8,.2,.16]),Q(0,.16,.05,.3,.6,.4,X.Drum,X.Rust,[.8,.2,.16]),Q(1.55,.95,.6,1.8,1.25,1.4,X.Crate)]}}function wl(e){let t=2.4,n=[];for(let[r,i,a]of[[0,.4,0],[.4,.75,.22],[.75,1.05,.45],[1.05,1.3,.68]])n.push(Q(0,r,a,t,i,2-a,X.Canvas,X.Canvas,e));return n.push(Q(-.05,1.3,.92,2.4499999999999997,1.38,1.08,X.Steel)),n.push(Q(2.38,0,.62,2.4099999999999997,.95,1.38,X.Tire)),n.push(Q(t,0,.45,2.65,.04,1.55,X.Canvas,X.Canvas,ll(e,.8))),n.push(Q(2.6999999999999997,0,-.1,2.76,.3,-.04,X.Steel)),n.push(Q(2.6999999999999997,0,2.04,2.76,.3,2.1,X.Steel)),{L:t,W:2,boxes:n}}function Tl(e,t=2){let n=[];for(let r=0;r<t;r++)n.push(Q(r*.04,r*.3,r*.04,e-r*.04,(r+1)*.3,.6-r*.04,X.Sandbag,X.Sandbag));return{L:e,W:.6,boxes:n}}function El(){let e=[.7,.7,.72],t=[];for(let n=0;n<8;n++){let r=n/8*Math.PI*2,i=.6+Math.cos(r)*.48,a=.6+Math.sin(r)*.48;t.push(Q(i-.1,0,a-.1,i+.1,.14,a+.1,X.Concrete,X.Concrete,e))}return t.push(Q(.3,0,.5,.9,.12,.7,X.Planks,X.Planks,[.45,.35,.3])),t.push(Q(.5,0,.3,.7,.14,.9,X.Planks,X.Planks,[.45,.35,.3])),t.push(Q(.42,.1,.42,.78,.5,.78,X.Fire)),{L:1.2,W:1.2,boxes:t,lights:[{lx:.6,lz:.6,fire:!0,light:{radius:6.5,r:.95,g:.52,b:.18,flicker:1}}]}}function Dl(){let e=[.36,.5,.66];return{L:1.8,W:1.8,boxes:[Q(.2,0,.2,.32,.6,.32,X.Steel),Q(1.48,0,.2,1.6,.6,.32,X.Steel),Q(.2,0,1.48,.32,.6,1.6,X.Steel),Q(1.48,0,1.48,1.6,.6,1.6,X.Steel),Q(.1,.55,.1,1.7,.65,1.7,X.Planks),Q(.45,.65,.15,1.35,2.3,1.65,X.Drum,X.Drum,e),Q(.15,.65,.45,1.65,2.3,1.35,X.Drum,X.Drum,e),Q(.7,2.3,.7,1.1,2.4,1.1,X.Steel),Q(1.6,.7,.85,1.75,.82,.95,X.Chrome)]}}function Ol(){return{L:2,W:.9,boxes:[Q(.05,0,.1,.15,.85,.2,X.Steel),Q(1.85,0,.1,1.95,.85,.2,X.Steel),Q(.05,0,.7,.15,.85,.8,X.Steel),Q(1.85,0,.7,1.95,.85,.8,X.Steel),Q(.1,.25,.15,1.9,.3,.75,X.Planks),Q(0,.85,.05,2,.95,.85,X.Planks),Q(0,.95,0,2,1.8,.06,X.Planks,X.Planks,[.82,.74,.62]),Q(.2,1.25,.06,.6,1.3,.1,X.Steel),Q(.8,1.15,.06,.86,1.55,.1,X.Steel),Q(1.05,1.2,.06,1.35,1.45,.12,X.Paint,X.Paint,$.red),Q(1.55,.95,.55,1.85,1.15,.8,X.Chrome),Q(.25,.95,.3,.75,1.05,.55,X.Paint,X.Paint,$.red),Q(.35,.3,.3,.75,.6,.65,X.Crate)]}}var kl={L:2.4,W:1.5,standLx:.6,standLz:.65};function Al(){let{L:e,W:t}=kl,n=[.74,.2,.17],r=[.92,.88,.78],i=[];for(let t of[0,e-.08])i.push(Q(t,0,0,t+.08,2.4,.08,X.Planks));for(let e=0;e<6;e++){let t=e%2?r:n;i.push(Q(e*.4,2.4,-.1,(e+1)*.4,2.47,.5,X.Canvas,X.Canvas,t)),i.push(Q(e*.4,2.2,.44,(e+1)*.4,2.4,.5,X.Canvas,X.Canvas,t))}i.push(Q(.1,0,t-.5,e-.1,.9,t-.05,X.Planks)),i.push(Q(.05,.9,t-.55,e-.05,.96,t,X.Planks,X.Planks,[1.1,1.05,.95])),i.push(Q(.25,.96,t-.42,.6,1.12,t-.18,X.Paint,X.Paint,$.olive)),i.push(Q(.3,1.12,t-.38,.55,1.24,t-.22,X.Paint,X.Paint,$.olive)),i.push(Q(.75,.96,t-.4,1.05,1.14,t-.18,X.Paint,X.Paint,$.white)),i.push(Q(.86,1.14,t-.31,.94,1.15,t-.27,X.Paint,X.Paint,$.red)),i.push(Q(1.25,.96,t-.3,2,1.02,t-.22,X.Steel)),i.push(Q(1.95,.96,t-.32,2.2,1.05,t-.2,X.Paint,X.Paint,$.brown)),i.push(Q(1.4,.96,t-.48,1.85,1.06,t-.36,X.Crate));for(let e of[1.48,1.6,1.72])i.push(Q(e,1.06,t-.46,e+.08,1.13,t-.38,X.Paint,X.Paint,$.green));return i.push(Q(1.7,0,.08,2.3,.6,.6,X.Crate)),i.push(Q(1.78,.6,.12,2.2,.98,.5,X.Crate)),i.push(Q(1.15,0,.1,1.55,.8,.5,X.Drum,X.Drum,$.blue)),i.push(Q(1.32,1.9,.36,1.48,2.15,.48,X.Steel,X.Lamp)),{L:e,W:t,boxes:i,lights:[{lx:1.4,lz:.8,fire:!0,light:{radius:3.4,r:.75,g:.52,b:.24,flicker:0}}]}}function jl(e=1){let t=sl(e),n=.6,r=[];for(let e of[0,1.92])for(let t of[0,.52])r.push(Q(e,0,t,e+.08,1.9,t+.08,X.Steel));for(let e of[.1,.7,1.3,1.85]){if(r.push(Q(0,e,0,2,e+.05,n,X.Steel)),e>1.8)continue;let i=.1;for(;i<1.65;){let n=.25+t()*.35,a=.2+t()*.3;r.push(Q(i,e+.05,.08,i+n,e+.05+a,.52,X.Paint,X.Paint,t()<.7?ol:$.silver)),i+=n+.05+t()*.15}}return{L:2,W:n,boxes:r}}function Ml(e=$.olive){let t=1.4,n=.5,r=[Q(0,0,0,t,1.9,n,X.Paint,X.Paint,e)];for(let e=1;e<3;e++)r.push(Q(e*t/3-.01,.05,n,e*t/3+.01,1.85,.51,X.Steel));for(let e=0;e<3;e++){let i=e*t/3+.1;r.push(Q(i,1.6,n,i+.25,1.68,.51,X.Steel)),r.push(Q(i+.28,.9,n,i+.32,1.05,.52,X.Chrome))}return{L:t,W:n,boxes:r}}function Nl(e=$.olive){return{L:1.9,W:.75,boxes:[Q(.05,0,.05,.12,.38,.12,X.Steel),Q(1.78,0,.05,1.85,.38,.12,X.Steel),Q(.05,0,.63,.12,.38,.7,X.Steel),Q(1.78,0,.63,1.85,.38,.7,X.Steel),Q(0,.38,0,1.9,.45,.75,X.Canvas,X.Canvas,e),Q(.1,.45,.1,.5,.56,.65,X.Canvas,X.Canvas,[.9,.88,.82]),Q(.7,.45,.05,1.7,.53,.7,X.Canvas,X.Canvas,ll(e,.7))]}}function Pl(e=1){let t=[];for(let n=0;n<e;n++){let e=n*.15;for(let n of[.05,.5,.95])t.push(Q(0,e,n,1.2,e+.09,n+.1,X.Planks));t.push(Q(0,e+.09,0,1.2,e+.15,1.1,X.Planks))}return{L:1.2,W:1.1,boxes:t}}function Fl(){return{L:.4,W:.4,boxes:[Q(.15,0,.15,.25,3.2,.25,X.Steel),Q(.05,3.1,.05,.35,3.2,.35,X.Steel),Q(.02,3.2,.06,.38,3.48,.34,X.Steel),Q(.38,3.24,.1,.42,3.44,.3,X.Lamp),Q(0,0,0,.4,.06,.4,X.Concrete)],lights:[{lx:2.4,lz:.2,light:{radius:7.5,r:.66,g:.66,b:.6,flicker:0}}]}}function Il(e,t,n){return{L:e,W:.05,boxes:[Q(0,0,0,e,t,.05,X.Corrugated,X.Corrugated,n)]}}function Ll(e,t){let n=[],r=Math.max(2,Math.round(e/.25));for(let i=0;i<r;i++){let a=i*e/r,o=i%2==0;n.push(Q(a,t+(o?.18:0),o?.1:.55,a+e/r,t+(o?.24:.06),o?.18:.63,X.Steel)),n.push(Q(a,t+.04,.3,a+.03,t+.28,.38,X.Steel))}return{L:e,W:.7,boxes:n}}var Rl=class{sx;sy;sz;originX;originZ;blocks;ground;constructor(e,t,n,r,i){this.sx=e,this.sy=t,this.sz=n,this.originX=r,this.originZ=i,this.blocks=new Uint8Array(e*t*n),this.ground=new Uint8Array(e*n).fill(255)}idx(e,t,n){return(t*this.sz+n)*this.sx+e}inBounds(e,t,n){return e>=0&&t>=0&&n>=0&&e<this.sx&&t<this.sy&&n<this.sz}get(e,t,n){return this.inBounds(e,t,n)?this.blocks[this.idx(e,t,n)]:0}solid(e,t,n){return t<0?e>=0&&n>=0&&e<this.sx&&n<this.sz:this.get(e,t,n)!==0}set(e,t,n,r){this.inBounds(e,t,n)&&(this.blocks[this.idx(e,t,n)]=r)}fill(e,t,n,r,i,a,o){for(let s=t;s<i;s++)for(let t=n;t<a;t++)for(let n=e;n<r;n++)this.set(n,s,t,o)}setGround(e,t,n,r,i){for(let a=Math.max(0,t);a<Math.min(this.sz,r);a++)for(let t=Math.max(0,e);t<Math.min(this.sx,n);t++)this.ground[a*this.sx+t]=i}cellX(e){return Math.floor(e-this.originX)}cellZ(e){return Math.floor(e-this.originZ)}blockedAt(e,t){return this.get(this.cellX(e),0,this.cellZ(t))!==0}},zl=[{n:[1,0,0],o:[1,0,1],u:[0,0,-1],v:[0,1,0]},{n:[-1,0,0],o:[0,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,0,1],o:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],o:[1,0,0],u:[-1,0,0],v:[0,1,0]},{n:[0,1,0],o:[0,1,1],u:[1,0,0],v:[0,0,-1]},{n:[0,-1,0],o:[0,0,0],u:[1,0,0],v:[0,0,1]}],Bl=4,Vl=[[-1,-1],[1,-1],[1,1],[-1,1]],Hl=[.45,.64,.82,1],Ul=[1,1,1],Wl=class{pos=[];nrm=[];uv=[];mat=[];tint=[];idx=[];quads=0;quad(e,t,n,r,i=Ul){let a=this.quads*4;for(let a=0;a<4;a++){let o=e[a];this.pos.push(o[0],o[1],o[2]),this.nrm.push(t.n[0],t.n[1],t.n[2]),this.uv.push(o[0]*t.u[0]+o[1]*t.u[1]+o[2]*t.u[2],o[0]*t.v[0]+o[1]*t.v[1]+o[2]*t.v[2]),this.mat.push(n,Hl[r[a]]),this.tint.push(i[0],i[1],i[2])}r[0]+r[2]<r[1]+r[3]?this.idx.push(a+1,a+2,a+3,a+1,a+3,a):this.idx.push(a,a+1,a+2,a,a+2,a+3),this.quads++}build(){return{position:new Float32Array(this.pos),normal:new Float32Array(this.nrm),uv:new Float32Array(this.uv),mat:new Float32Array(this.mat),tint:new Float32Array(this.tint),index:new Uint32Array(this.idx),quads:this.quads}}};function Gl(e,t,n,r,i,a){let o=t+i.n[0],s=n+i.n[1],c=r+i.n[2];for(let t=0;t<4;t++){let[n,r]=Vl[t],l=i.u[0]*n,u=i.u[1]*n,d=i.u[2]*n,f=i.v[0]*r,p=i.v[1]*r,m=i.v[2]*r,h=+!!e.solid(o+l,s+u,c+d),g=+!!e.solid(o+f,s+p,c+m),_=+!!e.solid(o+l+f,s+u+p,c+d+m);a[t]=h&&g?0:3-(h+g+_)}}function Kl(e,t,n,r,i){let a=e.originX+t,o=e.originZ+r,s=[];for(let e=0;e<4;e++){let t=+(e===1||e===2),r=+(e>=2),c=i.o[0]+t*i.u[0]+r*i.v[0],l=i.o[1]+t*i.u[1]+r*i.v[1],u=i.o[2]+t*i.u[2]+r*i.v[2];s.push([a+c,n+l,o+u])}return s}function ql(e,t,n=[]){let r=new Wl,i=[0,0,0,0],a=[0,0,0,0],o=zl[Bl];for(let n=-1;n<e.sy;n++)for(let s=0;s<e.sz;s++){let c=0;for(;c<e.sx;){let l=Jl(e,t,c,n,s);if(l<0){c++;continue}Gl(e,c,n,s,o,i);let u=i[0]===3&&i[1]===3&&i[2]===3&&i[3]===3,d=1;if(u)for(;c+d<e.sx&&Jl(e,t,c+d,n,s)===l&&(Gl(e,c+d,n,s,o,a),a[0]===3&&a[1]===3&&a[2]===3&&a[3]===3);)d++;let f=Kl(e,c,n,s,o);d>1&&(f[1][0]+=d-1,f[2][0]+=d-1),r.quad(f,o,l,i),c+=d}}for(let n=0;n<e.sy;n++)for(let a=0;a<e.sz;a++)for(let o=0;o<e.sx;o++){let s=e.get(o,n,a);if(!s)continue;let c=t[s];for(let t=0;t<4;t++){let s=zl[t];e.solid(o+s.n[0],n+s.n[1],a+s.n[2])||(Gl(e,o,n,a,s,i),r.quad(Kl(e,o,n,a,s),s,c.side,i))}}let s=[3,3,3,3],c=[3,3,3,3];for(let e of n){let t=[e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]],n=e.min[1]<.02;for(let i=0;i<5;i++){let a=zl[i],o=[];for(let r=0;r<4;r++){let s=+(r===1||r===2),l=+(r>=2),u=[0,1,2].map(n=>e.min[n]+(a.o[n]+s*a.u[n]+l*a.v[n])*t[n]);o.push(u),c[r]=n&&i!==Bl&&u[1]<.02?1:3}r.quad(o,a,i===Bl?e.top:e.side,n&&i!==Bl?c:s,e.tint)}}return r.build()}function Jl(e,t,n,r,i){if(e.solid(n,r+1,i))return-1;if(r<0){let t=e.ground[i*e.sx+n];return t===255?-1:t}let a=e.get(n,r,i);return a?t[a].top:-1}function Yl(e){let t=new Dr;return t.setAttribute(`position`,new fr(e.position,3)),t.setAttribute(`normal`,new fr(e.normal,3)),t.setAttribute(`uv`,new fr(e.uv,2)),t.setAttribute(`aMat`,new fr(e.mat,2)),t.setAttribute(`aTint`,new fr(e.tint,3)),t.setIndex(new fr(e.index,1)),t.computeBoundingSphere(),t}var Xl=[`walker`,`runner`,`brute`,`police`],Zl={walker:{hp:30,speed:1,radius:.3,mass:1,attackInterval:1.1,playerDamage:6,wallDamage:5,climbs:!1,vaultTime:0,armor:0},runner:{hp:22,speed:3.4,radius:.28,mass:.8,attackInterval:.8,playerDamage:5,wallDamage:4,climbs:!0,vaultTime:1.2,armor:0},brute:{hp:160,speed:.8,radius:.45,mass:3,attackInterval:1.4,playerDamage:14,wallDamage:42,climbs:!1,vaultTime:0,armor:0},police:{hp:34,speed:.95,radius:.31,mass:1.2,attackInterval:1.1,playerDamage:7,wallDamage:6,climbs:!1,vaultTime:0,armor:42}},Ql=.12;Math.max(...Xl.map(e=>Zl[e].speed))*1.12;var $l={planks:{hpPerMetre:600,low:!1},sandbags:{hpPerMetre:900,low:!0},carDoor:{hpPerMetre:700,low:!0},vending:{hpPerMetre:1600,low:!1}},eu={hp:100,radius:.35,reach:.4,damage:12,fireRate:5,range:14,repair:!1,repairRate:15},tu=class{id;label;cells;widthM;kind=null;hp=0;maxHp=0;fieldHp=0;fieldQueue=0;wasBuilt=!1;constructor(e,t,n,r){this.id=e,this.label=t,this.cells=n,this.widthM=r}get intact(){return this.kind!==null&&this.hp>0}get low(){return this.kind!==null&&$l[this.kind].low}get state(){return this.kind===null?this.wasBuilt?`destroyed`:`empty`:this.hp<=0?`destroyed`:this.hp<this.maxHp?`damaged`:`built`}build(e){this.kind=e,this.maxHp=e?$l[e].hpPerMetre*this.widthM:0,this.hp=this.maxHp,this.fieldHp=this.hp,this.fieldQueue=0,this.wasBuilt=e!==null}damage(e){if(!this.intact)return 0;let t=Math.min(e,this.hp);return this.hp-=t,this.hp<=0&&(this.hp=0,this.kind=null),t}repair(e){if(!this.intact)return 0;let t=Math.min(e,this.maxHp-this.hp);return this.hp+=t,t}},nu=class{w;h;cell=Vc;type;slotOf;low;slots=[];coreHp=0;coreMaxHp=0;constructor(e,t){this.w=e,this.h=t,this.type=new Uint8Array(e*t),this.slotOf=new Int16Array(e*t).fill(-1),this.low=new Uint8Array(e*t)}get size(){return this.w*this.h}idx(e,t){return t*this.w+e}cx(e){return e%this.w}cz(e){return e/this.w|0}inside(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}cellAt(e,t){let n=Math.floor(e/this.cell),r=Math.floor(t/this.cell);return this.inside(n,r)?this.idx(n,r):-1}centreX(e){return(this.cx(e)+.5)*this.cell}centreZ(e){return(this.cz(e)+.5)*this.cell}fill(e,t,n,r,i){for(let a=n;a<=i;a++)for(let n=t;n<=r;n++)this.type[this.idx(n,a)]=e}addSlot(e,t,n,r,i){let a=[];for(let e=n;e<=i;e++)for(let n=t;n<=r;n++){let t=this.idx(n,e);this.type[t]=2,this.slotOf[t]=this.slots.length,a.push(t)}let o=Math.max(r-t+1,i-n+1)*this.cell,s=new tu(this.slots.length,e,a,o);return this.slots.push(s),s}slotAt(e){let t=this.slotOf[e];return t<0?null:this.slots[t]}blocked(e){let t=this.type[e];return t===0?!1:t!==2||this.slots[this.slotOf[e]].intact}intactWall(e){return this.type[e]===2&&this.slots[this.slotOf[e]].intact}blocksShot(e,t){let n=this.type[e];return n===1?!this.low[e]:t&&n===2&&this.slots[this.slotOf[e]].intact}rayClear(e,t,n,r,i,a){return this.ray(e,t,n,r,i,e=>this.blocksShot(e,a))}walkClear(e,t,n,r,i){return this.ray(e,t,n,r,i,e=>this.blocked(e))}ray(e,t,n,r,i,a){let o=this.cell,s=Math.floor(e/o),c=Math.floor(t/o),l=n>0?1:-1,u=r>0?1:-1,d=n===0?1/0:Math.abs(o/n),f=r===0?1/0:Math.abs(o/r),p=n===0?1/0:(n>0?(s+1)*o-e:e-s*o)/Math.abs(n),m=r===0?1/0:(r>0?(c+1)*o-t:t-c*o)/Math.abs(r),h=0;for(;h<i;){if(!this.inside(s,c)||a(this.idx(s,c)))return h;p<m?(h=p,p+=d,s+=l):(h=m,m+=f,c+=u)}return i}},ru=10,iu=Math.round(1/Vc);function au(e){return()=>(e=e*16807%2147483647,e/2147483647)}var ou=class{g;rand;boxes=[];lamps=[];glows=[];fires=[];containers=[];spawns=[];solids=[];posts=[];compoundRect=null;openings=[];refugeAt={x:32,z:32};benchAt={x:32,z:34};merchantAt={x:32,z:36,standX:32,standZ:35};start={x:32,z:34};lo=-16;hi=80;constructor(e){this.g=new Rl(96,ru,96,-16,-16),this.rand=au(e)}ground(e,t,n,r,i){this.g.setGround(e+16,t+16,n+16,r+16,i)}box(e,t,n,r,i,a,o){this.g.fill(e+16,i,t+16,n+16,a,r+16,o)}at(e,t,n){return this.g.get(e+16,t,n+16)}building(e,t,n,r,i,a,o=.25){let s=this.rand;this.box(e,t,n,r,0,i,a);for(let a=0;a<i;a++)for(let i=t;i<r;i++)for(let c=e;c<n;c++){let l=c===e||c===n-1,u=i===t||i===r-1;if(!l&&!u||l&&u)continue;let d=u?c:i;a===0?d%5<3&&s()<.6&&this.box(c,i,c+1,i+1,0,1,Z.Shutter):a%3==1&&d%3!=0&&this.box(c,i,c+1,i+1,a,a+1,s()<o?Z.WindowLit:Z.WindowDark)}}townBorder(e){for(let[t,n,r,i]of e)for(let e=t;e<r;e+=9)for(let t=n;t<i;t+=9)this.building(e,t,Math.min(r,e+8),Math.min(i,t+8),4+Math.floor(this.rand()*5),this.rand()<.5?Z.Brick:Z.Concrete)}prop(e,t,n,r=0,i=!0){let a=nl(e,t,n,r);if(this.boxes.push(...a.boxes),i){let e=Math.max(0,...a.boxes.map(e=>e.max[1]));this.solids.push({...a.footprint,low:e<=1})}return this.lamps.push(...a.lights),this.fires.push(...a.fires),a}container(e,t,n,r=!1){this.containers.push({id:this.containers.length,kind:e,x:t,z:n,inside:r})}car(e,t,n,r,i,a){this.prop(cl(e,t,Math.floor(n*31+r*17)),n,r,i),a&&this.container(`car`,a[0],a[1])}lamp(e,t,n,r,i=0){this.posts.push([e,t]),this.boxes.push({min:[e-.1,0,t-.1],max:[e+.1,4.2,t+.1],top:X.Steel,side:X.Steel});let a=e+n*1.1,o=t+r*1.1;this.boxes.push({min:[Math.min(e,a)-.06,4.05,Math.min(t,o)-.06],max:[Math.max(e,a)+.06,4.17,Math.max(t,o)+.06],top:X.Steel,side:X.Steel}),this.boxes.push({min:[a-.28,3.85,o-.22],max:[a+.28,4.05,o+.22],top:X.Steel,side:X.Lamp}),this.lamps.push({x:a,z:o,radius:8,r:.8,g:.62,b:.36,flicker:i})}post(e,t){this.posts.push([e,t])}compound(e,t,n=Z.Cinder,r={sheets:!0,wire:!0}){this.compoundRect=e,this.openings=t;let{x0:i,z0:a,x1:o,z1:s}=e;this.box(i,a,o,a+1,0,2,n),this.box(i,s-1,o,s,0,2,n),this.box(i,a,i+1,s,0,2,n),this.box(o-1,a,o,s,0,2,n);for(let[,e,n,r]of t)e===`n`&&this.box(n,a,r,a+1,0,2,Z.Air),e===`s`&&this.box(n,s-1,r,s,0,2,Z.Air),e===`w`&&this.box(i,n,i+1,r,0,2,Z.Air),e===`e`&&this.box(o-1,n,o,r,0,2,Z.Air);if(!r.sheets&&!r.wire)return;let c=(e,n,r)=>{let i=t.filter(t=>t[1]===e).map(e=>[e[2],e[3]]).sort((e,t)=>e[0]-t[0]),a=[],o=n;for(let[e,t]of i)e>o&&a.push([o,e]),o=Math.max(o,t);return r>o&&a.push([o,r]),a},l=[[.72,.62,.52],[.6,.66,.7],[.82,.8,.76],[.66,.52,.42]];for(let e of[`n`,`s`,`w`,`e`]){let t=e===`n`||e===`s`;for(let[n,u]of c(e,t?i:a,t?o:s)){let c=u-n;if(r.wire&&t?this.prop(Ll(c,2),n,e===`n`?a+.15:s-.85,0,!1):r.wire&&this.prop(Ll(c,2),e===`w`?i+.15:o-.85,n,1,!1),!r.sheets)continue;let d=n+.2;for(;d<u-.8;){let t=Math.min(u-.2-d,1+this.rand()*1.6);if(this.rand()<.55){let n=1.3+this.rand()*.6,r=l[Math.floor(this.rand()*l.length)];e===`n`&&this.prop(Il(t,n,r),d,a-.05,0,!1),e===`s`&&this.prop(Il(t,n,r),d,s,0,!1),e===`w`&&this.prop(Il(t,n,r),i-.05,d,1,!1),e===`e`&&this.prop(Il(t,n,r),o,d,1,!1)}d+=t+.1+this.rand()*.8}}}}refuge(e,t,n){this.refugeAt={x:e+1,z:t+1},this.prop(n,e,t,0,!1)}workbench(e,t){this.benchAt={x:e,z:t}}merchant(e,t){this.prop(Al(),e,t,0),this.merchantAt={x:e+kl.L/2,z:t+kl.W+.55,standX:e+kl.standLx,standZ:t+kl.standLz}}playerStart(e,t){this.start={x:e,z:t}}finish(e,t){let n=this.g,r=(e,t,n)=>this.at(e,t,n),i=this.compoundRect,{x0:a,z0:o,x1:s,z1:c}=i;for(let e=0;e<64;e++)for(let t=0;t<64;t++)if(r(t,1,e)===Z.WindowLit)for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let a=t+n,o=e+i;a<0||o<0||a>=64||o>=64||r(a,0,o)!==Z.Air||this.glows.push({x:t+.5+n*1.2,z:e+.5+i*1.2,radius:2.6,r:.5,g:.36,b:.16,flicker:0})}let l=64*iu,u=new nu(l,l);for(let e=0;e<64;e++)for(let t=0;t<64;t++)r(t,0,e)!==Z.Air&&u.fill(1,t*iu,e*iu,t*iu+iu-1,e*iu+iu-1);let d=e=>Math.min(l-1,Math.max(0,e));for(let e of this.solids){let t=Math.max(0,Math.round(e.x0*iu)),n=Math.max(0,Math.round(e.z0*iu)),r=Math.min(l-1,Math.round(e.x1*iu)-1),i=Math.min(l-1,Math.round(e.z1*iu)-1);for(let a=n;a<=i;a++)for(let n=t;n<=r;n++){let t=u.idx(n,a);u.type[t]===0?u.low[t]=+!!e.low:e.low||(u.low[t]=0),u.type[t]=1}}for(let[e,t]of this.posts)e>0&&t>0&&e<64&&t<64&&su(u,d(Math.floor((e-.1)*iu)),d(Math.floor((t-.1)*iu)),d(Math.floor((e+.1)*iu)),d(Math.floor((t+.1)*iu)));let f=this.refugeAt.x-1,p=this.refugeAt.z-1;u.fill(3,f*iu,p*iu,(f+2)*iu-1,(p+2)*iu-1),cu(u);let m=[];for(let e=0;e<u.size;e++)u.type[e]===3&&m.push(e);let h=[],g=Vc;for(let[e,t,n,r]of this.openings){let i=n*iu,l=r*iu-1,d,f;if(t===`n`){let t=o*iu;d=u.addSlot(e,i,t,l,t),f={x0:n,z0:o,x1:r,z1:o+g,axis:`x`,outward:[0,-1]}}else if(t===`s`){let t=c*iu-1;d=u.addSlot(e,i,t,l,t),f={x0:n,z0:c-g,x1:r,z1:c,axis:`x`,outward:[0,1]}}else if(t===`w`){let t=a*iu;d=u.addSlot(e,t,i,t,l),f={x0:a,z0:n,x1:a+g,z1:r,axis:`z`,outward:[-1,0]}}else{let t=s*iu-1;d=u.addSlot(e,t,i,t,l),f={x0:s-g,z0:n,x1:s,z1:r,axis:`z`,outward:[1,0]}}h.push({slot:d,label:e,...f})}let _=new Uint8Array(u.size);for(let e=(o+1)*iu;e<(c-1)*iu;e++)for(let t=(a+1)*iu;t<(s-1)*iu;t++){let n=u.idx(t,e);u.type[n]===0&&(_[n]=1)}return{id:e,name:t,voxels:n,boxes:this.boxes,lamps:this.lamps,glows:this.glows,fires:this.fires,layout:{grid:u,playerX:this.start.x,playerZ:this.start.z,coreCells:m,yard:_},slots:h,containers:this.containers,spawns:this.spawns,compound:i,refuge:this.refugeAt,workbench:this.benchAt,merchant:this.merchantAt,bounds:{x0:0,z0:0,x1:64,z1:64}}}};function su(e,t,n,r,i){for(let a=n;a<=i;a++)for(let n=t;n<=r;n++){let t=e.idx(n,a);e.type[t]===0&&(e.low[t]=1),e.type[t]=1}}function cu(e){let t=(t,n)=>t>=0&&n>=0&&t<e.w&&n<e.h&&e.type[e.idx(t,n)]!==0;for(let n=0;n<4;n++){let n=0;for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++)e.type[e.idx(i,r)]===0&&(t(i-1,r)&&t(i+1,r)||t(i,r-1)&&t(i,r+1))&&(e.fill(1,i,r,i,r),e.low[e.idx(i,r)]=1,n++);if(!n)return}}function lu(e){let t=new ou(e),{lo:n,hi:r}=t;t.ground(n,n,r,r,X.Grass),t.ground(n,10,r,20,X.Pavement),t.ground(44,n,54,r,X.Pavement),t.ground(n,12,r,18,X.Asphalt),t.ground(46,n,52,r,X.Asphalt);for(let e=n;e<r;e++)(e%4+4)%4<2&&(e<45||e>52)&&t.ground(e,15,e+1,16,X.AsphaltLine);for(let e=n;e<r;e++)(e%4+4)%4<2&&(e<11||e>18)&&t.ground(49,e,50,e+1,X.AsphaltLine);t.ground(n,11,r,12,X.Curb),t.ground(n,18,r,19,X.Curb),t.ground(18,20,46,44,X.Dirt),t.ground(23,25,41,39,X.Gravel),t.ground(18,44,44,64,X.Pavement),t.building(2,1,14,9,6,Z.Brick),t.building(16,1,28,9,8,Z.Concrete),t.building(30,1,42,9,5,Z.Brick),t.building(56,1,63,9,7,Z.Concrete),t.building(56,22,63,33,6,Z.Brick),t.building(56,37,63,49,5,Z.Concrete),t.building(56,52,63,63,7,Z.Brick),t.building(2,22,14,35,5,Z.Concrete),t.building(2,40,14,62,6,Z.Brick),t.building(22,52,40,62,4,Z.Concrete),t.townBorder([[n,n,14,-1],[16,n,28,-1],[30,n,44,-1],[54,n,r,-1],[n,66,14,r],[18,66,44,r],[54,66,r,r],[n,-1,-1,10],[n,20,-1,36],[n,39,-1,66],[65,-1,r,10],[65,20,r,66]]),t.box(14,n,16,n+4,0,3,Z.Cinder),t.box(28,n,30,n+4,0,3,Z.Cinder),t.box(14,r-4,18,r,0,3,Z.Cinder),t.box(n,36,n+4,39,0,3,Z.Cinder),t.compound({x0:22,z0:24,x1:42,z1:40},[[`北大门`,`n`,31,34],[`北窗西`,`n`,25,26],[`北窗东`,`n`,38,39],[`南门`,`s`,31,33],[`南窗西`,`s`,25,26],[`南窗东`,`s`,38,39],[`西门`,`w`,31,33],[`西窗`,`w`,27,28],[`东门`,`e`,31,33],[`东窗`,`e`,36,37]]),t.refuge(31,31,Cl()),t.prop(Ol(),25.6,34.4,0),t.workbench(26.6,36),t.merchant(28.4,26.9),t.prop(jl(e),35.6,25.15),t.container(`shelf`,36.6,26.2,!0),t.prop(Ml(),23.1,25.1,3),t.container(`locker`,24.2,25.8,!0),t.prop(wl($.green),34.6,27.1,1),t.prop(wl([.86,.5,.26]),37.5,27.1,1),t.prop(El(),36.2,29.9),t.prop(Dl(),24.4,28.6),t.prop(Pl(2),27,26.2),t.prop(pl($.blue),28.4,26.3),t.prop(Nl(),35.2,34.4),t.prop(Nl([.36,.42,.56]),35.2,35.5),t.prop(pl([.5,.45,.4],!0),39.6,34.3),t.prop(Tl(3),35,37.9),t.prop(Pl(1),23.3,34.4),t.prop(fl(),23.3,37.6),t.prop(xl(2),28.2,37.9),t.prop(Fl(),40.4,38.4,3),t.prop(Fl(),23.2,30,0),t.playerStart(32,34.6),t.car(`sedan`,$.red,4,13.05,0,[6,15.6]),t.car(`hatch`,$.teal,19.2,15.05,2,[21,14.4]),t.car(`police`,$.white,36,12.05,0,[38,14.6]),t.car(`van`,$.white,47,27.6,1,[49.6,30]),t.car(`pickup`,$.brown,50,41.6,3,[49.4,44]),t.car(`sedan`,$.silver,47.05,55,1,[49.6,57]),t.car(`wreck`,$.black,57,14.05,2,[59,13.4]),t.car(`sedan`,$.blue,24,47.05,0,[26,49.6]),t.car(`hatch`,$.yellow,33.2,46.05,2,[35,48.6]),t.car(`wreck`,$.black,19.2,50.5,1,null),t.prop(dl(1),14,4,1),t.container(`dumpster`,15.5,5),t.prop(dl(2),28,5,1),t.container(`dumpster`,29.5,6),t.prop(dl(3),14,37,0),t.container(`dumpster`,15,38.6),t.prop(dl(4),54,34,0),t.container(`dumpster`,55,35.6);for(let[e,n,r,i]of[[43,21,43.5,22.6],[17,41,17.5,42.6],[53,60,53.5,59.4],[33,10,33.5,11.6]])t.prop(fl(),e,n),t.container(`crate`,r,i);t.prop(ml(3),40.5,16.6,0),t.prop(_l(),10.3,19.1),t.prop(_l(),44.4,30.3),t.prop(gl(),24.5,10.2),t.prop(gl(),53.6,21,1),t.prop(pl([.5,.52,.5]),15.2,19.2),t.prop(bl(1),15.5,22.5),t.prop(bl(2),15.6,30),t.prop(bl(3),16,47.5),t.prop(bl(4),19.5,21),t.prop(bl(5),54.4,50.6),t.prop(bl(6),42.5,60.5);for(let e of[6,18,30,60])t.lamp(e,10.6,0,1,+(e===30));for(let e of[12,24,38])t.lamp(e,19.4,0,-1);for(let e of[26,38,50])t.lamp(44.6,e,1,0,+(e===50));for(let e of[4,30,58])t.lamp(53.4,e,-1,0);return t.spawns.push({x:.6,z:13.5},{x:.6,z:16.5},{x:63.4,z:13.5},{x:63.4,z:16.5},{x:47.5,z:.6},{x:50.5,z:.6},{x:47.5,z:63.4},{x:50.5,z:63.4},{x:15,z:.6},{x:29,z:.6},{x:16,z:63.4},{x:.6,z:37.5}),t.finish(`crossroads`,`十字街口`)}function uu(){return{L:2.4,W:.5,boxes:[{min:[1.05,0,.1],max:[1.35,4.2,.4],top:X.Steel,side:X.Steel},{min:[0,4.2,.05],max:[2.4,5.6,.45],top:X.Paint,side:X.Paint,tint:[.95,.95,.92]},{min:[0,5.1,.03],max:[2.4,5.6,.47],top:X.Paint,side:X.Paint,tint:[.82,.2,.16]},{min:[.2,4.35,.02],max:[2.2,4.95,.03],top:X.Glass,side:X.Glass},{min:[.2,4.35,.47],max:[2.2,4.95,.48],top:X.Glass,side:X.Glass}]}}function du(e){let t=new ou(e),{lo:n,hi:r}=t,i=t.rand;t.ground(n,n,r,r,X.Grass);for(let e=0;e<40;e++){let e=Math.floor(n+i()*(r-n)),a=Math.floor(n+i()*(r-n));t.ground(e,a,e+2+Math.floor(i()*4),a+1+Math.floor(i()*3),X.Dirt)}t.ground(38,n,54,r,X.Gravel),t.ground(40,n,52,r,X.Asphalt);for(let e=n;e<r;e++)t.ground(45,e,46,e+1,X.AsphaltLine),t.ground(46,e,47,e+1,X.AsphaltLine),(e%4+4)%4<2&&(t.ground(42,e,43,e+1,X.ParkLine),t.ground(49,e,50,e+1,X.ParkLine));t.ground(n,50,38,56,X.Asphalt);for(let e=n;e<38;e++)(e%4+4)%4<2&&t.ground(e,52,e+1,53,X.AsphaltLine);t.ground(n,49,38,50,X.Curb),t.ground(n,56,38,57,X.Curb),t.ground(10,14,38,40,X.Slab),t.ground(36,24,40,30,X.Slab),t.building(14,17,24,21,4,Z.Concrete,.4),t.building(2,2,11,10,5,Z.Brick,.3),t.building(2,22,9,33,4,Z.Sheet),t.building(4,57,30,63,6,Z.Brick,.45),t.building(56,4,63,14,4,Z.Concrete,.4),t.building(57,40,63,49,5,Z.Sheet),t.building(n+2,n+3,n+9,n+10,4,Z.Sheet),t.building(66,70,74,76,5,Z.Brick),t.building(n+4,66,n+12,74,4,Z.Brick),t.building(68,n+4,76,n+12,6,Z.Concrete),t.compound({x0:12,z0:15,x1:36,z1:38},[[`北门`,`n`,28,31],[`北窗`,`n`,33,34],[`东大门`,`e`,25,28],[`东窗北`,`e`,18,19],[`东窗南`,`e`,33,34],[`南门`,`s`,22,24],[`南窗西`,`s`,15,16],[`南窗东`,`s`,30,31],[`西门`,`w`,28,30],[`西窗`,`w`,34,35]],Z.Cinder),t.prop(vl(),27.4,21.6),t.prop(vl(),27.4,31.4),t.refuge(22,26,Cl()),t.prop(Ol(),16.6,33.2,0),t.workbench(17.6,34.9),t.merchant(18.4,30.4),t.prop(Sl(),19,21.05,0),t.prop(Sl([.24,.42,.7]),20.2,21.05,0),t.prop(xl(3),31.4,23.4),t.prop(pl($.blue),25,35.9),t.prop(pl($.yellow),25.9,36),t.prop(fl(),13.3,36),t.prop(Nl([.5,.36,.3]),18.6,23.7),t.prop(jl(e+3),25.2,16.1),t.container(`shelf`,26.2,17.2,!0),t.prop(Ml([.36,.42,.56]),34.4,16.2,1),t.container(`locker`,33.6,17.2,!0),t.prop(wl([.86,.5,.26]),13,22.6,0),t.prop(wl($.green),13,30.4,0),t.prop(El(),17.2,27.4),t.prop(Nl(),18.6,22.5),t.prop(Dl(),13.3,25.6),t.prop(Tl(3),28.6,35.6),t.prop(Pl(2),19.6,35.8),t.prop(pl([.8,.2,.16]),20.9,34.6),t.prop(pl([.5,.45,.4],!0),33.8,36),t.prop(Fl(),34.6,36.6,2),t.prop(Fl(),13.2,16.2,1),t.playerStart(24,30.8);let a=[$.red,$.silver,$.blue,$.white,$.green,$.beige,$.black,$.teal,$.yellow],o=[`sedan`,`hatch`,`sedan`,`van`,`pickup`,`sedan`,`hatch`],s=0;for(let[e,n,r,i]of[[40.5,2,1,!0],[43.4,7.5,1,!1],[40.6,13.5,1,!0],[43.2,40,1,!0],[40.4,46,1,!1],[43.5,58,1,!0],[49.6,4.5,3,!1],[47.2,10,3,!0],[49.5,35,3,!0],[47,42.5,3,!1],[49.8,51,3,!0],[47.3,57.5,3,!1]]){let c=o[s%o.length],l=a[s%a.length];s++;let u=i?[e<46?e<42?e+2.6:e-.6:e>48.5?e-.6:e+2.6,n+2.2]:null;t.car(c,l,e,n,r,u)}t.car(`wreck`,$.black,41.5,19.5,0,null),t.car(`police`,$.white,46.8,22.5,2,[48.8,25.2]),t.car(`van`,$.white,44.6,27.5,1,[47.2,30]),t.prop(ml(4),47.5,17.6),t.prop(hl(2.4),49.2,30.6),t.prop(uu(),38.6,11,1),t.car(`sedan`,$.blue,8,47.2,0,[10,46.4]),t.car(`hatch`,$.red,20,47.3,2,[22,46.4]),t.car(`pickup`,$.olive,58.6,16.2,1,[57.8,19]),t.prop(dl(5),56.8,1.4,0),t.container(`dumpster`,57.8,3.2),t.prop(dl(6),30.6,57.6,0),t.container(`dumpster`,31.6,59);for(let[e,n,r,i]of[[11.5,4,12.4,5.5],[9.6,30,10.2,31.5],[55,43,55.5,44.6],[3,44,3.5,45.6]])t.prop(fl(),e,n),t.container(`crate`,r,i);t.prop(Pl(3),9.6,23),t.prop(pl([.42,.44,.28]),10,26.5),[[4,14],[8,38],[3,41],[26,8],[20,3],[31,4],[57,25],[60,31],[58,54],[61,60],[32,44],[14,44],[26,41]].forEach(([e,n],r)=>t.prop(bl(r+7),e,n));for(let[e,r]of[[n+3,20],[n+6,34],[n+2,46],[68,24],[72,36],[66,54],[20,n+4],[30,n+8],[12,68],[28,70]])t.prop(bl(e+r),e,r);for(let e of[6,22,38,54])t.lamp(38.6,e,1,0,+(e===54));for(let e of[14,30,46,62])t.lamp(53.4,e,-1,0);for(let e of[10,24])t.lamp(e,49.4,0,1);return t.spawns.push({x:41.5,z:.6},{x:44,z:.6},{x:48,z:.6},{x:51,z:.6},{x:41.5,z:63.4},{x:44.5,z:63.4},{x:50.5,z:63.4},{x:.6,z:52},{x:.6,z:54.5},{x:.6,z:17},{x:.6,z:38},{x:63.4,z:30},{x:63.4,z:52},{x:16,z:.6},{x:34,z:63.4}),t.finish(`gas`,`公路加油站`)}function fu(e){let t=new ou(e),{lo:n,hi:r}=t,i=t.rand;t.ground(n,n,r,r,X.Pavement),t.ground(0,14,56,56,X.Asphalt),t.ground(4,14,44,16,X.Pavement),t.ground(n,56,r,62,X.Asphalt),t.ground(56,n,62,56,X.Asphalt);for(let e=n;e<r;e++)(e%4+4)%4<2&&(e<55||e>62)&&t.ground(e,59,e+1,60,X.AsphaltLine);for(let e=n;e<56;e++)(e%4+4)%4<2&&t.ground(59,e,60,e+1,X.AsphaltLine);t.ground(n,55,56,56,X.Curb),t.ground(n,62,r,63,X.Curb),t.ground(55,n,56,55,X.Curb),t.ground(62,n,63,56,X.Curb),t.ground(46,2,56,12,X.Slab);let a=[[17,22],[26,31],[31,36],[40,45],[45,50]];for(let[e,n]of a)for(let r=2;r<=54;r+=3)t.ground(r,e,r+1,n,X.ParkLine);t.building(4,2,44,14,5,Z.Concrete,.15);for(let e=8;e<40;e++)e%6!=0&&t.box(e,13,e+1,14,0,1,e>21&&e<27?Z.Shutter:Z.WindowDark);t.box(44,4,46,12,0,2,Z.Concrete),t.building(2,44,16,54,6,Z.Brick,.4),t.townBorder([[n,n,1,-1],[4,n,44,-1],[47,n,55,-1],[63,n,r,-1],[n,-1,-1,14],[n,22,-1,28],[n,34,-1,39],[n,44,-1,55],[64,-1,r,55],[n,64,r,r]]),t.compound({x0:20,z0:27,x1:42,z1:46},[[`北大门`,`n`,29,33],[`北窗`,`n`,37,38],[`西门`,`w`,34,37],[`东门`,`e`,34,37],[`南门`,`s`,29,32]],Z.Sheet,{sheets:!1,wire:!0}),t.ground(21,28,41,45,X.Gravel),t.refuge(30,35,Cl()),t.prop(Ol(),34.4,41.6,0),t.workbench(35.4,43.3),t.merchant(25,40.6),t.prop(xl(3),24.4,28.3),t.prop(Sl([.24,.42,.7]),26.6,28.1,0),t.prop(Pl(3),37.4,43.9),t.prop(pl($.red),21.3,41.2),t.prop(yl(2),26.4,39.6,0),t.prop(jl(e+5),22.2,28.15),t.container(`shelf`,23.2,29.2,!0),t.prop(Ml(),40.4,28.4,1),t.container(`locker`,39.6,29.4,!0),t.prop(wl($.blue),34.6,29.2,1),t.prop(wl([.86,.5,.26]),37.6,29.6,1),t.prop(El(),26.2,31.4),t.prop(Nl(),22,38.4),t.prop(Nl([.5,.36,.3]),22,39.6),t.prop(Dl(),22.2,42.6),t.prop(Tl(4),24.6,44.2),t.prop(Pl(2),38.6,39.2),t.prop(fl(),38.8,41),t.prop(pl([.5,.45,.4],!0),39.8,43.6),t.prop(Fl(),21.2,28.2,1),t.prop(Fl(),40.6,44.8,3),t.playerStart(31,38.6);let o=[$.red,$.silver,$.blue,$.white,$.green,$.beige,$.black,$.teal,$.yellow,$.brown],s=[`sedan`,`hatch`,`sedan`,`pickup`,`sedan`,`van`,`hatch`,`wreck`],c=(e,t,n)=>e>18.5&&e<43&&n>26&&t<47,l=(e,t)=>e<17&&t>=40,u=0;a.forEach(([e,n],r)=>{let a=r%2==0;for(let r=2;r<=52;r+=3){if(c(r,e,n)||l(r,e)||i()<.45)continue;let d=s[Math.floor(i()*s.length)],f=o[Math.floor(i()*o.length)],p=r+.55,m=e+.35,h=a?n+.6:e-.6,g=d!==`wreck`&&u<12&&i()<.6?[p+1,h]:null;g&&u++,t.car(d,f,p,m,a?3:1,g)}}),t.car(`van`,$.white,46.4,4.2,0,[49,7]),t.car(`van`,$.beige,46.4,8.6,0,null),t.prop(Pl(3),52.6,2.4),t.prop(Pl(2),52.6,4),t.prop(dl(7),52.8,9.8,0),t.container(`dumpster`,53.8,11.6),t.prop(dl(8),.4,10,1),t.container(`dumpster`,2.4,11);for(let[e,n,r,i]of[[45,13,45.5,14.6],[17.5,52,18,53.6],[52.5,52,53,53.6],[1,40,1.5,41.6]])t.prop(fl(),e,n),t.container(`crate`,r,i);for(let[e,n,r,i]of[[10,23.4,3,0],[47.6,37,4,1],[8,38,2,0],[45.8,24,2,0],[24,51.4,3,0],[50,51.2,2,0]])t.prop(yl(r),e,n,i);t.prop(ml(4),45,52.4),t.prop(gl(),18.2,14.2),t.prop(gl(),28.6,14.2),t.prop(pl([.3,.46,.32]),17,14.6),t.prop(bl(21),.4,26.6),t.prop(bl(22),.4,36.4),t.prop(bl(23),54,37),t.prop(bl(24),17.6,37.2);for(let e of[8,26,44])t.lamp(e,24,0,1,+(e===26));for(let e of[8,48])t.lamp(e,38,0,1);for(let e of[20,36,50])t.lamp(e,52.6,0,-1,+(e===50));return t.lamp(55.4,30,-1,0),t.spawns.push({x:.6,z:57.5},{x:.6,z:60.5},{x:63.4,z:57.5},{x:63.4,z:60.5},{x:57.5,z:.6},{x:60.5,z:.6},{x:.6,z:18},{x:.6,z:30.5},{x:.6,z:41},{x:2.6,z:.6},{x:45,z:.6}),t.finish(`market`,`超市停车场`)}var pu=[{id:`crossroads`,name:`十字街口`,blurb:`老城区的十字路口，空地上用砖墙围了个营地。楼多巷子多，尸潮从四条路和两条小巷涌来。`,tags:[`10 个缺口`,`街巷多`,`推荐第一次玩`],openings:10},{id:`gas`,name:`公路加油站`,blurb:`国道边的加油站，堵死的车流里能翻出不少东西。四下开阔，丧尸从哪个方向来都看得见，也都挡不住。`,tags:[`10 个缺口`,`四面开阔`,`车多`],openings:10},{id:`market`,name:`超市停车场`,blurb:`大超市的停车场，满地车辆可搜。营地是用集装箱拼起来的，缺口少，但每个缺口都很宽。`,tags:[`5 个宽缺口`,`物资最多`],openings:5}];function mu(e=`crossroads`,t=11){return e===`gas`?du(t):e===`market`?fu(t):lu(t)}var hu=class{s;constructor(e){this.s=e>>>0||2654435769}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}get state(){return this.s}set state(e){this.s=e>>>0}int(e){return Math.floor(this.next()*e)}},gu=0,_u=1,vu=2,yu=3,bu=[1,-1,0,0,1,-1,1,-1],xu=[0,0,1,-1,1,1,-1,-1],Su=class{keys=new Float64Array(4096);vals=new Int32Array(4096);n=0;clear(){this.n=0}push(e,t){if(this.n===this.keys.length){let e=new Float64Array(this.n*2);e.set(this.keys);let t=new Int32Array(this.n*2);t.set(this.vals),this.keys=e,this.vals=t}let n=this.n++;for(;n>0;){let t=n-1>>1;if(this.keys[t]<=e)break;this.keys[n]=this.keys[t],this.vals[n]=this.vals[t],n=t}this.keys[n]=e,this.vals[n]=t}topKey(){return this.keys[0]}pop(){let e=this.vals[0],t=this.keys[--this.n],n=this.vals[this.n],r=0;for(;;){let e=2*r+1;if(e>=this.n||(e+1<this.n&&this.keys[e+1]<this.keys[e]&&e++,this.keys[e]>=t))break;this.keys[r]=this.keys[e],this.vals[r]=this.vals[e],r=e}return this.keys[r]=t,this.vals[r]=n,e}},Cu=class{grid;params;dist;next;goal;cls;extra;heap=new Su;mark;stamp=0;queue;straight;diagonal;fullCount=0;localCount=0;localMsTotal=0;localMsMax=0;lastTouched=0;constructor(e,t){this.grid=e,this.params=t;let n=e.size;this.dist=new Float64Array(n).fill(1/0),this.next=new Int32Array(n).fill(-1),this.goal=new Uint8Array(n),this.cls=new Uint8Array(n),this.extra=new Float64Array(n),this.mark=new Uint32Array(n),this.queue=new Int32Array(n),this.straight=e.cell/t.speed,this.diagonal=e.cell*Math.SQRT2/t.speed}setGoals(e){this.goal.fill(0);for(let t of e)this.goal[t]=1}slotCost(e){let t=0;return e.intact&&(t=this.params.vaultTime!==null&&e.low?this.params.vaultTime:e.fieldHp/this.params.wallDps*(this.params.wallWeight??1)),t+e.fieldQueue}classify(e){let t=this.grid,n=t.type[e];if(this.extra[e]=0,n===1)this.cls[e]=vu;else if(n===3)this.cls[e]=yu;else{this.cls[e]=t.intactWall(e)?_u:gu;let n=t.slotAt(e);n&&(this.extra[e]=this.slotCost(n))}}edge(e,t,n){let r=this.cls,i=r[e],a=r[t];if(i>=vu||a===vu)return 1/0;if(n>=4){if(i!==gu||a!==gu)return 1/0;let o=this.grid.w;return r[e+bu[n]]!==gu||r[e+xu[n]*o]!==gu?1/0:this.diagonal+this.extra[t]}return this.straight+this.extra[t]}computeFull(){for(let e=0;e<this.grid.size;e++)this.classify(e);this.dist.fill(1/0),this.next.fill(-1),this.heap.clear();for(let e=0;e<this.goal.length;e++)this.goal[e]&&(this.dist[e]=0,this.heap.push(0,e));this.run(),this.fullCount++}run(){let e=this.grid,{dist:t,next:n,heap:r}=this,i=e.w,a=e.h;for(;r.n>0;){let e=r.topKey(),o=r.pop();if(e>t[o])continue;let s=o%i,c=o/i|0;for(let l=0;l<8;l++){let u=s-bu[l],d=c-xu[l];if(u<0||d<0||u>=i||d>=a)continue;let f=d*i+u,p=e+this.edge(f,o,l);p<t[f]&&(t[f]=p,n[f]=o,r.push(p,f))}}}updateCells(e){let t=performance.now(),n=this.grid,r=n.w,i=n.h,{dist:a,next:o,mark:s,queue:c,goal:l,heap:u}=this,d=++this.stamp,f=0,p=e=>{s[e]!==d&&(s[e]=d,c[f++]=e)};for(let t of e){this.classify(t),p(t);let e=t%r,n=t/r|0;for(let t=0;t<8;t++){let a=e+bu[t],o=n+xu[t];a>=0&&o>=0&&a<r&&o<i&&p(o*r+a)}}for(let e=0;e<f;e++){let t=c[e],n=t%r,a=t/r|0;for(let e=0;e<8;e++){let s=n+bu[e],c=a+xu[e];if(s<0||c<0||s>=r||c>=i)continue;let l=c*r+s;o[l]===t&&p(l)}}for(let e=0;e<f;e++){let t=c[e];l[t]||(a[t]=1/0,o[t]=-1)}u.clear();for(let e=0;e<f;e++){let t=c[e];if(l[t])continue;let n=t%r,s=t/r|0,d=1/0,f=-1;for(let e=0;e<8;e++){let o=n+bu[e],c=s+xu[e];if(o<0||c<0||o>=r||c>=i)continue;let l=c*r+o;if(a[l]===1/0)continue;let u=a[l]+this.edge(t,l,e);u<d&&(d=u,f=l)}f>=0&&(a[t]=d,o[t]=f,u.push(d,t))}this.run();let m=performance.now()-t;this.localCount++,this.localMsTotal+=m,m>this.localMsMax&&(this.localMsMax=m),this.lastTouched=f}};function wu(e,t,n,r){if(n<t.start||n>=t.end)return 0;let i=(n-t.start)/(t.end-t.start),a=t.rate0+(t.rate1-t.rate0)*i,o=n-r;return o>=0&&o%e.surgeEvery<e.surgeLength&&(a*=e.surgeMult),n>=e.dawnStart&&n<e.dawnEnd&&(a*=e.dawnMult),a}var Tu=class{cellM;bw;bh;start;items;bucketOf;fillAt;constructor(e,t,n,r){this.cellM=n,this.bw=Math.ceil(e/n),this.bh=Math.ceil(t/n);let i=this.bw*this.bh;this.start=new Int32Array(i+1),this.fillAt=new Int32Array(i),this.items=new Int32Array(r),this.bucketOf=new Int32Array(r)}bucket(e,t){let n=Math.floor(e/this.cellM),r=Math.floor(t/this.cellM);return n<0?n=0:n>=this.bw&&(n=this.bw-1),r<0?r=0:r>=this.bh&&(r=this.bh-1),r*this.bw+n}build(e,t,n,r){let{start:i,fillAt:a,items:o,bucketOf:s}=this;i.fill(0);for(let a=0;a<e;a++){if(!t[a])continue;let e=this.bucket(n[a],r[a]);s[a]=e,i[e+1]++}for(let e=0;e<this.bw*this.bh;e++)i[e+1]+=i[e],a[e]=i[e];for(let n=0;n<e;n++)t[n]&&(o[a[s[n]]++]=n)}},Eu=1/30,Du=Xl.map(e=>Zl[e]),Ou=3,ku=.8,Au=.02,ju=.3,Mu=.35,Nu=.2,Pu=.06,Fu=1.6,Iu=1.5,Lu=3,Ru=.5,zu=Math.exp(-.3),Bu=class{grid;walk;climb;huntWalk=null;huntClimb=null;huntRadius;hunting;hash;rng;player;area;slotsBlockShots;lod;congestion;night;hordeScale;yard;invulnerable;autoFire;events;playerIframes;retargetEvery;iframeUntil=-1/0;lastRetarget=-1/0;coreTargeted=!0;coreCells;cap;count=0;alive;kind;x;z;hp;speed;radius;invMass;attackCd;vaultT;vaultFrom;vaultWall;armor;dmgMul;kbX;kbZ;swingT;hurtT;fleeing;moveX;moveZ;prevX;prevZ;freeList;freeN=0;candIdx;candKey;px;pz;playerHp;coreHp;fireCd=0;ringCd=0;lastShot=-1/0;surgePhase;dirtySlots=new Set;queueLive;slotX;slotZ;playerCell;t=0;steps=0;done=!1;m={survived:!1,endTime:0,cause:null,damageTaken:0,coreDamage:0,peakNear3m:0,wallHpLost:0,yardSeconds:0,yardZombieSeconds:0,firstBreach:-1,slotsDestroyed:0,kills:0,spawned:0,spawnDropped:0,peakAlive:0};constructor(e,t){this.grid=e.grid,this.yard=e.yard,this.rng=new hu(t.seed),this.player={...eu,...t.player},this.area=t.area??null,this.slotsBlockShots=t.slotsBlockShots??!1,this.lod=t.lod??!0,this.congestion=t.congestion??!0,this.night=t.night===void 0?null:t.night,this.hordeScale=t.hordeScale??1,this.invulnerable=t.invulnerable??!1,this.autoFire=t.autoFire??!0,this.events=t.events??{},this.playerIframes=t.playerIframes??0,this.retargetEvery=t.retargetEvery??.25,this.huntRadius=t.huntRadius??0,this.coreCells=e.coreCells,this.px=e.playerX,this.pz=e.playerZ,this.playerHp=this.player.hp,this.coreHp=e.coreCells.length>0?t.coreHp??1500:1/0,this.surgePhase=this.night?this.rng.range(0,this.night.surgeEvery):0;let n=this.cap=t.capacity??2e3;this.alive=new Uint8Array(n),this.kind=new Uint8Array(n),this.x=new Float64Array(n),this.z=new Float64Array(n),this.hp=new Float64Array(n),this.speed=new Float64Array(n),this.radius=new Float64Array(n),this.invMass=new Float64Array(n),this.attackCd=new Float64Array(n),this.vaultT=new Float64Array(n),this.vaultFrom=new Int32Array(n),this.vaultWall=new Int32Array(n),this.armor=new Float64Array(n),this.dmgMul=new Float64Array(n),this.kbX=new Float64Array(n),this.kbZ=new Float64Array(n),this.swingT=new Float64Array(n),this.hurtT=new Float64Array(n),this.fleeing=new Uint8Array(n),this.hunting=new Uint8Array(n),this.moveX=new Float64Array(n),this.moveZ=new Float64Array(n),this.prevX=new Float64Array(n),this.prevZ=new Float64Array(n),this.freeList=new Int32Array(n),this.candIdx=new Int32Array(n),this.candKey=new Float64Array(n);let r=this.grid,i=Zl.walker,a=Zl.runner;this.walk=new Cu(r,{speed:i.speed,wallDps:i.wallDamage/i.attackInterval,vaultTime:null,wallWeight:t.wallWeight}),this.climb=new Cu(r,{speed:a.speed,wallDps:a.wallDamage/a.attackInterval,vaultTime:a.vaultTime,wallWeight:t.wallWeight}),this.playerCell=r.cellAt(this.px,this.pz),this.huntRadius>0&&(this.huntWalk=new Cu(r,{speed:i.speed,wallDps:i.wallDamage/i.attackInterval,vaultTime:null,wallWeight:t.wallWeight}),this.huntClimb=new Cu(r,{speed:a.speed,wallDps:a.wallDamage/a.attackInterval,vaultTime:a.vaultTime,wallWeight:t.wallWeight})),this.regoal(),this.hash=new Tu(r.w*r.cell,r.h*r.cell,1,n),this.queueLive=new Float64Array(r.slots.length),this.slotX=new Float64Array(r.slots.length),this.slotZ=new Float64Array(r.slots.length);for(let e of r.slots)for(let t of e.cells)this.slotX[e.id]+=r.centreX(t)/e.cells.length,this.slotZ[e.id]+=r.centreZ(t)/e.cells.length}get aliveCount(){let e=0;for(let t=0;t<this.count;t++)e+=this.alive[t];return e}spawn(e,t,n,r=1,i){let a;if(this.freeN>0)a=this.freeList[--this.freeN];else if(this.count<this.cap)a=this.count++;else return-1;let o=Xl.indexOf(e),s=Du[o];return this.alive[a]=1,this.kind[a]=o,this.x[a]=this.prevX[a]=t,this.z[a]=this.prevZ[a]=n,this.hp[a]=s.hp,this.speed[a]=s.speed*r,this.radius[a]=s.radius,this.invMass[a]=1/s.mass,this.attackCd[a]=0,this.vaultT[a]=0,i?.hp!==void 0&&(this.hp[a]=i.hp),this.armor[a]=i?.armor??s.armor,this.dmgMul[a]=i?.dmgMul??1,this.kbX[a]=this.kbZ[a]=0,this.swingT[a]=this.hurtT[a]=-1/0,this.fleeing[a]=0,this.hunting[a]=0,this.m.spawned++,a}kill(e){this.events.death?.(e),this.alive[e]=0,this.freeList[this.freeN++]=e,this.m.kills++}damageZombie(e,t){this.alive[e]&&(this.hp[e]-=t,this.hp[e]<=0&&this.kill(e))}hitZombie(e,t,n=0,r=0,i=0){if(!this.alive[e])return 0;this.hurtT[e]=this.t;let a=this.invMass[e];if(this.kbX[e]+=n*a,this.kbZ[e]+=r*a,this.armor[e]>0){this.armor[e]-=t;let n=t*i;return n>0&&this.damageZombie(e,n),this.alive[e]?this.armor[e]<=0?(this.armor[e]=0,3):2:4}return this.damageZombie(e,t),this.alive[e]?1:4}setPlayer(e,t){this.px=e,this.pz=t;let n=this.grid.cellAt(e,t);n<0||n===this.playerCell||this.t-this.lastRetarget<this.retargetEvery||(this.playerCell=n,this.lastRetarget=this.t,this.regoal(!0))}get huntMode(){return this.huntWalk!==null&&this.coreTargeted}setCoreTargeted(e){e!==this.coreTargeted&&(this.coreTargeted=e,this.regoal())}regoal(e=!1){if(this.huntMode){for(let e of[this.huntWalk,this.huntClimb])e.setGoals([this.playerCell]),e.computeFull();if(e)return}let t=this.coreTargeted?this.huntWalk?[...this.coreCells]:[...this.coreCells,this.playerCell]:[this.playerCell];this.walk.setGoals(t),this.climb.setGoals(t),this.walk.computeFull(),this.climb.computeFull()}markSlot(e){this.dirtySlots.add(e),this.refreshFields()}repairSlot(e,t){let n=e.repair(t);return n>0&&this.dirtySlots.add(e),n}step(){if(!this.done){this.steps++,this.t=this.steps/30,this.night&&this.spawnWave(),this.hash.build(this.count,this.alive,this.x,this.z),this.updatePlayer(),this.think(),this.propose();for(let e=0;e<Ou;e++)this.separate();this.integrate(),this.congestion&&this.steps%Math.round(1/Eu)===0&&this.countQueues(),this.refreshFields(),this.measure()}}run(e=1/0){let t=this.night?this.night.duration:1/0,n=Math.min(e,t);for(;!this.done&&this.t<n-1e-9;)this.step();return!this.done&&this.t>=t-1e-9&&(this.done=!0,this.m.survived=!0,this.m.endTime=this.t),this.m}spawnWave(){let e=this.night;for(let t of e.streams){let n=wu(e,t,this.t,this.surgePhase)*this.hordeScale*Eu;if(n<=0)continue;let r=Math.floor(n+this.rng.next());for(let e=0;e<r;e++)this.spawnAtEdge(t.type)}}spawnAtEdge(e){let t=this.grid,n=t.w*t.cell;for(let r=0;r<8;r++){let r=this.rng.int(4),i=this.rng.range(1,n-1),a=this.rng.range(.6,1.6),o=r===0||r===1?i:r===2?a:n-a,s=r===0?a:r===1?n-a:i,c=t.cellAt(o,s);if(c<0||t.blocked(c))continue;let l=1+(this.rng.next()*2-1)*Ql;this.spawn(e,o,s,l)<0&&this.m.spawnDropped++;return}}updatePlayer(){if(!this.autoFire)return;let e=this.player,t=this.area;if(t?.ring&&(this.ringCd-=Eu,this.ringCd<=0)){this.ringCd+=t.ring.interval;let e=t.ring.radius*t.ring.radius;for(let n=0;n<this.count;n++){if(!this.alive[n])continue;let r=this.x[n]-this.px,i=this.z[n]-this.pz;r*r+i*i<=e&&this.damageZombie(n,t.ring.damage)}}if(this.fireCd-=Eu,this.fireCd<=0){let t=this.acquire();t>=0?(this.shoot(t),this.fireCd+=1/e.fireRate,this.lastShot=this.t):this.fireCd=0}if(e.repair&&this.t-this.lastShot>Ru){let t=null;for(let e of this.grid.slots)e.intact&&e.hp<e.maxHp&&(!t||e.hp/e.maxHp<t.hp/t.maxHp)&&(t=e);t&&(t.repair(e.repairRate*Eu),(t.hp-t.fieldHp>=.15*t.maxHp||t.hp>=t.maxHp)&&this.dirtySlots.add(t))}}acquire(){let e=this.player.range*this.player.range,t=this.candKey,n=0;for(let r=0;r<this.count;r++){if(!this.alive[r])continue;let i=this.x[r]-this.px,a=this.z[r]-this.pz,o=i*i+a*a;o<=e&&(this.candIdx[n++]=r,t[r]=o)}let r=this.candIdx.subarray(0,n).sort((e,n)=>t[e]-t[n]||e-n);for(let e=0;e<n;e++){let n=r[e],i=Math.sqrt(t[n]);if(i<1e-6)return n;let a=(this.x[n]-this.px)/i,o=(this.z[n]-this.pz)/i;if(this.grid.rayClear(this.px,this.pz,a,o,i,this.slotsBlockShots)>=i-1e-6)return n}return-1}shoot(e){let t=this.player,n=this.area?.pierce;if(!n){this.damageZombie(e,t.damage);return}let r=this.x[e]-this.px,i=this.z[e]-this.pz,a=Math.hypot(r,i)||1,o=r/a,s=i/a,c=this.grid.rayClear(this.px,this.pz,o,s,t.range,this.slotsBlockShots),l=0;for(let t=0;t<this.count;t++){if(!this.alive[t])continue;let r=this.x[t]-this.px,i=this.z[t]-this.pz,a=r*o+i*s;if(!(a<=0||a>c)&&!(Math.abs(r*s-i*o)>n.width+this.radius[t]&&t!==e)){if(t!==e){let e=Math.hypot(r,i);if(this.grid.rayClear(this.px,this.pz,r/e,i/e,e,this.slotsBlockShots)<e-1e-6)continue}this.candIdx[l]=t,this.candKey[l++]=a}}let u=t.damage;for(let e=0;e<=n.extra&&e<l;e++){let e=-1,t=1/0;for(let n=0;n<l;n++)this.candKey[n]<t&&(t=this.candKey[n],e=n);if(e<0)break;this.candKey[e]=1/0,this.damageZombie(this.candIdx[e],u),u*=n.falloff}}think(){let e=this.grid,t=e.cell,n=this.player.radius;for(let r=0;r<this.count;r++){if(this.moveX[r]=0,this.moveZ[r]=0,!this.alive[r])continue;let i=this.x[r],a=this.z[r],o=this.px-i,s=this.pz-a,c=o*o+s*s,l=Eu;if(this.lod&&c>400){if((this.steps+r)%3!=0)continue;l=Eu*3}let u=Du[this.kind[r]],d=this.radius[r];if(this.attackCd[r]-=l,this.vaultT[r]>0){this.vaultT[r]-=l,this.vaultT[r]<=0&&this.land(r);continue}if(this.fleeing[r]){let n=e.cellAt(i,a),o=n<0||!this.flee?-1:this.flee.next[n];if(o>=0&&e.blocked(o)&&e.slotAt(o)){let s=o%e.w*t,c=(o/e.w|0)*t,l=i<s?s:i>s+t?s+t:i,u=a<c?c:a>c+t?c+t:a;if((i-l)*(i-l)+(a-u)*(a-u)<=(d+Pu)*(d+Pu)){this.vaultT[r]=Fu,this.vaultFrom[r]=n,this.vaultWall[r]=o;continue}}o>=0?this.steer(r,o%e.w*t+t*.5,(o/e.w|0)*t+t*.5,l):this.steer(r,i<e.w*t*.5?i-1:i+1,a,l);continue}let f=Math.sqrt(c);if(f<=d+n+this.player.reach){this.attackCd[r]<=0&&(this.attackCd[r]=u.attackInterval,this.swingT[r]=this.t,this.events.swing?.(r,`player`),this.hitPlayer(u.playerDamage*this.dmgMul[r],r));continue}let p=e.cellAt(i,a);if(p<0)continue;this.huntMode&&(f<this.huntRadius?this.hunting[r]=1:f>this.huntRadius+Lu&&(this.hunting[r]=0));let m=this.huntMode&&this.hunting[r]===1,h=u.climbs?m?this.huntClimb:this.climb:m?this.huntWalk:this.walk;if((f<Iu||p===this.playerCell)&&(f<1e-6||e.walkClear(i,a,o/f,s/f,f)>=f-1e-6)){this.steer(r,this.px,this.pz,l);continue}let g=h.next[p];if(g<0)continue;let _=g%e.w*t,v=(g/e.w|0)*t;if(e.blocked(g)){let n=i<_?_:i>_+t?_+t:i,o=a<v?v:a>v+t?v+t:a;if((i-n)*(i-n)+(a-o)*(a-o)<=(d+Pu)*(d+Pu)){if(e.type[g]===3)this.attackCd[r]<=0&&(this.attackCd[r]=u.attackInterval,this.swingT[r]=this.t,this.events.swing?.(r,`core`),this.hitCore(u.wallDamage*this.dmgMul[r]));else{let t=e.slotAt(g);if(u.climbs&&t.low){this.vaultT[r]=u.vaultTime,this.vaultFrom[r]=p,this.vaultWall[r]=g;continue}this.attackCd[r]<=0&&(this.attackCd[r]=u.attackInterval,this.swingT[r]=this.t,this.events.swing?.(r,`slot`),this.hitSlot(t,u.wallDamage*this.dmgMul[r]))}}}this.steer(r,_+t*.5,v+t*.5,l)}}steer(e,t,n,r){let i=t-this.x[e],a=n-this.z[e],o=Math.hypot(i,a);if(o<1e-9)return;let s=this.speed[e]*r/o*this.crowdFactor(e,i/o,a/o);this.moveX[e]=i*s,this.moveZ[e]=a*s}crowdFactor(e,t,n){let r=this.hash,i=r.bucketOf[e],a=i%r.bw,o=i/r.bw|0,s=this.x[e],c=this.z[e],l=this.radius[e];for(let i=-1;i<=1;i++){let u=o+i;if(!(u<0||u>=r.bh))for(let i=-1;i<=1;i++){let o=a+i;if(o<0||o>=r.bw)continue;let d=u*r.bw+o;for(let i=r.start[d];i<r.start[d+1];i++){let a=r.items[i];if(a===e||!this.alive[a])continue;let o=this.x[a]-s,u=this.z[a]-c,d=l+this.radius[a]+Au,f=o*o+u*u;if(!(f>=d*d)&&o*t+u*n>.5*Math.sqrt(f))return ju}}}return 1}land(e){let t=this.grid,n=this.vaultFrom[e],r=this.vaultWall[e],i=2*t.cx(r)-t.cx(n),a=2*t.cz(r)-t.cz(n),o=t.inside(i,a)?t.idx(i,a):-1;(o<0||t.blocked(o))&&(o=this.climb.next[r]),!(o<0||t.blocked(o))&&(this.x[e]=t.centreX(o),this.z[e]=t.centreZ(o))}buildSlot(e,t,n=1){if(t!==null){let t=this.grid,n=t.cell;for(let r=0;r<this.count;r++){if(!this.alive[r])continue;let i=this.radius[r];for(let a of e.cells){let e=t.cx(a)*n,o=t.cz(a)*n,s=Math.min(Math.max(this.x[r],e),e+n),c=Math.min(Math.max(this.z[r],o),o+n);if((this.x[r]-s)**2+(this.z[r]-c)**2<i*i)return!1}}}return e.build(t),n!==1&&t!==null&&(e.maxHp*=n,e.hp=e.maxHp),this.dirtySlots.add(e),this.refreshFields(),!0}clearZombies(){let e=0;for(let t=0;t<this.count;t++)this.alive[t]&&(this.despawn(t),e++);return e}despawn(e){this.alive[e]&&(this.alive[e]=0,this.freeList[this.freeN++]=e)}fleeAll(){if(!this.flee){let e=this.grid,t=Zl.walker;this.flee=new Cu(e,{speed:t.speed,wallDps:t.wallDamage/t.attackInterval,vaultTime:null});let n=[];for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++)(r===0||t===0||r===e.w-1||t===e.h-1)&&e.type[e.idx(r,t)]!==1&&n.push(e.idx(r,t));this.flee.setGoals(n),this.flee.computeFull()}let e=0;for(let t=0;t<this.count;t++)this.alive[t]&&!this.fleeing[t]&&(this.fleeing[t]=1,this.vaultT[t]=0,e++);return e}flee=null;hitPlayer(e,t){this.done||this.t<this.iframeUntil||(this.iframeUntil=this.t+this.playerIframes,this.m.damageTaken+=e,this.events.playerHit?.(e,t),!this.invulnerable&&(this.playerHp-=e,this.playerHp<=0&&this.finish(`player`)))}hitCore(e){this.done||(this.coreHp-=e,this.m.coreDamage+=e,this.coreHp<=0&&!this.invulnerable&&this.finish(`core`))}hitSlot(e,t){let n=e.damage(t);this.m.wallHpLost+=n,e.intact?e.fieldHp-e.hp>=.15*e.maxHp&&this.dirtySlots.add(e):(this.m.slotsDestroyed++,this.events.slotBroken?.(e),this.m.firstBreach<0&&(this.m.firstBreach=this.t),this.dirtySlots.add(e))}finish(e){this.done=!0,this.m.survived=!1,this.m.cause=e,this.m.endTime=this.t}propose(){for(let e=0;e<this.count;e++)this.alive[e]&&(this.prevX[e]=this.x[e],this.prevZ[e]=this.z[e],this.x[e]+=this.moveX[e],this.z[e]+=this.moveZ[e],(this.kbX[e]!==0||this.kbZ[e]!==0)&&(this.x[e]+=this.kbX[e]*Eu,this.z[e]+=this.kbZ[e]*Eu,this.kbX[e]*=zu,this.kbZ[e]*=zu,Math.abs(this.kbX[e])+Math.abs(this.kbZ[e])<.02&&(this.kbX[e]=this.kbZ[e]=0)))}separate(){let{hash:e,alive:t}=this,n=e.bw,r=e.bh,i=e.start,a=e.items;for(let e=0;e<r;e++)for(let o=0;o<n;o++){let s=e*n+o,c=i[s],l=i[s+1];if(c!==l)for(let s=c;s<l;s++){let c=a[s];if(t[c]){for(let e=s+1;e<l;e++)this.pair(c,a[e]);for(let t=0;t<4;t++){let s=o+(t===0?1:t===1?-1:t===2?0:1),l=e+(t===0?0:1);if(s<0||s>=n||l>=r)continue;let u=l*n+s;for(let e=i[u];e<i[u+1];e++)this.pair(c,a[e])}}}}}pair(e,t){if(!this.alive[t])return;let n=this.x,r=this.z,i=n[t]-n[e],a=r[t]-r[e],o=this.radius[e]+this.radius[t],s=i*i+a*a;if(s>=o*o)return;let c=this.vaultT[e]>0?0:this.invMass[e],l=this.vaultT[t]>0?0:this.invMass[t];if(c+l===0)return;let u=Math.sqrt(s);if(u<1e-6){let n=((e*73856093^t*19349663)>>>0)%628;i=Math.cos(n/100),a=Math.sin(n/100),u=1}let d=(o-Math.sqrt(s))*ku/u,f=c/(c+l);n[e]-=i*d*f,r[e]-=a*d*f,n[t]+=i*d*(1-f),r[t]+=a*d*(1-f)}integrate(){let e=this.grid,t=e.w*e.cell,n=this.player.radius;for(let e=0;e<this.count;e++){if(!this.alive[e])continue;let r=this.x[e]-this.prevX[e],i=this.z[e]-this.prevZ[e];if(this.x[e]=this.prevX[e],this.z[e]=this.prevZ[e],this.vaultT[e]>0)continue;let a=Math.hypot(r,i);if(a<1e-9)continue;a>Mu&&(r*=Mu/a,i*=Mu/a,a=Mu);let o=Math.ceil(a/Nu),s=this.radius[e];for(let a=0;a<o;a++){let a=this.x[e]+r/o,c=this.z[e]+i/o,l=a-this.px,u=c-this.pz,d=l*l+u*u,f=s+n;if(d<f*f&&d>1e-12){let e=Math.sqrt(d);a=this.px+l/e*f,c=this.pz+u/e*f}a<s?a=s:a>t-s&&(a=t-s),c<s?c=s:c>t-s&&(c=t-s),this.x[e]=a,this.z[e]=c,this.collide(e)}}}collide(e){let t=this.grid,n=t.cell,r=this.radius[e],i=this.x[e],a=this.z[e],o=Math.max(0,Math.floor((i-r)/n)),s=Math.min(t.w-1,Math.floor((i+r)/n)),c=Math.max(0,Math.floor((a-r)/n)),l=Math.min(t.h-1,Math.floor((a+r)/n));for(let e=c;e<=l;e++)for(let c=o;c<=s;c++){let o=e*t.w+c;if(!t.blocked(o))continue;let s=c*n,l=e*n,u=i<s?s:i>s+n?s+n:i,d=a<l?l:a>l+n?l+n:a,f=i-u,p=a-d,m=f*f+p*p;if(!(m>=r*r)){if(m>1e-12){let e=Math.sqrt(m);i=u+f/e*r,a=d+p/e*r}else{let o=[{pen:i-s,nx:-1,nz:0},{pen:s+n-i,nx:1,nz:0},{pen:a-l,nx:0,nz:-1},{pen:l+n-a,nx:0,nz:1}],u=o[0],d=1/0;for(let n of o){let r=c+n.nx,i=e+n.nz,a=t.inside(r,i)&&!t.blocked(i*t.w+r),o=n.pen+(a?0:1e3);o<d&&(d=o,u=n)}i+=u.nx*(u.pen+r),a+=u.nz*(u.pen+r)}}}this.x[e]=i,this.z[e]=a}countQueues(){let e=this.grid,t=this.walk.dist;for(let n of e.slots){let r=1/0;for(let e of n.cells)r=Math.min(r,t[e]);let i=4+n.widthM/2,a=i*i,o=this.slotX[n.id],s=this.slotZ[n.id],c=0;for(let n=0;n<this.count;n++){if(!this.alive[n])continue;let i=this.x[n]-o,l=this.z[n]-s;if(i*i+l*l>a)continue;let u=e.cellAt(this.x[n],this.z[n]);u>=0&&t[u]>r&&c++}let l=c/(1*n.widthM);this.queueLive[n.id]=l,Math.abs(l-n.fieldQueue)>=Math.max(3,.25*n.fieldQueue)&&this.dirtySlots.add(n)}}refreshFields(){if(this.dirtySlots.size===0)return;let e=[];for(let t of this.dirtySlots){t.fieldHp=t.intact?t.hp:0,this.congestion&&(t.fieldQueue=this.queueLive[t.id]);for(let n of t.cells)e.push(n)}this.dirtySlots.clear(),this.walk.updateCells(e),this.climb.updateCells(e),this.huntWalk?.updateCells(e),this.huntClimb?.updateCells(e),this.flee?.updateCells(e)}measure(){let e=0,t=0,n=0;for(let r=0;r<this.count;r++){if(!this.alive[r])continue;e++;let i=this.x[r]-this.px,a=this.z[r]-this.pz;i*i+a*a<=9&&t++;let o=this.grid.cellAt(this.x[r],this.z[r]);o>=0&&this.yard[o]&&n++}let r=this.m;e>r.peakAlive&&(r.peakAlive=e),t>r.peakNear3m&&(r.peakNear3m=t),n>0&&(r.yardSeconds+=Eu),r.yardZombieSeconds+=n*Eu}digest(){let e=2166136261,t=t=>{let n=Math.round(t*1e6);e=Math.imul(e^n&65535,16777619)>>>0,e=Math.imul(e^n>>>16&65535,16777619)>>>0};for(let e=0;e<this.count;e++)t(this.alive[e]),this.alive[e]&&(t(this.x[e]),t(this.z[e]),t(this.hp[e]));for(let e of this.grid.slots)t(e.hp);return t(this.playerHp),t(this.coreHp),e.toString(16)}},Vu={hp:100,speed:4.2,radius:.32,damageTaken:.72,iframes:.4,pickupRadius:1.4,interactRadius:1.4,muzzleHeight:1},Hu=e=>({pierce:0,carry:1,...e}),Uu={pistol:Hu({id:`pistol`,name:`手枪`,slot:`secondary`,blurb:`随身带的老伙计`,damage:12.5,cooldown:.36,mag:8,magStep:2,spread:.03,reload:1.45,pellets:1,auto:!1,range:14,recoil:.12,aimTime:.8,focusKick:.28,knockback:1.6,ammoYield:18,minNight:1,price:0}),revolver:Hu({id:`revolver`,name:`左轮`,slot:`secondary`,blurb:`一枪一个，子弹能穿过第一只`,damage:30,cooldown:.55,mag:6,magStep:1,spread:.022,reload:2.2,pellets:1,auto:!1,range:15,recoil:.26,aimTime:.9,focusKick:.42,knockback:2.6,pierce:1,ammoYield:12,minNight:2,price:180}),smg:Hu({id:`smg`,name:`冲锋枪`,slot:`secondary`,blurb:`射得快，近处扫一片`,damage:8.2,cooldown:.1,mag:24,magStep:4,spread:.07,reload:1.75,pellets:1,auto:!0,range:12,recoil:.05,aimTime:.9,focusKick:.07,knockback:.7,ammoYield:30,minNight:2,price:260}),shotgun:Hu({id:`shotgun`,name:`霰弹枪`,slot:`primary`,blurb:`堵门神器，近处一枪倒一排`,damage:7.2,cooldown:.72,mag:6,magStep:1,spread:.24,reload:2.15,pellets:7,auto:!1,range:7.5,recoil:.2,aimTime:.55,focusKick:.5,knockback:1.1,ammoYield:14,minNight:2,price:240}),rifle:Hu({id:`rifle`,name:`突击步枪`,slot:`primary`,blurb:`又准又快，什么夜都能打`,damage:13.5,cooldown:.12,mag:30,magStep:5,spread:.035,reload:1.9,pellets:1,auto:!0,range:16,recoil:.06,aimTime:1.2,focusKick:.09,knockback:1,ammoYield:34,minNight:4,price:480}),sniper:Hu({id:`sniper`,name:`狙击枪`,slot:`primary`,blurb:`打得最远，一发穿一串`,damage:62,cooldown:1.1,mag:5,magStep:1,spread:.008,reload:2.6,pellets:1,auto:!1,range:24,recoil:.4,aimTime:1.6,focusKick:.7,knockback:3.5,pierce:3,ammoYield:10,minNight:4,price:560}),lmg:Hu({id:`lmg`,name:`轻机枪`,slot:`primary`,blurb:`弹匣大到打不完，就是沉`,damage:11,cooldown:.085,mag:60,magStep:10,spread:.09,reload:3.4,pellets:1,auto:!0,range:15,recoil:.04,aimTime:1.4,focusKick:.05,knockback:1,carry:.82,ammoYield:45,minNight:5,price:760})},Wu=[`pistol`,`revolver`,`smg`,`shotgun`,`rifle`,`sniper`,`lmg`],Gu=[`shotgun`,`smg`,`rifle`],Ku=.75,qu={fists:{id:`fists`,name:`推开`,blurb:`把贴脸的推开`,damage:12,cooldown:.92,reach:1.3,arc:1.1,knockback:4.5,armorPierce:.45,minNight:1,price:0},bat:{id:`bat`,name:`棒球棍`,blurb:`一挥一片，打得远`,damage:22,cooldown:.8,reach:1.55,arc:1.2,knockback:5.5,armorPierce:.45,minNight:1,price:90},machete:{id:`machete`,name:`砍刀`,blurb:`出手快，砍得深`,damage:38,cooldown:.55,reach:1.4,arc:.95,knockback:2.4,armorPierce:.5,minNight:2,price:160},axe:{id:`axe`,name:`消防斧`,blurb:`慢，但劈得开防弹衣`,damage:75,cooldown:1.15,reach:1.6,arc:1,knockback:4,armorPierce:.9,minNight:3,price:320}},Ju=[`fists`,`bat`,`machete`,`axe`],Yu={molotov:{id:`molotov`,name:`燃烧瓶`,blurb:`烧出一片火，走进去的都着`,price:40,minNight:1,cap:5},grenade:{id:`grenade`,name:`手雷`,blurb:`落地一秒后炸，别站太近`,price:60,minNight:2,cap:5}},Xu=[`molotov`,`grenade`],Zu={range:11,speed:15,cooldown:.8,apex:2.2},Qu={fuse:.9,radius:3.4,damage:130,edge:.35,knockback:9,armorPierce:.6,selfDamage:34},$u={radius:2.3,seconds:6.5,tick:.5,damage:11,playerDamage:5},ed=3.4,td={walkSpeed:.5,movingCap:.55,movingGain:.4,turnLoss:.9,turnFree:.02,hipDecay:2.5,hitLoss:.45},nd={base:.04,focused:.3,mult:2.6},rd=1.3,id=.75,ad=1.8,od={ammo:{name:`弹药`,amount:30,price:35},medkit:{name:`医疗包`,price:50}},sd={walker:3,runner:4,brute:15,police:6},cd=e=>25+10*e,ld={power:{name:`枪械威力`,desc:`当前武器伤害 +22%`,base:18,step:16,max:3},magazine:{name:`扩容弹匣`,desc:`当前武器弹匣扩容`,base:16,step:14,max:3},reload:{name:`快速换弹`,desc:`当前武器换弹时间 ×0.87`,base:16,step:14,max:3},vitality:{name:`体能`,desc:`生命上限 +25`,base:22,step:24,max:3},walls:{name:`加固路障`,desc:`新建路障耐久 +25%`,base:30,step:30,max:3}},ud=[`power`,`magazine`,`reload`],dd={planks:{kind:`planks`,name:`木板路障`,cost:12},vending:{kind:`vending`,name:`铁板路障`,cost:28}},fd={cost:6,share:.25,seconds:1.6},pd=1.2,md={salvage:30,ammo:60,medkits:1},hd={salvage:200,ammo:160,medkits:4},gd={ammo:e=>6+e,medkit:18},_d={car:2.4,dumpster:2,crate:1.8,locker:1.5,shelf:1.5},vd={car:{salvage:[4,8],ammoChance:.6,ammo:[8,14],medkitChance:.1,weaponChance:.22},dumpster:{salvage:[3,7],ammoChance:.3,ammo:[4,8],medkitChance:.06,weaponChance:.1},crate:{salvage:[5,9],ammoChance:.55,ammo:[8,12],medkitChance:.08,weaponChance:.16},locker:{salvage:[2,4],ammoChance:.4,ammo:[4,8],medkitChance:.15,weaponChance:0},shelf:{salvage:[2,5],ammoChance:.3,ammo:[3,6],medkitChance:.1,weaponChance:0}},yd={walker:.2,runner:.27,brute:.48,police:.38},bd={walker:21,runner:16,brute:80,police:30},xd={walker:6,runner:5,brute:14,police:7.5};function Sd(e,t,n){return{hp:bd[e]+1.6*t,armor:e===`police`?42+Math.min(24,3.5*t):0,speedScale:(e===`runner`?.78:1)*(.88+n()*.24)*(1+Math.min(.7,.026*t)),dmgMul:(xd[e]+Math.floor(.8*(t-1)))/xd[e]}}function Cd(e,t,n=wd[0]){let r=t();return e>=3&&r<.08+Math.min(.08,.01*e)+n.brutes?`brute`:e>=3&&r>.86-Math.min(.1,.012*e)?`police`:e>=2&&r<.3+Math.min(.15,.02*e)+n.runners?`runner`:`walker`}var wd=[{id:`normal`,name:`普通尸群`,forecast:`平常的一夜`,count:1,spawn:1,speed:1,hp:1,runners:0,brutes:0},{id:`fast`,name:`快速尸群`,forecast:`跑者变多，所有丧尸更快`,count:1.08,spawn:.88,speed:1.16,hp:1,runners:.18,brutes:0},{id:`storm`,name:`雷暴停电`,forecast:`路灯全灭，只有闪电和手电`,count:1.06,spawn:.96,speed:1.04,hp:1.08,runners:0,brutes:0},{id:`strong`,name:`强壮感染者`,forecast:`丧尸更耐打，大块头变多`,count:1,spawn:1.08,speed:.96,hp:1.25,runners:0,brutes:.14},{id:`dense`,name:`密集尸群`,forecast:`数量多三成，多封几道墙`,count:1.34,spawn:.72,speed:1.08,hp:1.05,runners:0,brutes:0},{id:`fog`,name:`浓雾`,forecast:`雾里只看得见十几米`,count:1.15,spawn:.86,speed:1.02,hp:1.08,runners:0,brutes:0}];function Td(e){return wd[(e-1)%wd.length]}var Ed=[4.2,9];function Dd(e){return e===1?120:Math.max(70,95-2*e)}function Od(e,t){return(.2+.1*(e-1))*(t?2.6:.8)}function kd(e){return Math.min(320,40+22*(e-1))}var Ad={calm:[18,28],surge:[7,12],first:[14,24]},jd=1/30,Md=45,Nd=8,Pd=.12,Fd=Object.fromEntries(Object.entries($l).map(([e,t])=>[e,t.hpPerMetre])),Id=120;function Ld(e=0,t=0){return{moveX:0,moveZ:0,aimX:e,aimZ:t,fire:!1,aiming:!1,firePressed:!1,repeat:!1,reload:!1,interact:!1,interactAlt:!1,melee:!1,medkit:!1,weaponSlot:0,cycleWeapon:0,throw:!1,throwX:e,throwZ:t,startNight:!1}}var Rd=.6,zd=Object.fromEntries(Xl.map((e,t)=>[e,t])),Bd=class{map;world;rand;phase=`day`;day=1;clock;t=0;px;pz;hp=Vu.hp;aim=Math.PI;moving=!1;hurtT=-1/0;meleeT=-1/0;meleeCd=0;owned=[`pistol`];primary=null;secondary=`pistol`;weapon=`pistol`;mag=Object.fromEntries(Wu.map(e=>[e,e===`pistol`?Uu.pistol.mag:0]));levels=Object.fromEntries(Wu.map(e=>[e,{power:0,magazine:0,reload:0}]));melee=`fists`;ownedMelee=[`fists`];throwables={grenade:0,molotov:0};throwSel=`molotov`;thrown=[];flames=[];throwT=-1/0;throwCd=0;money=40;vitality=0;wallsLevel=0;reloadT=0;fireCd=0;recoil=0;shotT=-1/0;wasFiring=!1;focus=0;aimingNow=!1;stock={...md};charges;weaponFoundToday=!1;action=null;focusOn=null;bullets=[];drops=[];corpses=[];fx=[];toasts=[];vestBroken;surge=!1;surgeLeft=0;spawnAcc=0;stragglerCd=11;dryKills=0;report;lastReport=null;overCause=null;kills=0;constructor(e,t=1){this.map=e,this.rand=new hu(t);for(let t of e.layout.grid.slots)t.build(null);this.world=new Bu(e.layout,{seed:t+1,night:null,autoFire:!1,coreHp:800,playerIframes:Vu.iframes,player:{radius:Vu.radius,hp:1/0},capacity:600,huntRadius:Nd,wallWeight:Pd,events:{death:e=>this.onDeath(e),swing:(e,t)=>this.fx.push({kind:`swing`,x:this.world.x[e],z:this.world.z[e],target:t}),playerHit:e=>this.onPlayerHit(e),slotBroken:e=>{let t=this.map.slots.find(t=>t.slot===e);this.toast(`${t.label}被突破了`,`bad`),this.fx.push({kind:`wallBreak`,x:(t.x0+t.x1)/2,z:(t.z0+t.z1)/2}),this.report.wallsLost++}}}),this.vestBroken=new Uint8Array(this.world.cap),this.px=e.layout.playerX,this.pz=e.layout.playerZ,this.charges=e.containers.map(()=>1),this.clock=Dd(1),this.world.setCoreTargeted(!1),this.report=this.freshReport(),this.toast(`第 1 天：天黑前搜刮物资、封好缺口　今夜：${this.tonight.name}`,`info`),this.checkpoint=this.snapshot()}get night(){return this.day}get maxHp(){return Vu.hp+25*this.vitality}get refugeHp(){return this.world.coreHp}get refugeMax(){return 800}get darkness(){if(this.phase===`night`)return 1;if(this.phase===`over`)return this.overDark;if(this.phase===`dawn`){let e=Math.min(1,this.dawnT/9);return 1-e*e*(3-2*e)}return this.clock<8?1-this.clock/8:0}magSize(e){return Uu[e].mag+Uu[e].magStep*this.levels[e].magazine}damageOf(e){return Uu[e].damage*(1+.22*this.levels[e].power)}reloadOf(e){return Uu[e].reload*.87**this.levels[e].reload}startReload(){let e=this.weapon;this.reloadT>0||this.mag[e]>=this.magSize(e)||this.stock.ammo<=0||(this.reloadT=this.reloadOf(e),this.fx.push({kind:`reload`,weapon:e}))}finishReload(){let e=this.weapon,t=this.magSize(e)-this.mag[e],n=Math.min(t,this.stock.ammo);this.mag[e]+=n,this.stock.ammo-=n}switchTo(e){e!==this.weapon&&this.owned.includes(e)&&(this.weapon=e,this.fx.push({kind:`switch`,weapon:e}),this.reloadT=0,this.fireCd=Math.max(this.fireCd,.25))}setGun(e){Uu[e].slot===`primary`?this.primary=e:this.secondary=e,this.switchTo(e)}get otherGun(){return this.primary?this.weapon===this.primary?this.secondary:this.primary:null}get throwKind(){return this.throwables[this.throwSel]>0?this.throwSel:Xu.find(e=>this.throwables[e]>0)??null}throwAt(e,t){let n=this.throwKind;if(!n||this.throwCd>0)return;let r=e-this.px,i=t-this.pz,a=Math.hypot(r,i);a<.5?(r=Math.sin(this.aim),i=Math.cos(this.aim),a=4):(r/=a,i/=a),a=Math.min(a,Zu.range);let o=this.world.grid.rayClear(this.px,this.pz,r,i,a,!1),s=o<a-1e-6?Math.max(.5,o-.3):a;this.throwables[n]--,this.thrown.push({kind:n,x0:this.px,z0:this.pz,x1:this.px+r*s,z1:this.pz+i*s,t:0,flight:Math.max(.3,s/Zu.speed),fuse:Qu.fuse}),this.throwCd=Zu.cooldown,this.throwT=this.t,this.aim=Math.atan2(r,i),this.fx.push({kind:`throw`,x:this.px,z:this.pz,item:n})}stepThrown(){for(let e=this.thrown.length-1;e>=0;e--){let t=this.thrown[e],n=t.t;t.t+=jd,!(t.t<t.flight)&&(n<t.flight&&t.kind===`grenade`&&this.fx.push({kind:`land`,x:t.x1,z:t.z1}),t.kind===`molotov`?(this.flames.push({x:t.x1,z:t.z1,t:0,tick:0}),this.fx.push({kind:`ignite`,x:t.x1,z:t.z1}),this.thrown.splice(e,1)):(t.fuse-=jd,!(t.fuse>0)&&(this.explode(t.x1,t.z1),this.thrown.splice(e,1))))}}blastReaches(e,t,n,r,i){return i<.3||this.world.grid.rayClear(e,t,(n-e)/i,(r-t)/i,i,!1)>=i-1e-6}explode(e,t){let n=this.world,r=Qu.radius;for(let i=0;i<n.count;i++){if(!n.alive[i])continue;let a=n.x[i]-e,o=n.z[i]-t,s=Math.hypot(a,o);if(s>r+n.radius[i]||!this.blastReaches(e,t,n.x[i],n.z[i],s))continue;let c=1-(1-Qu.edge)*Math.min(1,s/r),l=s>.001?a/s:0,u=s>.001?o/s:0,d=n.x[i],f=n.z[i],p=n.hitZombie(i,Qu.damage*c,l*Qu.knockback*c,u*Qu.knockback*c,Qu.armorPierce);this.hitFx(i,p,d,f,l,u,!1)}let i=Math.hypot(this.px-e,this.pz-t);i<r&&this.blastReaches(e,t,this.px,this.pz,i)&&this.onPlayerHit(Qu.selfDamage*(1-(1-Qu.edge)*(i/r))),this.fx.push({kind:`explode`,x:e,z:t})}stepFlames(){let e=this.world;for(let t=this.flames.length-1;t>=0;t--){let n=this.flames[t];if(n.t+=jd,n.t>$u.seconds){this.flames.splice(t,1);continue}if(n.tick-=jd,n.tick>0)continue;n.tick+=$u.tick;for(let t=0;t<e.count;t++){if(!e.alive[t])continue;let r=e.x[t]-n.x,i=e.z[t]-n.z,a=Math.hypot(r,i);a>$u.radius+e.radius[t]||!this.blastReaches(n.x,n.z,e.x[t],e.z[t],a)||(this.fx.push({kind:`burn`,x:e.x[t],z:e.z[t]}),e.hitZombie(t,$u.damage,0,0,1))}let r=Math.hypot(this.px-n.x,this.pz-n.z);r<$u.radius&&this.blastReaches(n.x,n.z,this.px,this.pz,r)&&this.onPlayerHit($u.playerDamage)}}fire(){let e=Uu[this.weapon];this.mag[this.weapon]--,this.fireCd=e.cooldown,this.shotT=this.t;let t=this.spreadNow(),n=this.focus;this.recoil=Math.min(id,this.recoil+e.recoil),this.focus=Math.max(0,this.focus-e.focusKick);let r=this.damageOf(this.weapon),i=this.px+Math.sin(this.aim)*.45,a=this.pz+Math.cos(this.aim)*.45;for(let o=0;o<e.pellets;o++){let o=this.aim+(this.rand.next()-.5)*t;this.bullets.push({x:i,z:a,dx:Math.sin(o),dz:Math.cos(o),left:e.range*(.9+this.rand.next()*.2),damage:r,knockback:e.knockback,ox:i,oz:a,focus:n,pierce:e.pierce,hit:[]})}this.fx.push({kind:`muzzle`,x:i,z:a,aim:this.aim,weapon:this.weapon}),this.mag[this.weapon]<=0&&this.startReload()}spreadNow(){let e=Uu[this.weapon],t=ed-(ed-1)*this.focus;return e.spread*t*(this.moving?rd:1)*(1+this.recoil)}stepFocus(e,t){let n=Uu[this.weapon];if(this.aimingNow=e.aiming&&!this.action,this.aimingNow){let e=jd/n.aimTime*(this.moving?td.movingGain:1),t=this.moving?td.movingCap:1;this.focus=this.focus<t?Math.min(t,this.focus+e):Math.max(t,this.focus-1.5*jd)}else this.focus=Math.max(0,this.focus-td.hipDecay*jd);let r=Math.abs(this.aim-t);r>Math.PI&&(r=Math.PI*2-r),r>td.turnFree&&(this.focus=Math.max(0,this.focus-(r-td.turnFree)*td.turnLoss))}stepBullets(){let e=this.world.grid,t=42*jd;for(let n=this.bullets.length-1;n>=0;n--){let r=this.bullets[n],i=Math.min(t,r.left);for(;;){let t=e.rayClear(r.x,r.z,r.dx,r.dz,i,!1),a=this.firstZombieOnSegment(r.x,r.z,r.dx,r.dz,t,r.hit);if(a.i>=0){if(this.bulletHits(a.i,r),r.pierce<=0){this.bullets.splice(n,1);break}r.pierce--,r.damage*=Ku,r.hit.push(a.i),r.x+=r.dx*a.t,r.z+=r.dz*a.t,r.left-=a.t,i-=a.t}else{r.x+=r.dx*t,r.z+=r.dz*t,r.left-=t,t<i-1e-6?(this.fx.push({kind:`spark`,x:r.x,z:r.z}),this.bullets.splice(n,1)):r.left<=1e-6&&this.bullets.splice(n,1);break}}}}hitAssist=0;firstZombieOnSegment(e,t,n,r,i,a=[]){let o=this.world,s=o.hash,c=.6,l=Math.max(0,Math.floor((Math.min(e,e+n*i)-c)/s.cellM)),u=Math.min(s.bw-1,Math.floor((Math.max(e,e+n*i)+c)/s.cellM)),d=Math.max(0,Math.floor((Math.min(t,t+r*i)-c)/s.cellM)),f=Math.min(s.bh-1,Math.floor((Math.max(t,t+r*i)+c)/s.cellM)),p=-1,m=1/0;for(let c=d;c<=f;c++)for(let d=l;d<=u;d++){let l=c*s.bw+d;for(let c=s.start[l];c<s.start[l+1];c++){let l=s.items[c];if(!o.alive[l]||a.includes(l))continue;let u=o.radius[l]+.06+this.hitAssist,d=o.x[l]-e,f=o.z[l]-t,h=d*n+f*r;if(h<-u||h>i+u)continue;let g=d*d+f*f-h*h;if(g>u*u)continue;let _=Math.max(0,h-Math.sqrt(u*u-g));_<=i&&_<m&&(m=_,p=l)}}return{i:p,t:m}}bulletHits(e,t){let n=this.world,r=this.rand.next()<nd.base+nd.focused*t.focus*t.focus,i=t.damage*(r?nd.mult:1),a=n.x[e],o=n.z[e],s=n.hitZombie(e,i,t.dx*t.knockback,t.dz*t.knockback);this.hitFx(e,s,a,o,t.dx,t.dz,r)}hitFx(e,t,n,r,i,a,o){t===2||t===3?(this.fx.push({kind:`armor`,x:n,z:r,broke:t===3}),t===3&&(this.vestBroken[e]=1,this.toast(`护甲被打碎了`,`info`))):t!==4&&this.fx.push({kind:`blood`,x:n,z:r,dx:i,dz:a,amount:o?2:1})}doMelee(){let e=qu[this.melee];this.meleeCd=e.cooldown,this.meleeT=this.t;let t=this.world,n=Math.sin(this.aim),r=Math.cos(this.aim),i=!1;for(let a=0;a<t.count;a++){if(!t.alive[a])continue;let o=t.x[a]-this.px,s=t.z[a]-this.pz,c=Math.hypot(o,s);if(c>e.reach+t.radius[a]||c<1e-6||(o*n+s*r)/c<Math.cos(e.arc))continue;i=!0;let l=t.x[a],u=t.z[a],d=t.hitZombie(a,e.damage,o/c*e.knockback,s/c*e.knockback,e.armorPierce);this.hitFx(a,d,l,u,o/c,s/c,!1)}this.fx.push({kind:`melee`,x:this.px+n*.8,z:this.pz+r*.8,aim:this.aim,hit:i,weapon:this.melee})}movePlayer(e){let t=e.moveX,n=e.moveZ,r=Math.hypot(t,n);this.moving=r>.1,r>1&&(t/=r,n/=r);let i=this.world.grid,a=i.type[i.cellAt(this.px,this.pz)]===2,o=Vu.speed*(a?.45:1)*(this.reloadT>0?.85:1)*Uu[this.weapon].carry*(e.aiming&&!e.repeat?td.walkSpeed:1),s=this.px+t*o*jd,c=this.pz+n*o*jd,l=this.world;for(let e=0;e<2;e++){let e=l.hash,t=e.bucket(s,c),n=t%e.bw,r=t/e.bw|0;for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++){let a=n+i,o=r+t;if(a<0||o<0||a>=e.bw||o>=e.bh)continue;let u=o*e.bw+a;for(let t=e.start[u];t<e.start[u+1];t++){let n=e.items[t];if(!l.alive[n])continue;let r=s-l.x[n],i=c-l.z[n],a=Vu.radius+l.radius[n],o=r*r+i*i;if(o>=a*a||o<1e-12)continue;let u=Math.sqrt(o);s=l.x[n]+r/u*a,c=l.z[n]+i/u*a}}[s,c]=this.collideWalls(s,c,Vu.radius)}this.px=s,this.pz=c,this.world.setPlayer(s,c);let u=e.aimX-s,d=e.aimZ-c;u*u+d*d>.04&&(this.aim=Math.atan2(u,d))}collideWalls(e,t,n){let r=this.world.grid,i=r.cell,a=r.w*i;e=Math.min(Math.max(e,n),a-n),t=Math.min(Math.max(t,n),a-n);let o=Math.max(0,Math.floor((e-n)/i)),s=Math.min(r.w-1,Math.floor((e+n)/i)),c=Math.max(0,Math.floor((t-n)/i)),l=Math.min(r.h-1,Math.floor((t+n)/i));for(let a=c;a<=l;a++)for(let c=o;c<=s;c++){let o=r.type[a*r.w+c];if(o!==1&&o!==3)continue;let s=c*i,l=a*i,u=Math.min(Math.max(e,s),s+i),d=Math.min(Math.max(t,l),l+i),f=e-u,p=t-d,m=f*f+p*p;if(!(m>=n*n)){if(m>1e-12){let r=Math.sqrt(m);e=u+f/r*n,t=d+p/r*n}else{let r=e-(s+i/2),a=t-(l+i/2);Math.abs(r)>Math.abs(a)?e=r>0?s+i+n:s-n:t=a>0?l+i+n:l-n}}}return[e,t]}onPlayerHit(e){let t=e*Vu.damageTaken;this.hp-=t,this.hurtT=this.t,this.report.damageTaken+=t,this.fx.push({kind:`playerHit`,damage:t}),this.focus=Math.max(0,this.focus-td.hitLoss),this.action&&(this.action=null,this.toast(`被打断了`,`bad`)),this.hp<=0&&this.phase!==`over`&&this.gameOver(`player`)}findFocus(){let e=Vu.interactRadius,t=null,n=e;this.map.containers.forEach((e,r)=>{let i=Math.hypot(e.x-this.px,e.z-this.pz);i<n&&(n=i,t={kind:`container`,c:e,ready:this.charges[r]>0})});for(let e of this.map.slots){let r=Math.min(Math.max(this.px,e.x0),e.x1),i=Math.min(Math.max(this.pz,e.z0),e.z1),a=Math.hypot(r-this.px,i-this.pz);a<n&&(n=a,t={kind:`slot`,s:e})}let r=this.map.workbench,i=Math.hypot(r.x-this.px,r.z-this.pz);i<n&&(n=i,t={kind:`workbench`});let a=this.map.merchant;return Math.hypot(a.x-this.px,a.z-this.pz)<n&&(t={kind:`merchant`}),t}slotOptions(e){let t=e.slot;return{build:!t.intact,repair:t.intact&&t.hp<t.maxHp,hpShare:t.intact?t.hp/t.maxHp:0}}interact(e){if(this.action){let t=this.action;if(!(t.wall===`vending`?e.interactAlt:e.interact)||this.moving){this.action=null;return}t.t+=jd,t.t>=t.need&&this.finishAction(t);return}let t=this.focusOn;if(t&&!this.moving){if(t.kind===`container`&&e.interact){if(!t.ready)return;this.action={kind:`search`,t:0,need:_d[t.c.kind],container:t.c}}else if(t.kind===`slot`&&(e.interact||e.interactAlt)){let n=this.slotOptions(t.s);if(n.build){let n=e.interactAlt?`vending`:`planks`;if(this.stock.salvage<dd[n].cost)return this.toastOnce(`零件不够（${dd[n].name}要 ${dd[n].cost}）`);this.action={kind:`build`,t:0,need:pd*(n===`vending`?1.6:1),slot:t.s,wall:n}}else if(n.repair&&e.interact){if(this.stock.salvage<fd.cost)return this.toastOnce(`零件不够（修理要 ${fd.cost}）`);this.action={kind:`repair`,t:0,need:fd.seconds,slot:t.s,wall:`planks`}}}}}lastToastText=``;toastOnce(e){this.lastToastText===e&&this.toasts.length&&this.t-this.toasts[this.toasts.length-1].t<1.5||this.toast(e,`bad`)}finishAction(e){if(this.action=null,e.kind===`search`&&e.container){let t=e.container.id;if(this.charges[t]<=0)return;this.charges[t]--,this.loot(e.container)}else if(e.kind===`build`&&e.slot&&e.wall){let t=dd[e.wall];if(this.stock.salvage<t.cost)return;if(!this.world.buildSlot(e.slot.slot,t.kind,1+.25*this.wallsLevel))return this.toast(`缺口里有丧尸，建不了`,`bad`);this.stock.salvage-=t.cost,this.toast(`${e.slot.label}：${t.name}建好了`,`good`),this.fx.push({kind:`built`})}else if(e.kind===`repair`&&e.slot){if(this.stock.salvage<fd.cost)return;let t=e.slot.slot;this.world.repairSlot(t,t.maxHp*fd.share)>0&&(this.stock.salvage-=fd.cost)}}loot(e){let t=vd[e.kind],n=this.rand,r=[],i=Math.round(n.range(t.salvage[0],t.salvage[1]));if(r.push(`零件 +${this.add(`salvage`,i)}`),this.report.salvageFound+=i,n.next()<t.ammoChance&&r.push(`弹药 +${this.add(`ammo`,Math.round(n.range(t.ammo[0],t.ammo[1])))}`),n.next()<t.medkitChance&&r.push(`医疗包 +${this.add(`medkits`,1)}`),!this.weaponFoundToday&&n.next()<t.weaponChance){let e=Gu.find(e=>!this.owned.includes(e)&&Uu[e].minNight<=this.night);e&&(this.owned.push(e),this.mag[e]=Uu[e].mag,this.weaponFoundToday=!0,this.fx.push({kind:`found`}),Uu[e].slot===`primary`&&!this.primary?(this.setGun(e),this.toast(`找到了${Uu[e].name}！按 1 / Q 切换`,`good`)):this.toast(`找到了${Uu[e].name}！去商人那里换上`,`good`))}this.toast(r.join(`  `),`good`)}add(e,t){let n=this.stock[e];return this.stock[e]=Math.min(hd[e],n+t),this.stock[e]-n}canUseBench(){return this.phase===`day`&&this.focusOn?.kind===`workbench`}upgradeCost(e){let t=ld[e],n=this.upgradeLevel(e);return n>=t.max?null:t.base+n*t.step}upgradeLevel(e){return e===`vitality`?this.vitality:e===`walls`?this.wallsLevel:this.levels[this.weapon][e]}buyUpgrade(e){let t=this.upgradeCost(e);return t===null||this.stock.salvage<t||!this.canUseBench()?!1:(this.stock.salvage-=t,e===`vitality`?(this.vitality++,this.hp+=25):e===`walls`?this.wallsLevel++:this.levels[this.weapon][e]++,this.toast(`${ld[e].name} 升到 ${this.upgradeLevel(e)} 级`,`good`),!0)}craftAmmo(){let e=gd.ammo(this.night);return!this.canUseBench()||this.stock.salvage<e||this.stock.ammo+Uu[this.weapon].ammoYield>hd.ammo?!1:(this.stock.salvage-=e,this.add(`ammo`,Uu[this.weapon].ammoYield),this.fx.push({kind:`crafted`}),!0)}craftMedkit(){return!this.canUseBench()||this.stock.salvage<gd.medkit||this.stock.medkits>=hd.medkits?!1:(this.stock.salvage-=gd.medkit,this.add(`medkits`,1),this.fx.push({kind:`crafted`}),!0)}canUseShop(){return this.phase===`day`&&this.focusOn?.kind===`merchant`}onSale(e){return e<=this.day}pay(e,t){return this.canUseShop()?this.money<e?(this.fx.push({kind:`denied`}),!1):(this.money-=e,this.fx.push({kind:`bought`}),this.toast(`买了${t}`,`good`),!0):!1}buyGun(e){let t=Uu[e];return this.owned.includes(e)||!this.onSale(t.minNight)||!this.pay(t.price,t.name)?!1:(this.owned.push(e),this.mag[e]=this.magSize(e),this.setGun(e),!0)}equipGun(e){return!this.canUseShop()||!this.owned.includes(e)?!1:(this.setGun(e),this.fx.push({kind:`equip`}),!0)}buyMelee(e){let t=qu[e];return this.ownedMelee.includes(e)||!this.onSale(t.minNight)||!this.pay(t.price,t.name)?!1:(this.ownedMelee.push(e),this.melee=e,!0)}equipMelee(e){return!this.canUseShop()||!this.ownedMelee.includes(e)?!1:(this.melee=e,this.fx.push({kind:`equip`}),!0)}buyThrowable(e){let t=Yu[e];return this.throwables[e]>=t.cap||!this.onSale(t.minNight)||!this.pay(t.price,t.name)?!1:(this.throwables[e]++,this.throwables[this.throwSel]||(this.throwSel=e),!0)}selectThrowable(e){this.throwSel=e,this.fx.push({kind:`equip`})}buyAmmo(){let e=od.ammo;return this.stock.ammo+e.amount>hd.ammo||!this.pay(e.price,`${e.name} ×${e.amount}`)?!1:(this.add(`ammo`,e.amount),!0)}buyMedkit(){return this.stock.medkits>=hd.medkits||!this.pay(od.medkit.price,od.medkit.name)?!1:(this.add(`medkits`,1),!0)}onDeath(e){let t=this.world,n=Xl[t.kind[e]];this.kills++,this.report.kills++,this.money+=sd[n],this.report.earned+=sd[n];let r=t.x[e]-t.prevX[e],i=t.z[e]-t.prevZ[e],[a,o]=this.collideWalls(t.x[e],t.z[e],Rd);this.corpses.push({x:a,z:o,fromX:t.x[e],fromZ:t.z[e],type:n,broken:n===`police`&&this.vestBroken[e]===1,facing:Math.hypot(r,i)>1e-4?Math.atan2(r,i):Math.atan2(this.px-t.x[e],this.pz-t.z[e]),t:this.t,slot:e}),this.fx.push({kind:`death`,x:t.x[e],z:t.z[e],type:n}),this.vestBroken[e]=0;let s=this.rand;if(s.next()<yd[n]||++this.dryKills>=4){this.dryKills=0;let r=s.next(),i=r<.03?`medkit`:r<.51?`ammo`:`salvage`,a=n===`brute`||n===`police`?1.8:1,o=i===`medkit`?1:Math.round(i===`ammo`?s.range(4,7)*a:s.range(2,4)*a),c=s.range(0,Math.PI*2);this.drops.push({x:t.x[e],z:t.z[e],vx:Math.cos(c)*1.5,vz:Math.sin(c)*1.5,kind:i,amount:o,age:0}),this.drops.length>Id&&this.drops.shift()}}stepDrops(){for(let e=this.drops.length-1;e>=0;e--){let t=this.drops[e];t.age+=jd;let n=this.px-t.x,r=this.pz-t.z,i=Math.hypot(n,r),a=t.kind===`medkit`?`medkits`:t.kind,o=this.stock[a]<hd[a];if(t.age>Md){this.drops.splice(e,1);continue}if(i<.45&&o){let n=this.add(a,t.amount);if(t.amount-=n,n>0&&this.fx.push({kind:`pickup`,item:t.kind}),t.amount<=0){this.drops.splice(e,1);continue}}o&&i<Vu.pickupRadius&&t.age>.35?(t.vx=n/i*7,t.vz=r/i*7):(t.vx*=.88,t.vz*=.88);let[s,c]=this.collideWalls(t.x+t.vx*jd,t.z+t.vz*jd,.1);t.x=s,t.z=c}}spawnOne(e,t){let n=this.map.spawns,r=(this.phase===`night`?1-this.clock/150:1)<.25&&!t?n.filter(e=>e.z<20||e.x>60):n,i=r[this.rand.int(r.length)],a=Sd(e,this.night,()=>this.rand.next());if(this.phase===`night`){let e=this.tonight;a.hp*=e.hp,a.speedScale*=e.speed}let o=i.x+this.rand.range(-.4,.4),s=i.z+this.rand.range(-.4,.4),c=this.world.spawn(e,o,s,a.speedScale,{hp:a.hp,armor:a.armor,dmgMul:a.dmgMul});c>=0&&(this.vestBroken[c]=0)}direct(){let e=this.world;if(this.phase===`day`){this.stragglerCd-=jd,this.stragglerCd<=0&&(this.stragglerCd=11*this.rand.range(.7,1.3),e.aliveCount<4+this.day&&this.spawnOne(this.day>=2&&this.rand.next()<.3?`runner`:`walker`,!0));return}if(this.phase!==`night`||this.clock<=0)return;if(this.surgeLeft-=jd,this.surgeLeft<=0){this.surge=!this.surge;let[e,t]=this.surge?Ad.surge:Ad.calm;this.surgeLeft=this.rand.range(e,t),this.surge&&(this.toast(`尸潮来了！`,`bad`),this.fx.push({kind:`surge`}))}let t=this.clock<20?1.6:1,n=this.tonight;n.id===`storm`&&(this.lightningCd-=jd,this.lightningCd<=0&&(this.lightningCd=this.rand.range(Ed[0],Ed[1]),this.fx.push({kind:`lightning`}))),this.spawnAcc+=Od(this.night,this.surge)*(n.count/n.spawn)*t*jd;let r=kd(this.night);for(;this.spawnAcc>=1&&(--this.spawnAcc,!(e.aliveCount>=r));)this.spawnOne(Cd(this.night,()=>this.rand.next(),n))}freshReport(){return{night:this.day,kills:0,damageTaken:0,wallsLost:0,refugeDamage:0,salvageFound:0,earned:0}}startNight(){this.phase=`night`,this.clock=150,this.action=null,this.surge=!1,this.surgeLeft=this.rand.range(Ad.first[0],Ad.first[1]),this.spawnAcc=0,this.report={...this.freshReport(),salvageFound:this.report.salvageFound},this.refugeAtDusk=this.world.coreHp,this.world.setCoreTargeted(!0),this.lightningCd=2,this.toast(`第 ${this.night} 夜：${this.tonight.name}`,`bad`)}lightningCd=2;get tonight(){return Td(this.night)}refugeAtDusk=800;endNight(){this.phase=`dawn`,this.dawnT=0,this.world.setCoreTargeted(!1);let e=this.world.fleeAll();this.toast(e>0?`天亮了，剩下的 ${e} 只在往外撤`:`天亮了`,`info`);let t=cd(this.night);this.money+=t,this.report.earned+=t,this.toast(`撑过一夜：现金 +${t}`,`good`),this.fx.push({kind:`paid`,amount:t}),this.fx.push({kind:`dawn`}),this.report.refugeDamage=Math.round(this.refugeAtDusk-this.world.coreHp),this.lastReport=this.report}get climbing(){let e=this.world.grid,t=e.cellAt(this.px,this.pz);return t>=0&&e.type[t]===2&&!!e.slotAt(t)?.intact}dawnT=0;get dawnReady(){return this.phase===`dawn`&&this.dawnT>=9}fleeT=new Float32Array;stepFleeing(){let e=this.world;if(this.fleeT.length<e.count){let t=new Float32Array(e.cap);t.set(this.fleeT),this.fleeT=t}let t=this.map.bounds;for(let n=0;n<e.count;n++){if(!e.alive[n]||!e.fleeing[n]){this.fleeT[n]=0;continue}this.fleeT[n]+=jd;let r=e.x[n],i=e.z[n],a=(r-this.px)/19,o=(i-this.pz)/(i<this.pz?15:11);(r<t.x0+.8||i<t.z0+.8||r>t.x1-.8||i>t.z1-.8||a*a+o*o>1||this.fleeT[n]>40)&&e.despawn(n)}}nextDay(){this.phase===`dawn`&&(this.day++,this.phase=`day`,this.clock=Dd(this.day),this.hp=Math.min(this.maxHp,this.hp+8),this.charges.fill(1),this.weaponFoundToday=!1,this.world.setCoreTargeted(!1),this.report=this.freshReport(),this.toast(`第 ${this.day} 天　今夜：${this.tonight.name}`,`info`),this.checkpoint=this.snapshot())}checkpoint=null;snapshot(){return{v:1,map:this.map.id,day:this.day,hp:this.hp,kills:this.kills,t:this.t,stock:{...this.stock},owned:[...this.owned],weapon:this.weapon,mag:{...this.mag},levels:JSON.parse(JSON.stringify(this.levels)),vitality:this.vitality,wallsLevel:this.wallsLevel,charges:[...this.charges],refuge:this.world.coreHp,rng:this.rand.state,slots:this.map.slots.map(e=>({kind:e.slot.intact?e.slot.kind:null,hp:e.slot.hp,maxHp:e.slot.maxHp,wasBuilt:e.slot.state!==`empty`})),money:this.money,primary:this.primary,secondary:this.secondary,melee:this.melee,ownedMelee:[...this.ownedMelee],throwables:{...this.throwables},throwSel:this.throwSel}}restore(e){this.day=e.day,this.phase=`day`,this.clock=Dd(e.day),this.hp=e.hp,this.kills=e.kills,this.t=e.t,this.stock={...e.stock},this.owned=e.owned.filter(e=>e in Uu),this.owned.includes(`pistol`)||this.owned.unshift(`pistol`);let t=e=>!!e&&this.owned.includes(e);if(e.primary!==void 0)this.primary=t(e.primary)?e.primary:null,this.secondary=t(e.secondary)?e.secondary:`pistol`;else{let n=e=>[...this.owned].reverse().find(t=>Uu[t].slot===e)??null,r=t(e.weapon)?e.weapon:null;this.primary=r&&Uu[r].slot===`primary`?r:n(`primary`),this.secondary=r&&Uu[r].slot===`secondary`?r:n(`secondary`)??`pistol`}this.weapon=t(e.weapon)&&(e.weapon===this.primary||e.weapon===this.secondary)?e.weapon:this.secondary,this.money=e.money??40,this.ownedMelee=e.ownedMelee?.filter(e=>e in qu)??[`fists`],this.ownedMelee.includes(`fists`)||this.ownedMelee.unshift(`fists`),this.melee=e.melee&&this.ownedMelee.includes(e.melee)?e.melee:`fists`,this.throwables={grenade:e.throwables?.grenade??0,molotov:e.throwables?.molotov??0},this.throwSel=e.throwSel??`molotov`,Object.assign(this.mag,e.mag);for(let t of Object.keys(e.levels))t in this.levels&&Object.assign(this.levels[t],e.levels[t]);this.vitality=e.vitality,this.wallsLevel=e.wallsLevel,e.charges.forEach((e,t)=>this.charges[t]=e),this.world.coreHp=e.refuge,this.rand.state=e.rng,e.slots.forEach((e,t)=>{let n=this.map.slots[t].slot;e.kind?(this.world.buildSlot(n,e.kind,e.maxHp/(n.widthM*Fd[e.kind])),n.hp=e.hp,this.world.markSlot(n)):e.wasBuilt&&(n.build(`planks`),n.damage(1/0))}),this.report=this.freshReport(),this.toasts.length=0,this.toast(`第 ${this.day} 天（读档）　今夜：${this.tonight.name}`,`info`),this.checkpoint=this.snapshot()}overDark=1;gameOver(e){this.overDark=this.darkness,this.phase=`over`,this.overCause=e,this.action=null,this.report.refugeDamage=Math.round(this.refugeAtDusk-this.world.coreHp),this.lastReport=this.report}toast(e,t){this.lastToastText=e,this.toasts.push({text:e,tone:t,t:this.t}),this.toasts.length>6&&this.toasts.shift()}step(e){if(this.phase===`over`){this.world.step();return}this.t+=jd,(this.phase===`day`||this.phase===`night`)&&(this.clock-=jd),this.phase===`day`&&e.startNight&&this.clock>8&&(this.clock=8,this.toast(`天要黑了`,`bad`)),this.phase===`day`&&this.clock<=0&&this.startNight(),this.phase===`night`&&this.clock<=0&&this.endNight(),this.phase===`dawn`&&(this.dawnT+=jd),this.stepFleeing();let t=this.aim;this.movePlayer(e),this.focusOn=this.findFocus(),this.stepFocus(e,t),e.weaponSlot===1&&this.primary&&this.switchTo(this.primary),e.weaponSlot===2&&this.switchTo(this.secondary),e.cycleWeapon!==0&&this.otherGun&&this.switchTo(this.otherGun),this.fireCd-=jd,this.meleeCd-=jd,this.throwCd-=jd,this.recoil=Math.max(0,this.recoil-ad*jd),this.reloadT>0&&(this.reloadT-=jd,this.reloadT<=0&&(this.reloadT=0,this.finishReload())),e.reload&&this.startReload();let n=Uu[this.weapon].auto||e.repeat?e.fire||e.firePressed:e.firePressed||e.fire&&!this.wasFiring;for(this.wasFiring=e.fire,!this.action&&n&&this.fireCd<=0&&this.reloadT<=0&&(this.mag[this.weapon]>0?this.fire():this.stock.ammo>0?this.startReload():this.meleeCd<=0&&(this.fx.push({kind:`dry`}),this.doMelee())),e.melee&&this.meleeCd<=0&&this.doMelee(),e.throw&&!this.action&&this.throwAt(e.throwX,e.throwZ),e.medkit&&this.stock.medkits>0&&this.hp<this.maxHp&&(this.stock.medkits--,this.hp=Math.min(this.maxHp,this.hp+35),this.toast(`用了医疗包 +35`,`good`)),this.interact(e),this.stepBullets(),this.stepThrown(),this.stepFlames(),this.direct(),this.world.step(),this.stepDrops(),this.world.coreHp<=0&&this.phase!==`over`&&this.gameOver(`refuge`),this.world.done=!1;this.corpses.length&&this.t-this.corpses[0].t>24;)this.corpses.shift();for(;this.corpses.length>220;)this.corpses.shift()}static typeOf(e){return Xl[e]}static typeIndex=zd;static zombieSpecs=Zl},Vd=.7,Hd=.3,Ud={pistol:!0,smg:!0,rifle:!0,lmg:!0},Wd={pistol:`pistol-shot.m4a`,carbine:`carbine-shot.m4a`,shotgun:`shotgun-shot.m4a`,reload:`weapon-reload.m4a`,fall:`zombie-fall.m4a`,rustle:`search-rustle.m4a`,hammer:`craft-metal.m4a`,alarm:`security-alarm.m4a`,moans:`zombie-moans.m4a`,death:`zombie-death.m4a`,steps:`zombie-steps.m4a`,ambience:`horror-ambience.m4a`,thunder:`thunder.m4a`},Gd=[[.37,2.09],[3.72,5.55],[6.72,8.35],[9.38,10.07],[10.55,11.18],[12.31,13.39],[14.81,15.46]],Kd=[2.57,3.18,3.8,4.42,5.06,5.68,6.29,6.89,7.47,8.09,8.75,9.37,10.02,10.65,11.3,11.95],qd=class{base;ctx=null;master;sfx;buffers=new Map;noise=null;last=new Map;ambience=null;steps=null;rustle=null;moanCd=2;hammerCd=0;lastPhase=``;wind=null;rain=null;roar=null;hum=null;stepX=NaN;stepZ=NaN;stepAcc=0;stepSide=0;birdCd=3;heartCd=0;fireCd=0;muted=!1;volume=.8;duck=1;constructor(e){this.base=e}async start(){if(this.ctx){this.ctx.resume();return}let e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.level();let t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=4,this.master.connect(t).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master);let n=e.sampleRate;this.noise=e.createBuffer(1,n,n);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;await Promise.all(Object.keys(Wd).map(async t=>{try{let n=await fetch(this.base+Wd[t]);this.buffers.set(t,await e.decodeAudioData(await n.arrayBuffer()))}catch(e){console.warn(`[audio] ${Wd[t]}`,e)}}))}setMuted(e){this.muted=e,this.applyLevel()}setVolume(e){this.volume=e,this.applyLevel()}setDucked(e){this.duck=e?.3:1,this.applyLevel()}level(){return this.muted?0:this.volume*this.duck}applyLevel(){this.ctx&&this.master.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05)}place(e,t,n,r=18){let i=t-e.px,a=n-e.pz;return[Math.max(0,1-Math.hypot(i,a)/r)**1.6,Math.max(-.85,Math.min(.85,i/10))]}ok(e,t){let n=this.ctx.currentTime;return n-(this.last.get(e)??-1e9)<t?!1:(this.last.set(e,n),!0)}play(e,t,n=0,r=1,i=0,a){let o=this.ctx,s=this.buffers.get(e);if(!o||!s||t<=.003)return;let c=o.createBufferSource();c.buffer=s,c.playbackRate.value=r;let l=o.createGain();l.gain.value=t;let u=o.createStereoPanner();if(u.pan.value=n,c.connect(l).connect(u).connect(this.sfx),a!==void 0){let e=o.currentTime+a/r;l.gain.setValueAtTime(t,e-.06),l.gain.linearRampToValueAtTime(0,e),c.start(0,i,a+.02)}else c.start(0,i)}noiseHit(e,t,n,r,i,a,o=`bandpass`,s){let c=this.ctx;if(!c||!this.noise||e<=.003)return;let l=c.currentTime,u=c.createBufferSource();u.buffer=this.noise;let d=c.createBiquadFilter();d.type=o,d.frequency.setValueAtTime(n,l),s&&d.frequency.exponentialRampToValueAtTime(s,l+i+a),d.Q.value=r;let f=c.createGain();f.gain.setValueAtTime(0,l),f.gain.linearRampToValueAtTime(e,l+i),f.gain.exponentialRampToValueAtTime(8e-4,l+i+a);let p=c.createStereoPanner();p.pan.value=t,u.connect(d).connect(f).connect(p).connect(this.sfx),u.start(l,Math.random()*.5,i+a+.05)}tone(e,t,n,r,i,a=`sine`,o=0){let s=this.ctx;if(!s||e<=.003)return;let c=s.currentTime+o,l=s.createOscillator();l.type=a,l.frequency.setValueAtTime(n,c),l.frequency.exponentialRampToValueAtTime(r,c+i);let u=s.createGain();u.gain.setValueAtTime(e,c),u.gain.exponentialRampToValueAtTime(8e-4,c+i);let d=s.createStereoPanner();d.pan.value=t,l.connect(u).connect(d).connect(this.sfx),l.start(c),l.stop(c+i+.02)}loop(e,t){let n=this.ctx,r=this.buffers.get(e);if(!n||!r)return null;let i=n.createBufferSource();i.buffer=r,i.loop=!0;let a=n.createGain();return a.gain.value=t,i.connect(a).connect(this.sfx),i.start(0,Math.random()*r.duration),{src:i,gain:a}}noiseLoop(e,t,n){let r=this.ctx;if(!r||!this.noise)return null;let i=r.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t,a.Q.value=n;let o=r.createGain();return o.gain.value=0,i.connect(a).connect(o).connect(this.sfx),i.start(0,Math.random()),{src:i,gain:o}}makeHum(){let e=this.ctx,t=e.createGain();t.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=260;let r=e.createStereoPanner(),i=[55,110.6].map((t,r)=>{let i=e.createOscillator();i.type=r?`square`:`sawtooth`,i.frequency.value=t;let a=e.createGain();return a.gain.value=r?.25:1,i.connect(a).connect(n),i.start(),i});return n.connect(t).connect(r).connect(this.sfx),{osc:i,gain:t,pan:r}}click(){this.ctx&&this.ctx.state===`running`&&(this.noiseHit(.12,0,3400,4,.001,.025),this.tone(.04,0,1250,1100,.04,`triangle`))}panel(e){this.ctx&&this.ctx.state===`running`&&(e===`shop`?(this.tone(.08,0,2093,2093,.5,`sine`),this.tone(.06,0,2637,2637,.6,`sine`,.09)):e===`bench`?(this.noiseHit(.3,0,700,1.5,.002,.12,`bandpass`),this.tone(.06,0,520,480,.15,`triangle`,.03)):e===null&&this.noiseHit(.1,0,1800,2,.002,.05))}casing(e){if(!this.ok(`casing`,.07))return;let t=3600+Math.random()*1400;this.tone(.05,.2,t,t*.98,.05,`triangle`,e),this.tone(.03,.25,t*1.07,t*1.05,.04,`triangle`,e+.09+Math.random()*.05)}gunHandling(e){e===`shotgun`?(setTimeout(()=>{this.noiseHit(.35,0,1400,3,.001,.05,`bandpass`),this.tone(.05,0,700,500,.05,`square`)},300),setTimeout(()=>this.noiseHit(.4,0,1900,3,.001,.05,`bandpass`),420),setTimeout(()=>this.noiseHit(.18,.2,500,2,.002,.08,`lowpass`),760)):e===`sniper`?(setTimeout(()=>this.noiseHit(.25,0,2600,5,.001,.03),380),setTimeout(()=>this.noiseHit(.3,0,1600,3,.001,.06,`bandpass`,900),470),setTimeout(()=>this.noiseHit(.3,0,1800,3,.001,.05,`bandpass`,2600),600),setTimeout(()=>this.noiseHit(.25,0,2800,5,.001,.03),690),this.casing(.75)):Ud[e]&&this.casing(.28+Math.random()*.1)}fade(e,t,n=.4){e&&this.ctx&&e.gain.gain.setTargetAtTime(t,this.ctx.currentTime,n)}handle(e,t){if(!this.ctx||this.ctx.state!==`running`)return;let n=()=>.92+Math.random()*.16;for(let r of e)switch(r.kind){case`muzzle`:r.weapon===`pistol`?this.play(`pistol`,.55,0,n()):r.weapon===`revolver`?this.play(`pistol`,.75,0,.78*n()):r.weapon===`shotgun`?this.play(`shotgun`,.75,0,n()):r.weapon===`sniper`?(this.play(`shotgun`,.6,0,.7*n()),this.play(`carbine`,.5,0,.75*n(),0,.7)):this.play(`carbine`,r.weapon===`smg`?.32:r.weapon===`lmg`?.42:.45,0,(r.weapon===`smg`?1.25:r.weapon===`lmg`?.92:1.05)*n(),0,.55),this.gunHandling(r.weapon);break;case`blood`:{if(!this.ok(`flesh`,.03))break;let[e,n]=this.place(t,r.x,r.z);this.noiseHit(.5*e,n,380,1.2,.002,.09,`lowpass`);break}case`armor`:{let[e,n]=this.place(t,r.x,r.z);this.tone(.18*e,n,r.broke?1400:2100,r.broke?700:1800,r.broke?.35:.12,`triangle`),this.noiseHit((r.broke?.5:.25)*e,n,3200,2,.001,r.broke?.25:.06);break}case`spark`:{if(!this.ok(`spark`,.05))break;let[e,n]=this.place(t,r.x,r.z);this.noiseHit(.22*e,n,2600,3,.001,.05);break}case`death`:{let[e,i]=this.place(t,r.x,r.z);this.ok(`death`,.12)&&this.play(`death`,.45*e,i,(r.type===`brute`?.75:1)*n()),setTimeout(()=>this.play(`fall`,.5*e,i,n()),320);break}case`playerHit`:this.noiseHit(.7,0,160,1,.003,.18,`lowpass`),this.tone(.25,0,120,60,.18,`sine`);break;case`wallBreak`:{let[e,n]=this.place(t,r.x,r.z,40);this.noiseHit(.9*Math.max(.35,e),n,700,.7,.003,.5,`lowpass`,120),this.noiseHit(.5*Math.max(.35,e),n,2400,1.5,.002,.25);break}case`melee`:{let e=r.weapon===`axe`?.6:r.weapon===`bat`?.8:1;this.noiseHit(.32,0,2200*e,.8,.02,.14/e,`bandpass`,600*e),r.hit&&this.noiseHit(.55/e,0,260*e,1,.002,.12,`lowpass`),r.hit&&r.weapon===`machete`&&this.tone(.06,0,2600,2200,.12,`triangle`);break}case`throw`:r.item===`grenade`?this.tone(.07,0,3800,3600,.05,`triangle`):(this.noiseHit(.25,0,5e3,3,.001,.03),this.noiseHit(.2,0,500,.6,.02,.18,`lowpass`,1500)),setTimeout(()=>this.noiseHit(.28,0,900,.7,.03,.22,`bandpass`,2400),90);break;case`explode`:{let[e,n]=this.place(t,r.x,r.z,60),i=Math.max(.35,e);this.noiseHit(1*i,n,900,.6,.002,.9,`lowpass`,70),this.noiseHit(.5*i,n,3e3,.8,.001,.25,`bandpass`,500),this.tone(.5*i,n,90,32,.9,`sine`),setTimeout(()=>this.noiseHit(.25*i,n*.5,400,.7,.05,1.2,`lowpass`,120),120);for(let e=0;e<7;e++)setTimeout(()=>this.noiseHit(.12*i,n+(Math.random()-.5)*.5,1500+Math.random()*3e3,3,.001,.03),350+Math.random()*900);break}case`ignite`:{let[e,n]=this.place(t,r.x,r.z,30),i=Math.max(.3,e);this.noiseHit(.45*i,n,5200,4,.001,.12),this.noiseHit(.6*i,n,300,.5,.05,.6,`lowpass`,1400);break}case`bought`:this.tone(.1,0,1320,1320,.05,`square`),this.tone(.1,0,1760,1760,.12,`square`,.06),this.noiseHit(.15,0,5e3,3,.001,.08,`bandpass`,4e3);break;case`reload`:if(r.weapon===`shotgun`){for(let e=0;e<4;e++)setTimeout(()=>this.noiseHit(.28,0,1100+Math.random()*300,2.5,.002,.06,`bandpass`),200+e*380);setTimeout(()=>this.noiseHit(.35,0,1500,3,.001,.06,`bandpass`),1850)}else if(r.weapon===`revolver`){this.noiseHit(.3,0,2400,4,.001,.04);for(let e=0;e<6;e++)setTimeout(()=>this.noiseHit(.12,0,4200,6,.001,.015),500+e*120);setTimeout(()=>this.noiseHit(.4,0,1800,3,.001,.05),1900)}else if(r.weapon===`lmg`){this.play(`reload`,.45,0,.75);for(let e=0;e<8;e++)setTimeout(()=>this.noiseHit(.1,0,3e3+Math.random()*1500,4,.001,.02),1300+e*70);setTimeout(()=>this.noiseHit(.5,0,900,1.5,.001,.1,`bandpass`),2900)}else this.play(`reload`,.45,0,r.weapon===`sniper`?.85:r.weapon===`smg`?1.1:1);break;case`switch`:{let e=r.weapon===`shotgun`||r.weapon===`rifle`||r.weapon===`sniper`||r.weapon===`lmg`;this.noiseHit(.25,0,e?900:1500,1.5,.004,e?.16:.08,`bandpass`),setTimeout(()=>this.noiseHit(.3,0,2200,3,.001,.04),e?140:80);break}case`land`:{let[e,n]=this.place(t,r.x,r.z,25);this.tone(.12*e,n,1900,1700,.06,`triangle`),this.noiseHit(.2*e,n,700,1,.002,.08,`lowpass`),this.tone(.06*e,n,2100,1900,.05,`triangle`,.12);break}case`equip`:this.noiseHit(.3,0,1300,2,.002,.07,`bandpass`),this.noiseHit(.25,0,2500,4,.001,.04);break;case`denied`:this.tone(.1,0,196,185,.12,`square`),this.tone(.1,0,147,140,.18,`square`,.13);break;case`paid`:for(let e=0;e<Math.min(9,3+Math.floor(r.amount/15));e++){let t=2400+Math.random()*1800;this.tone(.05,(Math.random()-.5)*.4,t,t*.99,.09,`triangle`,1.4+e*.07+Math.random()*.03)}break;case`found`:[523,659,784,1047].forEach((e,t)=>this.tone(.07,0,e,e,.14,`square`,t*.08));break;case`dry`:this.ok(`dry`,.15)&&this.noiseHit(.35,0,4200,6,.001,.03);break;case`pickup`:if(this.ok(`pickup`,.06)){let e=r.item===`ammo`?880:r.item===`medkit`?660:990;this.tone(.12,0,e,e,.06,`square`),this.tone(.1,0,e*1.5,e*1.5,.08,`square`,.06)}break;case`swing`:{let[e,n]=this.place(t,r.x,r.z,r.target===`slot`?30:22);r.target===`slot`&&this.ok(`wood`,.09)&&this.noiseHit(.55*Math.max(.12,e),n,210+Math.random()*90,1.4,.002,.16,`bandpass`),r.target===`core`&&this.ok(`core`,.12)&&(this.noiseHit(.5*Math.max(.15,e),n,900,4,.001,.12),this.tone(.06*Math.max(.15,e),n,340,300,.25,`triangle`));break}case`built`:this.play(`hammer`,.5,0,n(),Kd[3],.5),this.play(`hammer`,.4,0,n(),Kd[4],.4);break;case`surge`:this.play(`alarm`,.22,0,1,0,1.6);break;case`lightning`:setTimeout(()=>this.play(`thunder`,.7,(Math.random()-.5)*.8,.9+Math.random()*.2),250+Math.random()*700);break;case`dawn`:for(let e=0;e<9;e++){let t=.6+Math.floor(e/3)*(.9+Math.random()*.6)+e%3*.13,n=2500+Math.random()*900;this.tone(.05,(Math.random()-.5)*1.4,n,n*1.35,.07,`sine`,t)}break;case`crafted`:this.play(`hammer`,.45,0,n(),Kd[8],.45)}}footsteps(e){if(Number.isNaN(this.stepX)||e.phase===`over`){this.stepX=e.px,this.stepZ=e.pz;return}let t=Math.hypot(e.px-this.stepX,e.pz-this.stepZ);if(this.stepX=e.px,this.stepZ=e.pz,t>2||(this.stepAcc+=t,this.stepAcc<Vd))return;this.stepAcc-=Vd,this.stepSide^=1;let n=e.world.grid,r=n.type[n.cellAt(e.px,e.pz)]===2,i=this.stepSide?.08:-.08;r?(this.noiseHit(.22,i,300+Math.random()*120,3,.003,.1,`bandpass`),this.tone(.03,i,180,150,.12,`triangle`)):(this.noiseHit(.13,i,420+Math.random()*160+this.stepSide*60,1.2,.004,.07,`lowpass`),this.noiseHit(.04,i,2500,1.5,.002,.03))}surroundings(e,t){let n=1-e.darkness;if(this.wind??=this.noiseLoop(`bandpass`,420,.5),this.wind&&this.ctx){let e=.6+.4*Math.sin(this.ctx.currentTime*.31)*Math.sin(this.ctx.currentTime*.13+1);this.fade(this.wind,.11*(.35+.65*n)*e,.8)}let r=e.tonight.id===`storm`&&e.phase===`night`?e.darkness:0;if(this.rain??=this.noiseLoop(`highpass`,2200,.4),this.fade(this.rain,.16*r,1.5),this.birdCd-=t,this.birdCd<=0&&(this.birdCd=3+Math.random()*7,n>.6&&e.phase===`day`)){let e=(Math.random()-.5)*1.4,t=2200+Math.random()*1500,r=2+Math.floor(Math.random()*3);for(let i=0;i<r;i++)this.tone(.035*n,e,t*(1+.08*i),t*(1.25+.08*i),.06,`sine`,i*.11)}if(this.hum??=this.makeHum(),this.hum&&this.ctx){let t=e.map.refuge,[n,i]=this.place(e,t.x,t.z,16),a=+(e.refugeHp>0),o=r>0&&Math.sin(this.ctx.currentTime*13)+Math.sin(this.ctx.currentTime*29.3)>1.5?.3:1;this.hum.gain.gain.setTargetAtTime(.05*n*a*o,this.ctx.currentTime,.2),this.hum.pan.pan.setTargetAtTime(i,this.ctx.currentTime,.2)}if(this.fireCd-=t,this.fireCd<=0){this.fireCd=.06+Math.random()*.12;for(let t of e.map.fires){let[n,r]=this.place(e,t.x,t.z,9);n>.02&&Math.random()<.5&&this.noiseHit(.14*n,r,2e3+Math.random()*3e3,3,.001,.02+Math.random()*.03)}}let i=e.hp/e.maxHp;if(this.heartCd-=t,i<Hd&&e.phase!==`over`&&this.heartCd<=0){this.heartCd=.55+i*1.6;let e=1-i/Hd;this.tone(.18+.12*e,0,62,48,.12,`sine`),this.tone(.12+.1*e,0,58,44,.12,`sine`,.16)}}update(e,t){if(!this.ctx||this.ctx.state!==`running`)return;this.ambience??=this.loop(`ambience`,0),this.steps??=this.loop(`steps`,0),this.fade(this.ambience,.28*e.darkness,1.2);let n=e.world,r=0,i=1/0,a=-1;for(let t=0;t<n.count;t++){if(!n.alive[t])continue;let o=Math.hypot(n.x[t]-e.px,n.z[t]-e.pz);o<12&&(r+=1-o/12),o<i&&(i=o,a=t)}if(this.fade(this.steps,Math.min(.32,r*.035),.3),this.moanCd-=t,this.moanCd<=0&&a>=0&&i<20){this.moanCd=1.2+Math.random()*3/(1+r*.3);let[t,i]=this.place(e,n.x[a]+(Math.random()-.5)*6,n.z[a],22),[o,s]=Gd[Math.floor(Math.random()*Gd.length)];this.play(`moans`,.5*t,i,.85+Math.random()*.3,o,s-o)}let o=e.action;o?.kind===`search`?(this.rustle??=this.loop(`rustle`,0),this.fade(this.rustle,.5,.05)):this.fade(this.rustle,0,.08),o&&o.kind!==`search`?(this.hammerCd-=t,this.hammerCd<=0&&(this.hammerCd=.45,this.play(`hammer`,.38,0,.95+Math.random()*.1,Kd[Math.floor(Math.random()*Kd.length)],.32))):this.hammerCd=0;let s=0;for(let n of e.flames){let[r,i]=this.place(e,n.x,n.z,22);s=Math.max(s,r),!(Math.random()>t*14)&&this.noiseHit(.22*r,i,1800+Math.random()*2500,2.5,.001,.03+Math.random()*.04)}this.roar??=this.noiseLoop(`lowpass`,380,.7),this.fade(this.roar,.35*s,.25),this.footsteps(e),this.surroundings(e,t),e.phase!==this.lastPhase&&(e.phase===`night`&&this.lastPhase===`day`&&this.tone(.12,0,110,55,2.5,`sawtooth`),this.lastPhase=e.phase)}},Jd=class{target=null;shopDay=0;gunWish(e){return[...Wu].reverse().find(t=>{let n=Uu[t];return n.slot===`primary`&&!e.owned.includes(t)&&e.onSale(n.minNight)&&n.price<=e.money&&(!e.primary||n.price>Uu[e.primary].price)})}wantsShop(e){return this.shopDay!==e.day&&(!!this.gunWish(e)||e.money>=od.ammo.price)}shop(e){let t=this.gunWish(e);for(t&&e.buyGun(t),e.melee===`fists`&&e.money>=qu.bat.price+60&&e.buyMelee(`bat`);e.throwables.grenade<2&&e.onSale(Yu.grenade.minNight)&&e.buyThrowable(`grenade`););for(;e.stock.ammo<120&&e.buyAmmo(););e.stock.medkits<2&&e.buyMedkit()}input(e){let t=Ld(e.px,e.pz+1),n=e.world,r=-1,i=13,a=0;for(let t=0;t<n.count;t++){if(!n.alive[t])continue;let o=n.x[t]-e.px,s=n.z[t]-e.pz,c=Math.hypot(o,s);c<2.2&&a++,c>=i||c<1e-6||n.grid.rayClear(e.px,e.pz,o/c,s/c,c,!1)<c-1e-6||(r=t,i=c)}if(r>=0){if(t.aimX=n.x[r],t.aimZ=n.z[r],e.throwKind===`grenade`&&i>4.5&&i<10){let e=0;for(let t=0;t<n.count;t++)n.alive[t]&&Math.hypot(n.x[t]-n.x[r],n.z[t]-n.z[r])<2.5&&e++;e>=6&&(t.throw=!0,t.throwX=n.x[r],t.throwZ=n.z[r])}t.aiming=!0;let a=e.focus>.75||i<3.5;t.fire=a,t.firePressed=a&&Math.floor(e.t*30)%4==0,i<1.4&&(t.melee=!0)}if(t.medkit=e.hp<e.maxHp*.4,e.primary&&e.weapon!==e.primary&&e.stock.ammo>0&&(t.weaponSlot=1),e.otherGun&&e.mag[e.weapon]===0&&e.stock.ammo===0&&(t.cycleWeapon=1),e.phase===`day`&&r<0){if(e.action)return t.interact=e.action.wall!==`vending`,t.interactAlt=e.action.wall===`vending`,t;let n=e.focusOn,r=e.clock>40;if(n?.kind===`container`&&n.ready&&r||n?.kind===`slot`&&e.slotOptions(n.s).build&&e.stock.salvage>=dd.planks.cost)return t.interact=!0,this.target=null,t;if(n?.kind===`merchant`&&!r&&this.shopDay!==e.day)return this.shop(e),this.shopDay=e.day,this.target=null,t;if(n?.kind===`workbench`&&!r){for(;e.stock.ammo<120&&e.stock.salvage>=gd.ammo(e.night)+fd.cost*2&&e.craftAmmo(););return e.stock.medkits<2&&e.stock.salvage>=gd.medkit+fd.cost*2&&e.craftMedkit(),t.startNight=!0,t}(!this.target||this.goal===`container`&&!r)&&(this.target=this.pickTarget(e,r)),this.target&&this.walkTo(e,t,this.target.x,this.target.z)}else if(e.phase===`night`){let i=e.map.refuge,o=i.x,s=i.z+2.6;if(a>=2&&r>=0){let i=e.px-n.x[r],a=e.pz-n.z[r],o=Math.hypot(i,a)||1;t.moveX=i/o,t.moveZ=a/o}else Math.hypot(e.px-o,e.pz-s)>1.5&&this.walkTo(e,t,o,s)}return t}goal=`container`;pickTarget(e,t){if(t){let t=null,n=1/0;if(e.map.containers.forEach((r,i)=>{if(e.charges[i]<=0)return;let a=Math.hypot(r.x-e.px,r.z-e.pz);a<n&&(n=a,t={x:r.x,z:r.z})}),t)return this.goal=`container`,t}if(e.stock.salvage>=dd.planks.cost){let t=null,n=1/0;for(let r of e.map.slots){if(r.slot.intact)continue;let i={x:(r.x0+r.x1)/2-r.outward[0]*1,z:(r.z0+r.z1)/2-r.outward[1]*1},a=Math.hypot(i.x-e.px,i.z-e.pz);a<n&&(n=a,t=i)}if(t)return this.goal=`slot`,t}return this.wantsShop(e)?(this.goal=`shop`,{x:e.map.merchant.x,z:e.map.merchant.z}):(this.goal=`bench`,{x:e.map.workbench.x,z:e.map.workbench.z})}field=null;fieldFor=``;walkTo(e,t,n,r){let i=e.world.grid;if(Math.hypot(n-e.px,r-e.pz)<.35){this.target=null;return}let a=i.cellAt(n,r),o=`${a}`;if(o!==this.fieldFor){this.fieldFor=o;let e=i.size,t=this.field??=new Int32Array(e);t.fill(-1);let n=new Int32Array(e),r=0,s=0;for(t[a]=0,n[s++]=a;r<s;){let e=n[r++],a=i.cx(e),o=i.cz(e);for(let[r,c]of Yd){let l=a+r,u=o+c;if(!i.inside(l,u))continue;let d=i.idx(l,u);t[d]>=0||Xd(i.type[d])||Zd(i,l,u)||r&&c&&(Xd(i.type[i.idx(a+r,o)])||Xd(i.type[i.idx(a,o+c)]))||(t[d]=t[e]+1,n[s++]=d)}}}let s=this.field,c=i.cellAt(e.px,e.pz),l=c,u=s[c]<0?1/0:s[c];for(let[e,t]of Yd){let n=i.cx(c)+e,r=i.cz(c)+t;if(!i.inside(n,r))continue;let a=i.idx(n,r);s[a]>=0&&s[a]<u&&(u=s[a],l=a)}let d=n,f=r;l!==c&&u>2&&(d=i.centreX(l),f=i.centreZ(l));let p=d-e.px,m=f-e.pz,h=Math.hypot(p,m)||1;t.moveX=p/h,t.moveZ=m/h,t.fire||(t.aimX=n,t.aimZ=r)}},Yd=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],Xd=e=>e===1||e===3;function Zd(e,t,n){let r=(t,n)=>!e.inside(t,n)||Xd(e.type[e.idx(t,n)]);return r(t-1,n)&&r(t+1,n)||r(t,n-1)&&r(t,n+1)}var Qd=class{onKey;keys=new Set;pressed=new Set;mouseDown=!1;rightDown=!1;mousePressed=!1;wheel=0;ndc=new Et(0,0);screenX=window.innerWidth/2;screenY=window.innerHeight/2;pointerSeen=!1;ground=new W;touch=null;constructor(e,t){this.onKey=t,window.addEventListener(`keydown`,e=>{let t=e.key.toLowerCase();this.keys.has(t)||this.pressed.add(t),this.keys.add(t),e.repeat||this.onKey(t),(t===` `||t===`tab`)&&e.preventDefault()}),window.addEventListener(`keyup`,e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>{this.keys.clear(),this.mouseDown=!1,this.rightDown=!1}),e.addEventListener(`pointermove`,e=>{this.screenX=e.clientX,this.screenY=e.clientY,this.ndc.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),this.pointerSeen=!0}),e.addEventListener(`mousedown`,e=>{e.button===2&&(this.rightDown=!0),e.button===0&&(this.mouseDown=!0,this.mousePressed=!0)}),window.addEventListener(`mouseup`,e=>{e.button===2&&(this.rightDown=!1),e.button===0&&(this.mouseDown=!1)}),e.addEventListener(`wheel`,e=>this.wheel+=Math.sign(e.deltaY),{passive:!0}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}down(...e){return e.some(e=>this.keys.has(e))}tap(...e){return e.some(e=>this.pressed.has(e))}take(e,t,n){let r=t.px,i=t.pz,a=Ld(r,i+1);if(!n){a.moveX=+!!this.down(`d`,`arrowright`)-!!this.down(`a`,`arrowleft`),a.moveZ=+!!this.down(`s`,`arrowdown`)-!!this.down(`w`,`arrowup`),this.pointerSeen&&e.groundPoint(this.ndc.x,this.ndc.y,.9,this.ground)&&(a.aimX=this.ground.x,a.aimZ=this.ground.z),a.fire=this.mouseDown,a.aiming=this.rightDown||this.down(`shift`),a.firePressed=this.mousePressed,a.reload=this.tap(`r`),a.interact=this.down(`f`),a.interactAlt=this.down(`g`),a.melee=this.tap(` `,`v`),a.medkit=this.tap(`h`);for(let e=1;e<=2;e++)this.tap(String(e))&&(a.weaponSlot=e);a.throw=this.tap(`t`),a.throwX=a.aimX,a.throwZ=a.aimZ,a.cycleWeapon=+!!this.tap(`q`)+Math.sign(this.wheel),a.startNight=this.tap(`n`)}let o=this.touch;if(o?.active){let e=o.take(t,n);if(!n){a.moveX=Math.max(-1,Math.min(1,a.moveX+e.moveX)),a.moveZ=Math.max(-1,Math.min(1,a.moveZ+e.moveZ));let n=e.aimDir??t.aim;a.aimX=r+Math.sin(n)*6,a.aimZ=i+Math.cos(n)*6,a.aiming||=e.aiming,a.fire||=e.fire,a.firePressed||=e.firePressed,a.repeat||=e.repeat,a.reload||=e.reload,a.melee||=e.melee,a.medkit||=e.medkit,a.interact||=e.interact,a.interactAlt||=e.interactAlt,a.cycleWeapon+=e.cycleWeapon,e.throwAt&&(a.throw=!0,a.throwX=e.throwAt.x,a.throwZ=e.throwAt.z),a.startNight||=e.startNight}}return this.pressed.clear(),this.mousePressed=!1,this.wheel=0,a}},$d=56,ef=.18,tf=.42,nf=220,rf=.21,af=1.7,of=16,sf=.9,cf=1.4,lf=1.5,uf=.36,df=Math.sin(50*Math.PI/180),ff=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${e}</svg>`,pf={reload:ff(`<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v5h-5"/>`),melee:ff(`<path d="M4 12h10"/><path d="M10 6l6 6-6 6"/><path d="M20 5v14"/>`),blade:ff(`<path d="M4 20l3-3"/><path d="M5.5 15.5l3 3"/><path d="M8 16L19 5V3h-2L6 14"/>`),throw:ff(`<circle cx="10" cy="14" r="6"/><path d="M10 8V5.5h4.5"/><path d="M14.5 5.5l3.5-2.5"/><path d="M17 9l3 1"/>`),shop:ff(`<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 11v9h13v-9"/><path d="M10 20v-5h4v5"/>`),medkit:ff(`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M12 10.5v6M9 13.5h6"/>`),weapon:ff(`<path d="M4 8h14l-3-3"/><path d="M20 16H6l3 3"/>`),search:ff(`<circle cx="10.5" cy="10.5" r="6"/><path d="M20 20l-5-5"/>`),planks:ff(`<rect x="3" y="4.5" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="15.5" width="18" height="4" rx="1"/>`),metal:ff(`<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"/><path d="M4 12h16"/>`),repair:ff(`<path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.3-.6-.6-2.3z"/>`),bench:ff(`<path d="M3 10h18"/><path d="M5 10v9M19 10v9"/><path d="M8 10V6h4v4"/><path d="M14 6l3-2 2 3-3 2"/>`),night:ff(`<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>`),sound:ff(`<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 9a4 4 0 0 1 0 6"/>`),muted:ff(`<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9.5l4 5M21 9.5l-4 5"/>`),pause:ff(`<path d="M9 5v14M15 5v14"/>`),fire:ff(`<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>`)},mf=class{el;icon;title;sub;bar;iconName=``;constructor(e){this.el=e,e.innerHTML=``,this.icon=document.createElement(`i`),this.title=document.createElement(`b`),this.sub=document.createElement(`small`),this.bar=document.createElement(`u`),e.append(this.icon,this.title,this.sub,this.bar)}set(e,t,n=``,r=-1){e!==this.iconName&&(this.icon.innerHTML=pf[e],this.iconName=e),this.title.textContent!==t&&(this.title.textContent=t),this.sub.textContent!==n&&(this.sub.textContent=n),this.sub.style.display=n?``:`none`,this.bar.style.display=r>=0?``:`none`,r>=0&&(this.bar.style.width=`${Math.round(r*100)}%`)}};function hf(e,t,n,r=``){let i=document.createElement(e);return i.className=t,i.innerHTML=r,n.appendChild(i),i}var gf=class e{onKey;settings;pickGround;active=!1;root;move=null;aim=null;moveBase;moveKnob;aimBase;aimKnob;ctx;ctxA;ctxB;medBtn;meleeBtn;throwBtn;gunBtn;nightBtn;muteBtn;held=new Set;taps=new Set;aimSmooth=null;lastAim=null;release=null;lock=-1;lockTarget=-1;lockManual=!1;lockSeen=0;fireBtn;pendingPick=null;tapAt=null;burstUntil=-1;burstDir=0;ctxKind=``;constructor(e,t,n,r){this.onKey=t,this.settings=n,this.pickGround=r,this.root=hf(`div`,`g-touch`,e),hf(`div`,`g-rotate`,e,`把手机横过来玩`);let i=hf(`div`,`g-tzone left`,this.root),a=hf(`div`,`g-tzone right`,this.root);this.moveBase=hf(`div`,`g-stick`,this.root),this.moveKnob=hf(`div`,`g-knob`,this.moveBase),this.aimBase=hf(`div`,`g-stick aim`,this.root),this.aimKnob=hf(`div`,`g-knob`,this.aimBase);let o=hf(`div`,`g-tpad`,this.root);this.fireBtn=this.button(o,`fire`,``,`hold`),new mf(this.fireBtn).set(`fire`,`开火`),new mf(this.button(o,`reload`,``,`tap`,!0)).set(`reload`,`换弹`),this.meleeBtn=new mf(this.button(o,`melee`,``,`tap`,!0)),this.medBtn=new mf(this.button(o,`medkit`,``,`tap`,!0)),this.throwBtn=new mf(this.button(o,`throw`,``,`tap`,!0)),this.gunBtn=new mf(this.button(o,`weapon`,``,`tap`,!0)),this.gunBtn.set(`weapon`,`换枪`),this.ctx=hf(`div`,`g-tctx`,this.root),this.ctxA=new mf(this.button(this.ctx,`interact`,``,`hold`,!0)),this.ctxB=new mf(this.button(this.ctx,`interactAlt`,``,`hold`,!0));let s=hf(`div`,`g-ttop`,this.root);this.nightBtn=new mf(this.button(s,`night`,``,`tap`)),this.nightBtn.set(`night`,`入夜`),this.muteBtn=new mf(this.button(s,`mute`,``,`key:m`)),new mf(this.button(s,`pause`,``,`key:escape`)).set(`pause`,`暂停`),this.stickZone(i,`move`),this.stickZone(a,`aim`),window.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&this.setActive(!0)},{capture:!0}),window.matchMedia(`(pointer: coarse)`).matches&&!window.matchMedia(`(pointer: fine)`).matches&&this.setActive(!0),this.root.addEventListener(`contextmenu`,e=>e.preventDefault())}setActive(e){e!==this.active&&(this.active=e,document.body.classList.toggle(`touch`,e))}button(e,t,n,r,i=!1){let a=hf(`button`,`g-tbtn ${t}`,e,n),o=null;a.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),a.setPointerCapture(e.pointerId),a.classList.add(`down`),o={id:e.pointerId,x:e.clientX,y:e.clientY,aim:!1},t===`interact`&&(this.ctxKind===`bench`||this.ctxKind===`shop`)?(this.onKey(`e`),o=null):r===`hold`?(this.held.add(t),this.taps.add(t)):r===`tap`?i||this.taps.add(t):this.onKey(r.slice(4))}),a.addEventListener(`pointermove`,e=>{if(o&&o.id===e.pointerId){if(o.aim)return this.stickMove(`aim`,e.pointerId,e.clientX,e.clientY);!i||this.aim||this.settings().touchFire!==`release`||Math.hypot(e.clientX-o.x,e.clientY-o.y)<of||(o.aim=!0,a.classList.remove(`down`),this.held.delete(t),this.taps.delete(t),this.stickStart(`aim`,e.pointerId,o.x,o.y),this.stickMove(`aim`,e.pointerId,e.clientX,e.clientY))}});let s=(e,n)=>{a.classList.remove(`down`),this.held.delete(t),o?.aim?this.stickEnd(`aim`,e.pointerId,n):o&&i&&r===`tap`&&!n&&this.taps.add(t),o=null};return a.addEventListener(`pointerup`,e=>s(e,!1)),a.addEventListener(`pointercancel`,e=>s(e,!0)),a}stickZone(e,t){e.addEventListener(`pointerdown`,n=>{n.preventDefault(),t===`aim`&&this.settings().touchFire===`lock`?this.tapAt={id:n.pointerId,x:n.clientX,y:n.clientY,t:performance.now()}:(t===`move`?this.move:this.aim)===null&&(e.setPointerCapture(n.pointerId),this.stickStart(t,n.pointerId,n.clientX,n.clientY))}),e.addEventListener(`pointermove`,e=>this.stickMove(t,e.pointerId,e.clientX,e.clientY)),e.addEventListener(`pointerup`,e=>{let n=this.tapAt;t===`aim`&&n&&n.id===e.pointerId?(this.tapAt=null,Math.hypot(e.clientX-n.x,e.clientY-n.y)<18&&performance.now()-n.t<450&&(this.pendingPick=[n.x,n.y])):this.stickEnd(t,e.pointerId,!1)}),e.addEventListener(`pointercancel`,e=>this.stickEnd(t,e.pointerId,!0))}stickStart(e,t,n,r){let i=e===`move`?this.moveBase:this.aimBase,a=e===`move`?this.moveKnob:this.aimKnob,o={id:t,ox:n,oy:r,x:n,y:r,t0:performance.now(),moved:!1,reached:!1,base:i,knob:a};e===`move`?this.move=o:(this.aim=o,this.aimSmooth=null),i.style.left=`${n}px`,i.style.top=`${r}px`,i.classList.add(`on`),this.place(o)}stickMove(e,t,n,r){let i=e===`move`?this.move:this.aim;if(!i||i.id!==t)return;i.x=n,i.y=r;let a=Math.hypot(i.x-i.ox,i.y-i.oy)/$d;a>ef&&(i.moved=!0),a>.5&&(i.reached=!0),this.place(i)}stickEnd(e,t,n){let r=e===`move`?this.move:this.aim;if(!r||r.id!==t)return;if(r.base.classList.remove(`on`,`cancel`),e===`move`){this.move=null;return}if(this.aim=null,n)return;let i=!r.moved&&performance.now()-r.t0<nf;this.cancelArmed(r)||(i||r.moved)&&(this.release={dir:i?null:this.aimAngle(),quick:i})}cancelArmed(e){let[t,n]=this.vec(e);return e.reached&&Math.hypot(t,n)<tf}place(e){let[t,n]=this.vec(e);e.knob.style.transform=`translate(${t*$d}px, ${n*$d}px)`,e===this.aim&&(e.base.classList.toggle(`rim`,Math.hypot(t,n)>.9),e.base.classList.toggle(`cancel`,this.cancelArmed(e)))}vec(e){let t=(e.x-e.ox)/$d,n=(e.y-e.oy)/$d,r=Math.hypot(t,n);return r>1&&(t/=r,n/=r),[t,n]}aimAngle(){return this.aimSmooth?Math.atan2(this.aimSmooth[0],this.aimSmooth[1]):null}static gap(e,t){let n=Math.abs(e-t);return n>Math.PI&&(n=Math.PI*2-n),n}shootable(e,t){let n=e.world;if(t<0||t>=n.count||!n.alive[t])return!1;let r=n.x[t]-e.px,i=n.z[t]-e.pz,a=Math.hypot(r,i);return a>Uu[e.weapon].range||a<.001?!1:n.grid.rayClear(e.px,e.pz,r/a,i/a,a,!1)>=a-1e-6}angleTo(e,t){return Math.atan2(e.world.x[t]-e.px,e.world.z[t]-e.pz)}target(t,n,r){if(this.shootable(t,this.lock)&&(n===null||e.gap(this.angleTo(t,this.lock),n)<r*af))return this.lock;let i=t.world,a=-1,o=1/0;for(let s=0;s<i.count;s++){if(!i.alive[s])continue;let c=Math.hypot(i.x[s]-t.px,i.z[s]-t.pz);if(c>Uu[t.weapon].range)continue;let l=n===null?0:e.gap(this.angleTo(t,s),n);if(l>r)continue;let u=c*(1+4*l);u>=o||!this.shootable(t,s)||(o=u,a=s)}return this.lock=a,a}updateLock(e){let t=e.world;if(this.pendingPick){let n=this.pickGround(this.pendingPick[0],this.pendingPick[1]);this.pendingPick=null;let r=-1,i=cf;if(n)for(let e=0;e<t.count;e++){if(!t.alive[e])continue;let a=Math.hypot(t.x[e]-n.x,t.z[e]-n.z);a<i&&(i=a,r=e)}r>=0&&(this.lockTarget=r,this.lockManual=!0,this.lockSeen=e.t)}let n=this.lockTarget;if(n>=0&&!t.alive[n]&&(n=-1),n>=0&&this.shootable(e,n)?this.lockSeen=e.t:n>=0&&(!this.lockManual||e.t-this.lockSeen>lf)&&(n=-1),n<0&&(this.lockManual=!1),!this.lockManual){let r=n>=0&&this.shootable(e,n)?Math.hypot(t.x[n]-e.px,t.z[n]-e.pz):1/0,i=n>=0&&r<1/0?n:-1,a=r-sf;for(let r=0;r<t.count;r++){if(!t.alive[r]||r===n)continue;let o=Math.hypot(t.x[r]-e.px,t.z[r]-e.pz);o>=a||!this.shootable(e,r)||(a=o,i=r)}n=i}this.lockTarget=n}stickAim(){let[e,t]=this.vec(this.aim);if(Math.hypot(e,t)<=ef)return this.aim.moved?this.aimAngle():null;let n=e,r=t/df,i=Math.hypot(n,r);n/=i,r/=i;let a=this.aimSmooth;return a?(a[0]+=(n-a[0])*.35,a[1]+=(r-a[1])*.35):this.aimSmooth=[n,r],this.aimAngle()}take(e,t){let n={moveX:0,moveZ:0,aimDir:null,aiming:!1,fire:!1,firePressed:!1,repeat:!1,reload:!1,melee:!1,medkit:!1,interact:!1,interactAlt:!1,cycleWeapon:0,throwAt:null,startNight:!1};if(t)return this.taps.clear(),this.release=null,this.pendingPick=null,n;if(this.move){let[e,t]=this.vec(this.move),r=Math.hypot(e,t);if(r>ef){let i=Math.min(1,(r-ef)/.7200000000000001)/r;n.moveX=e*i,n.moveZ=t*i}}let r=Uu[e.weapon].auto,i=this.settings(),a=t=>t>=0?this.angleTo(e,t):null;if(i.touchFire===`lock`){this.updateLock(e);let t=this.lockTarget,r=this.held.has(`fire`)||this.taps.has(`fire`)||i.autoFire&&t>=0&&!e.action,a=n.moveX!==0||n.moveZ!==0;t>=0&&(r||!a)&&(n.aimDir=this.angleTo(e,t),n.aiming=!0),r&&(n.fire=!0,n.repeat=!0,n.aiming=!0)}else if(this.aim){if(this.cancelArmed(this.aim))n.aimDir=this.lastAim;else{let t=this.stickAim();if(t!==null){n.aimDir=a(this.target(e,t,rf))??t,n.aiming=!0;let[i,o]=this.vec(this.aim);r&&Math.hypot(i,o)>.9&&(n.fire=!0)}}}if(this.release){let t=this.release;this.release=null;let i=t.dir;t.quick?i=a(this.target(e,null,rf))??this.lastAim??e.aim:i!==null&&(i=a(this.target(e,i,rf))??i),i!==null&&(n.aimDir=i,n.aiming=!t.quick,n.fire=!0,n.firePressed=!0,r&&(this.burstUntil=e.t+uf,this.burstDir=i))}else e.t<this.burstUntil&&!this.aim&&(n.aimDir=this.burstDir,n.fire=!0);if(n.aimDir===null&&(n.moveX!==0||n.moveZ!==0)&&(n.aimDir=Math.atan2(n.moveX,n.moveZ)),n.aimDir!==null&&(this.lastAim=n.aimDir),this.taps.has(`throw`)&&e.throwKind){let t=i.touchFire===`lock`?this.lockTarget:this.target(e,null,rf);n.throwAt=t>=0?{x:e.world.x[t],z:e.world.z[t]}:{x:e.px+Math.sin(e.aim)*6,z:e.pz+Math.cos(e.aim)*6}}return n.reload=this.taps.has(`reload`),n.melee=this.taps.has(`melee`),n.medkit=this.taps.has(`medkit`),n.startNight=this.taps.has(`night`),n.cycleWeapon=+!!this.taps.has(`weapon`),n.interact=(this.held.has(`interact`)||this.taps.has(`interact`))&&this.ctxKind!==`bench`&&this.ctxKind!==`shop`,n.interactAlt=this.held.has(`interactAlt`)||this.taps.has(`interactAlt`),this.taps.clear(),n}update(e,t,n){if(!this.active)return;this.root.classList.toggle(`hidden`,t||e.phase===`over`);let r=e.focusOn,i=e.action,a=e.stock.salvage,o=``,s=!1,c=!1,l=!1;if(i){let e=i.t/i.need;o=this.ctxKind,i.kind===`search`?this.ctxA.set(`search`,`搜索中…`,``,e):i.kind===`repair`?this.ctxA.set(`repair`,`修理中…`,``,e):i.wall===`vending`?(this.ctxB.set(`metal`,`建造中…`,dd.vending.name,e),s=!0):this.ctxA.set(`planks`,`建造中…`,dd.planks.name,e),this.ctxA.el.style.display=i.kind===`build`&&i.wall===`vending`?`none`:``}else if(r&&e.phase!==`over`){if(r.kind===`container`&&r.ready){o=`search`;let e={car:`汽车`,dumpster:`垃圾箱`,crate:`木箱`,locker:`储物柜`,shelf:`物资箱`}[r.c.kind];this.ctxA.set(`search`,`搜索`,`按住 · ${e}`)}else if(r.kind===`workbench`&&e.phase===`day`)o=`bench`,this.ctxA.set(`bench`,`工作台`,`制作与升级`);else if(r.kind===`merchant`&&e.phase===`day`)o=`shop`,this.ctxA.set(`shop`,`商人`,`现金 $${e.money}`);else if(r.kind===`slot`){let t=e.slotOptions(r.s);t.build?(o=`build`,this.ctxA.set(`planks`,dd.planks.name,`${dd.planks.cost} 零件`),this.ctxB.set(`metal`,dd.vending.name,`${dd.vending.cost} 零件`),c=a<dd.planks.cost,l=a<dd.vending.cost,s=!0):t.repair&&(o=`repair`,this.ctxA.set(`repair`,`修理`,`${fd.cost} 零件 · 现在 ${Math.round(t.hpShare*100)}%`),c=a<fd.cost)}this.ctxA.el.style.display=o?``:`none`}else this.ctxA.el.style.display=`none`;this.ctxKind=o,this.ctxB.el.style.display=s?``:`none`,this.ctxA.el.classList.toggle(`poor`,c),this.ctxB.el.classList.toggle(`poor`,l),this.medBtn.set(`medkit`,`医疗包`,String(e.stock.medkits)),this.medBtn.el.classList.toggle(`off`,e.stock.medkits<=0),this.nightBtn.el.style.display=e.phase===`day`?``:`none`;let u=e.otherGun;this.gunBtn.el.style.display=u?``:`none`,u&&this.gunBtn.set(`weapon`,Uu[u].name),this.meleeBtn.set(e.melee===`fists`?`melee`:`blade`,qu[e.melee].name);let d=e.throwKind;this.throwBtn.el.style.display=d?``:`none`,d&&this.throwBtn.set(`throw`,Yu[d].name,String(e.throwables[d]));let f=this.settings().touchFire===`lock`;this.root.classList.toggle(`lock-mode`,f),this.fireBtn.classList.toggle(`armed`,f&&this.lockTarget>=0),f||(this.lockTarget=-1),this.muteBtn.set(n?`muted`:`sound`,n?`开声音`:`静音`)}},_f=document;function vf(){return!!(_f.fullscreenEnabled||_f.webkitFullscreenEnabled)}function yf(){return!!(_f.fullscreenElement||_f.webkitFullscreenElement)}function bf(){return window.matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}function xf(){return/iPhone|iPod/.test(navigator.userAgent)&&!bf()}function Sf(){let e=document.documentElement;if(yf())return Promise.resolve();let t=e.requestFullscreen?e.requestFullscreen({navigationUI:`hide`}):e.webkitRequestFullscreen?.();return Promise.resolve(t).then(()=>screen.orientation.lock?.(`landscape`)).catch(()=>{})}function Cf(){return yf()?Promise.resolve(_f.exitFullscreen?_f.exitFullscreen():_f.webkitExitFullscreen?.()).catch(()=>{}):Promise.resolve()}function wf(){return yf()?Cf():Sf()}function Tf(e){document.addEventListener(`fullscreenchange`,e),document.addEventListener(`webkitfullscreenchange`,e)}var Ef={pistol:`survivor_pistol`,revolver:`survivor_pistol`,smg:`survivor_smg`,shotgun:`survivor_shotgun`,rifle:`survivor_rifle`,sniper:`survivor_sniper`,lmg:`survivor_lmg`},Df={bat:`survivor_bat`,machete:`survivor_machete`,axe:`survivor_axe`};function Of(e){return`<i class="icon">${e?`<img src="./sprites/${e}/icon.png" alt="">`:``}</i>`}var kf=[[`guns`,`枪械`],[`melee`,`近战`],[`throw`,`投掷`],[`supplies`,`补给`]];function Af(e){let t=[`伤害 ${e.pellets>1?`${e.damage}×${e.pellets}`:`${e.damage}`}`,`每秒 ${(1/e.cooldown).toFixed(1)} 发`,`弹匣 ${e.mag}`,`射程 ${e.range} 米`];return e.pierce&&t.push(`穿透 ${e.pierce}`),t.join(` · `)}var jf=(e,t,n)=>{let r=document.createElement(e);return r.className=t,n.appendChild(r),r},Mf=350,Nf=e=>{let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`},Pf=class{game;actions;root;phase;clock;hint;res;hpBar;hpText;refBar;refText;weapon;prompt;toasts;cross;vignette;dirs=[];panelEl=null;frameEl=null;backdrop=null;panel=null;attract=!1;touchControls=null;set touch(e){this.touchControls=e}get onTouch(){return this.touchControls?.active??!1}lastHp=1/0;hurt=0;benchKey=``;shopKey=``;shopTab=`guns`;constructor(e,t,n){this.game=t,this.actions=n,this.root=jf(`div`,`g-ui`,e),this.vignette=jf(`div`,`g-vignette`,this.root);let r=jf(`div`,`g-top`,this.root);this.phase=jf(`div`,`g-phase`,r),this.clock=jf(`div`,`g-clock`,r),this.hint=jf(`div`,`g-hint`,r),this.res=jf(`div`,`g-res`,this.root);let i=jf(`div`,`g-bars`,this.root),a=jf(`div`,`g-bar hp`,i);this.hpBar=jf(`i`,``,a),this.hpText=jf(`span`,``,a);let o=jf(`div`,`g-bar refuge`,i);this.refBar=jf(`i`,``,o),this.refText=jf(`span`,``,o),this.weapon=jf(`div`,`g-weapon`,this.root),this.prompt=jf(`div`,`g-prompt`,this.root),this.toasts=jf(`div`,`g-toasts`,this.root),this.cross=jf(`div`,`g-cross`,this.root);for(let e=0;e<8;e++){let e=jf(`div`,`g-dir`,this.root);e.style.display=`none`,this.dirs.push(e)}}setAttract(e){this.attract=e,this.root.classList.toggle(`attract`,e)}get blocking(){return this.panel!==null}setCrosshair(e,t,n,r,i,a){let o=Math.max(5,Math.min(90,r)),s=this.cross.style;s.left=`${e}px`,s.top=`${t}px`,s.width=s.height=`${o*2}px`,s.margin=`${-o}px 0 0 ${-o}px`,s.borderColor=i>.97?`rgba(255, 200, 70, 0.95)`:a?`rgba(255, 245, 220, 0.9)`:`rgba(255, 245, 220, 0.45)`,s.display=n&&!this.panel?`block`:`none`}setThreats(e){this.dirs.forEach((t,n)=>{let r=e[n];r?(t.style.display=`block`,t.style.left=`${r.x}px`,t.style.top=`${r.y}px`,t.style.transform=`rotate(${r.angle}rad)`):t.style.display=`none`})}update(e){if(this.attract)return;let t=this.game(),n=t.phase===`night`||t.phase===`over`&&t.darkness>.5;this.phase.className=`g-phase ${n?`night`:`day`}`,this.phase.textContent=t.phase===`night`?`第 ${t.night} 夜`:t.phase===`dawn`?`第 ${t.night} 夜 · 天亮了`:`第 ${t.day} 天`,this.clock.textContent=t.phase===`day`||t.phase===`night`?Nf(Math.max(0,t.clock)):``,this.hint.innerHTML=t.phase===`day`?`今夜：<b>${t.tonight.name}</b>（${t.tonight.forecast}）　<kbd>N</kbd> 提前入夜`:``;let r=t.stock;this.res.innerHTML=`<span>现金 <b>$${t.money}</b></span><span>零件 <b>${r.salvage}</b></span><span>弹药 <b>${r.ammo}</b></span><span>医疗包 <b>${r.medkits}</b> <small>H</small></span><span>击杀 <b>${t.kills}</b></span>`;let i=Math.max(0,t.hp/t.maxHp);this.hpBar.style.width=`${i*100}%`,this.hpText.textContent=`生命 ${Math.max(0,Math.ceil(t.hp))} / ${t.maxHp}`;let a=t.refugeMax;this.refBar.style.width=`${Math.max(0,t.refugeHp/a)*100}%`,this.refText.textContent=`据点 ${Math.max(0,Math.ceil(t.refugeHp))} / ${a}`,t.hp<this.lastHp-.5&&this.lastHp!==1/0&&(this.hurt=1),this.lastHp=t.hp,this.hurt=Math.max(0,this.hurt-e*2.5),this.vignette.style.opacity=String(Math.max(this.hurt*.9,i<.3?.35+Math.sin(t.t*6)*.1:0));let o=Uu[t.weapon],s=t.reloadT>0?1-t.reloadT/t.reloadOf(t.weapon):-1;this.weapon.innerHTML=`<div class="name">${o.name}</div><div class="ammo">${t.mag[t.weapon]}<small> / ${t.magSize(t.weapon)}　备弹 ${r.ammo}</small></div>`+(s>=0?`<div class="g-reload"><i style="width:${s*100}%"></i></div>`:``)+`<div class="slots">${this.slotsHtml(t)}</div>`,this.prompt.innerHTML=this.promptHtml(t);let c=t.t;this.toasts.innerHTML=t.toasts.filter(e=>c-e.t<3.2).map(e=>`<div class="g-toast ${e.tone}" style="opacity:${Math.min(1,(3.2-(c-e.t))/.5)}">${e.text}</div>`).join(``),t.dawnReady&&this.panel!==`dawn`&&this.showDawn(),t.phase===`over`&&this.panel!==`over`&&this.showOver(),this.panel===`bench`&&this.renderBench(),this.panel===`shop`&&this.renderShop()}slotsHtml(e){let t=e=>this.onTouch?``:`${e} `,n=(n,r)=>n?`<span class="${n===e.weapon?`on`:``}">${t(r)}${Uu[n].name}</span>`:``,r=e.throwKind;return[n(e.primary,`1`),n(e.secondary,`2`),`<span>${t(`V`)}${qu[e.melee].name}</span>`,r?`<span>${t(`T`)}${Yu[r].name}×${e.throwables[r]}</span>`:``].filter(Boolean).join(`　`)}promptHtml(e){if(this.panel)return``;let t=e.action;if(t&&this.onTouch)return``;if(t)return`${t.kind===`search`?`搜索中`:t.kind===`build`?`建造${dd[t.wall??`planks`].name}`:`修理中`}…<div class="g-progress"><i style="width:${t.t/t.need*100}%"></i></div>`;let n=e.focusOn;if(!n)return``;if(this.onTouch){if(n.kind===`container`)return n.ready?``:`今天已经搜过了`;if(n.kind===`workbench`)return e.phase===`day`?``:`工作台：只能在白天用`;if(n.kind===`merchant`)return e.phase===`day`?``:`商人：天黑了，收摊了`;let t=e.slotOptions(n.s);return t.build?n.s.label:t.repair?`${n.s.label} ${Math.round(t.hpShare*100)}%`:`${n.s.label}　完好`}if(n.kind===`container`){let e={car:`汽车`,dumpster:`垃圾箱`,crate:`木箱`,locker:`储物柜`,shelf:`物资箱`}[n.c.kind];return n.ready?`<kbd>F</kbd> 按住搜索${e}`:`${e}：今天已经搜过了`}if(n.kind===`workbench`)return e.phase===`day`?`<kbd>E</kbd> 工作台`:`工作台：只能在白天用`;if(n.kind===`merchant`)return e.phase===`day`?`<kbd>E</kbd> 商人：买枪、近战武器和补给`:`商人：天黑了，收摊了`;let r=e.slotOptions(n.s);return r.build?`${n.s.label}　<kbd>F</kbd> ${dd.planks.name}（${dd.planks.cost} 零件）　<kbd>G</kbd> ${dd.vending.name}（${dd.vending.cost} 零件）`:r.repair?`${n.s.label} ${Math.round(r.hpShare*100)}%　<kbd>F</kbd> 按住修理（${fd.cost} 零件）`:`${n.s.label}　完好`}open(e,t){this.close(),this.panel=e;let n=e===`bench`||e===`shop`||e===`pause`,r=performance.now();if(this.backdrop=jf(`div`,`g-backdrop`,this.root),this.frameEl=jf(`div`,`g-panel p-${e}`,this.root),n){let e=jf(`button`,`g-x`,jf(`div`,`g-phead`,this.frameEl));e.innerHTML=`&times;`,e.title=`关闭`,e.addEventListener(`click`,e=>{e.stopPropagation(),this.close()}),this.backdrop.addEventListener(`click`,()=>{performance.now()-r>=Mf&&this.close()})}this.panelEl=jf(`div`,`g-pbody`,this.frameEl),this.panelEl.innerHTML=t,this.frameEl.addEventListener(`click`,e=>{performance.now()-r<Mf&&(e.stopPropagation(),e.preventDefault())},!0)}close(){this.frameEl?.remove(),this.backdrop?.remove(),this.frameEl=null,this.backdrop=null,this.panelEl=null,this.panel=null,this.benchKey=``,this.shopKey=``}bind(e,t){this.panelEl?.querySelector(e)?.addEventListener(`click`,e=>{e.stopPropagation(),t()})}togglePause(){if(this.panel===`pause`)return this.close();this.panel||(this.open(`pause`,`<h2>暂停</h2>
       <div class="menu"><button id="g-resume">继续</button><button id="g-settings" class="quiet">设置</button>${vf()?`<button id="g-fs" class="quiet">${yf()?`退出全屏`:`全屏`}</button>`:``}<button id="g-restart" class="quiet">重新开始这张地图</button><button id="g-menu" class="quiet">回主菜单</button></div>
       <p class="note">进度在每天早上自动存档；回主菜单后可以从那天早上继续。</p>`),this.bind(`#g-resume`,()=>this.close()),this.bind(`#g-fs`,()=>{this.close(),wf()}),this.bind(`#g-settings`,()=>{this.close(),this.actions.settings()}),this.bind(`#g-restart`,()=>{this.close(),this.actions.restart()}),this.bind(`#g-menu`,()=>{this.close(),this.actions.toMenu()}))}openFocused(){let e=this.game();this.panel||(e.canUseBench()?(this.open(`bench`,``),this.renderBench()):e.canUseShop()&&(this.open(`shop`,``),this.renderShop()))}renderShop(){let e=this.game();if(!e.canUseShop())return this.close();let t=JSON.stringify([e.money,e.stock,e.owned,e.primary,e.secondary,e.weapon,e.melee,e.ownedMelee,e.throwables,e.throwSel,this.shopTab]);if(t===this.shopKey)return;this.shopKey=t;let n=t=>`<button data-act="buy" ${e.money>=t?``:`disabled`}>$${t}</button>`,r=e=>`<button disabled>第 ${e} 天到货</button>`,i=(e,t,n,r,i,a=``)=>`<div class="row" data-id="${e}">${a}<span class="what"><b>${t}</b>${n?` <small class="tag">${n}</small>`:``}<div class="desc">${r}</div></span>${i}</div>`,a=``;if(this.shopTab===`guns`)a=Wu.map(t=>{let a=Uu[t],o=t===e.primary||t===e.secondary?`<button class="on" disabled>已装备</button>`:e.owned.includes(t)?`<button data-act="equip">装备</button>`:e.onSale(a.minNight)?n(a.price):r(a.minNight);return i(t,a.name,a.slot===`primary`?`主武器`:`副武器`,`${a.blurb}<br>${Af(a)}`,o,Of(Ef[t]))}).join(``),a=`<p class="note">主武器、副武器各带一把，按 1 / 2 或 Q 切换；买下的枪放在这里，随时换。</p>${a}`;else if(this.shopTab===`melee`)a=Ju.map(t=>{let a=qu[t],o=t===e.melee?`<button class="on" disabled>已装备</button>`:e.ownedMelee.includes(t)?`<button data-act="equip">装备</button>`:e.onSale(a.minNight)?n(a.price):r(a.minNight),s=Of(t===`fists`?null:Df[t]);return i(t,a.name,``,`${a.blurb}<br>伤害 ${a.damage} · 每秒 ${(1/a.cooldown).toFixed(1)} 下 · 够得着 ${a.reach} 米`,o,s)}).join(``),a=`<p class="note">近战键（V / 空格）用的就是它，没子弹时开火也是它。</p>${a}`;else if(this.shopTab===`throw`)a=Xu.map(t=>{let a=Yu[t],o=e.throwables[t],s=o>0&&e.throwKind===t,c=e.onSale(a.minNight)?o>=a.cap?`<button disabled>带满了</button>`:n(a.price):r(a.minNight),l=o>0&&!s?`<button data-act="select" class="quiet">先扔这个</button>`:``;return i(t,`${a.name} <small>${o} / ${a.cap}</small>`,s?`先扔`:``,a.blurb,`<span class="btns">${l}${c}</span>`,Of(`item_${t}`))}).join(``),a=`<p class="note">按 T 扔向准星（手机上扔向锁定的丧尸）。</p>${a}`;else{let t=od.ammo,r=od.medkit;a=i(`ammo`,`${t.name} ×${t.amount}`,``,`备弹 ${e.stock.ammo} / ${hd.ammo}`,e.stock.ammo+t.amount>hd.ammo?`<button disabled>带满了</button>`:n(t.price))+i(`medkit`,r.name,``,`现有 ${e.stock.medkits} / ${hd.medkits}`,e.stock.medkits>=hd.medkits?`<button disabled>带满了</button>`:n(r.price))}this.panelEl.innerHTML=`
      <h2>商人</h2><p>现金 <b class="cash">$${e.money}</b>　<small>杀丧尸、撑过一夜都能挣钱</small></p>
      <div class="tabs">${kf.map(([e,t])=>`<button data-tab="${e}" class="${e===this.shopTab?`on`:``}">${t}</button>`).join(``)}</div>
      <div class="shop">${a}</div>
      <div class="actions"><button id="g-close">离开（Esc）</button></div>`,this.panelEl.querySelectorAll(`button[data-tab]`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),this.shopTab=e.dataset.tab,this.renderShop()})),this.panelEl.querySelectorAll(`button[data-act]`).forEach(t=>t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.closest(`.row`).dataset.id,i=t.dataset.act===`buy`;this.shopTab===`guns`?i?e.buyGun(r):e.equipGun(r):this.shopTab===`melee`?i?e.buyMelee(r):e.equipMelee(r):this.shopTab===`throw`?i?e.buyThrowable(r):e.selectThrowable(r):r===`ammo`?e.buyAmmo():e.buyMedkit(),this.renderShop()})),this.bind(`#g-close`,()=>this.close())}renderBench(){let e=this.game();if(!e.canUseBench())return this.close();let t=gd.ammo(e.night),n=t=>{let n=e.upgradeCost(t);return{id:t,cost:n,lvl:e.upgradeLevel(t),ok:n!==null&&e.stock.salvage>=n}},r=[...ud,`vitality`,`walls`].map(e=>n(e)),i=JSON.stringify([e.stock,e.weapon,r.map(e=>e.lvl)]);if(i===this.benchKey)return;this.benchKey=i;let a=Uu[e.weapon];this.panelEl.innerHTML=`
      <h2>工作台</h2><p>零件 ${e.stock.salvage}　弹药 ${e.stock.ammo}　医疗包 ${e.stock.medkits}</p>
      <h3>制作</h3>
      <div class="row"><span>${a.name}弹药 ×${a.ammoYield}</span><button data-craft="ammo" ${e.stock.salvage>=t?``:`disabled`}>${t} 零件</button></div>
      <div class="row"><span>医疗包</span><button data-craft="medkit" ${e.stock.salvage>=gd.medkit?``:`disabled`}>${gd.medkit} 零件</button></div>
      <h3>升级（${a.name}）</h3>
      ${r.map((e,t)=>`${t===3?`<h3>据点与体能</h3>`:``}<div class="row"><span>${ld[e.id].name} <small>${e.lvl}/${ld[e.id].max}</small><div class="desc">${ld[e.id].desc}</div></span><button data-up="${e.id}" ${e.ok?``:`disabled`}>${e.cost===null?`已满`:`${e.cost} 零件`}</button></div>`).join(``)}
      <div class="actions"><button id="g-close">离开（Esc）</button></div>`,this.panelEl.querySelectorAll(`button[data-craft]`).forEach(t=>t.addEventListener(`click`,n=>{n.stopPropagation(),t.dataset.craft===`ammo`?e.craftAmmo():e.craftMedkit(),this.renderBench()})),this.panelEl.querySelectorAll(`button[data-up]`).forEach(t=>t.addEventListener(`click`,n=>{n.stopPropagation(),e.buyUpgrade(t.dataset.up),this.renderBench()})),this.bind(`#g-close`,()=>this.close())}showDawn(){let e=this.game(),t=e.lastReport;this.open(`dawn`,`<h2>第 ${t.night} 夜撑过去了</h2>
       <table>
         <tr><td>击杀</td><td class="num">${t.kills}</td></tr>
         <tr><td>受到伤害</td><td class="num">${Math.round(t.damageTaken)}</td></tr>
         <tr><td>被突破的路障</td><td class="num">${t.wallsLost}</td></tr>
         <tr><td>据点损失</td><td class="num">${t.refugeDamage}</td></tr>
         <tr><td>挣到现金</td><td class="num">$${t.earned}</td></tr>
       </table>
       <p>天亮后生命恢复一点，街上的箱子和车又能搜了，商人也出摊了。下一夜会更多、更快、更硬。</p>
       <div class="actions"><button id="g-next">迎接第 ${t.night+1} 天</button></div>`),this.bind(`#g-next`,()=>{this.close(),e.nextDay()})}showOver(){let e=this.game(),t=e.lastReport;this.open(`over`,`<h2>${e.overCause===`refuge`?`据点失守`:`你倒下了`}</h2>
       <p>倒在第 ${e.night} ${t&&e.darkness>.5?`夜`:`天`}，总击杀 ${e.kills}。</p>
       <div class="actions"><button id="g-menu" class="quiet">回主菜单</button><button id="g-retry">从第 ${e.day} 天早上重来</button></div>`),this.bind(`#g-menu`,()=>{this.close(),this.actions.toMenu()}),this.bind(`#g-retry`,()=>{this.close(),this.actions.retryDay()})}},Ff={lock:{name:`锁定开火`},release:{name:`拖动瞄准`}},If={high:{name:`高`,dpr:1.5},medium:{name:`中`,dpr:1.15},low:{name:`低（省电）`,dpr:.85}},Lf={near:{name:`近`,zoom:.86},mid:{name:`中`,zoom:1},far:{name:`远`,zoom:1.15}},Rf=`zombie3d.settings`,zf={volume:.8,quality:`high`,camera:`mid`,touchFire:`lock`,autoFire:!1};function Bf(){try{let e=JSON.parse(localStorage.getItem(Rf)??`{}`);return{volume:typeof e.volume==`number`?Math.min(1,Math.max(0,e.volume)):zf.volume,quality:e.quality&&e.quality in If?e.quality:zf.quality,camera:e.camera&&e.camera in Lf?e.camera:zf.camera,touchFire:e.touchFire&&e.touchFire in Ff?e.touchFire:zf.touchFire,autoFire:typeof e.autoFire==`boolean`?e.autoFire:zf.autoFire}}catch{return{...zf}}}function Vf(e){try{localStorage.setItem(Rf,JSON.stringify(e))}catch{}}var Hf=`试玩版 0.4`;function Uf(e){return e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e])}var Wf=class{a;root;body;screen=`home`;picked=null;back=null;open=!1;constructor(e,t){this.a=t,this.root=document.createElement(`div`),this.root.className=`m-root`,this.root.innerHTML=`
      <div class="m-shade"></div>
      <div class="m-col">
        <div class="m-title">
          <div class="m-name">夜班丧尸<span>3D</span></div>
          <div class="m-sub">NIGHT SHIFT · ZOMBIES</div>
        </div>
        <div class="m-body"></div>
        <div class="m-foot">${Hf}　·　背景是自动驾驶在实际玩</div>
      </div>
      <button class="m-fs"></button>`,this.root.style.display=`none`,e.appendChild(this.root),this.body=this.root.querySelector(`.m-body`);let n=this.root.querySelector(`.m-fs`),r=()=>n.innerHTML=yf()?`<i>⤡</i>退出全屏`:`<i>⤢</i>全屏`;vf()?(r(),Tf(r),n.addEventListener(`click`,e=>{e.stopPropagation(),wf()})):n.remove(),this.root.addEventListener(`pointerdown`,e=>e.stopPropagation())}show(e=`home`){this.open=!0,this.back=null,this.root.classList.remove(`overlay`),this.root.style.display=``,this.go(e)}hide(){this.open=!1,this.root.style.display=`none`}showSettingsOver(e){this.open=!0,this.back=e,this.root.classList.add(`overlay`),this.root.style.display=``,this.go(`settings`)}escape(){if(!this.open)return!1;if(this.back){let e=this.back;return this.hide(),e(),!0}return this.screen!==`home`&&(this.go(`home`),!0)}go(e){this.screen=e,this.root.dataset.screen=e,e===`home`?this.home():e===`maps`?this.maps():e===`help`?this.help():e===`settings`?this.settings():this.credits()}bind(e,t){this.body.querySelectorAll(e).forEach(e=>e.addEventListener(`click`,n=>{n.stopPropagation(),t(e)}))}backButton(e=`返回`){return`<button class="m-back" data-back>‹ ${e}</button>`}bindBack(){this.bind(`[data-back]`,()=>this.back?this.escape():this.go(`home`))}home(){let e=this.a.saved(),t=(e,t,n=``)=>`<button class="m-item" data-go="${e}"><b>${t}</b>${n?`<small>${Uf(n)}</small>`:``}</button>`;this.body.innerHTML=`
      <p class="m-tag">白天搜刮，入夜死守。封住围墙的每个缺口，守住发电机，撑到天亮。</p>
      <nav class="m-list">
        ${e?t(`resume`,`继续`,`${e.map} · 第 ${e.day} 天早上`):``}
        ${t(`maps`,`新游戏`)}
        ${t(`help`,`操作说明`)}
        ${t(`settings`,`设置`)}
        ${t(`credits`,`致谢`)}
      </nav>`,this.bind(`[data-go]`,e=>{let t=e.dataset.go;if(t===`resume`)return this.a.resume();this.go(t)})}maps(){this.picked=null,this.body.innerHTML=`
      ${this.backButton()}
      <h3>选择地图</h3>
      <div class="m-maps">${pu.map(e=>`<button class="m-map" data-map="${e.id}">
          <b>${e.name}</b><span>${e.blurb}</span>
          <i>${e.tags.map(e=>`<em>${e}</em>`).join(``)}</i>
        </button>`).join(``)}</div>
      <div class="m-row"><button class="m-go" disabled>选一张地图</button></div>`;let e=this.body.querySelector(`.m-go`);this.bind(`[data-map]`,t=>{let n=t.dataset.map;if(this.picked===n)return this.a.start(n);this.picked=n,this.body.querySelectorAll(`.m-map`).forEach(e=>e.classList.toggle(`on`,e===t)),e.disabled=!1,e.textContent=`开始：${pu.find(e=>e.id===n).name}`,this.a.preview(n)}),this.bind(`.m-go`,()=>this.picked&&this.a.start(this.picked)),this.bindBack()}help(){let e=this.a.touch(),t=e=>e.map(([e,t])=>`<kbd>${e}</kbd><span>${t}</span>`).join(``),n=t([[`WASD`,`移动`],[`鼠标左键`,`开火（腰射很散）`],[`右键 / Shift`,`按住瞄准：站定越久越准，移动、转身、开枪、挨打都会散`],[`R`,`换弹`],[`空格 / V`,`近战：推开，或者买来的棒球棍、砍刀、消防斧`],[`T`,`朝准星扔燃烧瓶或手雷`],[`F`,`按住：搜索、建木板路障、修理`],[`G`,`按住：建铁板路障`],[`E`,`工作台、商人（白天）`],[`H`,`医疗包 +35`],[`1 / 2 / Q / 滚轮`,`切换主武器、副武器`],[`N`,`提前入夜`],[`M`,`静音`],[`Esc`,`暂停`]]),r=t([[`左手`,`按住左半屏任意处拖动：移动`],[`开火键`,`按住打锁定的丧尸（它脚下有红圈）；没有锁定就朝前打`],[`点丧尸`,`点屏幕上的哪只就锁定哪只`],[`站着不动`,`自动瞄准锁定目标，红圈收紧，变金色时最准、最容易爆头`],[`按钮`,`搜索、封路障、修理要按住不放`],[`投掷键`,`把燃烧瓶或手雷扔向锁定的丧尸`],[`设置`,`可以改成拖动瞄准，或者打开自动开火`]]);this.body.innerHTML=`
      ${this.backButton()}
      <h3>操作说明</h3>
      <div class="m-tabs"><button data-tab="keys" class="${e?``:`on`}">键盘鼠标</button><button data-tab="touch" class="${e?`on`:``}">手机触屏</button></div>
      <div class="m-keys" data-pane="keys" ${e?`hidden`:``}>${n}</div>
      <div class="m-keys" data-pane="touch" ${e?``:`hidden`}>${r}</div>
      <h3>怎么活下去</h3>
      <ul class="m-tips">
        <li>白天搜车、垃圾箱和木箱，拿零件和弹药；每处每天只能搜一次。</li>
        <li>零件用来封缺口：木板便宜，铁板结实。破了的路障可以修。</li>
        <li>杀丧尸、撑过一夜都能挣现金，白天去营地里的商人那儿买枪、近战武器、燃烧瓶、手雷和补给。</li>
        <li>丧尸要的是中间的发电机，也要你。发电机被拆完就输了。</li>
        <li>站定瞄准再开枪，准头和爆头率都高得多；边跑边打基本是浪费子弹。</li>
        <li>白天的提示栏会预报今夜：暴风雨会停电，浓雾看不远。</li>
      </ul>`,this.bind(`[data-tab]`,e=>{let t=e.dataset.tab;this.body.querySelectorAll(`[data-tab]`).forEach(t=>t.classList.toggle(`on`,t===e)),this.body.querySelectorAll(`[data-pane]`).forEach(e=>e.hidden=e.dataset.pane!==t)}),this.bindBack()}settings(){let e=this.a.settings(),t=(e,t,n)=>`<div class="m-seg" data-seg="${e}">${Object.keys(t).map(e=>`<button data-v="${e}" class="${e===n?`on`:``}">${t[e].name}</button>`).join(``)}</div>`;this.body.innerHTML=`
      ${this.backButton(this.back?`回到暂停`:`返回`)}
      <h3>设置</h3>
      <label class="m-set"><span>音量</span><input type="range" min="0" max="100" step="5" value="${Math.round(e.volume*100)}" data-volume><output>${Math.round(e.volume*100)}</output></label>
      <div class="m-set"><span>画质</span>${t(`quality`,If,e.quality)}</div>
      <div class="m-set"><span>镜头</span>${t(`camera`,Lf,e.camera)}</div>
      <h4>手机操作</h4>
      <div class="m-set"><span>射击</span>${t(`touchFire`,Ff,e.touchFire)}</div>
      <div class="m-set"><span>自动开火</span>${t(`autoFire`,{off:{name:`关`},on:{name:`开`}},e.autoFire?`on`:`off`)}</div>
      <p class="m-note">锁定开火：自动锁定最近的丧尸（脚下红圈），按住开火键打它，点屏幕上的丧尸换目标；站着不动红圈会收紧，变金色时最准。拖动瞄准：右半屏拖动瞄准，松手开一枪，拖回中心再松手取消。自动开火：锁定开火时不用按键，自动打锁定的目标。</p>
      <p class="m-note">画质调低可以让旧手机更流畅、更省电；镜头拉远看得更远，但人物更小。</p>
      ${xf()?`<p class="m-note">iPhone 的浏览器不支持网页全屏：在 Safari 的分享菜单里选「添加到主屏幕」，从桌面图标打开就是全屏。</p>`:``}`;let n=this.body.querySelector(`[data-volume]`),r=this.body.querySelector(`output`);n.addEventListener(`input`,()=>{r.textContent=n.value,this.a.changeSettings({...this.a.settings(),volume:Number(n.value)/100})}),n.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.bind(`[data-seg] button`,e=>{let t=e.parentElement.dataset.seg;e.parentElement.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`on`,t===e));let n=t===`autoFire`?e.dataset.v===`on`:e.dataset.v;this.a.changeSettings({...this.a.settings(),[t]:n})}),this.bindBack()}credits(){let e=[[`手枪`,`morganpurkis`],[`步枪 / 冲锋枪`,`morganpurkis`],[`霰弹枪`,`ONgiaunbg`],[`换弹`,`MaximBomba`],[`倒地`,`000600`],[`翻找`,`binxa`],[`敲打`,`16GPanskaToman_Kristian`],[`警报`,`Frenchyboy`],[`低吼`,`Darsycho`],[`丧尸死亡`,`OwNathan`],[`脚步`,`Yuval`],[`夜间环境`,`techiew`],[`雷声`,`Yoyodaman234`]];this.body.innerHTML=`
      ${this.backButton()}
      <h3>致谢</h3>
      <p class="m-note">音效来自 Freesound 和 OpenGameArt，全部是 CC0 公共领域素材，感谢作者们：</p>
      <div class="m-credits">${e.map(([e,t])=>`<span>${e}</span><b>${t}</b>`).join(``)}</div>
      <p class="m-note">其余声音在游戏里实时合成。渲染用 three.js，角色在 Blender 里程序化建模后渲染成像素图。</p>`,this.bindBack()}};function Gf(){return{uLightMap:{value:null},uLightRect:{value:new Gt(0,0,1,1)},uFogColor:{value:new K(.016,.022,.045)},uFog:{value:new Et(26,52)},uSky:{value:new K(.11,.14,.26)},uGround:{value:new K(.04,.045,.07)},uMoonDir:{value:new W(-.35,.8,.45).normalize()},uMoonColor:{value:new K(.1,.12,.2)},uSpriteAmbient:{value:new K(.2,.24,.38)},uMinLight:{value:.3}}}var Kf=`
uniform sampler2D uLightMap;
uniform vec4 uLightRect;
uniform vec3 uFogColor;
uniform vec2 uFog;
vec3 sampleLightMap(vec2 xz) {
  return texture2D(uLightMap, (xz - uLightRect.xy) * uLightRect.zw).rgb * ${2 .toFixed(1)};
}
float fogFactor(float viewDepth) {
  return clamp((viewDepth - uFog.x) / (uFog.y - uFog.x), 0.0, 1.0);
}
`,qf=8,Jf=class{capacity;mesh;count=0;data;buf;constructor(e,t){this.capacity=e,this.data=new Float32Array(e*qf);let n=new na,r=new hi(1,1);n.index=r.index,n.setAttribute(`position`,r.getAttribute(`position`)),this.buf=new ya(this.data,qf,1).setUsage(Ve),n.setAttribute(`iPos`,new Ar(this.buf,4,0)),n.setAttribute(`iCol`,new Ar(this.buf,4,4)),n.instanceCount=0;let i=new wi({uniforms:{...t},vertexShader:`
        ${Kf}
        attribute vec4 iPos; // xyz, size (m)
        attribute vec4 iCol; // rgb, glow 0..1 (ignores darkness)
        uniform vec3 uSpriteAmbient;
        uniform float uMinLight;
        flat varying vec3 vColor;
        flat varying float vFog;
        void main() {
          vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
          mv.xy += position.xy * iPos.w;
          gl_Position = projectionMatrix * mv;
          vec3 light = clamp(uSpriteAmbient + sampleLightMap(iPos.xz), vec3(uMinLight), vec3(1.6));
          vColor = iCol.rgb * mix(light, vec3(1.0), iCol.w);
          vFog = fogFactor(-mv.z);
        }`,fragmentShader:`
        uniform vec3 uFogColor;
        flat varying vec3 vColor;
        flat varying float vFog;
        void main() {
          gl_FragColor = vec4(mix(vColor, uFogColor, vFog), 1.0);
        }`});this.mesh=new ei(n,i),this.mesh.frustumCulled=!1}set(e,t,n,r,i,a,o,s,c=0){let l=e*qf,u=this.data;u[l]=t,u[l+1]=n,u[l+2]=r,u[l+3]=i,u[l+4]=a,u[l+5]=o,u[l+6]=s,u[l+7]=c}commit(){let e=Math.min(this.count,this.capacity);this.mesh.geometry.instanceCount=e,this.buf.clearUpdateRanges(),this.buf.addUpdateRange(0,e*qf),this.buf.needsUpdate=!0}},Yf=class{capacity;x;y;z;vx;vy;vz;life;age;size;col;count=0;seed=12345;constructor(e){this.capacity=e,this.x=new Float32Array(e),this.y=new Float32Array(e),this.z=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.size=new Float32Array(e),this.col=new Float32Array(e*3)}rand(){return this.seed=this.seed*16807%2147483647,this.seed/2147483647}burst(e,t,n,r,i,a,o,s,c,l,u=.15){for(let d=0;d<e;d++){if(this.count>=this.capacity)return;let e=this.count++,d=Math.atan2(i,a)+(this.rand()-.5)*1.6,f=o*(.4+this.rand()*.8);this.x[e]=t,this.y[e]=n,this.z[e]=r,this.vx[e]=Math.sin(d)*f,this.vz[e]=Math.cos(d)*f,this.vy[e]=1+this.rand()*2.5,this.life[e]=s*(.6+this.rand()*.8),this.age[e]=0,this.size[e]=c*(.6+this.rand()*.8);let p=1-u+this.rand()*u*2;this.col[e*3]=l[0]*p,this.col[e*3+1]=l[1]*p,this.col[e*3+2]=l[2]*p}}update(e){let t=0;for(let n=0;n<this.count;n++){let r=this.age[n]+e;if(r>=this.life[n])continue;let i=this.y[n]+this.vy[n]*e,a=this.vy[n]-14*e,o=this.vx[n],s=this.vz[n];i<=.02&&(i=.02,a=0,o*=.6,s*=.6),this.x[t]=this.x[n]+o*e,this.y[t]=i,this.z[t]=this.z[n]+s*e,this.vx[t]=o,this.vy[t]=a,this.vz[t]=s,this.life[t]=this.life[n],this.age[t]=r,this.size[t]=this.size[n],this.col[t*3]=this.col[n*3],this.col[t*3+1]=this.col[n*3+1],this.col[t*3+2]=this.col[n*3+2],t++}this.count=t}},Xf={build:34,night:22,indoor:13},Zf=class{distance;camera;target=new W;offset=new W;constructor(e,t=Xf.night){this.distance=t,this.camera=new ea(40,e,1,140)}follow(e,t,n){let r=Tt.degToRad(50);this.target.set(e,t,n),this.offset.set(Math.sin(0)*Math.cos(r),Math.sin(r),Math.cos(0)*Math.cos(r)),this.camera.position.copy(this.target).addScaledVector(this.offset,this.distance),this.camera.lookAt(this.target)}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}groundPoint(e,t,n=0,r=new W){let i=new W(e,t,.5).unproject(this.camera).sub(this.camera.position).normalize();if(Math.abs(i.y)<1e-5)return null;let a=(n-this.camera.position.y)/i.y;return a<0?null:r.copy(this.camera.position).addScaledVector(i,a)}},Qf={transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,blendEquation:100},$f=class{capacity;mesh;count=0;data;buf;constructor(e,t){this.capacity=e,this.data=new Float32Array(e*8);let n=new na,r=new hi(1,1);n.index=r.index,n.setAttribute(`position`,r.getAttribute(`position`)),this.buf=new ya(this.data,8,1).setUsage(Ve),n.setAttribute(`iPos`,new Ar(this.buf,4,0)),n.setAttribute(`iLife`,new Ar(this.buf,4,4)),n.instanceCount=0;let i=new wi({uniforms:{...t},vertexShader:`
        ${Kf}
        attribute vec4 iPos;
        attribute vec4 iLife;
        varying vec2 vLocal;
        flat varying vec2 vLife;
        flat varying float vFog;
        void main() {
          vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
          float c = cos(iLife.z), s = sin(iLife.z); // per-particle spin breaks up the pixel grid
          vec2 p = mat2(c, s, -s, c) * position.xy;
          mv.xy += p * iPos.w;
          gl_Position = projectionMatrix * mv;
          vLocal = position.xy;
          vLife = iLife.xy;
          vFog = fogFactor(-mv.z);
        }`,fragmentShader:`
        varying vec2 vLocal;
        flat varying vec2 vLife;
        flat varying float vFog;
        void main() {
          vec2 q = (floor(vLocal * 8.0) + 0.5) / 8.0; // 8x8 chunky pixels per particle
          float d = length(q) * 2.0;
          if (d > 1.0) discard;
          float t = vLife.x;
          vec3 col = mix(vec3(1.0, 0.92, 0.62), vec3(1.0, 0.5, 0.1), smoothstep(0.0, 0.35, t));
          col = mix(col, vec3(0.55, 0.08, 0.02), smoothstep(0.35, 0.9, t));
          // hundreds overlap in the stream: keep each one faint, and fade in so the nozzle is not a white blob
          float k = (1.0 - d * d) * (1.0 - t) * smoothstep(0.0, 0.12, t) * vLife.y * (1.0 - vFog) * 0.3;
          gl_FragColor = vec4(col * k, 1.0);
        }`,...Qf});this.mesh=new ei(n,i),this.mesh.frustumCulled=!1}set(e,t,n,r,i,a,o,s){let c=e*8,l=this.data;l[c]=t,l[c+1]=n,l[c+2]=r,l[c+3]=i,l[c+4]=a,l[c+5]=o,l[c+6]=s}commit(){let e=Math.min(this.count,this.capacity);this.mesh.geometry.instanceCount=e,this.buf.clearUpdateRanges(),this.buf.addUpdateRange(0,e*8),this.buf.needsUpdate=!0}},ep=class{capacity;mesh;count=0;data;buf;constructor(e,t,n=.045){this.capacity=e,this.data=new Float32Array(e*6);let r=new na,i=new hi(1,1).translate(0,.5,0);r.index=i.index,r.setAttribute(`position`,i.getAttribute(`position`)),this.buf=new ya(this.data,6,1).setUsage(Ve),r.setAttribute(`iHead`,new Ar(this.buf,3,0)),r.setAttribute(`iTail`,new Ar(this.buf,3,3)),r.instanceCount=0;let a=new wi({uniforms:{...t,uWidth:{value:n}},vertexShader:`
        ${Kf}
        attribute vec3 iHead;
        attribute vec3 iTail;
        uniform float uWidth;
        varying float vAlong;
        flat varying float vFog;
        void main() {
          vec4 h = viewMatrix * vec4(iHead, 1.0);
          vec4 t = viewMatrix * vec4(iTail, 1.0);
          vec2 dir = h.xy / h.z - t.xy / t.z; // direction on screen, sign does not matter for the width
          dir = dot(dir, dir) > 1e-10 ? normalize(dir) : vec2(0.0, 1.0);
          vec4 p = mix(t, h, position.y);
          p.xy += vec2(-dir.y, dir.x) * position.x * uWidth;
          gl_Position = projectionMatrix * p;
          vAlong = position.y;
          vFog = fogFactor(-h.z);
        }`,fragmentShader:`
        varying float vAlong;
        flat varying float vFog;
        void main() {
          vec3 col = mix(vec3(0.45, 0.18, 0.03), vec3(1.0, 0.85, 0.45), vAlong);
          gl_FragColor = vec4(col * (0.15 + 0.85 * vAlong) * (1.0 - vFog), 1.0);
        }`,...Qf});this.mesh=new ei(r,a),this.mesh.frustumCulled=!1}set(e,t,n,r,i,a,o){let s=e*6,c=this.data;c[s]=t,c[s+1]=n,c[s+2]=r,c[s+3]=i,c[s+4]=a,c[s+5]=o}commit(){let e=Math.min(this.count,this.capacity);this.mesh.geometry.instanceCount=e,this.buf.clearUpdateRanges(),this.buf.addUpdateRange(0,e*6),this.buf.needsUpdate=!0}},tp=-2,np=class{originX;originZ;sizeX;sizeZ;capacity;target;rect;count=0;scene=new Nn;camera=new Xi;a;b;attrA;attrB;geo;constructor(e,t,n,r,i=256){this.originX=e,this.originZ=t,this.sizeX=n,this.sizeZ=r,this.capacity=i,this.target=new qt(n*4,r*4,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:o,magFilter:o,type:l}),this.rect=new Gt(e,t,1/n,1/r),this.a=new Float32Array(i*4),this.b=new Float32Array(i*4),this.geo=new na;let a=new hi(2,2);this.geo.index=a.index,this.geo.setAttribute(`position`,a.getAttribute(`position`)),this.attrA=new ii(this.a,4).setUsage(Ve),this.attrB=new ii(this.b,4).setUsage(Ve),this.geo.setAttribute(`iA`,this.attrA),this.geo.setAttribute(`iB`,this.attrB),this.geo.instanceCount=0;let s=new wi({uniforms:{uRect:{value:new Gt(e,t,n,r)}},vertexShader:`
        attribute vec4 iA; // world x, world z, radius, cone cosine (< -1: omni)
        attribute vec4 iB; // rgb (intensity folded in), facing angle (0 = +Z)
        uniform vec4 uRect;
        varying vec2 vLocal;
        flat varying vec4 vA;
        flat varying vec4 vB;
        void main() {
          vLocal = position.xy;
          vec2 world = iA.xy + position.xy * iA.z;
          gl_Position = vec4((world - uRect.xy) / uRect.zw * 2.0 - 1.0, 0.0, 1.0);
          vA = iA;
          vB = iB;
        }`,fragmentShader:`
        varying vec2 vLocal;
        flat varying vec4 vA;
        flat varying vec4 vB;
        void main() {
          float d2 = dot(vLocal, vLocal);
          if (d2 >= 1.0) discard;
          float fall = (1.0 - d2) * (1.0 - d2);
          if (vA.w > -1.5) {
            float len = sqrt(d2);
            vec2 dir = vec2(sin(vB.w), cos(vB.w));
            float c = len > 1e-3 ? dot(vLocal / len, dir) : 1.0;
            fall *= smoothstep(vA.w, mix(vA.w, 1.0, 0.35), c);
          }
          gl_FragColor = vec4(vB.rgb * (fall / ${2 .toFixed(1)}), 1.0);
        }`,blending:5,blendSrc:201,blendDst:201,blendEquation:100,depthTest:!1,depthWrite:!1}),c=new ei(this.geo,s);c.frustumCulled=!1,this.scene.add(c),this.scene.background=new K(0,0,0)}get texture(){return this.target.texture}begin(){this.count=0}point(e,t,n,r,i,a){this.push(e,t,n,tp,r,i,a,0)}cone(e,t,n,r,i,a,o,s){this.push(e,t,n,Math.cos(i),a,o,s,r)}push(e,t,n,r,i,a,o,s){if(this.count>=this.capacity)return;let c=this.count++*4;this.a[c]=e,this.a[c+1]=t,this.a[c+2]=n,this.a[c+3]=r,this.b[c]=i,this.b[c+1]=a,this.b[c+2]=o,this.b[c+3]=s}render(e){this.geo.instanceCount=this.count,this.attrA.clearUpdateRanges(),this.attrB.clearUpdateRanges(),this.attrA.addUpdateRange(0,this.count*4),this.attrB.addUpdateRange(0,this.count*4),this.attrA.needsUpdate=!0,this.attrB.needsUpdate=!0;let t=e.getRenderTarget();e.setRenderTarget(this.target),e.render(this.scene,this.camera),e.setRenderTarget(t)}},rp=32;async function ip(e,t){let n=await Promise.all(t.map(async t=>{let n=`${e}${t}`,[r,i]=await Promise.all([fetch(`${n}.json`).then(e=>{if(!e.ok)throw Error(`${n}.json: HTTP ${e.status}`);return e.json()}),cp(`${n}.png`)]);return{key:t,meta:r,image:i}})),r=new Map;for(let e of n){let[t,n]=e.meta.cell;if(t!==n)throw Error(`${e.key}: cells must be square`);if(e.image.height!==n*Bc.length||e.image.width!==t*e.meta.frames)throw Error(`${e.key}.png is ${e.image.width}x${e.image.height}, expected ${t*e.meta.frames}x${n*Bc.length}`);r.has(t)||r.set(t,[]),r.get(t).push(e)}let i=new Map,a=new Map;for(let[e,t]of r){let n=t[0].meta.pivot;for(let e of t)if(e.meta.pivot[0]!==n[0]||e.meta.pivot[1]!==n[1])throw Error(`${e.key}: pivot ${e.meta.pivot} differs from ${t[0].key} (${n}); one pack needs one pivot`);let r=0,o=0,s=[];for(let e of t)r+e.meta.frames>rp&&(r=0,o++),s.push({s:e,ox:r,oy:o*Bc.length}),r+=e.meta.frames;let c=o===0?r:rp,l=(o+1)*Bc.length,u=document.createElement(`canvas`);u.width=c*e,u.height=l*e;let d=u.getContext(`2d`);d.imageSmoothingEnabled=!1;for(let{s:t,ox:n,oy:r}of s){d.drawImage(t.image,n*e,r*e);let i=t.meta.durations;a.set(t.key,{key:t.key,cell:e,ox:n,oy:r,frames:t.meta.frames,durations:i,total60:i.reduce((e,t)=>e+t,0),meta:t.meta})}let f=$c(new ui(u));f.needsUpdate=!0,i.set(e,{texture:f,meta:{...t[0].meta,frames:c},width:u.width,height:u.height})}return{sheets:i,entries:a}}function ap(e,t){let n=t*60;for(let t=0;t<e.durations.length;t++)if(n-=e.durations[t],n<0)return t;return e.frames-1}function op(e,t){let n=t*60%e.total60;n<0&&(n+=e.total60);for(let t=0;t<e.durations.length;t++)if(n-=e.durations[t],n<0)return t;return e.frames-1}function sp(e){return e.total60/60}function cp(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`failed to load ${e}`)),r.src=e})}var lp=12,up=class{sheet;capacity;mesh;xray;count=0;data;tint;buf;tintAttr;tintDirty=!0;constructor(e,t,n,r){this.sheet=e,this.capacity=t;let{meta:i}=e,[a,o]=i.cell;this.data=new Float32Array(t*lp),this.tint=new Uint8Array(t*4).fill(255);let s=new na,c=new hi(1,1).translate(.5,.5,0);s.index=c.index,s.setAttribute(`position`,c.getAttribute(`position`)),this.buf=new ya(this.data,lp,1).setUsage(Ve),s.setAttribute(`iPos`,new Ar(this.buf,3,0)),s.setAttribute(`iData`,new Ar(this.buf,4,3)),s.setAttribute(`iLay`,new Ar(this.buf,1,7)),s.setAttribute(`iDepth`,new Ar(this.buf,1,8)),s.setAttribute(`iXray`,new Ar(this.buf,1,9)),this.tintAttr=new ii(this.tint,4,!0).setUsage(Ve),s.setAttribute(`iTint`,this.tintAttr),s.instanceCount=0;let l=new wi({uniforms:{...n,uMap:{value:e.texture},uCellSize:{value:new Et(a*r.metresPerPixel,o*r.metresPerPixel)},uPivot:{value:new Et(i.pivot[0]/a,1-i.pivot[1]/o)},uGrid:{value:new Et(e.width/a,e.height/o)},uHalfTexel:{value:new Et(.5/a,.5/o)},uDepthBias:{value:r.depthBias??.22}},vertexShader:`
        ${Kf}
        attribute vec3 iPos;   // feet, world
        attribute vec4 iData;  // scale, row, frame, flash
        attribute vec4 iTint;  // rgb multiplier
        attribute float iLay;  // 0 standing; 1 + d lying on the ground, d = dissolved share 0..1
        attribute float iDepth; // world z of the upright plane a standing sprite is depth-tested on
        attribute float iXray;  // silhouette kind behind walls
        uniform vec2 uCellSize;
        uniform vec2 uPivot;
        uniform float uDepthBias;
        uniform vec3 uSpriteAmbient;
        uniform float uMinLight;
        varying vec2 vLocal;
        flat varying vec2 vCell;
        flat varying vec3 vColor;
        flat varying float vFlash;
        flat varying float vFog;
        flat varying float vDissolve;
        flat varying float vXray;
        void main() {
          vec4 feet = viewMatrix * vec4(iPos, 1.0);
          vXray = iXray;
          vec2 offset = (position.xy - uPivot) * uCellSize * iData.x;
          vDissolve = 0.0;
          if (iLay > 0.5) {
            // A body on the ground: lay the quad flat, stretched along the ground so it covers the same
            // pixels as the upright sprite would, but every pixel gets the depth of the ground under it.
            // Walls then hide the part of the body that lies behind them instead of being painted over.
            vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
            vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
            vec3 fwd = normalize(vec3(up.x, 0.0, up.z));
            vec3 world = iPos + right * offset.x + fwd * offset.y / max(dot(fwd, up), 0.2);
            world.y += 0.03;
            gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
            vDissolve = iLay - 1.0;
          } else {
            // On screen the quad faces the camera (the art is drawn for this view). For the depth test it
            // stands upright on the feet line: each pixel takes the depth where its view ray crosses the
            // vertical plane world z = iDepth. A wall or a car behind the feet then never covers the head,
            // and anything in front of the feet still covers the legs.
            vec3 vView = vec3(feet.xy + offset, feet.z);
            gl_Position = projectionMatrix * vec4(vView, 1.0);
            vec3 w = cameraPosition + transpose(mat3(viewMatrix)) * vView;
            vec3 dir = w - cameraPosition;
            vec3 p = w;
            if (abs(dir.z) > 1e-4) {
              float t = (iDepth - cameraPosition.z) / dir.z;
              if (t > 0.0) p = cameraPosition + dir * t;
            }
            vec4 mv = viewMatrix * vec4(p, 1.0);
            vec4 d = projectionMatrix * vec4(mv.xy, mv.z + uDepthBias, 1.0); // nudged toward the camera
            gl_Position.z = d.z / d.w * gl_Position.w;
          }

          vLocal = vec2(position.x, 1.0 - position.y); // sheet rows go top-down (flipY off)
          vCell = vec2(iData.z, iData.y);
          // one light sample at the feet lights the whole sprite; the floor keeps it readable in the dark
          vec3 light = clamp(uSpriteAmbient + sampleLightMap(iPos.xz), vec3(uMinLight), vec3(1.6));
          vColor = iTint.rgb * light;
          vFlash = iData.w;
          vFog = fogFactor(-feet.z);
        }`,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec2 uGrid;
        uniform vec2 uHalfTexel;
        uniform vec3 uFogColor;
        varying vec2 vLocal;
        flat varying vec2 vCell;
        flat varying vec3 vColor;
        flat varying float vFlash;
        flat varying float vFog;
        flat varying float vDissolve;
        flat varying float vXray;
        // 4x4 ordered dither on the sprite's own pixels: a body fades out pixel by pixel, no blending
        float bayer(vec2 p) {
          vec2 q = mod(floor(p), 4.0);
          int i = int(q.x) + 4 * int(q.y);
          float b[16];
          b[0]=0.;b[1]=8.;b[2]=2.;b[3]=10.;b[4]=12.;b[5]=4.;b[6]=14.;b[7]=6.;
          b[8]=3.;b[9]=11.;b[10]=1.;b[11]=9.;b[12]=15.;b[13]=7.;b[14]=13.;b[15]=5.;
          float v = 0.0;
          for (int k = 0; k < 16; k++) if (k == i) v = b[k];
          return (v + 0.5) / 16.0;
        }
        void main() {
          vec2 local = clamp(vLocal, uHalfTexel, 1.0 - uHalfTexel); // never bleed into the next cell
          vec4 c = texture2D(uMap, (vCell + local) / uGrid);
          if (c.a < 0.5) discard;
          if (vDissolve > 0.0 && vDissolve > bayer(local * 0.5 / uHalfTexel)) discard;
          #ifdef XRAY
            // every other sprite pixel, in one flat colour: reads as "behind the wall"
            if (vXray < 0.5 || bayer(local * 0.5 / uHalfTexel) > 0.5) discard;
            gl_FragColor = vec4(vXray < 1.5 ? vec3(0.78, 0.92, 1.0) : vec3(0.78, 0.2, 0.16), 1.0);
          #else
            vec3 col = mix(c.rgb * vColor, vec3(1.0), vFlash);
            gl_FragColor = vec4(mix(col, uFogColor, vFog), 1.0);
          #endif
        }`});this.mesh=new ei(s,l),this.mesh.frustumCulled=!1;let u=new wi({uniforms:l.uniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{XRAY:1},depthFunc:6,depthWrite:!1});this.xray=new ei(s,u),this.xray.frustumCulled=!1}set(e,t,n,r,i,a,o,s,c=0,l=r,u=0){let d=e*lp,f=this.data;f[d]=t,f[d+1]=n,f[d+2]=r,f[d+3]=i,f[d+4]=a,f[d+5]=o,f[d+6]=s,f[d+7]=c,f[d+8]=l,f[d+9]=u}setTint(e,t,n,r){let i=e*4;this.tint[i]=t,this.tint[i+1]=n,this.tint[i+2]=r,this.tintDirty=!0}commit(){let e=Math.min(this.count,this.capacity);this.mesh.geometry.instanceCount=e,this.buf.clearUpdateRanges(),this.buf.addUpdateRange(0,e*lp),this.buf.needsUpdate=!0,this.tintDirty&&=(this.tintAttr.needsUpdate=!0,!1)}},dp=class{capacity;mesh;count=0;data;attr;constructor(e,t,n,r=.42){this.capacity=e,this.data=new Float32Array(e*4);let i=new na,a=new hi(2,2).rotateX(-Math.PI/2);i.index=a.index,i.setAttribute(`position`,a.getAttribute(`position`)),this.attr=new ii(this.data,4).setUsage(Ve),i.setAttribute(`iShadow`,this.attr),i.instanceCount=0;let o=new wi({uniforms:{...t,uOpacity:{value:r},uPpm:{value:n}},vertexShader:`
        ${Kf}
        attribute vec4 iShadow; // x, y, z, radius
        uniform float uPpm;
        varying vec2 vLocal;
        flat varying float vPixels;
        flat varying float vFog;
        void main() {
          vec4 mv = viewMatrix * vec4(iShadow.xyz + position * iShadow.w, 1.0);
          gl_Position = projectionMatrix * mv;
          vLocal = position.xz;
          vPixels = max(2.0, iShadow.w * uPpm); // radius in world texels
          vFog = fogFactor(-mv.z);
        }`,fragmentShader:`
        uniform float uOpacity;
        varying vec2 vLocal;
        flat varying float vPixels;
        flat varying float vFog;
        void main() {
          vec2 q = (floor(vLocal * vPixels) + 0.5) / vPixels; // snap to the same pixel grid as the ground
          if (dot(q, q) > 1.0) discard;
          gl_FragColor = vec4(0.0, 0.0, 0.0, uOpacity * (1.0 - vFog));
        }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new ei(i,o),this.mesh.frustumCulled=!1}set(e,t,n,r,i){let a=e*4;this.data[a]=t,this.data[a+1]=n,this.data[a+2]=r,this.data[a+3]=i}commit(){let e=Math.min(this.count,this.capacity);this.mesh.geometry.instanceCount=e,this.attr.clearUpdateRanges(),this.attr.addUpdateRange(0,e*4),this.attr.needsUpdate=!0}};function fp(e,t){return new wi({uniforms:{...t,uAtlas:{value:e},uAtlasGrid:{value:new Et(8,4)}},vertexShader:`
      attribute vec2 aMat; // atlas tile, corner occlusion
      attribute vec3 aTint;
      varying vec2 vUv;
      flat varying vec3 vTint;
      varying vec3 vWorld;
      varying float vAo;
      varying float vDepth;
      flat varying vec3 vNormal;
      flat varying float vTile;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vec4 mv = viewMatrix * world;
        gl_Position = projectionMatrix * mv;
        vUv = uv;
        vWorld = world.xyz;
        vAo = aMat.y;
        vDepth = -mv.z;
        vNormal = normal;
        vTile = aMat.x;
        vTint = aTint;
      }`,fragmentShader:`
      ${Kf}
      uniform sampler2D uAtlas;
      uniform vec2 uAtlasGrid;
      uniform vec3 uSky;
      uniform vec3 uGround;
      uniform vec3 uMoonDir;
      uniform vec3 uMoonColor;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying float vAo;
      varying float vDepth;
      flat varying vec3 vNormal;
      flat varying float vTile;
      flat varying vec3 vTint;
      const float HALF = ${(.5/Y).toFixed(6)};
      void main() {
        // uv is in metres: one tile per metre, rows top-down
        vec2 local = clamp(vec2(fract(vUv.x), 1.0 - fract(vUv.y)), HALF, 1.0 - HALF);
        float t = floor(vTile + 0.5);
        vec2 cell = vec2(mod(t, uAtlasGrid.x), floor(t / uAtlasGrid.x));
        vec4 tex = texture2D(uAtlas, (cell + local) / uAtlasGrid);
        tex.rgb *= vTint;
        vec3 n = vNormal;
        vec3 ambient = mix(uGround, uSky, n.y * 0.5 + 0.5) + uMoonColor * max(dot(n, uMoonDir), 0.0);
        // walls sample the light map a little in front of themselves, so a lamp lights the face it can see
        vec3 lamp = sampleLightMap(vWorld.xz + n.xz * 0.3);
        lamp *= clamp(1.15 - vWorld.y * 0.12, 0.25, 1.0); // lights sit low: high walls and roofs get less
        vec3 lit = tex.rgb * (ambient * vAo + lamp * (0.5 + 0.5 * vAo));
        vec3 col = mix(tex.rgb, lit, tex.a); // alpha 0 in the atlas = emissive pixel
        gl_FragColor = vec4(mix(col, uFogColor, fogFactor(vDepth)), 1.0);
      }`})}var pp=16,mp=.76,hp=.12,gp=.08,_p=.3,vp=.55,yp=.18,bp=5e-4,xp=[255,255,255];function Sp(){let e=pp,t=new Dr,n=new Float32Array(102),r=new Float32Array(68),i=[];for(let t=0;t<=e;t++)r.set([0,t/e*2-1,1,t/e*2-1],t*4),t<e&&i.push(t*2,t*2+1,t*2+2,t*2+1,t*2+3,t*2+2);t.setAttribute(`position`,new fr(n,3).setUsage(Ve)),t.setAttribute(`aFan`,new fr(r,2)),t.setIndex(i);let a=new ei(t,new wi({uniforms:{uAlpha:{value:0},uFocus:{value:0}},vertexShader:`
      attribute vec2 aFan;
      varying vec2 vFan;
      void main() {
        vFan = aFan;
        gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uAlpha;
      uniform float uFocus;
      varying vec2 vFan;
      void main() {
        float edge = smoothstep(0.82, 1.0, abs(vFan.y));          // bright rims
        float fade = 1.0 - smoothstep(0.55, 1.0, vFan.x);          // fades toward the range
        vec3 col = mix(vec3(1.0, 0.92, 0.7), vec3(1.0, 0.78, 0.3), uFocus);
        gl_FragColor = vec4(col, uAlpha * (0.35 + 1.4 * edge) * fade);
      }`,transparent:!0,depthWrite:!1}));return a.frustumCulled=!1,a.renderOrder=5,a}function Cp(){let e=new ei(new hi(2,2).rotateX(-Math.PI/2),new wi({uniforms:{uColor:{value:new K(1,.3,.25)},uAlpha:{value:0},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = position.xz;
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uAlpha;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float r = length(vUv);
        if (r > 1.0 || r < 0.72) discard;
        float a = atan(vUv.y, vUv.x) / 6.2831853;
        float dash = step(0.38, fract(a * 6.0 + uTime * 0.35));
        float edge = smoothstep(1.0, 0.94, r) * smoothstep(0.72, 0.78, r);
        float alpha = uAlpha * edge * (0.35 + 0.65 * dash);
        if (alpha < 0.02) discard;
        gl_FragColor = vec4(uColor, alpha);
      }`,transparent:!0,depthWrite:!1}));return e.frustumCulled=!1,e.renderOrder=2,e.visible=!1,e}var wp=new K(1,.32,.24),Tp=new K(1,.82,.3),Ep=[`idle`,`walk`,`attack`,`hit`,`knockdown`],Dp=[...Ep,`shove`,`throw`],Op={survivor_pistol:Dp,survivor_smg:Dp,survivor_shotgun:Dp,survivor_rifle:Dp,survivor_sniper:Dp,survivor_lmg:Dp,survivor_bat:[`swing`],survivor_machete:[`swing`],survivor_axe:[`swing`],merchant:[`idle`],zombie_walker:Ep,zombie_worker:Ep,zombie_runner:Ep,zombie_police:Ep,zombie_police_broken:Ep,zombie_brute:Ep},kp=Ef,Ap=Df;async function jp(e){return ip(e,Object.entries(Op).flatMap(([e,t])=>t.map(t=>`${e}/${t}`)))}var Mp={fog:new K(.52,.58,.62),fogNear:46,fogFar:110,sky:new K(.92,.9,.84),ground:new K(.5,.46,.4),moon:new K(.55,.5,.4),sprite:new K(1,.98,.92),minLight:.6},Np=(()=>{let e=Gf();return{fog:e.uFogColor.value.clone(),fogNear:e.uFog.value.x,fogFar:e.uFog.value.y,sky:e.uSky.value.clone(),ground:e.uGround.value.clone(),moon:e.uMoonColor.value.clone(),sprite:e.uSpriteAmbient.value.clone(),minLight:e.uMinLight.value}})(),Pp=new K(.2,.22,.24),Fp=new K(.85,.9,1.25),Ip={walker:`zombie_walker`,runner:`zombie_runner`,brute:`zombie_brute`,police:`zombie_police`},Lp=.35;function Rp(e,t,n){return e===`police`?t?`zombie_police_broken`:`zombie_police`:e===`walker`&&n<Lp?`zombie_worker`:Ip[e]}var zp=class{map;pack;renderer;cam;scene=new Nn;night;lightMap;batches=new Map;shadows;bits;bitPool=new Yf(1500);flashes;flashPool=[];booms=[];slash={t:-1/0,x:0,z:0,aim:0,reach:1,arc:1};merchantRow=-1;tracers;barricadeMesh=null;barricadeKey=``;terrainMaterial;terrain;rows=new Int8Array(2048).fill(-1);facing=new Float32Array(2048);variant=new Float32Array(2048);depthZ=new Float32Array(2048);playerRow=-1;corpseRows=new Map;shake=0;slotHp=[];slotHitT=[];time=0;deathT=-1;lift=0;touchZoom=!1;zoomScale=1;attract=!1;lockTarget=-1;hideCone=!1;lockRing=Cp();lockShown=-1;lockX=0;lockZ=0;frameDt=0;camX=0;camZ=0;aimCone;slashFan;game;constructor(e,t,n,r){this.map=t,this.pack=n,this.renderer=new zc({antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,r)),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.cam=new Zf(window.innerWidth/window.innerHeight,Xf.night),window.addEventListener(`resize`,()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.cam.resize(window.innerWidth/window.innerHeight)});let{bounds:i}=t;this.night=Gf(),this.lightMap=new np(i.x0,i.z0,i.x1-i.x0,i.z1-i.z0),this.night.uLightMap.value=this.lightMap.texture,this.night.uLightRect.value.copy(this.lightMap.rect),this.scene.background=this.night.uFogColor.value,this.terrainMaterial=fp(Qc(),this.night),this.terrain=new ei(Yl(ql(t.voxels,el,t.boxes)),this.terrainMaterial),this.terrain.frustumCulled=!1,this.scene.add(this.terrain);let a=1200;for(let[e,t]of n.sheets){let n=new up(t,a,this.night,{metresPerPixel:1/(t.meta.ppm??40)});n.mesh.renderOrder=1,n.xray.renderOrder=.5,this.scene.add(n.mesh,n.xray),this.batches.set(e,n)}this.shadows=new dp(a,this.night,32),this.shadows.mesh.renderOrder=2,this.bits=new Jf(2e3,this.night),this.bits.mesh.renderOrder=1,this.flashes=new $f(1200,this.night),this.flashes.mesh.renderOrder=3,this.tracers=new ep(256,this.night),this.tracers.mesh.renderOrder=4,this.scene.add(this.shadows.mesh,this.bits.mesh,this.flashes.mesh,this.tracers.mesh);for(let e=0;e<this.variant.length;e++)this.variant[e]=(e*2654435761>>>0)/4294967296;this.aimCone=Sp(),this.scene.add(this.aimCone),this.slashFan=Sp(),this.scene.add(this.slashFan),this.scene.add(this.lockRing)}setGame(e){e.map!==this.map&&(this.map=e.map,this.terrain.geometry.dispose(),this.terrain.geometry=Yl(ql(e.map.voxels,el,e.map.boxes))),this.game=e,this.barricadeKey=``,this.corpseRows.clear(),this.rows.fill(-1),this.deathT=-1,this.camX=e.px,this.camZ=e.pz,this.booms.length=0,this.slotHp=e.map.slots.map(e=>e.slot.hp),this.slotHitT=e.map.slots.map(()=>-1/0)}updateBarricades(){let e=this.game.map.slots,t=e.map(e=>e.slot.intact?`${e.slot.kind}${Math.ceil(e.slot.hp/e.slot.maxHp*4)}`:e.slot.state).join(`,`);if(t===this.barricadeKey)return;this.barricadeKey=t;let n=[];for(let t of e){let e=t.slot,r=t.axis,i=r===`x`?t.x0:t.z0,a=r===`x`?t.x1:t.z1,o=r===`x`?t.z0:t.x0,s=r===`x`?t.z1:t.x1,c=(e,t,i,a,o,s,c)=>n.push(r===`x`?{min:[e,o,i],max:[t,s,a],top:c,side:c}:{min:[i,o,e],max:[a,s,t],top:c,side:c});if(e.intact&&e.kind===`vending`){let t=e.hp/e.maxHp;c(i+.02,a-.02,o+.12,s-.12,0,.7+.5*t,X.Metal),c(i-.05,i+.12,o+.05,s-.05,0,1.35,X.Steel),c(a-.12,a+.05,o+.05,s-.05,0,1.35,X.Steel)}else if(e.intact){let t=Math.max(1,Math.ceil(e.hp/e.maxHp*4));c(i-.04,i+.1,o+.1,s-.1,0,1.3,X.Planks),c(a-.1,a+.04,o+.1,s-.1,0,1.3,X.Planks);for(let e=0;e<t;e++){let t=.18+e*.28,n=(e%2?.04:-.04)*(a-i);c(i+.02,a-.02,o+.16,s-.16,t+Math.max(0,n),t+.2+Math.max(0,n),X.Planks)}}else if(e.state===`destroyed`)for(let e=0;e<3;e++){let t=i+(e+.3)/3*(a-i);c(t-.2,t+.15,o+.05+e*.06,s-.1,0,.1,X.Planks)}}let r=Yl(ql(new Rl(1,1,1,-100,-100),el,n));this.barricadeMesh?(this.barricadeMesh.geometry.dispose(),this.barricadeMesh.geometry=r):(this.barricadeMesh=new ei(r,this.terrainMaterial),this.barricadeMesh.frustumCulled=!1,this.scene.add(this.barricadeMesh))}consumeFx(){let e=this.game;for(let t of e.fx)switch(t.kind){case`muzzle`:{let e=t.weapon===`shotgun`||t.weapon===`sniper`?6:t.weapon===`lmg`||t.weapon===`revolver`?4:3;for(let n=0;n<e;n++)this.flashPool.push({x:t.x+Math.sin(t.aim)*.15*n,y:1,z:t.z+Math.cos(t.aim)*.15*n,age:0,life:.07,size:.32-n*.04,spin:Math.random()*6});this.shake=Math.max(this.shake,t.weapon===`sniper`?.2:t.weapon===`shotgun`?.16:t.weapon===`revolver`?.1:.06);break}case`blood`:this.bitPool.burst(4*t.amount,t.x,.9,t.z,t.dx,t.dz,2.4,.9,.07,[.42,.05,.06]);break;case`armor`:this.bitPool.burst(t.broke?14:3,t.x,.95,t.z,0,1,2.2,.8,t.broke?.09:.05,[.55,.6,.68]),this.flashPool.push({x:t.x,y:.95,z:t.z,age:0,life:.05,size:.2,spin:0});break;case`spark`:this.flashPool.push({x:t.x,y:.95,z:t.z,age:0,life:.06,size:.14,spin:0});break;case`death`:this.bitPool.burst(t.type===`brute`?18:9,t.x,.7,t.z,0,1,2.6,1.6,.08,[.36,.04,.05]);break;case`playerHit`:this.shake=Math.max(this.shake,.22);break;case`wallBreak`:this.bitPool.burst(20,t.x,.8,t.z,0,1,3,1.4,.1,[.5,.34,.2]),this.shake=Math.max(this.shake,.3);break;case`melee`:{t.hit&&(this.shake=Math.max(this.shake,t.weapon===`axe`?.18:.1));let n=qu[t.weapon];this.slash={t:this.time,x:e.px,z:e.pz,aim:t.aim,reach:n.reach,arc:n.arc};break}case`explode`:for(let e=0;e<18;e++){let e=Math.random()*Math.PI*2,n=Math.random()*1.3;this.flashPool.push({x:t.x+Math.sin(e)*n,y:.3+Math.random()*1.2,z:t.z+Math.cos(e)*n,age:0,life:.35+Math.random()*.3,size:.7+Math.random()*.8,spin:Math.random()*6,vy:1.5+Math.random()*1.5,fade:1,bright:3})}for(let e=0;e<4;e++){let n=e/4*Math.PI*2;this.bitPool.burst(7,t.x,.4,t.z,Math.sin(n),Math.cos(n),5.5,1.1,.09,[.22,.2,.18])}this.booms.push({x:t.x,z:t.z,t:this.time}),this.shake=Math.max(this.shake,Math.max(.2,.55-Math.hypot(t.x-e.px,t.z-e.pz)*.02));break;case`ignite`:for(let e=0;e<16;e++){let e=Math.random()*Math.PI*2,n=Math.random()*$u.radius*.7;this.flashPool.push({x:t.x+Math.sin(e)*n,y:.2+Math.random()*.5,z:t.z+Math.cos(e)*n,age:0,life:.4+Math.random()*.3,size:.5+Math.random()*.4,spin:Math.random()*6,vy:1.2,fade:1,bright:2.6})}this.bitPool.burst(10,t.x,.3,t.z,0,1,3,.6,.05,[.45,.62,.4]),this.booms.push({x:t.x,z:t.z,t:this.time-vp*.5});break;case`burn`:for(let e=0;e<3;e++)this.flashPool.push({x:t.x+(Math.random()-.5)*.4,y:.5+Math.random()*.9,z:t.z+(Math.random()-.5)*.3,age:0,life:.45,size:.3+Math.random()*.2,spin:Math.random()*6,vy:1.4,fade:1,bright:2.2});break;case`lightning`:this.lightningT=this.time,this.shake=Math.max(this.shake,.12)}e.fx=[]}entry(e,t){return this.pack.entries.get(`${e}/${t}`)}put(e,t,n,r,i,a,o,s,c,l=0,u=0,d=r,f=0){let p=this.batches.get(e.cell),m=t[e.cell===64?0:1]++;p.set(m,n,u,r,i,e.oy+a,e.ox+o,s,l,d,f),p.setTint(m,c[0],c[1],c[2])}updateSprites(e){let t=this.game,n=t.world,r=[0,0],i=0,a=n.t;{let e=t.phase===`over`&&t.overCause===`player`;this.playerRow=Hc(t.aim,0,this.playerRow);let n=kp[t.weapon],a=`idle`,o=0,s=t.melee===`fists`?null:Ap[t.melee],c=s?this.entry(s,`swing`):this.entry(n,`shove`);e?(this.deathT<0&&(this.deathT=this.time),a=`knockdown`,o=ap(this.entry(n,`knockdown`),this.time-this.deathT)):t.t-t.throwT<sp(this.entry(n,`throw`))?(a=`throw`,o=ap(this.entry(n,`throw`),t.t-t.throwT)):t.t-t.meleeT<sp(c)?(s&&(n=s),a=s?`swing`:`shove`,o=ap(c,t.t-t.meleeT)):t.t-t.shotT<.14?(a=`attack`,o=Math.min(this.entry(n,`attack`).frames-1,Math.floor((t.t-t.shotT)/.14*2)+1)):t.t-t.hurtT<.3?(a=`hit`,o=ap(this.entry(n,`hit`),t.t-t.hurtT)):t.moving?(a=`walk`,o=op(this.entry(n,`walk`),this.time*1.15)):o=op(this.entry(n,`idle`),this.time);let l=t.t-t.hurtT<.08?.75:0;this.lift+=((t.climbing?.55:0)-this.lift)*Math.min(1,this.frameDt*14),this.put(this.entry(n,a),r,t.px,t.pz,1,this.playerRow,o,l,[255,255,255],0,this.lift,t.pz+gp,1),this.shadows.set(i++,t.px,.02,t.pz,.3)}if(t.phase===`day`){let e=t.map.merchant,n=Math.hypot(t.px-e.standX,t.pz-e.standZ)<5?Math.atan2(t.px-e.standX,t.pz-e.standZ):0;this.merchantRow=Hc(n,0,this.merchantRow);let a=this.entry(`merchant`,`idle`);this.put(a,r,e.standX,e.standZ,1,this.merchantRow,op(a,this.time),0,xp),this.shadows.set(i++,e.standX,.02,e.standZ,.3)}for(let e=0;e<t.corpses.length;e++){let n=t.corpses[e],i=Rp(n.type,n.broken,this.variant[n.slot]),a=this.entry(i,`knockdown`),o=this.corpseRows.get(n)??Hc(n.facing,0,-1);this.corpseRows.set(n,o);let s=n.type===`runner`?[250,225,215]:[235,235,235],c=t.t-n.t,l=sp(a),u=Math.min(1,c/l),d=n.fromX+(n.x-n.fromX)*u,f=n.fromZ+(n.z-n.fromZ)*u,p=c<l?0:1+Math.max(0,(c-22)/2);this.put(a,r,d,f,1,o,ap(a,c),0,s,p,p>0?e*bp:0)}if(this.corpseRows.size>400){let e=new Set(t.corpses);for(let t of this.corpseRows.keys())e.has(t)||this.corpseRows.delete(t)}for(let o=0;o<n.count;o++){if(!n.alive[o]){this.rows[o]=-1;continue}this.rows[o]<0&&(this.depthZ[o]=n.z[o]);let s=Xl[n.kind[o]],c=Rp(s,t.vestBroken[o]===1,this.variant[o]),l=n.prevX[o]+(n.x[o]-n.prevX[o])*e,u=n.prevZ[o]+(n.z[o]-n.prevZ[o])*e,d=n.x[o]-n.prevX[o],f=n.z[o]-n.prevZ[o],p=d*d+f*f>1e-5,m=Math.abs(n.kbX[o])+Math.abs(n.kbZ[o])>.25;p&&!m&&(this.facing[o]=Math.atan2(d,f));let h=a-n.swingT[o],g=a-n.hurtT[o],_=`idle`,v,y=this.entry(c,`attack`);if(h<sp(y)){_=`attack`,v=ap(y,h);let e=t.px-l,n=t.pz-u;e*e+n*n<2.5&&(this.facing[o]=Math.atan2(e,n))}else g<.3?(_=`hit`,v=ap(this.entry(c,`hit`),g)):p?(_=`walk`,v=op(this.entry(c,`walk`),this.time*(s===`runner`?2.1:.9)*(n.speed[o]/Zl[s].speed)+this.variant[o]*3)):v=op(this.entry(c,`idle`),this.time+this.variant[o]*3);this.rows[o]=Hc(this.facing[o],0,this.rows[o]);let b=this.variant[o],x=s===`runner`?[255,226+b*20,214]:[215+b*40,225+b*30,210+b*45],S=s===`runner`?.94:.95+b*.1,C=this.depthZ[o];u-C>hp?this.depthZ[o]=u-hp:C-u>hp&&(this.depthZ[o]=u+hp),this.put(this.entry(c,_),r,l,u,S,this.rows[o],v,g<.07?.8:0,x,0,0,this.depthZ[o]+o%97*2e-4,2),this.shadows.set(i++,l,.02,u,n.radius[o]*S)}for(let[e,t]of this.batches)t.count=r[e===64?0:1],t.commit();this.shadows.count=i,this.shadows.commit()}updateBits(e){let t=this.game;this.bitPool.update(e);let n=0,r=this.bitPool;for(let e=0;e<r.count;e++)this.bits.set(n++,r.x[e],r.y[e],r.z[e],r.size[e],r.col[e*3],r.col[e*3+1],r.col[e*3+2]);for(let e of t.drops){if(e.age>40&&Math.floor(this.time*8)%2)continue;let t=.16+Math.sin(this.time*5+e.x*3)*.05,[r,i,a]=e.kind===`ammo`?[1,.82,.3]:e.kind===`medkit`?[.95,.25,.25]:[.6,.72,.85];this.bits.set(n++,e.x,t+.03,e.z,.26,.05,.05,.05,0),this.bits.set(n++,e.x,t+.031,e.z-.001,.19,r,i,a,.7)}for(let r of t.thrown){let t=Math.min(1,r.t/r.flight),i=r.x0+(r.x1-r.x0)*t,a=r.z0+(r.z1-r.z0)*t,o=Math.hypot(r.x1-r.x0,r.z1-r.z0),s=1.1*(1-t)+.08*t+(.4+Zu.apex*(o/Zu.range))*4*t*(1-t),c=r.kind===`grenade`,l=c&&t>=1&&Math.floor((Qu.fuse-r.fuse)*10)%2==0;this.bits.set(n++,i,s,a,.17,.05,.05,.05,0),this.bits.set(n++,i,s+.001,a-.001,.12,c?.3:.5,c?.36:.32,c?.2:.16,+!!l),!c&&e>0&&this.flashPool.push({x:i,y:s+.12,z:a,age:0,life:.15,size:.16,spin:Math.random()*6,fade:1,bright:2})}if(this.bits.count=n,this.bits.commit(),e>0)for(let n of t.flames){let r=$u.seconds-n.t,i=Math.min(1,n.t/.3,r/1.2),a=Math.min(12,e*150*i),o=Math.floor(a)+ +(Math.random()<a%1);for(let e=0;e<o;e++){let e=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*$u.radius*.85;t.world.grid.rayClear(n.x,n.z,Math.sin(e),Math.cos(e),r,!1)<r-1e-6||this.flashPool.push({x:n.x+Math.sin(e)*r,y:.08,z:n.z+Math.cos(e)*r,age:0,life:.55+Math.random()*.45,size:.35+Math.random()*.45*(1-r/$u.radius),spin:Math.random()*6,vy:.8+Math.random()*.9,fade:1,bright:2.6})}}let i=0;for(let t=this.flashPool.length-1;t>=0;t--){let n=this.flashPool[t];n.age+=e,n.vy&&(n.y+=n.vy*e),n.age>=n.life&&this.flashPool.splice(t,1)}this.flashPool.length>1150&&this.flashPool.splice(0,this.flashPool.length-1150);for(let e of this.flashPool)this.flashes.set(i++,e.x,e.y,e.z,e.size,e.age/e.life*(e.fade??.4),e.bright??3.5,e.spin);this.flashes.count=i,this.flashes.commit();let a=0;for(let e of t.bullets){let t=Math.min(1.4,Math.hypot(e.x-e.ox,e.z-e.oz));this.tracers.set(a++,e.x,1,e.z,e.x-e.dx*t,1,e.z-e.dz*t)}this.tracers.count=a,this.tracers.commit()}lightningT=-1/0;flash(){let e=this.time-this.lightningT;return e<0||e>1.1?0:Math.max(Math.exp(-e*18),.6*Math.exp(-Math.max(0,e-.22)*9)*(e>.22))}grade(e){let t=this.night,n=this.game.tonight.id,r=this.game.phase!==`over`&&e>0,i=r&&n===`storm`?e:0,a=r&&n===`fog`?e:0;t.uFogColor.value.copy(Mp.fog).lerp(Np.fog,e).lerp(Pp,a*.85);let o=Mp.fogNear+(Np.fogNear-Mp.fogNear)*e,s=Mp.fogFar+(Np.fogFar-Mp.fogFar)*e,c=this.cam.distance;t.uFog.value.set(o+(c-3-o)*a,s+(c+9-s)*a),t.uSky.value.copy(Mp.sky).lerp(Np.sky,e).multiplyScalar(1-.55*i),t.uGround.value.copy(Mp.ground).lerp(Np.ground,e).multiplyScalar(1-.5*i),t.uMoonColor.value.copy(Mp.moon).lerp(Np.moon,e).multiplyScalar(1-.8*i),t.uSpriteAmbient.value.copy(Mp.sprite).lerp(Np.sprite,e).multiplyScalar(1-.35*i),t.uMinLight.value=Mp.minLight+(Np.minLight-Mp.minLight)*e;let l=i>0?this.flash():0;l>0&&(t.uSky.value.lerp(Fp,l*.9),t.uMoonColor.value.lerp(Fp,l),t.uSpriteAmbient.value.lerp(Fp,l*.8))}updateLights(e){let t=this.game,n=this.lightMap;n.begin();let r=this.time;if(e>.01){let i=t.tonight.id===`storm`&&t.phase!==`over`;if(!i){for(let t of this.map.lamps){let i=t.flicker&&Math.sin(r*23)+Math.sin(r*37.7)>1.3?.15:1;n.point(t.x,t.z,t.radius,t.r*i*e,t.g*i*e,t.b*i*e)}for(let t of this.map.glows)n.point(t.x,t.z,t.radius,t.r*e,t.g*e,t.b*e)}this.map.fires.forEach((t,i)=>{let a=.82+.12*Math.sin(r*11+i*1.7)+.08*Math.sin(r*23.3+i*4.1);n.point(t.x,t.z,t.radius*(.95+.05*a),t.r*a*e,t.g*a*e,t.b*a*e)});let a=i?Math.sin(r*13)+Math.sin(r*29.3)>1.5?.35:.85:1;n.point(this.map.refuge.x,this.map.refuge.z+1.2,9,.62*e*a,.48*e*a,.28*e*a),(t.phase!==`over`||t.overCause!==`player`)&&(n.cone(t.px,t.pz,13,t.aim,.42,.5*e,.54*e,.62*e),n.point(t.px,t.pz,2.4,.18*e,.18*e,.22*e))}if(t.t-t.shotT<.06){let r=.8*(.35+.65*e);n.point(t.px+Math.sin(t.aim)*.8,t.pz+Math.cos(t.aim)*.8,4.5,r,r*.75,r*.4)}let i=.35+.65*e;t.flames.forEach((e,t)=>{let a=$u.seconds-e.t,o=Math.min(1,e.t/.3,a/1.2)*(.85+.1*Math.sin(r*13+t)+.05*Math.sin(r*29+t*3));n.point(e.x,e.z,$u.radius*2.8,.95*o*i,.55*o*i,.2*o*i)});for(let e=this.booms.length-1;e>=0;e--){let t=this.booms[e],a=(r-t.t)/vp;if(a>=1){this.booms.splice(e,1);continue}let o=(1-a)*(1-a)*2.2*i;n.point(t.x,t.z,10,o,o*.72,o*.38)}}threats(){let e=this.game,t=[],n=window.innerWidth,r=window.innerHeight,i=new W;return e.map.slots.forEach((e,a)=>{let o=e.slot.hp;if(o<this.slotHp[a]-1e-6&&(this.slotHitT[a]=this.time),this.slotHp[a]=o,this.time-this.slotHitT[a]>1.5)return;i.set((e.x0+e.x1)/2,.8,(e.z0+e.z1)/2).project(this.cam.camera);let s=(i.x*.5+.5)*n,c=(-i.y*.5+.5)*r;if(s>40&&s<n-40&&c>40&&c<r-40)return;let l=n/2,u=r/2,d=Math.atan2(c-u,s-l),f=Math.min((n/2-40)/Math.abs(Math.cos(d)||1e-6),(r/2-40)/Math.abs(Math.sin(d)||1e-6));t.push({x:l+Math.cos(d)*f,y:u+Math.sin(d)*f,angle:d+Math.PI/2})}),t}coneAlpha=0;updateAimCone(e){let t=this.game,n=t.aimingNow&&t.phase!==`over`&&!t.action&&!this.attract&&!this.hideCone;this.coneAlpha+=(+!!n-this.coneAlpha)*Math.min(1,e*12);let r=this.aimCone;if(r.visible=this.coneAlpha>.02,!r.visible)return;let i=Uu[t.weapon],a=t.spreadNow()/2,o=r.geometry.getAttribute(`position`),s=pp,c=.5,l=i.range;for(let e=0;e<=s;e++){let n=t.aim-a+2*a*e/s;o.setXYZ(e*2,t.px+Math.sin(n)*c,.9,t.pz+Math.cos(n)*c),o.setXYZ(e*2+1,t.px+Math.sin(n)*l,.9,t.pz+Math.cos(n)*l)}o.needsUpdate=!0,r.material.uniforms.uAlpha.value=this.coneAlpha*(.16+.14*t.focus)*(.7+.3*t.darkness)*(this.touchZoom?1.8:1),r.material.uniforms.uFocus.value=t.focus}updateSlash(){let e=this.slashFan,t=this.slash,n=(this.time-t.t)/yp;if(e.visible=n>=0&&n<1&&!this.attract,!e.visible)return;let r=this.game,i=e.geometry.getAttribute(`position`),a=pp,o=t.arc;for(let e=0;e<=a;e++){let s=t.aim-o+2*o*e/a*Math.min(1,.35+n*1.6);i.setXYZ(e*2,r.px+Math.sin(s)*.45,.9,r.pz+Math.cos(s)*.45),i.setXYZ(e*2+1,r.px+Math.sin(s)*t.reach,.9,r.pz+Math.cos(s)*t.reach)}i.needsUpdate=!0,e.material.uniforms.uAlpha.value=(1-n)*1.1,e.material.uniforms.uFocus.value=.3}updateLockRing(e,t){let n=this.game,r=n.world,i=this.lockTarget,a=this.lockRing;if(i<0||!r.alive[i]||n.phase===`over`){a.visible=!1,this.lockShown=-1;return}let o=r.prevX[i]+(r.x[i]-r.prevX[i])*e,s=r.prevZ[i]+(r.z[i]-r.prevZ[i])*e;this.lockShown!==i&&(this.lockShown<0&&(this.lockX=o,this.lockZ=s),this.lockShown=i);let c=1-Math.exp(-18*t);this.lockX+=(o-this.lockX)*c,this.lockZ+=(s-this.lockZ)*c;let l=n.focus,u=r.radius[i]+.25+.5*(1-l);a.visible=!0,a.position.set(this.lockX,.05,this.lockZ),a.scale.setScalar(u);let d=a.material.uniforms;d.uColor.value.copy(wp).lerp(Tp,l>.97?1:l*.6),d.uAlpha.value=.95,d.uTime.value=this.time*(l>.97?2.5:1)}render(e,t,n=!1){let r=this.game;this.time+=t,this.frameDt=n?0:t,this.consumeFx(),this.updateBarricades(),this.updateSprites(e),this.updateBits(n?0:t);let i=r.darkness;this.grade(i),this.updateLights(i);let a=(i>.5?Xf.night:Xf.night+4)*(this.touchZoom?mp:1)*this.zoomScale;this.cam.distance+=(a-this.cam.distance)*Math.min(1,t*2);let o=1-Math.exp(-9*t);this.camX+=(r.px-(this.attract?_p*this.cam.distance:0)-this.camX)*o,this.camZ+=(r.pz-this.camZ)*o,this.shake=Math.max(0,this.shake-t*1.2);let s=this.shake*this.shake*2;this.cam.follow(this.camX+(Math.random()-.5)*s,.8,this.camZ+(Math.random()-.5)*s),this.updateAimCone(t),this.updateSlash(),this.updateLockRing(e,t),this.lightMap.render(this.renderer),this.renderer.render(this.scene,this.cam.camera)}},Bp=.12;async function Vp(e,t){let n=await jp(`./sprites/`),r=Up(),i=mu(t.bot?t.map:r?.map??t.map),a=new zp(e,i,n,t.dpr),o=t.seed,s=new Bd(i,o);a.setGame(s);let c=new qd(`./audio/`),l=t.bot?`play`:`menu`,u=t.bot?new Jd:null,d=-1,f=Bf(),p=()=>{c.setVolume(f.volume),a.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr,If[f.quality].dpr)),a.zoomScale=Lf[f.camera].zoom};p();let m=e=>{o++,s=new Bd(mu(e),o),s.clock=Math.min(s.clock,45),u=new Jd,d=-1,a.setGame(s),a.attract=!0,g.setAttract(!0),c.setDucked(!0)},h=(e,n=e?.map??s.map.id)=>{o++,s=new Bd(mu(n),o),e&&s.restore(e),u=t.bot?new Jd:null,l=`play`,a.setGame(s),a.attract=!1,g.setAttract(!1),g.close(),_.hide(),c.setDucked(!1),c.start(),x.active&&Sf()},g=new Pf(e,()=>s,{restart:()=>h(null),retryDay:()=>h(s.checkpoint),toMenu:()=>{l=`menu`,g.close(),m(s.map.id),_.show()},settings:()=>_.showSettingsOver(()=>g.togglePause())}),_=new Wf(e,{saved:()=>{let e=Up();return e?{day:e.day,map:pu.find(t=>t.id===(e.map??`crossroads`)).name}:null},resume:()=>h(Up()),start:e=>h(null,e),preview:e=>{e!==s.map.id&&m(e)},settings:()=>f,changeSettings:e=>{f=e,Vf(e),p()},touch:()=>x.active}),v=null,y=e=>{if(e===`escape`){if(_.escape()||l===`menu`)return;g.panel===`bench`||g.panel===`shop`?g.close():(g.panel===null||g.panel===`pause`)&&g.togglePause()}else if(e===`m`)c.setMuted(!c.muted);else if(l===`menu`)return;else e===`e`&&g.panel===null?g.openFocused():e===`e`&&(g.panel===`bench`||g.panel===`shop`)&&g.close()},b=new Qd(a.renderer.domElement,y),x=new gf(e,y,()=>f,(e,t)=>{let n=a.cam.groundPoint(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1,.5);return n?{x:n.x,z:n.z}:null});if(b.touch=x,g.touch=x,window.__game={game:()=>s,view:a,audio:c},a.renderer.domElement.style.cursor=`none`,l===`menu`){m(i.id),_.show();let e=()=>void c.start();window.addEventListener(`pointerdown`,e,{once:!0,capture:!0}),window.addEventListener(`keydown`,e,{once:!0,capture:!0})}e.addEventListener(`click`,e=>{e.target.closest(`.g-panel button, .m-root button`)&&c.click()},{capture:!0});let S=null,C=0,w=-1,T=e=>{requestAnimationFrame(T),w<0&&(w=e);let n=Math.min((e-w)/1e3,.1);w=e;let r=l===`menu`,i=!r&&(g.blocking||_.open);if(i)b.take(a.cam,s,!0),C=0;else for(C+=n*(r?1:t.speed);C>=jd;){let e=b.take(a.cam,s,r);s.step(u?u.input(s):e),C-=jd}r?(s.dawnReady&&s.nextDay(),s.phase===`over`&&(d<0?d=e:e-d>4e3&&m(pu[Math.floor(Math.random()*pu.length)].id))):!t.bot&&s.checkpoint!==v&&(v=s.checkpoint,Wp(v)),c.handle(s.fx,s),i||c.update(s,n),a.render(i?1:C/jd,n,i),g.update(i?0:n),g.panel!==S&&((g.panel===`shop`||g.panel===`bench`||S===`shop`||S===`bench`)&&c.panel(g.panel),S=g.panel);let o=b.ground,p=Math.hypot(o.x-s.px,o.z-s.pz)*Math.tan(s.spreadNow()/2),h=new W(o.x+Math.cos(s.aim)*p,o.y,o.z-Math.sin(s.aim)*p).project(a.cam.camera),y=o.clone().project(a.cam.camera),E=Math.hypot((h.x-y.x)*window.innerWidth,(h.y-y.y)*window.innerHeight)/2;g.setCrosshair(b.screenX,b.screenY,b.pointerSeen&&!x.active&&!r&&!_.open,E,s.focus,s.aimingNow),x.update(s,g.blocking||r||_.open,c.muted),a.touchZoom=x.active,s.hitAssist=x.active?Bp:0;let D=x.active&&f.touchFire===`lock`;a.lockTarget=D&&!r?x.lockTarget:-1,a.hideCone=D,g.setThreats(r?[]:a.threats()),a.renderer.domElement.style.cursor=r||_.open||g.blocking?`default`:`none`};requestAnimationFrame(T)}var Hp=`zombie3d.checkpoint`;function Up(){try{let e=JSON.parse(localStorage.getItem(Hp)??`null`);return e&&e.v===1?e:null}catch{return null}}function Wp(e){try{e&&localStorage.setItem(Hp,JSON.stringify(e))}catch{}}var Gp=class{gl;supported;ext;pending=[];free=[];active=null;onSample=null;constructor(e){this.gl=e,this.ext=e.getExtension(`EXT_disjoint_timer_query_webgl2`),this.supported=!!this.ext}begin(){if(!this.ext||this.active||this.pending.length>8)return;let e=this.free.pop()??this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.active=e)}end(){this.ext&&this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),this.active=null,this.poll())}poll(){let e=this.gl,t=this.ext;for(;this.pending.length;){let n=this.pending[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;let r=e.getParameter(t.GPU_DISJOINT_EXT),i=e.getQueryParameter(n,e.QUERY_RESULT);this.pending.shift(),this.free.push(n),!r&&this.onSample&&this.onSample(i/1e6)}}};async function Kp(e){let[t,n]=await Promise.all([fetch(`${e}.json`).then(t=>{if(!t.ok)throw Error(`${e}.json: HTTP ${t.status}`);return t.json()}),qp(`${e}.png`)]),[r,i]=t.cell;if(n.height!==i*Bc.length||n.width!==r*t.frames)throw Error(`${e}.png is ${n.width}x${n.height}, expected ${r*t.frames}x${i*Bc.length}`);let a=$c(new Wt(n));return a.needsUpdate=!0,{texture:a,meta:t,width:n.width,height:n.height}}function qp(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`failed to load ${e}`)),r.src=e})}function Jp(e,t,n){let r=n*60%t;r<0&&(r+=t);for(let t=0;t<e.length;t++)if(r-=e[t],r<0)return t;return e.length-1}function Yp(e){let t=e.length;if(!t)return{frames:0,meanMs:NaN,meanFps:NaN,p1LowMs:NaN,p1LowFps:NaN,maxMs:NaN};let n=Float64Array.from(e).sort(),r=0;for(let e=0;e<t;e++)r+=n[e];let i=Math.max(1,Math.ceil(t*.01)),a=0;for(let e=t-i;e<t;e++)a+=n[e];let o=r/t,s=a/i;return{frames:t,meanMs:o,meanFps:1e3/o,p1LowMs:s,p1LowFps:1e3/s,maxMs:n[t-1]}}var Xp=class{capacity;buf;n=0;head=0;constructor(e){this.capacity=e,this.buf=new Float64Array(e)}push(e){this.buf[this.head]=e,this.head=(this.head+1)%this.capacity,this.n<this.capacity&&this.n++}get length(){return this.n}clear(){this.n=this.head=0}values(){let e=new Float64Array(this.n),t=(this.head-this.n+this.capacity)%this.capacity;for(let n=0;n<this.n;n++)e[n]=this.buf[(t+n)%this.capacity];return e}mean(){if(!this.n)return NaN;let e=0;for(let t=0;t<this.n;t++)e+=this.buf[t];return e/this.n}recentMean(e){let t=Math.min(e,this.n);if(!t)return NaN;let n=0;for(let e=1;e<=t;e++)n+=this.buf[(this.head-e+this.capacity)%this.capacity];return n/t}},Zp=[200,500,1e3,2e3],Qp=e=>e.length?e.reduce((e,t)=>e+t,0)/e.length:NaN,$p=class{steps;apply;onDone;warmupMs;recordMs;report;index=-1;phaseStart=0;frames=[];cpu=[];crowd=[];gpu=[];pauses=0;calls=0;tris=0;constructor(e,t,n,r,i=2e3,a=1e4){this.steps=e,this.apply=t,this.onDone=n,this.warmupMs=i,this.recordMs=a,this.report={done:!1,step:0,phase:`warmup`,steps:[],env:r}}get phase(){return this.report.phase}get currentN(){return this.steps[Math.min(this.steps.length-1,Math.max(0,this.index))]}remaining(e){let t=this.report.phase===`warmup`?this.warmupMs:this.recordMs;return Math.max(0,(t-(e-this.phaseStart))/1e3)}start(e){this.next(e)}next(e){this.index++,this.index>=this.steps.length?(this.report.phase=`done`,this.report.done=!0,this.onDone(this.report)):(this.report.step=this.index,this.report.phase=`warmup`,this.phaseStart=e,this.apply(this.steps[this.index]))}frame(e,t,n,r,i,a=!1){let o=this.report;if(!(o.phase===`done`||this.index<0)){if(o.phase===`warmup`)e-this.phaseStart>=this.warmupMs&&(o.phase=`record`,this.phaseStart=e,this.frames=[],this.cpu=[],this.crowd=[],this.gpu=[],this.pauses=0);else if(a?this.pauses++:(this.frames.push(t),this.cpu.push(n)),this.calls=r,this.tris=i,e-this.phaseStart>=this.recordMs){let t=Yp(this.frames);o.steps.push({n:this.steps[this.index],...t,cpuMs:Qp(this.cpu),crowdMs:Qp(this.crowd),gpuMs:this.gpu.length?Qp(this.gpu):null,drawCalls:this.calls,triangles:this.tris,pauses:this.pauses}),this.next(e)}}}crowdSample(e){this.report.phase===`record`&&this.crowd.push(e)}gpuSample(e){this.report.phase===`record`&&this.gpu.push(e)}};function em(e){let t=(e,t=1)=>e===null||!Number.isFinite(e)?`n/a`:e.toFixed(t);return`<table><thead><tr><th>N</th><th>mean ms</th><th>mean fps</th><th>1% low fps</th><th>1% low ms</th><th>CPU ms</th><th>crowd ms</th><th>GPU ms</th><th>calls</th><th>tris</th><th>frames</th><th>paused</th></tr></thead><tbody>${e.steps.map(e=>`<tr><td>${e.n}</td><td>${t(e.meanMs,2)}</td><td>${t(e.meanFps)}</td><td>${t(e.p1LowFps)}</td><td>${t(e.p1LowMs,1)}</td><td>${t(e.cpuMs,2)}</td><td>${t(e.crowdMs,2)}</td><td>${t(e.gpuMs,2)}</td><td>${e.drawCalls}</td><td>${e.triangles}</td><td>${e.frames}</td><td>${e.pauses}</td></tr>`).join(``)}</tbody></table>`}var tm=class{capacity;world;bounds;seed;count=0;targetX=0;targetZ=0;x;z;prevX;prevZ;vx;vz;facing;speed;radius;cell;gw;gh;head;next;constructor(e,t,n,r=.28,i=1){this.capacity=e,this.world=t,this.bounds=n,this.seed=i,this.radius=r,this.x=new Float32Array(e),this.z=new Float32Array(e),this.prevX=new Float32Array(e),this.prevZ=new Float32Array(e),this.vx=new Float32Array(e),this.vz=new Float32Array(e),this.facing=new Float32Array(e),this.speed=new Float32Array(e),this.cell=Math.max(2*r,.5),this.gw=Math.ceil((n.x1-n.x0)/this.cell)+1,this.gh=Math.ceil((n.z1-n.z0)/this.cell)+1,this.head=new Int32Array(this.gw*this.gh),this.next=new Int32Array(e)}spawn(e,t=e.length/2){let n=this.seed,r=()=>(n=n*16807%2147483647)/2147483647;this.count=Math.min(t,this.capacity,Math.floor(e.length/2));for(let t=0;t<this.count;t++)this.x[t]=this.prevX[t]=e[t*2],this.z[t]=this.prevZ[t]=e[t*2+1],this.vx[t]=this.vz[t]=0,this.speed[t]=.9+r()*.7,this.facing[t]=Math.atan2(this.targetX-this.x[t],this.targetZ-this.z[t])}blocked(e,t){let n=this.radius*.8,r=this.world;return r.blockedAt(e-n,t-n)||r.blockedAt(e+n,t-n)||r.blockedAt(e-n,t+n)||r.blockedAt(e+n,t+n)}step(e){let{x:t,z:n,vx:r,vz:i,head:a,next:o,cell:s,gw:c,gh:l,bounds:u}=this,d=this.count;this.prevX.set(t.subarray(0,d)),this.prevZ.set(n.subarray(0,d)),a.fill(-1);for(let e=0;e<d;e++){let r=this.cellOf(t[e],n[e]);o[e]=a[r],a[r]=e}let f=this.radius*2,p=f*f,m=Math.min(1,e*5),h=7*e;for(let g=0;g<d;g++){let d=t[g],_=n[g],v=this.targetX-d,y=this.targetZ-_,b=Math.hypot(v,y),x=b>.05?this.speed[g]*Math.min(1,b)/b:0;r[g]+=(v*x-r[g])*m,i[g]+=(y*x-i[g])*m;let S=0,C=0,w=Math.floor((d-u.x0)/s),T=Math.floor((_-u.z0)/s);for(let e=-1;e<=1;e++){let r=T+e;if(!(r<0||r>=l))for(let e=-1;e<=1;e++){let i=w+e;if(!(i<0||i>=c))for(let e=a[r*c+i];e!==-1;e=o[e]){if(e===g)continue;let r=d-t[e],i=_-n[e],a=r*r+i*i;if(a>=p)continue;if(a<1e-8){S+=(g<e?.5:-.5)*f;continue}let o=Math.sqrt(a),s=(f-o)/o*.5;S+=r*s,C+=i*s}}}let E=d+r[g]*e+S,D=_+i[g]*e+C;E=Math.min(Math.max(E,u.x0+.5),u.x1-.5),D=Math.min(Math.max(D,u.z0+.5),u.z1-.5);let O=this.blocked(d,_);O||!this.blocked(E,_)?t[g]=E:r[g]=0,O||!this.blocked(t[g],D)?n[g]=D:i[g]=0;let k=t[g]-d,A=n[g]-_,ee=(k*k+A*A>(.25*e)**2?Math.atan2(k,A):Math.atan2(v,y))-this.facing[g];ee-=Math.round(ee/(Math.PI*2))*Math.PI*2,this.facing[g]+=Math.max(-h,Math.min(h,ee))}}cellOf(e,t){let n=this.bounds,r=Math.min(this.gw-1,Math.max(0,Math.floor((e-n.x0)/this.cell)));return Math.min(this.gh-1,Math.max(0,Math.floor((t-n.z0)/this.cell)))*this.gw+r}};function nm(e,t,n,r,i,a=3){let o=a,s=()=>(o=o*16807%2147483647)/2147483647,c=Math.sqrt(e*r*r/Math.PI)*2+4;for(let a=0;a<6;a++,c*=1.6){let o=[],l=r*Math.sqrt(3)/2;for(let e=-Math.ceil(c/l);e<=Math.ceil(c/l);e++){let a=n+e*l,u=(e&1)*r*.5;for(let e=-Math.ceil(c/r);e<=Math.ceil(c/r);e++){let c=t+e*r+u+(s()-.5)*r*.3,l=a+(s()-.5)*r*.3;i(c,l)&&o.push({x:c,z:l,d:Math.hypot(c-t,l-n)})}}if(o.length<e&&a<5)continue;o.sort((e,t)=>e.d-t.d);let u=new Float32Array(Math.min(e,o.length)*2);for(let e=0;e<u.length/2;e++)u[e*2]=o[e].x,u[e*2+1]=o[e].z;return u}return new Float32Array}var rm=class{capacity;count=0;x;y;z;vx;vy;vz;age;life;size0;growth;spin;bright;carry=0;s=12345;constructor(e){this.capacity=e;let t=()=>new Float32Array(e);this.x=t(),this.y=t(),this.z=t(),this.vx=t(),this.vy=t(),this.vz=t(),this.age=t(),this.life=t(),this.size0=t(),this.growth=t(),this.spin=t(),this.bright=t()}rand(){return this.s=this.s*16807%2147483647,this.s/2147483647}spray(e,t,n,r,i,a,o,s){let c=Math.sin(a),l=Math.cos(a);for(this.carry+=t*e;this.carry>=1;){--this.carry;let t=(this.rand()-.5)*s,a=o*(.75+this.rand()*.5),u=Math.cos(t),d=Math.sin(t),f=c*u+l*d,p=-c*d+l*u,m=this.rand()*e;this.add(n+f*a*m,r,i+p*a*m,f*a,.3+this.rand()*.8,p*a,.45+this.rand()*.35,.22,1.6,1)}}burn(e,t,n,r,i,a,o){let s=Math.floor(t*e+this.rand());for(let e=0;e<s;e++)this.add(n+(this.rand()-.5)*a,r,i+(this.rand()-.5)*o,(this.rand()-.5)*.4,1.2+this.rand()*1.2,(this.rand()-.5)*.4,.7+this.rand()*.6,.45,.7,.8)}add(e,t,n,r,i,a,o,s,c,l){if(this.count>=this.capacity)return;let u=this.count++;this.x[u]=e,this.y[u]=t,this.z[u]=n,this.vx[u]=r,this.vy[u]=i,this.vz[u]=a,this.age[u]=0,this.life[u]=o,this.size0[u]=s*(.8+this.rand()*.4),this.growth[u]=c,this.spin[u]=this.rand()*6.283,this.bright[u]=l}update(e){let t=Math.exp(-1.6*e);for(let n=0;n<this.count;)this.age[n]+=e,this.age[n]>=this.life[n]?this.kill(n):(this.vx[n]*=t,this.vz[n]*=t,this.vy[n]=this.vy[n]*t+2.2*e,this.x[n]+=this.vx[n]*e,this.y[n]+=this.vy[n]*e,this.z[n]+=this.vz[n]*e,n++)}kill(e){let t=--this.count;e!==t&&(this.x[e]=this.x[t],this.y[e]=this.y[t],this.z[e]=this.z[t],this.vx[e]=this.vx[t],this.vy[e]=this.vy[t],this.vz[e]=this.vz[t],this.age[e]=this.age[t],this.life[e]=this.life[t],this.size0[e]=this.size0[t],this.growth[e]=this.growth[t],this.spin[e]=this.spin[t],this.bright[e]=this.bright[t])}},im=class{count;speed;fire;hit;ox;oy;oz;dx;dy;dz;dist;range;target;shooter;constructor(e,t,n,r){this.count=e,this.speed=t,this.fire=n,this.hit=r;let i=()=>new Float32Array(e);this.ox=i(),this.oy=i(),this.oz=i(),this.dx=i(),this.dy=i(),this.dz=i(),this.dist=i(),this.range=i(),this.target=new Int32Array(e),this.shooter=new Int32Array(e);for(let t=0;t<e;t++)n(t,this),this.dist[t]=Math.random()*this.range[t]}aim(e,t,n,r,i,a,o){let s=i-t,c=a-n,l=o-r,u=Math.hypot(s,c,l)||1;this.ox[e]=t,this.oy[e]=n,this.oz[e]=r,this.dx[e]=s/u,this.dy[e]=c/u,this.dz[e]=l/u,this.range[e]=u,this.dist[e]=0}update(e){for(let t=0;t<this.count;t++)this.dist[t]+=this.speed*e,this.dist[t]>=this.range[t]&&(this.hit(t,this),this.fire(t,this))}},am=class{el;panel;constructor(e){this.el=document.createElement(`pre`),this.el.className=`hud`,e.appendChild(this.el),this.panel=document.createElement(`div`),this.panel.className=`bench-panel`,this.panel.hidden=!0,e.appendChild(this.panel)}set(e){let t=Math.max(...e.map(([e])=>e.length));this.el.textContent=e.map(([e,n])=>`${e.padEnd(t)}  ${n}`).join(`
`)}toggle(){this.el.hidden=!this.el.hidden}showPanel(e){this.panel.innerHTML=e,this.panel.hidden=!1}},om=80,sm=12;function cm(e){return()=>(e=e*16807%2147483647,e/2147483647)}function lm(e=7){let t=new Rl(om,sm,om,-40,-40),n=cm(e),r=e=>e-t.originX,i=e=>e-t.originZ,a=(e,n,a,o,s,c,l)=>t.fill(r(e),s,i(n),r(a),c,i(o),l),o=(e,n,a,o,s)=>t.setGround(r(e),i(n),r(a),i(o),s);o(-40,-40,40,40,X.Asphalt);for(let e=-40;e<40;e++)(e%4+4)%4<2&&o(e,-15,e+1,-14,X.AsphaltLine);o(-40,-10,40,-7,X.Pavement),o(-40,-10,40,-9,X.Curb),o(-40,-23,40,-20,X.Pavement),o(-40,-21,40,-20,X.Curb),o(-12,-7,-10,10,X.Pavement),o(10,-7,12,10,X.Pavement),o(-12,8,12,10,X.Pavement),o(-9,-6,9,7,X.Dirt),o(-30,12,-21,15,X.Grass),o(24,10,34,15,X.Grass);let s=(e,t,r,i,o,s,c)=>{a(e,t,r,i,0,o,s);for(let s=0;s<o;s++)for(let o=t;o<i;o++)for(let l=e;l<r;l++){let u=l===e||l===r-1,d=o===t||o===i-1;if(!u&&!d)continue;let f=d?l:o;s===0?(c===`s`&&o===i-1||c===`n`&&o===t||c===`e`&&l===r-1||c===`w`&&l===e)&&(f%5+5)%5<3&&!(u&&d)&&a(l,o,l+1,o+1,0,1,Z.Shutter):s%3==1&&(f%3+3)%3!=0&&!(u&&d)&&a(l,o,l+1,o+1,s,s+1,n()<.3?Z.WindowLit:Z.WindowDark)}};s(-38,-36,-27,-23,7,Z.Brick,`s`),s(-24,-36,-10,-23,9,Z.Concrete,`s`),s(-7,-36,6,-23,6,Z.Brick,`s`),s(9,-36,22,-23,8,Z.Brick,`s`),s(25,-36,38,-23,5,Z.Concrete,`s`),s(14,-5,27,9,5,Z.Brick,`w`),s(-27,-5,-14,11,7,Z.Concrete,`e`),s(-20,16,-4,30,4,Z.Brick,`n`),s(4,16,22,28,6,Z.Concrete,`n`);let c={x0:-10,z0:-7,x1:10,z1:8};a(c.x0,c.z0,c.x1,c.z0+1,0,2,Z.Cinder),a(c.x0,c.z1-1,c.x1,c.z1,0,2,Z.Cinder),a(c.x0,c.z0,c.x0+1,c.z1,0,2,Z.Cinder),a(c.x1-1,c.z0,c.x1,c.z1,0,2,Z.Cinder),a(-1,c.z0,1,c.z0+1,0,2,Z.Air),a(-1,c.z0,1,c.z0+1,0,1,Z.Planks),a(-1,c.z1-1,1,c.z1,0,2,Z.Planks);let l=[-7,-4,3,6].map(e=>(a(e,-6,e+1,-5,0,1,Z.Planks),{x:e+.5,y:1,z:-5.5}));a(-8,4,-6,6,0,1,Z.Crate),a(-8,5,-7,6,1,2,Z.Crate),a(6,2,8,3,0,1,Z.Crate);let u=(e,t)=>{a(e,t,e+4,t+2,0,1,Z.Metal),a(e+1,t,e+3,t+2,1,2,Z.Metal)};u(-16,-13),u(5,-18),u(20,-13),u(-30,-18);let d=[],f=[],p=(e,t,n,r=0)=>{d.push({min:[e-.1,0,t-.1],max:[e+.1,4.2,t+.1],top:X.Steel,side:X.Steel});let i=t+n*1.1;d.push({min:[e-.06,4.05,Math.min(t,i)],max:[e+.06,4.17,Math.max(t,i)],top:X.Steel,side:X.Steel}),d.push({min:[e-.28,3.85,i-.22],max:[e+.28,4.05,i+.22],top:X.Steel,side:X.Lamp}),f.push({x:e,z:i,radius:8,r:.8,g:.62,b:.36,flicker:r})};for(let e of[-30,-18,-6,6,18,30])p(e,-9.6,-1,+(e===18));for(let e of[-24,-12,0,12,24])p(e,-20.4,1);p(-11,9.4,1),p(11,9.4,1,1);let m=[];for(let e=0;e<om;e++)for(let n=0;n<om;n++)if(t.get(n,1,e)===Z.WindowLit)for(let[r,i]of[[1,0],[-1,0],[0,1],[0,-1]])t.get(n+r,0,e+i)!==Z.Air||n+r<0||e+i<0||n+r>=om||e+i>=om||m.push({x:t.originX+n+.5+r*1.2,z:t.originZ+e+.5+i*1.2,radius:2.6,r:.5,g:.36,b:.16,flicker:0});return{grid:t,boxes:d,lamps:f,glows:m,bounds:{x0:t.originX,z0:t.originZ,x1:t.originX+om,z1:t.originZ+om},yard:c,door:{x:0,z:c.z0-.35},defenders:l,playerStart:{x:0,z:-3.2},carFire:{x:7,y:1.2,z:-17}}}var um=1/30,dm=5;async function fm(e,t){let n=t.worst||t.bench,r=new zc({antialias:!1,powerPreference:`high-performance`,stencil:!1}),i=Math.min(window.devicePixelRatio||1,t.dpr);r.setPixelRatio(i),r.setSize(window.innerWidth,window.innerHeight),r.info.autoReset=!1,e.appendChild(r.domElement);let a=r.getContext(),o=lm(),{bounds:s}=o,c=Gf(),l=new np(s.x0,s.z0,s.x1-s.x0,s.z1-s.z0);c.uLightMap.value=l.texture,c.uLightRect.value.copy(l.rect);let u=new Nn;u.background=c.uFogColor.value;let d=new ei(Yl(ql(o.grid,el,o.boxes)),fp(Qc(),c));d.frustumCulled=!1,d.renderOrder=0,u.add(d);let f=await Kp(t.sheetUrl),p=t.sheetUrl.includes(`placeholder`)?2/f.meta.cell[0]:1/(f.meta.ppm??40),m=Math.max(t.n,t.bench?Math.max(...Zp):0),h=m+dm,g=new up(f,h,c,{metresPerPixel:p}),_=new dp(h,c,32),v=new $f(3e3,c),y=new ep(Math.max(1,t.bullets),c);g.mesh.renderOrder=1,_.mesh.renderOrder=2,v.mesh.renderOrder=3,y.mesh.renderOrder=4,u.add(g.mesh,_.mesh,v.mesh,y.mesh);let b=f.meta.durations,x=b.reduce((e,t)=>e+t,0),S=new Float32Array(h),C=new Float32Array(h),w=new Int8Array(h).fill(-1),T=new Float32Array(h);{let e=99,t=()=>(e=e*16807%2147483647)/2147483647;for(let e=0;e<h;e++){let n=e>=dm;if(S[e]=n?.94+t()*.14:1,C[e]=t()*10,e===0)g.setTint(e,150,185,255);else if(!n)g.setTint(e,255,205,160);else{let n=190+t()*65;g.setTint(e,n*(.9+t()*.1),n,n*(.85+t()*.15))}}}let E=new tm(m,o.grid,s);E.targetX=o.door.x,E.targetZ=o.door.z;let D=(e,t)=>!tl(o.yard,e,t)&&e>s.x0+1&&e<s.x1-1&&t>s.z0+1&&t<s.z1-1&&!o.grid.blockedAt(e-.25,t-.25)&&!o.grid.blockedAt(e+.25,t-.25)&&!o.grid.blockedAt(e-.25,t+.25)&&!o.grid.blockedAt(e+.25,t+.25),O=e=>{let t;if(n)t=nm(e,o.door.x,o.door.z-.3,.56,D);else{let n=[],r=5,i=()=>(r=r*16807%2147483647)/2147483647;for(;n.length<e*2;){let e=-38+i()*76,t=-22+i()*13;D(e,t)&&n.push(e,t)}t=new Float32Array(n)}E.spawn(t,e),w.fill(-1)};O(t.bench?Zp[0]:t.n);let k={x:o.playerStart.x,z:o.playerStart.z,aim:Math.PI},A=new Set,ee=!1,j=new Et(0,.3),te=!1,M=new Float32Array(o.defenders.length),N=new rm(3e3),P=0,F=new im(Math.max(0,t.bullets),45,(e,t)=>{let n=P=(P+1)%o.defenders.length,r=o.defenders[n],i=-1;for(let e=0;e<6&&E.count;e++){let e=Math.floor(Math.random()*E.count);if(i=e,E.z[e]<o.yard.z0)break}let a=i>=0?E.x[i]:r.x,s=i>=0?E.z[i]:r.z-10;t.aim(e,r.x,r.y+1.3,r.z-.3,a+(Math.random()-.5)*.3,1,s),t.target[e]=i,t.shooter[e]=n,M[n]=1},(e,t)=>{let n=t.target[e];n>=0&&n<E.count&&Math.random()<.33&&(T[dm+n]=1)}),I=new am(e),ne=new Zf(window.innerWidth/window.innerHeight,t.distance);window.addEventListener(`resize`,()=>{r.setSize(window.innerWidth,window.innerHeight),ne.resize(window.innerWidth/window.innerHeight)}),window.addEventListener(`keydown`,e=>{A.add(e.key.toLowerCase()),e.key===`h`&&I.toggle()}),window.addEventListener(`keyup`,e=>A.delete(e.key.toLowerCase())),r.domElement.addEventListener(`pointermove`,e=>{j.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),te=!0}),r.domElement.addEventListener(`pointerdown`,()=>ee=!0),window.addEventListener(`pointerup`,()=>ee=!1);let re=new Gp(a),ie=new Xp(1200),ae=new Xp(120),oe=new Xp(60),L=new Xp(60),se=null;re.onSample=e=>{L.push(e),se?.gpuSample(e)};let ce={userAgent:navigator.userAgent,gpu:pm(a),devicePixelRatio:window.devicePixelRatio,pixelRatio:i,timerQuery:re.supported,bullets:t.bullets,distance:t.distance,repeat:t.repeat,canvas:[r.domElement.width,r.domElement.height]};t.bench&&(se=new $p(Zp,O,e=>{I.showPanel(`<h2>bench done</h2>${em(e)}<p>window.__bench holds the JSON.</p>`),console.log(`[bench]`,JSON.stringify(e))},ce),window.__bench=se.report),window.__stress={setN:e=>O(Math.max(0,Math.min(m,Math.floor(e)))),stats:()=>{let e=Yp(ie.values());return{n:E.count,meanMs:e.meanMs,p1LowFps:e.p1LowFps,cpuMs:ae.mean(),crowdMs:oe.mean(),gpuMs:L.mean(),calls:r.info.render.calls,triangles:r.info.render.triangles}}};let le=new W,ue=0,de=0,fe=-1,pe=0,me=!1,he=0,ge=!1;document.addEventListener(`visibilitychange`,()=>{document.hidden&&(ge=!0)});let _e=e=>{requestAnimationFrame(_e),fe<0&&(fe=e);let a=e-fe;fe=e;let s=Math.min(a/1e3,.1),c=performance.now();for(r.info.reset(),ue+=s;ue>=um;){let e=performance.now();E.step(um);let t=performance.now()-e;oe.push(t),se?.crowdSample(t),ue-=um,de+=um}let d=ue/um,f=n;if(n)k.x=o.playerStart.x+Math.sin(de*.4)*1.5,k.z=o.playerStart.z,k.aim=Math.PI+Math.sin(de*1.3)*.4;else{let e=4*s,t=(A.has(`d`)||A.has(`arrowright`)?1:0)-(A.has(`a`)||A.has(`arrowleft`)?1:0),n=(A.has(`s`)||A.has(`arrowdown`)?1:0)-(A.has(`w`)||A.has(`arrowup`)?1:0);o.grid.blockedAt(k.x+t*e*2,k.z)||(k.x+=t*e),o.grid.blockedAt(k.x,k.z+n*e*2)||(k.z+=n*e),te&&ne.groundPoint(j.x,j.y,0,le)&&(k.aim=Math.atan2(le.x-k.x,le.z-k.z)),f=ee||A.has(` `)}let p=Math.sin(k.aim),m=Math.cos(k.aim);f&&N.spray(s,650,k.x+p*.5,.85,k.z+m*.5,k.aim,14,.45),N.burn(s,70,o.carFire.x,o.carFire.y,o.carFire.z,3,1.5),N.update(s),F.update(s);for(let e=0;e<M.length;e++)M[e]=Math.max(0,M[e]-s*14);let h=0;w[0]=Hc(k.aim,0,w[0]),g.set(h,k.x,0,k.z,1,w[0],Jp(b,x,de+C[0]),0),_.set(h++,k.x,.02,k.z,.32);for(let e of o.defenders)w[h]=Hc(Math.PI,0,w[h]),g.set(h,e.x,e.y,e.z,1,w[h],0,0),_.set(h++,e.x,e.y+.02,e.z,.32);let D=s*10;for(let e=0;e<E.count;e++,h++){let t=E.prevX[e]+(E.x[e]-E.prevX[e])*d,n=E.prevZ[e]+(E.z[e]-E.prevZ[e])*d;w[h]=Hc(E.facing[e],0,w[h]);let r=Jp(b,x,de*E.speed[e]*.8+C[h]),i=T[h];T[h]=i>D?i-D:0,g.set(h,t,0,n,S[h],w[h],r,i>.5?.85:0),_.set(h,t,.02,n,.3*S[h])}g.count=_.count=h,g.commit(),_.commit();for(let e=0;e<N.count;e++)v.set(e,N.x[e],N.y[e],N.z[e],N.size0[e]+N.growth[e]*N.age[e],N.age[e]/N.life[e],N.bright[e],N.spin[e]);v.count=N.count,v.commit();for(let e=0;e<F.count;e++){let t=F.dist[e],n=Math.max(0,t-1.2);y.set(e,F.ox[e]+F.dx[e]*t,F.oy[e]+F.dy[e]*t,F.oz[e]+F.dz[e]*t,F.ox[e]+F.dx[e]*n,F.oy[e]+F.dy[e]*n,F.oz[e]+F.dz[e]*n)}y.count=F.count,y.commit(),l.begin();for(let e of o.lamps){let t=e.flicker&&Math.sin(de*23)+Math.sin(de*37.7)>1.3?.15:1;l.point(e.x,e.z,e.radius,e.r*t,e.g*t,e.b*t)}for(let e of o.glows)l.point(e.x,e.z,e.radius,e.r,e.g,e.b);if(l.cone(k.x,k.z,13,k.aim,.42,.5,.54,.62),l.point(k.x,k.z,2.4,.18,.18,.22),o.defenders.forEach((e,t)=>{let n=M[t]*(.7+Math.random()*.6);n>.02&&l.point(e.x,e.z-.6,4,n*.7,n*.55,n*.3)}),f)for(let e of[1.4,3.2,5.2]){let t=.5+Math.random()*.3;l.point(k.x+p*e,k.z+m*e,3+e*.6,t,t*.5,t*.14)}{let e=.85+Math.sin(de*17)*.1+Math.random()*.15;l.point(o.carFire.x,o.carFire.z,7.5,e,e*.46,e*.12)}ne.follow(k.x+p*2.5,.8,k.z+m*2.5),re.begin(),l.render(r);for(let e=0;e<t.repeat;e++)r.render(u,ne.camera);re.end();let O=performance.now()-c;if(me){let t=ge;ge=!1,!t&&e-he>2e3&&ie.push(a),ae.push(O),se?.frame(e,a,O,r.info.render.calls,r.info.render.triangles,t)}else me=!0,he=e,window.__stress.firstFrameMs=performance.now(),se?.start(e);if(e>=pe){pe=e+250;let a=Yp(ie.values()),o=ie.recentMean(60),s=(e,t=1)=>Number.isFinite(e)?e.toFixed(t):`n/a`,c=[[`mode`,t.bench?`bench ${se.report.phase} N=${se.currentN} (${s(se.remaining(e),0)} s)`:n?`worst case`:`walk-in (WASD, mouse, hold to burn)`],[`N zombies`,String(E.count)],[`fps`,s(1e3/o)],[`frame ms (mean)`,s(o,2)],[`1% low fps`,`${s(a.p1LowFps)}  (${s(a.p1LowMs,1)} ms, last ${a.frames} frames)`],[`CPU ms / frame`,s(ae.mean(),2)],[`crowd ms / step`,s(oe.mean(),2)],[`GPU ms`,re.supported?s(L.mean(),2):`n/a (no timer query)`],[`draw calls`,String(r.info.render.calls)],[`triangles`,String(r.info.render.triangles)],[`canvas`,`${r.domElement.width}x${r.domElement.height} @ dpr ${i}`],[`lights / fire / bullets`,`${l.count} / ${N.count} / ${F.count}`]];I.set(c)}};requestAnimationFrame(_e)}function pm(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);return String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER))}var mm=new URLSearchParams(location.search),hm=(e,t)=>{let n=Number(mm.get(e));return mm.has(e)&&Number.isFinite(n)?n:t},gm=e=>mm.get(e)===`1`||mm.get(e)===`true`,_m=gm(`worst`),vm=gm(`bench`),ym=document.getElementById(`app`),bm=e=>{console.error(e);let t=document.createElement(`pre`);t.className=`fatal`,t.textContent=String(e instanceof Error?e.stack??e.message:e),ym.appendChild(t)};if(gm(`stress`)||_m||vm)document.title=`zombie-3d stress`,fm(ym,{worst:_m,bench:vm,n:Math.max(0,Math.min(2e4,Math.floor(hm(`n`,300)))),dpr:Math.max(.25,hm(`dpr`,1.25)),distance:Math.max(4,hm(`dist`,Xf.night)),bullets:Math.max(0,Math.floor(hm(`bullets`,_m||vm?200:60))),sheetUrl:`./`+(mm.get(`sheet`)??`sprites/placeholder/walk`),repeat:Math.max(1,Math.min(64,Math.floor(hm(`repeat`,1))))}).catch(bm);else{let e=pu.find(e=>e.id===mm.get(`map`))?.id??`crossroads`;Vp(ym,{dpr:Math.max(.25,hm(`dpr`,1.5)),seed:Math.floor(hm(`seed`,1)),bot:gm(`bot`),speed:Math.max(.1,Math.min(8,hm(`speed`,1))),map:e}).catch(bm)}