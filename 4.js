const favNumber = 20;
let guess = null;

while (guess !== favNumber){
    guess = Number(prompt("Guess your favorite number:"));

    if(guess > favNumber){
        console.log("Too high! Try again.");
    } else if (guess < favNumber){
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed the favorite number.");
    }
}