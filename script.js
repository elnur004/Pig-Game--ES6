'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const curScoreEl = document.querySelector('.current-score');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner', 'name');
  player1.classList.remove('player--winner', 'name');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  diceEl.classList.add('hidden');
}

// Rolling dice functionality
btnRollEl.addEventListener('click', function () {
  if (playing) {
    // 1. Create random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice > 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// HOLD BUTTON for adding current score to the global score
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // 2. Display global score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. Check if score >= 100
    if (scores[activePlayer] >= 100) {
      // 4. Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner', 'name');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // 5. If not switch the player
      switchPlayer();
    }
  }
});

// RESET BUTTON to start the game again
btnNewEl.addEventListener('click', init);
