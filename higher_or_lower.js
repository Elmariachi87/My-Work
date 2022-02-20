let maximum = parseInt(prompt("Enter the maximum number"))

while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"))
}

const answer = Math.floor(Math.random() * maximum) + 1
console.log(answer);

let guess = parseInt(prompt("Enter your first guess"))
let attempts = 1;

while (guess !== answer) {
    attempts += 1;
    if (guess > answer) {
        guess = parseInt(prompt("Too high, go lower!"))
    } else if (guess < answer) {
        guess = parseInt(prompt("Too low, go higher!"))
    }
}

alert(`Well done! You guessed it in ${attempts} attempt(s)`)



