(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{432:function(t,e,l){var content=l(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(26).default)("7c7b739f",content,!0,{sourceMap:!1})},433:function(t,e,l){var content=l(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(26).default)("1307065c",content,!0,{sourceMap:!1})},435:function(t,e,l){"use strict";l(432)},436:function(t,e,l){var n=l(25)((function(i){return i[1]}));n.push([t.i,'.film-detail[data-v-2ca8230d]{background:url(https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/24db0f09-00de-42ff-bc8e-c977cd42b7ea/1920x);background-size:cover;background-position:50%;position:relative}.film-detail article[data-v-2ca8230d]{margin-bottom:60px;position:relative;z-index:5}.film-detail[data-v-2ca8230d]:after{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);z-index:3}.film-detail[data-v-2ca8230d]:after,.film-detail[data-v-2ca8230d]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.film-detail[data-v-2ca8230d]:before{background:#1f1f1f;z-index:4;opacity:.8}.section__title[data-v-2ca8230d]{margin-bottom:30px}.section__title h2[data-v-2ca8230d]{font-family:Raleway;font-weight:700;font-size:36px;line-height:42px;color:#fff;margin:0}.film-info__poster img[data-v-2ca8230d]{border-radius:17px}.film-info__full[data-v-2ca8230d]{padding-left:40px}.film-info__full p[data-v-2ca8230d]{font-size:18px;line-height:206.4%;margin-bottom:15px;color:#fff}.film-info__full-encyclopedia .film-encyclo[data-v-2ca8230d]{list-style:none;padding:0}.film-info__full-encyclopedia .film-encyclo__body[data-v-2ca8230d]{display:flex;margin-bottom:15px}.film-info__full-encyclopedia .film-encyclo__body-title[data-v-2ca8230d]{width:25%;font-size:18px;color:#9a9999;font-weight:700}.film-info__full-encyclopedia .film-encyclo__body-value[data-v-2ca8230d]{width:75%;font-size:18px;color:#fff;display:inline-flex;flex-wrap:wrap}.film-info__full-encyclopedia .film-encyclo__body-value a[data-v-2ca8230d]{color:#fff;position:relative;margin-right:5px;margin-bottom:5px}.film-info__full-encyclopedia .film-encyclo__body-value a[data-v-2ca8230d]:hover:before{background-color:#fff}.film-info__full-encyclopedia .film-encyclo__body-value a[data-v-2ca8230d]:last-child:after{content:""}.film-info__full-encyclopedia .film-encyclo__body-value a[data-v-2ca8230d]:after{content:","}.film-info__full-encyclopedia .film-encyclo__body-value a[data-v-2ca8230d]:before{content:"";position:relative;width:100%;height:2px;position:absolute;bottom:-2px;background-color:hsla(0,0%,100%,.2)}@media screen and (max-width:992px){section[data-v-2ca8230d]{padding:40px!important}section .film-info__full[data-v-2ca8230d]{padding-left:0!important}section .film-info .film-encyclo__body-title[data-v-2ca8230d]{width:40%!important}section .film-info .film-encyclo__body-value[data-v-2ca8230d]{width:60%!important}}@media screen and (max-width:768px){section .film-info__poster[data-v-2ca8230d]{display:flex;justify-content:center;margin-bottom:30px}section .film-info__poster img[data-v-2ca8230d]{max-width:250px}}@media screen and (max-width:600px){section .film-info .film-encyclo__body[data-v-2ca8230d]{flex-direction:column}section .film-info .film-encyclo__body-title[data-v-2ca8230d],section .film-info .film-encyclo__body-value[data-v-2ca8230d]{display:inline-flex;width:100%!important}}@media screen and (max-width:450px){section[data-v-2ca8230d]{padding:30px 20px!important}.section__title[data-v-2ca8230d]{margin-bottom:20px!important}.section__title h2[data-v-2ca8230d]{font-size:26px!important}}',""]),n.locals={},t.exports=n},439:function(t,e,l){"use strict";l.r(e);l(42),l(28),l(49);var n={name:"filmDetailText",data:function(){return{}},props:{name:String,orig_name:String,slogan:String,poster:String,description:String,year:String,filmFile:String,genres:{type:Array,default:function(){return[]}},actors:{type:Array,default:function(){return[]}},directors:{type:Array,default:function(){return[]}},countries:{type:Array,default:function(){return[]}}},components:{},mounted:function(){}},o=(l(435),l(1)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"film-detail md:py-14",style:{backgroundImage:'url("'.concat(t.poster,'")')}},[e("div",{staticClass:"max-w-screen-xl m-auto"},[e("article",{staticClass:"film-info"},[e("div",{staticClass:"info__title md:max-w-[450px] mb-5"},[e("h2",{staticClass:"text-3xl font-bold text-center tracking-tight text-white md:text-left"},[t._v("\n          "+t._s(t.name)+"\n        ")]),t._v(" "),e("small",{staticClass:"text-md w-full inline-flex justify-center md:justify-start text-white/70"},[t._v("\n          "+t._s(t.orig_name)+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex flex-col md:flex-row gap-x-[5%]"},[e("div",{staticClass:"md:w-[20%]"},[e("div",{staticClass:"film-info__poster"},[e("img",{staticClass:"img-fluid",attrs:{src:t.poster}})])]),t._v(" "),e("div",{staticClass:"md:w-[75%]"},[e("div",{staticClass:"film-info__full"},[e("p",[t._v("\n              "+t._s(t.description)+"\n            ")]),t._v(" "),e("div",{staticClass:"film-info__full-encyclopedia"},[e("ul",{staticClass:"film-encyclo"},[e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v("\n                    Год производства\n                  ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},[t._v("\n                    "+t._s(t.year)+"\n                  ")])]),t._v(" "),e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v(" Страна ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},t._l(t.countries,(function(l,n){return e("nuxt-link",{key:n,attrs:{to:"#!"}},[t._v("\n                      "+t._s(l.name)+"\n                    ")])})),1)]),t._v(" "),e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v(" Жанр ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},t._l(t.genres,(function(l,n){return e("nuxt-link",{key:n,attrs:{to:"/films"}},[t._v("\n                      "+t._s(l.name)+"\n                    ")])})),1)]),t._v(" "),e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v(" Слоган ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},[t._v("\n                    "+t._s(t.slogan)+"\n                  ")])]),t._v(" "),e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v(" Режиссер ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},t._l(t.directors,(function(l,n){return e("nuxt-link",{key:n,attrs:{to:"#!"}},[t._v("\n                      "+t._s(l.name)+"\n                    ")])})),1)]),t._v(" "),e("li",{staticClass:"film-encyclo__body"},[e("span",{staticClass:"film-encyclo__body-title"},[t._v(" Актеры ")]),t._v(" "),e("span",{staticClass:"film-encyclo__body-value"},t._l(t.actors,(function(l,n){return e("nuxt-link",{key:n,staticClass:"article__link",attrs:{to:"#!"}},[t._v("\n                      "+t._s(l.name)+"\n                    ")])})),1)])])])])])])])])])}),[],!1,null,"2ca8230d",null);e.default=component.exports},440:function(t,e,l){"use strict";l(433)},441:function(t,e,l){var n=l(25)((function(i){return i[1]}));n.push([t.i,'.filmPlayer{display:none;position:absolute!important;left:0;top:0;width:100%;height:100vh!important;z-index:0;align-content:center;background:#000;justify-content:center}.filmPlayer.little{height:60vh!important}.filmPlayer.active{display:flex;z-index:11}.filmPlayer #player{height:100%;z-index:99}.filmPlayer #oframeplayer{background:#000!important}.detail{background-size:cover!important;height:100vh}.detail.noPoster{height:60vh;padding-top:15rem;background-position:50%!important}.detail.noPoster:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:4;background-color:rgba(52,52,52,.2)}@media screen and (max-width:1024px){.detail.noPoster:before{display:none}}.detail:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:40vh;z-index:4;background:#343434;background:linear-gradient(0deg,#181818,rgba(24,24,24,.7) 58%,rgba(24,24,24,0))}@media screen and (max-width:1280px){.detail:after{height:83.3333333333vh}}@media screen and (max-width:768px){.detail:after{height:66.6666666667vh}}.detail__bottom button,.detail__bottom span{background:linear-gradient(152deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,0))!important;-webkit-backdrop-filter:blur(12px)!important;backdrop-filter:blur(12px)!important;border-color:hsla(0,0%,100%,.2)!important;color:#fff;box-shadow:none!important;border-top:.1px solid hsla(0,0%,100%,.3);border-bottom:.1px solid hsla(0,0%,100%,.3)}.detail__bottom button:hover,.detail__bottom span:hover{color:#fff!important}.info{background-size:cover!important;height:100vh}.info:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:4;background-color:rgba(24,24,24,.9);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px)}',""]),n.locals={},t.exports=n},444:function(t,e,l){"use strict";l.r(e);l(42),l(28),l(49);var n=l(16),o=(l(66),{transition:"fade-y",components:{THeMovieDetailInformation:l(439).default},data:function(){return{films:[],clicked:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://api.optimedia.uz/api/v2/web/catalog/detail?catalog_id=".concat(t.$route.params.id));case 2:l=e.sent,t.films=l.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var script=document.createElement("script");script.async=!0,script.src="https://optimedia.uz/playerjs.js",document.head.appendChild(script)},playVideo:function(){this.clicked=!this.clicked;new Playerjs({id:"player",file:this.films.file,autoplay:1})}},created:function(){this.init()}}),c=(l(440),l(1)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"relative"},[e("section",{staticClass:"detail flex items-end relative",class:{noPoster:!t.films.name_logo},style:"background: url(".concat(t.films.background||t.films.poster,")")},[e("div",{staticClass:"detail__bottom relative z-10 flex flex-col items-center justify-between w-full px-5 pb-28 md:flex-row md:flex-wrap md:justify-center md:items-center md:px-8 md:py-8 lg:justify-between lg:px-12 lg:py-20"},[e("div",{staticClass:"detail__bottom-title mb-5 md:w-full lg:w-[35%] lg:m-0"},[t.films.name_logo?e("div",{staticClass:"md:flex md:justify-center lg:justify-start"},[e("img",{staticClass:"max-w-[350px]",attrs:{src:t.films.name_logo,alt:t.films.name}})]):t._e(),t._v(" "),t.films.name_logo?t._e():e("div",{staticClass:"flex max-w-[450px] m-auto flex-col lg:w-full lg:m-0"},[e("h2",{staticClass:"text-3xl font-bold text-center tracking-tight text-white lg:text-left"},[t._v("\n            "+t._s(t.films.name)+"\n          ")]),t._v(" "),e("small",{staticClass:"text-md w-full inline-flex justify-center lg:justify-start text-white/70"},[t._v("\n            "+t._s(t.films.orig_name)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"detail__bottom-btn inline-flex mb-5 justify-center md:mr-5 lg:m-0"},[e("button",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-ripple py-5 px-12 rounded-3xl font-bold text-xl items-center",on:{click:function(e){return t.playVideo()}}},[e("i",{staticClass:"pi pi-play text-white",staticStyle:{"font-size":"20px"}}),t._v("\n          Смотреть\n        ")])]),t._v(" "),e("div",{staticClass:"detail__bottom-inf inline-flex mb-5 justify-end lg:w-[35%] lg:m-0"},[e("span",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-ripple py-2 px-4 rounded-xl text-lg items-center mr-5"},[t._v("\n          "+t._s(t.films.age)+"\n        ")]),t._v(" "),e("span",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"p-ripple py-2 px-4 rounded-xl text-lg items-center"},[t._v("\n          "+t._s(t.films.year)+"\n        ")])])])]),t._v(" "),e("div",{staticClass:"filmPlayer",class:{active:t.clicked,little:!t.films.name_logo}},[e("div",{attrs:{id:"player"}})]),t._v(" "),e("THeMovieDetailInformation",{attrs:{actors:t.films.actors,countries:t.films.countries,description:t.films.description,directors:t.films.directors,filmFile:t.films.file,genres:t.films.genres,name:t.films.name,orig_name:t.films.orig_name,poster:t.films.poster,slogan:t.films.slogan,year:t.films.year}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);