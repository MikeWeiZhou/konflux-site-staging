(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dd04a16"],{"10a9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-theme-provider",{attrs:{dark:""}},[i("section",{attrs:{id:"hero-alt"}},[i("base-img",{attrs:{height:t.$vuetify.breakpoint.mdAndUp?350:225,gradient:t.gradient,src:t.src,color:"#45516b",flat:"","max-width":"100%",tile:""}},[t.title?i("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("base-heading",{attrs:{title:t.title,space:"2",weight:"500"}}),i("base-divider",{attrs:{color:"primary",dense:""}}),i("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:t.items,divider:">"}})],1)],1):t._e()],1)],1)])},r=[],a=(i("99af"),i("7bc6")),n={name:"SectionHeroAlt",metaInfo:function(){var t=this;return{changed:function(e){return t.title=e.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},data:function(){return{title:""}},computed:{gradient:function(){var t="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),e=Object(a["b"])(Object(a["a"])(t));return"to top, ".concat(e,", ").concat(e)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}}},c=n,d=(i("68c1"),i("2877")),o=i("6544"),u=i.n(o),l=(i("a15b"),i("5530")),h=(i("abd3"),i("ade3")),m=i("1c87"),b=i("58df"),f=Object(b["a"])(m["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(h["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return t("li",[t(i,Object(l["a"])(Object(l["a"])({},s),{},{attrs:Object(l["a"])(Object(l["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),p=i("80d2"),v=Object(p["g"])("v-breadcrumbs__divider","li"),g=i("7560"),j=Object(b["a"])(g["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(l["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],s=0;s<this.items.length;s++){var r=this.items[s];i.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(f,{key:i.join("."),props:r},[r.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),O=i("62ad"),y=i("0fd9"),$=i("480e"),C=Object(d["a"])(c,s,r,!1,null,null,null);e["default"]=C.exports;u()(C,{VBreadcrumbs:j,VCol:O["a"],VRow:y["a"],VThemeProvider:$["a"]})},"5ff9":function(t,e,i){},"68c1":function(t,e,i){"use strict";i("5ff9")},abd3:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7dd04a16.cf191a46.js.map