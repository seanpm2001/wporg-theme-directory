import*as e from"@wordpress/interactivity";import*as t from"https://playground.wordpress.net/client/index.js";var a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const r=(n={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},s={},a.d(s,n),s);var n,s;const o=(e=>{var t={};return a.d(t,e),t})({startPlaygroundWeb:()=>t.startPlaygroundWeb});let i=!1;(0,r.store)("wporg/themes/preview",{state:{get isLoaded(){return(0,r.getContext)().isLoaded}},actions:{onLoad(){const e=(0,r.getContext)();e.isLoaded=!0,wp.a11y?.speak(e.label.postNavigate,"polite")},async navigateIframe(e){const t=(0,r.getContext)(),{selectedElement:a}=e,n="wporg-select"===e.type;if(!a?.dataset)return;t.isLoaded=t.isPlayground,a.dataset.style_variation&&(t.selected.style_variation=n?a.dataset.style_variation:null),a.dataset.pattern_name&&(t.selected.pattern_name=n?a.dataset.pattern_name:null);const s=new URLSearchParams("");t.selected.style_variation&&s.set("style_variation",t.selected.style_variation),t.selected.pattern_name&&(s.set("pattern_name",t.selected.pattern_name),s.set("page_id",9999));const o=new URL(t.previewBase);if(o.search=s.toString(),t.url=o,i){const e=await i.getCurrentURL(),t=new URLSearchParams(e.replace(/^[/]?/,""));s.entries().forEach((([e,a])=>{t.set(e,a)})),i.goTo("/?"+t.toString()),s.set("playground-preview","1")}const l=new URL(t.permalink);s.delete("page_id"),l.search=s.toString(),window.history.replaceState({},"",l)},startPlayground(){const e=(0,r.getContext)(),{ref:t}=(0,r.getElement)();e.isLoaded=!0,(0,o.startPlaygroundWeb)({iframe:t,remoteUrl:"https://playground.wordpress.net/remote.html",blueprint:JSON.parse(e.blueprint)}).then((t=>{i=t;const a=new URL(e.url);a.searchParams.size&&i.goTo("/?"+a.searchParams.toString())}))}}});