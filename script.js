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
  questionDiv.value = `Which index would you choose in order to get cup out of this array ?
    [water, dog, house, cup, mouse, box, backpack] ?`
  ans1.value = '4'
  ans2.value = '2'
  ans3.value = '3'
  ans4.value = '5'

  if (interval === 0) {
    interval = setInterval(function () {
      timeRemaining--;
      currentTime.value = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        currentTime.value = "Times Up!"
        clearBoard()
      }
    }, 1000);

  }

})

document.getElementById('next').addEventListener("click", function () {

  if (document.getElementById('input').value === 'C'||'c') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  document.getElementById('input').value = ''
  question2()
  document.getElementById('next').style.display = 'none'
  document.getElementById('next2').style.display = 'block'

})

document.getElementById('next2').addEventListener("click", function () {

  if (document.getElementById('input').value === 'B' || 'b') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  document.getElementById('input').value = ''
  question3()
  document.getElementById('next2').style.display = 'none'
  document.getElementById('next3').style.display = 'block'
})

document.getElementById('next3').addEventListener("click", function () {

  if (document.getElementById('input').value === 'C' || 'c') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  document.getElementById('input').value = ''
  question4()
  document.getElementById('next3').style.display = 'none'
  document.getElementById('next4').style.display = 'block'
})

document.getElementById('next4').addEventListener("click", function () {

  if (document.getElementById('input').value === 'A' || 'a') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  document.getElementById('input').value = ''
  question5()
  document.getElementById('next4').style.display = 'none'
  document.getElementById('submit').style.display = 'block'
})

document.getElementById('submit').addEventListener("click", function () {

  if (document.getElementById('input').value === 'A' || 'a') {
    score++
    alert('Correct')
    console.log(score);
  }
  else {
    timeRemaining = timeRemaining - 10
    alert('Wrong');
    console.log(score);
  }
  document.getElementById('input').value = ''
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
  questionDiv.value = 'Which symbol is used to call elements in CSS?'
  ans1.value = '!'
  ans2.value = '#'
  ans3.value = '.'
  ans4.value = '@'

}

function question3() {
  questionDiv.value = 'What is the shorthand to increase an increment by 1?'
  ans1.value = '--'
  ans2.value = '..'
  ans3.value = '++'
  ans4.value = '**'
}

function question4() {
  questionDiv.value = 'When do you need to add the event.preventDefault function?'
  ans1.value = 'When a button is inside a form.'
  ans2.value = 'When embedding a video or image into the HTML file.'
  ans3.value = 'Immediately upon loading the web page.'
  ans4.value = 'Anytime the tag <span> exists.'
}

function question5() {
  questionDiv.value = 'What is rubber ducking?'
  ans1.value = 'A method of debugging.'
  ans2.value = 'A type of server lag.'
  ans3.value = 'A common office game played among coworkers.'
  ans4.value = 'One of many error code messages.'
}

function clearBoard() {
  questionDiv.value = 'Quiz complete.'
  ans1.value = 'Your Score ' + score
  ans2.value = ''
  ans3.value = ''
  ans4.value = ''
  document.getElementById('a').value = ''
  document.getElementById('b').value = ''
  document.getElementById('c').value = ''
  document.getElementById('d').value = ''
}

function reset() {
  score = 0
  timeRemaining = 60
  questionDiv.value = 'Example text'
  ans1.value = 'example text'
  ans2.value = 'example text'
  ans3.value = 'example text'
  ans4.value = 'example text'
}