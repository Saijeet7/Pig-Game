"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

let scores, randomNum, currentScore, activePlayer, playing;

const init = function () {
  // starting conditions
  scores = [0, 0];
  randomNum;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add("hidden");

  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1El.textContent = "0";
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const RollDice = () => {
  return (randomNum = Math.floor(Math.random() * 6) + 1);
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

rollButton.addEventListener("click", () => {
  if (playing) {
    const diceNum = RollDice();
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
