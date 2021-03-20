(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{405:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(414)),o={},l={unversionedId:"os.findheader",id:"os.findheader",isDocsHomePage:!1,title:"os.findheader",description:"Scan the well-known system locations looking for a header file.",source:"@site/docs/os.findheader.md",slug:"/os.findheader",permalink:"/docs/os.findheader",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.findheader.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.executef",permalink:"/docs/os.executef"},next:{title:"os.findlib",permalink:"/docs/os.findlib"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Availability",id:"availability",children:[]}],d={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Scan the well-known system locations looking for a header file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'p = os.findheader("headerfile" [, additionalpaths])\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"headerfile")," is a file name or a the end of a file path to locate. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"additionalpaths")," is a string or a table of one or more additional search path."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"The path containing the header file, if found. Otherwise, nil."),Object(i.b)("h3",{id:"remarks"},"Remarks"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"os.findheader")," mostly use the same paths as [","[os.findlib]","] but replace ",Object(i.b)("inlineCode",{parentName:"p"},"/lib")," by ",Object(i.b)("inlineCode",{parentName:"p"},"/include"),".  "),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."))}p.isMDXComponent=!0},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,f=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return r?a.a.createElement(f,l(l({ref:t},d),{},{components:r})):a.a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);