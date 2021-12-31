"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1500],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32332:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),u=["components"],s={},l=void 0,o={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"version-0.11.0/modules/tubemq/tubemq-manager/quick_start",isDocsHomePage:!1,title:"quick_start",description:"Deploy TubeMQ Manager",source:"@site/versioned_docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/0.11.0/modules/tubemq/tubemq-manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"0.11.0",frontMatter:{},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/0.11.0/modules/tubemq/quick_start"},next:{title:"Performance testing of TubeMQ vs Kafka",permalink:"/docs/0.11.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"}},c=[{value:"Deploy TubeMQ Manager",id:"deploy-tubemq-manager",children:[{value:"configuration",id:"configuration",children:[]},{value:"start service",id:"start-service",children:[]},{value:"register TubeMQ cluster",id:"register-tubemq-cluster",children:[]},{value:"Appendix: Other Operation interface",id:"appendix-other-operation-interface",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deploy-tubemq-manager"},"Deploy TubeMQ Manager"),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,i.kt)("h3",{id:"configuration"},"configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"tubemanager")," and account in MySQL."),(0,i.kt)("li",{parentName:"ul"},"Add mysql information in conf/application.properties:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,i.kt)("h3",{id:"start-service"},"start service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,i.kt)("h3",{id:"register-tubemq-cluster"},"register TubeMQ cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"replace the parameters below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,i.kt)("p",null,"then run\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."),(0,i.kt)("h3",{id:"appendix-other-operation-interface"},"Appendix: Other Operation interface"),(0,i.kt)("h4",{id:"cluster"},"cluster"),(0,i.kt)("p",null,"Query full data of clusterId and clusterName (get)"),(0,i.kt)("p",null,"Example"),(0,i.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,i.kt)("p",null,"return value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,i.kt)("h4",{id:"topic"},"topic"),(0,i.kt)("h5",{id:"add-topictask"},"add topicTask"),(0,i.kt)("p",null,"parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,i.kt)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,i.kt)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,i.kt)("p",null,"return json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,i.kt)("p",null,"If result is false, the writing task failed"),(0,i.kt)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,i.kt)("p",null,"example"),(0,i.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,i.kt)("p",null,"return json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,i.kt)("p",null,"result is false as not writable"))}d.isMDXComponent=!0}}]);