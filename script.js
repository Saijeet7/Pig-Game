"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
// starting conditions
diceEl.classList.add("hidden");
score0El.textContent = "0";
score1El.textContent = "0";

const scores = [0, 0];
let randomNum;
let currentScore = 0;
let score0;
let score1;
let activePlayer = 0;

const RollDice = () => {
  return (randomNum = Math.floor(Math.random() * 6) + 1);
};

rollButton.addEventListener("click", () => {
  const diceNum = RollDice();
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    if (activePlayer === 0) {
      currentScore += diceNum;
      current0El.textContent = currentScore;
      scores[0] += diceNum;
      score0El.textContent = scores[0];
    } else {
      currentScore += diceNum;
      current1El.textContent = currentScore;
      scores[1] += diceNum;
      score1El.textContent = scores[1];
    }
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
