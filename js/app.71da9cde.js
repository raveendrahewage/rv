(function(e){function t(t){for(var c,o,s=t[0],i=t[1],r=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(f.length)f.shift()();return d.push.apply(d,r||[]),a()}function a(){for(var e,t=0;t<d.length;t++){for(var a=d[t],c=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(c=!1)}c&&(d.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},n={app:0},d=[];function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var l=i;d.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"017c":function(e,t,a){"use strict";a("f053")},"0469":function(e,t,a){"use strict";a("dc1f")},"0abb":function(e,t,a){e.exports=a.p+"img/2.2adbdf48.png"},"1b0e":function(e,t,a){e.exports=a.p+"img/2.c76d3779.png"},"2f5a":function(e,t,a){e.exports=a.p+"img/1.3b1d92c3.png"},"2f75":function(e,t,a){e.exports=a.p+"img/2.68af3e90.png"},3820:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function n(e,t,a,n,d,o){var s=Object(c["j"])("Navbar"),i=Object(c["j"])("Home"),r=Object(c["j"])("About"),l=Object(c["j"])("Myprojects"),u=Object(c["j"])("Skills"),f=Object(c["j"])("Contact"),v=Object(c["j"])("Footer");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["f"])(s),Object(c["f"])(i),Object(c["f"])(r),Object(c["f"])(l),Object(c["f"])(u),Object(c["f"])(f),Object(c["f"])(v)],64)}var d=Object(c["k"])("data-v-69cb47b6");Object(c["i"])("data-v-69cb47b6");var o={class:"navbar",id:"navbar"},s={class:"max-width"},i=Object(c["f"])("div",{class:"logo"},[Object(c["f"])("a",{href:"#"},[Object(c["e"])("R"),Object(c["f"])("span",null,"V.")])],-1),r={class:"menu",id:"menu"},l=Object(c["f"])("i",{class:"fas fa-bars",id:"menu-icon"},null,-1),u=Object(c["f"])("i",{class:"fas fa-angle-up"},null,-1);Object(c["h"])();var f=d((function(e,t,a,n,d,f){return Object(c["g"])(),Object(c["c"])("nav",o,[Object(c["f"])("div",s,[i,Object(c["f"])("ul",r,[Object(c["f"])("li",null,[Object(c["f"])("a",{href:"#home",onClick:t[1]||(t[1]=function(){return f.menu&&f.menu.apply(f,arguments)}),class:"menu-btn"},"Home")]),Object(c["f"])("li",null,[Object(c["f"])("a",{href:"#about",onClick:t[2]||(t[2]=function(){return f.menu&&f.menu.apply(f,arguments)}),class:"menu-btn"},"About")]),Object(c["f"])("li",null,[Object(c["f"])("a",{href:"#skills",onClick:t[3]||(t[3]=function(){return f.menu&&f.menu.apply(f,arguments)}),class:"menu-btn"},"Skills")]),Object(c["f"])("li",null,[Object(c["f"])("a",{href:"#projects",onClick:t[4]||(t[4]=function(){return f.menu&&f.menu.apply(f,arguments)}),class:"menu-btn"},"Projects")]),Object(c["f"])("li",null,[Object(c["f"])("a",{href:"#contact",onClick:t[5]||(t[5]=function(){return f.menu&&f.menu.apply(f,arguments)}),class:"menu-btn"},"Contact")])]),Object(c["f"])("div",{class:"menu-btn",onClick:t[6]||(t[6]=function(){return f.menu&&f.menu.apply(f,arguments)})},[l])]),Object(c["f"])("div",{class:"scroll-up-btn",id:"scroll-up-btn",onClick:t[7]||(t[7]=function(){return f.scrollTop&&f.scrollTop.apply(f,arguments)})},[u])])})),v={name:"Navbar",mounted:function(){var e=this;setInterval((function(){e.sticky()}),1)},methods:{menu:function(){document.getElementById("menu").classList.toggle("active"),document.getElementById("menu-icon").classList.toggle("active")},sticky:function(){var e=document.getElementById("navbar");0!=window.pageYOffset?e.classList.add("sticky"):e.classList.remove("sticky");var t=document.getElementById("scroll-up-btn");window.pageYOffset>500?t.classList.add("show"):t.classList.remove("show")},scrollTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}};a("b797");v.render=f,v.__scopeId="data-v-69cb47b6";var b=v,p=Object(c["k"])("data-v-4d9c8a90");Object(c["i"])("data-v-4d9c8a90");var m={class:"home",id:"home"},h=Object(c["d"])('<div class="max-width" data-v-4d9c8a90><div class="home-content" data-v-4d9c8a90><div class="text-1" data-v-4d9c8a90>Hello, my name is</div><div class="text-2" data-v-4d9c8a90>Raveendra Hewage</div><div class="text-3" data-v-4d9c8a90>And I&#39;m a <span class="typing" data-v-4d9c8a90></span></div></div></div>',1);Object(c["h"])();var g=p((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("section",m,[h])})),j=a("10b3"),O=a.n(j),y={name:"Home",data:function(){return{options:{strings:["Developer","Designer","Undergraduate"],typeSpeed:40,backSpeed:60,loop:!0}}},mounted:function(){new O.a(".typing",this.options)}};a("f57e");y.render=g,y.__scopeId="data-v-4d9c8a90";var w=y,k=a("5b54"),I=a.n(k),x=Object(c["k"])("data-v-257aa312");Object(c["i"])("data-v-257aa312");var C={class:"about",id:"about"},S=Object(c["f"])("div",{class:"max-width"},[Object(c["f"])("h2",{class:"title"},"About me"),Object(c["f"])("div",{class:"about-content"},[Object(c["f"])("div",{class:"column left"},[Object(c["f"])("img",{src:I.a,alt:""})]),Object(c["f"])("div",{class:"column right"},[Object(c["f"])("div",{class:"text"},[Object(c["e"])("I'm Raveendra and I'm a "),Object(c["f"])("span",{class:"typing-2"})]),Object(c["f"])("p",null,"I am a very simple person who works hard for reaching to success and has a passion for learning new things. Currently, I am a third-year undergraduate at the University of Colombo School of Computing and do the B.Sc in Computer Science degree there. WP/MT Yattapatha K.V was my school up until my O/L and I did my A/L from Ananda Sastralaya, Matugama. I am very interested in web development and work on it by learning new technologies and brushing up my skills. My ambition also to starts my career in that field. Most of the time, I spend my free time listening to music and writing poems. It gives me a lot of relaxation and refreshments to my day-to-day life. As well, I do video editing as one of my hobbies too.")])])],-1);Object(c["h"])();var T=x((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("section",C,[S])})),_={name:"About",data:function(){return{options:{strings:["undergraduate.","simple person.","hard worker.","music lover.","fast learner."],typeSpeed:40,backSpeed:60,loop:!0}}},mounted:function(){new O.a(".typing-2",this.options)}};a("017c");_.render=T,_.__scopeId="data-v-257aa312";var M=_,A=Object(c["k"])("data-v-263f1b46");Object(c["i"])("data-v-263f1b46");var E={class:"projects",id:"projects"},F={class:"max-width"},P=Object(c["f"])("h2",{class:"title"},"My Projects",-1),H={class:"carousel"},B={class:"slideshow-container"},L={class:"box"},J=Object(c["f"])("div",{class:"text"},"FaceMemo",-1),N=Object(c["f"])("p",null,"FaceMemo is a small game that has been created using javascript, HTML and Bootstrap only. This has been deployed on github pages.",-1),R={class:"box"},D=Object(c["f"])("div",{class:"text"},"FriendToDo",-1),U=Object(c["f"])("p",null,"FriendToDo is a simple web application where you can list out your works to be done in the future. Node.js, EJS{Embaded Javascript Templating) Express and Jquery and Mongoose database has been used to develop this appilicaton. This has been deployed on Heroku.",-1),q={class:"box"},V=Object(c["f"])("div",{class:"text"},"CareU",-1),Y=Object(c["f"])("p",null,"CareU is a web application developed as a university project. The purpose of developing this application was to connect the people who are in the need of help of emergency services to those relevant services. As well as, any framework has not been used for this application. HTML, CSS , JavaScript and Jquery were used for this application.",-1),G={class:"box"},W=Object(c["f"])("div",{class:"text"},"Skyreads",-1),K=Object(c["f"])("p",null,"Skyreads is web application where yu can check the wheather of any place in the world. In this application, you can search any palce and get the details like rain status, humadity, wind speed and etc. I have user Vue.js, Axios and Bootstrap for developing this application.This has been deployed on Bytehost.",-1),Q={class:"box"},z=Object(c["f"])("div",{class:"text"},"ChitChat",-1),X=Object(c["f"])("p",null,"ChitChat is a very simple chat aplication that allows you to chat with someone. This was also developed with Vue.js and I have user Firebase realtime database and deployment has also been done on Firebase.",-1),Z={class:"dots",style:{"text-align":"center"}};Object(c["h"])();var $=A((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("section",E,[Object(c["f"])("div",F,[P,Object(c["f"])("div",H,[Object(c["f"])("div",B,[Object(c["f"])("div",{class:"hide card fade",onClick:t[1]||(t[1]=function(){return o.goToFacememo&&o.goToFacememo.apply(o,arguments)})},[Object(c["f"])("div",L,[Object(c["f"])("img",{src:d.facememoImage,class:"facememo"},null,8,["src"]),J,N])]),Object(c["f"])("div",{class:"hide card fade",onMouseover:t[2]||(t[2]=function(e){return d.friendtodoImage=d.friendtodoImage2}),onMouseout:t[3]||(t[3]=function(e){return d.friendtodoImage=d.friendtodoImage1}),onClick:t[4]||(t[4]=function(){return o.goToFriendtToDo&&o.goToFriendtToDo.apply(o,arguments)})},[Object(c["f"])("div",R,[Object(c["f"])("img",{src:d.friendtodoImage},null,8,["src"]),D,U])],32),Object(c["f"])("div",{class:"hide card fade",onMouseover:t[5]||(t[5]=function(e){return d.careuImage=d.careuImage2}),onMouseout:t[6]||(t[6]=function(e){return d.careuImage=d.careuImage1}),onClick:t[7]||(t[7]=function(){return o.goToCareuRepo&&o.goToCareuRepo.apply(o,arguments)})},[Object(c["f"])("div",q,[Object(c["f"])("img",{src:d.careuImage,class:"careu"},null,8,["src"]),V,Y])],32),Object(c["f"])("div",{class:"hide card fade",onMouseover:t[8]||(t[8]=function(e){return d.skyreadsImage=d.skyreadsImage2}),onMouseout:t[9]||(t[9]=function(e){return d.skyreadsImage=d.skyreadsImage1}),onClick:t[10]||(t[10]=function(){return o.goToSkyreads&&o.goToSkyreads.apply(o,arguments)})},[Object(c["f"])("div",G,[Object(c["f"])("img",{src:d.skyreadsImage},null,8,["src"]),W,K])],32),Object(c["f"])("div",{class:"hide card fade",onMouseover:t[11]||(t[11]=function(e){return d.chitchatImage=d.chitchatImage2}),onMouseout:t[12]||(t[12]=function(e){return d.chitchatImage=d.chitchatImage1}),onClick:t[13]||(t[13]=function(){return o.goToChitChat&&o.goToChitChat.apply(o,arguments)})},[Object(c["f"])("div",Q,[Object(c["f"])("img",{src:d.chitchatImage},null,8,["src"]),z,X])],32),Object(c["f"])("a",{class:"prev",onClick:t[14]||(t[14]=function(e){return o.plusSlides(-1)})},"❮"),Object(c["f"])("a",{class:"next",onClick:t[15]||(t[15]=function(e){return o.plusSlides(1)})},"❯"),Object(c["f"])("div",Z,[Object(c["f"])("span",{class:"dot",onClick:t[16]||(t[16]=function(e){return o.currentSlide(1)})}),Object(c["f"])("span",{class:"dot",onClick:t[17]||(t[17]=function(e){return o.currentSlide(2)})}),Object(c["f"])("span",{class:"dot",onClick:t[18]||(t[18]=function(e){return o.currentSlide(3)})}),Object(c["f"])("span",{class:"dot",onClick:t[19]||(t[19]=function(e){return o.currentSlide(4)})}),Object(c["f"])("span",{class:"dot",onClick:t[20]||(t[20]=function(e){return o.currentSlide(5)})})])])])])])})),ee=(a("ac1f"),a("5319"),{name:"Myprojects",data:function(){return{slideIndex:1,facememoImage:a("94fb"),facememoImage1:a("94fb"),facememoImage2:a("2f75"),friendtodoImage:a("cf88"),friendtodoImage1:a("cf88"),friendtodoImage2:a("0abb"),careuImage:a("2f5a"),careuImage1:a("2f5a"),careuImage2:a("e6f9"),skyreadsImage:a("dcfb"),skyreadsImage1:a("dcfb"),skyreadsImage2:a("1b0e"),chitchatImage:a("61bf"),chitchatImage1:a("61bf"),chitchatImage2:a("79c6")}},mounted:function(){this.showSlides(this.slideIndex)},methods:{plusSlides:function(e){this.showSlides(this.slideIndex+=e)},currentSlide:function(e){this.showSlides(this.slideIndex=e)},showSlides:function(e){var t,a=document.getElementsByClassName("hide card"),c=document.getElementsByClassName("dot");for(e>a.length&&(this.slideIndex=1),e<1&&(this.slideIndex=a.length),t=0;t<a.length;t++)a[t].style.display="none";for(t=0;t<c.length;t++)c[t].className=c[t].className.replace(" active","");a[this.slideIndex-1].style.display="block",c[this.slideIndex-1].className+=" active"},goToFacememo:function(){window.open("https://raveendrahewage.github.io/facememo/","_blank")},goToFriendtToDo:function(){window.open("https://friendtodo.herokuapp.com/","_blank")},goToCareuRepo:function(){window.open("https://github.com/raveendrahewage/CAREU_WEB","_blank")},goToSkyreads:function(){window.open("http://skyreads.byethost11.com/","_blank")},goToChitChat:function(){window.open("https://chitchat-a63f5.web.app/","_blank")}}});a("0469");ee.render=$,ee.__scopeId="data-v-263f1b46";var te=ee,ae=Object(c["k"])("data-v-53236733");Object(c["i"])("data-v-53236733");var ce={class:"skills",id:"skills"},ne=Object(c["d"])('<div class="max-width" data-v-53236733><h2 class="title" data-v-53236733>My skills</h2><div class="skills-content" data-v-53236733><div class="column left" data-v-53236733><div class="text" data-v-53236733>My creative skills &amp; experiences.</div><p data-v-53236733>Since I am still a student, I don.t have much knowledge about many technologies and languages. But I am in the process of learning and getting more experiences.</p><div class="text" data-v-53236733>Languages Exposed</div><div class="btn-group" style="width:100%;" data-v-53236733><button data-v-53236733>PHP</button><button data-v-53236733>HTML</button><button data-v-53236733>Java</button><button data-v-53236733>JavaScript</button><button data-v-53236733>Python</button><button data-v-53236733>Scala</button><button data-v-53236733>R</button><button data-v-53236733>C</button><button data-v-53236733>C++</button></div></div><div class="column right" data-v-53236733><div class="text" data-v-53236733>Technologies Exposed</div><div class="btn-group" style="width:100%;" data-v-53236733><button data-v-53236733>Codeigniter</button><button data-v-53236733>Bootsrap</button><button data-v-53236733>Jquery</button><button data-v-53236733>Node JS</button><button data-v-53236733>Express JS</button><button data-v-53236733>Android Studio</button><button data-v-53236733>Firebase</button><button data-v-53236733>MySQL</button><button data-v-53236733>Heroku</button><button data-v-53236733>Git</button></div></div></div></div>',1);Object(c["h"])();var de=ae((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("section",ce,[ne])})),oe={name:"Skills"};a("cf16");oe.render=de,oe.__scopeId="data-v-53236733";var se=oe,ie=Object(c["k"])("data-v-8dccdd30");Object(c["i"])("data-v-8dccdd30");var re={class:"contact",id:"contact"},le=Object(c["d"])('<div class="max-width" data-v-8dccdd30><h2 class="title" data-v-8dccdd30>Contact me</h2><div class="contact-content" data-v-8dccdd30><div class="column left" data-v-8dccdd30><div class="text" data-v-8dccdd30>Get in Touch</div><p data-v-8dccdd30>I am available on social media and you can contact me over them whenever you want. I will be there for you as quick as possible.</p><div class="icons" data-v-8dccdd30><div class="row" data-v-8dccdd30><i class="fas fa-user" data-v-8dccdd30></i><div class="info" data-v-8dccdd30><div class="head" data-v-8dccdd30>Name</div><div class="sub-title" data-v-8dccdd30>Raveendra Hewage</div></div></div><div class="row" data-v-8dccdd30><i class="fas fa-map-marker-alt" data-v-8dccdd30></i><div class="info" data-v-8dccdd30><div class="head" data-v-8dccdd30>Address</div><div class="sub-title" data-v-8dccdd30>Singehraja Park, 10th Mile Post, Yattapatha</div></div></div><div class="row" data-v-8dccdd30><i class="fas fa-envelope" data-v-8dccdd30></i><div class="info" data-v-8dccdd30><div class="head" data-v-8dccdd30>Email</div><div class="sub-title" data-v-8dccdd30>hewagerv@gmail.com</div></div></div><div class="row" data-v-8dccdd30><i class="fas fa-phone" data-v-8dccdd30></i><div class="info" data-v-8dccdd30><div class="head" data-v-8dccdd30>Phone</div><div class="sub-title" data-v-8dccdd30>+94717188823</div></div></div></div></div><div class="column right" data-v-8dccdd30><div class="text" data-v-8dccdd30>Social media</div><div class="contact-form" data-v-8dccdd30><div class="field" data-v-8dccdd30><a href="https://www.linkedin.com/in/raveendra-hewage-8763921b9/" class="fa fa-linkedin" target="_blank" data-v-8dccdd30><span data-v-8dccdd30>linkedin</span></a></div><div class="field" data-v-8dccdd30><a href="https://www.facebook.com/raveendra.hewage/" class="fa fa-facebook" target="_blank" data-v-8dccdd30><span data-v-8dccdd30>facebook</span></a></div><div class="field" data-v-8dccdd30><a href="https://twitter.com/HewageRaveendra" class="fa fa-twitter" target="_blank" data-v-8dccdd30><span data-v-8dccdd30>twitter</span></a></div><div class="field" data-v-8dccdd30><a href="https://www.instagram.com/_rv__h/" class="fa fa-instagram" target="_blank" data-v-8dccdd30><span data-v-8dccdd30>instagram</span></a></div><div class="field" data-v-8dccdd30><a href="https://github.com/raveendrahewage" class="fa fa-github" target="_blank" data-v-8dccdd30><span data-v-8dccdd30>github</span></a></div></div></div></div></div>',1);Object(c["h"])();var ue=ie((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("section",re,[le])})),fe={name:"Contact"};a("8c3b");fe.render=ue,fe.__scopeId="data-v-8dccdd30";var ve=fe,be=Object(c["k"])("data-v-80e742a6");Object(c["i"])("data-v-80e742a6");var pe=Object(c["f"])("span",null,[Object(c["e"])("Created By "),Object(c["f"])("a",{href:"#"},"Raveendra Hewage"),Object(c["e"])(" | "),Object(c["f"])("span",{class:"far fa-copyright"}),Object(c["e"])(" 2021 All rights reserved.")],-1);Object(c["h"])();var me=be((function(e,t,a,n,d,o){return Object(c["g"])(),Object(c["c"])("footer",null,[pe])})),he={name:"Footer"};a("b076");he.render=me,he.__scopeId="data-v-80e742a6";var ge=he,je={name:"App",components:{Navbar:b,Home:w,About:M,Myprojects:te,Skills:se,Contact:ve,Footer:ge}};a("f390");je.render=n;var Oe=je;Object(c["b"])(Oe).mount("#app")},"5b54":function(e,t,a){e.exports=a.p+"img/my1.f0314f07.jpg"},"61bf":function(e,t,a){e.exports=a.p+"img/1.e0e6cbff.png"},"744d":function(e,t,a){},"79c6":function(e,t,a){e.exports=a.p+"img/2.bc41b38b.png"},"8c3b":function(e,t,a){"use strict";a("744d")},"94fb":function(e,t,a){e.exports=a.p+"img/1.bb29bc6b.png"},"970a":function(e,t,a){},a9ce:function(e,t,a){},b076:function(e,t,a){"use strict";a("df8a")},b797:function(e,t,a){"use strict";a("faf0")},cf16:function(e,t,a){"use strict";a("a9ce")},cf88:function(e,t,a){e.exports=a.p+"img/1.d837be36.png"},dc1f:function(e,t,a){},dcfb:function(e,t,a){e.exports=a.p+"img/1.5cca98e9.png"},df8a:function(e,t,a){},e6f9:function(e,t,a){e.exports=a.p+"img/2.63284b2a.png"},f053:function(e,t,a){},f390:function(e,t,a){"use strict";a("970a")},f57e:function(e,t,a){"use strict";a("3820")},faf0:function(e,t,a){}});
//# sourceMappingURL=app.71da9cde.js.map