(function(e){function t(t){for(var n,s,a=t[0],r=t[1],i=t[2],m=0,p=[];m<a.length;m++)s=a[m],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,a=1;a<o.length;a++){var r=o[a];0!==c[r]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},c={app:0},l=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var d=r;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0b02":function(e,t,o){e.exports=o.p+"img/cs.e9e0ba62.png"},"518c":function(e,t,o){e.exports=o.p+"img/unity.5192f639.png"},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function c(e,t,o,c,l,s){const a=Object(n["resolveComponent"])("navigation"),r=Object(n["resolveComponent"])("router-view"),i=Object(n["resolveComponent"])("HelloWorld");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(a),Object(n["createVNode"])(r),Object(n["createVNode"])(i,{msg:"Welcome to Your Vue.js App"})],64)}const l={class:"hello"};function s(e,t,o,c,s,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l)}var a={name:"HelloWorld",props:{msg:String},components:{}},r=(o("9d53"),o("6b0d")),i=o.n(r);const d=i()(a,[["render",s],["__scopeId","data-v-23b2b3f4"]]);var m=d;const p=e=>(Object(n["pushScopeId"])("data-v-5d3d4832"),e=e(),Object(n["popScopeId"])(),e),b={class:"nav-menu navigation"},v={class:"list"},u={class:"nav__item"},g={class:"list"},j={class:"nav__item"},h={class:"list"},f={class:"nav__item"},w=p(()=>Object(n["createElementVNode"])("div",{class:"indicator"},null,-1));function O(e,t,o,c,l,s){const a=Object(n["resolveComponent"])("font-awesome-icon"),r=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",b,[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",v,[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(r,{class:"router",to:"/"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{class:"icon",icon:"fa-brands fa-fort-awesome"})]),_:1})])]),Object(n["createElementVNode"])("li",g,[Object(n["createElementVNode"])("div",j,[Object(n["createVNode"])(r,{class:"router",to:"/edu"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{class:"icon",icon:"fa-solid fa-graduation-cap"})]),_:1})])]),Object(n["createElementVNode"])("li",h,[Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(r,{class:"router",to:"/portfolio"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,{class:"icon",icon:"fa-solid fa-cart-flatbed-suitcase"})]),_:1})])]),w])])}var k={methods:{changePage(){const e=document.querySelectorAll(".list");e.forEach(t=>t.addEventListener("click",this.activeLink(e)))},activeLink(e){e.forEach(e=>e.classList.remove("active")),this.item.add("active")}}};o("ce6c");const _=i()(k,[["render",O],["__scopeId","data-v-5d3d4832"]]);var y=_,E={name:"App",components:{HelloWorld:m,Navigation:y}};o("cdd1");const N=i()(E,[["render",c]]);var V=N,x=o("6c02");const B={class:"home__container"},S={class:"home__content-item"},C=Object(n["createElementVNode"])("div",{class:"home__title"},[Object(n["createElementVNode"])("h1",null,[Object(n["createTextVNode"])("Hello, "),Object(n["createElementVNode"])("span",{class:"bg-clip-text text-fill-transparent linear-gradient"}," my friend! ")])],-1),z={class:"home__sub-title"},Q=Object(n["createTextVNode"])("My name's Anastasia. I'm a junior frontend-developer located in Irkutsk "),A=Object(n["createElementVNode"])("br",null,null,-1),P=Object(n["createTextVNode"])(" At the moment I'm looking for a job 😎 "),T=Object(n["createElementVNode"])("h3",null,"🚀Skills:",-1),M={class:"social-links__skills-content"},I={class:"social-links__content"},U=Object(n["createElementVNode"])("div",{class:"home__text-skills",style:{}},[Object(n["createElementVNode"])("h4",null,"Frontend Development"),Object(n["createElementVNode"])("span",null,"HTML, CSS, SASS, Bootstrap, Vue.js, Vuex"),Object(n["createElementVNode"])("hr"),Object(n["createElementVNode"])("h4",null,"UI\\UX Design"),Object(n["createElementVNode"])("span",null,"Photoshop, Illustrator, Sketch, Figma, User Research, Usability Testing."),Object(n["createElementVNode"])("hr"),Object(n["createElementVNode"])("h4",null,"Уверенный пользователь ПК )))"),Object(n["createElementVNode"])("span",null,"Быстрообучаемый/ Человек, на которого можно положиться/ Приносящий удачу")],-1);function L(e,t,o,c,l,s){const a=Object(n["resolveComponent"])("font-awesome-icon"),r=Object(n["resolveComponent"])("skills"),i=Object(n["resolveComponent"])("social-links"),d=Object(n["resolveComponent"])("blob");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",B,[Object(n["createElementVNode"])("div",S,[C,Object(n["createElementVNode"])("div",z,[Object(n["createElementVNode"])("p",null,[Q,Object(n["createVNode"])(a,{icon:"fa-solid fa-otter"}),A,P]),T,Object(n["createElementVNode"])("div",M,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.skills,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(r,{key:e,item:e},null,8,["item"]))),128))]),Object(n["createElementVNode"])("div",I,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.links,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:e,link:e},null,8,["link"]))),128))])]),U]),Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(d)])])}const H={style:{"text-align":"center"}},F=["src"],D={class:"skills__item-text"},J={key:0};function W(e,t,o,c,l,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",H,[Object(n["createElementVNode"])("img",{src:o.item.src,onMouseover:t[0]||(t[0]=(...e)=>s.mouseover&&s.mouseover(...e)),onMouseleave:t[1]||(t[1]=(...e)=>s.mouseleave&&s.mouseleave(...e)),alt:"just for fun",width:"60",height:"50"},null,40,F),Object(n["createElementVNode"])("div",D,[Object(n["createVNode"])(n["Transition"],null,{default:Object(n["withCtx"])(()=>[l.message?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",J,Object(n["toDisplayString"])(o.item.alt),1)):Object(n["createCommentVNode"])("",!0)]),_:1})])])}var q={props:["item"],data(){return{message:!1}},methods:{mouseover:function(){this.message=!0},mouseleave:function(){this.message=!1}}};const R=i()(q,[["render",W]]);var Z=R;const G={class:"blob"},X=Object(n["createElementVNode"])("svg",{viewBox:"200 -100 500 500",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",id:"blobSvg"},[Object(n["createElementVNode"])("g",{transform:"translate(186, -57)"},[Object(n["createElementVNode"])("defs",null,[Object(n["createElementVNode"])("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[Object(n["createElementVNode"])("stop",{offset:"0%",style:{"stop-color":"#b620e0"}}),Object(n["createElementVNode"])("stop",{offset:"100%",style:{"stop-color":"#32c5ff"}})])]),Object(n["createElementVNode"])("path",{d:"M366,316.5Q327,383,243,395Q159,407,91.5,328.5Q24,250,99,184Q174,118,253.5,111.5Q333,105,369,177.5Q405,250,366,316.5Z",fill:"url(#gradient)"},[Object(n["createElementVNode"])("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:"M403.5,323Q334,396,240,413.5Q146,431,94,340.5Q42,250,84.5,143.5Q127,37,229.5,72Q332,107,402.5,178.5Q473,250,403.5,323Z;\r\n                        M366,316.5Q327,383,243,395Q159,407,91.5,328.5Q24,250,99,184Q174,118,253.5,111.5Q333,105,369,177.5Q405,250,366,316.5Z;\r\n                        M403.5,323Q334,396,240,413.5Q146,431,94,340.5Q42,250,84.5,143.5Q127,37,229.5,72Q332,107,402.5,178.5Q473,250,403.5,323Z;\r\n                        "})])])],-1),K=[X];function Y(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",G,K)}const $={},ee=i()($,[["render",Y]]);var te=ee;const oe={class:"social-links__container"},ne={class:"social-links__item-fontAwsm"},ce=["href"],le=["id"];function se(e,t,o,c,l,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",oe,[Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("a",{href:o.link.link},[Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(o.link.fontAwesome),id:o.link.name},null,10,le)],8,ce)])])}var ae={props:["link"]};const re=i()(ae,[["render",se]]);var ie=re,de={data(){return{message:!1,skills:[{src:"https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",alt:"Vue.js"},{src:"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",alt:"Semicolons"},{src:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",alt:"Just for fun"},{src:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",alt:"It's important!"}],links:[{name:"Telegram",link:"https://t.me/Mario_cartoon",fontAwesome:"fa-brands fa-telegram"},{name:"Email",link:"mailto:ya.np-98@yandex.ru",fontAwesome:"fa-solid fa-at"},{name:"GitHub",link:"https://github.com/Mario-cartoon",fontAwesome:"fa-brands fa-github"}]}},methods:{mouseover:function(){this.message=!0},mouseleave:function(){this.message=!1}},components:{Blob:te,SocialLinks:ie,Skills:Z}};const me=i()(de,[["render",L]]);var pe=me;const be={class:"home__container"},ve=Object(n["createStaticVNode"])('<div class="home__content-item"><div class="home__title"><h1>| <span class="bg-clip-text text-fill-transparent linear-gradient"> Education </span></h1></div><div class="home__text-skills" style=""><div class="education__content-text"><h3>English &amp; Computer Science</h3><small>Irkutsk State University</small></div><small>Sep, 2016 — Jun, 2021</small><br><br><span>BSc (Hons) in Computer Science. English: A2. </span><hr><div class="education__content-text"><h3>Web development</h3><small>ITMO University</small></div><small>Sep, 2019 — Dec, 2019</small><br><br><span>Course from the ITMO University.</span></div><div class="home__title"><h1>| <span class="bg-clip-text text-fill-transparent linear-gradient"> Experience </span></h1></div><div class="home__text-skills" style=""><div class="education__content-text"><h3>Auditor</h3><small>Sber</small></div><small>Jul, 2021 — Jun, 2022</small><br><br><span>Support for an existing site + refinement of new functionality (Django Rest Framework,Vue.js). Participation in sprints, team development of the Process Mining library (Python), UX/UI development.</span><hr><div class="education__content-text"><h3>CS50x Teacher</h3><small>Coddy</small></div><small>Feb, 2021 — Jul, 2021</small><br><br><span>Taught the Harvard CS50 course from Coddy.</span></div></div>',1),ue={style:{width:"100%"},class:"cool__backgraund"};function ge(e,t,o,c,l,s){const a=Object(n["resolveComponent"])("dv-d");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",be,[ve,Object(n["createElementVNode"])("div",ue,[Object(n["createVNode"])(a)])])}var je=o("c1fc"),he=o.n(je);const fe=Object(n["createElementVNode"])("img",{style:{width:"100px",height:"50px"},src:he.a,alt:""},null,-1);function we(e,t){const o=Object(n["resolveComponent"])("marquee");return Object(n["openBlock"])(),Object(n["createBlock"])(o,{behavior:"alternate",scrollamount:"10"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{behavior:"alternate",scrollamount:"10",direction:"down"},{default:Object(n["withCtx"])(()=>[fe]),_:1})]),_:1})}const Oe={},ke=i()(Oe,[["render",we]]);var _e=ke,ye={components:{DvD:_e}};const Ee=i()(ye,[["render",ge]]);var Ne=Ee;const Ve={class:"portfolio__table"},xe=Object(n["createElementVNode"])("div",{class:"home__title"},[Object(n["createElementVNode"])("h1",{style:{margin:"0","text-align":"left"}},[Object(n["createElementVNode"])("span",{class:"bg-clip-text text-fill-transparent linear-gradient"}," Practice ")])],-1);function Be(e,t,o,c,l,s){const a=Object(n["resolveComponent"])("portfolio-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ve,[xe,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.portfolio,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:e,item:e},null,8,["item"]))),128))])}const Se={class:"portfolio__row"},Ce={class:"portfolio__main-img"},ze=["src"],Qe={class:"portfolio__row-text"},Ae={class:"bg-clip-text text-fill-transparent linear-gradient"},Pe={class:"portfolio__stack-tech"},Te=["src"],Me=["href"],Ie=Object(n["createElementVNode"])("img",{style:{width:"30px"},id:"Figma",src:"https://www.vectorlogo.zone/logos/figma/figma-icon.svg",alt:""},null,-1),Ue=[Ie];function Le(e,t,o,c,l,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Se,[Object(n["createElementVNode"])("div",Ce,[Object(n["createElementVNode"])("img",{src:o.item.pic,alt:""},null,8,ze)]),Object(n["createElementVNode"])("div",Qe,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("h1",Ae,Object(n["toDisplayString"])(o.item.name),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(o.item.desc),1)]),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",Pe,[Object(n["createElementVNode"])("div",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.item.stack,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:e,src:e,alt:""},null,8,Te))),128))]),o.item.link?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:o.item.link},Ue,8,Me)):Object(n["createCommentVNode"])("",!0)])])])])}var He={props:["item"]};const Fe=i()(He,[["render",Le]]);var De=Fe,Je={data(){return{portfolio:[{name:"CS50x landing page",desc:"The landing page was designed specifically for the CS50 course as an exam for the module",stack:["https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg","https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"],link:"https://www.figma.com/file/OL81r6vrB11QswtSNwEHiH/cs50x?node-id=0%3A1",pic:o("0b02")},{name:"Voting Application",desc:"It was developed as a replacement for Google forms and survey monkey",link:"https://www.figma.com/file/cJmJ4VZba5UBy9Ba4zIwXG/VoteApp?node-id=136%3A224",stack:["https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg","https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg","https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg","https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg","https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg","https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg","https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"],pic:o("9170")},{name:"NTA 2.0",desc:"Redesign of the NTA",link:"https://www.figma.com/file/IjcaQ9WK2CRLcirZg5MMdj/NTA_ws?node-id=0%3A1",stack:["https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg","https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"],pic:o("8645")},{name:"Service NTA",desc:"The site is an ERP system, namely a service for downloading, checking and publishing articles. Which implements the collection of statistics. Also, all the necessary functionality for working with the service is implemented from the interface (filters, pagination, chat with the reviewer, deletion and editing, graphical representation for displaying statistics data, data upload, etc.",stack:["https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg","https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg","https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg","https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg","https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg","https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg","https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"],pic:o("bea9")},{name:"Process Mining",desc:"Team development of new modules for the in-bank Process Mining software library (Python (pandas, dash, graphviz, plotly)).",stack:["https://www.vectorlogo.zone/logos/python/python-icon.svg","https://www.vectorlogo.zone/logos/plot_ly/plot_ly-icon.svg","https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg"],pic:o("a270")},{name:"Unity projects",desc:"Projects developed during university studies. Technology stack: Unity, C#, Photon PUN.",stack:["https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"],pic:o("518c")}]}},components:{PortfolioTable:De}};const We=i()(Je,[["render",Be]]);var qe=We;const Re=[{path:"/",name:"Home",component:pe},{path:"/edu",name:"Education",component:Ne},{path:"/portfolio",name:"Portfolio",component:qe}],Ze=Object(x["a"])({history:Object(x["b"])("/portfolio/"),routes:Re});var Ge=Ze,Xe=o("ecee"),Ke=o("ad3d"),Ye=o("c074"),$e=o("f2d1"),et=o("b702"),tt=o("e62f");o("1bd9");Xe["d"].add(Ye["a"],et["a"],$e["a"]),Xe["b"].watch(),Object(n["createApp"])(V).component("font-awesome-icon",Ke["a"]).use(tt["a"]).use(Ge).mount("#app")},8645:function(e,t,o){e.exports=o.p+"img/nta.eba4abbb.png"},9170:function(e,t,o){e.exports=o.p+"img/voteapp.15f382f2.png"},"9d53":function(e,t,o){"use strict";o("c964")},a270:function(e,t,o){e.exports=o.p+"img/pm.67a257ef.png"},b881:function(e,t,o){},bea9:function(e,t,o){e.exports=o.p+"img/service.ff655d95.png"},c1fc:function(e,t,o){e.exports=o.p+"img/dvd.df2d9659.png"},c964:function(e,t,o){},cdd1:function(e,t,o){"use strict";o("eb89")},ce6c:function(e,t,o){"use strict";o("b881")},eb89:function(e,t,o){}});
//# sourceMappingURL=app.f5cf0afa.js.map