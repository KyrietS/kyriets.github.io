(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(414)),o={},c={unversionedId:"buildcustomizations",id:"buildcustomizations",isDocsHomePage:!1,title:"buildcustomizations",description:"Imports custom .props files for Visual Studio.",source:"@site/docs/buildcustomizations.md",slug:"/buildcustomizations",permalink:"/docs/buildcustomizations",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildcustomizations.md",version:"current",sidebar:"mainSidebar",previous:{title:"buildcommands",permalink:"/docs/buildcommands"},next:{title:"builddependencies",permalink:"/docs/builddependencies"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Imports custom .props files for Visual Studio."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'buildcustomizations { "string" }\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"value")," - needs documentation."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"project")," scope."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0.0 alpha 12 or later."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'buildcustomizations { "string" }\n')))}p.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);