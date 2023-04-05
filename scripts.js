let choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomChoice].toLowerCase();
  console.log(`The computer chose ${computerChoice}`);
  return computerChoice;
}
function playerSelection() {
  let playerChoicePrompt = prompt("Rock, Paper, or Scissors").toLowerCase();
  return playerChoicePrompt;
}
function playGame(computer, player) {
  if (player === "rock") {
    if (computer === "scissors") {
      console.log("You won! Rock beats scissors!");
    } else if (player === computer) {
      console.log("You tied!");
    } else {
      console.log("You lost! Rock loses to paper!");
    }
  }
  if (player === "paper") {
    if (computer === "rock") {
      console.log("You won! Paper beats rock!");
    } else if (player === computer) {
      console.log("You tied!");
    } else {
      console.log("You lost! Paper loses to scissors!");
    }
  }
  if (player === "scissors") {
    if (computer === "paper") {
      console.log("You won! Scissors beats paper!");
    } else if (player === computer) {
      console.log("You tied!");
    } else {
      console.log("You lost! Scissors loses to rock!");
    }
  }
}
for (let i = 0; i < 5; i++) {
    playGame(getComputerChoice(), playerSelection());
}
