(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{313:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return m}));var n=t(3),r=t(7),i=(t(0),t(414)),l={title:"What's New in 5.0"},b={unversionedId:"Whats-New-in-5.0",id:"Whats-New-in-5.0",isDocsHomePage:!1,title:"What's New in 5.0",description:"Name Changes",source:"@site/docs/Whats-New-in-5.0.md",slug:"/Whats-New-in-5.0",permalink:"/docs/Whats-New-in-5.0",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Whats-New-in-5.0.md",version:"current"},c=[{value:"Name Changes",id:"name-changes",children:[]},{value:"Flags and Actions",id:"flags-and-actions",children:[]},{value:"Major Features",id:"major-features",children:[]},{value:"New or Modified Globals",id:"new-or-modified-globals",children:[]},{value:"New or Modified API calls",id:"new-or-modified-api-calls",children:[]},{value:"New or Modified Lua library calls",id:"new-or-modified-lua-library-calls",children:[]},{value:"Deprecated Values and Functions",id:"deprecated-values-and-functions",children:[]}],p={toc:c};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"name-changes"},"Name Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The executable is now named ",Object(i.b)("strong",{parentName:"li"},"premake5")),Object(i.b)("li",{parentName:"ul"},"The default project script is now ",Object(i.b)("strong",{parentName:"li"},"premake5.lua"),"; premake4.lua remains as a fallback.")),Object(i.b)("h2",{id:"flags-and-actions"},"Flags and Actions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"--interactive (open an interactive command prompt)"),Object(i.b)("li",{parentName:"ul"},"vs2012, vs2013, vs2015, vs2019 (Visual Studio 2012, 2013, 2015, 2019)")),Object(i.b)("h2",{id:"major-features"},"Major Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"custom-rules"},"Custom Rules")," (still experimental)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"makefile-projects"},"Makefile Projects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"modules"},"Modules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"files"},"Per-Configuration File Lists")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configuration"},"Per-File Configurations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configurations-and-platforms"},"Per-Project Configurations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configurations-and-platforms"},"Platforms")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"removing-values"},"Removes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"system-scripts"},"System Scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"tokens"},"Tokens")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http.download"},"HTTP support"))),Object(i.b)("h2",{id:"new-or-modified-globals"},"New or Modified Globals"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"_main_script"},"_MAIN_SCRIPT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"_main_script_dir"},"_MAIN_SCRIPT_DIR")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"_premake_dir"},"_PREMAKE_DIR"))),Object(i.b)("h2",{id:"new-or-modified-api-calls"},"New or Modified API calls"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"architecture"},"architecture")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildaction"},"buildaction")," (new values)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildcommands"},"buildcommands")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"builddependencies"},"builddependencies")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildlog"},"buildlog")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildmessage"},"buildmessage")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildoutputs"},"buildoutputs")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"characterset"},"characterset")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"callingconvention"},"callingconvention")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"cleancommands"},"cleancommands")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"cleanextensions"},"cleanextensions")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"clr"},"clr")," (new, replaces flags ",Object(i.b)("inlineCode",{parentName:"li"},"Managed")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Unsafe"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configfile"},"configfile")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configmap"},"configmap")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configuration"},"configuration")," (retired)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configurations"},"configurations")," (modified)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"copylocal"},"copylocal")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugcommand"},"debugcommand")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugconnectcommands"},"debugconnectcommands")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugextendedprotocol"},"debugextendedprotocol")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugport"},"debugport")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugremotehost"},"debugremotehost")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugsearchpaths"},"debugsearchpaths")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"debugstartupcommands"},"debugstartupcommands")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"dependson"},"dependson")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"disablewarnings"},"disablewarnings")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"dotnetframework"},"dotnetframework")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"editandcontinue"},"editandcontinue")," (new, replaces flag ",Object(i.b)("inlineCode",{parentName:"li"},"NoEditAndContinue"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"editorintegration"},"editorintegration")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"enablewarnings"},"enablewarnings")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"endian"},"endian")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"entrypoint"},"entrypoint")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"exceptionhandling"},"exceptionhandling")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"external"},"external")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"externalproject"},"externalproject")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"externalrule"},"externalrule")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"fatalwarnings"},"fatalwarnings")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"fileextension"},"fileextension")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"filename"},"filename")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"filter"},"filter")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"flags"},"flags")," (new values)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"floatingpoint"},"floatingpoint")," (new, replaces flags ",Object(i.b)("inlineCode",{parentName:"li"},"FloatFast")," and ",Object(i.b)("inlineCode",{parentName:"li"},"FloatStrict"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"forceincludes"},"forceincludes")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"forceusings"},"forceusings")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"fpu"},"fpu")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"gccprefix"},"gccprefix")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"group"},"group")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"icon"},"icon")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"inlining"},"inlining")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"kind"},"kind")," (Makefile, None)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"linkbuildoutputs"},"linkbuildoutputs")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"links"},"links")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"language"},"language")," (new values)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"locale"},"locale")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"makesettings"},"makesettings")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"namespace"},"namespace")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"nativewchar"},"nativewchar")," (new, replaces flag ",Object(i.b)("inlineCode",{parentName:"li"},"NativeWChar"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"newaction"},"newaction")," (modified)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"nuget"},"nuget")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"objdir"},"objdir")," (modified)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"optimize"},"optimize")," (new, replaces flags ",Object(i.b)("inlineCode",{parentName:"li"},"OptimizeSize")," and ",Object(i.b)("inlineCode",{parentName:"li"},"OptimizeSpeed"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"pic"},"pic")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"platforms"},"platforms")," (modified)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"postbuildmessage"},"postbuildmessage")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"prebuildmessage"},"prebuildmessage")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"prelinkmessage"},"prelinkmessage")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"project"},"project")," (modified)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"propertydefinition"},"propertydefinition")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rebuildcommands"},"rebuildcommands")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rtti"},"rtti")," (new, replaces flag ",Object(i.b)("inlineCode",{parentName:"li"},"NoRTTI"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rule"},"rule")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rules"},"rules")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"runtime"},"runtime")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"workspace"},"solution")," (name changed)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"startproject"},"startproject")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"strictaliasing"},"strictaliasing")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"sysincludedirs"},"sysincludedirs")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"syslibdirs"},"syslibdirs")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"system"},"system")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"toolset"},"toolset")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"undefines"},"undefines")," (new)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"vectorextensions"},"vectorextensions")," (new, replaces flags ",Object(i.b)("inlineCode",{parentName:"li"},"EnableSSE")," and ",Object(i.b)("inlineCode",{parentName:"li"},"EnableSSE2"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"warnings"},"warnings")," (new, replaces flags ",Object(i.b)("inlineCode",{parentName:"li"},"ExtraWarnings")," and ",Object(i.b)("inlineCode",{parentName:"li"},"NoWarnings"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"workspace"},"workspace")," (new)")),Object(i.b)("h2",{id:"new-or-modified-lua-library-calls"},"New or Modified Lua library calls"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"includeexternal"},"includeexternal")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"require"},"require")," (modified)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"debug.prompt"},"debug.prompt")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http.download"},"http.download")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http.get"},"http.get")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"os.chmod"},"os.chmod")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"os.islink"},"os.islink")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"os.realpath"},"os.realpath")," (new)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"os.uuid"},"os.uuid")," (can now generated deterministic name-based UUIDs)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"path.getabsolute"},"path.getabsolute"),' (new "relative to" argument)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"string.hash"},"string.hash")," (new)"))),Object(i.b)("h2",{id:"deprecated-values-and-functions"},"Deprecated Values and Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"buildrule"},"buildrule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"flags"},"flags"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Component"),Object(i.b)("li",{parentName:"ul"},"EnableSSE, EnableSSE2: use ",Object(i.b)("a",{parentName:"li",href:"vectorextensions"},"vectorextensions")," instead"),Object(i.b)("li",{parentName:"ul"},"ExtraWarnings, NoWarnings: use ",Object(i.b)("a",{parentName:"li",href:"warnings"},"warnings")," instead"),Object(i.b)("li",{parentName:"ul"},"FloatFast, FloatStrict: use ",Object(i.b)("a",{parentName:"li",href:"floatingpoint"},"floatingpoint")," instead"),Object(i.b)("li",{parentName:"ul"},"Managed, Unsafe: use ",Object(i.b)("a",{parentName:"li",href:"clr"},"clr")," instead"),Object(i.b)("li",{parentName:"ul"},"NativeWChar: use ",Object(i.b)("a",{parentName:"li",href:"nativewchar"},"nativewchar")," instead"),Object(i.b)("li",{parentName:"ul"},"NoEditAndContinue: use ",Object(i.b)("a",{parentName:"li",href:"editandcontinue"},"editandcontinue")," instead"),Object(i.b)("li",{parentName:"ul"},"NoRTTI: use ",Object(i.b)("a",{parentName:"li",href:"rtti"},"rtti")," instead."),Object(i.b)("li",{parentName:"ul"},"OptimizeSize, OptimizeSpeed: use ",Object(i.b)("a",{parentName:"li",href:"optimize"},"optimize")," instead")))))}m.isMDXComponent=!0},414:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return j}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),m=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},o=function(e){var a=m(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=m(t),s=n,j=o["".concat(l,".").concat(s)]||o[s]||u[s]||i;return t?r.a.createElement(j,b(b({ref:a},p),{},{components:t})):r.a.createElement(j,b({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=s;var b={};for(var c in a)hasOwnProperty.call(a,c)&&(b[c]=a[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<i;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);