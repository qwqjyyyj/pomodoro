import{_ as U,u as B,o as d,c as b,a as e,n as a,r as P,s as w,b as S,d as T,w as i,e as c,t as F,f as G,F as H,V as v,g,h as D}from"./index-DyLV-Hcx.js";import{u as R}from"./list-BSU--vi0.js";import{u as $}from"./settings-BSri1a71.js";import{b as _,V as m,a as j}from"./route-block-D71IsmeB.js";const q={class:"digit",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"595.28px",height:"841.89px",viewBox:"0 0 595.28 841.89","enable-background":"new 0 0 595.28 841.89","xml:space":"preserve"},J={__name:"Digit",props:{data:{type:String,default(){return""}},color:{type:String,default(){return"white"}}},setup(t){return B(l=>({"213fbcda":t.color})),(l,n)=>(d(),b("svg",q,[e("path",{class:a([{active:"02356789".includes(t.data)},"figit-a"]),fill:"#00A0E9",d:`M565.022,15.1c0,8.339-9.76,15.1-21.794,15.1H52.051c-12.037,0-21.793-6.761-21.793-15.1l0,0
	c0-8.339,9.756-15.1,21.793-15.1h491.178C555.263,0,565.022,6.761,565.022,15.1L565.022,15.1z`},null,2),e("path",{class:a([{active:"0235689".includes(t.data)},"digit-b"]),fill:"#00A0E9",d:`M565.022,826.445c0,8.338-9.76,15.099-21.794,15.099H52.051c-12.037,0-21.793-6.761-21.793-15.099l0,0
	c0-8.341,9.756-15.099,21.793-15.099h491.178C555.263,811.347,565.022,818.104,565.022,826.445L565.022,826.445z`},null,2),e("path",{class:a([{active:"2345689".includes(t.data)},"digit-c"]),fill:"#00A0E9",d:`M565.022,420.772c0,8.34-9.76,15.1-21.794,15.1H52.051c-12.037,0-21.793-6.76-21.793-15.1l0,0
	c0-8.339,9.756-15.101,21.793-15.101h491.178C555.263,405.672,565.022,412.434,565.022,420.772L565.022,420.772z`},null,2),e("path",{class:a([{active:"045689".includes(t.data)},"digit-d"]),fill:"#00A0E9",d:`M15.1,400.956c-8.339,0-15.1-6.76-15.1-15.099V45.52c0-8.339,6.761-15.1,15.1-15.1l0,0
	c8.339,0,15.1,6.761,15.1,15.1v340.337C30.2,394.196,23.439,400.956,15.1,400.956L15.1,400.956z`},null,2),e("path",{class:a([{active:"01234789".includes(t.data)},"digit-e"]),fill:"#00A0E9",d:`M580.182,400.956c-8.34,0-15.101-6.76-15.101-15.099V45.52c0-8.339,6.761-15.1,15.101-15.1l0,0
	c8.338,0,15.099,6.761,15.099,15.1v340.337C595.28,394.196,588.52,400.956,580.182,400.956L580.182,400.956z`},null,2),e("path",{class:a([{active:"013456789".includes(t.data)},"digit-f"]),fill:"#00A0E9",d:`M580.182,809.046c-8.34,0-15.101-6.758-15.101-15.099V453.61c0-8.339,6.761-15.099,15.101-15.099l0,0
	c8.338,0,15.099,6.76,15.099,15.099v340.337C595.28,802.288,588.52,809.046,580.182,809.046L580.182,809.046z`},null,2),e("path",{class:a([{active:"0268".includes(t.data)},"digit-g"]),fill:"#00A0E9",d:`M15.1,809.046c-8.339,0-15.1-6.758-15.1-15.099V453.61c0-8.339,6.761-15.099,15.1-15.099l0,0
	c8.339,0,15.1,6.76,15.1,15.099v340.337C30.2,802.288,23.439,809.046,15.1,809.046L15.1,809.046z`},null,2),e("circle",{class:a({active:t.data===":"}),fill:"#00A0E9",cx:"297.64",cy:"623.779",r:"33.105"},null,2),e("circle",{class:a({active:t.data===":"}),fill:"#00A0E9",cx:"297.64",cy:"215.689",r:"33.105"},null,2)]))}},K=U(J,[["__scopeId","data-v-38d5c6a2"]]),Q={__name:"index",setup(t){const l={STOP:0,COUNTING:1,PAUSE:2},n=P(l.STOP),h=R(),{current:u,items:r,timeleft:o}=w(h),{setCurrentItem:A,countdown:V,setFinishItem:k}=h,E=$(),{selectedFile:y}=w(E),I=S(()=>u.value.length>0?u.value:r.value.length>0?"點擊開始":"沒有事項");let f=0;const p=()=>{n.value===l.STOP&&r.value.length>0&&A(),n.value=l.COUNTING,f=setInterval(()=>{V(),o.value<0&&x()},1e3)},x=()=>{clearInterval(f),n.value=l.STOP;const s=new Audio;s.src=y.value,s.play(),k(),r.value.length>0&&p()},N=()=>{clearInterval(f),n.value=l.PAUSE},L=S(()=>{const s=Math.floor(o.value/60).toString().padStart(2,"0"),C=(o.value%60).toString().padStart(2,"0");return s+":"+C});return(s,C)=>{const z=K;return d(),T(D,null,{default:i(()=>[c(j,null,{default:i(()=>[c(m,{cols:"12"},{default:i(()=>[e("h1",null,"目前事項 "+F(I.value),1)]),_:1}),c(m,{cols:"12"},{default:i(()=>[(d(!0),b(H,null,G(L.value,(M,O)=>(d(),T(z,{key:O,data:M,color:"white"},null,8,["data"]))),128))]),_:1}),c(m,{cols:"12"},{default:i(()=>[c(v,{icon:"mdi-play",disabled:n.value===l.COUNTING||g(u).length===0&&g(r).length===0,onClick:p},null,8,["disabled"]),c(v,{icon:"mdi-pause",disabled:n.value!==l.COUNTING,onClick:N},null,8,["disabled"]),c(v,{icon:"mdi-skip-next",disabled:g(u).length===0,onClick:x},null,8,["disabled"])]),_:1})]),_:1})]),_:1})}}};typeof _=="function"&&_(Q);export{Q as default};
