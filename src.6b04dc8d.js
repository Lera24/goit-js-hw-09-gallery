parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/goit-js-hw-09-gallery/goit-js-hw-09-gallery/src/images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"w8gU":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_1_340.2ddea543.jpg";
},{}],"IeTw":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_1_1280.98448194.jpg";
},{}],"UEH9":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_2_340.37a81b21.jpg";
},{}],"XYjX":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_2_1280.1e3e4c28.jpg";
},{}],"DcB1":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_3_340.f304822b.jpg";
},{}],"OPQk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_3_1280.63261a42.jpg";
},{}],"u86v":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_4_340.5b11db84.jpg";
},{}],"goTy":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_4_1280.89f67dd5.jpg";
},{}],"uNfP":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_5_340.e2f3aae4.jpg";
},{}],"CRrP":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_5_1280.48120930.jpg";
},{}],"Zfno":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_6_340.b192f5c7.jpg";
},{}],"mKBU":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_6_1280.6d95ec1a.jpg";
},{}],"UANN":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_7_340.9b7f50fa.jpg";
},{}],"cNMM":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_7_1280.2796d5b7.jpg";
},{}],"rhVs":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_8_340.a2645b08.jpg";
},{}],"YkSx":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_8_1280.2d3be512.jpg";
},{}],"CvPf":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_9_340.b646ff4f.jpg";
},{}],"PiJq":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/p_9_1280.c7725510.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.images=void 0,require("./sass/main.scss");var e=v(require("/images/p_1_340.jpg")),i=v(require("/images/p_1_1280.jpg")),r=v(require("/images/p_2_340.jpg")),a=v(require("/images/p_2_1280.jpg")),t=v(require("/images/p_3_340.jpg")),s=v(require("/images/p_3_1280.jpg")),n=v(require("/images/p_4_340.jpg")),o=v(require("/images/p_4_1280.jpg")),l=v(require("/images/p_5_340.jpg")),p=v(require("/images/p_5_1280.jpg")),u=v(require("/images/p_6_340.jpg")),g=v(require("/images/p_6_1280.jpg")),c=v(require("/images/p_7_340.jpg")),d=v(require("/images/p_7_1280.jpg")),_=v(require("/images/p_8_340.jpg")),m=v(require("/images/p_8_1280.jpg")),f=v(require("/images/p_9_340.jpg")),q=v(require("/images/p_9_1280.jpg"));function v(e){return e&&e.__esModule?e:{default:e}}const j=[{preview:e.default,original:i.default,description:"Hokkaido Flower"},{preview:r.default,original:a.default,description:"Container Haulage Freight"},{preview:t.default,original:s.default,description:"Aerial Beach View"},{preview:n.default,original:o.default,description:"Flower Blooms"},{preview:l.default,original:p.default,description:"Alpine Mountains"},{preview:u.default,original:g.default,description:"Mountain Lake Sailing"},{preview:c.default,original:d.default,description:"Alpine Spring Meadows"},{preview:_.default,original:m.default,description:"Nature Landscape"},{preview:f.default,original:q.default,description:"Lighthouse Coast Sea"}];exports.images=j;const w=document.querySelector(".gallery"),L=j.map(({preview:e,original:i,description:r})=>{return`<li class='gallery__item'><a class='gallery__link' href='${i}'><img\n    class='gallery__image'\n    src = '${e}'\n    data-source='${i}'\n    alt='${r}'/></a></li>`});w.innerHTML=L.join("");const y=document.querySelector("div.lightbox"),k=function(e){if(e.preventDefault(),"IMG"===e.target.nodeName)return y.classList.add("is-open")};w.addEventListener("click",k);const h=document.querySelector(".lightbox__image"),M=function(e){if(e.preventDefault(),y.classList.contains("is-open")&&"IMG"===e.target.nodeName){const i=e.target.dataset.source;return h.src=i}};w.addEventListener("click",M);const S=document.querySelector('[data-action="close-lightbox"]'),x=function(){if(y.classList.contains("is-open"))return h.src="",y.classList.remove("is-open")};S.addEventListener("click",x);const E=document.querySelector(".lightbox__overlay");E.addEventListener("click",x);const b=function(e){if("Escape"===e.key)return h.src="",y.classList.remove("is-open")};window.addEventListener("keydown",b);
},{"./sass/main.scss":"clu1","/images/p_1_340.jpg":"w8gU","/images/p_1_1280.jpg":"IeTw","/images/p_2_340.jpg":"UEH9","/images/p_2_1280.jpg":"XYjX","/images/p_3_340.jpg":"DcB1","/images/p_3_1280.jpg":"OPQk","/images/p_4_340.jpg":"u86v","/images/p_4_1280.jpg":"goTy","/images/p_5_340.jpg":"uNfP","/images/p_5_1280.jpg":"CRrP","/images/p_6_340.jpg":"Zfno","/images/p_6_1280.jpg":"mKBU","/images/p_7_340.jpg":"UANN","/images/p_7_1280.jpg":"cNMM","/images/p_8_340.jpg":"rhVs","/images/p_8_1280.jpg":"YkSx","/images/p_9_340.jpg":"CvPf","/images/p_9_1280.jpg":"PiJq"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.6b04dc8d.js.map