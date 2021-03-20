(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{258:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(414)),l={},i={unversionedId:"framework",id:"framework",isDocsHomePage:!1,title:"framework",description:"Selects a .NET framework version.",source:"@site/docs/framework.md",slug:"/framework",permalink:"/docs/framework",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/framework.md",version:"current",sidebar:"mainSidebar",previous:{title:"fpu",permalink:"/docs/fpu"},next:{title:"functionlevellinking",permalink:"/docs/functionlevellinking"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selects a .NET framework version."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'framework ("version")\n')),Object(o.b)("p",null,"This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no framework is specified the toolset default is used."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"version")," is one of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1.0"),Object(o.b)("li",{parentName:"ul"},"1.1"),Object(o.b)("li",{parentName:"ul"},"2.0"),Object(o.b)("li",{parentName:"ul"},"3.0"),Object(o.b)("li",{parentName:"ul"},"3.5"),Object(o.b)("li",{parentName:"ul"},"4.0")),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.4 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Use the .NET 3.0 Framework."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'framework "3.0"\n')),Object(o.b)("h3",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"This API is deprecated since 5.0, please use ",Object(o.b)("a",{parentName:"p",href:"/docs/dotnetframework"},"dotnetframework")," instead."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/clr"},"clr")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/dotnetframework"},"dotnetframework"))))}u.isMDXComponent=!0},414:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,f=s["".concat(l,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(f,i(i({ref:r},p),{},{components:t})):a.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);