(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{179:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(9),o=(t(0),t(200)),c={id:"4_upgrade_operator",title:"Upgrade Operator",sidebar_label:"Upgrade Operator"},s={id:"5_operations/4_upgrade_operator",title:"Upgrade Operator",description:"Case : No changes of the CRD's structure",source:"@site/docs/5_operations/4_upgrade_operator.md",permalink:"/casskop/docs/5_operations/4_upgrade_operator",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/5_operations/4_upgrade_operator.md",sidebar_label:"Upgrade Operator",sidebar:"docs",previous:{title:"Backup and restore",permalink:"/casskop/docs/5_operations/3_5_backup_restore"},next:{title:"Upgrade Bootstrap Image",permalink:"/casskop/docs/5_operations/5_upgrade_bootstrap_image"}},p=[{value:"Case : No changes of the CRD&#39;s structure",id:"case--no-changes-of-the-crds-structure",children:[]}],i={rightToc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"case--no-changes-of-the-crds-structure"},"Case : No changes of the CRD's structure"),Object(o.b)("p",null,"Upgrading the operator consists in uninstalling the current version and installing the new version :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"helm uninstall casskop\nhelm repo update\nhelm install --name casskop casskop/cassandra-operator\n")),Object(o.b)("p",null,"It's also possible to decide to temporarily install a developement release by specifying the image tag to use :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"helm install --name casskop casskop/cassandra-operator --set debug.enabled=true --no-hooks \\\n--set image.tag=v0.5.0b-branch1\n")))}u.isMDXComponent=!0},200:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return t?a.a.createElement(f,s(s({ref:r},i),{},{components:t})):a.a.createElement(f,s({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);