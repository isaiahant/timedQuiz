// timer
let timeRemaining = 60

// score
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
  
  if (document.getElementById('input').value === 'C') {
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

})




function question2 () {
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