(function(t){function e(e){for(var a,s,n=e[0],c=e[1],l=e[2],d=0,m=[];d<n.length;d++)s=n[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},o=[];function s(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"02abb8c6"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(d);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}i[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0def":function(t,e,r){},"43a9":function(t,e,r){"use strict";var a=r("b93c"),i=r.n(a);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticStyle:{position:"fixed","z-index":"10"},attrs:{id:"nav"}},[r("div",{staticClass:"navText"},[r("router-link",{staticClass:"routerButton",staticStyle:{color:"white","font-weight":"normal"},attrs:{to:"/Home"}},[t._v("Tienda Online")])],1),r("div",{staticClass:"butRouters"},[r("router-link",{staticClass:"routerButton",attrs:{to:"/Login"}},[t._v("Login")]),r("router-link",{staticClass:"routerButton",attrs:{to:"/Registro"}},[t._v("Registro")]),r("div",{staticClass:"greenDiv"},[r("router-link",{staticClass:"routerButton",staticStyle:{color:"white"},attrs:{to:"/Carrito"}},[t._v("Carrito")]),t._v(" "),r("div",{staticClass:"whiteDiv"},[t._v(" "+t._s(t.carritoUnidad)+" - ("+t._s(t.carritoDinero)+"€) ")])],1)],1)]),r("div",{staticStyle:{position:"fixed",width:"100%",height:"100%",top:"5em",padding:"0",margin:"0","background-color":"white","z-index":"3"},attrs:{id:"loader"}},[r("pulse-loader",{staticStyle:{position:"fixed",top:"50%",left:"50%","z-index":"2"},attrs:{loading:t.loading,color:t.color,size:t.size}})],1),r("div",{staticStyle:{position:"fixed",display:"none",left:"37%","background-color":"green",padding:"0.5em","z-index":"3",color:"white"},attrs:{id:"notificacion"}}),r("router-view")],1)},o=[],s=(r("b64b"),r("5530")),n=r("8a5d"),c=r("8aa5"),l=r.n(c),d=r("2f62"),u={apiKey:"AIzaSyDnL-io-T40zzIIIltfzxfOsLo6yc7ZyqY",authDomain:"tiendavue-a3592.firebaseapp.com",databaseURL:"https://tiendavue-a3592.firebaseio.com",projectId:"tiendavue-a3592",storageBucket:"tiendavue-a3592.appspot.com",messagingSenderId:"951077368182",appId:"1:951077368182:web:332573b939cfba5608ca57"},m=l.a.initializeApp(u),p=m.database(),f=l.a.storage(),h={name:"App",components:{PulseLoader:n["a"]},data:function(){return{carritoDinero:0,carritoUnidad:0,carrito:[{}],db:p,storage:f,productos:[{}],imagenes:[{}]}},mounted:function(){var t=this;setTimeout((function(){return document.getElementById("loader").remove()}),1500),setTimeout((function(){return t.db.ref("productos").on("value",(function(e){return t.cargaProductos(e.val())}))}),100)},methods:{dineroCarrito:function(){for(var t=0,e=1;e<this.carrito.length;e++)t+=this.carrito[e].precio;this.carritoDinero=t,this.carritoUnidad+=1},cargaProductos:function(t){this.productos=t,this.cargarImagen()},cargarImagen:function(){for(var t=0;t<Object.keys(this.productos).length;t++){var e=this;this.storage.ref("/").child(this.productos[t].img).getDownloadURL().then((function(t){e.traerImagen(t)}))}},traerImagen:function(t){this.imagenes.push(t)},notificacion:function(t){var e=this;document.getElementById("notificacion").innerHTML="";var r=document.createElement("button");r.setAttribute("type","button"),r.setAttribute("id","btnCerrar"),r.setAttribute("class","btn"),document.getElementById("notificacion").style.display="",document.getElementById("notificacion").append("Has añadido "+t+" al carrito"),document.getElementById("notificacion").append(r),document.getElementById("btnCerrar").style.color="white",document.getElementById("btnCerrar").innerHTML="<b>x</b>",setTimeout((function(){return e.quitarNotificacion()}),3e3)},quitarNotificacion:function(){document.getElementById("notificacion").style.display="none"}},computed:Object(s["a"])({},Object(d["b"])({user:"user"}))},g=h,b=r("2877"),v=Object(b["a"])(g,i,o,!1,null,null,null),y=v.exports,_=(r("d3b7"),r("8c4f")),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("br"),r("br"),r("br"),r("br"),r("listaProductos")],1)},w=[],k=(r("c975"),r("07ac"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"listaProductos"},[r("div",{staticStyle:{"margin-left":"100vh"}},[r("button",{staticClass:"btn btn-outline-dark",staticStyle:{float:"right","margin-right":"30vh"},on:{click:function(e){t.tipoLista="cuadrado"}}},[t._v("Cuadricula")]),r("button",{staticClass:"btn btn-outline-dark",staticStyle:{float:"right"},on:{click:function(e){t.tipoLista="lista"}}},[t._v("Lista")]),r("br")]),"cuadrado"==t.tipoLista?r("div",{staticClass:"container mt-3 d-flex align-items-stretch"},t._l(t.arrayProductos,(function(e){return r("div",{key:e,staticClass:"cardContainer "},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-auto mb-5 d-flex align-items-stretch"},[r("div",{staticClass:"card card-box",staticStyle:{width:"21em",height:"37em"}},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"imgProducto",attrs:{src:t.returnImage(e.img)}}),r("br"),r("br"),r("br"),r("a",{attrs:{href:"#"},on:{click:function(r){return t.cargarDetalles(e.img,e.nombre,e.esp,e.precio,e.stock)}}},[t._v(t._s(e.nombre))]),r("p",{staticStyle:{color:"red"}},[t._v("Quedan "+t._s(e.stock)+" artículos en stock")]),r("p",{staticClass:"card-text"},[t._v(t._s(e.esp))]),r("div",[r("h5",{staticClass:"precio"},[t._v(t._s(e.precio)+"€")]),0!=e.stock?r("a",{staticClass:"comprarBtn btn btn-primary",on:{click:function(r){return t.anadirCarrito(e.nombre)}}},[t._v("Añadir carrito")]):t._e(),0==e.stock?r("button",{staticClass:"comprarBtnDisabled btn",attrs:{disabled:""}},[t._v("Agotado")]):t._e()])])])])])])})),0):t._e(),"lista"==t.tipoLista?r("div",{staticClass:"container mt-5  "},t._l(t.arrayProductos,(function(e){return r("div",{key:e,staticClass:"cardContainerList precio"},[r("div",{staticClass:"row"},[r("div",{staticClass:"card card-list ",staticStyle:{width:"101em",height:"14em"}},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"imgProductolista",staticStyle:{float:"left"},attrs:{src:t.returnImage(e.img)}}),r("h5",[r("a",{staticStyle:{"margin-left":"1.5em"},attrs:{href:"#"},on:{click:function(r){return t.cargarDetalles(e.img,e.nombre,e.esp,e.precio,e.stock)}}},[t._v(t._s(e.nombre))])]),r("div",[r("p",{staticClass:"precio",staticStyle:{color:"red","padding-left":"1.8em"}},[t._v("Quedan "+t._s(e.stock)+" artículos en stock")])])]),r("p",{staticClass:"card-text-list"},[t._v(t._s(e.esp))]),r("h5",{staticClass:"precio",staticStyle:{"padding-left":"13.5em","padding-top":"1.5em"}},[t._v(t._s(e.precio)+"€")]),0!=e.stock?r("a",{staticClass:"comprarBtn-lista btn btn-primary",attrs:{href:"#"},on:{click:function(r){return t.anadirCarrito(e.nombre)}}},[t._v("Añadir carrito")]):t._e(),0==e.stock?r("button",{staticClass:"comprarBtnDisabled-lista btn",attrs:{disabled:""}},[t._v("Agotado")]):t._e()])])])})),0):t._e(),"productoDetalle"==t.tipoLista?r("div",{staticClass:"container mt-5  "},[r("div",{staticClass:"card card-list ",staticStyle:{width:"70em",height:"33em"}},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"imgProductoDetalle",staticStyle:{"padding-left":"20em"},attrs:{src:t.returnImage(this.detallesObjeto[0]),width:"800vh",height:"300vh"}}),r("br"),r("br"),r("div",[r("h3",{staticClass:"card-title precio",staticStyle:{"padding-left":"0em"}},[t._v(t._s(this.detallesObjeto[1]))]),r("h5",{staticClass:"precio",staticStyle:{"padding-left":"27em","padding-top":"1.5em"}},[t._v(t._s(this.detallesObjeto[3])+"€")])]),r("br"),r("p",{staticClass:"card-text precio"},[t._v(t._s(this.detallesObjeto[2]))]),r("div",{staticClass:"precio"},[r("p",{staticStyle:{color:"red","marging-bottom":"1em"}},[t._v("Quedan "+t._s(this.detallesObjeto[4])+" artículos en stock")]),0==this.detallesObjeto[4]?r("button",{staticClass:"comprarBtnDisabled btn precio",staticStyle:{"margin-left":"58em","margin-top":"2vh","margin-right":"1em","margin-bottom":"1em"},attrs:{disabled:""}},[t._v("Agotado")]):t._e(),0!=this.detallesObjeto[4]?r("a",{staticClass:"comprarBtn btn btn-primary",staticStyle:{"margin-left":"58em","margin-top":"2vh","margin-right":"1em","margin-bottom":"1em"},attrs:{href:"#"}},[t._v("Añadir carrito")]):t._e()])])]),r("button",{staticClass:"btn btnVolver",on:{click:function(e){t.tipoLista="cuadrado"}}},[t._v("Volver")])]):t._e()])}),S=[],P=(r("caad"),r("2532"),{name:"listaProductos",props:{},data:function(){return{test:"",tipoLista:"cuadrado",detallesObjeto:[],arrayProductos:this.$parent.$parent.productos,arrayImagenes:this.$parent.$parent.imagenes}},mounted:function(){var t=this;setTimeout((function(){return t.updateStock()}),100),setTimeout((function(){return console.log(t.arrayProductos)}),100)},methods:{returnImage:function(t){for(var e=1;e<this.arrayImagenes.length;e++)if(this.arrayImagenes[e].includes(t))return this.arrayImagenes[e]},cargarDetalles:function(t,e,r,a,i){this.detallesObjeto=[],this.detallesObjeto.push(t),this.detallesObjeto.push(e),this.detallesObjeto.push(r),this.detallesObjeto.push(a),this.detallesObjeto.push(i),this.tipoLista="productoDetalle"},anadirCarrito:function(t){for(var e=0;e<this.arrayProductos.length;e++)this.arrayProductos[e].nombre===t&&this.$parent.añadiProductoCarrito(e)},updateStock:function(){this.arrayProductos=this.$parent.$parent.productos,this.arrayImagenes=this.$parent.$parent.imagenes;var t=this.$parent.$parent.carrito;if(0!==t.lenght)for(var e=1;e<t.length+3;e++)for(var r=0;r<Object.keys(this.$parent.$parent.arrayProductos).length;r++)this.$parent.arrayProductos[r].nombre===this.$parent.$parent.carrito[e].nombre&&(this.$parent.$parent.arrayProductos[r].stock--,console.log("aaa"))}}}),$=P,O=(r("d6b5"),Object(b["a"])($,k,S,!1,null,"700b4f08",null)),I=O.exports,j={name:"Home",components:{listaProductos:I},data:function(){return{carritoDinero:0,carritoUnidad:0,arrayProductos:this.$parent.productos,carrito:[{}],arrayImagenes:this.$parent.imagenes}},methods:{"añadiProductoCarrito":function(t){this.arrayProductos[t].stock--;for(var e=!1,r=0;r<this.$parent.carrito.length;r++)console.log(this.arrayProductos[t].nombre),console.log(this.arrayProductos[t].nombre===this.$parent.carrito[r].nombre),Object.values(this.$parent.carrito).indexOf(this.arrayProductos[t].nombre)>-1&&!1===e&&(console.log("11"),this.$parent.carrito[r].cantidad++,e=!0),-1===Object.values(this.$parent.carrito).indexOf(this.arrayProductos[t].nombre)&&!1===e&&(console.log("22"),this.$parent.carrito.push({nombre:this.arrayProductos[t].nombre,cantidad:0,precio:this.arrayProductos[t].precio,img:this.arrayProductos[t].img,esp:this.arrayProductos[t].esp}),e=!0);console.log(this.arrayProductos[t].nombre),this.$parent.notificacion(this.arrayProductos[t].nombre),this.$parent.dineroCarrito()}},mounted:function(){console.log("aaa")}},x=j,E=(r("cccb"),Object(b["a"])(x,C,w,!1,null,null,null)),L=E.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carrito"},[r("br"),r("br"),r("br"),r("br"),r("br"),t._m(0),t._l(t.carrito,(function(e,a){return r("div",{key:e,staticClass:"cardContainerList precio"},[r("div",{staticStyle:{display:"inline-block","margin-left":"18em","margin-right":"-50em"}},[r("img",{attrs:{src:t.returnImage(t.carrito[a].img),width:"20%"}})]),r("div",{staticStyle:{display:"inline-block","word-wrap":"break-word",width:"26em"}},[r("h5",[t._v(t._s(t.carrito[a].nombre))]),r("h5",[t._v(t._s(t.carrito[a].esp))])]),r("div",{staticStyle:{display:"inline-block",width:"15em","vertical-align":"top"}},[r("h5",{staticStyle:{"margin-left":"2em"}},[t._v(t._s(t.carrito[a].precio)+"€")])]),r("div",{staticStyle:{display:"inline-block",width:"20em","vertical-align":"top","margin-right":"-100em"}},[r("h5",{staticStyle:{"margin-left":"2em"}},[t._v(t._s(t.carrito[a].cantidad))])]),r("div",{staticStyle:{display:"inline-block",width:"10em","vertical-align":"top","margin-right":"-50em"}},[r("h5",{staticStyle:{"margin-left":"2em"}},[t._v(t._s(t.carrito[a].precio*t.carrito[a].cantidad)+"€")])])])}))],2)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",{staticStyle:{"margin-left":"21em",display:"inline-block"}},[r("b",[t._v("Artículo")])]),r("h4",{staticStyle:{"margin-left":"17em",display:"inline-block"}},[r("b",[t._v("Precio")])]),r("h4",{staticStyle:{"margin-left":"6em",display:"inline-block"}},[r("b",[t._v("Cantidad")])]),r("h4",{staticStyle:{"margin-left":"6em",display:"inline-block"}},[r("b",[t._v("Subtotal")])])])}],T={name:"Carrito",props:{},data:function(){return{carrito:this.$parent.carrito,productos:this.$parent.productos,imagenes:this.$parent.imagenes}},mounted:function(){var t=this;setTimeout((function(){return document.getElementById("loader").remove()}),1500),setTimeout((function(){return t.cargarImagen()}),3500)},methods:{quitarNotificacion:function(){document.getElementById("notificacion").style.display="none"},cargarImagen:function(){for(var t=0;t<Object.keys(this.productos).length;t++){var e=this;this.$parent.storage.ref("/").child(this.productos[t].img).getDownloadURL().then((function(t){e.traerImagen(t)}))}},traerImagen:function(t){this.imagenes.push(t)},returnImage:function(t){for(var e=1;e<this.imagenes.length;e++)if(console.log(t),this.imagenes[e].includes(t))return this.imagenes[e]}}},A=T,R=(r("708f"),Object(b["a"])(A,D,B,!1,null,"79f3ce5e",null)),z=R.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"registro"},[r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[t._m(0),r("div",{staticClass:"card-body"},[t.error?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Contraseña")]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),r("div",{staticClass:"form-group row mb-0"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("button",{staticClass:"btn",staticStyle:{"background-color":"green",color:"white",width:"21em"},attrs:{type:"submit"}},[t._v("Registro")]),r("br"),r("br"),r("button",{staticClass:"btn",staticStyle:{"background-color":"green",color:"white",width:"21em"},attrs:{type:"submit"}},[r("router-link",{staticClass:"routerButton",attrs:{to:"/Login"}},[t._v("Login")])],1)])])])])])])])])])},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-left":"20em"}},[r("h3",[t._v("Registro")])])}],q=(r("b0c0"),{name:"Registro",props:{},data:function(){return{form:{email:"",password:""},error:null}},mounted:function(){},methods:{submit:function(){var t=this;l.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(e){e.user.updateProfile({displayName:t.form.name}).then((function(){}))})).catch((function(e){t.error=e.message}))}}}),H=q,M=(r("ee4d"),Object(b["a"])(H,U,N,!1,null,"10c48ff8",null)),G=M.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[t._m(0),r("div",{staticClass:"card-body"},[t.error?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Contraseña")]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),r("div",{staticClass:"form-group row mb-0"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("button",{staticClass:"btn",staticStyle:{"background-color":"green",color:"white",width:"21em"},attrs:{type:"submit"}},[t._v("Login")]),r("br"),r("br"),r("button",{staticClass:"btn",staticStyle:{"background-color":"green",color:"white",width:"21em"},attrs:{type:"submit"}},[r("router-link",{staticClass:"routerButton",attrs:{to:"/Registro"}},[t._v("Registarse")])],1)])])])])])])])])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-left":"25em"}},[r("h3",[t._v("Login")])])}],V=(r("ac1f"),r("5319"),{data:function(){return{form:{email:"",password:""},error:null}},mounted:function(){},methods:{submit:function(){var t=this;l.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(e){t.$router.replace({name:"Dashboard"})})).catch((function(e){t.error=e.message}))}}}),W=V,K=(r("43a9"),Object(b["a"])(W,Q,J,!1,null,"08f44088",null)),Y=K.exports;a["a"].use(_["a"]);var Z=[{path:"/Home",name:"Home",component:L},{path:"/Carrito",name:"Carrito",component:z},{path:"/Registro",name:"Registro",component:G},{path:"/Login",name:"Login",component:Y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],F=new _["a"]({routes:Z}),X=F,tt=(r("4989"),r("ab8b"),r("0ff2"));a["a"].use(d["a"]);var et=new d["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var r=t.commit;r("SET_LOGGED_IN",null!==e),r("SET_USER",e?{email:e.email}:null)}}});a["a"].use(tt["a"]),a["a"].use(X),a["a"].config.productionTip=!1,new a["a"]({router:X,store:et,render:function(t){return t(y)}}).$mount("#app")},"5ced":function(t,e,r){},"708f":function(t,e,r){"use strict";var a=r("0def"),i=r.n(a);i.a},"77e2":function(t,e,r){},b93c:function(t,e,r){},cccb:function(t,e,r){"use strict";var a=r("5ced"),i=r.n(a);i.a},d6b5:function(t,e,r){"use strict";var a=r("77e2"),i=r.n(a);i.a},ee4d:function(t,e,r){"use strict";var a=r("fcea"),i=r.n(a);i.a},fcea:function(t,e,r){}});
//# sourceMappingURL=app.ce961a09.js.map