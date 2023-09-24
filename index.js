function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if(choice===0)
    {
        return "Rock";
    }
    else if(choice===1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function playRound()
{
    let userChoice = this.textContent; //Selects your move
    let computerSelection = getComputerChoice();
    let result = document.querySelector('.main > .result');
    let userScore = document.querySelector('#span1');
    let computerScore = document.querySelector('#span2');
    let winner = document.querySelector('.end');
    let user = userScore.textContent;
    let comp = computerScore.textContent;
    if( userChoice === "Rock" && computerSelection === "Paper")
    {
        result.textContent = "You lose! Paper beats Rock";
        computerScore.textContent = `${++comp}`;
    }
    else if( userChoice === "Paper" && computerSelection === "Scissors")
    {
        result.textContent = "You lose! Scissors beats Paper";
        computerScore.textContent = `${++comp}`;
    }
    else if( userChoice === "Scissors" && computerSelection === "Rock")
    {
        result.textContent = "You lose! Rock beats Scissors";
        computerScore.textContent = `${++comp}`;
    }
    else if( userChoice === "Rock" && computerSelection === "Scissors")
    {
        result.textContent = "You Win! Rock beats Scissors";
        userScore.textContent = `${++user}`;
    }
    else if( userChoice === "Paper" && computerSelection === "Rock")
    {
        result.textContent = "You Win! Paper beats Rock";
        userScore.textContent = `${++user}`;
    }
    else if( userChoice === "Scissors" && computerSelection === "Paper")
    {
        result.textContent = "You Win! Scissors beats Paper";
        userScore.textContent = `${++user}`;
    }
    else
    {
        result.textContent = "Its a draw";
    }
    if(user===5)
    {
        winner.textContent = "You Won!";
    }
    else if(comp===5)
    {
        winner.textContent = "You Lost!";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach( function(button) { button.addEventListener('click', playRound) } );