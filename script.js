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


