// Utility function that will return a random number between 0 and inputed max value
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to return computer's selection for rock paper scissors game
function getComputerChoice() {
    const CHOICES = ["rock","paper","scissor"];
    let computerSelection = CHOICES.at(getRandomInt(3));
    return computerSelection;
}

// Function to recieve player's input
function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice").toLowerCase();
    return playerSelection;
}


// Let's change the console.log area to 

// Function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    const WINCONDITIONS = ["rockscissor","scissorpaper","paperrock"];
    if (playerSelection === computerSelection) {
        console.log(`Tie: You and the comp both picked ${playerSelection}`);
    } else if (WINCONDITIONS.includes(playerSelection+computerSelection)) {
        console.log(`You win: ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose: ${computerSelection} beats ${playerSelection}`)
    }
    return;
}


// Add Event Listeners to each button

const playerOptions = document.querySelectorAll('button.playerOption');

function doSomething(e) {
    const playerSelection = e.target.firstChild.textContent.toLowerCase();
    playRound(playerSelection,getComputerChoice());
    return;
}

playerOptions.forEach(option => option.addEventListener('click',doSomething));
