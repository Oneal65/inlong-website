"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1824],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Hive Example",sidebar_position:3},c=void 0,s={unversionedId:"user_guide/example",id:"version-0.11.0/user_guide/example",isDocsHomePage:!1,title:"Hive Example",description:"Here we use a simple example to help you experience InLong by Docker.",source:"@site/versioned_docs/version-0.11.0/user_guide/example.md",sourceDirName:"user_guide",slug:"/user_guide/example",permalink:"/docs/0.11.0/user_guide/example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/user_guide/example.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"Hive Example",sidebar_position:3},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"User Manual",permalink:"/docs/0.11.0/user_guide/user_manual"},next:{title:"Architecture",permalink:"/docs/0.11.0/modules/manager/architecture"}},p=[{value:"Install Hive",id:"install-hive",children:[]},{value:"Install InLong",id:"install-inlong",children:[]},{value:"Create a data access",id:"create-a-data-access",children:[]},{value:"Approve the data access",id:"approve-the-data-access",children:[]},{value:"Configure the agent",id:"configure-the-agent",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we use a simple example to help you experience InLong by Docker."),(0,o.kt)("h2",{id:"install-hive"},"Install Hive"),(0,o.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,o.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,o.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,o.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/tree/master/docker/docker-compose"},"instructions here"),".(Recommanded)"),(0,o.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,o.kt)("a",{parentName:"li",href:"./quick_start"},"instructions here"),".")),(0,o.kt)("h2",{id:"create-a-data-access"},"Create a data access"),(0,o.kt)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the business information as shown in the figure below.'),(0,o.kt)("img",{src:"/img/create-business.png",align:"center",alt:"Create Business"}),(0,o.kt)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,o.kt)("img",{src:"/img/create-stream.png",align:"center",alt:"Create Stream"}),(0,o.kt)("p",null,'Note that the message source is "File", and we don\'t need to create a message source manually.'),(0,o.kt)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,o.kt)("img",{src:"/img/data-information.png",align:"center",alt:"Data Information"}),(0,o.kt)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,o.kt)("img",{src:"/img/hive-config.png",align:"center",alt:"Hive Config"}),(0,o.kt)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,o.kt)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,o.kt)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,o.kt)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,o.kt)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,o.kt)("h2",{id:"configure-the-agent"},"Configure the agent"),(0,o.kt)("p",null,"Here we use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker exec")," to enter the container of the agent and configure it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -it agent sh\n")),(0,o.kt)("p",null,"Then we create a directory of ",(0,o.kt)("inlineCode",{parentName:"p"},".inlong"),", and new a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"groupid.local")," (Here groupId is group id showed on data access in inlong-manager) and fill in the configuration of Dataproxy as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ mkdir .inlong\n$ cd .inlong\n$ touch b_test.local\n$ echo \'{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":46801,"host":"dataproxy"}], "switch":0}\' >> b_test.local\n')),(0,o.kt)("p",null,"Then we exit the container, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," to make a request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "b_test",\n"streamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("p",null,"At this point, the agent is configured successfully.\nThen we need to create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ touch collect-data/test.log\n$ echo 'test,24' >> collect-data/test.log\n")),(0,o.kt)("p",null,"Then we can observe the logs of agent and dataproxy, and we can see that the relevant data has been sent successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker logs agent\n$ docker logs dataproxy\n")))}d.isMDXComponent=!0}}]);