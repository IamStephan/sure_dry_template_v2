!function(){const e=document.querySelector("#menu-button"),s=document.querySelector(".level-1.small"),t=s.querySelectorAll(".with-children");e.addEventListener("click",(()=>{s.classList.contains("show")&&(s.classList.remove("nest"),t.forEach((e=>{e.querySelector(".level-2").classList.remove("show")}))),s.classList.toggle("show")})),t.forEach((e=>{const l=e.querySelector(".dropdown"),c=e.querySelector(".level-2");l.addEventListener("click",(function(){t.forEach((e=>{e.querySelector(".level-2").classList.remove("show")})),s.classList.add("nest"),c.classList.add("show")})),c.querySelector(".return-level-1").addEventListener("click",(function(){s.classList.remove("nest")}))}))}();
//# sourceMappingURL=index.e0d0ddd7.js.map