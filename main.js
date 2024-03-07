let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let playerSelection = e.target.textContent;
  //  console.log(playerSelection);
    getComputerChoice;
    playRound;
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
    return "It's a tie!";

  } else {
    return "You lose!";
    
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    const computerSelection = getComputerChoice();

    const picks = document.createElement('p');
    document.getElementById('results');
    results.appendChild('p');

    picks.textContent = "These were the selections this round.";

    picks.appendChild("You chose " + playerSelection);
    picks.appendChild("Computer chose " + computerSelection);

    const roundResult = playRound(playerSelection, computerSelection);

    const scores = document.createElement("score")
    results.textContent = "SCORES";
    score.appendChild(roundResult);

    if (roundResult === "You win!") {
      playerScore++;

    } else if (roundResult === "You lose!") {
      computerScore++;

    }
    scores.appendChild("Player Score: " + playerScore);
    scores.appendChild("Computer Score: " + computerScore);
    
  }

  if (playerScore === 3) {
    scores.appendChild("Gratz! You won!");

  } else {
    scores.appendChild("Oh no! You lost!");

  }
}
//call the actual game to start
// game();
