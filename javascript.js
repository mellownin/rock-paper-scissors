

// Utility function that will return a random number between 0 and inputed max value
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to return computer's selection for rock paper scissors game
function getComputerChoice() {
    const CHOICES = ["rock","paper","scissors"];
    let computerSelection = CHOICES.at(getRandomInt(3));
    return computerSelection;
}


// Function tester
for (let i = 0; i < 5; i++) {
    let testNum = i + 1;
    let computerSelection = getComputerChoice();
    let result = `Test ${testNum} result: ${computerSelection}`;
    console.log(result)
}