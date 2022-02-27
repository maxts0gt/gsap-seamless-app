const slides = document.querySelector('section div.slides')
const images = slides.querySelectorAll('img')

let current = 0
let z = 0

slides.addEventListener('click', function (e) {
  z++
  images[current].style.zIndex = z
  current++
  current = current % images.length
  console.log(e)
})
