"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9387],{3836:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(5893),l=n(1151);const i={title:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},a=void 0,d={id:"installation/airgap",title:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"K3s\u3092\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u30012\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3068\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u76f4\u63a5\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u74b0\u5883\u306e\u3053\u3068\u3067\u3059\u3002\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066docker.io\u3092\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u304b\u3001\u5c0f\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc\u7528\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u624b\u52d5\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/ja/installation/airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1728924809e3,frontMatter:{title:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"mySidebar",previous:{title:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",permalink:"/ja/installation/registry-mirror"},next:{title:"\u30b5\u30fc\u30d0\u30fc\u30ed\u30fc\u30eb\u306e\u7ba1\u7406",permalink:"/ja/installation/server-roles"}},t={},c=[{value:"\u30a4\u30e1\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",id:"\u30a4\u30e1\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",level:2},{value:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u65b9\u5f0f",id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u65b9\u5f0f",level:3},{value:"\u30ec\u30b8\u30b9\u30c8\u30eaYAML\u306e\u4f5c\u6210\u3068\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",id:"\u30ec\u30b8\u30b9\u30c8\u30eayaml\u306e\u4f5c\u6210\u3068\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",level:4},{value:"\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u65b9\u5f0f",id:"\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u65b9\u5f0f",level:3},{value:"\u30a4\u30e1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tarball\u306e\u6e96\u5099",id:"\u30a4\u30e1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tarball\u306e\u6e96\u5099",level:4},{value:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",id:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",level:3},{value:"K3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"k3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u30d0\u30a4\u30ca\u30ea",id:"\u30d0\u30a4\u30ca\u30ea",level:4},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30eb\u30fc\u30c8",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30eb\u30fc\u30c8",level:4},{value:"SELinux RPM",id:"selinux-rpm",level:4},{value:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u306eK3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u306ek3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u65b9\u5f0f",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u65b9\u5f0f",level:3},{value:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u65b9\u5f0f",id:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u65b9\u5f0f",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{TabItem:n,Tabs:i}=s;return n||x("TabItem",!0),i||x("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"K3s\u3092\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u30012\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3068\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u76f4\u63a5\u63a5\u7d9a\u3055\u308c\u3066\u3044\u306a\u3044\u74b0\u5883\u306e\u3053\u3068\u3067\u3059\u3002\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066docker.io\u3092\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u304b\u3001\u5c0f\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc\u7528\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u624b\u52d5\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u30a4\u30e1\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",children:"\u30a4\u30e1\u30fc\u30b8\u306e\u30ed\u30fc\u30c9"}),"\n",(0,r.jsx)(s.h3,{id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u65b9\u5f0f",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u65b9\u5f0f"}),"\n",(0,r.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u624b\u9806\u306f\u3001\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u30ce\u30fc\u30c9\u3092\u65e2\u306b\u4f5c\u6210\u3057\u3001\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u3068\u3057\u3066\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u305fcontainerd\u3092\u4f7f\u7528\u3057\u3001\u74b0\u5883\u5185\u306bOCI\u6e96\u62e0\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u307e\u3060\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8Docker\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(s.a,{href:"https://distribution.github.io/distribution/about/deploying/#run-an-externally-accessible-registry",children:"\u516c\u5f0f\u30ec\u30b8\u30b9\u30c8\u30ea\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"\u30ec\u30b8\u30b9\u30c8\u30eayaml\u306e\u4f5c\u6210\u3068\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",children:"\u30ec\u30b8\u30b9\u30c8\u30eaYAML\u306e\u4f5c\u6210\u3068\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5b9f\u884c\u3059\u308bK3s\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u7528\u306e\u30a4\u30e1\u30fc\u30b8\u30a2\u30fc\u30ab\u30a4\u30d6\u3092",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"\u30ea\u30ea\u30fc\u30b9"}),"\u30da\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"docker image load k3s-airgap-images-amd64.tar.zst"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001tar\u30d5\u30a1\u30a4\u30eb\u304b\u3089Docker\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"docker tag"}),"\u3068",(0,r.jsx)(s.code,{children:"docker push"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ed\u30fc\u30c9\u3057\u305f\u30a4\u30e1\u30fc\u30b8\u3092\u518d\u30bf\u30b0\u4ed8\u3051\u3057\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/ja/installation/private-registry",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a"}),"\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u3001",(0,r.jsx)(s.code,{children:"registries.yaml"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u304a\u3088\u3073\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u4ee5\u4e0b\u306e",(0,r.jsx)(s.a,{href:"#install-k3s",children:"Install K3s"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u9032\u307f\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u65b9\u5f0f",children:"\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u65b9\u5f0f"}),"\n",(0,r.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u624b\u9806\u306f\u3001\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u30ce\u30fc\u30c9\u3092\u65e2\u306b\u4f5c\u6210\u3057\u3001\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u3068\u3057\u3066\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u305fcontainerd\u3092\u4f7f\u7528\u3057\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u3001\u307e\u305f\u306f\u4f7f\u7528\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u3053\u306e\u65b9\u6cd5\u3067\u306f\u3001\u5fc5\u8981\u306a\u30a4\u30e1\u30fc\u30b8\u3092\u5404\u30ce\u30fc\u30c9\u306b\u624b\u52d5\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306e\u304c\u73fe\u5b9f\u7684\u3067\u306a\u3044\u30a8\u30c3\u30b8\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h4,{id:"\u30a4\u30e1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tarball\u306e\u6e96\u5099",children:"\u30a4\u30e1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tarball\u306e\u6e96\u5099"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5b9f\u884c\u3059\u308bK3s\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u7528\u306e\u30a4\u30e1\u30fc\u30b8\u30a2\u30fc\u30ab\u30a4\u30d6\u3092",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"\u30ea\u30ea\u30fc\u30b9"}),"\u30da\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30a4\u30e1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30a4\u30e1\u30fc\u30b8\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo curl -L -o /var/lib/rancher/k3s/agent/images/k3s-airgap-images-amd64.tar.zst "https://github.com/k3s-io/k3s/releases/download/v1.29.1-rc2%2Bk3s1/k3s-airgap-images-amd64.tar.zst"\n'})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["\u4ee5\u4e0b\u306e",(0,r.jsx)(s.a,{href:"#install-k3s",children:"Install K3s"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u9032\u307f\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",children:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc"}),"\n",(0,r.jsx)(s.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,r.jsx)(s.p,{children:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306f\u30012024\u5e741\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5b9f\u9a13\u7684\u6a5f\u80fd\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.13+k3s1\u3001v1.27.10+k3s1\u3001v1.28.6+k3s1\u3001v1.29.1+k3s1"})}),"\n",(0,r.jsx)(s.p,{children:"K3s\u306b\u306f\u3001\u57cb\u3081\u8fbc\u307f\u306e\u5206\u6563\u578bOCI\u6e96\u62e0\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u6709\u52b9\u5316\u3057\u3066\u9069\u5207\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u4efb\u610f\u306e\u30ce\u30fc\u30c9\u306econtainerd\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u306b\u3042\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u3001\n\u5916\u90e8\u30a4\u30e1\u30fc\u30b8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u305b\u305a\u306b\u4ed6\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u30d7\u30eb\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306f\u3001\u4e0a\u6d41\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u3001\u307e\u305f\u306f\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tarball\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u57cb\u3081\u8fbc\u307f\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u6709\u52b9\u5316\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001",(0,r.jsx)(s.a,{href:"/ja/installation/registry-mirror",children:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc"}),"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"k3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"K3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,r.jsx)(s.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["K3s\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u524d\u306b\u3001\u4e0a\u8a18\u306e",(0,r.jsx)(s.a,{href:"#private-registry-method",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u65b9\u5f0f"}),"\u307e\u305f\u306f",(0,r.jsx)(s.a,{href:"#manually-deploy-images-method",children:"\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u65b9\u5f0f"}),"\u3092\u5b8c\u4e86\u3057\u3066\u3001K3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u5fc5\u8981\u306a\u30a4\u30e1\u30fc\u30b8\u3092\u4e8b\u524d\u306b\u6e96\u5099\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"\u30d0\u30a4\u30ca\u30ea",children:"\u30d0\u30a4\u30ca\u30ea"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"\u30ea\u30ea\u30fc\u30b9"}),"\u30da\u30fc\u30b8\u304b\u3089K3s\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30ce\u30fc\u30c9\u3054\u3068\u306b\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u30d0\u30a4\u30ca\u30ea\u3092",(0,r.jsx)(s.code,{children:"/usr/local/bin"}),"\u306b\u914d\u7f6e\u3057\u3001\u5b9f\u884c\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://get.k3s.io",children:"get.k3s.io"}),"\u304b\u3089K3s\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30ce\u30fc\u30c9\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u914d\u7f6e\u3057\u3001",(0,r.jsx)(s.code,{children:"install.sh"}),"\u3068\u540d\u4ed8\u3051\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30eb\u30fc\u30c8",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30eb\u30fc\u30c8"}),"\n",(0,r.jsx)(s.p,{children:"\u30ce\u30fc\u30c9\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8\u3092\u6301\u3064\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c0\u30df\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4ecb\u3057\u305f\u30d6\u30e9\u30c3\u30af\u30db\u30fc\u30eb\u30eb\u30fc\u30c8\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002K3s\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30eb\u30fc\u30c8\u3092\u5fc5\u8981\u3068\u3057\u3001\u30ce\u30fc\u30c9\u306e\u30d7\u30e9\u30a4\u30de\u30eaIP\u3092\u81ea\u52d5\u691c\u51fa\u3057\u3001kube-proxy\u306eClusterIP\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u304c\u6b63\u5e38\u306b\u6a5f\u80fd\u3059\u308b\u305f\u3081\u3067\u3059\u3002\u30c0\u30df\u30fc\u30eb\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ip link add dummy0 type dummy\nip link set dummy0 up\nip addr add 203.0.113.254/31 dev dummy0\nip route add default via 203.0.113.255 dev dummy0 metric 1000\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"}),"\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066K3s\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001K3s\u306f\u30ed\u30fc\u30ab\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h4,{id:"selinux-rpm",children:"SELinux RPM"}),"\n",(0,r.jsxs)(s.p,{children:["SELinux\u3092\u6709\u52b9\u306b\u3057\u3066K3s\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u306f\u3001\u9069\u5207\u306ak3s-selinux RPM\u3092\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306eRPM\u306f",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s-selinux/releases/latest",children:"\u3053\u3061\u3089"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001CentOS 8\u306e\u5834\u5408\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u30de\u30b7\u30f3\u3067\uff1a\ncurl -LO https://github.com/k3s-io/k3s-selinux/releases/download/v1.4.stable.1/k3s-selinux-1.4-1.el8.noarch.rpm\n\n# RPM\u3092\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30de\u30b7\u30f3\u306b\u8ee2\u9001\n\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30de\u30b7\u30f3\u3067\uff1a\nsudo yum install ./k3s-selinux-1.4-1.el8.noarch.rpm\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u8a73\u7d30\u306f",(0,r.jsx)(s.a,{href:"/ja/advanced#selinux-support",children:"SELinux"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u306ek3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u306eK3s\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u30011\u53f0\u4ee5\u4e0a\u306e\u30b5\u30fc\u30d0\u30fc\u306bK3s\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(n,{value:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u69cb\u6210",default:!0,children:[(0,r.jsx)(s.p,{children:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30fc\u30d0\u30fc\u306bK3s\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n"})}),(0,r.jsx)(s.p,{children:"\u8ffd\u52a0\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u5404\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3067\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://<SERVER_IP>:6443 K3S_TOKEN=<YOUR_TOKEN> ./install.sh\n"})}),(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["\u30b5\u30fc\u30d0\u30fc\u306e\u30c8\u30fc\u30af\u30f3\u306f\u901a\u5e38\u3001",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/token"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]})})]}),(0,r.jsxs)(n,{value:"\u9ad8\u53ef\u7528\u6027\u69cb\u6210",default:!0,children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/ja/datastore/ha",children:"\u5916\u90e8DB\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027"}),"\u307e\u305f\u306f",(0,r.jsx)(s.a,{href:"/ja/datastore/ha-embedded",children:"\u57cb\u3081\u8fbc\u307fDB\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027"}),"\u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u8abf\u6574\u3057\u3066",(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"}),"\u3092\u6307\u5b9a\u3057\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092curl\u3067\u306f\u306a\u304f\u30ed\u30fc\u30ab\u30eb\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002\u307e\u305f\u3001",(0,r.jsx)(s.code,{children:"INSTALL_K3S_EXEC='args'"}),"\u3092\u4f7f\u7528\u3057\u3066k3s\u306b\u5f15\u6570\u3092\u6e21\u3057\u307e\u3059\u3002"]}),(0,r.jsx)(s.p,{children:"\u4f8b\u3048\u3070\u3001\u5916\u90e8DB\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027\u30ac\u30a4\u30c9\u306e\u30b9\u30c6\u30c3\u30d72\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),(0,r.jsx)(s.p,{children:"\u3053\u308c\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u66f4\u3057\u307e\u3059\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --token=SECRET' \\\nK3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' \\\n./install.sh\n"})})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["K3s\u306e",(0,r.jsx)(s.code,{children:"--resolv-conf"}),"\u30d5\u30e9\u30b0\u306fkubelet\u306b\u6e21\u3055\u308c\u3001\u30db\u30b9\u30c8\u306b\u4e0a\u6d41\u306e\u30cd\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u306e\u30dd\u30c3\u30c9DNS\u89e3\u6c7a\u306e\u8a2d\u5b9a\u306b\u5f79\u7acb\u3064\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(s.h2,{id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",children:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\n",(0,r.jsx)(s.h3,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u65b9\u5f0f",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u65b9\u5f0f"}),"\n",(0,r.jsx)(s.p,{children:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306f\u3001\u4ee5\u4e0b\u306e\u65b9\u6cd5\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308bK3s\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308b\u65b0\u3057\u3044\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8\uff08tar\u30d5\u30a1\u30a4\u30eb\uff09\u3092",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"\u30ea\u30ea\u30fc\u30b9"}),"\u30da\u30fc\u30b8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u5404\u30ce\u30fc\u30c9\u306e",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/agent/images/"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306btar\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3057\u3001\u53e4\u3044tar\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5404\u30ce\u30fc\u30c9\u306e",(0,r.jsx)(s.code,{children:"/usr/local/bin"}),"\u306b\u3042\u308b\u53e4\u3044K3s\u30d0\u30a4\u30ca\u30ea\u3092\u65b0\u3057\u3044\u3082\u306e\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002",(0,r.jsx)(s.a,{href:"https://get.k3s.io%E3%81%8B%E3%82%89%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%80%81%E5%89%8D%E5%9B%9E%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E4%BB%A5%E9%99%8D%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%8C%E3%81%82%E3%81%A3%E3%81%9F%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B%E3%81%9F%E3%82%81%E3%80%81%E5%86%8D%E5%BA%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E5%90%8C%E3%81%98%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",children:"https://get.k3s.io\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30b3\u30d4\u30fc\u3057\u3001\u524d\u56de\u306e\u30ea\u30ea\u30fc\u30b9\u4ee5\u964d\u306b\u5909\u66f4\u304c\u3042\u3063\u305f\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u518d\u5ea6\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u540c\u3058\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"})]}),"\n",(0,r.jsx)(s.li,{children:"K3s\u30b5\u30fc\u30d3\u30b9\u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\uff08\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u518d\u8d77\u52d5\u3055\u308c\u306a\u3044\u5834\u5408\uff09\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u65b9\u5f0f",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u65b9\u5f0f"}),"\n",(0,r.jsxs)(s.p,{children:["K3s\u306f",(0,r.jsx)(s.a,{href:"/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u3067\u3053\u308c\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u5fc5\u8981\u306a\u30a4\u30e1\u30fc\u30b8\u304c\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308bK3s\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308brancher/k3s-upgrade\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001K3s\u30ea\u30ea\u30fc\u30b9\u306e",(0,r.jsx)(s.code,{children:"+"}),"\u306fDocker\u30a4\u30e1\u30fc\u30b8\u3067\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a4\u30e1\u30fc\u30b8\u30bf\u30b0\u3067\u306f",(0,r.jsx)(s.code,{children:"-"}),"\u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u307e\u305f\u3001system-upgrade-controller\u30de\u30cb\u30d5\u30a7\u30b9\u30c8YAML\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u308bsystem-upgrade-controller\u3068kubectl\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u5fc5\u8981\u3067\u3059\u3002\u6700\u65b0\u306esystem-upgrade-controller\u30ea\u30ea\u30fc\u30b9\u306f",(0,r.jsx)(s.a,{href:"https://github.com/rancher/system-upgrade-controller/releases/latest",children:"\u3053\u3061\u3089"}),"\u3067\u78ba\u8a8d\u3057\u3001\u5fc5\u8981\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001system-upgrade-controller\u306ev0.4.0\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30a4\u30e1\u30fc\u30b8\u304c\u30de\u30cb\u30d5\u30a7\u30b9\u30c8YAML\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5fc5\u8981\u306arancher/k3s-upgrade\u3001rancher/system-upgrade-controller\u3001\u304a\u3088\u3073rancher/kubectl\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u8ffd\u52a0\u3057\u305f\u3089\u3001",(0,r.jsx)(s.a,{href:"/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function o(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>a});var r=n(7294);const l={},i=r.createContext(l);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);