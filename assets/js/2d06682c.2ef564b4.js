"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6999],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96169:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Deployment",sidebar_position:2},s=void 0,p={unversionedId:"modules/agent/quick_start",id:"modules/agent/quick_start",title:"Deployment",description:"All deploying files at inlong-agent directory.",source:"@site/docs/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/docs/next/modules/agent/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/agent/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/agent/overview"},next:{title:"File",permalink:"/docs/next/modules/agent/file"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start",id:"start",level:2},{value:"Example: Add job configuration in real time",id:"example-add-job-configuration-in-real-time",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All deploying files at ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-agent")," directory."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Agent needs to pull the configuration from Manager, the configuration conf/agent.properties is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# replace by real IP\nagent.local.ip=127.0.0.1\n# manager IP\nagent.manager.vip.http.host=127.0.0.1\n# manager port\nagent.manager.vip.http.port=8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the backend database is MySQL, please download ",(0,o.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/")," directory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the backend database is PostgreSQL, there's no need for additional dependencies."))),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash +x bin/agent.sh start\n")),(0,o.kt)("h2",{id:"example-add-job-configuration-in-real-time"},"Example: Add job configuration in real time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --location --request POST \'http://localhost:8008/config/job\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n    "job": {\n    "dir": {\n    "path": "",\n    "pattern": "/data/inlong-agent/test.log"\n    },\n    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n    "id": 1,\n    "thread": {\n    "running": {\n    "core": "4"\n    },\n    "onejob": true\n    },\n    "name": "fileAgentTest",\n    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n    },\n    "proxy": {\n  "inlongGroupId": "groupId10",\n  "inlongStreamId": "groupId10"\n    },\n    "op": "add"\n    }\'\n')),(0,o.kt)("p",null,"The meaning of each parameter is \uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"job.dir.pattern: Configure the read file path, which can include regular expressions"),(0,o.kt)("li",{parentName:"ul"},"job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events"),(0,o.kt)("li",{parentName:"ul"},"job.source: The type of data source used, the default is TextFileSource, which reads text files"),(0,o.kt)("li",{parentName:"ul"},"job.sink\uff1aThe type of writer used, the default is ProxySink, which sends messages to the proxy"),(0,o.kt)("li",{parentName:"ul"},"proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name."),(0,o.kt)("li",{parentName:"ul"},"proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager")))}g.isMDXComponent=!0}}]);