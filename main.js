!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"string"==typeof t&&(t=document.querySelector(t)),this.element=t,this.showTooltip=this.showTooltip.bind(this),this.element.addEventListener("click",this.showTooltip),this.tooltipGenerator=n}var t,n,r;return t=e,(n=[{key:"showTooltip",value:function(e){e.preventDefault(),document.querySelector(".tooltip")?document.querySelector(".tooltip").remove():this.tooltipGenerator.addTooltip(this.element)}}])&&o(t.prototype,n),r&&o(t,r),e}())(".btn",new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"addTooltip",value:function(e){var t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");if(t.className="tooltip",n.className="tooltip-title",n.textContent=e.dataset.originalTitle,o.textContent=e.dataset.content,document.body.appendChild(t),t.appendChild(n),t.appendChild(o),e){var r=e.getBoundingClientRect();t.style.top="".concat(r.top-t.offsetHeight-15,"px")}}}])&&r(t.prototype,n),o&&r(t,o),e}()));window.registerForm=i}]);
//# sourceMappingURL=main.js.map