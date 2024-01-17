let rock = "rock";
let paper = "paper";
let scissors = "scissors";


function game(playerSelection) {

    const rpsArray = ["rock", "paper", "scissors"];
    const getComputerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    console.log("The computer chose " + getComputerChoice)

    if (
        (playerSelection === rock && getComputerChoice === scissors) || (playerSelection === paper && getComputerChoice === rock) || (playerSelection === scissors && getComputerChoice === paper)
    ) { 
        return "You win.";

    } else if (
        (playerSelection === rock && getComputerChoice === rock) || (playerSelection === scissors && getComputerChoice === scissors) || (playerSelection === paper && getComputerChoice === paper)
    ) {
        return "You tied.";
    
    } else {
        return "You lose!";
    }
}

const playerSelection = prockmpt( "Please choose rock, paper, or scissors." ).toLowerCase();

console.log("You chose " + playerSelection)


const result = game(playerSelection);
console.log(result);

// the original else if statements that ran the game

/* function game(playerSelection) {

    const rpsArray = ["rockck", "paper", "scissors"];
    const getComputerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    console.log("User Input", playerSelection);
    console.log("Computer Choice", getComputerChoice);

    if (playerSelection === rock && getComputerChoice === paper) {
        console.log( "You lose!" );
    } else if (playerSelection === rock && getComputerChoice === rock) {
        console.log( "You tied!" );
    } else if (playerSelection === rock && getComputerChoice === scissors) {
        console.log ( "You win!" );
    } else if (playerSelection === paper && getComputerChoice === scissors) {
        console.log( "You lose!" );
    } else if (playerSelection === paper && getComputerChoice === paper) {
        console.log ( "You tied!" );
    } else if (playerSelection === paper && getComputerChoice === rock) {
        console.log( "You win!" );
    } else if (playerSelection === scissors && getComputerChoice === rock) {
        console.log ( "You lose!" );
    } else if (playerSelection === scissors && getComputerChoice === paper) {
        console.log ( "You win!" );
    } else if (playerSelection === scissors && getComputerChoice === scissors) {
        console.log ( "You tied!");
    }
} */

