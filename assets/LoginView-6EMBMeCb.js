import{u,e as m,c as p,a as e,h as _,i as n,v as r,F as h,o as f}from"./index-thVH86nO.js";import{a as v}from"./axios-L6U4YIEh.js";var w={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/vue3-week6-2023-composition/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const b=e("h2",null,"登入頁面",-1),g={class:"container"},x={class:"row justify-content-center"},E=e("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),V={class:"col-8"},k={class:"form-floating mb-3"},P=e("label",{for:"username"},"Email address",-1),T={class:"form-floating"},y=e("label",{for:"password"},"Password",-1),D=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),I=e("p",{class:"mt-5 mb-3 text-muted"},"© 2023~∞ - 六角學院",-1),S={__name:"LoginView",setup(A){const{VITE_API:i}=w,l=u(),o=m({}),c=()=>{const a=`${i}admin/signin`;v.post(a,o.value).then(s=>{const{token:t,expired:d}=s.data;document.cookie=`hexToken=${t};expires=${new Date(d)}`,l.push("/admin/products")}).catch(s=>{alert(s.response.data.message)})};return(a,s)=>(f(),p(h,null,[b,e("div",g,[e("div",x,[E,e("div",V,[e("form",{id:"form",class:"form-signin",onSubmit:_(c,["prevent"])},[e("div",k,[n(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>o.value.username=t),id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[r,o.value.username]]),P]),e("div",T,[n(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>o.value.password=t),id:"password",placeholder:"Password",required:""},null,512),[[r,o.value.password]]),y]),D],32)])]),I])],64))}};export{S as default};