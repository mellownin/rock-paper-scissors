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

// Function to recieve player's input
function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice").toLowerCase();
    return playerSelection;
}

// Function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // accomodate ties
    // rock beats scissor
    // scissor beats paper
    // paper beats rock
    // naive approach, check every condition
    if (playerSelection === computerSelection) {
        console.log(`Tie: You and the comp both picked ${playerSelection}`);
    }
    
}


// Function tester
for (let i = 0; i < 5; i++) {
    let testNum = i + 1;
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let result = `Test ${testNum} | Computer Result: ${computerSelection} | Player Result: ${playerSelection}`;
    console.log(result)
}

