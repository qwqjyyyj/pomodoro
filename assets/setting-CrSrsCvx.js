import{u as te}from"./settings-DgiN6tbU.js";import{V as q,a as oe,b as H}from"./route-block-BsDWy8Bv.js";import{V as K,b as ne,c as M,d as ue}from"./VInput-BrC7OX5U.js";import{p as _,I as R,a4 as re,m as Q,a5 as ie,z as se,k as B,W as D,G as T,b as s,a6 as de,a7 as ce,a8 as fe,J as v,l as x,e as a,a9 as ve,aa as z,r as me,X as W,Q as P,q as ye,Y as Ve,F as U,ab as be,ac as Ce,ad as ge,ae as A,K as Se,H as ke,af as Ie,$ as he,ag as Pe,o as G,d as _e,w as S,a as y,c as J,f as Re,g as F,h as Be,ah as xe,t as Ae}from"./index-BmWrwUaK.js";const X=Symbol.for("vuetify:selection-control-group"),$=_({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:R,trueIcon:R,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:re},...Q(),...ie(),...se()},"SelectionControlGroup"),Ge=_({...$({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Fe=B()({name:"VSelectionControlGroup",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:d}=o;const l=D(e,"modelValue"),n=T(),r=s(()=>e.id||`v-selection-control-group-${n}`),u=s(()=>e.name||r.value),t=new Set;return de(X,{modelValue:l,forceUpdate:()=>{t.forEach(i=>i())},onForceUpdate:i=>{t.add(i),ce(()=>{t.delete(i)})}}),fe({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:s(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:u,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),x(()=>{var i;return a("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(i=d.default)==null?void 0:i.call(d)])}),{}}}),Y=_({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...Q(),...$()},"VSelectionControl");function we(e){const o=Ce(X,void 0),{densityClasses:d}=ge(e),l=D(e,"modelValue"),n=s(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),r=s(()=>e.falseValue!==void 0?e.falseValue:!1),u=s(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=s({get(){const c=o?o.modelValue.value:l.value;return u.value?A(c).some(f=>e.valueComparator(f,n.value)):e.valueComparator(c,n.value)},set(c){if(e.readonly)return;const f=c?n.value:r.value;let V=f;u.value&&(V=c?[...A(l.value),f]:A(l.value).filter(m=>!e.valueComparator(m,n.value))),o?o.modelValue.value=V:l.value=V}}),{textColorClasses:i,textColorStyles:k}=Se(s(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:I,backgroundColorStyles:b}=ke(s(()=>t.value&&!e.error&&!e.disabled?e.color:e.baseColor)),g=s(()=>t.value?e.trueIcon:e.falseIcon);return{group:o,densityClasses:d,trueValue:n,falseValue:r,model:t,textColorClasses:i,textColorStyles:k,backgroundColorClasses:I,backgroundColorStyles:b,icon:g}}const w=B()({name:"VSelectionControl",directives:{Ripple:ve},inheritAttrs:!1,props:Y(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:d,slots:l}=o;const{group:n,densityClasses:r,icon:u,model:t,textColorClasses:i,textColorStyles:k,backgroundColorClasses:I,backgroundColorStyles:b,trueValue:g}=we(e),c=T(),f=z(!1),V=z(!1),m=me(),h=s(()=>e.id||`input-${c}`),O=s(()=>!e.disabled&&!e.readonly);n==null||n.onForceUpdate(()=>{m.value&&(m.value.checked=t.value)});function N(C){O.value&&(f.value=!0,Ie(C.target,":focus-visible")!==!1&&(V.value=!0))}function E(){f.value=!1,V.value=!1}function Z(C){C.stopPropagation()}function ee(C){if(!O.value){m.value&&(m.value.checked=t.value);return}e.readonly&&n&&he(()=>n.forceUpdate()),t.value=C.target.checked}return x(()=>{var j,p;const C=l.label?l.label({label:e.label,props:{for:h.value}}):e.label,[le,ae]=W(d),L=a("input",P({ref:m,checked:t.value,disabled:!!e.disabled,id:h.value,onBlur:E,onFocus:N,onInput:ee,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},ae),null);return a("div",P({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},r.value,e.class]},le,{style:e.style}),[a("div",{class:["v-selection-control__wrapper",i.value],style:k.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:I,backgroundColorStyles:b}),ye(a("div",{class:["v-selection-control__input"]},[((p=l.input)==null?void 0:p.call(l,{model:t,textColorClasses:i,textColorStyles:k,backgroundColorClasses:I,backgroundColorStyles:b,inputNode:L,icon:u.value,props:{onFocus:N,onBlur:E,id:h.value}}))??a(U,null,[u.value&&a(be,{key:"icon",icon:u.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&a(K,{for:h.value,onClick:Z},{default:()=>[C]})])}),{isFocused:f,input:m}}}),De=_({...Y({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Te=B()({name:"VRadio",props:De(),setup(e,o){let{slots:d}=o;return x(()=>{const l=w.filterProps(e);return a(w,P(l,{class:["v-radio",e.class],style:e.style,type:"radio"}),d)}),{}}}),Ue=_({height:{type:[Number,String],default:"auto"},...ne(),...Pe($(),["multiple"]),trueIcon:{type:R,default:"$radioOn"},falseIcon:{type:R,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),$e=B()({name:"VRadioGroup",inheritAttrs:!1,props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:d,slots:l}=o;const n=T(),r=s(()=>e.id||`radio-group-${n}`),u=D(e,"modelValue");return x(()=>{const[t,i]=W(d),k=M.filterProps(e),I=w.filterProps(e),b=l.label?l.label({label:e.label,props:{for:r.value}}):e.label;return a(M,P({class:["v-radio-group",e.class],style:e.style},t,k,{modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,id:r.value}),{...l,default:g=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:m}=g;return a(U,null,[b&&a(K,{id:c.value},{default:()=>[b]}),a(Fe,P(I,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:m.value,"aria-labelledby":b?c.value:void 0,multiple:!1},i,{modelValue:u.value,"onUpdate:modelValue":h=>u.value=h}),l)])}})}),{}}}),Oe=["src"],Ne={__name:"setting",setup(e){const o=te();return(d,l)=>{const n=xe("theand");return G(),_e(Be,null,{default:S(()=>[a(oe,null,{default:S(()=>[a(q,{cols:"12"},{default:S(()=>l[1]||(l[1]=[y("h1",{class:"text-center"},"鈴聲設定",-1)])),_:1}),a(q,{cols:"12"},{default:S(()=>[a(ue,null,{default:S(()=>[a(n,null,{default:S(()=>l[2]||(l[2]=[y("tr",null,[y("th",null,"名稱"),y("th",null,"試聽"),y("th",null,"選擇")],-1)])),_:1}),y("tbody",null,[(G(!0),J(U,null,Re(F(o).alarms,r=>(G(),J("tr",{key:r.id},[y("td",null,Ae(r.name),1),y("td",null,[y("audio",{src:r.file,controls:""},null,8,Oe)]),y("td",null,[a($e,{modelValue:F(o).selected,"onUpdate:modelValue":l[0]||(l[0]=u=>F(o).selected=u),"hide-details":""},{default:S(()=>[a(Te,{value:r.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof H=="function"&&H(Ne);export{Ne as default};
