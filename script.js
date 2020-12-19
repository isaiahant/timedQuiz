// assorted variables
var questionIndex = 0
var startBtn = document.querySelector('#start')
var questionDiv = document.querySelector('#currentQuestion')
var interval = 0
var currentTime = document.querySelector('#timer')
var ans1 = document.querySelector('#answer1')
var ans2 = document.querySelector('#answer2')
var ans3 = document.querySelector('#answer3')
var ans4 = document.querySelector('#answer4')
let timeRemaining = 60
let score = 0
let input = document.getElementById('input')
// question time
let questions = [
  {
    question: `Which index would you choose in order to get cup out of this array?
    [water, dog, house, cup, mouse, box, backpack]?`,
    correctAnswer: 'C',
    wrongAnswers: 'A, B, D',
  },

  {
    question: 'Which symbol is used to call elements in CSS?',
    correctAnswer: 'B',
    wrongAnswers: 'A, C, D',
  },

  {
    question: 'What is the shorthand to increase an increment by 1?',
    correctAnswer: 'C',
    wrongAnswers: 'A, B, D',
  },

  {
    question: 'When do you need to add the event.preventDefault function?',
    correctAnswer: 'A',
    wrongAnswers: 'B, C, D',
  },

  {
    question: 'What is rubber ducking?',
    correctAnswer: 'A',
    wrongAnswers: 'B, C, D',
  }
];






// big functions
startBtn.addEventListener("click", function () {
  questionDiv.textContent = `Which index would you choose in order to get cup out of this array ?
    [water, dog, house, cup, mouse, box, backpack] ?`
  ans1.textContent = '4'
  ans2.textContent = '2'
  ans3.textContent = '3'
  ans4.textContent = '5'

  if (interval === 0) {
    interval = setInterval(function () {
      timeRemaining--;
      currentTime.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        currentTime.textContent = "Times Up!"
        clearBoard()
      }
    }, 1000);

  }

})

document.getElementById('next').addEventListener("click", function () {

  if (input.textContent === 'C' || 'c') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  input.textContent = ''
  question2()
  document.getElementById('next').style.display = 'none'
  document.getElementById('next2').style.display = 'block'

})

document.getElementById('next2').addEventListener("click", function () {

  if (input.textContent === 'B' || 'b') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  input.textContent = ''
  question3()
  document.getElementById('next2').style.display = 'none'
  document.getElementById('next3').style.display = 'block'
})

document.getElementById('next3').addEventListener("click", function () {

  if (input.textContent === 'C' || 'c') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  input.textContent = ''
  question4()
  document.getElementById('next3').style.display = 'none'
  document.getElementById('next4').style.display = 'block'
})

document.getElementById('next4').addEventListener("click", function () {

  if (input.textContent === 'A' || 'a') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  input.textContent = ''
  question5()
  document.getElementById('next4').style.display = 'none'
  document.getElementById('submit').style.display = 'block'
})

document.getElementById('submit').addEventListener("click", function () {

  if (input.textContent === 'C' || 'c') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  input.textContent = ''
  clearBoard()
  document.getElementById('submit').style.display = 'none'
  document.getElementById('initial').style.display = 'block'
})

document.getElementById('initial').addEventListener("click", function record() {
  let x = prompt('If you would like to record your score please type your initials.')
  var result = document.createElement('li')
  if (prompt !== null) {
    result.innerHTML = x + score
    document.getElementById('resultContainer').appendChild(result)
  }
  document.getElementById('initial').style.display = 'none'
  document.getElementById('next').style.display = 'block'
  reset()
})


// functions to be called
function question2() {
  questionDiv.textContent = 'Which symbol is used to call elements in CSS?'
  ans1.textContent = '!'
  ans2.textContent = '#'
  ans3.textContent = '.'
  ans4.textContent = '@'

}

function question3() {
  questionDiv.textContent = 'What is the shorthand to increase an increment by 1?'
  ans1.textContent = '--'
  ans2.textContent = '..'
  ans3.textContent = '++'
  ans4.textContent = '**'
}

function question4() {
  questionDiv.textContent = 'When do you need to add the event.preventDefault function?'
  ans1.textContent = 'When a button is inside a form.'
  ans2.textContent = 'When embedding a video or image into the HTML file.'
  ans3.textContent = 'Immediately upon loading the web page.'
  ans4.textContent = 'Anytime the tag <span> exists.'
}

function question5() {
  questionDiv.textContent = 'What is rubber ducking?'
  ans1.textContent = 'A method of debugging.'
  ans2.textContent = 'A type of server lag.'
  ans3.textContent = 'A common office game played among coworkers.'
  ans4.textContent = 'One of many error code messages.'
}

function clearBoard() {
  questionDiv.textContent = 'Quiz complete.'
  ans1.textContent = 'Your Score ' + score
  ans2.textContent = ''
  ans3.textContent = ''
  ans4.textContent = ''
  document.getElementById('a').textContent = ''
  document.getElementById('b').textContent = ''
  document.getElementById('c').textContent = ''
  document.getElementById('d').textContent = ''
}

function reset() {
  score = 0
  timeRemaining = 60
  questionDiv.textContent = 'Example text'
  ans1.textContent = 'example text'
  ans2.textContent = 'example text'
  ans3.textContent = 'example text'
  ans4.textContent = 'example text'
}