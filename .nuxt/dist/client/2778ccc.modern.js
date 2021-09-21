(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{379:function(e,t,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("01bddff6",content,!0,{sourceMap:!1})},434:function(e,t,n){"use strict";n(379)},435:function(e,t,n){var r=n(5)(!1);r.push([e.i,".billing-addr[data-v-7dc83e79]{color:var(--c-black)}.billing-addr p[data-v-7dc83e79]{margin:0;line-height:1.43}.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:20px}@media (max-width:1023px){.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:15px}}.billing-addr p.billing-phone>a[data-v-7dc83e79]{display:inline-flex;align-items:center;color:var(--c-black)}.billing-addr p.billing-phone>a .sf-icon[data-v-7dc83e79]{margin-right:5px}.billing-addr p.billing-phone>a svg path[data-v-7dc83e79]{transition:all .3s ease 0s}.billing-addr p.billing-phone>a[data-v-7dc83e79]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}",""]),e.exports=r},441:function(e,t,n){"use strict";var r=n(10),l={name:"UserBillingAddress",props:{address:{default:{},type:Object}},components:{SfIcon:r.a}},o=(n(434),n(1)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"billing-addr",attrs:{address:e.address}},[n("section",[e.address.name?n("p",[e._v(e._s(e.address.name))]):e._e(),e._v(" "),e.address.address2||e.address.company?n("p",[e._v(e._s(e.address.address2)),e.address.address2?n("span",[e._v(",")]):e._e(),e._v(" "+e._s(e.address.company))]):e._e(),e._v(" "),e.address.formattedArea?n("p",[e._v(e._s(e.address.formattedArea))]):e._e(),e._v(" "),e.address.zip?n("p",[e._v(e._s(e.address.zip))]):e._e(),e._v(" "),e.address.phone?n("p",{staticClass:"billing-phone"},[n("a",{attrs:{href:"tel:"+e.address.phone}},[n("SfIcon",{attrs:{size:"18px",viewBox:"0 0 18 18",icon:"phone"}}),e._v(" "+e._s(e.address.phone))],1)]):e._e()])])}),[],!1,null,"7dc83e79",null);t.a=component.exports},442:function(e,t,n){"use strict";n(9);var r=n(7),l=(n(35),n(170)),o=n(12),d=n(328),c=n(322),m=n(56),f=n(42),v=n(0);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(f.c)("required",h(h({},m.g),{},{message:"This field is required"})),Object(f.c)("min",h(h({},m.d),{},{message:"The field should have at least {length} characters"})),Object(f.c)("max",h(h({},m.c),{},{message:"The field should have maximum {length} characters"})),Object(f.c)("oneOf",h(h({},m.e),{},{message:"Invalid country"})),Object(f.c)("regex",h(h({},m.f),{},{message:"Invalid phone number"}));var y={name:"BillingAddressForm",components:{SfInput:l.a,SfButton:o.a,SfSelect:d.a,SfCheckbox:c.a,ValidationProvider:f.b,ValidationObserver:f.a},props:{address:{type:Object,default:()=>({id:Math.random().toString().substr(2),firstName:"",lastName:"",streetName:"",apartment:"",city:"",state:"",postalCode:"",country:"",phone:"",company:"",isDefault:!1})},isNew:{type:Boolean,required:!0}},setup(e,t){var{emit:n}=t,form=Object(v.ref)({id:e.address.id,firstName:e.address.firstName,lastName:e.address.lastName,streetName:e.address.address1,apartment:e.address.address2,city:e.address.city,state:e.address.province,postalCode:e.address.zip,country:"United States",company:e.address.company,phone:e.address.phone,isDefault:e.address.isDefault});return{form:form,submitForm:()=>{n("submit",{form:form,onComplete:()=>{},onError:()=>{}})},provience:[{name:"Alabama",label:"Alabama"},{name:"American Samoa",label:"American Samoa"},{name:"Arizona",label:"Arizona"},{name:"Arkansas",label:"Arkansas"},{name:"Armed Forces Americas",label:"Armed Forces Americas"},{name:"Armed Forces Europe",label:"Armed Forces Europe"},{name:"Armed Forces Pacific",label:"Armed Forces Pacific"},{name:"California",label:"California"},{name:"Colorado",label:"Colorado"},{name:"Connecticut",label:"Connecticut"},{name:"Delaware",label:"Delaware"},{name:"District of Columbia",label:"District of Columbia"},{name:"Federated States of Micronesia",label:"Federated States of Micronesia"},{name:"Florida",label:"Florida"},{name:"Georgia",label:"Georgia"},{name:"Guam",label:"Guam"},{name:"Hawaii",label:"Hawaii"},{name:"Idaho",label:"Idaho"},{name:"Illinois",label:"Illinois"},{name:"Indiana",label:"Indiana"},{name:"Iowa",label:"Iowa"},{name:"Kansas",label:"Kansas"},{name:"Kentucky",label:"Kentucky"},{name:"Louisiana",label:"Louisiana"},{name:"Maine",label:"Maine"},{name:"Marshall Islands",label:"Marshall Islands"},{name:"Maryland",label:"Maryland"},{name:"Massachusetts",label:"Massachusetts"},{name:"Michigan",label:"Michigan"},{name:"Minnesota",label:"Minnesota"},{name:"Mississippi",label:"Mississippi"},{name:"Missouri",label:"Missouri"},{name:"Montana",label:"Montana"},{name:"Nebraska",label:"Nebraska"},{name:"Nevada",label:"Nevada"},{name:"New Hampshire",label:"New Hampshire"},{name:"New Jersey",label:"New Jersey"},{name:"New Mexico",label:"New Mexico"},{name:"New York",label:"New York"},{name:"North Carolina",label:"North Carolina"},{name:"North Dakota",label:"North Dakota"},{name:"Northern Mariana Islands",label:"Northern Mariana Islands"},{name:"Ohio",label:"Ohio"},{name:"Oklahoma",label:"Oklahoma"},{name:"Oregon",label:"Oregon"},{name:"Palau",label:"Palau"},{name:"Pennsylvania",label:"Pennsylvania"},{name:"Puerto Rico",label:"Puerto Rico"},{name:"Rhode Island",label:"Rhode Island"},{name:"South Carolina",label:"South Carolina"},{name:"South Dakota",label:"South Dakota"},{name:"Tennessee",label:"Tennessee"},{name:"Texas",label:"Texas"},{name:"Utah",label:"Utah"},{name:"Vermont",label:"Vermont"},{name:"Virgin Islands",label:"U.S. Virgin Islands"},{name:"Virginia",label:"Virginia"},{name:"Washington",label:"Washington"},{name:"West Virginia",label:"West Virginia"},{name:"Wisconsin",label:"Wisconsin"},{name:"Wyoming",label:"Wyoming"}]}}},C=n(1),component=Object(C.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my_account_content container-small"},[n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[n("form",{staticClass:"form",attrs:{id:"billing-details-form"},on:{submit:function(t){return t.preventDefault(),r(e.submitForm)}}},[n("div",{staticClass:"row"},[n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_firstName",name:"firstName",label:"First Name",valid:!r[0],errorMessage:r[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_lastName",name:"lastName",label:"Last Name",valid:!r[0],errorMessage:r[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),n("div",{staticClass:"row"},[n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:5",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_streetName",name:"streetName",label:"Street Name",valid:!r[0],errorMessage:r[0]},model:{value:e.form.streetName,callback:function(t){e.$set(e.form,"streetName",t)},expression:"form.streetName"}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:1",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_apartment",name:"apartment",label:"House/Apartment number",valid:!r[0],errorMessage:r[0]},model:{value:e.form.apartment,callback:function(t){e.$set(e.form,"apartment",t)},expression:"form.apartment"}})]}}],null,!0)})],1),e._v(" "),n("div",{staticClass:"row"},[n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_city",name:"city",label:"City",valid:!r[0],errorMessage:r[0]},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|oneOf:"+e.provience.map((function(e){return e.name})).join(",")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfSelect",{staticClass:"form__select sf-select--underlined form__element",attrs:{"data-cy":"billing-details-input_state",name:"state",label:"State/Province",valid:!r[0],errorMessage:r[0]},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},e._l(e.provience,(function(t){var r=t.name,label=t.label;return n("SfSelectOption",{key:r,attrs:{value:r}},[e._v("\n              "+e._s(label)+"\n            ")])})),1)]}}],null,!0)})],1),e._v(" "),n("div",{staticClass:"row"},[n("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:4",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_zipCode",name:"zipCode",label:"Zipcode",valid:!r[0],errorMessage:r[0]},model:{value:e.form.postalCode,callback:function(t){e.$set(e.form,"postalCode",t)},expression:"form.postalCode"}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div"}},[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_company",name:"company",label:"Company",tag:"div"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),n("ValidationProvider",{staticClass:"col-12",attrs:{rules:"required|min:8|max:15|regex:^(\\+?\\d[0-9]+)$",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_phoneNumber",name:"phone",label:"Phone number",valid:!r[0],errorMessage:r[0]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}],null,!0)})],1),e._v(" "),n("div",{staticClass:"my-account-bottom-action-wrap"},[n("div",{staticClass:"form__button_wrap"},[n("SfButton",{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_update"},nativeOn:{click:function(t){return e.scrollToTop()}}},[e._v("\n            "+e._s(e.isNew?"Add To My Address Book":"Update My Address Book")+"\n          ")])],1),e._v(" "),n("div",{staticClass:"form__button_wrap"},[n("SfButton",{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_cancel"},on:{click:function(t){e.$parent.edittingAddress=!1,e.scrollToTop()}}},[e._v("Cancel")])],1)])])]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},518:function(e,t,n){var content=n(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("fbd5ef26",content,!0,{sourceMap:!1})},665:function(e,t,n){"use strict";n(518)},666:function(e,t,n){var r=n(5)(!1);r.push([e.i,".message[data-v-b3c82fbe]{font-family:var(--font-family--primary);line-height:1.6;font-size:var(--font-size--base);margin:0 0 var(--spacer-base)}.billing-list[data-v-b3c82fbe]{margin-bottom:var(--spacer-base)}.billing[data-v-b3c82fbe]{display:flex;padding:var(--spacer-xl) 0;border-top:1px solid var(--c-light)}.billing[data-v-b3c82fbe]:last-child{border-bottom:1px solid var(--c-light)}.billing__content[data-v-b3c82fbe]{flex:1;color:var(--c-text);font-size:var(--font-size--base);font-weight:300;line-height:1.6}.billing__actions[data-v-b3c82fbe]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}@media (min-width:1024px){.billing__actions[data-v-b3c82fbe]{flex-direction:row;align-items:center;justify-content:flex-end}}.billing__button-delete[data-v-b3c82fbe]{color:var(--c-link)}@media (min-width:1024px){.billing__button-delete[data-v-b3c82fbe]{margin-left:var(--spacer-base)}}.billing__address[data-v-b3c82fbe],.billing__address p[data-v-b3c82fbe]{margin:0}.billing__client-name[data-v-b3c82fbe]{font-size:var(--font-size--base);font-weight:500}.action-button[data-v-b3c82fbe]{width:100%}@media (min-width:1024px){.action-button[data-v-b3c82fbe]{width:auto}}@media (max-width:1023px){.tab-orphan[data-v-b3c82fbe]  .sf-tabs__title{display:none}.tab-orphan[data-v-b3c82fbe]  .sf-tabs__content{border:0;padding:0}}",""]),e.exports=r},704:function(e,t,n){"use strict";n.r(t);var r=n(4),l=n(692),o=n(12),d=n(10),c=n(441),m=n(442),f=n(11),v=n(0),_=n(8),h={name:"BillingDetails",components:{SfTabs:l.a,SfButton:o.a,SfIcon:d.a,UserBillingAddress:c.a,BillingAddressForm:m.a},setup(){var{billing:e,load:t,addAddress:n,deleteAddress:l,updateAddress:o}=Object(f.k)(),d=Object(v.computed)((()=>f.o.getAddresses(e.value))),c=Object(v.ref)(!1),m=Object(v.ref)(void 0),h=Object(v.computed)((()=>!m.value)),y=function(){var e=Object(r.a)((function*(e){var{form:form,onComplete:t,onError:r}=e;try{var l=h.value?n:o,data=yield l({address:form});c.value=!1,m.value=void 0,yield t(data)}catch(e){r(e)}}));return function(t){return e.apply(this,arguments)}}();return Object(_.onSSR)(Object(r.a)((function*(){yield t()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;m.value=address,c.value=!0},updateAddress:o,removeAddress:address=>l({address:address}),saveAddress:y,userBillingGetters:f.o,addresses:d,edittingAddress:c,activeAddress:m,isNewAddress:h}}},y=h,C=(n(665),n(1)),component=Object(C.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:e.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Contact details updated"))+"\n      ")]),e._v(" "),n("BillingAddressForm",{attrs:{address:e.activeAddress,isNew:e.isNewAddress},on:{submit:e.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"Billing details"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Manage billing addresses"))+"\n      ")]),e._v(" "),n("transition-group",{staticClass:"billing-list",attrs:{tag:"div",name:"fade"}},e._l(e.addresses,(function(address){return n("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[n("div",{staticClass:"billing__content"},[n("div",{staticClass:"billing__address"},[n("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),n("div",{staticClass:"billing__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(t){return e.removeAddress(address)}}}),e._v(" "),n("SfButton",{on:{click:function(t){return e.changeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Change"))+"\n            ")]),e._v(" "),n("SfButton",{staticClass:"color-light billing__button-delete desktop-only",on:{click:function(t){return e.removeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Delete"))+"\n            ")])],1)])})),0),e._v(" "),n("SfButton",{staticClass:"action-button",on:{click:function(t){return e.changeAddress()}}},[e._v("\n        "+e._s(e.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"b3c82fbe",null);t.default=component.exports}}]);