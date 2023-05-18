// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * (6 - -7)) + -7
  // Generates a random number from -7 to 6 (equal number of negative and positive numbers, as 0 is counted as positive for simplicity)
let numberPolarity = null

if (randomNumber >= 0) {
    numberPolarity = 1 // positive
  } else {
    numberPolarity = 0 // negative
  }

function guessPressed() {
  // a value of 1 means positive
  // a value of 0 means negative
  let userGuess = null
  let positiveButtonChecked = document.getElementById("positive").checked

  /** !!IMPORTANT!!
   * it checks if the positive button is checked, but not if the negative button is checked. 
   * This can cause issues vis-a-vis the system taking no input as a "negative" button press, as the system doesn't know whether or not "negative" is even pressed.
   * This could also be fixed by setting a pre-selected value - as Mr. Coxall likely did - thereby making it impossible to simply give no answer.
   *   -This solution would still be the same thing as the 'problem' I'm having, although it would be more 'official' of sorts.
   *    -Additionally, instead of "negative" being the default option, "positive" would be.
   */

  if (positiveButtonChecked === true) {
    /**
     * This checks if the positive radio button is selected, if it is, the user guessed "positive" (1).
     * If not, the user guessed the "negative" button (0).
     */
    userGuess = 1 // positive
  } else if (positiveButtonChecked === false) {
    userGuess = 0 // negative 
  } else {
    userGuess = null
  }

  if (userGuess == numberPolarity) {
      document.getElementById("answer").innerHTML =
        "The answer is: numberPolarity: " + numberPolarity + "  randomNumber: " + randomNumber + "  userGuess: " + userGuess + "  CORRECT"
  } else {
      document.getElementById("answer").innerHTML =
    "The answer is: numberPolarity: " + numberPolarity + "  randomNumber: " + randomNumber + "  userGuess: " + userGuess + "  WRONG"
  }
}
