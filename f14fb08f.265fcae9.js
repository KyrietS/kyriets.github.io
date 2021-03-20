(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(414)),l={},c={unversionedId:"staticruntime",id:"staticruntime",isDocsHomePage:!1,title:"staticruntime",description:"staticruntime",source:"@site/docs/staticruntime.md",slug:"/staticruntime",permalink:"/docs/staticruntime",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/staticruntime.md",version:"current",sidebar:"mainSidebar",previous:{title:"startproject",permalink:"/docs/startproject"},next:{title:"strictaliasing",permalink:"/docs/strictaliasing"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"staticruntime"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'staticruntime "value"\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Value"),Object(i.b)("th",{parentName:"tr",align:null},"Visual Studio"),Object(i.b)("th",{parentName:"tr",align:null},"XCode"),Object(i.b)("th",{parentName:"tr",align:null},"gmake"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"on")),Object(i.b)("td",{parentName:"tr",align:null},"Sets ",Object(i.b)("inlineCode",{parentName:"td"},"<RuntimeLibrary>"),' to "MultiThreaded"'),Object(i.b)("td",{parentName:"tr",align:null},"No Effect"),Object(i.b)("td",{parentName:"tr",align:null},"No Effect")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"off")),Object(i.b)("td",{parentName:"tr",align:null},"Sets ",Object(i.b)("inlineCode",{parentName:"td"},"<RuntimeLibrary>"),' to "MultiThreadedDLL"'),Object(i.b)("td",{parentName:"tr",align:null},"No Effect"),Object(i.b)("td",{parentName:"tr",align:null},"No Effect")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"default")),Object(i.b)("td",{parentName:"tr",align:null},"Does not set a value for ",Object(i.b)("inlineCode",{parentName:"td"},"<RuntimeLibrary>")),Object(i.b)("td",{parentName:"tr",align:null},"No Effect"),Object(i.b)("td",{parentName:"tr",align:null},"No Effect")))),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"config")," scope."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0.0 alpha 12 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'staticruntime "on"\n')))}p.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(s,c(c({ref:t},b),{},{components:n})):a.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);