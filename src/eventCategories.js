import { continents } from './data/photos.js'


const container = document.querySelector('.container')
const padre = document.querySelector('.galeria')
const x = document.querySelector('.bottom')

container.addEventListener('click', e => {
const photos = document.querySelector('.red')
padre.classList.add('galeria--active')
photos.innerHTML = ''
document.body.style.overflow = 'hidden'
e.preventDefault()
const target = e.target.dataset.category
console.log(continents[target])
continents[target].forEach((continent) => {
photos.innerHTML += `<img class="red__img" src=${continent.image_path}>`
})
 })

x.addEventListener('click', e => {
padre.classList.remove('galeria--active')
document.body.style.overflow = 'auto'
})
