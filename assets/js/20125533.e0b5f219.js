"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3894],{4137:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},o=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=i(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,m(m({ref:e},o),{},{components:a})):n.createElement(g,m({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,m[1]=p;for(var i=2;i<l;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7835:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(4137));const l={id:"jvm",title:"\u76d1\u63a7\uff1aJVM\u865a\u62df\u673a\u76d1\u63a7",sidebar_label:"JVM\u865a\u62df\u673a"},m=void 0,p={unversionedId:"help/jvm",id:"help/jvm",title:"\u76d1\u63a7\uff1aJVM\u865a\u62df\u673a\u76d1\u63a7",description:"\u5bf9JVM\u865a\u62df\u673a\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7",source:"@site/docs/help/jvm.md",sourceDirName:"help",slug:"/help/jvm",permalink:"/docs/help/jvm",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/jvm.md",tags:[],version:"current",frontMatter:{id:"jvm",title:"\u76d1\u63a7\uff1aJVM\u865a\u62df\u673a\u76d1\u63a7",sidebar_label:"JVM\u865a\u62df\u673a"},sidebar:"docs",previous:{title:"\u5168\u7ad9\u76d1\u63a7",permalink:"/docs/help/fullsite"},next:{title:"MYSQL\u6570\u636e\u5e93",permalink:"/docs/help/mysql"}},d={},i=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1amemory_pool",id:"\u6307\u6807\u96c6\u5408memory_pool",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1acode_cache",id:"\u6307\u6807\u96c6\u5408code_cache",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aclass_loading",id:"\u6307\u6807\u96c6\u5408class_loading",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1athread",id:"\u6307\u6807\u96c6\u5408thread",level:4},{value:"JVM\u5e94\u7528\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4",id:"jvm\u5e94\u7528\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4",level:3}],o={toc:i};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9JVM\u865a\u62df\u673a\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1aJMX")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eJVM\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a10\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408memory_pool"},"\u6307\u6807\u96c6\u5408\uff1amemory_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408code_cache"},"\u6307\u6807\u96c6\u5408\uff1acode_cache"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408class_loading"},"\u6307\u6807\u96c6\u5408\uff1aclass_loading"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5386\u53f2\u5df2\u52a0\u8f7d\u7c7b\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408thread"},"\u6307\u6807\u96c6\u5408\uff1athread"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u5f00\u59cb\u7684\u7ebf\u7a0b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b88\u62a4\u8fdb\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528CPU\u65f6\u95f4")))),(0,r.kt)("h3",{id:"jvm\u5e94\u7528\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4"},"JVM\u5e94\u7528\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5e94\u7528\u542f\u52a8\u65f6\u6dfb\u52a0JVM\u53c2\u6570 \u26a0\ufe0f\u6ce8\u610f\u53ef\u81ea\u5b9a\u4e49\u66b4\u9732\u7aef\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.ssl=false\n-Dcom.sun.management.jmxremote.authenticate=false \n")))}u.isMDXComponent=!0}}]);