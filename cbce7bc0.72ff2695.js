(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{346:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(414)),i={title:"Extending Premake"},c={unversionedId:"Extending-Premake",id:"Extending-Premake",isDocsHomePage:!1,title:"Extending Premake",description:"Premake is written almost entirely in Lua, the same dynamic language that you use while writing your project scripts. Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like.",source:"@site/docs/Extending-Premake.md",slug:"/Extending-Premake",permalink:"/docs/Extending-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Extending-Premake.md",version:"current",sidebar:"mainSidebar",previous:{title:"More Authoring Topics",permalink:"/docs/Topics"},next:{title:"Code Overview",permalink:"/docs/Code-Overview"}},u=[{value:"Use the Source!",id:"use-the-source",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Premake is written almost entirely in ",Object(a.b)("a",{parentName:"p",href:"http://www.lua.org/"},"Lua"),", the same dynamic language that you use while ",Object(a.b)("a",{parentName:"p",href:"your-first-script"},"writing your project scripts"),". Because Lua is dynamic, you can easily replace functions, add new values, and generally run amok in the code to make things work the way you like."),Object(a.b)("p",null,"We've structured (or are in the process of structuring, with the intention of being done before the 5.0 release) the code with this feature in mind, adopting coding conventions that make it easy to hook and override or extend Premake's functionality."),Object(a.b)("h3",{id:"use-the-source"},"Use the Source!"),Object(a.b)("p",null,"Before you start hacking away, you should be comfortable browsing through the ",Object(a.b)("a",{parentName:"p",href:"http://github.com/premake/premake-core"},"source code of Premake")," or ",Object(a.b)("a",{parentName:"p",href:"modules"},"the third-party module")," you wish to modify. You will need to be able to identify the Lua function that emits the markup or otherwise implements the feature you wish to change before you can hook into it."),Object(a.b)("p",null,"If you haven't already, you should ",Object(a.b)("a",{parentName:"p",href:"getting-premake"},"grab a source code package, or clone the code repository on GitHub")," to use as a reference."),Object(a.b)("p",null,"Then check out the ",Object(a.b)("a",{parentName:"p",href:"code-overview"},"Code Overview")," to get a general sense of where things live, and ",Object(a.b)("a",{parentName:"p",href:"coding-conventions"},"Coding Conventions")," for an overview on how the code is structured and why we did it that way."),Object(a.b)("p",null,"Have a look at ",Object(a.b)("a",{parentName:"p",href:"overrides-and-call-arrays"},"Overrides and Call Arrays")," to learn more about Premake's extensible coding conventions, and how you can leverage them to easily change its current behavior."),Object(a.b)("p",null,"When you're ready, check out the ",Object(a.b)("a",{parentName:"p",href:"/docs"},"documentation index")," for more customization topics like adding support for new actions and toolsets, and ",Object(a.b)("a",{parentName:"p",href:"introducing-modules"},"how to use modules")," to package your code up to share with others."))}l.isMDXComponent=!0},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(h,c(c({ref:t},s),{},{components:r})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);