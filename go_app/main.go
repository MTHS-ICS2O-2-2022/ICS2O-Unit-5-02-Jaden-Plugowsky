// Created by: Jaden Plugowsky
// Created on: May 2023
//
// This program finds a random number, then it asks the user to guess its polarity

package main

import (
	"fmt"
	"math/rand"
	"time"
)

var source = rand.NewSource(time.Now().UnixNano())
var random = rand.New(source)
var randomNumber = random.Intn(5)
var numberPolarity int
var userGuess 

if randomNumber >= 0 {
  numberPolarity = 1 // positive
} else {
  numberPolarity = 0 // negative
}

/* IMPORTANT
Go is incomplete here, and will stay incomplete until I have more time to do it, if that ever comes to begin with.
*/

func main() {
	// This function finds a random number, then it asks the user to guess its polarity
	var userGuess int

	// Input
	fmt.Println("\nThis program finds a random number, then asking the user to guess the random number.")
	fmt.Println()
	fmt.Print("Enter your guess from 0-5: ")
	fmt.Scanln(&userGuess)

	// Process
	if userGuess == randomNumber {
		fmt.Println("\nYou have guessed the correct number, which was", randomNumber)
	}
	if userGuess != randomNumber {
		fmt.Println("\nYou have guessed the number incorrectly, which was", randomNumber)
	}

	// Output
	fmt.Println("\nDone.")
}