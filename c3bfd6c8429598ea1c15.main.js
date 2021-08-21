(()=>{"use strict";var e,t={93021:(e,t,r)=>{r(28594),r(35666);var n=r(67294),a=r(73935),o=r(49226),u=r(49075),l=r(53894),i=(r(94500),{CELSIUS:"celsius",FAHRENHEIT:"fahrenheit"});function c(e,t,r,n,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){c(o,n,a,u,l,"next",e)}function l(e){c(o,n,a,u,l,"throw",e)}u(void 0)}))}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(e.toLowerCase()){case"clear":return"sun";default:return"cloud"}}function m(e,t){switch(t){case i.FAHRENHEIT:return"".concat(Math.floor(9*e/5-459.67)," F°");case i.CELSIUS:return"".concat(Math.floor(e-273.15)," C°");default:return"".concat(e," K")}}function p(){return h.apply(this,arguments)}function h(){return(h=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.permissions){e.next=5;break}return e.next=3,navigator.permissions.query({name:"geolocation"});case 3:return t=e.sent,e.abrupt("return",t.state);case 5:return e.abrupt("return","prompt");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=(0,u.oM)({name:"app",initialState:{theme:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",units:i.CELSIUS},reducers:{changeTheme:function(e,t){e.theme=t.payload},changeUnits:function(e,t){e.units=t.payload}}}),d=v.actions,g=d.changeTheme,y=d.changeUnits;d.changeSearch;const b=v.reducer;function E(e,t,r,n,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){E(o,n,a,u,l,"next",e)}function l(e){E(o,n,a,u,l,"throw",e)}u(void 0)}))}}var O="https://api.openweathermap.org/data/2.5";function Z(e){return x.apply(this,arguments)}function x(){return(x=w(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/weather?q=").concat(t,"&appid=").concat("4cc8f7b1e63c376f8d46b4bea3a06e7b"));case 3:return r=e.sent,e.abrupt("return",r.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(e,t){return j.apply(this,arguments)}function j(){return(j=w(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/find?lat=").concat(t,"&lon=").concat(r,"&cnt=1&appid=").concat("4cc8f7b1e63c376f8d46b4bea3a06e7b"));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function I(e,t,r,n,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}var k=(0,u.oM)({name:"geo",initialState:{permission:"",position:null,weather:null,error:null},reducers:{changeState:function(e,t){return t.payload}}}),C=k.actions.changeState;const R=k.reducer;var P;function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t,r,n,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}var F=(0,u.hg)("search/handleSearch",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{search:"",searchResult:null});case 2:return e.next=4,Z(t);case 4:return r=e.sent,e.abrupt("return",{search:t,searchResult:200===r.cod?r:null});case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){A(o,n,a,u,l,"next",e)}function l(e){A(o,n,a,u,l,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),D=(0,u.oM)({name:"app",initialState:{search:"",searchResult:null,status:"idle",error:null},reducers:{resetSearch:function(e){e.search="",e.searchResult=null,e.status="idle",e.error=null}},extraReducers:(P={},T(P,F.pending,(function(e){e.status="loading"})),T(P,F.fulfilled,(function(e,t){e.status="success",e.search=t.payload.search,e.searchResult=t.payload.searchResult})),T(P,F.rejected,(function(e,t){e.status="fail",e.error=t.error.message})),P)}),M=D.actions.resetSearch;const N=D.reducer;function _(e,t,r,n,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=(0,u.oM)({name:"favourites",initialState:{favourites:[],weatherData:{},status:"idle",error:null},reducers:{addToFavourites:function(e,t){var r;e.favourites=function(e){if(Array.isArray(e))return H(e)}(r=new Set(e.favourites).add(t.payload))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},removeFromFavourites:function(e,t){var r=t.payload;e.favourites=e.favourites.filter((function(e){return e!==r})),delete e.weatherData[r]},setCityWeatherData:function(e,t){e.weatherData[t.payload.name]=U(U({},e.weatherData[t.payload.name]),t.payload)}}}),W=L.actions,J=W.addToFavourites,$=W.removeFromFavourites,B=W.setCityWeatherData,K=function(e){return e.favourites.favourites};const G=L.reducer;var Q=function(e){return function(t){return function(r){var n=t(r);return localStorage.setItem("store",JSON.stringify(e.getState())),n}}},V=(0,u.xC)({reducer:{app:b,search:N,geo:R,favourites:G},devTools:!1,preloadedState:JSON.parse(localStorage.getItem("store")||"{}"),middleware:function(e){var t=e();return t.push(l.Z),t.push(Q),t}}),X=r(95712),Y=r(64593),ee=r(35766),te=r(65382),re=r(45697),ne=r.n(re),ae=r(73626),oe=r(40849),ue=r(39445),le=r(48237),ie=r(59574);function ce(e){var t=e.data,r=e.units;return n.createElement(ie.Z,null,n.createElement(ie.Z.Item,null,n.createElement(ie.Z.Icon,{name:"thermometer half"}),n.createElement(ie.Z.Content,null,m(t.temp,r)," (feels like ",m(t.feels_like,r),")")),n.createElement(ie.Z.Item,null,n.createElement(ie.Z.Icon,{name:"theme"}),n.createElement(ie.Z.Content,null,t.humidity," %")),n.createElement(ie.Z.Item,null,n.createElement(ie.Z.Icon,{name:"cloud download"}),n.createElement(ie.Z.Content,null,t.pressure," hPa")))}function se(e){var t=e.name,r=(0,o.v9)((function(e){return e.app.units})),a=(0,o.v9)(function(e){return function(t){return t.favourites.weatherData[e]}}(t)),u=(0,o.I0)();if((0,n.useEffect)((function(){u(function(e){return function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(B({name:e,loading:!0})),t.prev=1,t.next=4,Z(e);case 4:n=t.sent,r(B({name:e,loading:!1,weather:n})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(B({name:e,loading:!1}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function u(e){_(o,n,a,u,l,"next",e)}function l(e){_(o,n,a,u,l,"throw",e)}u(void 0)}))});return function(e){return r.apply(this,arguments)}}()}(t))}),[]),!a||a.loading)return n.createElement(ae.Z,{fluid:!0},n.createElement(ae.Z.Content,{style:{padding:"2em"}},n.createElement(oe.Z,{active:!0,centered:!0})));var l=a.weather.weather[0].main,i=m(a.weather.main.temp,r);return n.createElement(ae.Z,{fluid:!0},n.createElement(ae.Z.Content,null,n.createElement("div",{style:{float:"right"}},n.createElement(ue.Z,null,i),n.createElement(te.Z,{style:{float:"right"},size:"big",name:f()})),n.createElement(ae.Z.Header,null,t),n.createElement(ae.Z.Meta,null,l),n.createElement(ae.Z.Description,null,n.createElement(ce,{data:a.weather.main,units:r}),n.createElement(le.Z,{size:"tiny",icon:"trash",color:"red",floated:"right",onClick:function(){u($(t))}}))))}ce.propTypes={data:ne().shape({humidity:ne().number,pressure:ne().number,temp:ne().number,feels_like:ne().number}),units:ne().oneOf(Object.values(i))},se.propTypes={name:ne().string.isRequired,loading:ne().bool};const fe=se,me=function(){var e=(0,o.v9)(K);return e.length?n.createElement(ee.Z,null,n.createElement(te.Z,{size:"large",style:{float:"right"},name:"star"}),n.createElement(X.Z,{style:{marginTop:"3em"}},e.map((function(e){return n.createElement(fe,{key:e,name:e})})))):null};function pe(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.geo.permission})),r=(0,o.v9)((function(e){return e.geo.position})),a=(0,o.v9)((function(e){return e.geo.weather})),u=(0,o.v9)((function(e){return e.app.units}));return(0,n.useEffect)((function(){e(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:if(r=e.sent,n={permission:r,position:null,weather:null},!["granted","prompt"].includes(r)){e.next=19;break}return e.prev=5,e.next=8,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 8:return a=e.sent,n.position={lat:a.coords.latitude,lon:a.coords.longitude},e.next=12,S(a.coords.latitude,a.coords.longitude);case 12:o=e.sent,n.weather=o.list[0],e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),n.error="cannot get geolocation";case 19:t(C(n));case 20:case"end":return e.stop()}}),e,null,[[5,16]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){I(o,n,a,u,l,"next",e)}function l(e){I(o,n,a,u,l,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}())}),[t]),"denied"!==t&&r&&a?n.createElement(ee.Z,null,n.createElement(te.Z,{size:"large",style:{float:"right"},name:"map marker alternate"}),n.createElement(ue.Z,{style:{marginTop:"0"}},a.name),n.createElement(ce,{data:a.main,units:u})):null}function he(e){var t=e.children,r=e.width,a={display:"inline-block",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"".concat(r,"px"),verticalAlign:"middle"};return n.createElement("span",{style:a},t)}he.propTypes={children:ne().node,width:ne().number},he.defaultProps={width:150};const ve=he;function de(){var e=(0,o.v9)((function(e){return e.search})),t=e.search,r=e.status,a=e.searchResult,u=(0,o.I0)(),l=(0,o.v9)((function(e){return e.app.units}));if(!t)return null;var i=null;return"loading"===r?i=n.createElement("div",{style:{margin:"2em"}},n.createElement(oe.Z,{active:!0,centered:!0})):t&&!a?i=n.createElement(n.Fragment,null,n.createElement(te.Z,{size:"large",style:{float:"right"},name:"search"}),n.createElement("h3",{style:{marginTop:"0"}},"City name «",n.createElement(ve,null,t),"» not found")):t&&a&&(i=n.createElement(n.Fragment,null,n.createElement(te.Z,{size:"large",style:{float:"right"},name:"search"}),n.createElement(ue.Z,{style:{marginTop:"0"}},a.name),n.createElement(ce,{data:a.main,units:l}),n.createElement(X.Z,{textAlign:"right"},n.createElement(le.Z,{size:"tiny",content:"Add to favourites",icon:"star",onClick:function(){u(J(a.name)),u(M())}})))),n.createElement(ee.Z,null,i)}var ge=r(14309),ye=r(17624),be=r(83352),Ee=["leftItem","rightItem","onChange","value"];function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Oe(e){var t=e.leftItem,r=e.rightItem,a=e.onChange,o=e.value,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,Ee);return n.createElement("div",we({className:"rw-toggle-left-right"},u),n.createElement("div",{className:"rw-toggle-left-right_left-item"},t.label),n.createElement("div",{className:"rw-toggle-left-right_toggle"},n.createElement(be.Z,{toggle:!0,checked:o===r.value,onChange:function(e,n){var o=n.checked;return a(o?r.value:t.value)}})),n.createElement("div",{className:"rw-toggle-left-right_right-item"},r.label))}Oe.propTypes={leftItem:ne().shape({label:ne().node,value:ne().any}).isRequired,rightItem:ne().shape({label:ne().node,value:ne().any}).isRequired,onChange:ne().func.isRequired,value:ne().any.isRequired};const Ze=Oe;function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Se(e){var t=(0,o.v9)((function(e){return e.app.theme})),r=(0,o.I0)();return n.createElement(Ze,xe({},e,{value:t,onChange:function(e){return r(g(e))},leftItem:{label:n.createElement(te.Z,{name:"sun"}),value:"light"},rightItem:{label:n.createElement(te.Z,{name:"moon"}),value:"dark"}}))}function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ie(e){var t=(0,o.v9)((function(e){return e.app.units})),r=(0,o.I0)();return n.createElement(Ze,je({},e,{value:t,onChange:function(e){return r(y(e))},leftItem:{label:"C°",value:i.CELSIUS},rightItem:{label:"F°",value:i.FAHRENHEIT}}))}var ke,Ce=r(60416);function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Pe(){var e,t,r=(0,o.v9)((function(e){return e.search.search})),a=(0,o.I0)(),u=(e=(0,n.useState)(r),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Re(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],i=u[1];return(0,n.useEffect)((function(){i(r)}),[r]),n.createElement(Ce.Z,{fluid:!0,placeholder:"Enter city name...",icon:"search",value:l,onChange:function(e,t){var r=t.value;i(r),ke&&clearTimeout(ke),ke=setTimeout((function(){a(F(r))}),1e3)}})}var Te={background:"#FFF",borderRadius:"5px",padding:".2em"};function Ae(){return n.createElement(ge.Z,{style:{padding:"1em"},stackable:!0},n.createElement(ge.Z.Row,null,n.createElement(ge.Z.Column,{width:5},n.createElement(ue.Z,null,n.createElement(ye.Z,{alt:"logo",src:"./logo.png",style:Te})," React Weather")),n.createElement(ge.Z.Column,{textAlign:"center",width:6},n.createElement(Pe,null)),n.createElement(ge.Z.Column,{textAlign:"right",width:5},n.createElement(Ie,{style:{marginRight:"1em"}}),n.createElement(Se,null))))}const Fe=function(){var e=(0,o.v9)((function(e){return e.app.theme}));return n.createElement(n.Fragment,null,n.createElement(Y.Z,null,"dark"===e&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark.css"})),n.createElement(Ae,null),n.createElement(X.Z,{text:!0,style:{padding:"2em 0"}},n.createElement(de,null),n.createElement(pe,null),n.createElement(me,null)))};var De=function(){return n.createElement(o.zt,{store:V},n.createElement(Fe,null))};a.render(n.createElement(De,null),document.getElementById("app"))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var u=1/0;for(s=0;s<e.length;s++){for(var[r,a,o]=e[s],l=!0,i=0;i<r.length;i++)(!1&o||u>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(l=!1,o<u&&(u=o));if(l){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[u,l,i]=r,c=0;for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var s=i(n);for(t&&t(r);c<u.length;c++)o=u[c],n.o(e,o)&&e[o]&&e[o][0](),e[u[c]]=0;return n.O(s)},r=self.webpackChunkreact_weather=self.webpackChunkreact_weather||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[245],(()=>n(93021)));a=n.O(a)})();