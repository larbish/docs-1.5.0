import{_ as c}from"./entry.DhTZ8yg5.js";import{v as u,t as d}from"./index.asHQmR3e.js";import"./MDCRenderer.dFqmkqwW.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./Card.qk4MSfNN.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(r,s,t,h){var n,i;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.0Wt0tDRZ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({useShikiHighlighter:e})=>e().getHighlightedAST(r,s,t,{highlights:h}));try{return await $fetch("/api/_mdc/highlight",{params:{code:r,lang:s,theme:JSON.stringify(t),highlights:JSON.stringify(h)}})}catch(e){if(((n=e==null?void 0:e.response)==null?void 0:n.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(i=this.highlighter)==null?void 0:i.call(this,r,s,t,h)}return Promise.resolve({tree:[{type:"text",value:r}],className:"",style:""})}};function y(r={}){const s={...f,...r};return async t=>{const h=[],n=[];u(t,i=>{var e,o;return["pre","code"].includes(i.tagName)&&!!((e=i.properties)!=null&&e.language||(o=i.properties)!=null&&o.highlights)},i=>{const e=i,o=s.highlighter(d(i),e.properties.language,s.theme,e.properties.highlights??[]).then(({tree:a,className:p,style:l,inlineStyle:g})=>{var m;e.properties.className=((e.properties.className||"")+" "+p).trim(),e.properties.style=((e.properties.style||"")+" "+g).trim(),((m=e.children[0])==null?void 0:m.tagName)==="code"?e.children[0].children=a:e.children=a[0].children||a[0],l&&n.push(l)});h.push(o)}),h.length&&(await Promise.all(h),t.children.push({type:"element",tagName:"style",children:[{type:"text",value:k(n.join(""))}],properties:{}}))}}const k=r=>{const s=r.split("}").filter(t=>!!t.trim()).map(t=>t.trim()+"}");return Array.from(new Set(s)).join("")},x={},P={highlight:{instance:y,options:{src:"/home/runner/work/docs-1.5.0/docs-1.5.0/node_modules/.pnpm/@nuxtjs+mdc@0.3.0/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},b={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"},preload:["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{b as highlight,P as rehypePlugins,x as remarkPlugins};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./highlighter.0Wt0tDRZ.js","./entry.DhTZ8yg5.js","./entry.3Kv7xVxN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
