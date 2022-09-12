"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[972],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(a),c=o,b=s["".concat(i,".").concat(c)]||s[c]||h[c]||l;return a?r.createElement(b,n(n({ref:e},m),{},{components:a})):r.createElement(b,n({ref:e},m))}));function c(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=a.length,n=new Array(l);n[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,n[1]=p;for(var u=2;u<l;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5291:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),o=(a(7294),a(4137));const l={title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},n=void 0,p={permalink:"/blog/2022/09/04/hertzbeat-v1.1.3",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2022-09-04-hertzbeat-v1.1.3.md",source:"@site/blog/2022-09-04-hertzbeat-v1.1.3.md",title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",description:"Home: hertzbeat.com | tancloud.cn",date:"2022-09-04T00:00:00.000Z",formattedDate:"2022\u5e749\u67084\u65e5",tags:[{label:"opensource",permalink:"/blog/tags/opensource"}],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/2022/09/10/ssl-practice"},nextItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.1 \u53d1\u5e03\uff01",permalink:"/blog/2022/07/10/hertzbeat-v1.1.1"}},i={authorsImageUrls:[void 0]},u=[{value:"V1.1.3",id:"v113",level:2},{value:"Have Fun!",id:"have-fun",level:2}],m={toc:u};function h(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Home: hertzbeat.com | tancloud.cn"),(0,o.kt)("p",null,"Hi gays! HertzBeat v1.1.3 is coming. This version supports kafka monitor, ssl certificate expired monitor and more. Fixed several bugs and improved the overall stable usability."),(0,o.kt)("p",null,"Only one docker command is needed to install and experience heartbeat\uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.kt)("p",null,"Thanks to the contributors! \ud83d\udc4d\ud83d\udc4d"),(0,o.kt)("p",null,"Feature\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/260"},"[web-app]feature:update monitors layout, support host copy to clipboard #260")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/263"},"[monitor] feature: support apache kafka monitor #263")," contribute by @wang1027-wqh"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/265"},"[webapp] support history chart query 3 mouth time range #265")," issue by @ericfrol"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/266"},"[monitor] support ssl certificate expired monitor #266")," suggest by @noear"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/268"},"[web-app] update default interval 600s to 120s #268")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/272"},"[web-app] update layout ui - help button, nav menu #272")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/273"},"[alert,webapp] support delete all alerts at once. #273")," issue by @ericfrol"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/276"},"[web-app] update home background image #276"))),(0,o.kt)("p",null,"Bugfix."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/262"},"[docs] fix extend-http-jsonpath.md parseScript error #262")," contribute by @woshiniusange    ."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/264"},"[monitor] update help docs, refactor redis metrics name #264")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/270"},"[manager] bugfix alert tags is null when tags map key normal value null. #270")," issue by ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/275"},"[alert] bugfix: the alert global preset config do not take effect #275")," issue by ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu"))),(0,o.kt)("p",null,"Online ",(0,o.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,o.kt)("p",null,"Have Fun!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"v113"},"V1.1.3"),(0,o.kt)("p",null,"\u5b98\u7f51: hertzbeat.com | tancloud.cn"),(0,o.kt)("p",null,"\u5927\u5bb6\u597d\uff0cHertzBeat v1.1.3 \u53d1\u5e03\u5566\uff01\u8fd9\u4e2a\u7248\u672c\u652f\u6301\u4e86apache kafka\u76d1\u63a7\uff0cSSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u7b49\u3002\u4fee\u590d\u4e86\u82e5\u5e72bug\uff0c\u63d0\u5347\u6574\u4f53\u7a33\u5b9a\u6027\u3002"),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat \uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.kt)("p",null,"\u611f\u8c22hertzbeat\u8d21\u732e\u8005\u4eec\u7684\u8d21\u732e\uff01\ud83d\udc4d\ud83d\udc4d"),(0,o.kt)("p",null,"Feature\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/260"},"[web-app]feature:update monitors layout, support host copy to clipboard #260")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/263"},"[monitor] feature: support apache kafka monitor #263")," contribute by @wang1027-wqh"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/265"},"[webapp] support history chart query 3 mouth time range #265")," issue by @ericfrol"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/266"},"[monitor] support ssl certificate expired monitor #266")," suggest by @noear"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/268"},"[web-app] update default interval 600s to 120s #268")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/272"},"[web-app] update layout ui - help button, nav menu #272")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/273"},"[alert,webapp] support delete all alerts at once. #273")," issue by @ericfrol"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/276"},"[web-app] update home background image #276"))),(0,o.kt)("p",null,"Bugfix."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/262"},"[docs] fix extend-http-jsonpath.md parseScript error #262")," contribute by @woshiniusange    ."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/264"},"[monitor] update help docs, refactor redis metrics name #264")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/270"},"[manager] bugfix alert tags is null when tags map key normal value null. #270")," issue by ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/275"},"[alert] bugfix: the alert global preset config do not take effect #275")," issue by ",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/hello_brother_niu"},"https://gitee.com/hello_brother_niu"))),(0,o.kt)("p",null,"Online ",(0,o.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,o.kt)("h2",{id:"have-fun"},"Have Fun!"))}h.isMDXComponent=!0}}]);