"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,p=f["".concat(u,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(p,s(s({ref:t},c),{},{components:n})):r.createElement(p,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"Architecture"},u="overview",l={unversionedId:"modules/sort/introduction",id:"version-0.11.0/modules/sort/introduction",isDocsHomePage:!1,title:"Architecture",description:"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.",source:"@site/versioned_docs/version-0.11.0/modules/sort/introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/introduction",permalink:"/docs/0.11.0/modules/sort/introduction",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/sort/introduction.md",tags:[],version:"0.11.0",frontMatter:{title:"Architecture"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Performance testing of TubeMQ vs Kafka",permalink:"/docs/0.11.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"Zookeeper Configure",permalink:"/docs/0.11.0/modules/sort/protocol_introduction"}},c=[{value:"multi-tenancy",id:"multi-tenancy",children:[]},{value:"change meta data without restart",id:"change-meta-data-without-restart",children:[]},{value:"More kinds of source systems",id:"more-kinds-of-source-systems",children:[]},{value:"More kinds of storage systems",id:"more-kinds-of-storage-systems",children:[]},{value:"More kinds of file format in hive sink",id:"more-kinds-of-file-format-in-hive-sink",children:[]}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"overview"),(0,i.kt)("p",null,"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.\nInlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)"),(0,i.kt)("h1",{id:"features"},"features"),(0,i.kt)("h2",{id:"multi-tenancy"},"multi-tenancy"),(0,i.kt)("p",null,"Inlong-sort is an multi-tenancy system, which means you can extract data from different sources(these sources must be of the same source type) and load data into different sinks(these sinks must be of the same storage type).\ne.g. you can extract data form different topics of inlong-tubemq and the load them to different hive clusters."),(0,i.kt)("h2",{id:"change-meta-data-without-restart"},"change meta data without restart"),(0,i.kt)("p",null,"Inlong-sort uses zookeeper to manage its meta data, every time you change meta data on zk, inlong-sort application will be informed immediately.\ne.g if you want to change the schema of your data, just change the meta data on zk without restart your inlong-sort application."),(0,i.kt)("h1",{id:"supported-sources"},"supported sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inlong-tubemq"),(0,i.kt)("li",{parentName:"ul"},"pulsar")),(0,i.kt)("h1",{id:"supported-storages"},"supported storages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clickhouse"),(0,i.kt)("li",{parentName:"ul"},"hive (Currently we just support parquet file format)")),(0,i.kt)("h1",{id:"limitations"},"limitations"),(0,i.kt)("p",null,"Currently, we just support extracting specified fields in the stage of ",(0,i.kt)("strong",{parentName:"p"},"Transform"),"."),(0,i.kt)("h1",{id:"future-plans"},"future plans"),(0,i.kt)("h2",{id:"more-kinds-of-source-systems"},"More kinds of source systems"),(0,i.kt)("p",null,"kafka and etc"),(0,i.kt)("h2",{id:"more-kinds-of-storage-systems"},"More kinds of storage systems"),(0,i.kt)("p",null,"Hbase, Elastic Search, and etc"),(0,i.kt)("h2",{id:"more-kinds-of-file-format-in-hive-sink"},"More kinds of file format in hive sink"),(0,i.kt)("p",null,"sequence file, orc"))}f.isMDXComponent=!0}}]);