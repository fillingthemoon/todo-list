!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.getElementById("content");const r=(e,t,n,o)=>({getTitle:()=>e,getDescription:()=>t,getDueDate:()=>n,getPriority:()=>o});const i=document.getElementById("content");(()=>{const e=document.createElement("div");e.id="sidebar-container",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.textContent="W E A V R",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="todo-container";const t=[r("Homework","Do math homework","18/07/20","Medium"),r("Sweep","Sweep the floor","19/07/20","High"),r("Cook lunch","Cook mac n cheese","20/07/20","Low"),r("Take out trash","Use spare plastic bags for trash","21/07/20","High")];for(let n=0;n<t.length;n++){let o=document.createElement("div");o.id=n+1,o.classList.add("todo-div"),o.textContent=t[n].getTitle(),e.appendChild(o)}return e}()),o.appendChild(e)})(),(()=>{const e=document.createElement("div");e.id="mainpage-container",e.textContent="MAINPAGE",i.appendChild(e)})()}]);