(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55671c8c"],{"0b3e":function(e,s,r){"use strict";r.r(s);var a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"newPerson"},[r("h1",[e._v("Cadastrar nova pessoa")]),e.$store.getters.isLoggedIn?r("p",[e._v("Preencha este formulário para cadastrar uma pessoa que queira pegar um item emprestado ou então reservar a sala de treinamentos.")]):r("p",[e._v("Cadastre-se para poder pegar itens emprestados ou reservar a sala de treinamentos do CDG Hub. Obs.: os empréstimos e reservas devem ser registrados pelos responsáveis do laboratório.")]),r("custom-alert"),r("CustomForm",{attrs:{resource:e.api.resource},on:{submitted:e.createResource}})],1)},t=[],o=r("7c15"),n=r("c78a"),u={name:"NewPerson",data:function(){return{api:new o["a"]("/thirdparties")}},components:{CustomForm:n["a"]},methods:{createResource:function(e){var s=this;this.api.create(e).then(function(){s.$router.push({name:"home"})}).catch(function(e){400===e.response.status&&s.$store.commit("setError",e.response.data.message)})}}},c=u,i=(r("6dba"),r("2877")),p=Object(i["a"])(c,a,t,!1,null,null,null);s["default"]=p.exports},"69b3":function(e,s,r){},"6dba":function(e,s,r){"use strict";var a=r("69b3"),t=r.n(a);t.a}}]);
//# sourceMappingURL=chunk-55671c8c.c54cb396.js.map