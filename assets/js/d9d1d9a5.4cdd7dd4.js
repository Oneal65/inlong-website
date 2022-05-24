"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8758],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36268:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Deployment",sidebar_position:2},s=void 0,p={unversionedId:"modules/sort/quick_start",id:"modules/sort/quick_start",title:"Deployment",description:"Set up Flink Environment",source:"@site/docs/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/docs/next/modules/sort/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/sort/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/sort/overview"},next:{title:"DataStream Example",permalink:"/docs/next/modules/sort/datastream_example"}},c={},u=[{value:"Set up Flink Environment",id:"set-up-flink-environment",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Starting an inlong-sort application",id:"starting-an-inlong-sort-application",level:2},{value:"Necessary configurations",id:"necessary-configurations",level:2},{value:"All configurations",id:"all-configurations",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-up-flink-environment"},"Set up Flink Environment"),(0,i.kt)("p",null,"Currently InLong-Sort is based on Flink, before you run an InLong-Sort Application,\nyou need to set up ",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"Flink Environment"),"."),(0,i.kt)("p",null,"Currently, InLong-Sort relys on Flink-1.13.5. Chose ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")," when downloading package."),(0,i.kt)("p",null,"Once your Flink Environment is set up, you can visit Web UI of Flink, whose address is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/${your_flink_path}/conf/masters"),"."),(0,i.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,i.kt)("p",null,"All installation files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-sort")," directory."),(0,i.kt)("h2",{id:"starting-an-inlong-sort-application"},"Starting an inlong-sort application"),(0,i.kt)("p",null,"Now you can submit job to Flink with the jar compiled, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job"},"How to submit job to Flink"),"."),(0,i.kt)("p",null,"Example\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.Entrance inlong-sort/sort-[version].jar \\\n--group.info.file /YOUR_DATASTREAM_DIR/mysql-to-kafka.json\n")),(0,i.kt)("p",null,"Notice\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.Entrance")," is the main class name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-[version].jar")," is the compiled jar"))),(0,i.kt)("h2",{id:"necessary-configurations"},"Necessary configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--group.info.file")," data stream configuration file path")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--group.info.file /YOUR_DATASTREAM_INFO_DIR/mysql-to-kafka.json\n")),(0,i.kt)("h2",{id:"all-configurations"},"All configurations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"necessary"),(0,i.kt)("th",{parentName:"tr",align:"center"},"default value"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"checkpoint.interval"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,i.kt)("td",{parentName:"tr",align:null},"checkpoint interval\uff0cunit: ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min.pause.between.checkpoints.ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"the minimal checkpoint interval, unit\uff1ams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"checkpoint.timeout.ms"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,i.kt)("td",{parentName:"tr",align:null},"checkpoint timeout\uff0cunit: ms")))))}d.isMDXComponent=!0}}]);