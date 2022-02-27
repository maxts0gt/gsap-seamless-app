const slides = document.querySelectorAll('section div.slides')

slides.forEach((slide) => {
  const images = slide.querySelectorAll('img')

  let current = 0
  let z = 1000000

  images.forEach((image) => {
    z = z - 1
    image.style.zIndex = z
  })

  slide.addEventListener('click', function (e) {
    z++
    images[current].style.zIndex = z
    current++
    current = current % images.length
    console.log(e)
  })
})
