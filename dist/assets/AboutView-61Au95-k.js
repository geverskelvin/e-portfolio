import{_ as i,o as s,c as n,a as e,b as p,t as m,p as u,d as h,F as b,r as v,n as $,e as f,f as c,g as k}from"./index-BxvG96U2.js";const S="/assets/photo-COOKUAky.png",g={name:"IntroductionText",setup(){return{name:"Kelvin Gevers"}}},w=t=>(u("data-v-61b1a1a3"),t=t(),h(),t),y={class:"flex mb-32"},I={class:"intro flex-1 ml-96 mr-20 mt-4"},E=w(()=>e("img",{class:"w-48 mr-96",src:S},null,-1));function B(t,a,r,l,d,_){return s(),n("div",y,[e("p",I,[p(" Hello! I'm "),e("strong",null,m(l.name),1),p(", a passionate Blockchain and AI Engineer. I am constantly eager to learn and explore new technologies to push the boundaries of what is possible. I have a diverse background in computer science with a strong focus on blockchain technology and artificial intelligence. My journey started with a deep curiosity about how things work and a desire to create innovative solutions to real-world problems. ")]),E])}const D=i(g,[["render",B],["__scopeId","data-v-61b1a1a3"]]),L={name:"SkillsGrid",data(){return{skills:[{name:"Python",icon:"fab fa-python"},{name:"JavaScript",icon:"fab fa-js"},{name:"HTML5",icon:"fab fa-html5"},{name:"CSS3",icon:"fab fa-css3-alt"},{name:"Raspberry Pi",icon:"fab fa-raspberry-pi"},{name:"Solidity",icon:"fas fa-file-code"},{name:"Java",icon:"fab fa-java"},{name:"SQL",icon:"fa fa-database"},{name:"Github",icon:"fab fa-github"},{name:"Vue",icon:"fab fa-vuejs"},{name:"Linux",icon:"fab fa-linux"},{name:"Docker",icon:"fab fa-docker"}]}}},V=t=>(u("data-v-3f0eef40"),t=t(),h(),t),j=V(()=>e("h2",{class:"text-3xl text-center mb-4 w-5/12"},"Skills",-1)),A={class:"flex flex-wrap w-5/12"};function G(t,a,r,l,d,_){return s(),n("div",null,[j,e("div",A,[(s(!0),n(b,null,v(d.skills,o=>(s(),n("div",{key:o.name,class:"skill mb-6"},[e("i",{class:$([o.icon,"skill-icon text-slate-500"])},null,2),e("p",null,m(o.name),1)]))),128))])])}const C=i(L,[["render",G],["__scopeId","data-v-3f0eef40"]]),J={name:"Expertise"},K=e("h2",{class:"text-3xl mb-4"},"Expertise",-1),N=e("ul",{class:"list-disc"},[e("li",null,"Blockchain Development"),e("li",null,"Smart Contract Design"),e("li",null,"Deep Learning"),e("li",null,"Machine Learning"),e("li",null,"Decentralized Applications"),e("li",null,"Data Science")],-1),T=[K,N];function M(t,a,r,l,d,_){return s(),n("div",null,T)}const P=i(J,[["render",M]]),O={name:"Skills",components:{SkillsGrid:C,Expertise:P}},Q={class:"flex justify-around mx-auto w-4/5"};function R(t,a,r,l,d,_){const o=f("SkillsGrid"),x=f("Expertise");return s(),n("div",Q,[c(o),c(x)])}const z=i(O,[["render",R],["__scopeId","data-v-34390734"]]),F={},H={class:"mt-32 bg-slate-400"},U=k('<h2 class="text-3xl text-center mb-8">Socials</h2><div class="flex justify-center space-x-6"><div class="flex flex-col items-center"><a href="https://1drv.ms/b/c/204498874A69E948/ESK4afR03TJDiPLKUuw51jwBBNROiwVrKIVLrQEXyBhJmQ?e=7P3Jkh" target="_blank" rel="noopener noreferrer" class="text-3xl text-center fa-solid fa-file"></a><p>cv</p></div><div class="flex flex-col items-center"><a href="https://www.linkedin.com/in/kelvin-gevers-101224209/" target="_blank" rel="noopener noreferrer" class="text-3xl text-center fab fa-linkedin"></a><p>linkedin</p></div></div>',2),X=[U];function q(t,a){return s(),n("div",H,X)}const W=i(F,[["render",q]]),Y={class:"about"},Z=e("h1",{class:"text-5xl mb-24 text-center text-slate-600"},"About Me",-1),ee={class:"mt-4"},se={__name:"AboutView",setup(t){return(a,r)=>(s(),n("div",Y,[Z,c(D),c(z),e("div",ee,[c(W)])]))}};export{se as default};