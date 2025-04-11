import{S as y}from"./assets/vendor-GUfTnQGj.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const t={menuButtons:document.querySelectorAll("[data-menuButton]"),contentHero:document.querySelector(".hero .container"),darkWindow:document.querySelector("#dark-window"),header:document.querySelector("#pageheader"),menu:document.querySelector("#mobile-menu"),modalButtons:document.querySelectorAll("[data-modal-window]"),modal:document.querySelector("#backdrop"),upcomingButtonRight:document.querySelector("#upcoming-button-right"),upcomingButtonLeft:document.querySelector("#upcoming-button-left"),upcomingList:document.querySelector("#upcoming-tours-list"),upcomingModalItems:document.querySelectorAll(".upcoming-modal-list-item"),upcomingNavButtons:document.querySelectorAll(".upcoming-modal-list-item-listbtn-item"),swapCardButtonsList:document.querySelectorAll(".upcoming-modal-list-item-listbtn"),upcomingToggleModalButtons:document.querySelectorAll("[data-toggle-modal]"),reviewsBlock:document.querySelector(".reviews-block"),reviewsCards:document.querySelectorAll(".reviews-inner"),galleryButonRight:document.querySelector("#galery-button-right"),galleryButonLeft:document.querySelector("#galery-button-left"),galleryList:document.querySelector(".galery-list")};t.menuButtons.forEach(e=>e.addEventListener("click",L));function L(){t.menu.classList.toggle("open-menu"),t.darkWindow.classList.toggle("dark-window"),t.header.classList.toggle("padding-for-tablet-menu"),w([t.contentHero,...t.menuButtons])}function w(e){e.forEach(n=>n.classList.toggle("visually-hidden"))}t.modalButtons.forEach(e=>e.addEventListener("click",v));function v(){t.modal.classList.toggle("is-open")}t.upcomingButtonRight.addEventListener("click",b);t.upcomingButtonLeft.addEventListener("click",B);const h=innerWidth<768?326:374;let a=0;function b(){a+=h,t.upcomingList.style.transform=`translate(-${a}px)`,t.upcomingButtonLeft.disabled=!1,(innerWidth>=768||a===652)&&(this.disabled=!0)}function B(){a-=h,t.upcomingList.style.transform=`translate(-${a}px)`,t.upcomingButtonRight.disabled=!1,a===0&&(this.disabled=!0)}const E=[768,1440,1920];E.forEach(e=>{const n=window.matchMedia(`(max-width: ${e-1}px)`),i=window.matchMedia(`(min-width: ${e}px)`);n.addEventListener("change",f),i.addEventListener("change",f)});function f(e){e.matches&&location.reload()}document.addEventListener("DOMContentLoaded",S);const c="selected-card-modal-days",u="right-position",m="left-position";function S(){t.upcomingModalItems.forEach((e,n)=>{let i=0,l=0;e.addEventListener("touchstart",o=>{i=o.touches[0].clientX}),e.addEventListener("touchend",o=>{l=o.changedTouches[0].clientX;const s=l-i;(s<-50||s>50)&&k.call(e,n,s)})})}function k(e,n){this.nextElementSibling&&n<-50?(d(this,c,m),d(this.nextElementSibling,u,c),p(e+1)):this.previousElementSibling&&n>50&&(d(this,c,u),d(this.previousElementSibling,m,c),p(e))}function d(e,n,i){e.classList.remove(n),e.classList.add(i)}function p(e){t.upcomingNavButtons[e].classList.toggle("selected-card-days")}innerWidth>=1440&&t.swapCardButtonsList.forEach(e=>e.addEventListener("click",x));function x(e){if(!e.target.classList.contains("upcoming-modal-list-item-listbtn-item"))return;const n=Array.from(this.children),i=this.closest(".upcoming-modal").querySelectorAll(".upcoming-modal-list-item");A(n,n.indexOf(e.target)),M(i,n.indexOf(e.target))}function A(e,n){e.forEach((i,l)=>{if(l>n){i.classList.remove("selected-card-days");return}i.classList.add("selected-card-days")})}function M(e,n){let i=m;e.forEach((l,o)=>{if(l.classList.remove(c,u,m),o===n){i=u,l.classList.add(c);return}l.classList.add(i)})}t.upcomingToggleModalButtons.forEach(e=>e.addEventListener("click",C));function C(){document.querySelector(`[data-modal="${this.dataset.toggleModal}"]`).classList.toggle("is-open")}t.reviewsBlock.addEventListener("click",H);function H(e){if(!e.target.closest(".reviews-card-review-button"))return;(window.innerWidth>=1440?t.reviewsCards:[e.target.closest(".reviews-inner")]).forEach(i=>i.classList.toggle("reviews-go-to-back"))}t.galleryButonRight.addEventListener("click",W);const q=innerWidth<768?300:innerWidth>=1440?1190:748;let r=0;function W(){r+=q,r===300&&(r-=15),t.galleryList.style.transform=`translate(-${r}px)`,t.galleryButonLeft.disabled=!1,[2085,2244,3570].includes(r)&&(this.disabled=!0)}t.galleryButonLeft.addEventListener("click",O);function O(){[2085,2244,3570].includes(r)&&(t.galleryButonRight.disabled=!1),r=r===285?0:r-q,t.galleryList.style.transform=`translate(-${r}px)`,r||(this.disabled=!0)}new y(".galery-list a",{captionsData:"alt",loop:!1,docClose:!1,htmlClass:"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"});
//# sourceMappingURL=index.js.map
