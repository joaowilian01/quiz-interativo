const correctAnswers = ['A', 'A', 'B', 'A', 'B', 'B']

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let score = 0
  let counter = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 16.6
    }
  })

  scrollTo(0, 0)

  result.classList.remove('d-none')

  const timer = setInterval(() => {
    if (counter === Math.ceil(score)) {
      clearInterval(timer)
    }
    result.querySelector('span').textContent = `${counter}%`
    counter++
  }, 10);
})
