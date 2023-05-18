// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * (6 - -7)) + -7
// Generates a random number from -7 to 6 (equal number of negative and positive numbers, as 0 is counted as positive for simplicity)
let numberPolarity = null
let polarityWord = ""
let revealed = false

if (randomNumber >= 0) {
  numberPolarity = 1 // positive
} else {
  numberPolarity = 0 // negative
}

if (numberPolarity == 1) {
  polarityWord = "positive"
}
if (numberPolarity == 0) {
  polarityWord = "negative"
}

function guessPressed() {
  // a value of 1 means positive
  // a value of 0 means negative
  let userGuess = null
  let positiveButtonChecked = document.getElementById("positive").checked

  if (positiveButtonChecked === true) {
    /**
     * This checks if the positive radio button is selected, if it is, the user guessed "positive" (1).
     * If not, the user must have guessed the "negative" button (0).
     */
    userGuess = 1 // positive
  } else {
    userGuess = 0 // negative
  }

  if (userGuess == numberPolarity) {
    document.getElementById("answer").innerHTML =
      "Your guess was correct! The number was " +
      randomNumber +
      ", which is " +
      polarityWord +
      "."
  } else {
    document.getElementById("answer").innerHTML =
      "Try again, your guess was incorrect."
  }
}

function revealAnswerPressed() {
  // this is activated when the user presses the "reveal answer" button, then showing the answer and polarity
  // the "revealed" boolean allows this button to be toggleable
  if (revealed === false) {
    document.getElementById("revealAnswer").innerHTML =
      "The random number is " +
      randomNumber +
      ", which is " +
      polarityWord +
      "."
    revealed = true
  } else if (revealed === true) {
    document.getElementById("revealAnswer").innerHTML = ""
    revealed = false
  }
}
