const container = document.querySelector('.container')


container.addEventListener('click', e => {
  console.log(e.target.dataset.category)
}
)
