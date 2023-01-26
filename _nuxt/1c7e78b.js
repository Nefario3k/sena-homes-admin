(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{495:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("2065bca8",content,!0,{sourceMap:!1})},496:function(t,e,n){var o=n(18)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},505:function(t,e,n){"use strict";var o=n(97),r=n(2),c=(n(37),n(74),n(73),n(56),n(62),n(5),n(138),n(11),n(8),n(9),n(20),n(10),n(21),n(495),n(684)),l=n(500),d=n(217),v=n(503),h=n(219),C=n(501),f=n(502),m=n(218),x=n(15),_=n(12),w=n(1);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=Object(x.a)(d.a,v.a,h.a,C.a,f.a,l.a);e.a=B.extend({name:"v-dialog",directives:{ClickOutside:m.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(_.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},509:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("41ddf167",content,!0,{sourceMap:!1})},514:function(t,e,n){"use strict";n(509)},515:function(t,e,n){var o=n(18)(!1);o.push([t.i,".cardBox[data-v-3a08994e]{background:#fff;text-align:center;padding:35px;border-radius:8px}.cardBox .userImageEmail[data-v-3a08994e]{width:6.4rem;height:6.4rem;background-color:var(--primary-color);display:inline-flex;align-items:center;justify-content:center;text-align:center;border-radius:50%!important;margin-bottom:10px}.cardBox .userImageEmail span[data-v-3a08994e]{color:#fff;text-transform:uppercase;font-weight:500;font-size:1.8rem}.cardBox .user_info[data-v-3a08994e]{margin-bottom:35px}.cardBox .user_info h3[data-v-3a08994e]{font-weight:600;font-size:1.6rem;color:var(--text03-color)}.cardBox .header[data-v-3a08994e]{margin-bottom:20px;text-align:left}.cardBox .header header[data-v-3a08994e]{font-weight:600;font-size:1.6rem;color:var(--seondary-color)}.cardBox .header.userAction header[data-v-3a08994e]{color:var(--text03-color)}.cardBox .contact_details[data-v-3a08994e]{display:flex;width:100%;flex-direction:column;grid-gap:20px;gap:20px;text-align:left;margin-bottom:35px}.cardBox .contact_details li[data-v-3a08994e]{display:flex;list-style-type:none;align-items:center;grid-gap:34px;gap:34px}.cardBox .contact_details li p[data-v-3a08994e]{margin:0;font-weight:400;font-size:1.2rem;color:var(--seondary-color)}.cardBox .contact_details li p.user_credentials[data-v-3a08994e]{font-weight:500}.cardBox .contact_details.contact_actions[data-v-3a08994e]{margin-bottom:0}.cardBox .contact_details.contact_actions li p[data-v-3a08994e]{color:var(--text03-color)}.cardBox .contact_details.contact_actions li p.user_credentials[data-v-3a08994e]{color:var(--primary-color)}.cardBox .contact_details.contact_actions li p.user_credentials a[data-v-3a08994e]{color:inherit}@media(max-width:540px){.cardBox[data-v-3a08994e]{padding:42px 24px!important}}",""]),t.exports=o},524:function(t,e,n){"use strict";n.r(e);var o=n(497),r=n(505),c={data:function(){return{showBox:!1,width:"100%"}},methods:{showDialogue:function(){this.showBox=!0}}},l=(n(514),n(59)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{attrs:{"max-width":"329",width:t.width},model:{value:t.showBox,callback:function(e){t.showBox=e},expression:"showBox"}},[e(o.a,{staticClass:"cardBox"},[e("div",{staticClass:"userImageEmail"},[e("span",[t._v("la")])]),t._v(" "),e("div",{staticClass:"user_info"},[e("h3",[t._v("Yumiko Yamashita")])]),t._v(" "),e("div",{staticClass:"header"},[e("header",[t._v("Contact Details")])]),t._v(" "),e("ul",{staticClass:"contact_details"},[e("li",[e("div",{staticClass:"svg_icon"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F3F4F6"}}),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip0_809_9688)"}},[e("path",{attrs:{d:"M21.3335 10.668H10.6668C9.9335 10.668 9.34016 11.268 9.34016 12.0013L9.3335 20.0013C9.3335 20.7346 9.9335 21.3346 10.6668 21.3346H21.3335C22.0668 21.3346 22.6668 20.7346 22.6668 20.0013V12.0013C22.6668 11.268 22.0668 10.668 21.3335 10.668ZM20.6668 20.0013H11.3335C10.9668 20.0013 10.6668 19.7013 10.6668 19.3346V13.3346L15.2935 16.228C15.7268 16.5013 16.2735 16.5013 16.7068 16.228L21.3335 13.3346V19.3346C21.3335 19.7013 21.0335 20.0013 20.6668 20.0013ZM16.0002 15.3346L10.6668 12.0013H21.3335L16.0002 15.3346Z",fill:"#1C212B"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_809_9688"}},[e("rect",{attrs:{width:"16",height:"16",fill:"white",transform:"translate(8 8)"}})])])])]),t._v(" "),e("div",{staticClass:"contact_content"},[e("p",[t._v("Email")]),t._v(" "),e("p",{staticClass:"user_credentials"},[t._v("wade.warren@site.com")])])]),t._v(" "),e("li",[e("div",{staticClass:"svg_icon"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F3F4F6"}}),t._v(" "),e("path",{attrs:{d:"M20.7559 17.4226L22.9627 19.6294C23.2594 19.9261 23.2594 20.4072 22.9627 20.704C21.3583 22.3083 18.8184 22.4888 17.0033 21.1275L15.6905 20.1429C14.2375 19.0532 12.9468 17.7625 11.8571 16.3095L10.8725 14.9967C9.51117 13.1816 9.69168 10.6417 11.296 9.03731C11.5928 8.74056 12.0739 8.74056 12.3706 9.03731L14.5774 11.2441C14.9028 11.5695 14.9028 12.0972 14.5774 12.4226L13.7265 13.2735C13.5912 13.4088 13.5577 13.6154 13.6432 13.7864C14.6321 15.7642 16.2358 17.3679 18.2136 18.3568C18.3846 18.4423 18.5912 18.4088 18.7265 18.2735L19.5774 17.4226C19.9028 17.0972 20.4305 17.0972 20.7559 17.4226Z",stroke:"#222222","stroke-width":"0.833333"}})])]),t._v(" "),e("div",{staticClass:"contact_content"},[e("p",[t._v("Phone")]),t._v(" "),e("p",{staticClass:"user_credentials"},[t._v("(319) 555-0115")])])])]),t._v(" "),e("div",{staticClass:"header userAction"},[e("header",[t._v("User Actions")])]),t._v(" "),e("ul",{staticClass:"contact_details contact_actions"},[e("li",[e("div",{staticClass:"svg_icon"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F3F4F6"}}),t._v(" "),e("path",{attrs:{d:"M12.0001 12C12.0001 11.8674 12.0527 11.7402 12.1465 11.6464C12.2403 11.5527 12.3675 11.5 12.5001 11.5H15.5001C15.6327 11.5 15.7599 11.5527 15.8536 11.6464C15.9474 11.7402 16.0001 11.8674 16.0001 12C16.0001 12.1326 15.9474 12.2598 15.8536 12.3536C15.7599 12.4473 15.6327 12.5 15.5001 12.5H12.5001C12.3675 12.5 12.2403 12.4473 12.1465 12.3536C12.0527 12.2598 12.0001 12.1326 12.0001 12ZM12.5001 13.5C12.3675 13.5 12.2403 13.5527 12.1465 13.6464C12.0527 13.7402 12.0001 13.8674 12.0001 14C12.0001 14.1326 12.0527 14.2598 12.1465 14.3536C12.2403 14.4473 12.3675 14.5 12.5001 14.5H14.5001C14.6327 14.5 14.7599 14.4473 14.8536 14.3536C14.9474 14.2598 15.0001 14.1326 15.0001 14C15.0001 13.8674 14.9474 13.7402 14.8536 13.6464C14.7599 13.5527 14.6327 13.5 14.5001 13.5H12.5001ZM14.0001 7C12.9591 6.99965 11.936 7.27012 11.0312 7.78485C10.1264 8.29957 9.37111 9.04083 8.83949 9.9358C8.30788 10.8308 8.01825 11.8486 7.99907 12.8894C7.97988 13.9302 8.2318 14.958 8.73007 15.872L8.02007 18.362C7.99508 18.4494 7.99442 18.542 8.01814 18.6298C8.04187 18.7176 8.08908 18.7972 8.1547 18.8602C8.22033 18.9231 8.30187 18.967 8.39057 18.9871C8.47926 19.0071 8.57175 19.0026 8.65807 18.974L10.9961 18.195C11.7929 18.6555 12.685 18.9265 13.6034 18.987C14.5217 19.0475 15.4417 18.896 16.2921 18.5441C17.1425 18.1922 17.9006 17.6494 18.5077 16.9577C19.1147 16.266 19.5545 15.4439 19.7931 14.555C20.0316 13.6661 20.0624 12.7343 19.8832 11.8315C19.704 10.9288 19.3195 10.0794 18.7594 9.34908C18.1994 8.61873 17.4789 8.027 16.6536 7.61967C15.8283 7.21233 14.9204 7.00031 14.0001 7ZM9.00007 13C9.00023 11.8906 9.36935 10.8128 10.0493 9.93618C10.7293 9.05959 11.6815 8.43403 12.756 8.15799C13.8305 7.88195 14.9663 7.97111 15.9845 8.41142C17.0028 8.85174 17.8457 9.6182 18.3806 10.5902C18.9155 11.5621 19.1119 12.6843 18.9389 13.7802C18.766 14.876 18.2335 15.8832 17.4253 16.6432C16.6172 17.4032 15.5792 17.8728 14.4748 17.9782C13.3704 18.0835 12.2623 17.8185 11.3251 17.225C11.2624 17.1853 11.1916 17.16 11.1179 17.151C11.0442 17.142 10.9695 17.1495 10.8991 17.173L9.24107 17.726L9.75107 15.945C9.76965 15.8794 9.77462 15.8107 9.76568 15.7431C9.75674 15.6755 9.73407 15.6105 9.69907 15.552C9.23993 14.78 8.99838 13.8982 9.00007 13ZM18.2761 20.947L15.8741 19.747C16.3141 19.624 16.7371 19.46 17.1371 19.259L18.5001 19.941L23.0001 17.691V17C23.0001 16.7348 22.8947 16.4804 22.7072 16.2929C22.5196 16.1054 22.2653 16 22.0001 16H20.3261C20.4791 15.68 20.6071 15.345 20.7101 15H22.0001C22.5305 15 23.0392 15.2107 23.4143 15.5858C23.7894 15.9609 24.0001 16.4696 24.0001 17V22C24.0001 22.5304 23.7894 23.0391 23.4143 23.4142C23.0392 23.7893 22.5305 24 22.0001 24H15.0001C14.4696 24 13.9609 23.7893 13.5859 23.4142C13.2108 23.0391 13.0001 22.5304 13.0001 22V19.93C13.3271 19.976 13.6601 20 14.0001 20V22C14.0001 22.2652 14.1054 22.5196 14.293 22.7071C14.4805 22.8946 14.7349 23 15.0001 23H22.0001C22.2653 23 22.5196 22.8946 22.7072 22.7071C22.8947 22.5196 23.0001 22.2652 23.0001 22V18.809L18.7241 20.947C18.6545 20.9818 18.5778 21 18.5001 21C18.4223 21 18.3456 20.9818 18.2761 20.947Z",fill:"#1C212B"}})])]),t._v(" "),e("div",{staticClass:"contact_content"},[e("p",[t._v("Call back requests")]),t._v(" "),e("p",{staticClass:"user_credentials"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("View all")])],1)])]),t._v(" "),e("li",[e("div",{staticClass:"svg_icon"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F3F4F6"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.9739 8.83203H17.0264C18.0953 8.83203 18.9333 8.83202 19.6028 8.89568C20.2851 8.96056 20.8439 9.09508 21.3364 9.39691C21.8522 9.71299 22.2859 10.1467 22.602 10.6625C22.9038 11.155 23.0383 11.7137 23.1032 12.3961C23.1668 13.0656 23.1668 13.9035 23.1668 14.9725V15.6839C23.1668 16.4448 23.1668 17.0413 23.134 17.5233C23.1005 18.0136 23.0313 18.4216 22.875 18.799C22.486 19.7383 21.7397 20.4845 20.8005 20.8736C20.2638 21.0959 19.6526 21.1452 18.8157 21.1596C18.523 21.1646 18.3376 21.1683 18.1962 21.184C18.0641 21.1986 18.0129 21.22 17.983 21.2375C17.9514 21.2559 17.9083 21.2894 17.8336 21.3919C17.7527 21.5029 17.6612 21.6564 17.5163 21.9013L17.1549 22.5118C16.0005 24.5 15.8326 24.1796 14.8454 22.5118C13.8583 20.8441 14.484 21.9013 14.484 21.9013C14.3391 21.6564 14.2476 21.5029 14.1667 21.3919C14.092 21.2894 14.0489 21.2559 14.0173 21.2375C13.9874 21.22 13.9362 21.1986 13.8041 21.184C13.6627 21.1683 13.4773 21.1646 13.1846 21.1596C12.3477 21.1452 11.7365 21.0959 11.1999 20.8736C10.2606 20.4845 9.51435 19.7383 9.12529 18.799C8.96898 18.4216 8.89983 18.0136 8.86637 17.5233C8.83349 17.0413 8.83349 16.4448 8.8335 15.6839L8.8335 14.9725C8.83349 13.9035 8.83349 13.0656 8.89714 12.3961C8.96202 11.7137 9.09654 11.155 9.39838 10.6625C9.71446 10.1467 10.1481 9.71299 10.6639 9.39691C11.1565 9.09508 11.7152 8.96056 12.3976 8.89568C13.067 8.83202 13.905 8.83203 14.9739 8.83203ZM12.4922 9.89119C11.8831 9.94911 11.4954 10.0602 11.1864 10.2496C10.8052 10.4832 10.4846 10.8037 10.251 11.185C10.0616 11.494 9.95057 11.8816 9.89265 12.4908C9.83402 13.1074 9.8335 13.8979 9.8335 14.9987V15.6654C9.8335 16.4488 9.83377 17.0113 9.86405 17.4552C9.89403 17.8946 9.95175 18.1811 10.0492 18.4163C10.3367 19.1105 10.8883 19.6621 11.5826 19.9497C11.9263 20.0921 12.3649 20.1453 13.2018 20.1597L13.223 20.1601C13.4884 20.1647 13.7209 20.1687 13.9141 20.1901C14.1218 20.2131 14.3249 20.2595 14.5201 20.373C14.7136 20.4856 14.8532 20.636 14.9749 20.8029C15.0873 20.9572 15.2029 21.1525 15.3337 21.3736L15.706 22.0025C15.8345 22.2196 16.1658 22.2196 16.2943 22.0025L16.6666 21.3736C16.7974 21.1525 16.913 20.9572 17.0254 20.8029C17.1471 20.636 17.2867 20.4856 17.4802 20.373C17.6754 20.2595 17.8785 20.2131 18.0862 20.1901C18.2794 20.1687 18.5119 20.1647 18.7773 20.1601L18.7985 20.1597C19.6354 20.1453 20.074 20.0921 20.4178 19.9497C21.112 19.6621 21.6636 19.1105 21.9512 18.4163C22.0486 18.1811 22.1063 17.8946 22.1363 17.4552C22.1666 17.0113 22.1668 16.4488 22.1668 15.6654V14.9987C22.1668 13.8979 22.1663 13.1074 22.1077 12.4908C22.0498 11.8816 21.9387 11.494 21.7493 11.185C21.5157 10.8037 21.1952 10.4832 20.8139 10.2496C20.5049 10.0602 20.1173 9.94911 19.5081 9.89119C18.8915 9.83256 18.101 9.83203 17.0002 9.83203H15.0002C13.8993 9.83203 13.1088 9.83256 12.4922 9.89119Z",fill:"#1C212B"}}),t._v(" "),e("path",{attrs:{d:"M15.5252 14.236C15.7363 13.8573 15.8419 13.668 15.9997 13.668C16.1575 13.668 16.263 13.8573 16.4741 14.236L16.5288 14.334C16.5888 14.4416 16.6187 14.4954 16.6655 14.5309C16.7123 14.5664 16.7705 14.5796 16.887 14.606L16.9931 14.63C17.403 14.7227 17.608 14.7691 17.6568 14.9259C17.7055 15.0827 17.5658 15.2461 17.2863 15.573L17.214 15.6575C17.1346 15.7504 17.0949 15.7968 17.077 15.8543C17.0592 15.9117 17.0652 15.9737 17.0772 16.0976L17.0881 16.2104C17.1304 16.6464 17.1515 16.8644 17.0238 16.9613C16.8961 17.0583 16.7042 16.9699 16.3204 16.7932L16.2211 16.7474C16.112 16.6972 16.0575 16.6721 15.9997 16.6721C15.9419 16.6721 15.8873 16.6972 15.7783 16.7474L15.679 16.7932C15.2951 16.9699 15.1032 17.0583 14.9755 16.9613C14.8479 16.8644 14.869 16.6464 14.9112 16.2104L14.9222 16.0976C14.9342 15.9737 14.9402 15.9117 14.9223 15.8543C14.9045 15.7968 14.8647 15.7504 14.7853 15.6575L14.713 15.573C14.4335 15.2461 14.2938 15.0827 14.3426 14.9259C14.3913 14.7691 14.5963 14.7227 15.0063 14.63L15.1123 14.606C15.2288 14.5796 15.2871 14.5664 15.3338 14.5309C15.3806 14.4954 15.4106 14.4416 15.4706 14.334L15.5252 14.236Z",fill:"#1C212B",stroke:"#1C212B","stroke-width":"0.466667"}}),t._v(" "),e("path",{attrs:{d:"M16 12V12.6667",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M16 18V18.6667",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M12.6665 15.332L13.3332 15.332",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M18.6665 15.332L19.3332 15.332",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M14 17.332L14.1143 17.2177",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M17.8853 13.4492L17.9997 13.3348",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M18 17.332L17.8857 17.2177",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M14.1143 13.4492L13.9998 13.3348",stroke:"#1C212B","stroke-width":"0.466667","stroke-linecap":"round"}})])]),t._v(" "),e("div",{staticClass:"contact_content"},[e("p",[t._v("Reviews & Ratings")]),t._v(" "),e("p",{staticClass:"user_credentials"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("View all")])],1)])]),t._v(" "),e("li",[e("div",{staticClass:"svg_icon"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F3F4F6"}}),t._v(" "),e("path",{attrs:{d:"M15.9997 14.7274C18.0797 12.6362 23.2809 16.2949 15.9997 20.9999C8.71843 16.2949 13.9197 12.6362 15.9997 14.7274Z",fill:"#1C212B"}}),t._v(" "),e("path",{attrs:{d:"M16.8836 7.8738C16.6492 7.63946 16.3313 7.50781 15.9999 7.50781C15.6684 7.50781 15.3505 7.63946 15.1161 7.8738L6.80736 16.1813C6.69017 16.2987 6.62439 16.4578 6.62451 16.6236C6.62463 16.7895 6.69063 16.9485 6.80798 17.0657C6.92534 17.1829 7.08445 17.2486 7.2503 17.2485C7.41615 17.2484 7.57517 17.1824 7.69236 17.065L8.49986 16.2575V22.8738C8.49986 23.3711 8.6974 23.848 9.04903 24.1996C9.40067 24.5513 9.87758 24.7488 10.3749 24.7488H21.6249C22.1221 24.7488 22.5991 24.5513 22.9507 24.1996C23.3023 23.848 23.4999 23.3711 23.4999 22.8738V16.2575L24.3074 17.065C24.4246 17.1824 24.5836 17.2484 24.7494 17.2485C24.9153 17.2486 25.0744 17.1829 25.1917 17.0657C25.3091 16.9485 25.3751 16.7895 25.3752 16.6236C25.3753 16.4578 25.3096 16.2987 25.1924 16.1813L22.2499 13.24V9.1238C22.2499 8.95804 22.184 8.79906 22.0668 8.68185C21.9496 8.56464 21.7906 8.4988 21.6249 8.4988H20.3749C20.2091 8.4988 20.0501 8.56464 19.9329 8.68185C19.8157 8.79906 19.7499 8.95804 19.7499 9.1238V10.74L16.8836 7.8738ZM22.2499 15.0075V22.8738C22.2499 23.0396 22.184 23.1985 22.0668 23.3157C21.9496 23.4329 21.7906 23.4988 21.6249 23.4988H10.3749C10.2091 23.4988 10.0501 23.4329 9.93292 23.3157C9.81571 23.1985 9.74986 23.0396 9.74986 22.8738V15.0075L15.9999 8.75755L22.2499 15.0075Z",fill:"#1C212B"}})])]),t._v(" "),e("div",{staticClass:"contact_content"},[e("p",[t._v("Favourites")]),t._v(" "),e("p",{staticClass:"user_credentials"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("View all")])],1)])])])])],1)],1)}),[],!1,null,"3a08994e",null);e.default=component.exports}}]);