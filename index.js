(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(t){if(t.ep)return;t.ep=!0;const d=s(t);fetch(t.href,d)}})();document.querySelector("#button-menu").addEventListener("click",function(){const o=document.querySelector("#mobile-menu"),e=document.querySelector("#button-menu"),s=document.querySelector("#pageheader-title"),a=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),d=document.querySelector("#mobile-menu-close"),c=document.querySelector("#dark-window"),i=document.querySelector("#pageheader");o.classList.add("open-menu"),e.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),s.classList.add("visually-hidden"),a.classList.add("visually-hidden"),t.classList.add("visually-hidden"),c.classList.toggle("dark-window"),i.classList.toggle("padding-for-tablet-menu")});document.querySelector("#mobile-menu-close").addEventListener("click",function(){const o=document.querySelector("#mobile-menu"),e=document.querySelector("#button-menu"),s=document.querySelector("#pageheader-title"),a=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),d=document.querySelector("#mobile-menu-close"),c=document.querySelector("#dark-window"),i=document.querySelector("#pageheader");o.classList.remove("open-menu"),d.classList.add("visually-hidden"),e.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),c.classList.toggle("dark-window"),i.classList.toggle("padding-for-tablet-menu")});document.querySelector("#pageheader-book").addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")});document.querySelector("#modal-close").addEventListener("click",function(){document.querySelector("#backdrop").classList.remove("is-open")});document.querySelector("#upcoming-button-right").addEventListener("click",function(){if(window.innerWidth<768){const o=document.querySelector("#upcoming-tours-list"),s=window.getComputedStyle(o).transform,a=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");s==="none"?(o.style.transform="translate(-326px)",t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic")):Number(s.split(",")[4])===-326&&(o.style.transform="translate(-652px)",a.classList.remove("upcoming-list-item-button-pic"),a.classList.add("upcoming-list-item-button-pic-disabled"))}else if(window.innerWidth>=768){const o=document.querySelector("#upcoming-tours-list"),s=window.getComputedStyle(o).transform,a=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");s==="none"&&(o.style.transform="translate(-374px)",t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"),a.classList.remove("upcoming-list-item-button-pic"),a.classList.add("upcoming-list-item-button-pic-disabled"))}});document.querySelector("#upcoming-button-left").addEventListener("click",function(){if(window.innerWidth<768){const o=document.querySelector("#upcoming-tours-list"),s=window.getComputedStyle(o).transform,a=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");s!=="none"&&(Number(s.split(",")[4])===-652?(o.style.transform="translate(-326px)",a.classList.remove("upcoming-list-item-button-pic-disabled"),a.classList.add("upcoming-list-item-button-pic")):(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}else if(window.innerWidth>=768){const o=document.querySelector("#upcoming-tours-list"),s=window.getComputedStyle(o).transform,a=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");s!=="none"&&(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"),a.classList.remove("upcoming-list-item-button-pic-disabled"),a.classList.add("upcoming-list-item-button-pic"))}});const g=window.matchMedia("(max-width: 767px)");g.addEventListener("change",h);function h(){const o=document.querySelector("#upcoming-tours-list"),e=document.querySelector("#right-button-scroll"),s=document.querySelector("#left-button-scroll");o.style.transform="none",s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"),e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic");const a=document.querySelector(".galery-list"),t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");a.style.transform="none",t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"),d.classList.remove("upcoming-list-item-button-pic"),d.classList.add("upcoming-list-item-button-pic-disabled")}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),e=document.querySelector("#first-hoverla"),s=document.querySelector("#second-hoverla"),a=document.querySelector("#third-hoverla");o.forEach(t=>{let d=0;t.addEventListener("touchstart",c=>{d=c.touches[0].clientX}),t.addEventListener("touchend",c=>{const l=c.changedTouches[0].clientX-d,u=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days"),r=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item");Math.abs(l)>50&&(l>0?u==s?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position"),r[1].classList.remove("selected-card-days")):u==a&&(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),r[2].classList.remove("selected-card-days")):u==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days"),r[1].classList.add("selected-card-days")):u==s&&(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),r[2].classList.add("selected-card-days")))})})});const f=document.querySelectorAll("#upcoming-modal-hoverla .swap-btn");f.forEach(o=>{o.addEventListener("click",b)});function b(o){const e=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item"),s=document.querySelector("#first-hoverla"),a=document.querySelector("#second-hoverla"),t=document.querySelector("#third-hoverla");switch(o.currentTarget){case f[0]:e[1].classList.remove("selected-card-days"),e[2].classList.remove("selected-card-days"),s.classList.add("selected-card-modal-days"),s.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position");break;case f[1]:e[1].classList.add("selected-card-days"),e[2].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position");break;case f[2]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),e=document.querySelector("#first-bukovel"),s=document.querySelector("#second-bukovel"),a=document.querySelector("#third-bukovel"),t=document.querySelector("#fourd-bukovel");o.forEach(d=>{let c=0;d.addEventListener("touchstart",i=>{c=i.touches[0].clientX}),d.addEventListener("touchend",i=>{const u=i.changedTouches[0].clientX-c,r=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days"),L=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item");Math.abs(u)>50&&(u>0?r==s?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position"),L[1].classList.remove("selected-card-days")):r==a?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),L[2].classList.remove("selected-card-days")):r==t&&(a.classList.remove("left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),L[3].classList.remove("selected-card-days")):r==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days"),L[1].classList.add("selected-card-days")):r==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),L[2].classList.add("selected-card-days")):r==a&&(a.classList.remove("selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),L[3].classList.add("selected-card-days")))})})});const y=document.querySelectorAll("#upcoming-modal-bukovel .swap-btn");y.forEach(o=>{o.addEventListener("click",S)});function S(o){const e=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item"),s=document.querySelector("#first-bukovel"),a=document.querySelector("#second-bukovel"),t=document.querySelector("#third-bukovel"),d=document.querySelector("#fourd-bukovel");switch(o.target){case y[0]:e[1].classList.remove("selected-card-days"),e[2].classList.remove("selected-card-days"),e[3].classList.remove("selected-card-days"),s.classList.add("selected-card-modal-days"),s.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position");break;case y[1]:e[1].classList.add("selected-card-days"),e[2].classList.remove("selected-card-days"),e[3].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position");break;case y[2]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position");break;case y[3]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.add("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),e=document.querySelector("#first-carpathians"),s=document.querySelector("#second-carpathians"),a=document.querySelector("#third-carpathians"),t=document.querySelector("#fourd-carpathians"),d=document.querySelector("#fived-carpathians"),c=document.querySelector("#sixed-carpathians"),i=document.querySelector("#sevened-carpathians");o.forEach(l=>{let u=0;l.addEventListener("touchstart",r=>{u=r.touches[0].clientX}),l.addEventListener("touchend",r=>{const v=r.changedTouches[0].clientX-u,n=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days"),m=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item");Math.abs(v)>50&&(v>0?n==s?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position"),m[1].classList.remove("selected-card-days")):n==a?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position"),m[2].classList.remove("selected-card-days")):n==t?(a.classList.remove("left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),m[3].classList.remove("selected-card-days")):n==d?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position"),m[4].classList.remove("selected-card-days")):n==c?(d.classList.remove("left-position"),d.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days"),c.classList.add("right-position"),m[5].classList.remove("selected-card-days")):n==i&&(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position"),m[6].classList.remove("selected-card-days")):n==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days"),m[1].classList.add("selected-card-days")):n==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days"),m[2].classList.add("selected-card-days")):n==a?(a.classList.remove("selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),m[3].classList.add("selected-card-days")):n==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days"),m[4].classList.add("selected-card-days")):n==d?(d.classList.remove("selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("right-position"),c.classList.add("selected-card-modal-days"),m[5].classList.add("selected-card-days")):n==c&&(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days"),m[6].classList.add("selected-card-days")))})})});const p=document.querySelectorAll("#upcoming-modal-carpathians .swap-btn");p.forEach(o=>{o.addEventListener("click",q)});function q(o){const e=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item"),s=document.querySelector("#first-carpathians"),a=document.querySelector("#second-carpathians"),t=document.querySelector("#third-carpathians"),d=document.querySelector("#fourd-carpathians"),c=document.querySelector("#fived-carpathians"),i=document.querySelector("#sixed-carpathians"),l=document.querySelector("#sevened-carpathians");switch(o.target){case p[0]:e[1].classList.remove("selected-card-days"),e[2].classList.remove("selected-card-days"),e[3].classList.remove("selected-card-days"),e[4].classList.remove("selected-card-days"),e[5].classList.remove("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.add("selected-card-modal-days"),s.classList.remove("left-position"),a.classList.remove("selected-card-modal-days","left-position"),a.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[1]:e[1].classList.add("selected-card-days"),e[2].classList.remove("selected-card-days"),e[3].classList.remove("selected-card-days"),e[4].classList.remove("selected-card-days"),e[5].classList.remove("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.add("left-position"),s.classList.remove("selected-card-modal-days"),a.classList.remove("right-position","left-position"),a.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[2]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.remove("selected-card-days"),e[4].classList.remove("selected-card-days"),e[5].classList.remove("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[3]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.add("selected-card-days"),e[4].classList.remove("selected-card-days"),e[5].classList.remove("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","left-position"),d.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[4]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.add("selected-card-days"),e[4].classList.add("selected-card-days"),e[5].classList.remove("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("right-position","left-position"),c.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[5]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.add("selected-card-days"),e[4].classList.add("selected-card-days"),e[5].classList.add("selected-card-days"),e[6].classList.remove("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),i.classList.remove("right-position","left-position"),i.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case p[6]:e[1].classList.add("selected-card-days"),e[2].classList.add("selected-card-days"),e[3].classList.add("selected-card-days"),e[4].classList.add("selected-card-days"),e[5].classList.add("selected-card-days"),e[6].classList.add("selected-card-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),a.classList.remove("right-position","selected-card-modal-days"),a.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),i.classList.remove("right-position","selected-card-modal-days"),i.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days");break}}document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(o=>{o.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(o=>{o.addEventListener("click",function(){if(window.innerWidth>=1440)document.querySelectorAll(".reviews-inner").forEach(s=>{s.classList.toggle("reviews-go-to-back")});else{let e;this.classList.contains("to-front")?e=this.parentElement.parentElement:e=this.parentElement.parentElement.parentElement,e.classList.toggle("reviews-go-to-back")}})});document.querySelector("#galery-button-right").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=-300,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(s==="none")o.style.transform="translate(-285px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=s.match(/matrix\((.+)\)/)[1].split(", "),i=Number(c[4])+a;Number(c[4])>=-1785&&(o.style.transform=`translate(${i}px)`,Number(c[4])===-1785&&t.classList.add("upcoming-list-item-button-pic-disabled"))}}else if(window.innerWidth>=1440){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=-1190,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(s==="none")o.style.transform="translate(-1190px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=s.split(", ")[4],i=Number(c)+a;i>=-3570&&(o.style.transform=`translate(${i}px)`,i===-3570&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=-748,t=document.querySelector("#galery-right-button-scroll"),d=document.querySelector("#galery-left-button-scroll");if(s==="none")o.style.transform="translate(-748px)",d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic");else{const c=s.split(", ")[4],i=Number(c)+a;i>=-2244&&(o.style.transform=`translate(${i}px)`,i===-2244&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=300,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(s!=="none"){const c=s.match(/matrix\((.+)\)/)[1].split(", "),i=Number(c[4])+a;Number(c[4])===-285?(o.style.transform="none",t.classList.add("upcoming-list-item-button-pic-disabled")):Number(c[4])===-2085?(d.classList.remove("upcoming-list-item-button-pic-disabled"),o.style.transform=`translate(${i}px)`):o.style.transform=`translate(${i}px)`}}else if(window.innerWidth>=1440){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=1190,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(s!=="none"){const c=Number(s.split(", ")[4]),i=c+a;c===-1190?(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-3570?(d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic"),o.style.transform=`translate(${i}px)`):o.style.transform=`translate(${i}px)`}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),s=window.getComputedStyle(o).transform,a=748,t=document.querySelector("#galery-left-button-scroll"),d=document.querySelector("#galery-right-button-scroll");if(s!=="none"){const c=Number(s.split(", ")[4]),i=c+a;c===-748?(o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-2244?(d.classList.remove("upcoming-list-item-button-pic-disabled"),d.classList.add("upcoming-list-item-button-pic"),o.style.transform=`translate(${i}px)`):o.style.transform=`translate(${i}px)`}}setTimeout(()=>{this.disabled=!1},300)});const w=document.querySelector(".galery-list");w.addEventListener("click",function(o){if(window.innerWidth>=1440&&o.target.nodeName=="IMG"){const e=o.target.src.split("-")[1].split(".")[0],s=document.createElement("img");s.src=`/img/galery/gallery-modal/gallery-modal-${e}.jpg`,s.srcset=`/img/galery/gallery-modal/gallery-modal-${e}@2x.jpg 2x`,s.alt="Nature in the Ukrainian mountains",s.id="modal-image",s.addEventListener("click",function(){t.close()});const a=document.createElement("div");a.appendChild(s);const t=basicLightbox.create(a);t.show()}});
//# sourceMappingURL=index.js.map
