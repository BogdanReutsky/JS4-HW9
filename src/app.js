const dataEl = document.querySelector(".data")
const nameEl = document.querySelector(".name")
const surnameEl = document.querySelector(".surname")
const telEl = document.querySelector(".tel")
const emailEl = document.querySelector(".email")
const buttonEl = document.querySelector(".btn")
const listEl = document.querySelector(".list")

let data = JSON.parse(localStorage.getItem("data")) || []



function dataSave(){
listEl.innerHTML = data.map((item,index)=>{
    return  `
<li class="item" data-index="${index}">
    <h2 class="title">Контакт</h2>
    <p class="desc">Name: ${item.name}</p>
    <p class="desc">Surname: ${item.surname}</p>
    <p class="desc">Tel: ${item.tel}</p>
    <p class="desc">Email: ${item.email}</p>
    <button class="delete">DELETE</button>
</li>
`
}).join("")
}


buttonEl.addEventListener("click",()=>{
    
    const userData = {
        name: nameEl.value,
        surname: surnameEl.value,
        tel: telEl.value,
        email: emailEl.value
    }
    data.push(userData)

    localStorage.setItem("data", JSON.stringify(data))

    dataSave()
})

listEl.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("delete")) {
        const item = evt.target.closest("li")
        const idx = item.dataset.index

        data.splice(idx, 1)
        
        localStorage.setItem("data", JSON.stringify(data))

        dataSave()
    }
})

dataSave()



