import { continents } from './photos.js'
const container = document.querySelector(".container")

const categories =[{
  id: "america",
  name:"America",
  image_path:"./src/assets/america.jpg",
  quantity_photo: continents.america.length
},
{
  id: "europa",
  name:"Europa",
  image_path:"./src/assets/europa.jpg",
  quantity_photo: continents.europa.length
},
{
  id: "africa",
  name:"Africa",
  image_path:"./src/assets/africa.jpg",
  quantity_photo: continents.africa.length
},
{
  id: "asia",
  name:"Asia",
  image_path:"./src/assets/asia.jpg",
  quantity_photo: continents.asia.length
},
{
  id: "antartida",
  name:"Antartida",
  image_path:"./src/assets/antartida.jpg",
  quantity_photo: continents.antartida.length
},
{
  id: "oceania",
  name:"Oceania",
  image_path:"./src/assets/oceania.jpg",
  quantity_photo: continents.oceania.length
}]


function cards(){
  categories.forEach(card => {
    const html = document.createElement('div')
    html.innerHTML = `<a href="#" class="card" >
      <img src="${card.image_path}" class="card__img">
      <h2 class="card__continente" >${card.name}</h2>
      <h4 class="card__photo-quantity">${card.quantity_photo}</h4>
    </a>`
    container.appendChild(html)
  });
}

cards()
