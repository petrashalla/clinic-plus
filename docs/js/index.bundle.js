!function(){const e=document.querySelector(".menu__btn"),t=document.querySelector(".menu__list");e.addEventListener("click",(()=>{t.classList.toggle("menu__list--active"),document.body.classList.toggle("no-scroll")})),e.addEventListener("click",(()=>{e.classList.toggle("open")}));const s=document.querySelectorAll(".menu__list-item");function c(e){if(e.stopPropagation(),this.classList.contains("active"))this.classList.remove("active");else if(this.parentElement.parentElement.classList.contains("active"))this.classList.add("active");else{for(i=0;i<s.length;i++)s[i].classList.remove("active");this.classList.add("active")}}for(i=0;i<s.length;i++)s[i].addEventListener("click",c);document.querySelectorAll(".btn-open-popup").forEach((e=>{e.addEventListener("click",(()=>{document.getElementById("popupOverlay").classList.toggle("show")}))}))}();