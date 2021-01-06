const correctAnswers = ['A', 'A', 'B', 'A']

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
      console.log(score)
    }
  })

  scrollTo(0, 0)

  result.classList.remove('d-none')
  result.querySelector('span').textContent = `${score}%`
})
