let choices = [
    'rock',
    'paper',
    'scissors'
]

function getComputerChoice(){
    // need to get a random choice between rock, paper, scissors
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = (choices[randomChoice].toLowerCase());
    return computerChoice;
}
function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
    // need to prompt user to choose rock, paper, scissors
}

if(playerChoice === 'rock'){
    if(computerChoice === 'scissors'){
        console.log('You win!');
    } else{
        console.log('You lost!');
    }
}
if(playerChoice === 'paper'){
    if(computerChoice === 'rock'){
        console.log('You win!');
    } else{
        console.log('You lost!');
    }
}
if(playerChoice === 'scissors'){
    if(computerChoice === 'paper'){
        console.log('You win!');
    } else{
        console.log('You lost!');
    }
}

