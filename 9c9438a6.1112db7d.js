(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{272:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(414)),i={title:"Sharing Configuration Settings"},c={unversionedId:"Sharing-Configuration-Settings",id:"Sharing-Configuration-Settings",isDocsHomePage:!1,title:"Sharing Configuration Settings",description:"I'm very interested in having a project A be able to specify information that project B can use to compile and link against project A, without having to repeat that information all over the place.",source:"@site/docs/Sharing-Configuration-Settings.md",slug:"/Sharing-Configuration-Settings",permalink:"/docs/Sharing-Configuration-Settings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Sharing-Configuration-Settings.md",version:"current",sidebar:"mainSidebar",previous:{title:"Adding a New Action",permalink:"/docs/Adding-New-Action"},next:{title:"architecture",permalink:"/docs/architecture"}},s=[],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I'm very interested in having a project A be able to specify information that project B can use to compile and link against project A, without having to repeat that information all over the place.")),Object(a.b)("p",null,'There have been discussions on forums new and old about this in the past; search for "usages". It would be great to pull those together here for reference if anyone gets a chance. In the meantime, feel free to add your approaches below.'),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"@starkos:")," We use functions here. For specifying how to compile and link against a library:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'-- How to declare it\nfunction someLibrary(options)\n   defines { ... }\n   links { ... }\n   options = options or {}\n   if options.someFlag then\n      defines { ... }\n   end\nend\n\n-- How to use it\nproject "someOtherProject"\n   kind "ConsoleApp"\n   someLibrary { someFlag="true" }\n')),Object(a.b)("p",null,'And for defining "classes" of projects:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'function someComponent_test(name)\n   project(name)\n   kind "ConsoleApp"\n   defines { ... }\n   links { ... }\n   filter {}\nend\n')))}l.isMDXComponent=!0},414:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);