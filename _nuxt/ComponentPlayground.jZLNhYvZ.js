import{L as m,H as p,d as c,ac as i,r as l,M as e,l as u}from"./entry.7EEvQu84.js";import{u as d}from"./asyncData.MSAvu6gi.js";import f from"./Ellipsis.Khcds6hW.js";import y from"./ComponentPlaygroundData.2GMPZQo2.js";import"./TabsHeader.tesr3c1O.js";import"./ComponentPlaygroundProps.vXMmj4zH.js";import"./ProseH4.b59L5_gi.js";import"./ProseCodeInline.sGdWM_jO.js";import"./Badge.CA9ahA6d.js";import"./MDCSlot.wzmcTgTz.js";import"./slot.0J_LjfiR.js";import"./ProseP.y9huq9QG.js";import"./index.rQHu4kQZ.js";import"./ComponentPlaygroundSlots.vue.UIf2a1OF.js";import"./ComponentPlaygroundTokens.vue.lRao7TrN.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=u(h,[["__scopeId","data-v-af8cd031"]]);export{E as default};
