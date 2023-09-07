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
        console.log("You lose! Paper beats Rock");
        return "loss";
    }
    else if( caseInsensitivePS === "paper" && computerSelection === "scissors")
    {
        console.log("You lose! Scissors beats Paper");
        return "loss";
    }
    else if( caseInsensitivePS === "scissors" && computerSelection === "rock")
    {
        console.log("You lose! Rock beats Scissors");
        return "loss";
    }
    else if( caseInsensitivePS === "rock" && computerSelection === "scissors")
    {
        console.log("You Win! Rock beats Scissors");
        return "win";
    }
    else if( caseInsensitivePS === "paper" && computerSelection === "rock")
    {
        console.log("You Win! Paper beats Rock");
        return "win";
    }
    else if( caseInsensitivePS === "scissors" && computerSelection === "paper")
    {
        console.log("You Win! Scissors beats Paper");
        return "win";
    }
    else
    {
        console.log("Its a draw");
        return "draw";
    }
}

function game()
{
    let user = 0, comp = 0;
    for(let i = 0; i<5; i++)
    {
        let userChoice = prompt("Choose between Rock, Paper and Scissors");
        let Result = playRound( userChoice, getComputerChoice());
        if(Result==="win")
        {
            user++;
        }
        else if(Result==="loss")
        {
            comp++
        }
    }
    if(comp>user)
    {
        console.log("Computer Wins")
    }
    else if(comp<user)
    {
        console.log("User Wins");
    }
    else
    {
        console.log("Its a tie");
    }
}

game();