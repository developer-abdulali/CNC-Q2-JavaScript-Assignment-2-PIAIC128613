// Store the secret number
let secretNumber = 5 ;

// Prompt the user to guess the number
let guessNumber = +prompt("Guess the secret number (between 1 and 10): ");

// Check if the guess is correct or close enough
if (guessNumber === secretNumber) {
  document.write("Bingo! Correct answer");
} else if (guessNumber === secretNumber + 1 || guess === secretNumber - 1) {
  document.write("Close enough to the correct answer");
} else {
  alert("Sorry, try again");
}