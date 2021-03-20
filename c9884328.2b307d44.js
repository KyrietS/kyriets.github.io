(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(414)),i={},l={unversionedId:"table.foreachi",id:"table.foreachi",isDocsHomePage:!1,title:"table.foreachi",description:"Walk the elements of an array and call the specified function for each non-nil element.",source:"@site/docs/table.foreachi.md",slug:"/table.foreachi",permalink:"/docs/table.foreachi",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.foreachi.md",version:"current",sidebar:"mainSidebar",previous:{title:"table.fold",permalink:"/docs/table.fold"},next:{title:"table.implode",permalink:"/docs/table.implode"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Walk the elements of an array and call the specified function for each non-nil element."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"table.foreachi(arr, fn)\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"arr")," is an table containing indexed values. ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," is the function to call for each non-nil element. The value (not the index) will be passed as the only argument."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"None."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."))}p.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,d=b["".concat(i,".").concat(s)]||b[s]||f[s]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);