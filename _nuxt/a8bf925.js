(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{431:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:()=>({observer:null,intersected:!1,loaded:!1}),computed:{srcImage(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error(){this.$emit("error",this.$el)}},render(t){let img=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,img]:[img]):img},mounted(){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((t=>{t[0].isIntersecting&&(this.intersected=!0,this.observer.disconnect(),this.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed(){"IntersectionObserver"in window&&this.observer.disconnect()}}},434:function(t,e,r){"use strict";r.r(e);r(42),r(46);var n=r(431),o={props:{film:{type:Object,default:function(){return[]}},movieType:{type:String}},data:function(){return{}},components:{VLazyImage:n.a},created:function(){}},c=r(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"group relative"},[e("div",{staticClass:"transition w-full h-56 sm:h-64 md:h-64 lg:h-64 xl:h-64 2xl:h-64 overflow-hidden rounded-2xl bg-gray-200 border p-1 border-white/10"},[e("v-lazy-image",{staticClass:"object-cover object-center w-full h-full rounded-2xl",attrs:{alt:t.film.name,src:t.film.poster}})],1),t._v(" "),e("div",{staticClass:"mt-4 flex justify-between"},[e("div",[e("h3",{staticClass:"text-sm text-white"},[e("nuxt-link",{attrs:{to:"".concat(t.movieType,"/").concat(t.film.catalog_id)}},[e("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.film.name)+"\n        ")])],1),t._v(" "),e("h6",{staticClass:"text-white"},[t._v("\n        "+t._s(t.film.year)+"\n      ")])])])])}),[],!1,null,"5af277f2",null);e.default=component.exports},482:function(t,e,r){"use strict";r.r(e);var n=r(16),o=(r(66),r(46),r(70),r(14),r(30),r(434)),c=r(431),l=r(175),d=r.n(l),h={components:{VLazyImage:c.a,InfiniteLoading:d.a,TheMovieCard:o.default},props:["type","title"],data:function(){return{titles:[],films:[],page:1}},computed:{data:function(){return this.$store.getters["".concat(this.type,"/").concat(this.type)]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.$store.getters["".concat(t.type,"/").concat(t.type)].length){e.next=3;break}return e.next=3,t.$store.dispatch("".concat(t.type,"/fetch"));case 3:t.films=JSON.parse(JSON.stringify(t.data));case 4:case"end":return e.stop()}}),e)})))()},methods:{infiniteScroll:function(t){var e=this;setTimeout((function(){var r=e.toKnowType(e.type);e.page++,e.$axios.$get("https://api.optimedia.uz/api/v1/web/catalog/".concat(r,"?page=").concat(e.page)).then((function(r){r.data.list.length>1?(e.$store.commit("".concat(e.type,"/set").concat(e.type),r.data.list),r.data.list.forEach((function(t){return e.films.push(t)})),t.loaded()):t.complete()})).catch((function(t){console.log(t)}))}),500)},toKnowType:function(t){return"films"===t?"getMovies":"cartoons"===t?"getCartoons":"serials"===t?"getSerials":void 0}}},f=r(1),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"px-10 py-10"},[e("h2",{staticClass:"text-4xl font-bold tracking-tight text-white"},[t._v(t._s(t.title))]),t._v(" "),e("section",[e("div",{staticClass:"mt-6 grid grid-cols-3 gap-y-2 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 xl:gap-x-4 xl:gap-y-8"},t._l(t.films,(function(t,r){return e("TheMovieCard",{key:r,attrs:{film:t}})})),1),t._v(" "),t.data.length?e("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteScroll}}):t._e()],1)])}),[],!1,null,"4d5d53ee",null);e.default=component.exports}}]);