import { continents } from './data/photos.js'
import { categories } from './data/categories.js'

const container = document.querySelector('.card')
const photos = document.getElementById('.red')


container.addEventListener('click', e => {

  e.preventDefault()
  if (e.target.dataset.category === 'america'){
    e.target.closest('.card').insertAdjacentHTML('afterend', `<div class="red" >
        <img class="red__img" src=${continents['america'][0].image_path}>
        <img class="red__img" src=${continents['america'][1].image_path}>
        <img class="red__img" src=${continents['america'][2].image_path}>
        <img class="red__img" src=${continents['america'][3].image_path}>
        <img class="red__img" src=${continents['america'][4].image_path}>
        <img class="red__img" src=${continents['america'][5].image_path}>
        <img class="red__img" src=${continents['america'][6].image_path}>
        <img class="red__img" src=${continents['america'][7].image_path}>
        <img class="red__img" src=${continents['america'][8].image_path}>
        <img class="red__img" src=${continents['america'][9].image_path}>
      </div>`);
  } else if(e.target.dataset.category === 'africa'){
    e.preventDefault()
    console.log(e)
      e.target.closest('.card').insertAdjacentHTML('afterend', `<div class="red" >
        <img class="red__img" src=${continents['africa'][0].image_path}>
        <img class="red__img" src=${continents['africa'][1].image_path}>
        <img class="red__img" src=${continents['africa'][2].image_path}>
        <img class="red__img" src=${continents['africa'][3].image_path}>
        <img class="red__img" src=${continents['africa'][4].image_path}>
        <img class="red__img" src=${continents['africa'][5].image_path}>
        <img class="red__img" src=${continents['africa'][6].image_path}>
        <img class="red__img" src=${continents['africa'][7].image_path}>
        <img class="red__img" src=${continents['africa'][8].image_path}>
        <img class="red__img" src=${continents['africa'][9].image_path}>
      </div>`)
  }
  console.log(e)
})
