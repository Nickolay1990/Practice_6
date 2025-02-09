(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();document.querySelector("#button-menu").addEventListener("click",function(){const c=document.querySelector("#mobile-menu"),o=document.querySelector("#button-menu"),e=document.querySelector("#pageheader-title"),s=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),i=document.querySelector("#mobile-menu-close"),d=document.querySelector("#dark-window"),l=document.querySelector("#pageheader");c.classList.add("open-menu"),o.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),e.classList.add("visually-hidden"),s.classList.add("visually-hidden"),t.classList.add("visually-hidden"),d.classList.toggle("dark-window"),l.classList.toggle("padding-for-tablet-menu")});document.querySelector("#mobile-menu-close").addEventListener("click",function(){const c=document.querySelector("#mobile-menu"),o=document.querySelector("#button-menu"),e=document.querySelector("#pageheader-title"),s=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),i=document.querySelector("#mobile-menu-close"),d=document.querySelector("#dark-window"),l=document.querySelector("#pageheader");c.classList.remove("open-menu"),i.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),d.classList.toggle("dark-window"),l.classList.toggle("padding-for-tablet-menu")});document.querySelector("#modal-close").addEventListener("click",function(){document.querySelector("#backdrop").classList.remove("is-open")});document.querySelector("#pageheader-book").addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")});document.querySelector("#upcoming-button-right").addEventListener("click",function(){if(window.innerWidth<768){const c=document.querySelector("#first-card"),o=document.querySelector("#second-card"),e=document.querySelector("#third-card"),s=document.querySelector(".selected-card"),t=document.querySelector("#right-button-scroll"),i=document.querySelector("#left-button-scroll");c==s?(c.classList.remove("selected-card"),c.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card"),i.classList.remove("upcoming-list-item-button-pic-disabled"),i.classList.add("upcoming-list-item-button-pic")):o==s&&(o.classList.remove("selected-card"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card"),t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"))}else if(window.innerWidth>=768){const c=document.querySelector("#upcoming-tours-list"),e=window.getComputedStyle(c).transform,s=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");e==="none"&&(c.style.transform="translate(-374px)",t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"),s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"))}});document.querySelector("#upcoming-button-left").addEventListener("click",function(){if(window.innerWidth<768){const c=document.querySelector("#first-card"),o=document.querySelector("#second-card"),e=document.querySelector("#third-card"),s=document.querySelector(".selected-card"),t=document.querySelector("#right-button-scroll"),i=document.querySelector("#left-button-scroll");o==s?(c.classList.remove("left-position"),c.classList.add("selected-card"),o.classList.remove("selected-card"),o.classList.add("right-position"),i.classList.remove("upcoming-list-item-button-pic"),i.classList.add("upcoming-list-item-button-pic-disabled")):e==s&&(o.classList.remove("left-position"),o.classList.add("selected-card"),e.classList.remove("selected-card"),e.classList.add("right-position"),t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"))}else{const c=document.querySelector("#upcoming-tours-list"),e=window.getComputedStyle(c).transform,s=document.querySelector("#right-button-scroll"),t=document.querySelector("#left-button-scroll");e!=="none"&&(c.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"),s.classList.remove("upcoming-list-item-button-pic-disabled"),s.classList.add("upcoming-list-item-button-pic"))}});const p=window.matchMedia("(max-width: 767px)");p.addEventListener("change",L);updateLayout(p);function L(c){const o=document.querySelector("#upcoming-tours-list"),e=document.querySelector("#right-button-scroll"),s=document.querySelector("#left-button-scroll"),t=document.querySelector("#first-card"),i=document.querySelector("#second-card"),d=document.querySelector("#third-card");c.matches?(o.style.transform="none",t.classList.remove("right-position","left-position"),t.classList.add("selected-card"),i.classList.remove("selected-card","left-position"),i.classList.add("right-position"),d.classList.remove("selected-card","left-position"),d.classList.add("right-position"),s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"),e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic")):(o.style.transform="none",s.classList.remove("upcoming-list-item-button-pic"),s.classList.add("upcoming-list-item-button-pic-disabled"),e.classList.remove("upcoming-list-item-button-pic-disabled"),e.classList.add("upcoming-list-item-button-pic"))}document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),o=document.querySelector("#first-hoverla"),e=document.querySelector("#second-hoverla"),s=document.querySelector("#third-hoverla");c.forEach(t=>{let i=0;t.addEventListener("touchstart",d=>{i=d.touches[0].clientX}),t.addEventListener("touchend",d=>{const u=d.changedTouches[0].clientX-i,n=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days");Math.abs(u)>50&&(u>0?n==e?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):n==s&&(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position")):n==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):n==e&&(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),o=document.querySelector("#first-bukovel"),e=document.querySelector("#second-bukovel"),s=document.querySelector("#third-bukovel"),t=document.querySelector("#fourd-bukovel");c.forEach(i=>{let d=0;i.addEventListener("touchstart",l=>{d=l.touches[0].clientX}),i.addEventListener("touchend",l=>{const n=l.changedTouches[0].clientX-d,r=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days");Math.abs(n)>50&&(n>0?(console.log("1"),r==e?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):r==s?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position")):r==t&&(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"))):r==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):r==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days")):r==s&&(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),o=document.querySelector("#first-carpathians"),e=document.querySelector("#second-carpathians"),s=document.querySelector("#third-carpathians"),t=document.querySelector("#fourd-carpathians"),i=document.querySelector("#fived-carpathians"),d=document.querySelector("#sixed-carpathians"),l=document.querySelector("#sevened-carpathians");c.forEach(u=>{let n=0;u.addEventListener("touchstart",r=>{n=r.touches[0].clientX}),u.addEventListener("touchend",r=>{const m=r.changedTouches[0].clientX-n,a=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days");Math.abs(m)>50&&(m>0?a==e?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):a==s?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),s.classList.remove("selected-card-modal-days"),s.classList.add("right-position")):a==t?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):a==i?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position")):a==d?(i.classList.remove("left-position"),i.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position")):a==l&&(d.classList.remove("left-position"),d.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position")):a==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):a==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card-modal-days")):a==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):a==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days")):a==i?(i.classList.remove("selected-card-modal-days"),i.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days")):a==d&&(d.classList.remove("selected-card-modal-days"),d.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days")))})})});document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(c=>{c.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(c=>{c.addEventListener("click",function(){let o;this.classList.contains("to-front")?o=this.parentElement.parentElement:o=this.parentElement.parentElement.parentElement,o.classList.toggle("reviews-go-to-back")})});document.querySelector("#galery-button-right").addEventListener("click",function(){this.disabled=!0;const c=document.querySelector(".galery-list"),e=window.getComputedStyle(c).transform,s=-300,t=document.querySelector("#galery-right-button-scroll"),i=document.querySelector("#galery-left-button-scroll");if(e==="none")c.style.transform="translate(-285px)",i.classList.remove("upcoming-list-item-button-pic-disabled"),i.classList.add("upcoming-list-item-button-pic");else{const d=e.match(/matrix\((.+)\)/)[1].split(", "),l=Number(d[4])+s;Number(d[4])>=-1785&&(c.style.transform=`translate(${l}px)`,Number(d[4])===-1785&&t.classList.add("upcoming-list-item-button-pic-disabled"))}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){this.disabled=!0;const c=document.querySelector(".galery-list"),e=window.getComputedStyle(c).transform,s=300,t=document.querySelector("#galery-left-button-scroll"),i=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const d=e.match(/matrix\((.+)\)/)[1].split(", "),l=Number(d[4])+s;Number(d[4])===-285?(c.style.transform="none",t.classList.add("upcoming-list-item-button-pic-disabled")):Number(d[4])===-2085?(i.classList.remove("upcoming-list-item-button-pic-disabled"),c.style.transform=`translate(${l}px)`):c.style.transform=`translate(${l}px)`}setTimeout(()=>{this.disabled=!1},300)});
//# sourceMappingURL=index.js.map
