(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{494:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var o=n(497),r=n(1),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),h=Object(r.i)("v-card__title");o.a},495:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("2065bca8",content,!0,{sourceMap:!1})},496:function(t,e,n){var o=n(18)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},505:function(t,e,n){"use strict";var o=n(97),r=n(2),c=(n(37),n(74),n(73),n(56),n(62),n(5),n(138),n(11),n(8),n(9),n(20),n(10),n(21),n(495),n(684)),l=n(500),d=n(217),h=n(503),v=n(219),f=n(501),m=n(502),x=n(218),w=n(15),y=n(12),_=n(1);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(w.a)(d.a,h.a,v.a,f.a,m.a,l.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:Object(_.h)(this.maxWidth),width:Object(_.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},545:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("523d2760",content,!0,{sourceMap:!1})},559:function(t,e,n){"use strict";n(545)},560:function(t,e,n){var o=n(18)(!1);o.push([t.i,".cardBox[data-v-111658a8]{background:#fff;text-align:center;padding:20px;border-radius:8px}.cardBox .svgLogo[data-v-111658a8]{margin-bottom:20px}.cardBox .cardTitle[data-v-111658a8]{text-align:center;align-items:center;justify-content:center;margin-bottom:8px;border-radius:0!important;padding:0}.cardBox .cardTitle header[data-v-111658a8]{font-weight:500;font-size:1.8rem;color:var(--secondary-color)}.cardBox .subText[data-v-111658a8]{font-weight:400;color:var(--bar-sub-text-color);line-height:20px;letter-spacing:-.02em;padding:0}.cardBox .Btn[data-v-111658a8],.cardBox .subText[data-v-111658a8]{font-size:1.4rem;margin-bottom:20px}.cardBox .Btn[data-v-111658a8]{min-height:3.8rem;max-width:100%;width:100%;border-radius:8px;font-weight:500;border:1px solid var(--primary-color);color:#fff;background:var(--primary-color);text-transform:none;box-shadow:0 1px 2px rgba(0,0,0,.05)}.cardBox .Btn.delete[data-v-111658a8]{background:transparent;color:var(--nav-color);border:1px solid var(--border-color)}",""]),t.exports=o},594:function(t,e,n){"use strict";n.r(e);var o=n(228),r=n(497),c=n(494),l=n(505),d={data:function(){return{showBox:!1,width:"100%"}},methods:{showDialogue:function(){this.showBox=!0}}},h=(n(559),n(59)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{"max-width":"384",width:t.width},model:{value:t.showBox,callback:function(e){t.showBox=e},expression:"showBox"}},[e(r.a,{staticClass:"cardBox"},[e("div",{staticClass:"svgLogo"},[e("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",rx:"24",fill:"#FEE2E2"}}),t._v(" "),e("path",{attrs:{d:"M31 19L30.1327 31.1425C30.0579 32.1891 29.187 33 28.1378 33H19.8622C18.813 33 17.9421 32.1891 17.8673 31.1425L17 19M22 23V29M26 23V29M27 19V16C27 15.4477 26.5523 15 26 15H22C21.4477 15 21 15.4477 21 16V19M16 19H32",stroke:"#EF4444","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e(c.b,{staticClass:"cardTitle"},[e("header",[t._v("Delete admin")])]),t._v(" "),e(c.a,{staticClass:"subText"},[t._v("\n        Confirm deletion of administrator. This will delete all related\n        information and cannot be undone. Are you sure you want to proceed?\n      ")]),t._v(" "),e("div",{staticClass:"text-center"},[e(o.a,{staticClass:"Btn"},[t._v(" Cancel ")])],1),t._v(" "),e("div",{staticClass:"text-center"},[e(o.a,{staticClass:"Btn delete"},[t._v(" Yes, Delete ")])],1)],1)],1)],1)}),[],!1,null,"111658a8",null);e.default=component.exports}}]);