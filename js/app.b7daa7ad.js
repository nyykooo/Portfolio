(function(){"use strict";var e={4864:function(e,t,n){var o=n(5130),a=n(6768);const s={class:"app"};function r(e,t,n,o,r,i){const c=(0,a.g2)("MainHeader"),l=(0,a.g2)("MainBody"),h=(0,a.g2)("MainFooter");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(c,{onChangeComponent:i.changeComponent},null,8,["onChangeComponent"]),(0,a.bF)(l,{"current-component":r.currentComponent},null,8,["current-component"]),(0,a.bF)(h)])}const i={class:"header"};function c(e,t,n,o,s,r){return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",{onClick:t[0]||(t[0]=e=>r.showComponent("PageAboutMe")),class:"header__button"},"About Me"),(0,a.Lk)("div",{onClick:t[1]||(t[1]=e=>r.showComponent("PageProjects")),class:"header__button"},"Projects"),(0,a.Lk)("div",{onClick:t[2]||(t[2]=e=>r.showComponent("PageContact")),class:"header__button"},"Contact"),(0,a.Lk)("div",{onClick:t[3]||(t[3]=e=>r.showComponent("PageImages")),class:"header__button"},"Images")])}var l={methods:{showComponent(e){this.$emit("change-component",e)}}},h=n(1241);const d=(0,h.A)(l,[["render",c]]);var u=d;function g(e,t,n,o,s,r){const i=(0,a.g2)("PageAboutMe"),c=(0,a.g2)("PageProjects"),l=(0,a.g2)("PageContact"),h=(0,a.g2)("PageImages");return(0,a.uX)(),(0,a.CE)("div",null,["PageAboutMe"===n.currentComponent?((0,a.uX)(),(0,a.Wv)(i,{key:0})):(0,a.Q3)("",!0),"PageProjects"===n.currentComponent?((0,a.uX)(),(0,a.Wv)(c,{key:1})):(0,a.Q3)("",!0),"PageContact"===n.currentComponent?((0,a.uX)(),(0,a.Wv)(l,{key:2})):(0,a.Q3)("",!0),"PageImages"===n.currentComponent?((0,a.uX)(),(0,a.Wv)(h,{key:3})):(0,a.Q3)("",!0)])}var p=n.p+"img/nico_port.cd2cc0f3.jpg";const v={class:"aboutme"};function m(e,t){return(0,a.uX)(),(0,a.CE)("div",v,t[0]||(t[0]=[(0,a.Fv)('<span> Hi, my name is <strong>Nicholas Campbell Caklamanis</strong>! <br><br> I graduated in chemical engineering in Brazil and spent two years working in the financial market at <strong>Bradesco</strong>, one of the largest banks in the country. I decided to change my academic path and migrate to the programming area, where I have been specializing in languages such as <strong>JavaScript (Vue, React, Next), C and C++</strong> for almost a year. I currently study at one of the best programming schools in the world, <strong>42 Lisboa</strong>, and work as a front-end software developer at <strong>Card4B</strong>. <br><br> On a personal level, I&#39;m a chess and thinking games enthusiast, I like taking photos (some of them you can find in the &quot;images&quot; menu) and I also do physical activities frequently, having practiced sports such as rugby, swimming, volleyball and soccer. I speak portuguese, english and I&#39;m also learning french. </span><img src="'+p+'" alt="nico_port" class="image_nico">',2)]))}const f={},b=(0,h.A)(f,[["render",m]]);var A=b;const k={key:0,class:"projects"},y={key:1,class:"back"},w={class:"details"};function C(e,t,n,o,s,r){const i=(0,a.g2)("ProjectFdf"),c=(0,a.g2)("ProjectPushSwap"),l=(0,a.g2)("ProjectMinitalk"),h=(0,a.g2)("ProjectMinishell"),d=(0,a.g2)("ProjectPhilosophers");return(0,a.uX)(),(0,a.CE)("div",null,[s.currentProject?((0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("button",{class:"back__button",onClick:t[5]||(t[5]=e=>r.showProject(null))},"Back")])):((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("button",{class:"projects__buttons",onClick:t[0]||(t[0]=e=>r.showProject("ProjectFdf"))},"Fdf"),(0,a.Lk)("button",{class:"projects__buttons",onClick:t[1]||(t[1]=e=>r.showProject("ProjectPushSwap"))},"PushSwap"),(0,a.Lk)("button",{class:"projects__buttons",onClick:t[2]||(t[2]=e=>r.showProject("ProjectMinitalk"))},"Minitalk"),(0,a.Lk)("button",{class:"projects__buttons",onClick:t[3]||(t[3]=e=>r.showProject("ProjectMinishell"))},"Minishell"),(0,a.Lk)("button",{class:"projects__buttons",onClick:t[4]||(t[4]=e=>r.showProject("ProjectPhilosophers"))},"Philosophers")])),(0,a.Lk)("div",w,["ProjectFdf"===s.currentProject?((0,a.uX)(),(0,a.Wv)(i,{key:0})):(0,a.Q3)("",!0),"ProjectPushSwap"===s.currentProject?((0,a.uX)(),(0,a.Wv)(c,{key:1})):(0,a.Q3)("",!0),"ProjectMinitalk"===s.currentProject?((0,a.uX)(),(0,a.Wv)(l,{key:2})):(0,a.Q3)("",!0),"ProjectMinishell"===s.currentProject?((0,a.uX)(),(0,a.Wv)(h,{key:3})):(0,a.Q3)("",!0),"ProjectPhilosophers"===s.currentProject?((0,a.uX)(),(0,a.Wv)(d,{key:4})):(0,a.Q3)("",!0)])])}var j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATvSURBVHgB1VdvTFtVFD/nvj5KobCxwYZKsA9YXAL7F5hjbv5hxsQZpzPRL8YQNTF+cR+MmpiYZYQl+kHd4jR+MEs0Qb+YEHVGzWR/NME5ly0gdMrkX+cWQHBjUMr62vfu8byWtvS1hVL2wf2S+3r/nvO755x77i3A/wAIOeCO81QARVDgnA26rbbTlR+anvGHCseL/AOPoQ5LRNYkyrzj7mIo2yRR7kXARiCq5O41XPK56IQwipIGQGCnqYovUYVhn4bBbGQvSsIzTPk4Aw8g0n4A2s5dCiyOEIv+EVRsLfFD94UGDEOuJKq6aB2o9AEr3w25YYo1tMtQ6KBvi8sHSyVRdYm2Qlh+xdW7YHkw2X0drGrfYB0OQLYk7vZSkwLyY66uh1sEAugWIJ5JR0TYO7Q+faMClguiBHix5J+/YelKTf5cibV5t5slUduq/mvFC5Ko6ScnGI6XWERdYjF6DRlqAkPej0BtEAm6CCxy46xsjMv1qN6IshkuR4UU20iGHwHC4bgspMYV+srXoYWS9Ca5o9pLuwjkMa4WxndE9MXwBsdzVr3+PKnXVKgnh1lihI1Bd745oxsko5TUlSiUdUhytLJO7f4J0bA2RTp9TUCPzlM44nCLnZc8CXKOWMU6ihSgV+cTiLJPHK+5o3YW0mOMS59VGZrXGXFLcvvOcEC+wtZ4A1owsoG4WWgGNP4+bJeMhNra38cKIQcE9ciGtJQBgqern4LSWDNOQkH5BP+4bNNDpsDD/2wqD0AOuFoLk0TyHVZq2IYqKQ/uTSLx0GlycADeZxfCrjgVIDgJuYIjMYzK92zOrpQxU+5MInG1AgoIqcI+j0zz54k6TtrLgGUNjsYLkEqwxtp8nAT4wckHbm3KPMAxWC7YGmDSlL2bCAp9Hl+ChJEHCt+CKRcTh3Ue3AqIhe+oCIk8FQyuTKYMClzPlHN6c8QQjTdRDouR8PthlmNiwj7Ix3ObpxtWwDJwuRRWc27YniIbacSnacE4idEGnGUf/WWfyMS2CifsgFxhWVGae/hbbR+SBvTE6olkJeG7NGJUkPJoVS81QA6o6jF2ocD3ODTtF2VIKkZHCgmFlDOQfFvGnmblgPJEdY/xvJXaIQuUecmtXaTXQBHfckimuJPd/KtuTl6Ot+MjbDqt12jlaHyLO3UOpgNsyl4p8BAm3hWcM/A4Z8Fv+FJrS5LMAaiVyZf5WPMrjB7kHndahpw9+UJ7gdd/DnZLWJGiY/gTFvInt/L5Nn2bA6pckeJFbt+Ym8WCaQ+mOUnQhIYihM7b3J2RQNQMHVOBqWPzu5J8NbKh4IqUxpG5psLEWk0MDDHzZm5fZFIjnMp/kIbSmU6+YUAn73QKMuNfToofXW9cPZ2RhAWHS/2M4+hdSyY7qwLR9aYwld+GasVGF4h7BmvFXt8WvJFWRTBisUz/O2Z5Ey31fcpx+0DaRFRzlorJLd/nRc3RWfgLIZ4UxDshWMPvxIPp1nnOUbkokNZlZU9Os3xCDjhRHPmjDkNZkbBg/ctyueAQn+hnWXHRvBW+oVpFy5oEwU1OFvud6PgwHQELAjLASmAlN2GfGZZPsuZTkBOwXZhix2C743AmAhYcC4mYe86d9nRRF6J8HB2imZNX5geOCkEC7BdSnuPWp9NCnJjYvLynQAoqzpCrtI+KFpzjpVWRV/vthv8A2B7x5MCiLyEAAAAASUVORK5CYII=";const P={class:"project__container"};function _(e,t){return(0,a.uX)(),(0,a.CE)("div",P,t[0]||(t[0]=[(0,a.Fv)('<div class="text__area" data-v-85a4e7a4><span style="font-size:24px;color:white;" data-v-85a4e7a4> FDF, or Fil de Fer (wireframe in french), is a graphic project that involves creating a simplified graphic representation of a relief landscape in 3D. The graphical elements that can be used are segments. Each segment represents a part of a “height map”. This height map is represented by a grid of points in a file. Each point in this grid is associated to a height. The graphical representation of the relief is obtained by joining the points of equal height by segments. This is how the 3D surface of the terrain can be approximated. </span></div><div class="social__media" data-v-85a4e7a4><a href="https://github.com/nyykooo/fdf" target="_blank" class="contacts__links" data-v-85a4e7a4><img src="'+j+'" class="image_icons" data-v-85a4e7a4> Fil de Fer </a></div>',2)]))}const I={},M=(0,h.A)(I,[["render",_],["__scopeId","data-v-85a4e7a4"]]);var x=M;const F={class:"project__container"};function L(e,t){return(0,a.uX)(),(0,a.CE)("div",F,t[0]||(t[0]=[(0,a.Fv)('<div class="text__area"><span style="font-size:24px;color:white;"><strong>PushSwap</strong> is a program that receives a list of numbers and has to <strong>sort</strong> them in ascending order. To do this, it must use <strong>2 stacks</strong> and a series of pre-defined movements involving pushes, swaps and rotations. <br><br> To sort the list I used the <strong>Radix sorting algorithm</strong> adapted for 2 stacks, which consists of sorting the least significant bit at each iteration, and at the end of it performing a bitshifiting to sort the next bit. <br><br> The good thing about using this algorithm is that the <strong>number of moves</strong> for a certain number “n” of values in the list <strong>will always be the same</strong>, regardless of how these values are shuffled. This makes the results of the program <strong>stable</strong>, and for very large “n” values the program performs exceptionally well, but for smaller “n” values the program performs only reasonably well. </span></div><div class="contacts__container"><a href="https://github.com/nyykooo/push_swap" target="_blank" class="contacts__links"><img src="'+j+'" class="image_icons"> Push Swap </a></div>',2)]))}const E={},S=(0,h.A)(E,[["render",L]]);var R=S;const W={class:"project__container"};function Q(e,t){return(0,a.uX)(),(0,a.CE)("div",W,t[0]||(t[0]=[(0,a.Fv)('<div class="text__area"><span style="font-size:24px;color:white;"><strong>Minitalk</strong> is a project about communication between processes, there is a <strong>server process</strong> and a <strong>client process</strong>. The idea of the project is to get the client to send a message and the server to print it out on the terminal. In the bonus part, after the server prints the message, the client must be notified and show a success message. <br><br> To do this, we use <strong>posix signals</strong>, more specifically <strong>SIGUSR1</strong> and <strong>SIGUSR2</strong>, which have no predefined behavior. To send and receive these signals, we use the <strong>kill</strong> and <strong>sigaction</strong> functions. <br><br> The information is sent bit by bit, byte by byte (i.e. char by char), and this has allowed me to deepen my knowledge of <strong>bitwise operators</strong> and <strong>bitshifting</strong>. </span></div><div class="social__media"><a href="https://github.com/nyykooo/minitalk" target="_blank" class="contacts__links"><img src="'+j+'" class="image_icons"> Minitalk </a></div>',2)]))}const X={},B=(0,h.A)(X,[["render",Q]]);var T=B,Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7ZbPa9NgGMe/z5u0S0Wr6GQ4ENIpHkaHVBTGTu4f0IMiDERP4tnDDl5k/8ZuHrzpbSKe7NGLOpyKvzqtWGToqFsQuyZ5n8e3skKatE6hGR7ygZDk+z68fHiS902AjIxeqF84+VLybQtTouFaCFaLW7lXT09TgJRQ8eD4AxlpK74lzI8AvqdhLW04fB0pkujEsdcyA+aHItjXzQT48hGqhDL5SIFEJ3Soj0YFtk3HT4Q4jJRISNgWvzenn7H468l3WMNuSdQm88+IcNNcrm9HDdFy7e4l0tht3Ko47nLLPVsVGylDGDKlFzImHFZg0RiI34SbuZXGDLXwLxLusrgqz1WzJNxozoFfqlcKdfe5P60s63FsmrrYwXloe54YF8yshcjgJkEttj0sDJJRGAICKSK0b5Pgckygw34Bz+eKWMSARzsUCdPOg+ao/KmEwHMTo/oK0pKI8Mn0ZcmcV/qM2VDq6pEnsgepSYjcV74686Fsn/OhZk177iRqWCYsB+OpSJhtvUkU3qidom+d+0aZmgGrhUQhYTQvwYFUJAjk6WBkPZp9nqJV8yJ4sVKHQXuRhsQgWBLbf19SlfhbMokumUSX/0Ii8UFRusUijlnfstGT58wSN5DVWXnoGSMRz2t/5/hc5nvimVonmrFGuKOE4xTWfsCfU6B8NC9A/f69o63cW3aC2eiYJvGb04fiGxN8Di/aymhHaNm5GjIyduAXpHjB2bEr5ysAAAAASUVORK5CYII=";const G={class:"project__container"};function O(e,t){return(0,a.uX)(),(0,a.CE)("div",G,t[0]||(t[0]=[(0,a.Fv)('<div class="text__area" data-v-0a50e6ef><span style="font-size:21px;color:white;" data-v-0a50e6ef><strong data-v-0a50e6ef>Minishell</strong> is a project that, as the name implies, should replicate the shell, but with a certain limitation. We have to code some <strong data-v-0a50e6ef>builtins</strong>, such as pwd, cd, echo, export, unset, env and exit. These builtins shouldn&#39;t replicate 100% of the way they work in the shell. All other commands are fetched from the system root folders (cat, ls, grep, ...). <br data-v-0a50e6ef><br data-v-0a50e6ef> In this project I learned a lot about <strong data-v-0a50e6ef>parsing, tokenization, processes, signals, file descriptors and shell</strong> ! In addition to the builtins, we had to implement <strong data-v-0a50e6ef>pipes</strong> and <strong data-v-0a50e6ef>redirections</strong> in the program, i.e. handle process executions and input and output fds. <br data-v-0a50e6ef><br data-v-0a50e6ef> It was an incredible experience to carry out this project and I would like to thank my partner <strong data-v-0a50e6ef>Bruno Henrique Lopes</strong> for all his support and cooperation during the creation of the program. </span></div><div class="social__media" data-v-0a50e6ef><a href="https://www.linkedin.com/in/brunohenriquelopes/" target="_blank" class="contacts__links" data-v-0a50e6ef><img src="'+Y+'" class="image_icons" data-v-0a50e6ef> Bruno Henrique Lopes </a></div><div class="social__media" data-v-0a50e6ef><a href="https://github.com/nyykooo/Minishell" target="_blank" class="contacts__links" data-v-0a50e6ef><img src="'+j+'" class="image_icons" data-v-0a50e6ef> Minishell </a></div>',3)]))}const U={},H=(0,h.A)(U,[["render",O],["__scopeId","data-v-0a50e6ef"]]);var D=H;const K={class:"project__container"};function N(e,t){return(0,a.uX)(),(0,a.CE)("div",K,t[0]||(t[0]=[(0,a.Fv)('<div class="text__area" data-v-3a132c78><span style="font-size:24px;color:white;" data-v-3a132c78><strong data-v-3a132c78>Philosophers</strong> is a project that simulates the philosophers&#39; dinner problem, where they must eat, sleep and think, but for “x” number of philosophers there are the same “x” number of forks, and to eat each philosopher needs to hold 2 forks. Dinner only stops if a philosopher dies, or if everyone has eaten the number of times determined by the user. <br data-v-3a132c78><br data-v-3a132c78> So the project requires <strong data-v-3a132c78>synchronization of activities</strong>, and to solve this problem I used <strong data-v-3a132c78>threads</strong>, which execute activities in parallel in the code and to avoid data race conflicts and deadlocks I used <strong data-v-3a132c78>mutexes</strong>. <br data-v-3a132c78><br data-v-3a132c78> In my solution, each philosopher is a thread and so I use a mutex to only start dinner after all the threads have been created, so the flows are synchronized correctly. </span></div><div class="social__media" data-v-3a132c78><a href="https://github.com/nyykooo/42Philosophers" target="_blank" class="contacts__links" data-v-3a132c78><img src="'+j+'" class="image_icons" data-v-3a132c78> Philosophers </a></div>',2)]))}const V={},z=(0,h.A)(V,[["render",N],["__scopeId","data-v-3a132c78"]]);var J=z,q={components:{ProjectFdf:x,ProjectPushSwap:R,ProjectMinitalk:T,ProjectMinishell:D,ProjectPhilosophers:J},data(){return{currentProject:null}},methods:{showProject(e){this.currentProject===e?this.currentProject=null:this.currentProject=e}}};const Z=(0,h.A)(q,[["render",C]]);var $=Z;const ee={class:"contacts"};function te(e,t){return(0,a.uX)(),(0,a.CE)("div",ee,t[0]||(t[0]=[(0,a.Fv)('<div class="contacts__container"><a href="https://www.linkedin.com/in/nicholascampbellcaklamanis/" target="_blank" class="contacts__links"><img src="'+Y+'" class="image_icons"> LinkedIn </a></div><div class="contacts__container"><a href="https://github.com/nyykooo" target="_blank" class="contacts__links"><img src="'+j+'" class="image_icons"> Github </a></div>',2)]))}const ne={},oe=(0,h.A)(ne,[["render",te]]);var ae=oe,se=n.p+"img/bridge.061583e3.jpeg",re=n.p+"img/flower.b20c26ec.jpeg",ie=n.p+"img/alameda.a1c331be.jpeg",ce=n.p+"img/boat.189d2df8.jpeg";const le={class:"flex__table"};function he(e,t){return(0,a.uX)(),(0,a.CE)("div",le,t[0]||(t[0]=[(0,a.Fv)('<div class="flex__cell"><img src="'+se+'" alt="Bridge"></div><div class="flex__cell"><img src="'+re+'" alt="Bridge"></div><div class="flex__cell"><img src="'+ie+'" alt="Bridge"></div><div class="flex__cell"><img src="'+ce+'" alt="Bridge"></div>',4)]))}const de={},ue=(0,h.A)(de,[["render",he]]);var ge=ue,pe={props:["currentComponent"],components:{PageAboutMe:A,PageProjects:$,PageContact:ae,PageImages:ge}};const ve=(0,h.A)(pe,[["render",g]]);var me=ve;const fe={style:{display:"flex","justify-content":"space-between"}};function be(e,t,n,o,s,r){return(0,a.uX)(),(0,a.CE)("div",fe,t[0]||(t[0]=[(0,a.Lk)("span",null,"NICHOLAS CAMPBELL CAKLAMANIS",-1)]))}var Ae={methods:{showComponent(e){this.$emit("change-component",e)}}};const ke=(0,h.A)(Ae,[["render",be]]);var ye=ke,we={components:{MainHeader:u,MainBody:me,MainFooter:ye},data(){return{currentComponent:"PageAboutMe"}},methods:{changeComponent(e){this.currentComponent=e}}};const Ce=(0,h.A)(we,[["render",r]]);var je=Ce;(0,o.Ef)(je).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,s){if(!o){var r=1/0;for(h=0;h<e.length;h++){o=e[h][0],a=e[h][1],s=e[h][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<r&&(r=s));if(i){e.splice(h--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[o,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/Portfolio/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,r=o[0],i=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var h=c(n)}for(t&&t(o);l<r.length;l++)s=r[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(h)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4864)}));o=n.O(o)})();
//# sourceMappingURL=app.b7daa7ad.js.map