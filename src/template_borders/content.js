!function(){let e=[];document.querySelectorAll(".accordion").forEach(((t,o)=>{e.push({container:t,activeElement:null}),t.querySelectorAll(".accordion-navigation").forEach((n=>{n.classList.contains("active")&&(e[o].activeElement=n),n.querySelector("a").onclick=o=>{o.preventDefault(),function(t,o){for(let n=0;n<e.length;n++)if(t===e[n].container){if(e[n].activeElement&&(e[n].activeElement.classList.remove("active"),e[n].activeElement===o)){e[n].activeElement=null;break}o.classList.add("active"),e[n].activeElement=o;break}}(t,n)}}))})),function(){const e=document.querySelector("#silo-menu-button"),t=document.querySelector("#silo-container");e.addEventListener("click",(()=>{t.classList.toggle("show")}))}(),function(){const e=document.querySelector("#menu-button"),t=document.querySelector(".level-1.small"),o=t.querySelectorAll(".with-children");e.addEventListener("click",(()=>{t.classList.contains("show")&&(t.classList.remove("nest"),o.forEach((e=>{e.querySelector(".level-2").classList.remove("show")}))),t.classList.toggle("show")})),o.forEach((e=>{const n=e.querySelector(".dropdown"),i=e.querySelector(".level-2");n.addEventListener("click",(function(){o.forEach((e=>{e.querySelector(".level-2").classList.remove("show")})),t.classList.add("nest"),i.classList.add("show")})),i.querySelector(".return-level-1").addEventListener("click",(function(){t.classList.remove("nest")}))}))}();
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom*/
var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o=function(e){return"IMG"===e.tagName},n=function(e){return e&&1===e.nodeType},i=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},r=function(e){try{return Array.isArray(e)?e.filter(o):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(o):n(e)?[e].filter(o):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(o):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},d=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},a=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+l+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},l=function(e,o){var n=t({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),i},c=function e(o){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=window.Promise||function(e){function t(){}e(t,t)},s=function(e){var t=e.target;t!==T?-1!==k.indexOf(t)&&w({target:t}):E()},u=function(){if(!x&&O.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-e)>A.scrollOffset&&setTimeout(E,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e;if(e.background&&(T.style.background=e.background),e.container&&e.container instanceof Object&&(o.container=t({},A.container,e.container)),e.template){var i=n(e.template)?e.template:document.querySelector(e.template);o.template=i}return A=t({},A,o),k.forEach((function(e){e.dispatchEvent(l("medium-zoom:update",{detail:{zoom:N}}))})),N},v=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(t({},A,o))},h=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,r(t))}),[]);return n.filter((function(e){return-1===k.indexOf(e)})).forEach((function(e){k.push(e),e.classList.add("medium-zoom-image")})),C.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),N},g=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];O.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,r(t))}),[]):k;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(l("medium-zoom:detach",{detail:{zoom:N}}))})),k=k.filter((function(e){return-1===n.indexOf(e)})),N},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return k.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),C.push({type:"medium-zoom:"+e,listener:t,options:o}),N},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return k.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),C=C.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),N},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.target,r=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},o=void 0,r=void 0;if(A.container)if(A.container instanceof Object)o=(e=t({},e,A.container)).width-e.left-e.right-2*A.margin,r=e.height-e.top-e.bottom-2*A.margin;else{var d=(n(A.container)?A.container:document.querySelector(A.container)).getBoundingClientRect(),a=d.width,l=d.height,c=d.left,m=d.top;e=t({},e,{width:a,height:l,left:c,top:m})}o=o||e.width-2*A.margin,r=r||e.height-2*A.margin;var s=O.zoomedHd||O.original,u=i(s)?o:s.naturalWidth||o,f=i(s)?r:s.naturalHeight||r,p=s.getBoundingClientRect(),v=p.top,h=p.left,g=p.width,y=p.height,z=Math.min(u,o)/g,b=Math.min(f,r)/y,E=Math.min(z,b),w="scale("+E+") translate3d("+((o-g)/2-h+A.margin+e.left)/E+"px, "+((r-y)/2-v+A.margin+e.top)/E+"px, 0)";O.zoomed.style.transform=w,O.zoomedHd&&(O.zoomedHd.style.transform=w)};return new m((function(e){if(o&&-1===k.indexOf(o))e(N);else{if(O.zoomed)e(N);else{if(o)O.original=o;else{if(!(k.length>0))return void e(N);var t=k;O.original=t[0]}if(O.original.dispatchEvent(l("medium-zoom:open",{detail:{zoom:N}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,x=!0,O.zoomed=a(O.original),document.body.appendChild(T),A.template){var i=n(A.template)?A.template:document.querySelector(A.template);O.template=document.createElement("div"),O.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(O.template)}if(document.body.appendChild(O.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),O.original.classList.add("medium-zoom-image--hidden"),O.zoomed.classList.add("medium-zoom-image--opened"),O.zoomed.addEventListener("click",E),O.zoomed.addEventListener("transitionend",(function t(){x=!1,O.zoomed.removeEventListener("transitionend",t),O.original.dispatchEvent(l("medium-zoom:opened",{detail:{zoom:N}})),e(N)})),O.original.getAttribute("data-zoom-src")){O.zoomedHd=O.zoomed.cloneNode(),O.zoomedHd.removeAttribute("srcset"),O.zoomedHd.removeAttribute("sizes"),O.zoomedHd.src=O.zoomed.getAttribute("data-zoom-src"),O.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+O.zoomedHd.src),O.zoomedHd=null,r()};var d=setInterval((function(){O.zoomedHd.complete&&(clearInterval(d),O.zoomedHd.classList.add("medium-zoom-image--opened"),O.zoomedHd.addEventListener("click",E),document.body.appendChild(O.zoomedHd),r())}),10)}else if(O.original.hasAttribute("srcset")){O.zoomedHd=O.zoomed.cloneNode(),O.zoomedHd.removeAttribute("sizes"),O.zoomedHd.removeAttribute("loading");var c=O.zoomedHd.addEventListener("load",(function(){O.zoomedHd.removeEventListener("load",c),O.zoomedHd.classList.add("medium-zoom-image--opened"),O.zoomedHd.addEventListener("click",E),document.body.appendChild(O.zoomedHd),r()}))}else r()}}}))},E=function(){return new m((function(e){if(!x&&O.original){x=!0,document.body.classList.remove("medium-zoom--opened"),O.zoomed.style.transform="",O.zoomedHd&&(O.zoomedHd.style.transform=""),O.template&&(O.template.style.transition="opacity 150ms",O.template.style.opacity=0),O.original.dispatchEvent(l("medium-zoom:close",{detail:{zoom:N}})),O.zoomed.addEventListener("transitionend",(function t(){O.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(O.zoomed),O.zoomedHd&&document.body.removeChild(O.zoomedHd),document.body.removeChild(T),O.zoomed.classList.remove("medium-zoom-image--opened"),O.template&&document.body.removeChild(O.template),x=!1,O.zoomed.removeEventListener("transitionend",t),O.original.dispatchEvent(l("medium-zoom:closed",{detail:{zoom:N}})),O.original=null,O.zoomed=null,O.zoomedHd=null,O.template=null,e(N)}))}else e(N)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return O.original?E():b({target:t})},L=function(){return A},H=function(){return k},S=function(){return O.original},k=[],C=[],x=!1,q=0,A=c,O={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(o)?A=o:(o||"string"==typeof o)&&h(o),A=t({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},A);var T=d(A.background);document.addEventListener("click",s),document.addEventListener("keyup",f),document.addEventListener("scroll",u),window.addEventListener("resize",E);var N={open:b,close:E,toggle:w,update:p,clone:v,attach:h,detach:g,on:y,off:z,getOptions:L,getImages:H,getZoomedImage:S};return N};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),document.querySelectorAll(".lightbox").forEach((e=>{const t=e.querySelector("img"),o=e.href;t.setAttribute("data-zoom-src",o),e.onclick=e=>{e.preventDefault()}})),c(".lightbox img",{background:"rgba(0, 0, 0, 0.75)"}),function(){if("localhost"===window.location.hostname)return;document.querySelectorAll("a[href]").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget;t?.attributes?.getNamedItem?.("href")?.value?(e.preventDefault(),window.location.href=t.attributes.getNamedItem("href").value+"?cache=0&dev_template=1&test=1"):(console.log(t),window.confirm("This link could not be intercepted. Are you sure you want to leave the test enviroment?")||e.preventDefault())}))}))}(),function(){if("localhost"===window.location.hostname)return;const e=document.querySelector("html"),t=document.createElement("button",{});t.innerHTML="Open old page (DEV)",t.style.position="fixed",t.style.bottom="16px",t.style.right="16px",t.style.backgroundColor="#212121",t.style.color="#fafafa",t.style.paddingTop="12px",t.style.paddingBottom="12px",t.style.paddingRight="20px",t.style.paddingLeft="20px",t.style.borderRadius="999px",t.style.fontWeight="900",t.onclick=()=>{const{origin:e,pathname:t}=window.location;window.open(e+t)},e.appendChild(t)}()}();
