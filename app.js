let highScore = 0;
let currentScore = 50;


let userInput = 0;



let guess = {
  display: 'Guess a Number between 0 to 50',
  lower : 'OOPS SORRY!! TRY A GREATER NUMBER',
  higher: 'OOPS SORRY!! TRY A SMALLER NUMBER',
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


let computerSelect = Math.trunc(Math.random() * 50)
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
 
  if(highScore < currentScore){
    highScore = currentScore;
    highestScore.textContent = highScore;
    // prev.textContent = highScore; 
    // if(highestScore < currentScore){
    //   highestScore += currentScore;
    //   highestScore.textContent = highScore;
    //   console.log(highestScore);
    // }
  }

  if (currentScore > highScore)
    highScore += currentScore
    highestScore.textContent = highScore;
  checkBtn.disabled = true
  
   
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


resetBtn.addEventListener('click', () =>{
  currentScore = 50;
  currScore.textContent = currentScore;
  computerSelect = Math.trunc(Math.random() * 50);
  console.log(computerSelect);
  result.innerHTML = resultMessage.guess;
  task.innerHTML = guess.display
  Giveninput.value = '';
  checkBtn.disabled = false;
  // localStorage.setItem("highestScore", highestScore.value);
  // let prev = highestScore.value;
  // if(highestScore > prev){
  //   highestScore.textContent += prev;
  //   console.log(highestScore);
  // }

  
  
});