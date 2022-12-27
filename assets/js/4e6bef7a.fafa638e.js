"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"o2a",title:"o2a",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"o2a",description:"Convert dyld_shared_cache offset to address",last_update:{date:new Date("2022-12-23T09:36:33.000Z"),author:"blacktop"}},i=void 0,l={unversionedId:"cli/ipsw/dyld/o2a",id:"cli/ipsw/dyld/o2a",title:"o2a",description:"Convert dyld_shared_cache offset to address",source:"@site/docs/cli/ipsw/dyld/o2a.md",sourceDirName:"cli/ipsw/dyld",slug:"/cli/ipsw/dyld/o2a",permalink:"/ipsw/docs/cli/ipsw/dyld/o2a",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/o2a.md",tags:[],version:"current",frontMatter:{id:"o2a",title:"o2a",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"o2a",description:"Convert dyld_shared_cache offset to address",last_update:{date:"2022-12-23T09:36:33.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"macho",permalink:"/ipsw/docs/cli/ipsw/dyld/macho"},next:{title:"objc",permalink:"/ipsw/docs/cli/ipsw/dyld/objc/"}},d={},c=[{value:"ipsw dyld o2a",id:"ipsw-dyld-o2a",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-dyld-o2a"},"ipsw dyld o2a"),(0,o.kt)("p",null,"Convert dyld_shared_cache offset to address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw dyld o2a <dyld_shared_cache> <offset> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -d, --dec    Return address in decimal\n  -h, --help   help for o2a\n  -x, --hex    Return address in hexadecimal\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld"},"ipsw dyld"),"\t - Parse dyld_shared_cache")))}p.isMDXComponent=!0}}]);