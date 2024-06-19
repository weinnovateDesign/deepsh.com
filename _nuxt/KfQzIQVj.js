import{d as j,u as N,r as ee,a as te,b as Z,c as M,o as ne,_ as oe,e as ie,f as T,g as q,n as ae,F as se,h as w,i as L,j as z,w as J,T as H,t as re,k as V,p as de,l as ce,m as ue,q as le,s as pe,v as we,x as fe,y as F,z as W,A as ve,B as D}from"./tp9TSmUo.js";import{q as me,u as he}from"./Bkk6LSSF.js";import"./DgEmFbTE.js";const ye={nuxt:{}},_e=j(ye);function G(){const o=N();return o._appConfig||(o._appConfig=ee(_e)),o._appConfig}const S=o=>(de("data-v-0c850afe"),o=o(),ce(),o),ge=S(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),Ie=S(()=>w("span",null,[w("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),ue(": Preview enabled")],-1)),ke={key:0},Ce=S(()=>w("div",{id:"__preview_background"},null,-1)),xe=S(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Pe=S(()=>w("p",null,"Initializing the preview...",-1)),Se={key:0},Ae=S(()=>w("div",{id:"__preview_background"},null,-1)),Te={id:"__preview_loader"},qe=te({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const s=o,t=["__nuxt_preview","__preview_enabled"],u=N(),_=Z(),l=M(!0),I=M(!1),e=M(!1),i=M("");let n;const a=async()=>{V("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await _.replace({query:{preview:void 0}}),window.location.reload()},m=async p=>{const f=await s.syncPreview(p);if(e.value!==!0){if(!f){setTimeout(()=>m(p),1e3);return}V("previewToken").value&&(e.value=!0,await _.replace({query:{}}),u.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&n.disconnect())}};return ne(async()=>{n=(await oe(()=>import("./CF3NOiUn.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let f;n.on("connect",()=>{f=setTimeout(()=>{e.value||(f=setTimeout(()=>{i.value="Preview sync timed out",e.value=!1},3e4),n.emit("draft:requestSync"))},3e4)});const C=()=>{f&&(clearTimeout(f),f=null)};n.on("draft:sync",async x=>{if(C(),!x){try{n.once("draft:ready",()=>{n.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(A){switch(C(),A.response.status){case 404:i.value="Preview draft not found",e.value=!1;break;default:i.value="An error occurred while syncing preview",e.value=!1}}return}m(x)}),n.on("draft:unauthorized",()=>{C(),i.value="Unauthorized preview",e.value=!1}),n.on("disconnect",()=>{C()}),document.body.classList.add(...t),n.on("draft:update",x=>{I.value=!0,s.syncPreview(x),I.value=!1})}),ie(()=>{document.body.classList.remove(...t)}),(p,f)=>(T(),q("div",null,[l.value?(T(),q("div",{key:0,id:"__nuxt_preview",class:ae({__preview_ready:e.value,__preview_refreshing:I.value})},[e.value?(T(),q(se,{key:0},[ge,Ie,w("button",{onClick:a}," Close ")],64)):L("",!0)],2)):L("",!0),z(H,{name:"preview-loading"},{default:J(()=>[l.value&&!e.value&&!i.value?(T(),q("div",ke,[Ce,w("div",{id:"__preview_loader"},[xe,Pe,w("button",{onClick:a}," Cancel ")])])):L("",!0)]),_:1}),z(H,{name:"preview-loading"},{default:J(()=>[i.value?(T(),q("div",Se,[Ae,w("div",Te,[w("p",null,re(i.value),1),w("button",{onClick:a}," Exit preview ")])])):L("",!0)]),_:1})]))}}),be=le(qe,[["__scopeId","data-v-0c850afe"]]),Me=(o=[],s,t)=>{const u=[...s||[]],_=[...t||[]],l=JSON.parse(JSON.stringify(o));for(const e of u)if(e.new)l.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(_.splice(_.findIndex(n=>n.path===e.oldPath),1),u.find(n=>n.path===e.oldPath))l.push({path:e.path,parsed:e.parsed});else{const n=l.find(a=>a.path===e.oldPath);n&&(n.path=e.path,e.parsed?n.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(a=>{n.parsed[a]=e.pathMeta[a]}))}else{const i=l.find(n=>n.path===e.path);i?Object.assign(i,{path:e.path,parsed:e.parsed}):l.push({path:e.path,parsed:e.parsed})}for(const e of _)l.splice(l.findIndex(i=>i.path===e.path),1);const I=new Intl.Collator(void 0,{numeric:!0});return l.sort((e,i)=>I.compare(e.path,i.path)),l},b={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts"},Re=pe((o,s,t)=>{if(Array.isArray(o[s])&&Array.isArray(t))return o[s]=t,!0}),Ke=o=>{let s;return t=>(s||(s=o()),s)};function Q(o,s){for(const t in o){const u=s[t];t in s||delete o[t],u!==null&&typeof u=="object"&&Q(o[t],s[t])}}function X(o,s){for(const t in s){const u=s[t];u!==null&&typeof u=="object"?Array.isArray(u)&&Array.isArray(o[t])?o[t]=u:(o[t]=o[t]||{},X(o[t],u)):o[t]=u}}const Le=()=>{const o=N(),s={},t=we("studio-client-db",()=>null);t.value||(o.hook("content:storage",i=>{t.value=i}),me("/non-existing-path").findOne());const u=async i=>{var m,p,f;const n=window.sessionStorage.getItem("previewToken");if(!i)return null;i=i.replace(/\/$/,"");let a=await((m=t.value)==null?void 0:m.getItem(`${n}:${i}`));return a||(a=await((p=t.value)==null?void 0:p.getItem(`cached:${i}`))),a||(a=a=await((f=t.value)==null?void 0:f.getItem(i))),a||(a=s[i||"/"]),a};return{storage:t,findContentItem:u,updateContentItem:(i,n)=>{var a;t.value&&(s[n.parsed._path]=n.parsed,t.value.setItem(`${i}:${(a=n.parsed)==null?void 0:a._id}`,JSON.stringify(n.parsed)))},removeContentItem:async(i,n)=>{var m;const a=await u(n);if(await((m=t.value)==null?void 0:m.removeItem(`${i}:${n}`)),a){delete s[a._path];const p=await u(a._id);p&&(s[p._path]=p)}},removeAllContentItems:async i=>{const n=await t.value.getKeys(`${i}:`);await Promise.all(n.map(a=>t.value.removeItem(a)))},setPreviewMetaItems:async(i,n)=>{const a=new Set(n.map(m=>m.parsed._id.split(":").shift()));await t.value.setItem(`${i}$`,JSON.stringify({ignoreSources:Array.from(a)}))}}},Ne=Ke(()=>JSON.parse(JSON.stringify(G())));let U=[];const Fe=()=>{const o=N(),{storage:s,findContentItem:t,updateContentItem:u,removeContentItem:_,removeAllContentItems:l,setPreviewMetaItems:I}=Le(),{studio:e,content:i}=fe().public,n=window.sessionStorage.getItem("previewAPI")||(e==null?void 0:e.apiURL),a=Ne(),m=async c=>{const r=window.sessionStorage.getItem("previewToken");l(r),I(r,c),await Promise.all(c.map(v=>{u(r,v)}))},p=c=>{const r=W(o,G);r!=null&&r.ui&&(r.ui.icons={...r.ui.icons,dynamic:!0}),X(r,Re(c,a)),c||Q(r,a)},f=async c=>{if(U=c.files=c.files||U||[],!s.value)return!1;U=[];const r=Me(c.files,c.additions,c.deletions),v=r.filter(k=>![b.appConfig,b.nuxtConfig].includes(k.path));await m(v);const h=r.find(k=>k.path===b.appConfig);return p(h==null?void 0:h.parsed),A(),!0},C=async()=>{const c=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n,method:"POST",params:{token:c}})},x=()=>{const c=window.sessionStorage.getItem("previewToken"),r=document.createElement("div");r.id="__nuxt_preview_wrapper",document.body.appendChild(r),ve(be,{previewToken:c,apiURL:n,syncPreview:f,requestPreviewSyncAPI:C}).mount(r)},A=async()=>{if(i!=null&&i.documentDriven){const{pages:c}=W(o,he),r=await Promise.all(Object.keys(c.value).map(async v=>{var h;return await t(((h=c.value[v])==null?void 0:h._id)??v)}));c.value=r.reduce((v,h,k)=>(h&&(v[Object.keys(c.value)[k]]=h),v),{})}await o.hooks.callHookParallel("app:data:refresh")};return{mountPreviewUI:x,initiateIframeCommunication:Y};function Y(){if(!window.parent||window.self===window.parent)return;const c=Z(),r=F(),v=M(""),h=d=>({path:d.path,query:D(d.query),params:D(d.params),fullPath:d.fullPath,meta:D(d.meta)});window.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey||d.altKey||d.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:d.key,metaKey:d.metaKey,ctrlKey:d.ctrlKey,shiftKey:d.shiftKey,altKey:d.altKey}},"*")}),window.addEventListener("message",async d=>{var B;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((B=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:B.split(",").map(y=>y.trim()))||[]].includes(d.origin))return;const{type:$,payload:R={}}=d.data||{};switch($){case"nuxt-studio:editor:file-selected":{const y=await t(R.path);y&&(y._partial||!String(R.path).endsWith(".md")||y._path!==F().path&&(v.value=y._path,c.push(y._path)));break}case"nuxt-studio:editor:media-changed":case"nuxt-studio:editor:file-changed":{const y=window.sessionStorage.getItem("previewToken"),{additions:E=[],deletions:P=[]}=R;for(const K of E)await u(y,K);for(const K of P)await _(y,K.path);A();break}case"nuxt-studio:config:file-changed":{const{additions:y=[],deletions:E=[]}=R,P=y.find(O=>O.path===b.appConfig);P&&p(P==null?void 0:P.parsed),E.find(O=>O.path===b.appConfig)&&p(void 0)}}}),o.hook("page:finish",()=>{k(),o.payload.prerenderedAt&&A()}),o.hook("content:document-driven:finish",({route:d,page:g})=>{d.meta.studio_page_contentId=g==null?void 0:g._id}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:h(F())},"*"),setTimeout(()=>{k()},100)});function k(){const d=Array.from(window.document.querySelectorAll("[data-content-id]")).map($=>$.getAttribute("data-content-id")),g=Array.from(new Set([r.meta.studio_page_contentId,...d])).filter(Boolean);if(v.value===g[0]){v.value="";return}window.openContentInStudioEditor(g,{navigate:!0,pageContentId:r.meta.studio_page_contentId})}window.openContentInStudioEditor=(d,g={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...h(r),contentIds:d,...g}},"*")}}};export{Fe as useStudio};
