const correctAnswers = ['A', 'A', 'B', 'A']

const form = document.querySelector('.quiz-form')
const h2 = document.querySelector('body > div.quiz.py-4.bg-dark > div > h2')

const removeScoreParagraph = () => {
  scoreParagraphExists = document.querySelector('[data-score="score"]')

  if (scoreParagraphExists) {
    scoreParagraphExists.remove()
  }
}

const createScoreParagraph = score => {
  const scoreParagraph = document.createElement('p')
  scoreParagraph.textContent = `Total de pontos: ${score}`
  scoreParagraph.classList.add('text-white')
  scoreParagraph.setAttribute('data-score', 'score')

  h2.insertAdjacentElement('beforebegin', scoreParagraph)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  
  removeScoreParagraph()

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
    }
  })

  createScoreParagraph(score)
})
