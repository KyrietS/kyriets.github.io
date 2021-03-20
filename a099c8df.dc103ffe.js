(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{281:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(414)),i={title:"Debugging Scripts"},c={unversionedId:"Debugging-Scripts",id:"Debugging-Scripts",isDocsHomePage:!1,title:"Debugging Scripts",description:"ZeroBrane Studio",source:"@site/docs/Debugging-Scripts.md",slug:"/Debugging-Scripts",permalink:"/docs/Debugging-Scripts",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Debugging-Scripts.md",version:"current"},u=[{value:"ZeroBrane Studio",id:"zerobrane-studio",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"zerobrane-studio"},"ZeroBrane Studio"),Object(a.b)("p",null,"Since Premake's update to 5.3, the only debugger that seems to be able to debug Premake is the free ZeroBrane Studio IDE."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://studio.zerobrane.com/"},"Download ZeroBrane Studio")," and install it"),Object(a.b)("li",{parentName:"ul"},"Compile a ",Object(a.b)("a",{parentName:"li",href:"building-premake"},"debug build of Premake"),". Your premake build should have built luasocket.dll, and there is a mobdebug.lua file in the root. Copy both alongside your premake executable to the location where you intend to run premake."),Object(a.b)("li",{parentName:"ul"},"Run ZeroBrane Studio and in the Project dropdown, select ",Object(a.b)("strong",{parentName:"li"},"Start Debugger Server"),"."),Object(a.b)("li",{parentName:"ul"},"There's also a Project tab. Right-click the root folder and select ",Object(a.b)("strong",{parentName:"li"},"Project Directory > Choose...")," to select the root of the premake repository. Open the lua file you want to debug (you can start with _premake_init.lua) and set a breakpoint."),Object(a.b)("li",{parentName:"ul"},"Run premake with your desired command line and append ",Object(a.b)("inlineCode",{parentName:"li"},"--scripts=path_to_premake --debugger")," path_to_premake is the root of the repository where src lives. This isn't necessary if you run premake in the same directory as the src folder. If all goes well premake should think for a moment and the debugger should flash indicating that it has broken execution."),Object(a.b)("li",{parentName:"ul"},"An example command line would be ",Object(a.b)("inlineCode",{parentName:"li"},"C:/my_project_folder/premake5.exe vs2015 --scripts=C:/premake_repo/ --debugger"))))}p.isMDXComponent=!0},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);