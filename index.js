(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(t){if(t.ep)return;t.ep=!0;const d=e(t);fetch(t.href,d)}})();const h=document.querySelectorAll("[data-menuButton]");h.forEach(o=>o.addEventListener("click",w));function w(){const o=document.querySelector(".hero .container"),s=document.querySelector("#dark-window"),e=document.querySelector("#pageheader");document.querySelector("#mobile-menu").classList.toggle("open-menu"),s.classList.toggle("dark-window"),e.classList.toggle("padding-for-tablet-menu"),E([o,...h])}function E(o){o.forEach(s=>s.classList.toggle("visually-hidden"))}const _=document.querySelectorAll("[data-modal-window]");_.forEach(o=>o.addEventListener("click",x));function x(){document.querySelector("#backdrop").classList.toggle("is-open")}const b=document.querySelector("#upcoming-button-right"),S=document.querySelector("#upcoming-button-left");b.addEventListener("click",B);S.addEventListener("click",A);const q=document.querySelector("#upcoming-tours-list"),k=innerWidth<768?326:374;let y=0;function B(){y+=k,q.style.transform=`translate(-${y}px)`,S.disabled=!1,(innerWidth>=768||y===652)&&(this.disabled=!0)}function A(){y-=k,q.style.transform=`translate(-${y}px)`,b.disabled=!1,y===0&&(this.disabled=!0)}const X=window.matchMedia("(max-width: 767px)");X.addEventListener("change",N);function N(){const o=document.querySelector("#upcoming-tours-list"),s=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");o.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled"),s.classList.remove("upcoming-list-item-button-pic-disabled"),s.classList.add("upcoming-list-item-button-pic");const a=document.querySelector(".galery-list"),t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");a.style.transform="none",t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"),d.classList.remove("upcoming-list-item-button-pic"),d.classList.add("upcoming-list-item-button-pic-disabled")}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),s=document.querySelector("#first-hoverla"),e=document.querySelector("#second-hoverla"),a=document.querySelector("#third-hoverla");o.forEach(t=>{let d=0;t.addEventListener("touchstart",c=>{d=c.touches[0].clientX}),t.addEventListener("touchend",c=>{const i=c.changedTouches[0].clientX-d,u=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days"),r=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item");Math.abs(i)>50&&(i>0?u==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position"),r[1].classList.remove("selected-card-days")):u==a&&(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),r[2].classList.remove("selected-card-days")):u==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days"),r[1].classList.add("selected-card-days")):u==e&&(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),r[2].classList.add("selected-card-days")))})})});const v=document.querySelectorAll("#upcoming-modal-hoverla .swap-btn");v.forEach(o=>{o.addEventListener("click",C)});function C(o){const s=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-hoverla"),a=document.querySelector("#second-hoverla"),t=document.querySelector("#third-hoverla");switch(o.currentTarget){case v[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position");break;case v[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position");break;case v[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),s=document.querySelector("#first-bukovel"),e=document.querySelector("#second-bukovel"),a=document.querySelector("#third-bukovel"),t=document.querySelector("#fourd-bukovel");o.forEach(d=>{let c=0;d.addEventListener("touchstart",l=>{c=l.touches[0].clientX}),d.addEventListener("touchend",l=>{const u=l.changedTouches[0].clientX-c,r=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days"),p=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item");Math.abs(u)>50&&(u>0?r==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position"),p[1].classList.remove("selected-card-days")):r==a?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),p[2].classList.remove("selected-card-days")):r==t&&(a.classList.remove("left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),p[3].classList.remove("selected-card-days")):r==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days"),p[1].classList.add("selected-card-days")):r==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),p[2].classList.add("selected-card-days")):r==a&&(a.classList.remove("selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),p[3].classList.add("selected-card-days")))})})});const f=document.querySelectorAll("#upcoming-modal-bukovel .swap-btn");f.forEach(o=>{o.addEventListener("click",$)});function $(o){const s=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-bukovel"),a=document.querySelector("#second-bukovel"),t=document.querySelector("#third-bukovel"),d=document.querySelector("#fourd-bukovel");switch(o.target){case f[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position");break;case f[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position");break;case f[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position");break;case f[3]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),s=document.querySelector("#first-carpathians"),e=document.querySelector("#second-carpathians"),a=document.querySelector("#third-carpathians"),t=document.querySelector("#fourd-carpathians"),d=document.querySelector("#fived-carpathians"),c=document.querySelector("#sixed-carpathians"),l=document.querySelector("#sevened-carpathians");o.forEach(i=>{let u=0;i.addEventListener("touchstart",r=>{u=r.touches[0].clientX}),i.addEventListener("touchend",r=>{const g=r.changedTouches[0].clientX-u,n=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days"),m=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item");Math.abs(g)>50&&(g>0?n==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position"),m[1].classList.remove("selected-card-days")):n==a?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),m[2].classList.remove("selected-card-days")):n==t?(a.classList.remove("left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),m[3].classList.remove("selected-card-days")):n==d?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position"),m[4].classList.remove("selected-card-days")):n==c?(d.classList.remove("left-position"),d.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days"),c.classList.add("right-position"),m[5].classList.remove("selected-card-days")):n==l&&(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position"),m[6].classList.remove("selected-card-days")):n==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days"),m[1].classList.add("selected-card-days")):n==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),m[2].classList.add("selected-card-days")):n==a?(a.classList.remove("selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),m[3].classList.add("selected-card-days")):n==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days"),m[4].classList.add("selected-card-days")):n==d?(d.classList.remove("selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("right-position"),c.classList.add("selected-card-modal-days"),m[5].classList.add("selected-card-days")):n==c&&(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days"),m[6].classList.add("selected-card-days")))})})});const L=document.querySelectorAll("#upcoming-modal-carpathians .swap-btn");L.forEach(o=>{o.addEventListener("click",T)});function T(o){const s=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-carpathians"),a=document.querySelector("#second-carpathians"),t=document.querySelector("#third-carpathians"),d=document.querySelector("#fourd-carpathians"),c=document.querySelector("#fived-carpathians"),l=document.querySelector("#sixed-carpathians"),i=document.querySelector("#sevened-carpathians");switch(o.target){case L[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),l.classList.remove("selected-card-modal-days","left-position"),l.classList.add("right-position"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.add("left-position"),e.classList.remove("selected-card-modal-days"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),l.classList.remove("selected-card-modal-days","left-position"),l.classList.add("right-position"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),l.classList.remove("selected-card-modal-days","left-position"),l.classList.add("right-position"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[3]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","left-position"),d.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),l.classList.remove("selected-card-modal-days","left-position"),l.classList.add("right-position"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[4]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("right-position","left-position"),c.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days","left-position"),l.classList.add("right-position"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[5]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.add("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),l.classList.remove("right-position","left-position"),l.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position");break;case L[6]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.add("selected-card-days"),s[6].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),l.classList.remove("right-position","selected-card-modal-days"),l.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days");break}}document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(o=>{o.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(o=>{o.addEventListener("click",function(){if(window.innerWidth>=1440)document.querySelectorAll(".reviews-inner").forEach(e=>{e.classList.toggle("reviews-go-to-back")});else{let s;this.classList.contains("to-front")?s=this.parentElement.parentElement:s=this.parentElement.parentElement.parentElement,s.classList.toggle("reviews-go-to-back")}})});document.querySelector("#galery-button-right").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=-300,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(e==="none")o.style.transform="translate(-285px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=e.match(/matrix\((.+)\)/)[1].split(", "),l=Number(c[4])+a;Number(c[4])>=-1785&&(o.style.transform=`translate(${l}px)`,Number(c[4])===-1785&&t.classList.add("upcoming-list-item-button-pic-disabled"))}}else if(window.innerWidth>=1440){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=-1190,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(e==="none")o.style.transform="translate(-1190px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=e.split(", ")[4],l=Number(c)+a;l>=-3570&&(o.style.transform=`translate(${l}px)`,l===-3570&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=-748,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(e==="none")o.style.transform="translate(-748px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=e.split(", ")[4],l=Number(c)+a;l>=-2244&&(o.style.transform=`translate(${l}px)`,l===-2244&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=300,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=e.match(/matrix\((.+)\)/)[1].split(", "),l=Number(c[4])+a;Number(c[4])===-285?(o.style.transform="none",t.classList.add("upcoming-list-item-button-pic-disabled")):Number(c[4])===-2085?(d.classList.remove("upcoming-list-item-button-pic-disabled"),o.style.transform=`translate(${l}px)`):o.style.transform=`translate(${l}px)`}}else if(window.innerWidth>=1440){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=1190,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=Number(e.split(", ")[4]),l=c+a;c===-1190?(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-3570?(d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic"),o.style.transform=`translate(${l}px)`):o.style.transform=`translate(${l}px)`}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),e=window.getComputedStyle(o).transform,a=748,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=Number(e.split(", ")[4]),l=c+a;c===-748?(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-2244?(d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic"),o.style.transform=`translate(${l}px)`):o.style.transform=`translate(${l}px)`}}setTimeout(()=>{this.disabled=!1},300)});const W=document.querySelector(".galery-list");W.addEventListener("click",M);function M(o){if(window.innerWidth>=1440&&o.target.nodeName=="IMG"){const s=o.target.src.split("-")[1].split(".")[0];basicLightbox.create(`<img
							src="./gallery-modal-${s}.jpg"
							srcset="./gallery-modal-${s}@2x.jpg 2x"
							alt="Nature in the Ukrainian mountains"
						/>`).show()}}
//# sourceMappingURL=index.js.map
