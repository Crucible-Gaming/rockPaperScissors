   let ro = "rock";
   let pa = "paper";
   let sc = "scissors";

function game(userInput) {

    const rpsArray = ["rock", "paper", "scissors"];
    const computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    console.log("User Input", userInput);
    console.log("Computer Choice", computerChoice);

    if (userInput === ro && computerChoice === pa) {
        console.log( "You lose!" );
    } else if (userInput === ro && computerChoice === ro) {
        console.log( "You tied!" );
    } else if (userInput === ro && computerChoice === sc) {
        console.log ( "You win!" );
    } else if (userInput === pa && computerChoice === sc) {
        console.log( "You lose!" );
    } else if (userInput === pa && computerChoice === pa) {
        console.log ( "You tied!" );
    } else if (userInput === pa && computerChoice === ro) {
        console.log( "You win!" );
    } else if (userInput === sc && computerChoice === ro) {
        console.log ( "You lose!" );
    } else if (userInput === sc && computerChoice === pa) {
        console.log ( "You win!" );
    } else if (userInput === sc && computerChoice === sc) {
        console.log ( "You tied!");
    }
}

const userInput = prompt( "Please choose rock, paper, or scissors." ).toLowerCase();
game(userInput);
/* Take the userInput and hold it until getComputerChoice
then compare those two
rock < paper < scissors < rock */