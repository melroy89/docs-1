"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[981],{9414:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=s(5893),i=s(1151);const r={title:"Environment Variables"},d=void 0,l={id:"reference/env-variables",title:"Environment Variables",description:"As mentioned in the Quick-Start Guide, you can use the installation script available at https://get.k3s.io to install K3s as a service on systemd and openrc based systems.",source:"@site/docs/reference/env-variables.md",sourceDirName:"reference",slug:"/reference/env-variables",permalink:"/reference/env-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/env-variables.md",tags:[],version:"current",lastUpdatedAt:1721151326e3,frontMatter:{title:"Environment Variables"},sidebar:"mySidebar",previous:{title:"Advanced Options / Configuration",permalink:"/advanced"},next:{title:"Flag Deprecation",permalink:"/reference/flag-deprecation"}},c={},o=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["As mentioned in the ",(0,n.jsx)(t.a,{href:"/quick-start",children:"Quick-Start Guide"}),", you can use the installation script available at ",(0,n.jsx)(t.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," to install K3s as a service on systemd and openrc based systems."]}),"\n",(0,n.jsx)(t.p,{children:"The simplest form of this command is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,n.jsx)(t.p,{children:"When using this method to install K3s, the following environment variables can be used to configure the installation:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Environment Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})}),(0,n.jsx)(t.td,{children:"If set to true will not download K3s hash or binary."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SYMLINK"})}),(0,n.jsx)(t.td,{children:"By default will create symlinks for the kubectl, crictl, and ctr binaries if the commands do not already exist in path. If set to 'skip' will not create symlinks and 'force' will overwrite."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SKIP_ENABLE"})}),(0,n.jsx)(t.td,{children:"If set to true will not enable or start K3s service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SKIP_START"})}),(0,n.jsx)(t.td,{children:"If set to true will not start K3s service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_VERSION"})}),(0,n.jsx)(t.td,{children:"Version of K3s to download from Github. Will attempt to download from the stable channel if not specified."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_BIN_DIR"})}),(0,n.jsxs)(t.td,{children:["Directory to install K3s binary, links, and uninstall script to, or use ",(0,n.jsx)(t.code,{children:"/usr/local/bin"})," as the default."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_BIN_DIR_READ_ONLY"})}),(0,n.jsxs)(t.td,{children:["If set to true will not write files to ",(0,n.jsx)(t.code,{children:"INSTALL_K3S_BIN_DIR"}),", forces setting ",(0,n.jsx)(t.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SYSTEMD_DIR"})}),(0,n.jsxs)(t.td,{children:["Directory to install systemd service and environment files to, or use ",(0,n.jsx)(t.code,{children:"/etc/systemd/system"})," as the default."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_EXEC"})}),(0,n.jsxs)(t.td,{children:["Command with flags to use for launching K3s in the service. If the command is not specified, and the ",(0,n.jsx)(t.code,{children:"K3S_URL"}),' is set, it will default to "agent." If ',(0,n.jsx)(t.code,{children:"K3S_URL"}),' not set, it will default to "server." For help, refer to ',(0,n.jsx)(t.a,{href:"/installation/configuration#configuration-with-install-script",children:"this example."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_NAME"})}),(0,n.jsx)(t.td,{children:"Name of systemd service to create, will default to 'k3s' if running k3s as a server and 'k3s-agent' if running k3s as an agent. If specified the name will be prefixed with 'k3s-'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_TYPE"})}),(0,n.jsx)(t.td,{children:"Type of systemd service to create, will default from the K3s exec command if not specified."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SELINUX_WARN"})}),(0,n.jsx)(t.td,{children:"If set to true will continue if k3s-selinux policy is not found."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_SKIP_SELINUX_RPM"})}),(0,n.jsx)(t.td,{children:"If set to true will skip automatic installation of the k3s RPM."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_CHANNEL_URL"})}),(0,n.jsxs)(t.td,{children:["Channel URL for fetching K3s download URL. Defaults to ",(0,n.jsx)(t.a,{href:"https://update.k3s.io/v1-release/channels",children:"https://update.k3s.io/v1-release/channels"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"INSTALL_K3S_CHANNEL"})}),(0,n.jsxs)(t.td,{children:['Channel to use for fetching K3s download URL. Defaults to "stable". Options include: ',(0,n.jsx)(t.code,{children:"stable"}),", ",(0,n.jsx)(t.code,{children:"latest"}),", ",(0,n.jsx)(t.code,{children:"testing"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"This example shows where to place aforementioned environment variables as options (after the pipe):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Environment variables which begin with ",(0,n.jsx)(t.code,{children:"K3S_"})," will be preserved for the systemd and openrc services to use."]}),"\n",(0,n.jsxs)(t.p,{children:["Setting ",(0,n.jsx)(t.code,{children:"K3S_URL"}),' without explicitly setting an exec command will default the command to "agent".']}),"\n",(0,n.jsxs)(t.p,{children:["When running the agent, ",(0,n.jsx)(t.code,{children:"K3S_TOKEN"})," must also be set."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>d});var n=s(7294);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);