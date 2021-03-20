(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{394:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(414)),l={},o={unversionedId:"libdirs",id:"libdirs",isDocsHomePage:!1,title:"libdirs",description:"Specifies the library search paths for the linker.",source:"@site/docs/libdirs.md",slug:"/libdirs",permalink:"/docs/libdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/libdirs.md",version:"current",sidebar:"mainSidebar",previous:{title:"largeaddressaware",permalink:"/docs/largeaddressaware"},next:{title:"linkbuildoutputs",permalink:"/docs/linkbuildoutputs"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Specifies the library search paths for the linker."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "paths" }\n')),Object(a.b)("p",null,"Library search directories are not well supported by the .NET tools. Visual Studio will change relative paths to absolute, making it difficult to share the generated project. MonoDevelop does not support search directories at all, using only the GAC. In general, it is better to include the full (relative) path to the assembly in ",Object(a.b)("a",{parentName:"p",href:"/docs/links"},"links")," instead. C/C++ projects do not have this limitation."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"paths")," specifies a list of library search directories. Paths should be specified relative to the currently running script file."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 4.0 or later."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("p",null,"Define two library file search paths."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "../lua/libs", "../zlib" }\n')),Object(a.b)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "../libs/**" }\n')))}p.isMDXComponent=!0},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return r?i.a.createElement(f,o(o({ref:t},s),{},{components:r})):i.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);