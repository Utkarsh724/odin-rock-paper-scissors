function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if(choice===0)
    {
        return "rock";
    }
    else if(choice===1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound( playerSelection,computerSelection )
{
    let caseInsensitivePS = playerSelection.toLowerCase();
    if( caseInsensitivePS === "rock" && computerSelection === "paper")
    {
        return "You lose! Paper beats Rock";
    }
    else if( caseInsensitivePS === "paper" && computerSelection === "scissors")
    {
        return "You lose! Scissors beats Paper";
    }
    else if( caseInsensitivePS === "scissors" && computerSelection === "rock")
    {
        return "You lose! Rock beats Scissors";
    }
    else if( caseInsensitivePS === "rock" && computerSelection === "scissors")
    {
        return "You Win! Rock beats Scissors";
    }
    else if( caseInsensitivePS === "paper" && computerSelection === "rock")
    {
        return "You Win! Paper beats Rock";
    }
    else if( caseInsensitivePS === "scissors" && computerSelection === "paper")
    {
        return "You Win! Scissors beats Paper";
    }
    else
    {
        return "Its a draw"
    }
}



