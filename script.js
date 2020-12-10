// timer
let time = 60

document.getElementById('Start').addEventListener('click'=> {
  document.getElementById('timer').
    setInterval(() => {
      time--
    }, 1000);
})


// question time
let question1 = {
  question: `Which index would you choose in order to get item 3 out of this array?
  [water, dog, house, cup, mouse, box, backpack]`
  answers: ['4, 1, 3, 5']
  correctAnswer: '3'
  wrongAnswers: '4, 1, 5'
}

let question2 = {
  question: 'Which symbol is used to call elements in CSS?'
  answers: ['!, ., #, @']
  correctAnswer: '#'
  wrongAnswers: '!, ., @'
}

let question3 = {
  question: 'What is the shorthand to increase an increment by 1?'
  answers: ['++, --, $, !']
  correctAnswer: '++'
  wrongAnswers: '--, $, !'
}

let question4 = {
  question: 'When do you need to add the event.preventDefault function?'
  answers: ['When adding a new file to a page, When a button is inside a form, When attaching a link to text, When embedding a video']
  correctAnswer: 'When a button is inside a forum'
  wrongAnswers: 'When adding a new file to a page, Whrn attaching a link to text, When embedding a video'
}

let question5 = {
  question: ''
}