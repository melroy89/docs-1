"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[843],{1673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=r(5893),t=r(1151);const c={title:"Secret \u52a0\u5bc6"},i="Secret \u52a0\u5bc6\u914d\u7f6e",o={id:"security/secrets-encryption",title:"Secret \u52a0\u5bc6",description:"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 --secrets-encryption \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/secrets-encryption.md",sourceDirName:"security",slug:"/security/secrets-encryption",permalink:"/zh/security/secrets-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/secrets-encryption.md",tags:[],version:"current",lastUpdatedAt:1721151326e3,frontMatter:{title:"Secret \u52a0\u5bc6"},sidebar:"mySidebar",previous:{title:"\u5b89\u5168",permalink:"/zh/security/"},next:{title:"CIS Hardening Guide",permalink:"/zh/security/hardening-guide"}},d={},l=[{value:"Secret \u52a0\u5bc6\u5de5\u5177",id:"secret-\u52a0\u5bc6\u5de5\u5177",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"secret-\u52a0\u5bc6\u914d\u7f6e",children:"Secret \u52a0\u5bc6\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 ",(0,s.jsx)(n.code,{children:"--secrets-encryption"})," \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u751f\u6210 AES-CBC \u5bc6\u94a5"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u5bc6\u94a5\u751f\u6210\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u914d\u7f6e\u4f5c\u4e3a encryption-provider-config \u4f20\u9012\u7ed9 KubeAPI"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u91cd\u65b0\u542f\u52a8\u73b0\u6709 server\uff0c\u5219\u65e0\u6cd5\u5728\u5176\u4e0a\u542f\u7528 Secret \u52a0\u5bc6\u3002",(0,s.jsx)(n.br,{}),"\n","\u5982\u679c\u4f7f\u7528\u811a\u672c\u6216",(0,s.jsx)(n.a,{href:"/zh/installation/configuration#%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC%E7%9A%84%E9%80%89%E9%A1%B9",children:"\u914d\u7f6e\u9009\u9879"}),"\u4e2d\u63cf\u8ff0\u7684\u5176\u4ed6\u65b9\u6cd5\u8fdb\u884c\u5b89\u88c5\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"curl -sfL https://get.k3s.io | sh -s - server --secrets-encryption"}),"\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"secret-\u52a0\u5bc6\u5de5\u5177",children:"Secret \u52a0\u5bc6\u5de5\u5177"}),"\n",(0,s.jsxs)(n.p,{children:["K3s \u5305\u542b\u4e00\u4e2a\u5b9e\u7528\u5de5\u5177 ",(0,s.jsx)(n.code,{children:"secrets-encrypt"}),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u63a7\u5236\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"}),"\n",(0,s.jsx)(n.li,{children:"\u6dfb\u52a0\u65b0\u7684\u52a0\u5bc6\u5bc6\u94a5"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6e\u6362\u548c\u5220\u9664\u52a0\u5bc6\u5bc6\u94a5"}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u65b0\u52a0\u5bc6 Secret"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsxs)(n.a,{href:"/zh/cli/secrets-encrypt",children:[(0,s.jsx)(n.code,{children:"k3s secrets-encrypt"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var s=r(7294);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);