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
  removeElement1()
  addElement2()
  
})
document.getElementById('next2').addEventListener("click", function () {
  
  if (document.getElementById('input').value === 'B'||'b') {
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
  removeElement2()
  addElement3()
  
})
document.getElementById('next3').addEventListener("click", function () {
  
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
  question4()
  removeElement3()
  addElement4()
  
})
document.getElementById('next4').addEventListener("click", function () {
  
  if (document.getElementById('input').value === 'A'||'a') {
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
  removeElement4()
  addElement5()
  
})
document.getElementById('submit').addEventListener("click", function () {
  
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
  clearBoard()
  removeElement5()
  addElement1()
  
})



// functions to be called
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

function removeElement1() {
  
  document.getElementById('next').remove()
  console.log('hello');
}
function removeElement2() {
  
  document.getElementById('next2').remove()
  console.log('hello');
}
function removeElement3() {
  
  document.getElementById('next3').remove()
  console.log('hello');
}
function removeElement4() {
  
  document.getElementById('next4').remove()
  console.log('hello');
}

function addElement2() {
  
  var newElement = document.createElement('button');
  newElement.setAttribute('id', 'next2');
  newElement.setAttribute('type', 'button');
  newElement.setAttribute('class', 'btn btn-primary');
  newElement.innerHTML = 'Next Question';
  document.getElementById('nextContainer').appendChild(newElement)
}
function addElement3() {
  
  var newElement = document.createElement('button');
  newElement.setAttribute('id', 'next3');
  newElement.setAttribute('type', 'button');
  newElement.setAttribute('class', 'btn btn-primary');
  newElement.innerHTML = 'Next Question';
  document.getElementById('nextContainer').appendChild(newElement)
}
function addElement4() {
  
  var newElement = document.createElement('button');
  newElement.setAttribute('id', 'next4');
  newElement.setAttribute('type', 'button');
  newElement.setAttribute('class', 'btn btn-primary');
  newElement.innerHTML = 'Next Question';
  document.getElementById('nextContainer').appendChild(newElement)
}
function addElement5() {
  
  var newElement = document.createElement('button');
  newElement.setAttribute('id', 'Submit');
  newElement.setAttribute('type', 'button');
  newElement.setAttribute('class', 'btn btn-primary');
  newElement.innerHTML = 'Submit Answers';
  document.getElementById('nextContainer').appendChild(newElement)
}
function addElement6() {
  
  var newElement = document.createElement('button');
  newElement.setAttribute('id', 'intial');
  newElement.setAttribute('type', 'button');
  newElement.setAttribute('class', 'btn btn-primary');
  newElement.innerHTML = 'Record Score';
  document.getElementById('nextContainer').appendChild(newElement)
}
  
  
  

