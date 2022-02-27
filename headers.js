const carousels = document.querySelectorAll('header h2, header h1')
const carouselsOne = document.querySelectorAll('header h1')
const carouselsTwo = document.querySelectorAll('header h2')

const fadeInTimeline = gsap.timeline()

fadeInTimeline
  .set(carousels, { opacity: 0 })
  .to(carousels, { opacity: 1, delay: 1, stagger: 1, duration: 3 })

carouselsOne.forEach((carousel) => {
  const spanTag = carousel.querySelector('span')
  const spanWidth = spanTag.clientWidth

  for (let i = 0; i < 20; i++) {
    carousel.appendChild(spanTag.cloneNode(true))
  }

  const movementTimeline = gsap.timeline({
    repeat: -1
  })

  movementTimeline
    .set(carouselsOne, { x: 0 })
    .to(carouselsOne, { x: spanWidth * -1, duration: 6, ease: 'linear' })
})

carouselsTwo.forEach((carousel) => {
  const spanTag = carousel.querySelector('span')
  const spanWidth = spanTag.clientWidth

  for (let i = 0; i < 20; i++) {
    carousel.appendChild(spanTag.cloneNode(true))
  }

  const movementTimeline = gsap.timeline({
    repeat: -1
  })

  movementTimeline
    .set(carouselsTwo, { x: 0 })
    .to(carouselsTwo, { x: spanWidth * -1, duration: 6, ease: 'linear' })
})
