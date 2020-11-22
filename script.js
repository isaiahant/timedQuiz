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