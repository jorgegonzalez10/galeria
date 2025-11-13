import { continents } from './data/photos.js'


const container = document.querySelector('.container')
const padre = document.querySelector('.galeria')
const x = document.querySelector('.bottom')
const imagen = document.querySelector('.purpura__img')
const titulo = document.querySelector('.hijo__titulo h1')


container.addEventListener('click', e => {
  e.preventDefault();
  const photos = document.querySelector('.red');
  padre.classList.add('galeria--active');
  photos.innerHTML = '';
  document.body.style.overflow = 'hidden';
  const target = e.target.dataset.category;

  continents[target].forEach((continent) => {
    titulo.innerHTML = `${target.toUpperCase()}`;
    imagen.src = `/src/assets/${target}/1.jpg`;
    photos.innerHTML += `<img class="red__img" src=${continent.image_path}>`;
    const img = photos.querySelector('.red__img');
      if (continent.image_path === `./src/assets/${target}/1.jpg`){
      img.classList.add('img--one')
      };
  });
})


x.addEventListener('click', e => {
  e.preventDefault();
  padre.classList.remove('galeria--active');
  document.body.style.overflow = 'auto';
})
