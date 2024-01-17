function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"]; //initial version had 'ro, pa, sc' for rock paper scissors as variables but were swapped for readability in finished code
    const randomIndex = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!"; //no need to do anything special here since the game runs until one side has 3 wins - ties are moot
    } else if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "paper")
    ) {
      return "It's a tie!";
    } else {
      return "You lose!";
    }
  }
  
function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
// ask for player prompt here
      const playerSelection = prompt("Please choose rock, paper, or scissors.").toLowerCase();
      const computerSelection = getComputerChoice();
  
      console.log("You chose " + playerSelection);
      console.log("Computer chose " + computerSelection);
  
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(roundResult);
  
      if (roundResult === "You win!") {
        playerScore++;
      } else if (roundResult === "You lose!") {
        computerScore++;
      }
      console.log("Player Score: " + playerScore);
      console.log("Computer Score: " + computerScore);
    }
  
    if (playerScore === 3) {
      console.log("Gratz! You won!");
    } else {
      console.log("Oh no! You lost!");
    }
  }
  
  // call the actual game to start
  game();
  