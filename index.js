(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=t(e);fetch(e.href,c)}})();document.querySelector("#button-menu").addEventListener("click",function(){const s=document.querySelector("#mobile-menu"),l=document.querySelector("#button-menu"),t=document.querySelector("#pageheader-title"),o=document.querySelector("#pageheader-text"),e=document.querySelector("#pageheader-book"),c=document.querySelector("#mobile-menu-close"),i=document.querySelector("#dark-window"),n=document.querySelector("#pageheader");s.classList.add("open-menu"),l.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),o.classList.add("visually-hidden"),e.classList.add("visually-hidden"),i.classList.toggle("dark-window"),n.classList.toggle("padding-for-tablet-menu")});document.querySelector("#mobile-menu-close").addEventListener("click",function(){const s=document.querySelector("#mobile-menu"),l=document.querySelector("#button-menu"),t=document.querySelector("#pageheader-title"),o=document.querySelector("#pageheader-text"),e=document.querySelector("#pageheader-book"),c=document.querySelector("#mobile-menu-close"),i=document.querySelector("#dark-window"),n=document.querySelector("#pageheader");s.classList.remove("open-menu"),c.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),o.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),i.classList.toggle("dark-window"),n.classList.toggle("padding-for-tablet-menu")});document.querySelector("#pageheader-book").addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")});document.querySelector("#modal-close").addEventListener("click",function(){document.querySelector("#backdrop").classList.remove("is-open")});document.querySelector("#upcoming-button-right").addEventListener("click",function(){if(window.innerWidth<768){const s=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(s).transform,o=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t==="none"?(s.style.transform="translate(-326px)",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic")):Number(t.split(",")[4])===-326&&(s.style.transform="translate(-652px)",o.classList.remove("upcoming-list-item-button-pic"),o.classList.add("upcoming-list-item-button-pic-disabled"))}else if(window.innerWidth>=768){const s=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(s).transform,o=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t==="none"&&(s.style.transform="translate(-374px)",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic"),o.classList.remove("upcoming-list-item-button-pic"),o.classList.add("upcoming-list-item-button-pic-disabled"))}});document.querySelector("#upcoming-button-left").addEventListener("click",function(){if(window.innerWidth<768){const s=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(s).transform,o=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t!=="none"&&(Number(t.split(",")[4])===-652?(s.style.transform="translate(-326px)",o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic")):(s.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")))}else if(window.innerWidth>=768){const s=document.querySelector("#upcoming-tours-list"),t=window.getComputedStyle(s).transform,o=document.querySelector("#right-button-scroll"),e=document.querySelector("#left-button-scroll");t!=="none"&&(s.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled"),o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic"))}});const p=window.matchMedia("(max-width: 767px)");p.addEventListener("change",y);function y(){const s=document.querySelector("#upcoming-tours-list"),l=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");s.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"),l.classList.remove("upcoming-list-item-button-pic-disabled"),l.classList.add("upcoming-list-item-button-pic");const o=document.querySelector(".galery-list"),e=document.querySelector("#galery-right-button-scroll"),c=document.querySelector("#galery-left-button-scroll");o.style.transform="none",e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic"),c.classList.remove("upcoming-list-item-button-pic"),c.classList.add("upcoming-list-item-button-pic-disabled")}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),l=document.querySelector("#first-hoverla"),t=document.querySelector("#second-hoverla"),o=document.querySelector("#third-hoverla");s.forEach(e=>{let c=0;e.addEventListener("touchstart",i=>{c=i.touches[0].clientX}),e.addEventListener("touchend",i=>{const u=i.changedTouches[0].clientX-c,d=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days");Math.abs(u)>50&&(u>0?d==t?(l.classList.remove("left-position"),l.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):d==o&&(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):d==l?(l.classList.remove("selected-card-modal-days"),l.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):d==t&&(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),l=document.querySelector("#first-bukovel"),t=document.querySelector("#second-bukovel"),o=document.querySelector("#third-bukovel"),e=document.querySelector("#fourd-bukovel");s.forEach(c=>{let i=0;c.addEventListener("touchstart",n=>{i=n.touches[0].clientX}),c.addEventListener("touchend",n=>{const d=n.changedTouches[0].clientX-i,r=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days");Math.abs(d)>50&&(d>0?r==t?(l.classList.remove("left-position"),l.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):r==o?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):r==e&&(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):r==l?(l.classList.remove("selected-card-modal-days"),l.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):r==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")):r==o&&(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),l=document.querySelector("#first-carpathians"),t=document.querySelector("#second-carpathians"),o=document.querySelector("#third-carpathians"),e=document.querySelector("#fourd-carpathians"),c=document.querySelector("#fived-carpathians"),i=document.querySelector("#sixed-carpathians"),n=document.querySelector("#sevened-carpathians");s.forEach(u=>{let d=0;u.addEventListener("touchstart",r=>{d=r.touches[0].clientX}),u.addEventListener("touchend",r=>{const m=r.changedTouches[0].clientX-d,a=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days");Math.abs(m)>50&&(m>0?a==t?(l.classList.remove("left-position"),l.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):a==o?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):a==e?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):a==c?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days"),c.classList.add("right-position")):a==i?(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position")):a==n&&(i.classList.remove("left-position"),i.classList.add("selected-card-modal-days"),n.classList.remove("selected-card-modal-days"),n.classList.add("right-position")):a==l?(l.classList.remove("selected-card-modal-days"),l.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):a==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")):a==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):a==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),c.classList.remove("right-position"),c.classList.add("selected-card-modal-days")):a==c?(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days")):a==i&&(i.classList.remove("selected-card-modal-days"),i.classList.add("left-position"),n.classList.remove("right-position"),n.classList.add("selected-card-modal-days")))})})});document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(s=>{s.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(s=>{s.addEventListener("click",function(){let l;this.classList.contains("to-front")?l=this.parentElement.parentElement:l=this.parentElement.parentElement.parentElement,l.classList.toggle("reviews-go-to-back")})});document.querySelector("#galery-button-right").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const s=document.querySelector(".galery-list"),t=window.getComputedStyle(s).transform,o=-300,e=document.querySelector("#galery-right-button-scroll"),c=document.querySelector("#galery-left-button-scroll");if(t==="none")s.style.transform="translate(-285px)",c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic");else{const i=t.match(/matrix\((.+)\)/)[1].split(", "),n=Number(i[4])+o;Number(i[4])>=-1785&&(s.style.transform=`translate(${n}px)`,Number(i[4])===-1785&&e.classList.add("upcoming-list-item-button-pic-disabled"))}}else if(window.innerWidth>=768){this.disabled=!0;const s=document.querySelector(".galery-list"),t=window.getComputedStyle(s).transform,o=-748,e=document.querySelector("#galery-right-button-scroll"),c=document.querySelector("#galery-left-button-scroll");if(t==="none")s.style.transform="translate(-748px)",c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic");else{const i=t.split(", ")[4],n=Number(i)+o;n>=-2244&&(s.style.transform=`translate(${n}px)`,n===-2244&&(e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")))}}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const s=document.querySelector(".galery-list"),t=window.getComputedStyle(s).transform,o=300,e=document.querySelector("#galery-left-button-scroll"),c=document.querySelector("#galery-right-button-scroll");if(t!=="none"){const i=t.match(/matrix\((.+)\)/)[1].split(", "),n=Number(i[4])+o;Number(i[4])===-285?(s.style.transform="none",e.classList.add("upcoming-list-item-button-pic-disabled")):Number(i[4])===-2085?(c.classList.remove("upcoming-list-item-button-pic-disabled"),s.style.transform=`translate(${n}px)`):s.style.transform=`translate(${n}px)`}}else if(window.innerWidth>=768){this.disabled=!0;const s=document.querySelector(".galery-list"),t=window.getComputedStyle(s).transform,o=748,e=document.querySelector("#galery-left-button-scroll"),c=document.querySelector("#galery-right-button-scroll");if(t!=="none"){const i=Number(t.split(", ")[4]),n=i+o;i===-748?(s.style.transform="none",e.classList.remove("upcoming-list-item-button-pic"),e.classList.add("upcoming-list-item-button-pic-disabled")):i===-2244?(c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic"),s.style.transform=`translate(${n}px)`):s.style.transform=`translate(${n}px)`}}setTimeout(()=>{this.disabled=!1},300)});
//# sourceMappingURL=index.js.map
