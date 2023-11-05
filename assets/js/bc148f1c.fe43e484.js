"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1955],{84691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(85893),s=r(11151);const n={description:"All the MANY files you can extract from local and remote IPSWs/OTAs."},c="Extract files from IPSWs/OTAs",o={id:"guides/extract",title:"Extract files from IPSWs/OTAs",description:"All the MANY files you can extract from local and remote IPSWs/OTAs.",source:"@site/docs/guides/extract.md",sourceDirName:"guides",slug:"/guides/extract",permalink:"/ipsw/docs/guides/extract",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/extract.md",tags:[],version:"current",frontMatter:{description:"All the MANY files you can extract from local and remote IPSWs/OTAs."},sidebar:"docs",previous:{title:"Parse firmware zip metadata",permalink:"/ipsw/docs/guides/info"},next:{title:"Parse MachO files",permalink:"/ipsw/docs/guides/macho"}},i={},l=[{value:"<strong>ipsw extract</strong>",id:"ipsw-extract",level:2},{value:"Extract <em>kernelcache</em> from a previously downloaded IPSW or OTA",id:"extract-kernelcache-from-a-previously-downloaded-ipsw-or-ota",level:3},{value:"Extract <em>dyld_shared_cache</em> from a previously downloaded IPSW",id:"extract-dyld_shared_cache-from-a-previously-downloaded-ipsw",level:3},{value:"All these commands can also be ran on remote IPSWs/OTAs",id:"all-these-commands-can-also-be-ran-on-remote-ipswsotas",level:2},{value:"Extract all files matching a user-specified regex pattern from remote IPSW or OTA zip",id:"extract-all-files-matching-a-user-specified-regex-pattern-from-remote-ipsw-or-ota-zip",level:3}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"extract-files-from-ipswsotas",children:"Extract files from IPSWs/OTAs"}),"\n",(0,a.jsx)(t.h2,{id:"ipsw-extract",children:(0,a.jsx)(t.strong,{children:"ipsw extract"})}),"\n",(0,a.jsxs)(t.p,{children:["Extract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA ",(0,a.jsx)(t.em,{children:"(and MUCH MORE)"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u276f ipsw extract --help\nExtract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA\n\nUsage:\n  ipsw extract <IPSW/OTA | URL> [flags]\n\nAliases:\n  extract, e, ex\n\nFlags:\n  -m, --dmg                     Extract File System DMG file\n  -t, --dtree                   Extract DeviceTree\n  -d, --dyld                    Extract dyld_shared_cache\n  -a, --dyld-arch stringArray   dyld_shared_cache architecture to extract\n  -f, --files                   Extract File System files\n      --flat                    Do NOT perserve directory structure when extracting\n  -h, --help                    help for extract\n  -i, --iboot                   Extract iBoot\n      --insecure                do not verify ssl certs\n  -b, --kbag                    Extract Im4p Keybags\n  -k, --kernel                  Extract kernelcache\n  -o, --output string           Folder to extract files to\n      --pattern string          Extract files that match regex\n      --proxy string            HTTP/HTTPS proxy\n  -r, --remote                  Extract from URL\n  -s, --sep                     Extract sep-firmware\n\nGlobal Flags:\n      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"extract-kernelcache-from-a-previously-downloaded-ipsw-or-ota",children:["Extract ",(0,a.jsx)(t.em,{children:"kernelcache"})," from a previously downloaded IPSW or OTA"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u276f ipsw extract --kernel iPhone11,2_12.0_16A366_Restore.ipsw\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"extract-dyld_shared_cache-from-a-previously-downloaded-ipsw",children:["Extract ",(0,a.jsx)(t.em,{children:"dyld_shared_cache"})," from a previously downloaded IPSW"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"macOS"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u276f ipsw extract --dyld iPhone11,2_12.0_16A366_Restore.ipsw\n   \u2022 Extracting dyld_shared_cache from IPSW\n   \u2022 Mounting DMG\n   \u2022 Extracting System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e to dyld_shared_cache\n   \u2022 Unmounting DMG\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"docker"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u276f docker run --init -it --rm \\\n             --device /dev/fuse \\\n             --cap-add=SYS_ADMIN \\\n             -v `pwd` :/data \\\n             blacktop/ipsw -V extract --dyld iPhone11_2_12.4.1_16G102_Restore.ipsw\n"})}),"\n",(0,a.jsx)(t.h2,{id:"all-these-commands-can-also-be-ran-on-remote-ipswsotas",children:"All these commands can also be ran on remote IPSWs/OTAs"}),"\n",(0,a.jsxs)(t.p,{children:["Via the power of ",(0,a.jsx)(t.code,{children:"partialzip"})]}),"\n",(0,a.jsx)(t.h3,{id:"extract-all-files-matching-a-user-specified-regex-pattern-from-remote-ipsw-or-ota-zip",children:"Extract all files matching a user-specified regex pattern from remote IPSW or OTA zip"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u276f ipsw extract --remote https://updates.cdn-apple.com/../iPodtouch_7_13.3_17C54_Restore.ipsw --pattern '.*BuidManifest.plist$'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var a=r(67294);const s={},n=a.createContext(s);function c(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);