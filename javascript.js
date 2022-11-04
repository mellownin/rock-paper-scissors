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


// Function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    
    // Establish function constants
    const WINCONDITIONS = ["rockscissor","scissorpaper","paperrock"];

    // Tag the div area to display results and create object to store round result
    const resultsArea = document.querySelector('div.resultsArea');
    const result = document.createElement('p');
    
    // Get objects containing player and comp score, get score values
    let playerScoreObj = document.querySelector('div.playerScore p.scoreValue');
    let currentPlayerScore = parseInt(playerScoreObj.textContent);
    
    let compScoreObj = document.querySelector('div.compScore p.scoreValue');
    let currentCompScore = parseInt(compScoreObj.textContent);

    // Game Logic to Determine Round Winner, Display Results, and Increment Scores
    if (playerSelection === computerSelection) {
        result.textContent = `Tie: You and the computer both played ${playerSelection}!`;
    } else if (WINCONDITIONS.includes(playerSelection+computerSelection)) {
        result.textContent = `You Win: Player picked ${playerSelection} and the computer picked ${computerSelection}`;
        
        //Increment Player Score and Update HTML
        currentPlayerScore += 1;
        playerScoreObj.textContent = currentPlayerScore;        

    } else {
        result.textContent = `You Lose: Player picked ${playerSelection} and the computer picked ${computerSelection}`;

        //Increment Computer Score and Update HTML
        currentCompScore += 1; 
        compScoreObj.textContent = currentCompScore;
    }
    resultsArea.insertBefore(result,resultsArea.firstChild);
    return;
}


// Add Event Listeners to each button

const playerOptions = document.querySelectorAll('button.playerOption');

function triggerRound(e) {
    const playerSelection = e.target.firstChild.textContent.toLowerCase();
    playRound(playerSelection,getComputerChoice());
    return;
}

playerOptions.forEach(option => option.addEventListener('click',triggerRound));
