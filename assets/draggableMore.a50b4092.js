import{d as c}from"./vuedraggable.umd.fcf32e69.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{a6 as i,aS as h,aT as s,c as d,aU as l,N as r,aM as v,aY as _,b2 as u,b3 as C}from"./index.7beeb6d5.js";const m=a=>(u("data-v-2af1b118"),a=a(),C(),a),b={class:"itxst"},f={class:"col"},S=m(()=>s("div",{class:"title"},"\u56FD\u5185\u7F51\u7AD9",-1)),x={class:"item"},y={class:"col"},E=m(()=>s("div",{class:"title"},"\u4F60\u53EF\u4EE5\u628A\u5DE6\u8FB9\u7684\u5143\u7D20\u62D6\u5230\u53F3\u8FB9",-1)),k={class:"item"},I={__name:"draggableMore",setup(a){const e=i([{id:1,name:"www.itxst.com"},{id:2,name:"www.jd.com"},{id:3,name:"www.baidu.com"},{id:4,name:"www.taobao.com"}]),t=i([{id:1,name:"www.google.com"},{id:2,name:"www.msn.com"},{id:3,name:"www.ebay.com"},{id:4,name:"www.yahoo.com"}]),n=()=>{console.log("\u5F00\u59CB\u62D6\u62FD")},w=()=>{console.log("arr1\u7ED3\u675F\u62D6\u62FD",e)},g=()=>{console.log("arr2\u7ED3\u675F\u62D6\u62FD",t)};return(M,B)=>(v(),h("div",null,[s("div",b,[s("div",f,[S,d(r(c),{list:e,group:"site",animation:"300",dragClass:"dragClass",ghostClass:"ghostClass",chosenClass:"chosenClass",onStart:n,onEnd:w,"item-key":"name"},{item:l(({element:o})=>[s("div",x,_(o.name),1)]),_:1},8,["list"])]),s("div",y,[E,d(r(c),{list:t,group:"site",animation:"100",dragClass:"dragClass",ghostClass:"ghostClass",chosenClass:"chosenClass",onStart:n,onEnd:g,"item-key":"name"},{item:l(({element:o})=>[s("div",k,_(o.name),1)]),_:1},8,["list"])])])]))}};var D=p(I,[["__scopeId","data-v-2af1b118"]]);export{D as default};
