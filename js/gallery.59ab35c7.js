(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"20f6":function(t,e,i){},2482:function(t,e,i){},"30ac":function(t,e,i){"use strict";i("2482")},"36a7":function(t,e,i){},7688:function(t,e,i){"use strict";(function(t){var i={name:"Tinybox",model:{prop:"index",event:"change"},props:{images:{type:Array,default:function(){return[]}},index:{type:Number,default:null},loop:{type:Boolean,default:!1},noThumbs:{type:Boolean,default:!1}},data:function(){return{slide:"next",swipeDone:!1,swipeX:null}},computed:{open:function(){return null!=this.index},prevImage:function(){return this.index>0?this.index-1:this.loop?this.images.length-1:this.index},nextImage:function(){return this.index<this.images.length-1?this.index+1:this.loop?0:this.index}},watch:{open:function(t){t?window.addEventListener("keyup",this.keyup):window.removeEventListener("keyup",this.keyup)},index:function(t){var e=this;this.noThumbs||null==t||this.$nextTick((function(){var i=e.$refs,n=i.thumbs,a=i.thumbItems[t];if(a.offsetLeft+a.clientWidth/2>window.innerWidth/2){var s=a.offsetLeft-window.innerWidth/2;s<n.scrollWidth?n.scrollLeft=s+a.clientWidth/2:n.scrollLeft=n.scrollWidth}else n.scrollLeft=0}))}},methods:{close:function(){var t=this.index;this.goto(null),this.$emit("close",t)},prev:function(){this.$emit("prev",this.prevImage),this.goto(this.prevImage,"prev")},next:function(){this.$emit("next",this.nextImage),this.goto(this.nextImage,"next")},goto:function(t,e){this.slide=e||(this.index<t?"next":"prev"),this.$emit("change",t)},keyup:function(t){"ArrowRight"===t.code||"ArrowRight"===t.key||"Right"===t.key||39===t.keyCode?this.next():"ArrowLeft"===t.code||"ArrowLeft"===t.key||"Left"===t.key||37===t.keyCode?this.prev():"Escape"!==t.code&&"Escape"!==t.key&&"Esc"!==t.key&&27!==t.keyCode||this.close()},swipeStart:function(t){this.swipeDone=!1,1===t.changedTouches.length&&(this.swipeX=t.changedTouches[0].screenX)},swipe:function(t){if(!this.swipeDone&&1===t.changedTouches.length){var e=t.changedTouches[0].screenX-this.swipeX;e>=50?(this.prev(),this.swipeDone=!0):e<=-50&&(this.next(),this.swipeDone=!0)}}}};function n(t,e,i,n,a,s,o,r,c,l){"boolean"!=typeof o&&(c=r,r=o,o=!1);var d,h="function"==typeof i?i.options:i;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),n&&(h._scopeId=n),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=d):e&&(d=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),d)if(h.functional){var u=h.render;h.render=function(t,e){return d.call(e),u(t,e)}}else{var g=h.beforeCreate;h.beforeCreate=g?[].concat(g,d):[d]}return i}var a,s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return function(t,e){return function(t,e){var i=s?e.media||"default":t,n=r[i]||(r[i]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",e.media&&n.element.setAttribute("media",e.media),void 0===a&&(a=document.head||document.getElementsByTagName("head")[0]),a.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(o),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var c=n.ids.size-1,l=document.createTextNode(o),d=n.element.childNodes;d[c]&&n.element.removeChild(d[c]),d.length?n.element.insertBefore(l,d[c]):n.element.appendChild(l)}}}(t,e)}}var r={};const c=n({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.open?i("div",{staticClass:"tinybox",on:{click:t.close,wheel:function(t){t.preventDefault()},touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"tinybox__content",class:{"tinybox__content--no-thumbs":t.noThumbs},on:{touchstart:t.swipeStart,touchmove:t.swipe}},[i("transition",{attrs:{name:t.slide}},[i("img",{key:t.images[t.index].src||t.images[t.index]||"",staticClass:"tinybox__content__image",attrs:{src:t.images[t.index].src||t.images[t.index]||"",alt:t.images[t.index].alt||t.images[t.index].caption||""},on:{click:function(e){return e.stopPropagation(),t.next(e)}}})]),t.images[t.index].caption?i("span",{staticClass:"tinybox__content__image__caption",domProps:{textContent:t._s(t.images[t.index].caption)}}):t._e(),t.prevImage!==t.index?i("div",{staticClass:"tinybox__content__control tinybox__content__control--prev",on:{click:function(e){return e.stopPropagation(),t.prev(e)}}}):t._e(),t.nextImage!==t.index?i("div",{staticClass:"tinybox__content__control tinybox__content__control--next",on:{click:function(e){return e.stopPropagation(),t.next(e)}}}):t._e(),i("div",{staticClass:"tinybox__content__control tinybox__content__control--close",on:{click:function(e){return e.stopPropagation(),t.close(e)}}})],1),t.noThumbs?t._e():i("div",{ref:"thumbs",staticClass:"tinybox__thumbs",on:{touchmove:function(t){t.stopPropagation()},wheel:function(t){t.stopPropagation()}}},t._l(t.images,(function(e,n){return i("img",{key:n,ref:"thumbItems",refInFor:!0,staticClass:"tinybox__thumbs__item",class:{"tinybox__thumbs__item--active":t.index===n},attrs:{src:e.thumbnail||e.src||e||"",alt:t.images[t.index].alt||t.images[t.index].caption||""},on:{click:function(e){return e.stopPropagation(),t.goto(n)}}})})),0)]):t._e()])},staticRenderFns:[]},(function(t){t&&t("data-v-7c98eda5_0",{source:".tinybox[data-v-7c98eda5]{background-color:rgba(0,0,0,.9);bottom:0;left:0;position:fixed;right:0;text-align:center;top:0;z-index:1000}.tinybox__content[data-v-7c98eda5]{height:85%;position:relative;width:100%;display:flex;align-items:center;justify-content:center}.tinybox__content--no-thumbs[data-v-7c98eda5]{height:100%}.tinybox__content__image[data-v-7c98eda5]{background-color:#222;cursor:pointer;display:inline-block;max-height:90%;max-width:80%;position:absolute}.tinybox__content__image__caption[data-v-7c98eda5]{position:absolute;bottom:0;padding:.5rem .75rem;border-radius:5px;color:#fff;background-color:rgba(0,0,0,.9);opacity:.75;font-family:sans-serif;font-weight:lighter;font-size:1.2rem}.tinybox__content__control[data-v-7c98eda5]{background:no-repeat center/24px;cursor:pointer;opacity:.5;position:absolute;top:0;transition:opacity .3s ease;width:4em}.tinybox__content__control[data-v-7c98eda5]:hover{opacity:1}.tinybox__content__control--prev[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M20 30 L8 16 20 2' /%3E%3C/svg%3E\");bottom:0;left:0}.tinybox__content__control--next[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M12 30 L24 16 12 2' /%3E%3C/svg%3E\");bottom:0;right:0}.tinybox__content__control--close[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 46 46' width='40' height='40' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M2 30 L30 2 M30 30 L2 2' /%3E%3C/svg%3E\");height:2.6em;right:0}.tinybox__thumbs[data-v-7c98eda5]{bottom:0;height:15%;left:0;line-height:0;padding:0 10px;position:absolute;right:0;overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;white-space:nowrap}.tinybox__thumbs__item[data-v-7c98eda5]{cursor:pointer;display:inline-block;height:10vh;margin:2.5vh 5px;object-fit:cover;overflow:hidden;width:10vh}.tinybox__thumbs__item--active[data-v-7c98eda5]{opacity:.3}.fade-enter[data-v-7c98eda5],.fade-leave-active[data-v-7c98eda5],.next-enter[data-v-7c98eda5],.next-leave-active[data-v-7c98eda5],.prev-enter[data-v-7c98eda5],.prev-leave-active[data-v-7c98eda5]{opacity:0}.fade-enter-active[data-v-7c98eda5],.fade-leave-active[data-v-7c98eda5],.next-leave-active[data-v-7c98eda5],.prev-leave-active[data-v-7c98eda5]{transition:opacity .3s ease}.prev-enter[data-v-7c98eda5]{transform:translateX(-40px)}.next-enter[data-v-7c98eda5]{transform:translateX(40px)}.next-enter-active[data-v-7c98eda5],.prev-enter-active[data-v-7c98eda5]{transition:opacity .3s ease,transform .3s ease}",map:void 0,media:void 0})}),i,"data-v-7c98eda5",!1,void 0,!1,o,void 0,void 0);var l=null;"undefined"!=typeof window?l=window.Vue:"undefined"!=typeof t&&(l=t.Vue),l&&l.use({install:function t(e){t.installed||(t.installed=!0,e.component(c.name,c))}}),e["a"]=c}).call(this,i("c8ba"))},"8a79":function(t,e,i){"use strict";var n=i("23e7"),a=i("06cf").f,s=i("50c4"),o=i("5a34"),r=i("1d80"),c=i("ab13"),l=i("c430"),d="".endsWith,h=Math.min,u=c("endsWith"),g=!l&&!u&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!g&&!u},{endsWith:function(t){var e=String(r(this));o(t);var i=arguments.length>1?arguments[1]:void 0,n=s(e.length),a=void 0===i?n:h(s(i),n),c=String(t);return d?d.call(e,c,a):e.slice(a-c.length,a)===c}})},"8efc":function(t,e,i){},"9b23":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"gallery-page fill-height mt-8"},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("Tinybox",{attrs:{images:t.galleryGroups,loop:""},model:{value:t.tinybox,callback:function(e){t.tinybox=e},expression:"tinybox"}}),t._l(t.galleryGroups,(function(e){return i("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4"}},[i("v-card",{staticClass:"gallery-card",on:{click:function(){t.tinybox=0}}},[i("v-img",{attrs:{src:e.image,height:"250px"}},[i("div",{staticClass:"gallery-card__title pa-1 text-body-1"},[t._v(" "+t._s(e.title)+" ")])])],1)],1)}))],2)],1)},a=[],s=i("d4ec"),o=i("262e"),r=i("2caf"),c=i("9ab4"),l=i("1b40"),d=i("7688"),h=function(t){Object(o["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.tinybox=null,t.galleryGroups=[{id:0,title:"Plumbing restoration",image:"/images/gallery-0.jpeg",src:"/images/gallery-0.jpeg"},{id:1,title:"Painting",image:"/images/gallery-1.jpeg",src:"/images/gallery-1.jpeg"},{id:2,title:"New wall",image:"/images/gallery-2.jpeg",src:"/images/gallery-2.jpeg"},{id:3,title:"New balcony",image:"/images/gallery-3.jpeg",src:"/images/gallery-3.jpeg"},{id:4,title:"New porch",image:"/images/gallery-4.jpeg",src:"/images/gallery-4.jpeg"},{id:5,title:"New concrete flooring",image:"/images/gallery-5.jpeg",src:"/images/gallery-5.jpeg"},{id:6,title:"New concrete column",image:"/images/gallery-6.jpeg",src:"/images/gallery-6.jpeg"},{id:7,title:"Pre-covid",image:"/images/gallery-7.jpeg",src:"/images/gallery-7.jpeg"}],t}return i}(l["b"]);h=Object(c["a"])([Object(l["a"])({components:{Tinybox:d["a"]}})],h);var u=h,g=u,p=(i("30ac"),i("2877")),m=i("6544"),f=i.n(m),v=i("b0af"),_=i("62ad"),y=i("a523"),b=i("adda"),x=i("0fd9"),w=Object(p["a"])(g,n,a,!1,null,null,null);e["default"]=w.exports;f()(w,{VCard:v["a"],VCol:_["a"],VContainer:y["a"],VImg:b["a"],VRow:x["a"]})},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var n=i("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(a.staticClass+=" ".concat(r.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,s)}})}var s=i("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,a=e.data,o=e.children,r=a.attrs;return r&&(a.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}})},adda:function(t,e,i){"use strict";var n=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),s=(i("36a7"),i("24b2")),o=i("58df"),r=Object(o["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=r,l=i("7560"),d=i("d9f7"),h=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})}}]);
//# sourceMappingURL=gallery.59ab35c7.js.map