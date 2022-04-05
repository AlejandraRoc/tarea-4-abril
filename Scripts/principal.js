import {getData} from "./getData.js";
import {showData} from "./showData.js"


let btnMarvel = document.getElementById("btnCategory1")
let btnDC   = document.getElementById("btnCategory2")
let listarCard= document.getElementById("listarCard")

btnMarvel.addEventListener('click', async () => {
  const array = await getData('http://localhost:4080/marvel')
  showData(array, listarCard)
})

btnDC.addEventListener('click', async() => {
  const array = await getData('http://localhost:4080/dc')
  showData(array,listarCard)
})

const getUrl = async(url)=>{
  const  resp = await fetch(url)
  const data = await resp.json(getUrl)
  console.table(data)

  listarCard.innerHTML = ''

  data.forEach(heroe =>{
      const {nombre, imagen, historia}=heroe

      listarCard.innerHTML +=`
      <div class="card" style="width: 18rem;">
      <img src=${imagen} class="card-img-top" alt="...">
      <div class="card-body">
          <h1>${nombre}</h1>
        <p class="card-text">${historia}</p>
      </div>
    </div>
      `



  })


}



