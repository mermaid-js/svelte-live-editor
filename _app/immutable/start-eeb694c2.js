import{S as at,i as ot,s as st,a as it,e as C,c as lt,b as K,g as he,t as F,d as me,f as B,h as J,j as ct,o as Pe,k as ft,l as ut,m as dt,n as ke,p as D,q as pt,r as ht,u as mt,v as H,w as W,x as Ne,y as Y,z as X,A as ce}from"./chunks/index-b1a93a0b.js";import{S as tt,I as q,g as He,f as We,a as Se,b as fe,s as G,i as Ye,c as pe,P as Xe,d as _t,e as gt}from"./chunks/singletons-15e560d5.js";import{_ as ee}from"./chunks/preload-helper-9b728935.js";import{s as wt}from"./chunks/paths-6cd3a76e.js";function yt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function bt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(n,e){const t=new URL(n);for(const i of Et){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return St(t),t}function St(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function It(n){return n.replace(/\/$/,"")+Rt}function Ot(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ne.delete(i)}return _e(n,e)};const ne=new Map;function Lt(n,e){const t=nt(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...u}=JSON.parse(i.textContent),r=i.getAttribute("data-ttl");return r&&ne.set(t,{body:s,init:u,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,u))}return _e(n,e)}function Pt(n,e,t){if(ne.size>0){const i=nt(n,t),s=ne.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);ne.delete(i)}}return _e(e,t)}function nt(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Ot(e.body)}"]`),i}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Nt(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const r=i.split(/\[(.+?)\](?!\])/),f=r.map((m,_)=>{if(_%2){if(m.startsWith("x+"))return Re(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Re(String.fromCharCode(...m.slice(2).split("-").map(V=>parseInt(V,16))));const w=$t.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,S,U,$]=w;return e.push({name:U,matcher:$,optional:!!k,rest:!!S,chained:S?_===1&&r[0]==="":!1}),S?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Re(m)}).join("");return"/"+f}).join("")}/?$`),params:e}}function At(n){return!/^\([^)]+\)$/.test(n)}function Nt(n){return n.slice(1).split("/").filter(At)}function Ut(n,e,t){const i={},s=n.slice(1);let u="";for(let r=0;r<e.length;r+=1){const f=e[r];let m=s[r];if(f.chained&&f.rest&&u&&(m=m?u+"/"+m:u),u="",m===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!t[f.matcher](m)){if(f.optional&&f.chained){let _=s.indexOf(void 0,r);if(_===-1){const w=e[r+1];if((w==null?void 0:w.rest)&&w.chained)u=m;else return}for(;_>=r;)s[_]=s[_-1],_-=1;continue}return}i[f.name]=m}}if(!u)return i}function Re(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([f,[m,_,w]])=>{const{pattern:k,params:S}=jt(f),U={id:f,exec:$=>{const V=k.exec($);if(V)return Ut(V,S,i)},errors:[1,...w||[]].map($=>n[$]),layouts:[0,..._||[]].map(r),leaf:u(m)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function u(f){const m=f<0;return m&&(f=~f),[m,n[f]]}function r(f){return f===void 0?f:[s.has(f),n[f]]}}function Dt(n){let e,t,i;var s=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=H(s,u(n))),{c(){e&&W(e.$$.fragment),t=C()},l(r){e&&Ne(e.$$.fragment,r),t=C()},m(r,f){e&&Y(e,r,f),K(r,t,f),i=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&2&&(m.form=r[1]),s!==(s=r[0][0])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),me()}s?(e=H(s,u(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function qt(n){let e,t,i;var s=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Vt]},$$scope:{ctx:r}}}}return s&&(e=H(s,u(n))),{c(){e&&W(e.$$.fragment),t=C()},l(r){e&&Ne(e.$$.fragment,r),t=C()},m(r,f){e&&Y(e,r,f),K(r,t,f),i=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&523&&(m.$$scope={dirty:f,ctx:r}),s!==(s=r[0][0])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),me()}s?(e=H(s,u(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Vt(n){let e,t,i;var s=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=H(s,u(n))),{c(){e&&W(e.$$.fragment),t=C()},l(r){e&&Ne(e.$$.fragment,r),t=C()},m(r,f){e&&Y(e,r,f),K(r,t,f),i=!0},p(r,f){const m={};if(f&8&&(m.data=r[3]),f&2&&(m.form=r[1]),s!==(s=r[0][1])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),me()}s?(e=H(s,u(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(m)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Ze(n){let e,t=n[5]&&Qe(n);return{c(){e=ft("div"),t&&t.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=dt(e);t&&t.l(s),s.forEach(J),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(i,s){K(i,e,s),t&&t.m(e,null)},p(i,s){i[5]?t?t.p(i,s):(t=Qe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&J(e),t&&t.d()}}}function Qe(n){let e;return{c(){e=pt(n[6])},l(t){e=ht(t,n[6])},m(t,i){K(t,e,i)},p(t,i){i&64&&mt(e,t[6])},d(t){t&&J(e)}}}function Ct(n){let e,t,i,s,u;const r=[qt,Dt],f=[];function m(w,k){return w[0][1]?0:1}e=m(n),t=f[e]=r[e](n);let _=n[4]&&Ze(n);return{c(){t.c(),i=it(),_&&_.c(),s=C()},l(w){t.l(w),i=lt(w),_&&_.l(w),s=C()},m(w,k){f[e].m(w,k),K(w,i,k),_&&_.m(w,k),K(w,s,k),u=!0},p(w,[k]){let S=e;e=m(w),e===S?f[e].p(w,k):(he(),F(f[S],1,1,()=>{f[S]=null}),me(),t=f[e],t?t.p(w,k):(t=f[e]=r[e](w),t.c()),B(t,1),t.m(i.parentNode,i)),w[4]?_?_.p(w,k):(_=Ze(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){u||(B(t),u=!0)},o(w){F(t),u=!1},d(w){f[e].d(w),w&&J(i),_&&_.d(w),w&&J(s)}}}function Ft(n,e,t){let{stores:i}=e,{page:s}=e,{components:u}=e,{form:r}=e,{data_0:f=null}=e,{data_1:m=null}=e;ct(i.page.notify);let _=!1,w=!1,k=null;return Pe(()=>{const S=i.page.subscribe(()=>{_&&(t(5,w=!0),t(6,k=document.title||"untitled page"))});return t(4,_=!0),S}),n.$$set=S=>{"stores"in S&&t(7,i=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,u=S.components),"form"in S&&t(1,r=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,m=S.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(s)},[u,r,f,m,_,w,k,i,s]}class Bt extends at{constructor(e){super(),ot(this,e,Ft,Ct,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Jt={},ge=[()=>ee(()=>import("./chunks/0-e73006d7.js"),["./chunks/0-e73006d7.js","./chunks/_layout-22144c87.js","./components/pages/_layout.svelte-e2ea3c53.js","./chunks/index-b1a93a0b.js","./chunks/paths-6cd3a76e.js","./chunks/state-def71488.js","./chunks/preload-helper-9b728935.js","./chunks/theme-5434ea9e.js","./assets/_layout-ff36eaba.css"],import.meta.url),()=>ee(()=>import("./chunks/1-74a7de4d.js"),["./chunks/1-74a7de4d.js","./components/error.svelte-29fd8763.js","./chunks/index-b1a93a0b.js","./chunks/singletons-15e560d5.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>ee(()=>import("./chunks/2-dfec617c.js"),["./chunks/2-dfec617c.js","./components/pages/_page.svelte-00a48bd2.js","./chunks/index-b1a93a0b.js","./chunks/singletons-15e560d5.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>ee(()=>import("./chunks/3-c7802469.js"),["./chunks/3-c7802469.js","./components/pages/edit/_page.svelte-5bd1768f.js","./chunks/index-b1a93a0b.js","./chunks/state-def71488.js","./chunks/preload-helper-9b728935.js","./chunks/theme-5434ea9e.js","./chunks/View-96cb1bdd.js","./assets/View-0c536ccf.css","./chunks/paths-6cd3a76e.js","./assets/_page-826332b8.css"],import.meta.url),()=>ee(()=>import("./chunks/4-7bf617e3.js"),["./chunks/4-7bf617e3.js","./components/pages/view/_page.svelte-6b420582.js","./chunks/index-b1a93a0b.js","./chunks/View-96cb1bdd.js","./chunks/state-def71488.js","./chunks/preload-helper-9b728935.js","./assets/View-0c536ccf.css"],import.meta.url)],Mt=[],Gt={"/":[2],"/edit":[3],"/view":[4]},Kt={handleError:({error:n})=>{console.error(n)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,t){this.status=e,this.location=t}}async function zt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function i(s,u=!1){if(s===Ht)return;if(s===Yt)return NaN;if(s===Xt)return 1/0;if(s===Zt)return-1/0;if(s===Qt)return-0;if(u)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const m=new Set;t[s]=m;for(let k=1;k<r.length;k+=1)m.add(i(r[k]));break;case"Map":const _=new Map;t[s]=_;for(let k=1;k<r.length;k+=2)_.set(i(r[k]),i(r[k+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const w=Object.create(null);t[s]=w;for(let k=1;k<r.length;k+=2)w[r[k]]=i(r[k+1]);break}else{const f=new Array(r.length);t[s]=f;for(let m=0;m<r.length;m+=1){const _=r[m];_!==Wt&&(f[m]=i(_))}}else{const f={};t[s]=f;for(const m in r){const _=r[m];f[m]=i(_)}}return t[s]}return i(0)}const Ie=Tt(ge,Mt,Gt,Jt),je=ge[0],Ae=ge[1];je();Ae();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Oe(n){re[n]=pe()}function en({target:n,base:e}){var Ge;const t=[];let i=null;const s={before_navigate:[],after_navigate:[]};let u={branch:[],error:null,url:null},r=!1,f=!1,m=!0,_=!1,w=!1,k=!1,S=!1,U,$=(Ge=history.state)==null?void 0:Ge[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const V=re[$];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let M,Ue,ae;async function Te(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ve(a,!0);i=null,await qe(o,a,[])}async function we(a,{noScroll:o=!1,replaceState:l=!1,keepFocus:c=!1,state:h={},invalidateAll:p=!1},d,E){return typeof a=="string"&&(a=new URL(a,He(document))),ie({url:a,scroll:o?pe():null,keepfocus:c,redirect_chain:d,details:{state:h,replaceState:l},nav_token:E,accepted:()=>{p&&(S=!0)},blocked:()=>{},type:"goto"})}async function De(a){const o=ve(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Fe(o).then(l=>(l.type==="loaded"&&l.state.error&&(i=null),l))},i.promise}async function oe(...a){const l=Ie.filter(c=>a.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(l)}async function qe(a,o,l,c,h={},p){var E,b;Ue=h;let d=a&&await Fe(a);if(d||(d=await Me(o,{id:null},await te(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ue!==h)return!1;if(d.type==="redirect")if(l.length>10||l.includes(o.pathname))d=await se({status:500,error:await te(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(d.location,o).href,{},[...l,o.pathname],h),!1;else((b=(E=d.props)==null?void 0:E.page)==null?void 0:b.status)>=400&&await G.updated.check()&&await le(o);if(t.length=0,S=!1,_=!0,c&&c.details){const{details:y}=c,v=y.replaceState?0:1;y.state[q]=$+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,f){u=d.state,d.props.page&&(d.props.page.url=o);const y=de();U.$set(d.props),y()}else Ve(d);if(c){const{scroll:y,keepfocus:v}=c;if(v||Le(),await ce(),m){const I=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,d.props.page&&(M=d.props.page),p&&p(),_=!1}function Ve(a){var h,p;u=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),M=a.props.page;const l=de();U=new Bt({target:n,props:{...a.props,stores:G},hydrate:!0}),l();const c={from:null,to:ue("to",{params:u.params,route:{id:(p=(h=u.route)==null?void 0:h.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(c)),f=!0}async function Z({url:a,params:o,branch:l,status:c,error:h,route:p,form:d}){var A;const E=l.filter(Boolean);let b="never";for(const O of l)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);a.pathname=yt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:l,error:h,route:p},props:{components:E.map(O=>O.node.component)}};d!==void 0&&(y.props.form=d);let v={},I=!M;for(let O=0;O<E.length;O+=1){const j=E[O];v={...v,...j.data},(I||!u.branch.some(T=>T===j))&&(y.props[`data_${O}`]=v,I=I||Object.keys((A=j.data)!=null?A:{}).length>0)}if(I||(I=Object.keys(M.data).length!==Object.keys(v).length),!u.url||a.href!==u.url.href||u.error!==h||d!==void 0||I){y.props.page={error:h,params:o,route:p,status:c,url:new URL(a),form:d,data:I?v:M.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(j,T)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function ye({loader:a,parent:o,url:l,params:c,route:h,server_data_node:p}){var y,v,I,N,A,O,j;let d=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.shared)!=null&&y.load){let T=function(...g){for(const R of g){const{href:L}=new URL(R,l);E.dependencies.add(L)}};const Q={route:{get id(){return E.route=!0,h.id}},params:new Proxy(c,{get:(g,R)=>(E.params.add(R),g[R])}),data:(v=p==null?void 0:p.data)!=null?v:null,url:kt(l,()=>{E.url=!0}),async fetch(g,R){let L;g instanceof Request?(L=g.url,R={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...R}):L=g;const P=new URL(L,l).href;return T(P),f?Pt(L,P,R):Lt(L,R)},setHeaders:()=>{},depends:T,parent(){return E.parent=!0,o()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(I=await b.shared.load.call(null,Q))!=null?I:null,d=d?await zt(d):null}return{node:b,loader:a,server:p,shared:(N=b.shared)!=null&&N.load?{type:"data",data:d,uses:E}:null,data:(A=d!=null?d:p==null?void 0:p.data)!=null?A:null,slash:(j=(O=b.shared)==null?void 0:O.trailingSlash)!=null?j:p==null?void 0:p.slash}}function Ce(a,o,l,c,h){if(S)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&l)return!0;for(const p of c.params)if(h[p]!==u.params[p])return!0;for(const p of c.dependencies)if(t.some(d=>d(new URL(p))))return!0;return!1}function be(a,o){var l,c;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((c=a.uses.params)!=null?c:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Fe({id:a,invalidating:o,url:l,params:c,route:h}){var Q;if((i==null?void 0:i.id)===a)return i.promise;const{errors:p,layouts:d,leaf:E}=h,b=[...d,E];p.forEach(g=>g==null?void 0:g().catch(()=>{})),b.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const v=u.url?a!==u.url.pathname+u.url.search:!1,I=u.route?a!==u.route.id:!1,N=b.reduce((g,R,L)=>{var x;const P=u.branch[L],z=!!(R!=null&&R[0])&&((P==null?void 0:P.loader)!==R[1]||Ce(g.some(Boolean),I,v,(x=P.server)==null?void 0:x.uses,c));return g.push(z),g},[]);if(N.some(Boolean)){try{y=await et(l,N)}catch(g){return se({status:500,error:await te(g,{url:l,params:c,route:{id:h.id}}),url:l,route:h})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let O=!1;const j=b.map(async(g,R)=>{var x;if(!g)return;const L=u.branch[R],P=A==null?void 0:A[R];if((!P||P.type==="skip")&&g[1]===(L==null?void 0:L.loader)&&!Ce(O,I,v,(x=L.shared)==null?void 0:x.uses,c))return L;if(O=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:g[1],url:l,params:c,route:h,parent:async()=>{var ze;const Ke={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(Ke,(ze=await j[Ee])==null?void 0:ze.data);return Ke},server_data_node:be(P===void 0&&g[0]?{type:"skip"}:P!=null?P:null,L==null?void 0:L.server)})});for(const g of j)g.catch(()=>{});const T=[];for(let g=0;g<b.length;g+=1)if(b[g])try{T.push(await j[g])}catch(R){if(R instanceof xe)return{type:"redirect",location:R.location};let L=500,P;A!=null&&A.includes(R)?(L=(Q=R.status)!=null?Q:L,P=R.error):R instanceof $e?(L=R.status,P=R.body):P=await te(R,{params:c,url:l,route:{id:h.id}});const z=await Be(g,T,p);return z?await Z({url:l,params:c,branch:T.slice(0,z.idx).concat(z.node),status:L,error:P,route:h}):await Me(l,{id:h.id},P,L)}else T.push(void 0);return await Z({url:l,params:c,branch:T,status:200,error:null,route:h,form:o?void 0:null})}async function Be(a,o,l){for(;a--;)if(l[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:o,url:l,route:c}){var y;const h={},p=await je();let d=null;if(p.server)try{const v=await et(l,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;d=(y=v.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await le(l)}const E=await ye({loader:je,url:l,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:be(d)}),b={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Z({url:l,params:h,branch:[E,b],status:a,error:o,route:null})}function ve(a,o){if(Ye(a,e))return;const l=bt(a.pathname.slice(e.length)||"/");for(const c of Ie){const h=c.exec(l);if(h)return{id:a.pathname+a.search,invalidating:o,route:c,params:vt(h),url:a}}}function Je({url:a,type:o,intent:l,delta:c}){var E,b,y,v,I;let h=!1;const p={from:ue("from",{params:u.params,route:{id:(b=(E=u.route)==null?void 0:E.id)!=null?b:null},url:u.url}),to:ue("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(I=(v=l==null?void 0:l.route)==null?void 0:v.id)!=null?I:null},url:a}),willUnload:!l,type:o};c!==void 0&&(p.delta=c);const d={...p,cancel:()=>{h=!0}};return w||s.before_navigate.forEach(N=>N(d)),h?null:p}async function ie({url:a,scroll:o,keepfocus:l,redirect_chain:c,details:h,type:p,delta:d,nav_token:E,accepted:b,blocked:y}){const v=ve(a,!1),I=Je({url:a,type:p,delta:d,intent:v});if(!I){y();return}Oe($),b(),w=!0,f&&G.navigating.set(I),await qe(v,a,c,{scroll:o,keepfocus:l,details:h},E,()=>{w=!1,s.after_navigate.forEach(N=>N(I)),G.navigating.set(null)})}async function Me(a,o,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await se({status:c,error:l,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",p=>{const d=p.target;clearTimeout(a),a=setTimeout(()=>{c(d,2)},20)});function o(p){c(p.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const l=new IntersectionObserver(p=>{for(const d of p)d.isIntersecting&&(oe(new URL(d.target.href).pathname),l.unobserve(d.target))},{threshold:0});function c(p,d){const E=We(p,n);if(!E)return;const{url:b,external:y}=Se(E,e);if(y)return;const v=fe(E);v.reload||(d<=v.preload_data?De(b):d<=v.preload_code&&oe(b.pathname))}function h(){l.disconnect();for(const p of n.querySelectorAll("a")){const{url:d,external:E}=Se(p,e);if(E)continue;const b=fe(p);b.reload||(b.preload_code===Xe.viewport&&l.observe(p),b.preload_code===Xe.eager&&oe(d.pathname))}}s.after_navigate.push(h),h()}return{after_navigate:a=>{Pe(()=>(s.after_navigate.push(a),()=>{const o=s.after_navigate.indexOf(a);s.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(s.before_navigate.push(a),()=>{const o=s.before_navigate.indexOf(a);s.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!f)&&(m=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:o}=new URL(a,location.href);t.push(l=>l.href===o)}return Te()},invalidateAll:()=>(S=!0,Te()),preload_data:async a=>{const o=new URL(a,He(document));await De(o)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:l,route:c}=u;if(!c)return;const h=await Be(u.branch.length,l,c.errors);if(h){const p=await Z({url:o,params:u.params,branch:l.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:c});u=p.state;const d=de();U.$set(p.props),d(),ce().then(Le)}}else if(a.type==="redirect")we(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...M,form:a.data,status:a.status}},l=de();U.$set(o),l(),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c,h;let l=!1;if(!w){const p={from:ue("from",{params:u.params,route:{id:(h=(c=u.route)==null?void 0:c.id)!=null?h:null},url:u.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};s.before_navigate.forEach(d=>d(p))}l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe($);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const l=We(o.composedPath()[0],n);if(!l)return;const{url:c,external:h,has:p}=Se(l,e),d=fe(l);if(!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(h||d.reload){Je({url:c,type:"link"})||o.preventDefault(),w=!0;return}const[b,y]=c.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){k=!0,Oe($),u.url=c,G.page.set({...M,url:c}),G.page.notify();return}ie({url:c,scroll:d.noscroll?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const l=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||l.method)!=="get")return;const p=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||l.action);if(Ye(p,e))return;const{noscroll:d,reload:E}=fe(o.target);E||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:p,scroll:d?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var l;if((l=o.state)!=null&&l[q]){if(o.state[q]===$)return;const c=o.state[q]-$;ie({url:new URL(location.href),scroll:re[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:o,node_ids:l,params:c,route:h,data:p,form:d})=>{var y;r=!0;const E=new URL(location.href);let b;try{const v=l.map(async(I,N)=>{const A=p[N];return ye({loader:ge[I],url:E,params:c,route:h,parent:async()=>{const O={};for(let j=0;j<N;j+=1)Object.assign(O,(await v[j]).data);return O},server_data_node:be(A)})});b=await Z({url:E,params:c,branch:await Promise.all(v),status:a,error:o,form:d,route:(y=Ie.find(({id:I})=>I===h.id))!=null?y:null})}catch(v){if(v instanceof xe){await le(new URL(v.location,location.href));return}b=await se({status:v instanceof $e?v.status:500,error:await te(v,{url:E,params:c,route:h}),url:E,route:h})}Ve(b)}}}async function et(n,e){var u;const t=new URL(n);t.pathname=It(n.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const i=await _e(t.href),s=await i.json();if(!i.ok)throw new Error(s);return(u=s.nodes)==null||u.forEach(r=>{var f,m;(r==null?void 0:r.type)==="data"&&(r.data=xt(r.data),r.uses={dependencies:new Set((f=r.uses.dependencies)!=null?f:[]),params:new Set((m=r.uses.params)!=null?m:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function te(n,e){var t;return n instanceof $e?n.body:(t=Kt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const tn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(n,e){for(const t of tn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function sn({env:n,hydrate:e,paths:t,target:i,version:s}){wt(t),gt(s);const u=en({target:i,base:t.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{sn as start};
