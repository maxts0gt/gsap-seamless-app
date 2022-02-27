const slides = document.querySelectorAll('section div.slides')

slides.forEach((slide) => {
  const images = slide.querySelectorAll('img')

  let current = 0
  let z = 1000000

  images.forEach((image) => {
    z = z - 1
    image.style.zIndex = z
  })

  const timeline = gsap.timeline()

  timeline
    .set(images, {
      x: () => {
        return 500 * Math.random() - 250
      },
      y: '500%',
      rotation: () => {
        return 90 * Math.random() - 45
      }
    })
    .to(images, { x: 0, y: 0, stagger: -0.25 })
    .to(images, {
      rotation: () => {
        return 16 * Math.random() - 8
      }
    })

  slide.addEventListener('click', function (e) {
    z++
    images[current].style.zIndex = z
    current++
    current = current % images.length
    console.log(e)
  })
})
