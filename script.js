// timer
let timeRemaining = 60

// score
let score = 0

// question time
let questions = [
  {
    question: `Which index would you choose in order to get item 3 out of this array?
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






startBtn.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
      timeRemaining--;
      currentTime.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        fin();
        currentTime.textContent = "Times Up!"

      }
    }, 1000);
  }
  showQuestion(questionIndex);



})