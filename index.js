(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();document.querySelector("#button-menu").addEventListener("click",function(){const o=document.querySelector("#mobile-menu"),c=document.querySelector("#button-menu"),t=document.querySelector("#pageheader-title"),s=document.querySelector("#pageheader-text"),e=document.querySelector("#pageheader-book"),l=document.querySelector("#mobile-menu-close"),i=document.querySelector("#dark-window"),a=document.querySelector("#pageheader");o.classList.add("open-menu"),c.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),s.classList.add("visually-hidden"),e.classList.add("visually-hidden"),i.classList.toggle("dark-window"),a.classList.toggle("padding-for-tablet-menu")});document.querySelector("#mobile-menu-close").addEventListener("click",function(){const o=document.querySelector("#mobile-menu"),c=document.querySelector("#button-menu"),t=document.querySelector("#pageheader-title"),s=document.querySelector("#pageheader-text"),e=document.querySelector("#pageheader-book"),l=document.querySelector("#mobile-menu-close"),i=document.querySelector("#dark-window"),a=document.querySelector("#pageheader");o.classList.remove("open-menu"),l.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),i.classList.toggle("dark-window"),a.classList.toggle("padding-for-tablet-menu")});document.querySelector("#pageheader-book").addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")});document.querySelector("#modal-close").addEventListener("click",function(){document.querySelector("#backdrop").classList.remove("is-open")});document.querySelector("#upcoming-button-right").addEventListener("click",function(){if(window.innerWidth<768){const o=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(o).transform,s=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t==="none"?(o.style.transform="translate(-326px)",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic")):Number(t.split(",")[4])===-326&&(o.style.transform="translate(-652px)",s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"))}else if(window.innerWidth>=768){const o=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(o).transform,s=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t==="none"&&(o.style.transform="translate(-374px)",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic"),s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"))}});document.querySelector("#upcoming-button-left").addEventListener("click",function(){if(window.innerWidth<768){const o=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(o).transform,s=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t!=="none"&&(Number(t.split(",")[4])===-652?(o.style.transform="translate(-326px)",s.classList.remove("upcoming-list-item-button-pic-disabled"),s.classList.add("upcoming-list-item-button-pic")):(o.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")))}else if(window.innerWidth>=768){const o=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(o).transform,s=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t!=="none"&&(o.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled"),s.classList.remove("upcoming-list-item-button-pic-disabled"),s.classList.add("upcoming-list-item-button-pic"))}});const y=window.matchMedia("(max-width: 767px)");y.addEventListener("change",f);function f(){const o=document.querySelector("#upcoming-tours-list"),c=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");o.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"),c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic");const s=document.querySelector(".galery-list"),e=document.querySelector("#galery-right-button-scroll"),l=document.querySelector("#galery-left-button-scroll");s.style.transform="none",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic"),l.classList.remove("upcoming-list-item-button-pic"),l.classList.add("upcoming-list-item-button-pic-disabled")}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),c=document.querySelector("#first-hoverla"),t=document.querySelector("#second-hoverla"),s=document.querySelector("#third-hoverla");o.forEach(e=>{let l=0;e.addEventListener("touchstart",i=>{l=i.touches[0].clientX}),e.addEventListener("touchend",i=>{const m=i.changedTouches[0].clientX-l,r=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days"),d=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item");Math.abs(m)>50&&(m>0?r==t?(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),d[1].classList.remove("selected-card-days")):r==s&&(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position"),d[2].classList.remove("selected-card-days")):r==c?(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),d[1].classList.add("selected-card-days")):r==t&&(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days"),d[2].classList.add("selected-card-days")))})})});const u=document.querySelectorAll("#upcoming-modal-hoverla .swap-btn");u.forEach(o=>{o.addEventListener("click",L)});function L(o){const c=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item"),t=document.querySelector("#first-hoverla"),s=document.querySelector("#second-hoverla"),e=document.querySelector("#third-hoverla");switch(o.currentTarget){case u[0]:c[1].classList.remove("selected-card-days"),c[2].classList.remove("selected-card-days"),t.classList.add("selected-card-modal-days"),t.classList.remove("left-position"),s.classList.remove("selected-card-modal-days","left-position"),s.classList.add("right-position"),e.classList.remove("selected-card-modal-days","left-position"),e.classList.add("right-position");break;case u[1]:c[1].classList.add("selected-card-days"),c[2].classList.remove("selected-card-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),s.classList.remove("right-position","left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position");break;case u[2]:c[1].classList.add("selected-card-days"),c[2].classList.add("selected-card-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),s.classList.remove("right-position","selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),c=document.querySelector("#first-bukovel"),t=document.querySelector("#second-bukovel"),s=document.querySelector("#third-bukovel"),e=document.querySelector("#fourd-bukovel");o.forEach(l=>{let i=0;l.addEventListener("touchstart",a=>{i=a.touches[0].clientX}),l.addEventListener("touchend",a=>{const r=a.changedTouches[0].clientX-i,d=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days");Math.abs(r)>50&&(r>0?d==t?(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):d==s?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position")):d==e&&(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):d==c?(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):d==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days")):d==s&&(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),c=document.querySelector("#first-carpathians"),t=document.querySelector("#second-carpathians"),s=document.querySelector("#third-carpathians"),e=document.querySelector("#fourd-carpathians"),l=document.querySelector("#fived-carpathians"),i=document.querySelector("#sixed-carpathians"),a=document.querySelector("#sevened-carpathians");o.forEach(m=>{let r=0;m.addEventListener("touchstart",d=>{r=d.touches[0].clientX}),m.addEventListener("touchend",d=>{const p=d.changedTouches[0].clientX-r,n=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days");Math.abs(p)>50&&(p>0?n==t?(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):n==s?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position")):n==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):n==l?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position")):n==i?(l.classList.remove("left-position"),l.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position")):n==a&&(i.classList.remove("left-position"),i.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position")):n==c?(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):n==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days")):n==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):n==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days")):n==l?(l.classList.remove("selected-card-modal-days"),l.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days")):n==i&&(i.classList.remove("selected-card-modal-days"),i.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days")))})})});document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(o=>{o.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(o=>{o.addEventListener("click",function(){let c;this.classList.contains("to-front")?c=this.parentElement.parentElement:c=this.parentElement.parentElement.parentElement,c.classList.toggle("reviews-go-to-back")})});document.querySelector("#galery-button-right").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),t=window.getComputedStyle(o).transform,s=-300,e=document.querySelector("#galery-right-button-scroll"),l=document.querySelector("#galery-left-button-scroll");if(t==="none")o.style.transform="translate(-285px)",l.classList.remove("upcoming-list-item-button-pic-disabled"),l.classList.add("upcoming-list-item-button-pic");else{const i=t.match(/matrix\((.+)\)/)[1].split(", "),a=Number(i[4])+s;Number(i[4])>=-1785&&(o.style.transform=`translate(${a}px)`,Number(i[4])===-1785&&e.classList.add("upcoming-list-item-button-pic-disabled"))}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),t=window.getComputedStyle(o).transform,s=-748,e=document.querySelector("#galery-right-button-scroll"),l=document.querySelector("#galery-left-button-scroll");if(t==="none")o.style.transform="translate(-748px)",l.classList.remove("upcoming-list-item-button-pic-disabled"),l.classList.add("upcoming-list-item-button-pic");else{const i=t.split(", ")[4],a=Number(i)+s;a>=-2244&&(o.style.transform=`translate(${a}px)`,a===-2244&&(e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")))}}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const o=document.querySelector(".galery-list"),t=window.getComputedStyle(o).transform,s=300,e=document.querySelector("#galery-left-button-scroll"),l=document.querySelector("#galery-right-button-scroll");if(t!=="none"){const i=t.match(/matrix\((.+)\)/)[1].split(", "),a=Number(i[4])+s;Number(i[4])===-285?(o.style.transform="none",e.classList.add("upcoming-list-item-button-pic-disabled")):Number(i[4])===-2085?(l.classList.remove("upcoming-list-item-button-pic-disabled"),o.style.transform=`translate(${a}px)`):o.style.transform=`translate(${a}px)`}}else if(window.innerWidth>=768){this.disabled=!0;const o=document.querySelector(".galery-list"),t=window.getComputedStyle(o).transform,s=748,e=document.querySelector("#galery-left-button-scroll"),l=document.querySelector("#galery-right-button-scroll");if(t!=="none"){const i=Number(t.split(", ")[4]),a=i+s;i===-748?(o.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")):i===-2244?(l.classList.remove("upcoming-list-item-button-pic-disabled"),l.classList.add("upcoming-list-item-button-pic"),o.style.transform=`translate(${a}px)`):o.style.transform=`translate(${a}px)`}}setTimeout(()=>{this.disabled=!1},300)});
//# sourceMappingURL=index.js.map
