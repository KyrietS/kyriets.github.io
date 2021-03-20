(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{223:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(414)),i={title:"Sharing Your Module"},l={unversionedId:"Sharing-Your-Module",id:"Sharing-Your-Module",isDocsHomePage:!1,title:"Sharing Your Module",description:"Versioning",source:"@site/docs/Sharing-Your-Module.md",slug:"/Sharing-Your-Module",permalink:"/docs/Sharing-Your-Module",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Sharing-Your-Module.md",version:"current"},u=[{value:"Versioning",id:"versioning",children:[]},{value:"Publishing",id:"publishing",children:[]}],c={toc:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"versioning"},"Versioning"),Object(a.b)("p",null,"To ensure compatibility, Premake allows project script authors to specify a minimum version or range of versions for the modules they require."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'require("foo", ">=1.1")\n')),Object(a.b)("p",null,"To support this feature, your module should include a ",Object(a.b)("inlineCode",{parentName:"p"},"_VERSION")," field specifying the current version."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'m._VERSION = "1.0.0"         -- for the 1.0 release\nm._VERSION = "1.0.0-dev"     -- for the development (i.e. what\'s in your code repository) version\nm._VERSION = "1.0.0-alpha3"  -- for a pre-release version\n')),Object(a.b)("p",null,"When updating your version number between releases, try to follow the conventions set by the ",Object(a.b)("a",{parentName:"p",href:"http://semver.org"},"semantic versioning")," standard."),Object(a.b)("h2",{id:"publishing"},"Publishing"),Object(a.b)("p",null,"If you intend your module to be available to the public, consider creating a new repository on ",Object(a.b)("a",{parentName:"p",href:"http://github.com/"},"GitHub")," (where Premake is hosted) for it, and taking a look at some of the ",Object(a.b)("a",{parentName:"p",href:"modules"},"existing third-party modules")," for examples. Some tips:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Name your repository something like ",Object(a.b)("inlineCode",{parentName:"p"},"premake-modulename"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Include a ",Object(a.b)("inlineCode",{parentName:"p"},"README.md")," file which explains what your module does, how to use it, and any requirements it has on other modules or libraries.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Set up a wiki and briefly document any new features and functions it adds. See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/wiki"},"Premake's own documentation")," for lots of examples."))),Object(a.b)("p",null,"Finally, regardless of where you host it, be sure to add a link on the ",Object(a.b)("a",{parentName:"p",href:"modules"},"Available Modules")," page to help people find it."))}p.isMDXComponent=!0},414:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return t?o.a.createElement(d,l(l({ref:r},c),{},{components:t})):o.a.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);