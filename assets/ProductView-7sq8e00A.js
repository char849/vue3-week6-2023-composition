import{a as r}from"./axios-L6U4YIEh.js";import{e as _,f as d,c as u,a as e,t,o as p}from"./index-chzXCAhz.js";var h={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"charlotte-lee849",BASE_URL:"/vue3-week6-2023-composition/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const v={class:"container"},m={class:"row"},g=e("h2",null,"單一產品頁面",-1),f={class:"col-sm-6"},E=["src"],P={class:"col-sm-6"},V={class:"badge bg-primary rounded-pill"},I={class:"h5"},T={class:"h6"},A={class:"h5"},S={__name:"ProductView",setup(x){const{VITE_API:i,VITE_PATH:l}=h,s=_({}),n=a=>{const c=`${i}api/${l}/product/${a}`;r.get(c).then(o=>{s.value=o.data.product}).catch(o=>{alert(o.response.data.message)})};return d(()=>{n()}),(a,c)=>(p(),u("div",v,[e("div",m,[g,e("div",f,[e("img",{class:"img-fluid",src:s.value.imageUrl,alt:""},null,8,E)]),e("div",P,[e("span",V,t(s.value.category),1),e("p",null,"商品描述："+t(s.value.description),1),e("p",null,"商品內容："+t(s.value.content),1),e("div",I,t(s.value.origin_price)+" 元",1),e("del",T,"原價 "+t(s.value.origin_price)+" 元",1),e("div",A,"現在只要 "+t(s.value.price)+" 元",1)])])]))}};export{S as default};
