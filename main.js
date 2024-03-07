let buttons = document.querySelectorAll('button');

// Creates elements to display results
let playerSelectionDisplay = document.createElement('p');
let computerSelectionDisplay = document.createElement('p');
let roundResultDisplay = document.createElement('p');
let playerScoreDisplay = document.createElement('p');
let computerScoreDisplay = document.createElement('p');
let gameResultDisplay = document.createElement('p');


// Set base scores.

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    if (playerScore === 3 || computerScore === 3) {
      playerScore = 0;
      computerScore = 0;
      gameResultDisplay.textContent = '';
    }

    let playerSelection = e.target.textContent;
    let computerSelection= getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    playerSelectionDisplay.textContent = "You chose: " + playerSelection;
    computerSelectionDisplay.textContent = "Computer chose: " + computerSelection;
    roundResultDisplay.textContent = roundResult;

  if (roundResult === "You win!") {
    playerScore++;
  }else if (roundResult === "You lose!") {
    computerScore++;
  }


    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

  if (playerScore === 3) {
    gameResultDisplay.textContent = "Gratz! You won!";
  } else if (computerScore === 3) {
    gameResultDisplay.textContent = "Oh no! You lost!";
  }

  // Append elements to div 'results'
    let resultsDiv = document.getElementById('results');
    resultsDiv.appendChild(playerSelectionDisplay);
    resultsDiv.appendChild(computerSelectionDisplay);
    resultsDiv.appendChild(roundResultDisplay);
    resultsDiv.appendChild(playerScoreDisplay);
    resultsDiv.appendChild(computerScoreDisplay);
    resultsDiv.appendChild(gameResultDisplay);

    // Change the font size
    playerSelectionDisplay.style.fontSize = '14px';
    computerSelectionDisplay.style.fontSize = '14px';
    roundResultDisplay.style.fontSize = '14px';
    playerScoreDisplay.style.fontSize = '14px';
    computerScoreDisplay.style.fontSize = '14px';
    gameResultDisplay.style.fontSize = '14px';
  });
});

function getComputerChoice() {
  const rpsArray = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * rpsArray.length);
  return rpsArray[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

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

// game function is deprecated and the logic was incorporated into the eventListener