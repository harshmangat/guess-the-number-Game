let highScore = 0;
let currentScore = 50;


let userInput = 0;

let guess = {
  display: 'Guess a Number between 0 to 50',
  lower : 'This Number Is Lower',
  higher: 'This Number Is Higher',
  correct : 'YOU ARE A GENIUS!',
  lose : 'YOU LOSE Try Again'

}

let resultMessage = {
  guess: 'Guess?',
  wrong : 'WRONG',
  win : 'WINNER!!',
  lose: 'LOSER!',
  invalid : 'WRONG INPUT'

}

let emoji = {
    guess: '🤔',
    win: '🥳',
    wrong: '🤡',
    lose: '🤮',
    invalid: '🙅'
}
  



const Giveninput = document.querySelector(".input");
const checkBtn = document.querySelector(".check");
const task = document.querySelector(".task");
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');
const highestScore = document.querySelector(".high");
const currScore = document.querySelector(".current");
const emoticons = document.querySelector('.emoji')


result.innerHTML = resultMessage.guess;
task.innerHTML = guess.display
highestScore.textContent = highScore;
currScore.textContent = currentScore


const computerSelect = Math.trunc(Math.random() * 50)
console.log(computerSelect);

checkBtn.addEventListener('click', () => {
  userInput = Giveninput.value;
  console.log(userInput);



if(userInput > 50 || userInput < 0 || !userInput){
  task.textContent = 'Please Correct Your Input!';
  emoticons.textContent = emoji.invalid;
  result.textContent = resultMessage.invalid;
  checkBtn.disabled = true;
  
}else if(userInput == computerSelect) {
  emoticons.innerHTML = emoji.win
  result.textContent = resultMessage.win;
  task.textContent = guess.correct;
for(let i = 1; i < 50; i++){ 
  if(highScore < currentScore){
    highScore = currentScore;
    highestScore.textContent = highScore;
    checkBtn.disabled = true
  }
}
}else if(userInput > computerSelect){
  emoticons.innerHTML = emoji.wrong
  result.textContent = resultMessage.wrong
  task.textContent = guess.higher
  currentScore -= 5;
  
}else if(userInput < computerSelect){
  emoticons.innerHTML = emoji.wrong
  result.textContent = resultMessage.wrong
  task.textContent = guess.lower
  currentScore -=  5
}

Giveninput.value = '';
currScore.textContent = currentScore;

if(currentScore <= 0){
  task.textContent = guess.lose;
  result.textContent = resultMessage.lose
  emoticons.innerHTML = emoji.lose
  checkBtn.disabled = true;
}
}
);
