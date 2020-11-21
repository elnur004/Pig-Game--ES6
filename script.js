'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const curScoreEl = document.querySelector('.current-score');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let currentScore = 0;

// Rolling dice functionality
btnRollEl.addEventListener('click', function() {
    // 1. Create random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if(dice > 1) {
        // Add dice to the current score
        currentScore += dice;
        current0El.textContent = currentScore;  // CHANGE PLAYER LATER
    } else {
        // Switch to next player

    }
});