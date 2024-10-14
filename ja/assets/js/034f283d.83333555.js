"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9022],{5124:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=n(5893),i=n(1151);const r={title:"\u624b\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},l=void 0,d={id:"upgrades/manual",title:"\u624b\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",description:"K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u5e0c\u671b\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/ja/upgrades/manual",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1728924809e3,frontMatter:{title:"\u624b\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},sidebar:"mySidebar",previous:{title:"K3s\u306e\u505c\u6b62",permalink:"/ja/upgrades/killall"},next:{title:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",permalink:"/ja/upgrades/automated"}},c={},a=[{value:"\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb",id:"\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066k3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",level:3},{value:"\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",id:"\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u7528\u3057\u3066k3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u5e0c\u671b\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u969b\u306f\u3001\u307e\u305a\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u30921\u3064\u305a\u3064\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3001\u305d\u306e\u5f8c\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,t.jsx)(s.h3,{id:"\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb",children:"\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb"}),"\n",(0,t.jsxs)(s.p,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3084\u3001",(0,t.jsx)(s.a,{href:"/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306f\u3001\u7570\u306a\u308b\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u7d50\u3073\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1a"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u30c1\u30e3\u30f3\u30cd\u30eb"}),(0,t.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"stable"}),(0,t.jsx)(s.td,{children:"(\u30c7\u30d5\u30a9\u30eb\u30c8) Stable\u306f\u672c\u756a\u74b0\u5883\u306b\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30ea\u30ea\u30fc\u30b9\u306f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308b\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u671f\u9593\u3092\u7d4c\u3066\u3044\u307e\u3059\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"latest"}),(0,t.jsx)(s.td,{children:"Latest\u306f\u6700\u65b0\u306e\u6a5f\u80fd\u3092\u8a66\u3059\u306e\u306b\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30ea\u30ea\u30fc\u30b9\u306f\u307e\u3060\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308b\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u671f\u9593\u3092\u7d4c\u3066\u3044\u307e\u305b\u3093\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"v1.26 (\u4f8b)"}),(0,t.jsx)(s.td,{children:"\u5404Kubernetes\u306e\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u7d50\u3073\u3064\u3044\u305f\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u3042\u308a\u3001\u30b5\u30dd\u30fc\u30c8\u7d42\u4e86\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306f\u6700\u65b0\u306e\u30d1\u30c3\u30c1\u3092\u9078\u629e\u3057\u307e\u3059\u304c\u3001\u5fc5\u305a\u3057\u3082\u5b89\u5b9a\u7248\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u5305\u62ec\u7684\u304b\u3064\u6700\u65b0\u306e\u30ea\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(s.a,{href:"https://update.k3s.io/v1-release/channels",children:"k3s\u30c1\u30e3\u30f3\u30cd\u30eb\u30b5\u30fc\u30d3\u30b9API"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u6280\u8853\u7684\u306a\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(s.a,{href:"https://github.com/rancher/channelserver",children:"channelserver\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["K3s\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u969b\u306b\u306f\u3001",(0,t.jsx)(s.a,{href:"https://kubernetes.io/releases/version-skew-policy/",children:"Kubernetes\u30d0\u30fc\u30b8\u30e7\u30f3\u30b9\u30ad\u30e5\u30fc\u30dd\u30ea\u30b7\u30fc"}),"\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u6642\u306b\u4e2d\u9593\u306e\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u306a\u3044\u3088\u3046\u306b\u8a08\u753b\u3092\u7acb\u3066\u3066\u304f\u3060\u3055\u3044\u3002system-upgrade-controller\u81ea\u4f53\u306f\u3001Kubernetes\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5909\u66f4\u3092\u9632\u3050\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]})}),"\n",(0,t.jsx)(s.h3,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066k3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(s.p,{children:"\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306eK3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u518d\u5b9f\u884c\u3057\u3001\u6700\u521d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u305f\u3068\u304d\u3068\u540c\u3058\u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(s.admonition,{title:"Note",type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"INSTALL_K3S_EXEC"}),"\u5909\u6570\u3001",(0,t.jsx)(s.code,{children:"K3S_"}),"\u5909\u6570\u3001\u304a\u3088\u3073\u672b\u5c3e\u306e\u30b7\u30a7\u30eb\u5f15\u6570\u306f\u3059\u3079\u3066\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u3088\u3063\u3066systemd\u30e6\u30cb\u30c3\u30c8\u304a\u3088\u3073\u74b0\u5883\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\n\u6700\u521d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u305f\u3068\u304d\u306b\u8a2d\u5b9a\u3092\u884c\u3063\u305f\u5834\u5408\u3067\u3082\u3001\u518d\u5b9f\u884c\u6642\u306b\u518d\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u3001\u5143\u306e\u5024\u306f\u5931\u308f\u308c\u307e\u3059\u3002"]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/ja/installation/configuration#configuration-file",children:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb"}),"\u306e\u5185\u5bb9\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u307e\u305b\u3093\u3002\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u304b\u3089\u72ec\u7acb\u3057\u305f\u69cb\u6210\u3092\u5e0c\u671b\u3059\u308b\u5834\u5408\u306f\u3001\u74b0\u5883\u5909\u6570\u3084\u5f15\u6570\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3059\u306e\u3067\u306f\u306a\u304f\u3001\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3079\u304d\u3067\u3059\u3002"]})]}),"\n",(0,t.jsx)(s.p,{children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3053\u3068\u304c\u884c\u308f\u308c\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u65b0\u3057\u3044k3s\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),"\n",(0,t.jsx)(s.li,{children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3055\u308c\u305f\u5f15\u6570\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306bsystemd\u30e6\u30cb\u30c3\u30c8\u307e\u305f\u306fopenrc init\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f4\u65b0"}),"\n",(0,t.jsx)(s.li,{children:"k3s\u30b5\u30fc\u30d3\u30b9\u3092\u518d\u8d77\u52d5"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u4f8b\u3048\u3070\u3001\u73fe\u5728\u306e\u5b89\u5b9a\u7248\u30ea\u30ea\u30fc\u30b9\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\uff08\u4f8b\u3048\u3070latest\uff09\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z+k3s1 <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.mdxAdmonitionTitle,{}),(0,t.jsxs)(s.p,{children:["\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306ek3s\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3060\u3051\u3067\u8d77\u52d5\u3057\u306a\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(s.code,{children:"INSTALL_K3S_SKIP_START=true"}),"\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]})]}),"\n",(0,t.jsx)(s.h3,{id:"\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u7528\u3057\u3066k3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b",children:"\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(s.p,{children:"K3s\u3092\u624b\u52d5\u3067\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u5e0c\u671b\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306eK3s\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u65e2\u5b58\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u65b0\u3057\u3044\u3082\u306e\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"\u30ea\u30ea\u30fc\u30b9"}),"\u304b\u3089\u5e0c\u671b\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306eK3s\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"]}),"\n",(0,t.jsxs)(s.li,{children:["\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30d0\u30a4\u30ca\u30ea\u3092",(0,t.jsx)(s.code,{children:"/usr/local/bin/k3s"}),"\uff08\u307e\u305f\u306f\u5e0c\u671b\u3059\u308b\u5834\u6240\uff09\u306b\u30b3\u30d4\u30fc"]}),"\n",(0,t.jsx)(s.li,{children:"\u53e4\u3044k3s\u30d0\u30a4\u30ca\u30ea\u3092\u505c\u6b62"}),"\n",(0,t.jsx)(s.li,{children:"\u65b0\u3057\u3044k3s\u30d0\u30a4\u30ca\u30ea\u3092\u8d77\u52d5"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>l});var t=n(7294);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);