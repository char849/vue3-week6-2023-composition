import{u as p,e as m,c as _,a as e,h as f,i,v as l,d as r,b as v,w as h,r as w,o as g}from"./index-chzXCAhz.js";import{a as b}from"./axios-L6U4YIEh.js";var k={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/vue3-week6-2023-composition/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const V={class:"container"},x=e("h2",null,"後台登入頁面",-1),I={class:"row"},P={class:"col-12"},E={class:"form-floating"},T=e("label",{for:"floatingInput"},"Email address",-1),D={class:"form-floating"},y=e("label",{for:"floatingPassword"},"Password",-1),A={class:"mt-5 mb-3 text-muted"},B=e("br",null,null,-1),L={__name:"LoginView",setup(C){const{VITE_API:d}=k,u=p(),t=m({}),c=()=>{const a=`${d}admin/signin`;b.post(a,t.value).then(o=>{const{token:n,expired:s}=o.data;document.cookie=`hexToken=${n};expires=${new Date(s)}`,u.push("/admin/products")}).catch(o=>{alert(o.response.data.message)})};return(a,o)=>{const n=w("router-link");return g(),_("div",V,[x,e("div",I,[e("div",P,[e("form",{class:"form-signin",onSubmit:o[2]||(o[2]=f((...s)=>a.signIn&&a.signIn(...s),["prevent"]))},[e("div",E,[i(e("input",{type:"email",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>t.value.username=s),id:"floatingInput",placeholder:"Password",required:""},null,512),[[l,t.value.username]]),T]),e("div",D,[i(e("input",{type:"password",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.password=s),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[l,t.value.password]]),y]),e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:c}," 登入 ")],32)])]),e("p",A,[r(" © 2024 - Charlotte Lee"),B,r(" vue 第六週主線任務 建立路由表 "),v(n,{class:"nav-link",to:"/"},{default:h(()=>[r("返回首頁")]),_:1})])])}}};export{L as default};
