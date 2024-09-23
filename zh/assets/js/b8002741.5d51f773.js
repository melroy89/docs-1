"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2573],{3338:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>h,toc:()=>a});var i=r(5893),t=r(1151);const n={hide_table_of_contents:!0,sidebar_position:2},l="v1.30.X",h={id:"release-notes/v1.30.X",title:"v1.30.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.30.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.30.X",permalink:"/zh/release-notes/v1.30.X",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/release-notes/v1.30.X.md",tags:[],version:"current",lastUpdatedAt:1727114321e3,sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"mySidebar",previous:{title:"v1.31.X",permalink:"/zh/release-notes/v1.31.X"},next:{title:"v1.29.X",permalink:"/zh/release-notes/v1.29.X"}},c={},a=[{value:"Release v1.30.5+k3s1",id:"release-v1305k3s1",level:2},{value:"Changes since v1.30.4+k3s1:",id:"changes-since-v1304k3s1",level:3},{value:"Release v1.30.4+k3s1",id:"release-v1304k3s1",level:2},{value:"Changes since v1.30.3+k3s1:",id:"changes-since-v1303k3s1",level:3},{value:"Release v1.30.3+k3s1",id:"release-v1303k3s1",level:2},{value:"Changes since v1.30.2+k3s2:",id:"changes-since-v1302k3s2",level:3},{value:"Release v1.30.2+k3s2",id:"release-v1302k3s2",level:2},{value:"Changes since v1.30.2+k3s1:",id:"changes-since-v1302k3s1",level:3},{value:"Release v1.30.2+k3s1",id:"release-v1302k3s1",level:2},{value:"Changes since v1.30.1+k3s1:",id:"changes-since-v1301k3s1",level:3},{value:"Release v1.30.1+k3s1",id:"release-v1301k3s1",level:2},{value:"Changes since v1.30.0+k3s1:",id:"changes-since-v1300k3s1",level:3},{value:"Release v1.30.0+k3s1",id:"release-v1300k3s1",level:2},{value:"Changes since v1.29.4+k3s1:",id:"changes-since-v1294k3s1",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"v130x",children:"v1.30.X"})}),"\n",(0,i.jsx)(s.admonition,{title:"Upgrade Notice",type:"warning",children:(0,i.jsxs)(s.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Version"}),(0,i.jsx)(s.th,{children:"Release date"}),(0,i.jsx)(s.th,{children:"Kubernetes"}),(0,i.jsx)(s.th,{children:"Kine"}),(0,i.jsx)(s.th,{children:"SQLite"}),(0,i.jsx)(s.th,{children:"Etcd"}),(0,i.jsx)(s.th,{children:"Containerd"}),(0,i.jsx)(s.th,{children:"Runc"}),(0,i.jsx)(s.th,{children:"Flannel"}),(0,i.jsx)(s.th,{children:"Metrics-server"}),(0,i.jsx)(s.th,{children:"Traefik"}),(0,i.jsx)(s.th,{children:"CoreDNS"}),(0,i.jsx)(s.th,{children:"Helm-controller"}),(0,i.jsx)(s.th,{children:"Local-path-provisioner"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1305k3s1",children:"v1.30.5+k3s1"})}),(0,i.jsx)(s.td,{children:"Sep 19 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1305",children:"v1.30.5"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.12.0",children:"v0.12.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.21-k3s2",children:"v1.7.21-k3s2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.14",children:"v1.1.14"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.6",children:"v0.25.6"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.2",children:"v0.7.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.11.8",children:"v2.11.8"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.11.3",children:"v1.11.3"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.4",children:"v0.16.4"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.28",children:"v0.0.28"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1304k3s1",children:"v1.30.4+k3s1"})}),(0,i.jsx)(s.td,{children:"Aug 21 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1304",children:"v1.30.4"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.11",children:"v0.11.11"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.20-k3s1",children:"v1.7.20-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.4",children:"v0.25.4"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1",children:"v0.16.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.28",children:"v0.0.28"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1303k3s1",children:"v1.30.3+k3s1"})}),(0,i.jsx)(s.td,{children:"Jul 31 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1303",children:"v1.30.3"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.11",children:"v0.11.11"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.17-k3s1",children:"v1.7.17-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.4",children:"v0.25.4"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1",children:"v0.16.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.28",children:"v0.0.28"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1302k3s2",children:"v1.30.2+k3s2"})}),(0,i.jsx)(s.td,{children:"Jul 03 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1302",children:"v1.30.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.9",children:"v0.11.9"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.17-k3s1",children:"v1.7.17-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.4",children:"v0.25.4"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1",children:"v0.16.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.27",children:"v0.0.27"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1302k3s1",children:"v1.30.2+k3s1"})}),(0,i.jsx)(s.td,{children:"Jun 25 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1302",children:"v1.30.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.9",children:"v0.11.9"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.17-k3s1",children:"v1.7.17-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.2",children:"v0.25.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1",children:"v0.16.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.27",children:"v0.0.27"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1301k3s1",children:"v1.30.1+k3s1"})}),(0,i.jsx)(s.td,{children:"May 22 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1301",children:"v1.30.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.8-0.20240430184817-f9ce6f8da97b",children:"v0.11.8-0.20240430184817-f9ce6f8da97b"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.15-k3s1",children:"v1.7.15-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12-k3s1",children:"v1.1.12-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.2",children:"v0.24.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1-0.20240502205943-2f32059d43e6",children:"v0.16.1-0.20240502205943-2f32059d43e6"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.26",children:"v0.0.26"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/zh/release-notes/v1.30.X#release-v1300k3s1",children:"v1.30.0+k3s1"})}),(0,i.jsx)(s.td,{children:"May 10 2024"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1300",children:"v1.30.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.7",children:"v0.11.8"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.15-k3s1",children:"v1.7.15-k3s1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.2",children:"v0.24.2"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.9",children:"v0.16.1"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.26",children:"v0.0.26"})})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1305k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.5+k3s1",children:"v1.30.5+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.5, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1304",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1304k3s1",children:"Changes since v1.30.4+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Testing And Secrets-Encryption Backports for 2024-09 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10801",children:"(#10801)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Update to newer OS images for install testing"}),"\n",(0,i.jsx)(s.li,{children:"Fix caching name for e2e vagrant box"}),"\n",(0,i.jsx)(s.li,{children:"Remove secrets encryption controller"}),"\n",(0,i.jsx)(s.li,{children:"Cover edge case when on new minor release for E2E upgrade test"}),"\n",(0,i.jsx)(s.li,{children:"Removes deprecated alpha Secrets Encryption metrics (deprecated in 1.30, removed in 1.31)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Update CNI plugins version ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10818",children:"(#10818)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Backports for 2024-09 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10843",children:"(#10843)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix hosts.toml header var ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10872",children:"(#10872)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update to v1.30.5-k3s1 and Go 1.22.6 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10888",children:"(#10888)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update Kubernetes to v1.30.5-k3s2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10909",children:"(#10909)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1304k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.4+k3s1",children:"v1.30.4+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.4, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1303",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1303k3s1",children:"Changes since v1.30.3+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Bump docker/docker to v25.0.6 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10649",children:"(#10649)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Backports for 2024-08 release cycle ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10664",children:"(#10664)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Use pagination when listing large numbers of resources"}),"\n",(0,i.jsx)(s.li,{children:"Fix multiple issues with servicelb"}),"\n",(0,i.jsx)(s.li,{children:"Remove deprecated use of wait. functions"}),"\n",(0,i.jsx)(s.li,{children:"Wire lasso metrics up to metrics endpoint"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Backports for August 2024 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10671",children:"(#10671)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump containerd to v1.7.20 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10660",children:"(#10660)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add tolerations support for DaemonSet pods ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10703",children:"(#10703)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"New Feature"}),": Users can now define Kubernetes tolerations for ServiceLB DaemonSet directly in the ",(0,i.jsx)(s.code,{children:"svccontroller.k3s.cattle.io/tolerations"})," annotation on services."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Update to v1.30.4-k3s1 and Go 1.22.5 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10721",children:"(#10721)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1303k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.3+k3s1",children:"v1.30.3+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.3, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1302",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1302k3s2",children:"Changes since v1.30.2+k3s2:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Update channel server for k3s2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10446",children:"(#10446)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Set correct release channel for e2e upgrade test ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10460",children:"(#10460)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Backports for 2024-07 release cycle ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10497",children:"(#10497)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Bump k3s-root to v0.14.0"}),"\n",(0,i.jsx)(s.li,{children:"Bump github.com/hashicorp/go-retryablehttp from 0.7.4 to 0.7.7"}),"\n",(0,i.jsx)(s.li,{children:"Bump Local Path Provisioner version"}),"\n",(0,i.jsx)(s.li,{children:"Ensure remotedialer kubelet connections use kubelet bind address"}),"\n",(0,i.jsx)(s.li,{children:"Chore: Bump Trivy version"}),"\n",(0,i.jsx)(s.li,{children:"Add etcd s3 config secret implementation"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["July Test Backports ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10507",children:"(#10507)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update to v1.30.3-k3s1 and Go 1.22.5 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10536",children:"(#10536)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issues loading data-dir value from env vars or dropping config files ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10596",children:"(#10596)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1302k3s2",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.2+k3s2",children:"v1.30.2+k3s2"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.2, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1302",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1302k3s1",children:"Changes since v1.30.2+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Update stable channel to v1.29.6+k3s1 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10417",children:"(#10417)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update flannel to v0.25.4 and fixed issue with IPv6 mask ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10422",children:"(#10422)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1302k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.2+k3s1",children:"v1.30.2+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.2, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1301",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1301k3s1",children:"Changes since v1.30.1+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Fix bug when using tailscale config by file ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10074",children:"(#10074)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Fix bug when using ",(0,i.jsx)(s.code,{children:"vpn-auth-file"})," in the agent"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Add WithSkipMissing to not fail import on missing blobs ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10136",children:"(#10136)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Use fixed stream server bind address for cri-dockerd ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9975",children:"(#9975)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Switch stargz over to cri registry config_path ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9977",children:"(#9977)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump to containerd v1.7.17, etcd v3.5.13 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10123",children:"(#10123)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump spegel version ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10118",children:"(#10118)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issue installing artifacts from PR builds with multiple runs ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10122",children:"(#10122)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issue with ",(0,i.jsx)(s.code,{children:"externalTrafficPolicy: Local"})," for single-stack services on dual-stack nodes ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9963",children:"(#9963)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update local-path-provisioner helper script ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9964",children:"(#9964)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add support for svclb pod PriorityClassName ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10045",children:"(#10045)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["ServiceLB now sets the priorityClassName on svclb pods to ",(0,i.jsx)(s.code,{children:"system-node-critical"})," by default. This can be overridden on a per-service basis via the ",(0,i.jsx)(s.code,{children:"svccontroller.k3s.cattle.io/priorityclassname"})," annotation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Drop check for legacy traefik v1 chart ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9593",children:"(#9593)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"K3s no longer automatically skips deploying traefik v2 if traefik v1 is present. All clusters should have been upgraded to v2 at some point over the last three years."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Update kube-router version to v2.1.2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10177",children:"(#10177)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Create ADR for branching strategy ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10147",children:"(#10147)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump minio-go to v7.0.70 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10081",children:"(#10081)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump kine to v0.11.9 to fix pagination ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10082",children:"(#10082)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update valid resolv conf ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9948",children:"(#9948)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add missing kernel config check ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10100",children:"(#10100)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Git workflow file name correction ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10131",children:"(#10131)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"None"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Follow directory symlinks in auto deploying manifests (#9288) ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10049",children:"(#10049)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Symlinked sub-directories are now respected when scanning Auto-Deploying Manifests (AddOns)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Fix bug: allow helm controller set owner reference ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10048",children:"(#10048)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix go.mod ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10192",children:"(#10192)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump flannel version to v0.25.2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10146",children:"(#10146)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Test: add agent with auth file ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10119",children:"(#10119)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Fix bug when using ",(0,i.jsx)(s.code,{children:"vpn-auth-file"})," in the agent"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Add extra log in e2e tests ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10145",children:"(#10145)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update channel server for may 2024 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10137",children:"(#10137)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump klipper-helm image for tls secret support ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10187",children:"(#10187)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Updating the script binary_size_check to complete the command name by\u2026 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9992",children:"(#9992)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issue with k3s-etcd informers not starting ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10047",children:"(#10047)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Enable serving supervisor metrics ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10019",children:"(#10019)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--Enable-pprof"})," can now be set on agents to enable the debug/pprof endpoints. When set, agents will listen on the supervisor port."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--Supervisor-metrics"})," can now be set on servers to enable serving internal metrics on the supervisor endpoint; when set agents will listen on the supervisor port."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Bump alpine from 3.18 to 3.20 in /conformance ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10210",children:"(#10210)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump alpine from 3.18 to 3.20 in /package ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10211",children:"(#10211)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump ubuntu from 22.04 to 24.04 in /tests/e2e/scripts ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10040",children:"(#10040)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump Trivy version ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10039",children:"(#10039)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix netpol crash when node remains tainted uninitialized ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10073",children:"(#10073)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issue caused by sole server marked as failed under load ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10241",children:"(#10241)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The embedded load-balancer will now fall back to trying all servers with health-checks ignored, if all servers have been marked unavailable due to failed health checks."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Add write-kubeconfig-group flag to server ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9233",children:"(#9233)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"New flag in k3s server: --write-kubeconfig-group"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Fix embedded mirror blocked by SAR RBAC and re-enable test ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10257",children:"(#10257)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump Local Path Provisioner version ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10268",children:"(#10268)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix: Use actual warningPeriod in certmonitor ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10271",children:"(#10271)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix bug that caused agents to bypass local loadbalancer ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10280",children:"(#10280)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add ADR for support for etcd s3 config secret ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9364",children:"(#9364)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add test for ",(0,i.jsx)(s.code,{children:"isValidResolvConf"})," ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10302",children:"(#10302)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add snapshot retention etcd-s3-folder fix ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10293",children:"(#10293)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Expand GHA golang caching to include newest release branch ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10307",children:"(#10307)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix race condition panic in loadbalancer.nextServer ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10318",children:"(#10318)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix typo, use ",(0,i.jsx)(s.code,{children:"rancher/permissions"})," ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10296",children:"(#10296)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update Kubernetes to v1.30.2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10349",children:"(#10349)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix agent supervisor port using apiserver port instead ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10352",children:"(#10352)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix issue that allowed multiple simultaneous snapshots to be allowed ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10372",children:"(#10372)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1301k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.1+k3s1",children:"v1.30.1+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release updates Kubernetes to v1.30.1, and fixes a number of issues."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1300",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1300k3s1",children:"Changes since v1.30.0+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Replace deprecated ruby function in e2e tests ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10084",children:"(#10084)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update channels with 1.30 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10097",children:"(#10097)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Address 461 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10112",children:"(#10112)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update to v1.30.1-k3s1 and Go 1.22.2 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10105",children:"(#10105)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h2,{id:"release-v1300k3s1",children:["Release ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.0+k3s1",children:"v1.30.0+k3s1"})]}),"\n",(0,i.jsx)(s.p,{children:"This release is K3S's first in the v1.30 line. This release updates Kubernetes to v1.30.0."}),"\n",(0,i.jsxs)(s.p,{children:["For more details on what's new, see the ",(0,i.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1290",children:"Kubernetes release notes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"changes-since-v1294k3s1",children:"Changes since v1.29.4+k3s1:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Kubernetes V1.30.0-k3s1 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10063",children:"(#10063)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Update stable channel to v1.29.4+k3s1 ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10031",children:"(#10031)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add E2E Split Server to Drone, support parallel testing in Drone ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9940",children:"(#9940)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bump E2E opensuse leap to 15.6, fix btrfs test ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10057",children:"(#10057)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Remove deprecated ",(0,i.jsx)(s.code,{children:"pod-infra-container-image"})," kubelet flag ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/7409",children:"(#7409)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Fix e2e tests ",(0,i.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/10061",children:"(#10061)"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>h,a:()=>l});var i=r(7294);const t={},n=i.createContext(t);function l(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);