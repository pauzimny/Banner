!function(e){var r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);function r(){var t=c.findIndex(function(t){return t.classList.contains("active")});c[t].classList.remove("active"),c[f].classList.add("active")}function o(){++f===u.length&&(f=0),a.src=u[f].img,s.textContent=u[f].text,r()}var i,a=document.querySelector("img.slider"),s=document.querySelector("h1.slider"),c=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(i=document.querySelectorAll(".dots span"))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),u=[{img:"images/img1.png",text:"First banner info"},{img:"images/img2.png",text:"Second banner info"},{img:"images/img3.png",text:"Third banner info"}],f=0,l=setInterval(o,4e3);window.addEventListener("keydown",function(t){37!=t.keyCode&&39!=t.keyCode||(clearInterval(l),37==t.keyCode?f--:f++,f===u.length?f=0:f<0&&(f=u.length-1),a.src=u[f].img,s.textContent=u[f].text,r(),l=setInterval(o,4e3))})},function(t,n,e){var r=e(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nheader {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n\nimg {\n    position: absolute;\n    min-width: 100%;\n    min-height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    /* opacity: 0.6; */\n}\n\nh1 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    transform: translate(-50%, -50%);\n    font-size: 60px;\n    padding: 5% 0;\n    background-color: #000;\n    color: #fff;\n    letter-spacing: 3px;\n    text-align: center;\n    text-transform: uppercase;\n    font-family: tahoma, sans-serif;\n    text-shadow: 0 0 6px red;\n    opacity: .8;\n}\n\n.dots {\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 80%;\n}\n\n@media only screen and (min-width:768px) {\n    .dots {\n        width: 50%;\n    }\n}\n\n.dots span {\n    display: inline-block;\n    background-color: #000;\n    margin: 0 20px;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    box-shadow: 0 0 0 5px white;\n}\n\n.dots span.active {\n    box-shadow: 0 0 0 5px white, 0 0 3px 10px yellow;\n}",""])},function(t,n,e){"use strict";t.exports=function(e){var s=[];return s.toString=function(){return this.map(function(t){var n=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=function(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}(r),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},s.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(e[o]=!0)}for(var i=0;i<t.length;i++){var a=t[i];null!=a[0]&&e[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),s.push(a))}},s}},function(t,n,r){var e,o,i,c={},u=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),a=(i={},function(t,n){if("function"==typeof t)return t();if(void 0===i[t]){var e=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),s=null,f=0,l=[],d=r(5);function p(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],n))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(g(r.parts[i],n));c[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function v(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,e);e.insertBefore(n,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);0<=n&&l.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var e=function(){0;return r.nc}();e&&(t.attrs.nonce=e)}return y(n,t.attrs),v(t,n),n}function y(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=f++;e=s=s||b(t),r=j.bind(null,e,a,!1),o=j.bind(null,e,a,!0)}else o=n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(n,t.attrs),v(t,n),n}(t),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}t.exports=function(t,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=u()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var s=h(t,a);return p(s,a),function(t){for(var n=[],e=0;e<s.length;e++){var r=s[e];(o=c[r.id]).refs--,n.push(o)}t&&p(h(t,a),a);for(e=0;e<n.length;e++){var o;if(0===(o=n[e]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete c[o.id]}}}};var x,w=(x=[],function(t,n){return x[t]=n,x.filter(Boolean).join("\n")});function j(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=n.protocol+"//"+n.host,i=o+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var e,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(e=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}}]);