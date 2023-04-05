let choices = [
    'rock',
    'paper',
    'scissors'
]

function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    playerChoice = playerChoice.toLowerCase();
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = (choices[randomChoice].toLowerCase());
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
    getPlayerChoice();
    // need to prompt user to choose rock, paper, scissors
}
