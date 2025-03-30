(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const q=document.querySelectorAll("[data-menuButton]");q.forEach(a=>a.addEventListener("click",_));function _(){const a=document.querySelector(".hero .container"),s=document.querySelector("#dark-window"),e=document.querySelector("#pageheader");document.querySelector("#mobile-menu").classList.toggle("open-menu"),s.classList.toggle("dark-window"),e.classList.toggle("padding-for-tablet-menu"),B([a,...q])}function B(a){a.forEach(s=>s.classList.toggle("visually-hidden"))}const A=document.querySelectorAll("[data-modal-window]");A.forEach(a=>a.addEventListener("click",N));function N(){document.querySelector("#backdrop").classList.toggle("is-open")}const k=document.querySelector("#upcoming-button-right"),w=document.querySelector("#upcoming-button-left");k.addEventListener("click",X);w.addEventListener("click",C);const E=document.querySelector("#upcoming-tours-list"),x=innerWidth<768?326:374;let p=0;function X(){p+=x,E.style.transform=`translate(-${p}px)`,w.disabled=!1,(innerWidth>=768||p===652)&&(this.disabled=!0)}function C(){p-=x,E.style.transform=`translate(-${p}px)`,k.disabled=!1,p===0&&(this.disabled=!0)}const $=[768,1440,1920];$.forEach(a=>{const s=window.matchMedia(`(max-width: ${a-1}px)`),e=window.matchMedia(`(min-width: ${a}px)`);s.addEventListener("change",b),e.addEventListener("change",b)});function b(a){a.matches&&location.reload()}document.addEventListener("DOMContentLoaded",W);function W(){document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item").forEach((s,e)=>{let d=0,t=0;s.addEventListener("touchstart",o=>{d=o.touches[0].clientX}),s.addEventListener("touchend",o=>{t=o.changedTouches[0].clientX;const c=t-d;(c<-50||c>50)&&T.call(s,e,c)})})}function T(a,s){const e="selected-card-modal-days",d="right-position",t="left-position";this.nextElementSibling&&s<-50?(v(this,e,t),v(this.nextElementSibling,d,e),S(this,a+1)):this.previousElementSibling&&s>50&&(v(this,e,d),v(this.previousElementSibling,t,e),S(this,a))}function v(a,s,e){a.classList.remove(s),a.classList.add(e)}function S(a,s){a.closest(".upcoming-modal").querySelectorAll(".upcoming-modal-list-item-listbtn-item")[s].classList.toggle("selected-card-days")}const h=document.querySelectorAll("#upcoming-modal-hoverla .swap-btn");h.forEach(a=>{a.addEventListener("click",H)});function H(a){const s=document.querySelectorAll("#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-hoverla"),d=document.querySelector("#second-hoverla"),t=document.querySelector("#third-hoverla");switch(a.currentTarget){case h[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position");break;case h[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","left-position"),d.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position");break;case h[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item"),s=document.querySelector("#first-bukovel"),e=document.querySelector("#second-bukovel"),d=document.querySelector("#third-bukovel"),t=document.querySelector("#fourd-bukovel");a.forEach(o=>{let c=0;o.addEventListener("touchstart",i=>{c=i.touches[0].clientX}),o.addEventListener("touchend",i=>{const y=i.changedTouches[0].clientX-c,m=document.querySelector("#upcoming-modal-bukovel .selected-card-modal-days"),L=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item");Math.abs(y)>50&&(y>0?m==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position"),L[1].classList.remove("selected-card-days")):m==d?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position"),L[2].classList.remove("selected-card-days")):m==t&&(d.classList.remove("left-position"),d.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),L[3].classList.remove("selected-card-days")):m==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days"),L[1].classList.add("selected-card-days")):m==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days"),L[2].classList.add("selected-card-days")):m==d&&(d.classList.remove("selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),L[3].classList.add("selected-card-days")))})})});const f=document.querySelectorAll("#upcoming-modal-bukovel .swap-btn");f.forEach(a=>{a.addEventListener("click",M)});function M(a){const s=document.querySelectorAll("#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-bukovel"),d=document.querySelector("#second-bukovel"),t=document.querySelector("#third-bukovel"),o=document.querySelector("#fourd-bukovel");switch(a.target){case f[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),o.classList.remove("selected-card-modal-days","left-position"),o.classList.add("right-position");break;case f[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","left-position"),d.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position");break;case f[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position");break;case f[3]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days");break}}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item"),s=document.querySelector("#first-carpathians"),e=document.querySelector("#second-carpathians"),d=document.querySelector("#third-carpathians"),t=document.querySelector("#fourd-carpathians"),o=document.querySelector("#fived-carpathians"),c=document.querySelector("#sixed-carpathians"),i=document.querySelector("#sevened-carpathians");a.forEach(l=>{let y=0;l.addEventListener("touchstart",m=>{y=m.touches[0].clientX}),l.addEventListener("touchend",m=>{const g=m.changedTouches[0].clientX-y,r=document.querySelector("#upcoming-modal-carpathians .selected-card-modal-days"),n=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item");Math.abs(g)>50&&(g>0?r==e?(s.classList.remove("left-position"),s.classList.add("selected-card-modal-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("right-position"),n[1].classList.remove("selected-card-days")):r==d?(e.classList.remove("left-position"),e.classList.add("selected-card-modal-days"),d.classList.remove("selected-card-modal-days"),d.classList.add("right-position"),n[2].classList.remove("selected-card-days")):r==t?(d.classList.remove("left-position"),d.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days"),t.classList.add("right-position"),n[3].classList.remove("selected-card-days")):r==o?(t.classList.remove("left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days"),o.classList.add("right-position"),n[4].classList.remove("selected-card-days")):r==c?(o.classList.remove("left-position"),o.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days"),c.classList.add("right-position"),n[5].classList.remove("selected-card-days")):r==i&&(c.classList.remove("left-position"),c.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days"),i.classList.add("right-position"),n[6].classList.remove("selected-card-days")):r==s?(s.classList.remove("selected-card-modal-days"),s.classList.add("left-position"),e.classList.remove("right-position"),e.classList.add("selected-card-modal-days"),n[1].classList.add("selected-card-days")):r==e?(e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position"),d.classList.add("selected-card-modal-days"),n[2].classList.add("selected-card-days")):r==d?(d.classList.remove("selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position"),t.classList.add("selected-card-modal-days"),n[3].classList.add("selected-card-days")):r==t?(t.classList.remove("selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position"),o.classList.add("selected-card-modal-days"),n[4].classList.add("selected-card-days")):r==o?(o.classList.remove("selected-card-modal-days"),o.classList.add("left-position"),c.classList.remove("right-position"),c.classList.add("selected-card-modal-days"),n[5].classList.add("selected-card-days")):r==c&&(c.classList.remove("selected-card-modal-days"),c.classList.add("left-position"),i.classList.remove("right-position"),i.classList.add("selected-card-modal-days"),n[6].classList.add("selected-card-days")))})})});const u=document.querySelectorAll("#upcoming-modal-carpathians .swap-btn");u.forEach(a=>{a.addEventListener("click",D)});function D(a){const s=document.querySelectorAll("#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item"),e=document.querySelector("#first-carpathians"),d=document.querySelector("#second-carpathians"),t=document.querySelector("#third-carpathians"),o=document.querySelector("#fourd-carpathians"),c=document.querySelector("#fived-carpathians"),i=document.querySelector("#sixed-carpathians"),l=document.querySelector("#sevened-carpathians");switch(a.target){case u[0]:s[1].classList.remove("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.add("selected-card-modal-days"),e.classList.remove("left-position"),d.classList.remove("selected-card-modal-days","left-position"),d.classList.add("right-position"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),o.classList.remove("selected-card-modal-days","left-position"),o.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[1]:s[1].classList.add("selected-card-days"),s[2].classList.remove("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.add("left-position"),e.classList.remove("selected-card-modal-days"),d.classList.remove("right-position","left-position"),d.classList.add("selected-card-modal-days"),t.classList.remove("selected-card-modal-days","left-position"),t.classList.add("right-position"),o.classList.remove("selected-card-modal-days","left-position"),o.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[2]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.remove("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","left-position"),t.classList.add("selected-card-modal-days"),o.classList.remove("selected-card-modal-days","left-position"),o.classList.add("right-position"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[3]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.remove("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position","left-position"),o.classList.add("selected-card-modal-days"),c.classList.remove("selected-card-modal-days","left-position"),c.classList.add("right-position"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[4]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.remove("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position","selected-card-modal-days"),o.classList.add("left-position"),c.classList.remove("right-position","left-position"),c.classList.add("selected-card-modal-days"),i.classList.remove("selected-card-modal-days","left-position"),i.classList.add("right-position"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[5]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.add("selected-card-days"),s[6].classList.remove("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position","selected-card-modal-days"),o.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),i.classList.remove("right-position","left-position"),i.classList.add("selected-card-modal-days"),l.classList.remove("selected-card-modal-days"),l.classList.add("right-position");break;case u[6]:s[1].classList.add("selected-card-days"),s[2].classList.add("selected-card-days"),s[3].classList.add("selected-card-days"),s[4].classList.add("selected-card-days"),s[5].classList.add("selected-card-days"),s[6].classList.add("selected-card-days"),e.classList.remove("selected-card-modal-days"),e.classList.add("left-position"),d.classList.remove("right-position","selected-card-modal-days"),d.classList.add("left-position"),t.classList.remove("right-position","selected-card-modal-days"),t.classList.add("left-position"),o.classList.remove("right-position","selected-card-modal-days"),o.classList.add("left-position"),c.classList.remove("selected-card-modal-days","right-position"),c.classList.add("left-position"),i.classList.remove("right-position","selected-card-modal-days"),i.classList.add("left-position"),l.classList.remove("right-position"),l.classList.add("selected-card-modal-days");break}}document.querySelector("#book-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.add("is-open")});document.querySelector("#book-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.add("is-open")});document.querySelector("#book-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.add("is-open")});document.querySelector("#upcoming-modal-closebtn-hoverla").addEventListener("click",function(){document.querySelector("#upcoming-modal-hoverla").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-bukovel").addEventListener("click",function(){document.querySelector("#upcoming-modal-bukovel").classList.remove("is-open")});document.querySelector("#upcoming-modal-closebtn-carpathians").addEventListener("click",function(){document.querySelector("#upcoming-modal-carpathians").classList.remove("is-open")});document.querySelectorAll(".upcoming-modal-bookbtn").forEach(a=>{a.addEventListener("click",function(){document.querySelector("#backdrop").classList.add("is-open")})});document.querySelectorAll(".reviews-card-review-button").forEach(a=>{a.addEventListener("click",function(){if(window.innerWidth>=1440)document.querySelectorAll(".reviews-inner").forEach(e=>{e.classList.toggle("reviews-go-to-back")});else{let s;this.classList.contains("to-front")?s=this.parentElement.parentElement:s=this.parentElement.parentElement.parentElement,s.classList.toggle("reviews-go-to-back")}})});document.querySelector("#galery-button-right").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=-300,t=document.querySelector("#galery-right-button-scroll"),o=document.querySelector("#galery-left-button-scroll");if(e==="none")a.style.transform="translate(-285px)",o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic");else{const c=e.match(/matrix\((.+)\)/)[1].split(", "),i=Number(c[4])+d;Number(c[4])>=-1785&&(a.style.transform=`translate(${i}px)`,Number(c[4])===-1785&&t.classList.add("upcoming-list-item-button-pic-disabled"))}}else if(window.innerWidth>=1440){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=-1190,t=document.querySelector("#galery-right-button-scroll"),o=document.querySelector("#galery-left-button-scroll");if(e==="none")a.style.transform="translate(-1190px)",o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic");else{const c=e.split(", ")[4],i=Number(c)+d;i>=-3570&&(a.style.transform=`translate(${i}px)`,i===-3570&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}else if(window.innerWidth>=768){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=-748,t=document.querySelector("#galery-right-button-scroll"),o=document.querySelector("#galery-left-button-scroll");if(e==="none")a.style.transform="translate(-748px)",o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic");else{const c=e.split(", ")[4],i=Number(c)+d;i>=-2244&&(a.style.transform=`translate(${i}px)`,i===-2244&&(t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")))}}setTimeout(()=>{this.disabled=!1},300)});document.querySelector("#galery-button-left").addEventListener("click",function(){if(window.innerWidth<768){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=300,t=document.querySelector("#galery-left-button-scroll"),o=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=e.match(/matrix\((.+)\)/)[1].split(", "),i=Number(c[4])+d;Number(c[4])===-285?(a.style.transform="none",t.classList.add("upcoming-list-item-button-pic-disabled")):Number(c[4])===-2085?(o.classList.remove("upcoming-list-item-button-pic-disabled"),a.style.transform=`translate(${i}px)`):a.style.transform=`translate(${i}px)`}}else if(window.innerWidth>=1440){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=1190,t=document.querySelector("#galery-left-button-scroll"),o=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=Number(e.split(", ")[4]),i=c+d;c===-1190?(a.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-3570?(o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic"),a.style.transform=`translate(${i}px)`):a.style.transform=`translate(${i}px)`}}else if(window.innerWidth>=768){this.disabled=!0;const a=document.querySelector(".galery-list"),e=window.getComputedStyle(a).transform,d=748,t=document.querySelector("#galery-left-button-scroll"),o=document.querySelector("#galery-right-button-scroll");if(e!=="none"){const c=Number(e.split(", ")[4]),i=c+d;c===-748?(a.style.transform="none",t.classList.remove("upcoming-list-item-button-pic"),t.classList.add("upcoming-list-item-button-pic-disabled")):c===-2244?(o.classList.remove("upcoming-list-item-button-pic-disabled"),o.classList.add("upcoming-list-item-button-pic"),a.style.transform=`translate(${i}px)`):a.style.transform=`translate(${i}px)`}}setTimeout(()=>{this.disabled=!1},300)});const O=document.querySelector(".galery-list");O.addEventListener("click",I);function I(a){if(window.innerWidth>=1440&&a.target.nodeName=="IMG"){const s=a.target.src.split("-")[1].split(".")[0];basicLightbox.create(`<img
							src="./gallery-modal-${s}.jpg"
							srcset="./gallery-modal-${s}@2x.jpg 2x"
							alt="Nature in the Ukrainian mountains"
						/>`).show()}}
//# sourceMappingURL=index.js.map
