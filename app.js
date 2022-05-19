let maximum = parseInt(prompt('Enter the maximum number'));
// (!maximum) means 'false' or 'not maximum'. As long as it is false it will keep prompting for a valid number
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt('Too High! Enter again!'));
    } else {
        guess = (prompt('Too low! Enter again!'));
    }
}

if (guess === 'q') {
    console.log('You quit');
} else {
console.log('Congrats! YOU WIN!')    
console.log(`You Got It! It took you ${attempts} guesses.`)
}
    // We are using parseInt because we need a number, and without parseInt every number is converted into a string in a variable.
