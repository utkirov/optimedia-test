(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{431:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:()=>({observer:null,intersected:!1,loaded:!1}),computed:{srcImage(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error(){this.$emit("error",this.$el)}},render(t){let img=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,img]:[img]):img},mounted(){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((t=>{t[0].isIntersecting&&(this.intersected=!0,this.observer.disconnect(),this.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed(){"IntersectionObserver"in window&&this.observer.disconnect()}}},434:function(t,e,r){"use strict";r.r(e);r(42),r(46);var n=r(431),o={props:{film:{type:Object,default:function(){return[]}},movieType:{type:String}},data:function(){return{}},components:{VLazyImage:n.a},created:function(){}},c=r(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"group relative"},[e("div",{staticClass:"transition w-full h-56 sm:h-64 md:h-64 lg:h-64 xl:h-64 2xl:h-64 overflow-hidden rounded-2xl bg-gray-200 border p-1 border-white/10"},[e("v-lazy-image",{staticClass:"object-cover object-center w-full h-full rounded-2xl",attrs:{alt:t.film.name,src:t.film.poster}})],1),t._v(" "),e("div",{staticClass:"mt-4 flex justify-between"},[e("div",[e("h3",{staticClass:"text-sm text-white"},[e("nuxt-link",{attrs:{to:"".concat(t.movieType,"/").concat(t.film.catalog_id)}},[e("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.film.name)+"\n        ")])],1),t._v(" "),e("h6",{staticClass:"text-white"},[t._v("\n        "+t._s(t.film.year)+"\n      ")])])])])}),[],!1,null,"5af277f2",null);e.default=component.exports}}]);