(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(414)),i={},c={unversionedId:"debugformat",id:"debugformat",isDocsHomePage:!1,title:"debugformat",description:"Specifies the desired format of the debug information written to the output binaries.",source:"@site/docs/debugformat.md",slug:"/debugformat",permalink:"/docs/debugformat",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/debugformat.md",version:"current",sidebar:"mainSidebar",previous:{title:"debugextendedprotocol",permalink:"/docs/debugextendedprotocol"},next:{title:"debugger",permalink:"/docs/debugger"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Specifies the desired format of the debug information written to the output binaries."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'debugformat "format"\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"format")," specifies the desired debug format:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"c7"),Object(o.b)("td",{parentName:"tr",align:null},"Specifies that MSVC should store debuginfo in the objects rather than a separate .pdb file.")))),Object(o.b)("p",null,"More values may be added by ",Object(o.b)("a",{parentName:"p",href:"/docs/Modules"},"add-on modules"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note for Visual Studio Users:")," Use ",Object(o.b)("a",{parentName:"p",href:"/docs/editAndContinue"},"editAndContinue")," to control the ",Object(o.b)("inlineCode",{parentName:"p"},"/Zi")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/ZI")," switches; see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1425"},"this discussion")," for more information."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/editAndContinue"},"editAndContinue"))))}u.isMDXComponent=!0},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);