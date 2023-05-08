'use strict';

const min = 1;
const max = 6;
const rollBtn = document.querySelector(".btn--roll"); 
const holdBtn = document.querySelector(".btn--hold");
const diceImg = document.querySelector("img");
const newGame = document.querySelector(".btn--new");
const scorePlayer1 = document.getElementById("score--0"); 
const scorePlayer2 = document.getElementById("score--1"); 
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const player1Section = document.querySelector(".player--0");
const player2Section = document.querySelector(".player--1");

let isPlayerOneTurn = true; 
let currentScore = 0; 
diceImg.style.display = "none";


function updateCurrentScore() {
  if (isPlayerOneTurn) {
    currentScore1.textContent = currentScore;
  } else {
    currentScore2.textContent = currentScore;
  }
}

rollBtn.addEventListener("click", function() {
    diceImg.style.display = "Block";
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const imageUrl = `./dice-${randomNum}.png`;
  diceImg.src = imageUrl;
    
  if (randomNum === 1) {
    isPlayerOneTurn = !isPlayerOneTurn; 
    currentScore = 0;
    currentScore1.textContent = currentScore;
    currentScore2.textContent = currentScore;
    if (isPlayerOneTurn) {
      player1Section.classList.add('player--active');
      player2Section.classList.remove('player--active');
    } else {
      player1Section.classList.remove('player--active');
      player2Section.classList.add('player--active');
    }
    return;
  }
  currentScore += randomNum; 
  updateCurrentScore();
})


function winCondition(FinalScore , PlayerTurn)
{
    if(FinalScore >= 100 )
    {
         document.querySelector(".player--"+PlayerTurn).classList.add('player--winner');
         document.querySelector(".player--"+PlayerTurn).classList.remove('player--active');
         

    }

    
} 


holdBtn.addEventListener("click", function() {
  if (isPlayerOneTurn) {
    currentScore1.textContent = "0";
    scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + currentScore;
    player1Section.classList.remove('player--active');
    player2Section.classList.add('player--active');
    winCondition(scorePlayer1.textContent , 0 );

  } else {
    currentScore2.textContent = "0";
    scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + currentScore;
    player1Section.classList.add('player--active');
    player2Section.classList.remove('player--active');
    winCondition(scorePlayer2.textContent , 1 );

  }
  

  isPlayerOneTurn = !isPlayerOneTurn; 
  currentScore = 0;
})

newGame.addEventListener("click", function() {
    diceImg.style.display = "none";
    scorePlayer1.textContent = "0"; 
    scorePlayer2.textContent = "0"; 
    currentScore1.textContent = "0"; 
    currentScore2.textContent = "0"; 
})


