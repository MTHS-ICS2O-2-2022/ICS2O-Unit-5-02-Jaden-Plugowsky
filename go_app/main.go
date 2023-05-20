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
var randomNumber = (random.Intn(6 - -6) + -6)
var numberPolarity int
var userGuess int

func main() {
	// This function finds a random number, then asking the user to guess whether the number is positive or negative
	if randomNumber >= 0 {
		numberPolarity = 1 // positive
	} else {
		numberPolarity = 0 // negative
	}

	// Input
	fmt.Println("\nThis program finds a random number, then asking the user to guess whether the number is positive or negative.")
	fmt.Println("Type '1' if you think the number is positive, type '0' if you think the number is negative. Any other inputs are invalid.")
	fmt.Println("\nEnter your guess, 1 (positive) or 0 (negative): ")
	fmt.Scanln(&userGuess)

	// Process
	if userGuess == numberPolarity {
		fmt.Println("\nYou have guessed correctly! The number was", randomNumber)
	}
	if userGuess != numberPolarity {
		fmt.Println("\nYou have either guessed the number incorrectly, or you have entered an invalid response.")
		fmt.Println("The number was ", randomNumber)
	}

	// Output
	fmt.Println("\nDone.")
}
