(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=e(t);fetch(t.href,c)}})();document.querySelector("#button-menu").addEventListener("click",function(){const d=document.querySelector("#mobile-menu"),s=document.querySelector("#button-menu"),e=document.querySelector("#pageheader-title"),o=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),c=document.querySelector("#mobile-menu-close");d.classList.add("open-menu"),s.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),e.classList.add("visually-hidden"),o.classList.add("visually-hidden"),t.classList.add("visually-hidden")});document.querySelector("#mobile-menu-close").addEventListener("click",function(){const d=document.querySelector("#mobile-menu"),s=document.querySelector("#button-menu"),e=document.querySelector("#pageheader-title"),o=document.querySelector("#pageheader-text"),t=document.querySelector("#pageheader-book"),c=document.querySelector("#mobile-menu-close");d.classList.remove("open-menu"),c.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),o.classList.remove("visually-hidden"),t.classList.remove("visually-hidden")});document.querySelector("#modal-close").addEventListener("click",function(){document.querySelector("#backdrop").classList.remove("is-open")});document.querySelector("#pageheader-book").addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")});document.querySelector("#upcoming-button-right").addEventListener("click",function(){const d=document.querySelector("#first-card"),s=document.querySelector("#second-card"),e=document.querySelector("#third-card"),o=document.querySelector(".selected-card"),t=document.querySelector("#right-button-scroll"),c=document.querySelector("#left-button-scroll");d==o?(d.classList.remove("selected-card"),d.classList.add("left-position"),s.classList.remove("right-position"),s.classList.add("selected-card"),c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic")):s==o&&(s.classList.remove("selected-card"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card"),t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled"))});document.querySelector("#upcoming-button-left").addEventListener("click",function(){const d=document.querySelector("#first-card"),s=document.querySelector("#second-card"),e=document.querySelector("#third-card"),o=document.querySelector(".selected-card"),t=document.querySelector("#right-button-scroll"),c=document.querySelector("#left-button-scroll");s==o?(d.classList.remove("left-position"),d.classList.add("selected-card"),s.classList.remove("selected-card"),s.classList.add("right-position"),c.classList.remove("upcoming-list-item-button-pic"),c.classList.add("upcoming-list-item-button-pic-disabled")):e==o&&(s.classList.remove("left-position"),s.classList.add("selected-card"),e.classList.remove("selected-card"),e.classList.add("right-position"),t.classList.remove("upcoming-list-item-button-pic-disabled"),t.classList.add("upcoming-list-item-button-pic"))});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item"),s=document.querySelector("#first-hoverla"),e=document.querySelector("#second-hoverla"),o=document.querySelector("#third-hoverla");d.forEach(t=>{let c=0;t.addEventListener("touchstart",l=>{c=l.touches[0].clientX}),t.addEventListener("touchend",l=>{const m=l.changedTouches[0].clientX-c,r=document.querySelector("#upcoming-modal-hoverla .selected-card-modal-days");Math.abs(m)>50&&(m>0?r==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):r==o&&(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):r==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):r==e&&(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),s=document.querySelector("#first-bukovel"),e=document.querySelector("#second-bukovel"),o=document.querySelector("#third-bukovel"),t=document.querySelector("#fourd-bukovel");d.forEach(c=>{let l=0;c.addEventListener("touchstart",a=>{l=a.touches[0].clientX}),c.addEventListener("touchend",a=>{const r=a.changedTouches[0].clientX-l,n=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days");Math.abs(r)>50&&(r>0?(console.log("1"),n==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):n==o?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):n==t&&(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"))):n==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):n==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")):n==o&&(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")))})})});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),s=document.querySelector("#first-carpathians"),e=document.querySelector("#second-carpathians"),o=document.querySelector("#third-carpathians"),t=document.querySelector("#fourd-carpathians"),c=document.querySelector("#fived-carpathians"),l=document.querySelector("#sixed-carpathians"),a=document.querySelector("#sevened-carpathians");d.forEach(m=>{let r=0;m.addEventListener("touchstart",n=>{r=n.touches[0].clientX}),m.addEventListener("touchend",n=>{const u=n.changedTouches[0].clientX-r,i=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days");Math.abs(u)>50&&(u>0?i==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position")):i==o?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position")):i==t?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position")):i==c?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days"),c.classList.add("right-position")):i==l?(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position")):i==a&&(l.classList.remove("left-position"),l.classList.add("selected-card-modal-days"),a.classList.remove("selected-card-modal-days"),a.classList.add("right-position")):i==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days")):i==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days")):i==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days")):i==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),c.classList.remove("right-position"),c.classList.add("selected-card-modal-days")):i==c?(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days")):i==l&&(l.classList.remove("selected-card-modal-days"),l.classList.add("left-position"),a.classList.remove("right-position"),a.classList.add("selected-card-modal-days")))})})});document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(d=>{d.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(d=>{d.addEventListener("click",function(){let s;this.classList.contains("to-front")?s=this.parentElement.parentElement:s=this.parentElement.parentElement.parentElement,s.classList.toggle("reviews-go-to-back")})});document.querySelector("#galery-button-right").addEventListener("click",function(){this.disabled=!0;const d=document.querySelector(".galery-list"),e=window.getComputedStyle(d).transform,o=-300,t=document.querySelector("#galery-right-button-scroll"),c=document.querySelector("#galery-left-button-scroll");if(e==="none")d.style.transform="translate(-285px)",c.classList.remove("upcoming-list-item-button-pic-disabled"),c.classList.add("upcoming-list-item-button-pic");else{const l=e.match(/matrix\((.+)\)/)[1].split(", "),a=Number(l[4])+o;Number(l[4])>=-1785&&(d.style.transform=`translate(${a}px)`,Number(l[4])===-1785&&t.classList.add("upcoming-list-item-button-pic-disabled"))}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){this.disabled=!0;const d=document.querySelector(".galery-list"),e=window.getComputedStyle(d).transform,o=300,t=document.querySelector("#galery-left-button-scroll"),c=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const l=e.match(/matrix\((.+)\)/)[1].split(", "),a=Number(l[4])+o;Number(l[4])===-285?(d.style.transform="none",t.classList.add("upcoming-list-item-button-pic-disabled")):Number(l[4])===-2085?(c.classList.remove("upcoming-list-item-button-pic-disabled"),d.style.transform=`translate(${a}px)`):d.style.transform=`translate(${a}px)`}setTimeout(()=>{this.disabled=!1},300)});
//# sourceMappingURL=index.js.map
