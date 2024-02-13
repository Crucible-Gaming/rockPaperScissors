 const btnRo = document.getElementById('rock');
 const btnPa = document.getElementById('paper');
 const btnSc = document.getElementById('scissors');

 const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  buttons.addEventListener('click', () => {
    buttons.playerSelection ();


  });
});




function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!"; 
    } else if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "paper")
    ) {
      return "It's a tie!"; // no need for special code- game is best of 5.
    } else {
      return "You lose!";
    }
  } 
  
function game() {
    let playerScore = 0;
    let computerScore = 0;

while (playerScore < 3 && computerScore < 3) {
// ask for player prompt here and converts everything to lower case so
// capitalization doesn't matter 
      const playerSelection = 
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
  => 