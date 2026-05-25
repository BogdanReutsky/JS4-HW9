document.querySelector(".data");let e=document.querySelector(".name"),t=document.querySelector(".surname"),a=document.querySelector(".tel"),l=document.querySelector(".email"),s=document.querySelector(".btn"),c=document.querySelector(".list"),u=JSON.parse(localStorage.getItem("data"))||[];function n(){c.innerHTML=u.map((e,t)=>`
<li class="item" data-index="${t}">
    <h2 class="title">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}</h2>
    <p class="desc">Name: ${e.name}</p>
    <p class="desc">Surname: ${e.surname}</p>
    <p class="desc">Tel: ${e.tel}</p>
    <p class="desc">Email: ${e.email}</p>
    <button class="delete">DELETE</button>
</li>
`).join("")}s.addEventListener("click",()=>{let s={name:e.value,surname:t.value,tel:a.value,email:l.value};u.push(s),localStorage.setItem("data",JSON.stringify(u)),n()}),c.addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.closest("li").dataset.index;u.splice(t,1),localStorage.setItem("data",JSON.stringify(u)),n()}}),n();
//# sourceMappingURL=JS4-HW9.6871aa93.js.map
