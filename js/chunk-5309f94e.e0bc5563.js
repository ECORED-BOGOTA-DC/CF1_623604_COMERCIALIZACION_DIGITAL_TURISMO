(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5309f94e"],{"5d4d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"img-infografica-b",class:{"img-infografica-b--open":t.selectedItem}},[e("div",{ref:"img-ref-"+t.mainId,staticClass:"img-infografica-b__img"},[t._t("imagen")],2),t.elements.length?e("div",{staticClass:"img-infografica-b__content"},t._l(t.elements,(function(i,s){return e("div",{key:"img-infografica-b-btn-"+i.id,staticClass:"img-infografica-b__item",style:[{top:i.y},{left:i.x}],on:{click:function(e){t.selected=i.id}}},[t.showIndicator&&t.firstElement.id===i.id?e("div",{staticClass:"indicador--click"}):t._e(),e("div",{staticClass:"img-infografica-b__item__tooltip"},[e("span",{staticClass:"text-small",domProps:{innerHTML:t._s(i.tooltip)}})]),e("div",{staticClass:"img-infografica-b__item__dot"}),i.hasOwnProperty("numero")?e("div",{staticClass:"img-infografica-b__item__numero"},[t._v(t._s(i.numero))]):e("div",{staticClass:"img-infografica-b__item__numero"},[e("i",{staticClass:"fas fa-plus"})])])})),0):t._e(),t.selectedItem?e("div",{staticClass:"img-infografica-b__modal p-3 p-md-4 p-xl-5",style:t.getImageHeight()},[e("div",{staticClass:"img-infografica-b__modal__btn-cerrar",on:{click:function(e){t.selected=0}}},[e("i",{staticClass:"fas fa-times"})]),e("div",{directives:[{name:"child",rawName:"v-child",value:t.selectedItem.elm,expression:"selectedItem.elm"}],staticClass:"img-infografica-b__modal__contenido"})]):t._e(),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)])},a=[],n=i("ab14"),d={name:"ImagenInfograficaB",mixins:[n["a"]],data:()=>({firstSelection:!1,showIndicator:!0}),computed:{selectedItem(){return this.elements.find(t=>t.id===this.selected)},firstElement(){return this.elements.length&&this.elements[0]}},watch:{selected(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getImageHeight(){const t=this.$refs["img-ref-"+this.mainId];if(t)return{"min-height":t.clientHeight+"px"}}}},r=d,l=i("2877"),c=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}}}]);
//# sourceMappingURL=chunk-5309f94e.e0bc5563.js.map