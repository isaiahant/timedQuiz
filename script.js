let questions = []
let fakeAnswers = []
let realAnswers = []

questions.push(`What does a[3] return from the following Array: a['pizza','duck','42','pez','church']`)
fakeAnswers.push([`pizza`, `duck`, `42`, `church`])
realAnswers.push(`pez`)

questions.push(`How many times will the following For Loop run: for(let i = 0; i < 5; i += 2)`)
fakeAnswers.push([`Five times`, `Four times`, `Six times`, `Two times`])
realAnswers.push(`Three times`)

questions.push(`What operator is used to increase a value by one?`)
fakeAnswers.push([`--`,`+=`,`-=`])
realAnswers.push(`++`)

questions.push(`Which operator is used to call a class?`)
fakeAnswers.push([`#`,`$`,`&`])
realAnswers.push(`.`)

questions.push(`The Debugger is an excellent tool for ___`)
fakeAnswers.push([`Fixing errors for you`, `Optimizing the code for you`, `Removing the word "bug" from your code`, `Doing nothing. You shouldn't use it`])
realAnswers.push(`Exposing bugs in your code`)

let randQuestions = []

let questionNum = 0;

let correctAnswer = 0

let quizTime = 0;

let quizInterval = undefined;


let viewScores = document.getElementById("viewScores")

let clock = document.getElementById('clock')

let heading = document.getElementById(`heading`)

let desc = document.getElementById(`desc`)

let answerButtons = document.getElementById(`answerButtons`)

let form = document.getElementById(`enterName`)

let input = document.getElementById(`input`)

let answers = []
answers.push(document.getElementById(`answer1`))
answers.push(document.getElementById(`answer2`))
answers.push(document.getElementById(`answer3`))
answers.push(document.getElementById(`answer4`))

let start = document.getElementById(`start`)

let highScores = document.getElementById(`highScores`)

let goBack = document.getElementById(`goBack`)

let clear = document.getElementById(`clear`)

let hr = document.getElementById(`line`)
hr.style.display = `none`

let result = document.getElementById(`result`)
result.style.display = `none`


resultTimer = undefined;


if (scores === null) {
  scores = []
}

const randInt = (val) => {
  return Math.floor(Math.random() * val)
}

const clearHighscores = () => {
  highScores.textContent = ``
  scores = []
  localStorage.setItem(`High Scores`, JSON.stringify(scores))
}

const showHi
ghscroes = () => {
  heading.textContent = "High Scores"
  highScores.style.display = `block`
  highScores.textContent = ``
  goBack.style.display = "inline"
  clear.style.display = "inline"
  desc.style.display = `none`
  start.style.display = `none`
  form.style.display = `none`

  let len = scores.length
  for (let i = 0; i < len; i++) {
    let scoreItem = document.createElement(`LI`)
    if (i % 2 === 0) {
      scoreItem.classList.add(`listEven`)
    } else {
      scoreItem.classList.add(`listOdd`)
    }

    console.log(scoreItem)
    scoreItem.textContent = `${i}. ${scores[i].name} - ${scores[i].score}`

    highScores.appendChild(scoreItem)
  }

}

const submitHighscore = (initals) => {
  let index = 0
  let len = scores.length
  for (let i = 0; i < len; i++) {
    if (quizTime > scores[i].score) {
      i = len
    }
  }
  console.log(initals)
  scores.splice(index, 0, { name: initals, score: quizTime })
  localStorage.setItem(`High Scores`, JSON.stringify(scores))

  showHighscroes()
}

const stopQuiz = () => {
  clearInterval(quizInterval)
  clock.textContent = ``
  quizTime += -15 * randQuestions.length

  heading.innerHTML = `All done!`
  desc.style.display = `block`
  desc.innerHTML = `Your final score is ${quizTime}`

  answerButtons.style.display = `none`

  form.style.display = `block`
}

const checkAnswer = (answer) => {
  randQuestions.splice(questionNum, 1)
  console.log(randQuestions.length)
  answer = parseInt(answer)
  if (resultTimer !== undefined) {
    clearTimeout(resultTimer)
  }
  if (answer === correctAnswer) {
    result.textContent = "Correct!"
  } else {
    result.textContent = "Wrong!"
    quizTime -= 15
    clock.textContent = `Time: ${quizTime}`
  }
  hr.style.display = "block"
  result.style.display = "block"
  resultTimer = setTimeout(() => {
    hr.style.display = "none"
    result.style.display = "none"
    resultTimer = undefined
  }, 3000);

  if (randQuestions.length < 1) {
    stopQuiz()
  } else {
    nextQuestion()
  }

}

const nextQuestion = () => {
  let randNum = randInt(randQuestions.length)
  questionNum = randNum
  let randQuestion = randQuestions[randNum]

  heading.textContent = questions[randQuestion]

  //Fills the answer buttons with fake answers in a random order
  let randFakeAnswers = [0, 1, 2, 3]
  for (let i = 0; i < 4; i++) {
    randNum = randInt(randFakeAnswers.length)
    let index = randFakeAnswers[randNum]
    answers[i].textContent = `${(i + 1)}. ${fakeAnswers[randQuestion][index]}`
    randFakeAnswers.splice(randNum, 1)
  }


  