(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404082ea"],{"0a49":function(t,e,r){var o=r("9b43"),a=r("626a"),n=r("4bf8"),i=r("9def"),s=r("cd1c");t.exports=function(t,e){var r=1==t,c=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d,m=e||s;return function(e,s,p){for(var b,h,v=n(e),g=a(v),y=o(s,p,3),_=i(g.length),k=0,w=r?m(e,_):c?m(e,0):void 0;_>k;k++)if((f||k in g)&&(b=g[k],h=y(b,k,v),t))if(r)w[k]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:w.push(b)}else if(u)return!1;return d?-1:l||u?u:w}}},"0e26":function(t,e,r){"use strict";var o=r("bde2"),a=r.n(o);a.a},"1fdb":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"9"}},[r("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Filtrar"}},[r("b-form-input",{attrs:{placeholder:"Digite para filtrar os resultados"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),r("b-col",{staticClass:"my-1",attrs:{md:"3"}},[r("b-btn",{attrs:{variant:"primary"},on:{click:t.getData}},[t._v("Recarregar")])],1)],1),t.hideCrudButtons?t._e():r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"12"}},[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.createModal",modifiers:{createModal:!0}}],attrs:{variant:"success"}},[t._v("Adicionar")])],1)],1),r("b-table",{attrs:{responsive:"",striped:"",bordered:"","show-empty":"","empty-text":"Sem resultados...","empty-filtered-text":"Pesquisa sem resultados...",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([t._l(t.bools,function(e){return{key:e.column,fn:function(r){return[t._v("\n      "+t._s(r.value?""+e.isTrue:""+e.isFalse)+"\n    ")]}}}),t._l(t.datetimes,function(e){return{key:e,fn:function(e){return[t._v("\n      "+t._s(e.value?""+t.moment(e.value).locale("pt-BR").format("DD/MM/YY - HH:mm"):"-")+"\n    ")]}}}),{key:"actions",fn:function(e){return t.hideCrudButtons?void 0:[r("b-btn-group",[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.editModal",modifiers:{editModal:!0}}],attrs:{variant:"warning"},on:{click:function(r){t.objectId=e.item.id}}},[t._v("Editar")]),r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.deleteModal",modifiers:{deleteModal:!0}}],attrs:{variant:"danger"},on:{click:function(r){t.objectId=e.item.id}}},[t._v("Apagar")])],1)]}}],null,!0)}),r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[t.history.show?r("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-primary",options:t.history.options,required:""},on:{input:t.getData},model:{value:t.history.status,callback:function(e){t.$set(t.history,"status",e)},expression:"history.status"}}):t._e()],1),r("b-col",{staticClass:"my-1",attrs:{md:"4"}},[r("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Por página"}},[r("b-form-select",{attrs:{options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1),t.hideCrudButtons?t._e():r("CreateModal",{attrs:{resource:t.api.resource},on:{ok:t.getData}}),t.hideCrudButtons?t._e():r("EditModal",{attrs:{resource:t.api.resource,id:t.objectId},on:{ok:t.getData}}),t.hideCrudButtons?t._e():r("DeleteModal",{attrs:{resource:t.api.resource,id:t.objectId},on:{ok:t.getData}})],1)},a=[],n=(r("7514"),r("ac4d"),r("8a81"),r("ac6a"),r("7c15")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{ref:"createModal",attrs:{id:"createModal",centered:"",title:"Adicionar","hide-footer":"","no-close-on-backdrop":""},on:{hide:function(e){return t.$store.commit("clearError")}}},[r("custom-alert"),r("CustomForm",{attrs:{resource:t.resource},on:{submitted:t.createResource}})],1)},s=[],c=r("c78a"),l={name:"CreateModal",props:{resource:{type:String,required:!0}},data:function(){return{api:new n["a"](this.resource)}},components:{CustomForm:c["a"]},methods:{createResource:function(t){var e=this;this.api.create(t).then(function(){e.$emit("ok"),e.$refs.createModal.hide()}).catch(function(t){400===t.response.status&&e.$store.commit("setError",t.response.data.message)})}}},u=l,d=(r("0e26"),r("2877")),f=Object(d["a"])(u,i,s,!1,null,null,null),m=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{ref:"editModal",attrs:{id:"editModal",centered:"",title:"Editar","hide-footer":"","no-close-on-backdrop":""},on:{hide:function(e){return t.$store.commit("clearError")}}},[r("custom-alert"),r("CustomForm",{attrs:{resource:t.resource,objectId:t.id},on:{submitted:t.editResource}})],1)},b=[],h=(r("c5f6"),{name:"EditModal",props:{resource:{type:String,required:!0},id:{type:Number,required:!0}},data:function(){return{api:new n["a"](this.resource)}},components:{CustomForm:c["a"]},methods:{editResource:function(t){var e=this;this.api.update(this.id,t).then(function(){e.$emit("ok"),e.$refs.editModal.hide()}).catch(function(t){400===t.response.status&&e.$store.commit("setError",t.response.data.message)})}}}),v=h,g=(r("4560"),Object(d["a"])(v,p,b,!1,null,null,null)),y=g.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{ref:"deleteModal",attrs:{id:"deleteModal",centered:"",title:"Apagar","hide-footer":"","no-close-on-backdrop":""},on:{hide:function(e){return t.$store.commit("clearError")}}},[r("custom-alert"),r("p",[t._v("Tem certeza?")]),r("b-btn",{attrs:{variant:"danger"},on:{click:t.deleteResource}},[t._v("Confirmar")])],1)},k=[],w={name:"DeleteModal",props:{resource:{type:String,required:!0},id:{type:Number,required:!0}},data:function(){return{api:new n["a"](this.resource)}},methods:{deleteResource:function(){var t=this;this.api.del(this.id).then(function(){t.$emit("ok"),t.$refs.deleteModal.hide()}).catch(function(e){404===e.response.status&&t.$store.commit("setError",e.response.data.message)})}}},M=w,C=(r("96cd2"),Object(d["a"])(M,_,k,!1,null,null,null)),D=C.exports,E={name:"DataTable",data:function(){return{api:new n["a"](this.endpoint),items:[],fields:this.config.columns,currentPage:1,perPage:5,totalRows:0,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,objectId:0,bools:this.config.bools||[],datetimes:this.config.datetimes||[],history:this.config.history||{}}},props:{endpoint:{type:String,required:!0},config:{type:Object,required:!0},hideCrudButtons:{type:Boolean}},components:{CreateModal:m,EditModal:y,DeleteModal:D},methods:{getData:function(){var t=this;this.items=[];var e=null;e=this.history.status?this.api.getAll():this.api.get(),e.then(function(e){t.getForeignData(e.data,t.config.foreign_keys),t.items=e.data,t.totalRows=e.data.length}),this.objectId=0},getForeignData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=!0,o=!1,a=void 0;try{for(var i,s=function(){var e=i.value;l=new n["a"](e.endpoint);var r=null;r=!0===e.all?l.getAll():l.get(),r.then(function(r){var o=!0,a=!1,n=void 0;try{for(var i,s=function(){var t=i.value;void 0!==t[e.column]&&(t[e.column]=r.data.find(function(r){return r.id===t[e.column]})[e.attribute])},c=t[Symbol.iterator]();!(o=(i=c.next()).done);o=!0)s()}catch(l){a=!0,n=l}finally{try{o||null==c.return||c.return()}finally{if(a)throw n}}})},c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l;s()}}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.hideCrudButtons||(this.fields=this.fields.concat({key:"actions",label:""})),this.getData()}},$=E,x=Object(d["a"])($,o,a,!1,null,null,null);e["a"]=x.exports},4560:function(t,e,r){"use strict";var o=r("8c00"),a=r.n(o);a.a},7514:function(t,e,r){"use strict";var o=r("5ca1"),a=r("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n](function(){i=!1}),o(o.P+o.F*i,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},"84f9":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("TERCEIROS")]),r("DataTable",{attrs:{endpoint:"/thirdparties",config:t.config}})],1)},a=[],n=r("1fdb"),i={components:{DataTable:n["a"]},data:function(){return{config:{columns:[{key:"first_name",label:"Nome",sortable:!0},{key:"last_name",label:"Sobrenome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"phone",label:"Telefone",sortable:!0}]}}}},s=i,c=r("2877"),l=Object(c["a"])(s,o,a,!1,null,null,null);e["default"]=l.exports},"8c00":function(t,e,r){},"96cd2":function(t,e,r){"use strict";var o=r("b63b"),a=r.n(o);a.a},b63b:function(t,e,r){},bde2:function(t,e,r){},cd1c:function(t,e,r){var o=r("e853");t.exports=function(t,e){return new(o(t))(e)}},e853:function(t,e,r){var o=r("d3f4"),a=r("1169"),n=r("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),o(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=chunk-404082ea.bccf66ca.js.map