(function(){"use strict";var e={3318:function(e,t,a){var r=a(8935),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Latest Release")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("HelloWorld")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Bienvenido! ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Front End del sistema de tareas,"),a("br"),e._v(" para utilizar como ejemplo en las practicas de despliegue. ")])]),a("v-col",{attrs:{cols:"12"}},[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{shaped:"",prominent:"",type:"error"}},[e._v(" Error al intentar conectar con el backend, revise el archivo main.js en el se encuentra la propiedad baseURL la cual tiene la direccion principal del backend. Revise y vuelva a realizar Build ")]),a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Agregar: ")]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:"Nueva Tarea:",outlined:""},model:{value:e.nuevaTarea.nombre,callback:function(t){e.$set(e.nuevaTarea,"nombre",t)},expression:"nuevaTarea.nombre"}})],1),a("v-col",{staticClass:"mt-2",attrs:{cols:"1"}},[a("v-btn",{attrs:{disabled:!e.nuevaTarea.nombre,color:"primary"},on:{click:e.agregarTarea}},[e._v("Agregar")])],1)],1)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Tareas ")]),a("v-row",{attrs:{justify:"center"}},e._l(e.tareas,(function(t){return a("v-card",{key:t.id,staticClass:"ma-3",attrs:{"max-width":"400",color:"grey lighten-2"}},[a("v-col",[a("v-checkbox",{attrs:{label:t.nombre},model:{value:t.hecho,callback:function(a){e.$set(t,"hecho",a)},expression:"tarea.hecho"}}),a("v-col",[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(a){return e.eliminarTarea(t)}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-minus ")])],1)],1)],1)],1)})),1)],1)],1)],1)},s=[],l={name:"HelloWorld",data:()=>({error:!1,tareas:[],nuevaTarea:{nombre:"",hecho:!1}}),methods:{cargarDatos(){let e=this;this.axios.get("/tareas").then((function(t){e.tareas=[],e.tareas=t.data})).catch((t=>{console.log(t),e.error=!0}))},agregarTarea(){let e=this;this.axios.post("/tareas",e.nuevaTarea).then((function(){e.cargarDatos()})).catch((t=>{console.log(t),e.error=!0})),e.nuevaTarea.nombre=""},eliminarTarea(e){let t=this;this.axios.delete("/tareas/delete/"+e._id).then((function(){t.cargarDatos()})).catch((e=>{console.log(e),t.error=!0}))}},mounted(){this.cargarDatos()}},c=l,u=a(1001),d=(0,u.Z)(c,i,s,!1,null,null,null),f=d.exports,v={name:"App",components:{HelloWorld:f},data:()=>({})},p=v,h=(0,u.Z)(p,n,o,!1,null,null,null),m=h.exports,b=a(8209),g=a.n(b);a(243);r["default"].use(g());var y=new(g())({}),w=(a(9806),a(6166)),x=a.n(w),k=a(8587);x().defaults.baseURL={NODE_ENV:"production",BASE_URL:"/"}.BACKEND||"https://backenddis135.herokuapp.com",r["default"].use(k.Z,x()),r["default"].config.productionTip=!1,new r["default"]({vuetify:y,render:e=>e(m)}).$mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,r,n,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var u=l(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkejemplotareasfrontend"]=self["webpackChunkejemplotareasfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3318)}));r=a.O(r)})();
//# sourceMappingURL=app.afe2e2d7.js.map