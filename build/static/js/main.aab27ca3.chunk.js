/*! For license information please see main.aab27ca3.chunk.js.LICENSE.txt */
(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{35:function(t,e,r){t.exports=r(51)},40:function(t,e,r){},51:function(t,e,r){"use strict";r.r(e);var n=r(9),a=r.n(n),o=r(33),i=r.n(o),c=(r(40),r(10)),u=function(){return a.a.createElement("div",{className:"title"},a.a.createElement("h1",null,"FireGram"),a.a.createElement("h2",null,"Your Pictures"))},l=r(2),s=r(25);r(54),r(52);s.a.initializeApp({apiKey:"AIzaSyBKWQSu8RjQV3od_zw-09rdbZVQcFPssxA",authDomain:"my-firegram-30afa.firebaseapp.com",projectId:"my-firegram-30afa",storageBucket:"my-firegram-30afa.appspot.com",messagingSenderId:"115487977782",appId:"1:115487977782:web:a3147db553efdb25e24397"});var f=s.a.storage(),h=s.a.firestore(),p=s.a.firestore.FieldValue.serverTimestamp;function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var m=function(t){var e=Object(n.useState)(0),r=Object(c.a)(e,2),a=r[0],o=r[1],i=Object(n.useState)(null),u=Object(c.a)(i,2),s=u[0],m=u[1],v=Object(n.useState)(null),y=Object(c.a)(v,2),g=y[0],w=y[1];return Object(n.useEffect)((function(){var e=f.ref(t.name),r=h.collection("images");e.put(t).on("state Changed",(function(t){var e=t.bytesTransferred/t.totalBytes*100;o(e)}),(function(t){m(t)}),Object(l.a)(d().mark((function t(){var n,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDownloadURL();case 2:n=t.sent,a=p(),r.add({url:n,createdAt:a}),w(n);case 6:case"end":return t.stop()}}),t)}))))}),[t]),{progress:a,url:g,error:s}},v=function(t){var e=t.file,r=t.setFile,o=m(e),i=o.url,c=o.progress;return Object(n.useEffect)((function(){i&&r(null)}),[i,r]),a.a.createElement("div",{className:"progress-bar",style:{width:c+"%"}})},y=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)(null),u=Object(c.a)(i,2),l=u[0],s=u[1],f=["image/png","image/jpeg"];return a.a.createElement("form",null,a.a.createElement("label",null,a.a.createElement("input",{type:"file",onChange:function(t){var e=t.target.files[0];e&&f.includes(e.type)?(o(e),s("")):(o(null),s("Please Select an Image File(jpeg or png)"))}}),a.a.createElement("span",null,"+")),a.a.createElement("div",{className:"output"},l&&a.a.createElement("div",{className:"error"},l),r&&a.a.createElement("div",null,r.name),r&&a.a.createElement(v,{file:r,setFile:o})))},g=r(23),w=function(t){var e=Object(n.useState)([]),r=Object(c.a)(e,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){var e=h.collection(t).orderBy("createdAt","desc").onSnapshot((function(t){var e=[];t.forEach((function(t){e.push(Object(g.a)(Object(g.a)({},t.data()),{},{id:t.id}))})),o(e)}));return function(){return e()}}),[t]),{docs:a}},b=r(28),E=function(t){var e=t.setSelectedImg,r=w("images").docs;return a.a.createElement("div",{className:"img-grid"},r&&r.map((function(t){return a.a.createElement(b.motion.div,{className:"img-wrap",key:t.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return e(t.url)}},a.a.createElement(b.motion.img,{src:t.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},j=function(t){var e=t.selectedImg,r=t.setSelectedImg;return a.a.createElement("div",{className:"backdrop",onClick:function(t){t.target.classList.contains("backdrop")&&r(null)}},a.a.createElement("img",{src:e,alt:"enlarged pic"}))};var O=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),r=e[0],o=e[1];return a.a.createElement("div",{className:"App"},a.a.createElement(u,null),a.a.createElement(y,null),a.a.createElement("h2",null,"Gallery"),a.a.createElement(E,{setSelectedImg:o}),r&&a.a.createElement(j,{selectedImg:r,setSelectedImg:o}))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.aab27ca3.chunk.js.map