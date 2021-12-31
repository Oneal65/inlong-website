"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3899],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28177:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",sidebar_position:3},l="\u524d\u8a00",u={unversionedId:"modules/sort/protocol_introduction",id:"version-0.12.0/modules/sort/protocol_introduction",isDocsHomePage:!1,title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",description:"\u5f53\u524dinlong-sort\u7684\u5143\u6570\u636e\u7ba1\u7406\u4f9d\u8d56inlong-manager\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/sort/protocol_introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/protocol_introduction",permalink:"/zh-CN/docs/modules/sort/protocol_introduction",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/protocol_introduction.md",tags:[],version:"0.12.0",sidebarPosition:3,frontMatter:{title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",sidebar_position:3},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/sort/quick_start"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/manager/overview"}},s=[{value:"1 Zookeeper\u7ed3\u6784",id:"1-zookeeper\u7ed3\u6784",children:[]},{value:"2 \u534f\u8bae\u8bbe\u8ba1",id:"2-\u534f\u8bae\u8bbe\u8ba1",children:[]}],p={toc:s};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u5f53\u524dinlong-sort\u7684\u5143\u6570\u636e\u7ba1\u7406\u4f9d\u8d56inlong-manager\u3002"),(0,i.kt)("p",null,"inlong-sort\u4e0einlong-manager\u4e4b\u95f4\u901a\u8fc7zk\u8fdb\u884c\u5143\u6570\u636e\u7684\u4ea4\u4e92\u3002"),(0,i.kt)("h2",{id:"1-zookeeper\u7ed3\u6784"},"1 Zookeeper\u7ed3\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(28596).Z})),(0,i.kt)("p",null,"cluster\u4ee3\u8868\u4e00\u4e2aflink\u4f5c\u4e1a\uff0c\u540c\u4e00\u4e2acluster\u4e2d\u53ef\u4ee5\u5904\u7406\u591a\u4e2a\u6d41\u5411\uff0c\u4f46\u662f\u8fd9\u4e9b\u6d41\u5411\u5fc5\u987b\u662f\u540c\u6784\u7684\uff08source\u4e0esink\u76f8\u540c\uff09\u3002"),(0,i.kt)("p",null,"dataflow\u4ee3\u8868\u4e00\u4e2a\u5177\u4f53\u7684\u6d41\u5411\uff0c\u6bcf\u4e2a\u6d41\u5411\u6709\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684id\u6765\u6807\u8bc6\u3002\u6d41\u5411\u7531source + sink\u7ec4\u6210\u3002"),(0,i.kt)("p",null,"\u4e0a\u56fe\u4e2d\u4e0a\u65b9\u7684\u4e00\u6761\u8def\u5f84\u7528\u6765\u8868\u793a\u67d0\u4e2acluster\u4e2d\u8fd0\u884c\u4e86\u54ea\u4e9bdataflow\u7684\u4f5c\u4e1a\uff0c\u8282\u70b9\u4e0b\u5747\u4e0d\u542b\u5143\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u4e0b\u65b9\u7684\u8def\u5f84\u7528\u6765\u5b58\u50a8dataflow\u7684\u5177\u4f53\u4fe1\u606f\uff0c\u5373\u771f\u6b63\u7684\u5143\u6570\u636e\u5b58\u653e\u3002"),(0,i.kt)("p",null,"\u5143\u6570\u636e\u7ba1\u7406\u903b\u8f91\u53ef\u4ee5\u67e5\u770b\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.meta.MetaManager")),(0,i.kt)("h2",{id:"2-\u534f\u8bae\u8bbe\u8ba1"},"2 \u534f\u8bae\u8bbe\u8ba1"),(0,i.kt)("p",null,"\u5177\u4f53\u7684\u534f\u8bae\u53ef\u4ee5\u67e5\u770b\u7c7b",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.protocol.DataFlowInfo")))}d.isMDXComponent=!0},28596:function(e,t,n){t.Z=n.p+"assets/images/img-344b6f587c065734ac081babe17c0b2c.png"}}]);