"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6499],{5916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(5893),o=t(1151);const i={title:"Managing Server Roles"},r=void 0,l={id:"installation/server-roles",title:"Managing Server Roles",description:"Starting the K3s server with --cluster-init will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/server-roles.md",sourceDirName:"installation",slug:"/installation/server-roles",permalink:"/zh/installation/server-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/server-roles.md",tags:[],version:"current",lastUpdatedAt:1721151326e3,frontMatter:{title:"Managing Server Roles"},sidebar:"mySidebar",previous:{title:"Air-Gap Install",permalink:"/zh/installation/airgap"},next:{title:"Managing Packaged Components",permalink:"/zh/installation/packaged-components"}},d={},a=[{value:"Dedicated <code>etcd</code> Nodes",id:"dedicated-etcd-nodes",level:2},{value:"Dedicated <code>control-plane</code> Nodes",id:"dedicated-control-plane-nodes",level:2},{value:"Adding Roles To Existing Servers",id:"adding-roles-to-existing-servers",level:2},{value:"Configuration File Syntax",id:"configuration-file-syntax",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Starting the K3s server with ",(0,s.jsx)(n.code,{children:"--cluster-init"})," will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This document is only relevant when using embedded etcd. When not using embedded etcd, all servers will have the control-plane role and run control-plane components."})}),"\n",(0,s.jsxs)(n.h2,{id:"dedicated-etcd-nodes",children:["Dedicated ",(0,s.jsx)(n.code,{children:"etcd"})," Nodes"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a server with only the ",(0,s.jsx)(n.code,{children:"etcd"})," role, start K3s with all the control-plane components disabled:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -fL https://get.k3s.io | sh -s - server --cluster-init --disable-apiserver --disable-controller-manager --disable-scheduler\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This first node will start etcd, and wait for additional ",(0,s.jsx)(n.code,{children:"etcd"})," and/or ",(0,s.jsx)(n.code,{children:"control-plane"})," nodes to join. The cluster will not be usable until you join an additional server with the ",(0,s.jsx)(n.code,{children:"control-plane"})," components enabled."]}),"\n",(0,s.jsxs)(n.h2,{id:"dedicated-control-plane-nodes",children:["Dedicated ",(0,s.jsx)(n.code,{children:"control-plane"})," Nodes"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A dedicated ",(0,s.jsx)(n.code,{children:"control-plane"})," node cannot be the first server in the cluster; there must be an existing node with the ",(0,s.jsx)(n.code,{children:"etcd"})," role before joining dedicated ",(0,s.jsx)(n.code,{children:"control-plane"})," nodes."]})}),"\n",(0,s.jsxs)(n.p,{children:["To create a server with only the ",(0,s.jsx)(n.code,{children:"control-plane"})," role, start k3s with etcd disabled:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fL https://get.k3s.io | sh -s - server --token <token> --disable-etcd --server https://<etcd-only-node>:6443 \n"})}),"\n",(0,s.jsxs)(n.p,{children:["After creating dedicated server nodes, the selected roles will be visible in ",(0,s.jsx)(n.code,{children:"kubectl get node"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nk3s-server-1   Ready    etcd                        5h39m   v1.20.4+k3s1\nk3s-server-2   Ready    control-plane,master        5h39m   v1.20.4+k3s1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-roles-to-existing-servers",children:"Adding Roles To Existing Servers"}),"\n",(0,s.jsxs)(n.p,{children:["Roles can be added to existing dedicated nodes by restarting K3s with the disable flags removed. For example ,if you want to add the ",(0,s.jsx)(n.code,{children:"control-plane"})," role to a dedicated ",(0,s.jsx)(n.code,{children:"etcd"})," node, you can remove the ",(0,s.jsx)(n.code,{children:"--disable-apiserver --disable-controller-manager --disable-scheduler"})," flags from the systemd unit or config file, and restart the service."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-file-syntax",children:"Configuration File Syntax"}),"\n",(0,s.jsxs)(n.p,{children:["As with all other CLI flags, you can use the  ",(0,s.jsx)(n.a,{href:"/zh/installation/configuration#configuration-file",children:"Configuration File"})," to disable components, instead of passing the options as CLI flags. For example, to create a dedicated ",(0,s.jsx)(n.code,{children:"etcd"})," node, you can place the following values in ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cluster-init: true\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);