(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{291:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(414)),i={},b={unversionedId:"flags",id:"flags",isDocsHomePage:!1,title:"flags",description:"Specifies build flags to modify the compiling or linking process.",source:"@site/docs/flags.md",slug:"/flags",permalink:"/docs/flags",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/flags.md",version:"current",sidebar:"mainSidebar",previous:{title:"filter",permalink:"/docs/filter"},next:{title:"floatingpoint",permalink:"/docs/floatingpoint"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Specifies build flags to modify the compiling or linking process."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'flags { "flag_list" }\n')),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"flag_list")," is a list of string flag names; see below for a list of valid flags. The flag values are not case-sensitive. Flags that are not supported by a particular platform or toolset are ignored."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ExcludeFromBuild"),Object(l.b)("td",{parentName:"tr",align:null},"Exclude a source code file from the build, for the current configuration."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FatalCompileWarnings"),Object(l.b)("td",{parentName:"tr",align:null},"Treat compiler warnings as errors."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FatalLinkWarnings"),Object(l.b)("td",{parentName:"tr",align:null},"Treat linker warnings as errors."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FatalWarnings"),Object(l.b)("td",{parentName:"tr",align:null},"Treat all warnings as errors; equivalent to FatalCompileWarnings, FatalLinkWarnings"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LinkTimeOptimization"),Object(l.b)("td",{parentName:"tr",align:null},"Enable link-time (i.e. whole program) optimizations."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Maps"),Object(l.b)("td",{parentName:"tr",align:null},"Enable Generate Map File for Visual Studio"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MFC"),Object(l.b)("td",{parentName:"tr",align:null},"Enable support for Microsoft Foundation Classes."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MultiProcessorCompile"),Object(l.b)("td",{parentName:"tr",align:null},"Enable Visual Studio to use multiple compiler processes when building."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"No64BitChecks"),Object(l.b)("td",{parentName:"tr",align:null},"Disable 64-bit portability warnings."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoBufferSecurityCheck"),Object(l.b)("td",{parentName:"tr",align:null},"Turn off stack protection checks."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoCopyLocal"),Object(l.b)("td",{parentName:"tr",align:null},"Prevent referenced assemblies from being copied to the target directory (C#)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoFramePointer"),Object(l.b)("td",{parentName:"tr",align:null},"Disable the generation of stack frame pointers."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoImplicitLink"),Object(l.b)("td",{parentName:"tr",align:null},"Disable Visual Studio's default behavior of automatically linking dependent projects."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoImportLib"),Object(l.b)("td",{parentName:"tr",align:null},"Prevent the generation of an import library for a Windows DLL."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoIncrementalLink"),Object(l.b)("td",{parentName:"tr",align:null},"Disable support for Visual Studio's incremental linking feature."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoManifest"),Object(l.b)("td",{parentName:"tr",align:null},"Prevent the generation of a manifest for Windows executables and shared libraries."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoMinimalRebuild"),Object(l.b)("td",{parentName:"tr",align:null},"Disable Visual Studio's ",Object(l.b)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/cpp/build/reference/gm-enable-minimal-rebuild?view=vs-2017"},"minimal rebuild feature"),"."),Object(l.b)("td",{parentName:"tr",align:null},"Visual Studio has deprecated this feature as of vs2015.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoPCH"),Object(l.b)("td",{parentName:"tr",align:null},"Disable precompiled header support. If not specified, the toolset default behavior will be used."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NoRuntimeChecks"),Object(l.b)("td",{parentName:"tr",align:null},"Disable Visual Studio's ",Object(l.b)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/8wtf2dfz.aspx"},"default stack frame and uninitialized variable checks")," on debug builds."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OmitDefaultLibrary"),Object(l.b)("td",{parentName:"tr",align:null},"Omit the specification of a runtime library in object files."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RelativeLinks"),Object(l.b)("td",{parentName:"tr",align:null},"Forces the linker to use relative paths to libraries instead of absolute paths."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ShadowedVariables"),Object(l.b)("td",{parentName:"tr",align:null},"Warn when a variable, type declaration, or function is shadowed."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"StaticRuntime"),Object(l.b)("td",{parentName:"tr",align:null},"Perform a static link against the standard runtime libraries."),Object(l.b)("td",{parentName:"tr",align:null},'Deprecated - use staticruntime "On" instead.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UndefinedIdentifiers"),Object(l.b)("td",{parentName:"tr",align:null},"Warn if an undefined identifier is evaluated in an #if directive."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"WinMain"),Object(l.b)("td",{parentName:"tr",align:null},"Use ",Object(l.b)("inlineCode",{parentName:"td"},"WinMain()")," as entry point for Windows applications, rather than the default ",Object(l.b)("inlineCode",{parentName:"td"},"main()"),"."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"WPF"),Object(l.b)("td",{parentName:"tr",align:null},"Mark the project as using Windows Presentation Framework, rather than WinForms."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C++11"),Object(l.b)("td",{parentName:"tr",align:null},"Pass the c++11 flag to the gcc/clang compilers (msvc ignores this currently)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C++14"),Object(l.b)("td",{parentName:"tr",align:null},"Pass the c++14 flag to the gcc/clang compilers (msvc ignores this currently)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C90"),Object(l.b)("td",{parentName:"tr",align:null},"Pass the c90 flag to the gcc/clang compilers (msvc ignores this currently)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C99"),Object(l.b)("td",{parentName:"tr",align:null},"Pass the c99 flag to the gcc/clang compilers (msvc ignores this currently)"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,"Flags are often extended by external modules:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/flags"},"D language flags"))),Object(l.b)("h3",{id:"applies-to"},"Applies To"),Object(l.b)("p",null,"Project and file configurations, though not all flags are yet supported for files across all exporters."),Object(l.b)("h3",{id:"availability"},"Availability"),Object(l.b)("p",null,"Unless otherwise noted, Premake 5.0 or later."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'-- Enable link-time (i.e. whole program) optimizations.\nflags { "LinkTimeOptimization" }\n\n')))}p.isMDXComponent=!0},414:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||l;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);