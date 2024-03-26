"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

// starting conditions
diceEl.classList.add("hidden");
score0El.textContent = "0";
score1El.textContent = "0";

let randomNum;
let currentScore = 0;
let score0;
let score1;

const RollDice = () => {
  return (randomNum = Math.floor(Math.random() * 6) + 1);
};

rollButton.addEventListener("click", () => {
  const diceNum = RollDice();
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;
    current0El.textContent = currentScore;
  }else{
    
  }
});
