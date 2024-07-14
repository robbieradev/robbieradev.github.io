"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{5952:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:d,iconNode:f,...c}=e;return(0,n.createElement)("svg",{ref:t,...a,width:i,height:i,stroke:r,strokeWidth:s?24*Number(l)/Number(i):l,className:o("lucide",u),...c},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=((e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...u}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:o("lucide-".concat(i(e)),s),...u})});return r.displayName="".concat(e),r})("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7138:function(e,t,r){r.d(t,{default:function(){return i.a}});var n=r(231),i=r.n(n)},8173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),l=n._(r(4887)),s=n._(r(8321)),u=r(497),d=r(7103),f=r(3938);r(2301);let c=r(291),p=n._(r(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:u,className:d,style:f,fetchPriority:c,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:C,onError:S,...E}=e;return(0,o.jsx)("img",{...E,...g(c),loading:m,width:s,height:l,decoding:u,"data-nimg":y?"fill":"1",className:d,style:f,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,w,b,x,v,j))},[r,p,w,b,x,S,v,j,t]),onLoad:e=>{h(e.currentTarget,p,w,b,x,v,j)},onError:e=>{_(!0),"empty"!==p&&x(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(c.RouterContext),n=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[w,b]=(0,a.useState)(!1),[x,_]=(0,a.useState)(!1),{props:j,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:w,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2301);let n=r(1564),i=r(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:d,sizes:f,unoptimized:c=!1,priority:p=!1,loading:m,className:h,quality:g,width:v,height:y,fill:w=!1,style:b,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:C="empty",blurDataURL:S,fetchPriority:E,layout:P,objectFit:O,objectPosition:R,lazyBoundary:k,lazyRoot:M,...z}=e,{imgConf:I,showAltText:A,blurComplete:L,defaultLoader:N}=t,D=I||i.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let W=z.loader||N;delete z.loader,delete z.srcSet;let T="__next_img_default"in W;if(T){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!f&&(f=t)}let U="",F=a(v),B=a(y);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,U=e.src,!w){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let $=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,$=!1),l.unoptimized&&(c=!0),T&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(c=!0),p&&(E="high");let G=a(g),V=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},A?{}:{color:"transparent"},b),q=L||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:s,blurHeight:u,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+C+'")',H=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:c,width:F,quality:G,sizes:f,loader:W});return{props:{...z,loading:$?"lazy":m,fetchPriority:E,width:F,height:B,decoding:"async",className:h,style:{...V,...H},sizes:Y.sizes,srcSet:Y.srcSet,src:x||Y.src},meta:{unoptimized:c,priority:p,placeholder:C,fill:w}}}},8321:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),l=n._(r(5960)),s=r(2901),u=r(6590),d=r(687);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(9920)._(r(2265)),i=r(7103),o=n.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5960:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4458:function(e,t,r){r.d(t,{Ee:function(){return b},NY:function(){return x},fC:function(){return w}});var n=r(2265),i=r(8324),o=r(5137),a=r(1336),l=r(5171),s=r(7437),u="Avatar",[d,f]=(0,i.b)(u),[c,p]=d(u),m=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...i}=e,[o,a]=n.useState("idle");return(0,s.jsx)(c,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:(0,s.jsx)(l.WV.span,{...i,ref:t})})});m.displayName=u;var h="AvatarImage",g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:i,onLoadingStatusChange:u=()=>{},...d}=e,f=p(h,r),c=function(e){let[t,r]=n.useState("idle");return(0,a.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,i=e=>()=>{t&&r(e)};return r("loading"),n.onload=i("loaded"),n.onerror=i("error"),n.src=e,()=>{t=!1}},[e]),t}(i),m=(0,o.W)(e=>{u(e),f.onImageLoadingStatusChange(e)});return(0,a.b)(()=>{"idle"!==c&&m(c)},[c,m]),"loaded"===c?(0,s.jsx)(l.WV.img,{...d,ref:t,src:i}):null});g.displayName=h;var v="AvatarFallback",y=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:i,...o}=e,a=p(v,r),[u,d]=n.useState(void 0===i);return n.useEffect(()=>{if(void 0!==i){let e=window.setTimeout(()=>d(!0),i);return()=>window.clearTimeout(e)}},[i]),u&&"loaded"!==a.imageLoadingStatus?(0,s.jsx)(l.WV.span,{...o,ref:t}):null});y.displayName=v;var w=m,b=g,x=y},5127:function(e,t,r){r.d(t,{M:function(){return y}});var n=r(7437),i=r(2265),o=r(9033);function a(){let e=(0,i.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var l=r(6219),s=r(7797),u=r(458),d=r(9791);class f extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let r=(0,i.useId)(),o=(0,i.useRef)(null),a=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,i.useContext)(d._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:n,top:i,left:s}=a.current;if(t||!o.current||!e||!n)return;o.current.dataset.motionPopId=r;let u=document.createElement("style");return l&&(u.nonce=l),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),(0,n.jsx)(f,{isPresent:t,childRef:o,sizeRef:a,children:i.cloneElement(e,{ref:o})})}let p=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:a,presenceAffectsLayout:l,mode:d})=>{let f=(0,u.h)(m),p=(0,i.useId)(),h=(0,i.useMemo)(()=>({id:p,initial:t,isPresent:r,custom:a,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},register:e=>(f.set(e,!1),()=>f.delete(e))}),l?[Math.random()]:[r]);return(0,i.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[r]),i.useEffect(()=>{r||f.size||!o||o()},[r]),"popLayout"===d&&(e=(0,n.jsx)(c,{isPresent:r,children:e})),(0,n.jsx)(s.O.Provider,{value:h,children:e})};function m(){return new Map}var h=r(5050),g=r(9047);let v=e=>e.key||"",y=({children:e,custom:t,initial:r=!0,onExitComplete:s,exitBeforeEnter:u,presenceAffectsLayout:d=!0,mode:f="sync"})=>{var c;(0,g.k)(!u,"Replace exitBeforeEnter with mode='wait'");let m=(0,i.useContext)(h.p).forceRender||function(){let e=a(),[t,r]=(0,i.useState)(0),n=(0,i.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,i.useCallback)(()=>l.Wi.postRender(n),[n]),t]}()[0],y=a(),w=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),b=w,x=(0,i.useRef)(new Map).current,_=(0,i.useRef)(b),j=(0,i.useRef)(new Map).current,C=(0,i.useRef)(!0);if((0,o.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let r=v(e);t.set(r,e)})}(w,j),_.current=b}),c=()=>{C.current=!0,j.clear(),x.clear()},(0,i.useEffect)(()=>()=>c(),[]),C.current)return(0,n.jsx)(n.Fragment,{children:b.map(e=>(0,n.jsx)(p,{isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:d,mode:f,children:e},v(e)))});b=[...b];let S=_.current.map(v),E=w.map(v),P=S.length;for(let e=0;e<P;e++){let t=S[e];-1!==E.indexOf(t)||x.has(t)||x.set(t,void 0)}return"wait"===f&&x.size&&(b=[]),x.forEach((e,r)=>{if(-1!==E.indexOf(r))return;let i=j.get(r);if(!i)return;let o=S.indexOf(r),a=e;a||(a=(0,n.jsx)(p,{isPresent:!1,onExitComplete:()=>{x.delete(r);let e=Array.from(j.keys()).filter(e=>!E.includes(e));if(e.forEach(e=>j.delete(e)),_.current=w.filter(t=>{let n=v(t);return n===r||e.includes(n)}),!x.size){if(!1===y.current)return;m(),s&&s()}},custom:t,presenceAffectsLayout:d,mode:f,children:i},v(i)),x.set(r,a)),b.splice(o,0,a)}),b=b.map(e=>{let t=e.key;return x.has(t)?e:(0,n.jsx)(p,{isPresent:!0,presenceAffectsLayout:d,mode:f,children:e},v(e))}),(0,n.jsx)(n.Fragment,{children:x.size?b:b.map(e=>(0,i.cloneElement)(e))})}},8733:function(e,t,r){r.d(t,{Y:function(){return o}});var n=r(2265);r(9047);let i={some:0,all:1};function o(e,{root:t,margin:r,amount:o,once:a=!1}={}){let[l,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||a&&l)return;let n={root:t&&t.current||void 0,margin:r,amount:o};return function(e,t,{root:r,margin:n,amount:o="some"}={}){var a;let l=("string"==typeof(a=e)?a=document.querySelectorAll(a):a instanceof Element&&(a=[a]),Array.from(a||[])),s=new WeakMap,u=new IntersectionObserver(e=>{e.forEach(e=>{let r=s.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?s.set(e.target,r):u.unobserve(e.target)}else r&&(r(e),s.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof o?o:i[o]});return l.forEach(e=>u.observe(e)),()=>u.disconnect()}(e.current,()=>(s(!0),a?void 0:()=>s(!1)),n)},[t,e,r,a,o]),l}}}]);