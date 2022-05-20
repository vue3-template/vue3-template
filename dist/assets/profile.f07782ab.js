var C=Object.defineProperty,$=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(r,o,e)=>o in r?C(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,g=(r,o)=>{for(var e in o||(o={}))q.call(o,e)&&_(r,e,o[e]);if(v)for(var e of v(o))E.call(o,e)&&_(r,e,o[e]);return r},y=(r,o)=>$(r,k(o));import{_ as U,d as x,r as c,c as d,o as B,e as N,f as a,g as u,h as D,t as S,i as w,q as T,A as j,U as A,E as F}from"./index.ffb5bdad.js";const I={class:"app-container"},M={name:"UserProfile"},O=x(y(g({},M),{setup(r){const o=c(),e=c({old:"",new:"",confirm:""}),t=c({loading:!1,type:{old:"password",new:"password",confirm:"password"}}),P={old:[{required:!0,message:"Old password required",trigger:["blur"]}],new:[{required:!0,message:"8 to 16 characters and a minimum of 2 character sets from these classes: [letters], [numbers], [special characters]",trigger:["blur"],validator:(l,s)=>S(s)?!0:new Error("8 to 16 characters and a minimum of 2 character sets from these classes: [letters], [numbers], [special characters]")}],confirm:[{required:!0,validator:(l,s)=>s===""?new Error("Please enter the password again"):s!==e.value.new?new Error("The two passwords do not match!"):!0,trigger:["blur"]}]};function p(l){t.value.type[l]==="password"?t.value.type[l]="":t.value.type[l]="password"}function b(){var l;(l=o.value)==null||l.validate(s=>s?(t.value.loading=!0,new A({oldPwd:e.value.old,newPwd:e.value.new}).request().then(()=>{t.value.loading=!1,F.success("Success")}).catch(()=>{t.value.loading=!1}),Promise.resolve(!0)):Promise.reject(!1))}return(l,s)=>{const m=d("el-input"),f=d("svg-icon"),i=d("el-form-item"),h=d("el-button"),V=d("el-form");return B(),N("div",I,[a(V,{ref_key:"form",ref:o,rules:D(P),model:e.value,"label-position":"top",style:{"margin-left":"40px"}},{default:u(()=>[a(i,{label:l.$t("userPage.oldPassword"),prop:"old"},{default:u(()=>[a(m,{modelValue:e.value.old,"onUpdate:modelValue":s[0]||(s[0]=n=>e.value.old=n),type:t.value.type.old,style:{width:"300px"}},null,8,["modelValue","type"]),w("span",{class:"show-pwd",onClick:s[1]||(s[1]=n=>p("old"))},[a(f,{"icon-class":"eye"})])]),_:1},8,["label"]),a(i,{label:l.$t("userPage.newPassword"),prop:"new"},{default:u(()=>[a(m,{modelValue:e.value.new,"onUpdate:modelValue":s[2]||(s[2]=n=>e.value.new=n),type:t.value.type.new,style:{width:"300px"},autocomplete:"off"},null,8,["modelValue","type"]),w("span",{class:"show-pwd",onClick:s[3]||(s[3]=n=>p("new"))},[a(f,{"icon-class":"eye"})])]),_:1},8,["label"]),a(i,{label:l.$t("userPage.rePassword"),prop:"confirm"},{default:u(()=>[a(m,{modelValue:e.value.confirm,"onUpdate:modelValue":s[4]||(s[4]=n=>e.value.confirm=n),type:t.value.type.confirm,style:{width:"300px"},autocomplete:"off"},null,8,["modelValue","type"]),w("span",{class:"show-pwd",onClick:s[5]||(s[5]=n=>p("confirm"))},[a(f,{"icon-class":"eye"})])]),_:1},8,["label"]),a(i,null,{default:u(()=>[a(h,{loading:t.value.loading,type:"primary",onClick:s[6]||(s[6]=n=>b())},{default:u(()=>[T(j(l.$t("save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])])}}}));var G=U(O,[["__scopeId","data-v-385b29ff"]]);export{G as default};
