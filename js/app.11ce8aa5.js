(function(e){function a(a){for(var i,n,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&d.push(t[n][0]),t[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],i=!0,n=1;n<o.length;n++){var c=o[n];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"b9ecf073","chunk-0206bfa0":"eae197b8","chunk-039c07ee":"e28c4414","chunk-13a6037e":"db80f123","chunk-16215048":"7730889e","chunk-18f95272":"e20a3e93","chunk-2c06842c":"96b4332c","chunk-2d0c5615":"acc00cb6","chunk-2d0e96ec":"6e6ce14f","chunk-2d208d90":"55b422f5","chunk-2d21d0e2":"e379532b","chunk-2d22c123":"81711fed","chunk-2e80bb9a":"211ca186","chunk-2fdc87ee":"5f87bb3e","chunk-30d2f332":"acad1004","chunk-36769079":"b02fb8a7","chunk-398c63f0":"29e58c5a","chunk-44daca35":"adae88ed","chunk-4adb6690":"5972c92d","chunk-5309f94e":"e0bc5563","chunk-53ccb27e":"233284cd","chunk-55d286b8":"2981feda","chunk-681f37d3":"3a7cf1bf","chunk-6928a14a":"78c4aec5","chunk-69444b4c":"e36f2086","chunk-6e45141e":"2cc3efaf","chunk-863a1ee8":"4b51772f","chunk-a48a3e88":"986b57b4","chunk-c796899c":"251d84e5","chunk-e8a7823a":"7fa36909","chunk-eaa1fac2":"78f3c6f1","chunk-f0d455ac":"82382829","chunk-f2a44bde":"6bfecf69",comple:"8f69677e",creditos:"de6ee969",glosario:"16f6cd8e",intro:"8d2e7d9d",referencias:"3dabaa4e",sintesis:"fdb0194e",tema1:"b8fa667a",tema2:"26ba2f1d"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-a48a3e88":1,"chunk-f0d455ac":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"92cc41c0","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"8f9cd922","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f0d455ac":"e132247d","chunk-f2a44bde":"c02cabcb",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===t))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],f.parentNode.removeChild(f),o(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,o){i=t[e]=[a,o]}));a.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(f);var o=t[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,o[1](d)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(o,i,function(a){return e[a]}.bind(null,i));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var f=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"0c66":function(e,a,o){e.exports=o.p+"img/5.46e516d1.png"},"25ea":function(e,a,o){e.exports=o.p+"img/2.b8348bd3.png"},"3da1":function(e,a,o){e.exports=o.p+"img/3.535bd8b2.png"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);var i=o("68f3"),n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},c=r,s=o("2877"),l=Object(s["a"])(c,n,t,!1,null,null,null),u=l.exports,d=o("2b0e"),f=o("8c4f"),m=o("ae58"),p=o("7e58");d["a"].use(f["a"]);const h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>o.e("intro").then(o.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>o.e("tema1").then(o.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>o.e("tema2").then(o.bind(null,"fd11"))}]},{path:"/actividad",name:"actividad",component:()=>o.e("actividad").then(o.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>o.e("glosario").then(o.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>o.e("comple").then(o.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>o.e("referencias").then(o.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>o.e("sintesis").then(o.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>o.e("creditos").then(o.bind(null,"2e81"))}],scrollBehavior(e,a){if(e.hash){const o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise(e=>{setTimeout(()=>{e(o)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var b=h,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Estructuración de la experiencia turística",descripcionCurso:"Actualmente, la manera en que se realizan y se disfrutan los viajes es diferente. Los turistas buscan satisfacer sus necesidades a partir de un producto o servicio turístico, y vivir una experiencia que satisfaga sus gustos, deseos y emociones. La flexibilidad y transformación, de la compra, obliga a las empresas del sector, a adaptarse a esta demanda, aplicar nuevas tecnologías y comercialización digital de servicios.",imagenBannerPrincipal:o("65fa"),fondoBannerPrincipal:o("648e"),fondoBannerInterno:o("c089"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1"],imagen:o("f6ca")},{clases:["banner-principal-decorativo-2"],imagen:o("829c")},{clases:["banner-principal-decorativo-3","d-none","d-lg-block"],imagen:o("3da1")},{clases:["banner-principal-decorativo-4"],imagen:o("25ea")},{clases:["banner-principal-decorativo-5"],imagen:o("0c66")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades del turismo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Objetivos, características y beneficios del turismo",hash:"objetivos"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Elementos básicos o factores que componen la actividad turística",hash:"elementos"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Prestadores de servicios turísticos",hash:"prestadores"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Turista y sus motivaciones",hash:"turista"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Evolución del turismo",hash:"evolucion"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Morfología del turismo",hash:"morfologia"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Leyes en turismo",hash:"leyes"},{icono:"far fa-file-alt",numero:"1.8",titulo:"Sistema turístico",hash:"sistema"},{icono:"far fa-file-alt",numero:"1.9",titulo:"Inventario turístico",hash:"inventario"},{icono:"far fa-file-alt",numero:"1.10",titulo:"Producto turístico",hash:"producto"},{icono:"far fa-file-alt",numero:"1.11",titulo:"Agencias de viaje",hash:"agencias"},{icono:"far fa-file-alt",numero:"1.12",titulo:"Paquetes turísticos",hash:"paquetes"},{icono:"far fa-file-alt",numero:"1.13",titulo:"Rutas y circuitos turísticos",hash:"rutas"},{icono:"far fa-file-alt",numero:"1.14",titulo:"Establecimientos de alojamiento y hospedaje",hash:"establecimiento"},{icono:"far fa-file-alt",numero:"1.15",titulo:"Sostenibilidad turística",hash:"sostenibilidad"},{icono:"far fa-file-alt",numero:"1.16",titulo:"Colombia turística",hash:"colombia"},{icono:"far fa-file-alt",numero:"1.17",titulo:"Estadísticas sectoriales",hash:"estadisticas"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Experiencias turísticas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Comunicar la experiencia turística en la <i>web</i> y redes sociales",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Servicio al cliente",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Negociación con proveedores",hash:"t_2_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/623604_CF01_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Abarca Zaquinaula, M (s.f.). Propuesta de un modelo alternativo de funcionamiento del sistema turístico.",link:"https://repositorio.pucesa.edu.ec/bitstream/123456789/2224/1/Sistema%20Tur%C3%ADstico.pdf"},{referencia:"Boullón, R. C. (2006). Planificación del Espacio Turístico. Trillas. Cordente Rodríguez, M; Mondéjar Jiménez, J.A; Esteban Talaya, A (s.f.). Motivaciones del turista: cambio de paradigma. Universitat Jaume I.",link:"https://www2.fue.uji.es/gesfue2/doc_fue/docs/jornadas/15turismo/motivaciones.pdf"},{referencia:"Gurría, M. (2004). Introducción al Turismo. Editorial Trillas. Ledhesma, M (2018). Tipos de turismo: nueva clasificación.",link:"https://frrq.cvg.utn.edu.ar/pluginfile.php/15091/mod_resource/content/0/Tipos%20de%20turismo%2C%20nueva%20clasificaci%C3%B3n%20-%20Manuel%20Ledhesma.pdf"},{referencia:"Martinez Espin, P. (2009). El contrato de viaje combinado. Ediciones la Universidad de Castilla. Marketing de pymes (2021). Fitur 2021 y las nuevas tendencias del Turismo.",link:"https://www.marketingdepymes.com/fitur-2021-y-las-nuevas-tendencias-del-turismo/"},{referencia:"Mincetur. (2014). Manual para la Planificación de Productos Turísticos de Perú. MINCETUR."},{referencia:"Navarro, D. (2015). Recursos turísticos y atractivos turísticos: conceptualización, clasificación y valoración. Cuadernos de Turismo, 35, (2015), 335-357.",link:"https://www.redalyc.org/pdf/398/39838701014.pdf"},{referencia:"Norma Técnica Sectorial Colombiana NTSH 006 del 2009. Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles. Requisitos."},{referencia:"OSTELEA, Tourism Management School (2019). Qué tipos de turismo existen y cuáles triunfarán en 2020.",link:"https://www.ostelea.com/actualidad/blog-turismo/que-tipos-de-turismo-existen-y-cuales-triunfaran-en-2020"},{referencia:"Procolombia (2021). Cinco tendencias para viajar en 2021.",link:"https://procolombia.co/noticias/cinco-tendencias-para-viajar-en-2021 "},{referencia:"Rolando León, L (2012). Diseño de paquetes turísticos para la fundación duchicela, parroquia cacha, cantón riobamba, provincia de chimborazo. [Tesis de pregrado Ingeniería en ecoturismo]."},{referencia:"Sernatur - Servicio Nacional de Turismo (2017). Manual de diseño experiencias turísticas. Subdirección de Desarrollo-Chile.",link:"https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf"},{referencia:"Subdirección de Productos y Destinos Sustentables SERNATUR (2015). Manual Paso a paso para el Diseño de Productos Turísticos integrados.",link:"https://asesoresenturismoperu.files.wordpress.com/2016/08/244-manual-productos-turc3adsticos-chile.pdf"}],glosario:[{termino:"Experiencia turística",significado:"sensaciones y emociones, interpretadas por el turista, con base a una serie de estímulos durante todas las fases de contacto con el producto turístico."},{termino:"Prestadores de servicios turísticos",significado:"empresas que proporcionan, intermedian o contratan directa o indirectamente con el turista, para la prestación de los servicios turísticos."},{termino:"Producto turístico",significado:"es la combinación de atractivos y servicios, materiales e inmateriales, que posteriormente ofrecerán al mercado los diferentes actores de la cadena (operadores, guías, medios), para satisfacer una demanda turística."},{termino:"Turismo",significado:"actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año."},{termino:"Turismo sostenible",significado:"Persigue desarrollar su actividad generando un impacto mínimo sobre el medioambiente."}],complementario:[{tema:"Evolución del turismo",referencia:"Redacción El Tiempo. (16 de octubre 2008). 25 Hitos de la historia del turismo colombiano. EL TIEMPO.",tipo:"Artículo",descarga:"downloads/25_hitos_de_la_historia_del_turismo_colombiano.pdf"},{tema:"Producto Turístico",referencia:"Nicolau, J. (s.f.). El precio de los productos turísticos. Universidad de Alicante. Facultad de ciencias económicas y empresariales.",tipo:"Documento de apoyo",link:"https://rua.ua.es/dspace/bitstream/10045/16114/8/Tema%208.pdf"},{tema:"Ruta turística",referencia:"Ministerio de Comercio y FONTUR. (s.f.). Cinco rutas turísticas para visitar Colombia.",tipo:"Página oficial",link:"https://fontur.com.co/es/eventos/estas-son-las-5-nuevas-rutas-turisticas-que-mincomercio-y-fontur-tienen-para-ti "},{tema:"Sustentabilidad turística",referencia:"Organización de las Naciones Unidas y Organización Mundial del Turismo. (2001). Código de Ética Mundial para el Turismo. ",tipo:"Libro- Documento",link:"https://webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2019-10/gcetpassportglobalcodees.pdf"},{tema:"Colombia turística",referencia:"Colombia.co. (s.f.). 12 lugares que no puedes dejar de ver en Colombia.",tipo:"Página web Colombia.co",link:"https://www.colombia.co/visita-colombia/experiencias-unicas/12-lugares-que-no-puedes-dejar-de-ver-en-colombia/"},{tema:"Colombia turística",referencia:"Colombia.Travel. (s.f.). Conéctate con la faceta más salvaje de Colombia a través de sus lugares turísticos.",tipo:"Página web Colombia.travel",link:"https://colombia.travel/es/blog/preparate-con-esta-lista-de-lugares-para-visitar-y-viaja-por-colombia"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luisa Fernanda Posada Hincapié",cargo:"Experto temático",centro:"Regional Quindío - Centro de Comercio, Industria y Turismo"},{nombre:"María Inés Machado López",cargo:"Diseñador instruccional",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Carolina Coca Salazar",cargo:"Asesora metodológica",centro:"Regional Distrito Capital- Centro de Diseño y Metrología"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de estilo ",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Gloria Amparo López Escudero",cargo:"Adecuación instruccional-2023",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesoría metodológica y pedagógica - 2023",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Jorge Enrique Haylock Calderín",cargo:"Desarrollo front-end",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Melina Tatiana Quintero Rodriguez",cargo:"Validación de diseño y contenido",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Yuly Andrea Rey Quiñonez",cargo:"Diseño web-2023",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo Fullstack-2023",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales y vinculación LMS",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Leyson Fabián Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;const k=o("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:g["a"],render:e=>e(u)}).$mount("#app")},"648e":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.b7e2a715.jpg"},"65fa":function(e,a,o){e.exports=o.p+"img/banner-principal.d764ee76.png"},"829c":function(e,a,o){e.exports=o.p+"img/1.8732442b.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},c089:function(e,a,o){e.exports=o.p+"img/fondo-banner-interno.82c81883.jpg"},f6ca:function(e,a,o){e.exports=o.p+"img/4.b42cc453.png"}});
//# sourceMappingURL=app.11ce8aa5.js.map