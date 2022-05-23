"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5597],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"How to Contribute",sidebar_position:1},u=void 0,l={unversionedId:"how-to-contribute",id:"how-to-contribute",title:"How to Contribute",description:"The Apache InLong(incubating) community welcomes contributions from anyone with a passion for distributed systems! InLong has many different opportunities for contributions -- write new examples/tutorials, add new user-facing libraries or participate on the documentation effort.",source:"@site/community/how-to-contribute.md",sourceDirName:".",slug:"/how-to-contribute",permalink:"/community/how-to-contribute",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/community/how-to-contribute.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to Contribute",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"How to Commit",permalink:"/community/how-to-commit"}},c={},p=[{value:"Engage",id:"engage",level:2},{value:"Mailing list(s)",id:"mailing-lists",level:3},{value:"GitHub Issues",id:"github-issues",level:3},{value:"Design",id:"design",level:2},{value:"Commit (committers only)",id:"commit-committers-only",level:2},{value:"Report a security issue",id:"report-a-security-issue",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache InLong(incubating) community welcomes contributions from anyone with a passion for distributed systems! InLong has many different opportunities for contributions -- write new examples/tutorials, add new user-facing libraries or participate on the documentation effort."),(0,r.kt)("p",null,"We use a review-then-commit workflow in InLong for all contributions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For larger contributions or those that affect multiple components:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Engage"),": We encourage you to work with the InLong community on the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues"},"GitHub Issues")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/contact"},"developer\u2019s mailing list")," to identify good areas for contribution."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Design:")," More complicated contributions will likely benefit from some early discussion in order to scope and design them well.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For all contributions:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Code:")," The you-know-what part."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Review:")," Submit a pull request with your contribution to our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong"},"GitHub Repo"),". Work with a committer to review and iterate on the code, if needed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Commit:")," Once at least 2 InLong committer has approved the pull request, a InLong committer will merge it into the master branch (and potentially backport to stable branches in case of bug fixes).")),(0,r.kt)("p",null,"We look forward to working with you!"),(0,r.kt)("h2",{id:"engage"},"Engage"),(0,r.kt)("h3",{id:"mailing-lists"},"Mailing list(s)"),(0,r.kt)("p",null,"We discuss design and implementation issues on the ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@inlong.apache.org"},"dev@inlong.apache.org")," mailing list, which is archived ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@inlong.apache.org"},"here"),". Join by emailing ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@inlong.apache.org"},(0,r.kt)("inlineCode",{parentName:"a"},"dev-subscribe@inlong.apache.org")),"."),(0,r.kt)("h3",{id:"github-issues"},"GitHub Issues"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues"},"GitHub Issues")," as the issue tracking\nand project management tool, as well as a way to communicate among a very diverse and distributed set of contributors. To be able to gather feedback, avoid frustration, and avoid duplicated efforts all InLong related work are being tracked there."),(0,r.kt)("p",null,"If you do not already have an GitHub account, sign up ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/signup"},"here"),"."),(0,r.kt)("p",null,"If a quick ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues"},"search")," doesn\u2019t turn up an existing GitHub issue for the work you want to contribute, create it. Please discuss your idea with a committer in GitHub or, alternatively, on the developer mailing list."),(0,r.kt)("p",null,"If there\u2019s an existing GitHub issue for your intended contribution, please comment about your intended work. Once the work is understood, a committer will assign the issue to you. If an issue is currently assigned, please check with the current assignee before reassigning."),(0,r.kt)("p",null,"For moderate or large contributions, you should not start coding or writing a design document unless there is a corresponding GitHub issue assigned to you for that work. Any change requires an associated GitHub issue."),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("p",null,"To avoid potential frustration during the code review cycle, we encourage you to clearly scope and design non-trivial contributions with the InLong community before you start coding."),(0,r.kt)("p",null,'We are using "InLong Improvement Proposals" for managing major changes to InLong. The list of all proposals is maintained in the InLong wiki at ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/wiki"},"this page"),"."),(0,r.kt)("h2",{id:"commit-committers-only"},"Commit (committers only)"),(0,r.kt)("p",null,"Once the code has been peer reviewed by a committer, the next step is for the committer to merge it into the Github repo."),(0,r.kt)("p",null,"Pull requests should not be merged before the review has approved from at least 2 committer."),(0,r.kt)("p",null,"For more about merging pull request, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/pulls"},"this page")),(0,r.kt)("p",null,"If you add a module or modify the content of the pom.xml file, you need to perform LICENSE maintenance for third-party dependencies. For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"/community/how-to-maintain-3rd-party-dependencies"},"How to maintain third-party dependencies"),". "),(0,r.kt)("h2",{id:"report-a-security-issue"},"Report a security issue"),(0,r.kt)("p",null,"InLong community cares deeply about the security and actively addresses any security issues as the top priority.\nWe follow the Apache security guidelines for ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/security/"},"handling security issues"),", please see the Apache doc about handling security issues.\nIf you find any security issue, please send a vulnerability report to ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org"),", the InLong security team will assess the issue immediately and work with the reporter on a plan to fix it.\nPlease do not disclose the issue to any public forum before working with the security team."))}d.isMDXComponent=!0}}]);