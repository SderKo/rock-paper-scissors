
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
        return "Rock";
    }else if(computerChoice === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        return "You win ! Scissors beats Paper";
    }else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        return "You win ! Paper beats Rock";
    }else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        return "You win ! Rock beats Scissors";
    }else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie !";
    }else {
        return "You lost !";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors ? : ");
        console.log(`Your choice is ${playerSelection}`);
        computerSelection = computerPlay();
        console.log(`The computer's choice is ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result === "You lost !") {
            scoreComputer += 1;
        }else if(result.includes("You win")) {
            scorePlayer += 1;
        }
    }
    console.log(`The score of the player is ${scorePlayer}`);
    console.log(`The score of the computer is ${scoreComputer}`);
    if(scorePlayer > scoreComputer) {
        console.log("The player win the game !");
    }else if (scorePlayer < scoreComputer) {
        console.log("The computer win the game !");
    }else {
        console.log("Tie !");
    }
   
}

game()
