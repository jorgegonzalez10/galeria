import { continents } from './data/photos.js'
import { categories } from './data/categories.js'

const container = document.querySelector(".container")

function cards(){
  categories.forEach(card => {
    const html = document.createElement('a')
    html.classList.add('card')
    html.href = "#"
    html.innerHTML = `
      <img data-category="${card.id}" src="${card.image_path}" class="card__img">
      <h2 class="card__continente" >${card.name}</h2>
      <h4 class="card__photo-quantity">${card.quantity_photo}</h4>`

    container.appendChild(html)
  });
}

cards()
