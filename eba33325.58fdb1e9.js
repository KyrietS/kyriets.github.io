(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(414)),o={},p={unversionedId:"path.appendExtension",id:"path.appendExtension",isDocsHomePage:!1,title:"path.appendExtension",description:"Appends an extension to a file path if it is not already present.",source:"@site/docs/path.appendExtension.md",slug:"/path.appendExtension",permalink:"/docs/path.appendExtension",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.appendExtension.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.writefile_ifnotequal",permalink:"/docs/os.writefile_ifnotequal"},next:{title:"path.getabsolute",permalink:"/docs/path.getabsolute"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Appends an extension to a file path if it is not already present."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},"p = path.appendExtension(p, ext)\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"p")," is a file system path."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ext")," is the extension to append to the path."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"A new file system path with the extension appended, if it was not already part of the path."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.join"},"path.join"))))}s.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);