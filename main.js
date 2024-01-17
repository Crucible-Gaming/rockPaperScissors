let ro = "rock";
let pa = "paper";
let sc = "scissors";


function game(playerSelection) {

    const rpsArray = ["rock", "paper", "scissors"];
    const getComputerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    console.log("The computer chose " + getComputerChoice)

    if (playerSelection === ro && getComputerChoice === sc || playerSelection === pa && getComputerChoice === ro || playerSelection === sc && getComputerChoice === pa) {
        return "You win.";
    } else if (playerSelection === ro && getComputerChoice === ro || playerSelection === sc && getComputerChoice === sc || playerSelection === pa && getComputerChoice === pa) {
        return  "You tied.";
    } else {
        return "You lose!";
    }
}

const playerSelection = prompt( "Please choose rock, paper, or scissors." ).toLowerCase();

console.log("You chose " + playerSelection)


game(playerSelection);

console.log(game(playerSelection));


// the original else if statements that ran the game

/* function game(playerSelection) {

    const rpsArray = ["rock", "paper", "scissors"];
    const getComputerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    console.log("User Input", playerSelection);
    console.log("Computer Choice", getComputerChoice);

    if (playerSelection === ro && getComputerChoice === pa) {
        console.log( "You lose!" );
    } else if (playerSelection === ro && getComputerChoice === ro) {
        console.log( "You tied!" );
    } else if (playerSelection === ro && getComputerChoice === sc) {
        console.log ( "You win!" );
    } else if (playerSelection === pa && getComputerChoice === sc) {
        console.log( "You lose!" );
    } else if (playerSelection === pa && getComputerChoice === pa) {
        console.log ( "You tied!" );
    } else if (playerSelection === pa && getComputerChoice === ro) {
        console.log( "You win!" );
    } else if (playerSelection === sc && getComputerChoice === ro) {
        console.log ( "You lose!" );
    } else if (playerSelection === sc && getComputerChoice === pa) {
        console.log ( "You win!" );
    } else if (playerSelection === sc && getComputerChoice === sc) {
        console.log ( "You tied!");
    }
} */

