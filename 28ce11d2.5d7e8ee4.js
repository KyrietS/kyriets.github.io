(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),i=(t(0),t(414)),r={title:"Coding Conventions"},s={unversionedId:"Coding-Conventions",id:"Coding-Conventions",isDocsHomePage:!1,title:"Coding Conventions",description:"While not all of Premake's code currently follows these conventions, we are gradually nudging everything in this direction and hope to have it all done before the final 5.0 release. Knowing these conventions will make the code a little easier to read and follow.",source:"@site/docs/Coding-Conventions.md",slug:"/Coding-Conventions",permalink:"/docs/Coding-Conventions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Coding-Conventions.md",version:"current",sidebar:"mainSidebar",previous:{title:"Code Overview",permalink:"/docs/Code-Overview"},next:{title:"Overrides & Call Arrays",permalink:"/docs/Overrides-and-Call-Arrays"}},l=[{value:"Tables as Namespaces",id:"tables-as-namespaces",children:[]},{value:"Local Variables as Aliases",id:"local-variables-as-aliases",children:[]},{value:"Call Arrays",id:"call-arrays",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"While not all of Premake's code currently follows these conventions, we are gradually nudging everything in this direction and hope to have it all done before the final 5.0 release. Knowing these conventions will make the code a little easier to read and follow."),Object(i.b)("h3",{id:"tables-as-namespaces"},"Tables as Namespaces"),Object(i.b)("p",null,"Premake tables are used as namespaces, with related functions grouped together into their own namespace table. Most of Premake's own code is placed into a table named ",Object(i.b)("inlineCode",{parentName:"p"},"premake"),". Code related to the project scripting API is in ",Object(i.b)("inlineCode",{parentName:"p"},"premake.api"),", code related to command line options in in ",Object(i.b)("inlineCode",{parentName:"p"},"premake.options"),", and so on."),Object(i.b)("p",null,"Organizing the code in this way helps avoid collisions between similarly named functions, and generally helps to keep things tidy."),Object(i.b)("h3",{id:"local-variables-as-aliases"},"Local Variables as Aliases"),Object(i.b)("p",null,"New namespaces are declared at the top of each source code file, followed by aliases for namespaces which are going to be used frequently within the source file. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'-- define a new namespace for the VC 2010 related code\npremake.vstudio.vc2010 = {}\n\n-- create aliases for namespaces we\'ll use often\nlocal p = premake\nlocal vstudio = p.vstudio\nlocal project = p.project\n\n-- and the "m" alias represents the current module being implemented\nlocal m = p.vstudio.vc2010\n')),Object(i.b)("p",null,"The alias ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is used conventionally  as a shortcut for the ",Object(i.b)("inlineCode",{parentName:"p"},"premake")," namespace. The alias ",Object(i.b)("inlineCode",{parentName:"p"},"m")," is conventially used to represent the module being implemented."),Object(i.b)("p",null,"Using aliases saves some keystrokes when coding. And since Premake embeds all of its scripts into the release executables, it saves on the final download size as well."),Object(i.b)("h3",{id:"call-arrays"},"Call Arrays"),Object(i.b)("p",null,'Premake\'s project file exporters\u2014which write out the Visual Studio projects, makefiles, and so on\u2014are basically big long lists of "output this, and then this, and then this". This could easily be written (and once was) as one giant function, but then it would be virtually impossible to modify its behavior.'),Object(i.b)("p",null,"Instead, we split up the generation of a project into many small functions, often writing out only a single line to the output. Any one of these functions can then be overridden by your own scripts or modules."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'-- instead of this...\n\n    function m.outputConfig(cfg)\n        if #cfg.defines > 0 or vstudio.isMakefile(cfg) then\n            p.x(\'PreprocessorDefinitions="%s"\', table.concat(cfg.defines, ";"))\n        end\n\n        if #cfg.undefines > 0 then\n            p.x(\'UndefinePreprocessorDefinitions="%s"\', table.concat(cfg.undefines, ";"))\n        end\n\n        if cfg.rtti == p.OFF and cfg.clr == p.OFF then\n            p.w(\'RuntimeTypeInfo="false"\')\n        elseif cfg.rtti == p.ON then\n            p.w(\'RuntimeTypeInfo="true"\')\n        end\n    end\n\n-- we do this...\n\n    function m.preprocessorDefinitions(cfg)\n        if #cfg.defines > 0 or vstudio.isMakefile(cfg) then\n            p.x(\'PreprocessorDefinitions="%s"\', table.concat(cfg.defines, ";"))\n        end\n    end\n\n    function m.undefinePreprocessorDefinitions(cfg)\n        if #cfg.undefines > 0 then\n            p.x(\'UndefinePreprocessorDefinitions="%s"\', table.concat(cfg.undefines, ";"))\n        end\n    end\n\n    function m.runtimeTypeInfo(cfg)\n        if cfg.rtti == p.OFF and cfg.clr == p.OFF then\n            p.w(\'RuntimeTypeInfo="false"\')\n        elseif cfg.rtti == p.ON then\n            p.w(\'RuntimeTypeInfo="true"\')\n        end\n    end\n\n')),Object(i.b)("p",null,'Similarly, instead of implementing the output of a particular section of the project as a function calling a long list of other functions, we put those functions into an array, and then iterate over the array. We call these "call arrays", and they allow you to inject new functions, or remove existing ones, from the array at runtime.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},"-- instead of this...\n\n    function m.outputConfig(cfg)\n        m.preprocessorDefinitions(cfg)\n        m.undefinePreprocessorDefinitions(cfg)\n        m.runtimeTypeInfo(cfg)\n        -- and so on...\n    end\n\n-- we do this\n\n    m.elements.config = function(cfg)\n        return {\n            m.preprocessorDefinitions,\n            m.undefinePreprocessorDefinitions,\n            m.runtimeTypeInfo,\n            -- and so on...\n        }\n    end\n\n    function m.outputConfig(cfg)\n        p.callArray(m.element.config, cfg)\n    end\n")),Object(i.b)("p",null,"For an example of how to implement a new feature using these conventions, see ",Object(i.b)("a",{parentName:"p",href:"Overrides-and-Call-Arrays"},"Overrides and Call Arrays"),"."))}p.isMDXComponent=!0},414:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(r,".").concat(u)]||d[u]||f[u]||i;return t?a.a.createElement(m,s(s({ref:n},c),{},{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);