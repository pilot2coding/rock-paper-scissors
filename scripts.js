function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

function getComputerChoice(){
    let number = getRandomIntInclusive(1,3);
    let computerChoice = "";

    if(number===3){
        computerChoice = "rock";
    }else if(number===2){
        computerChoice = "paper";
    }else{
        computerChoice= "scissors";
    }

    return computerChoice;

    
}

document.addEventListener("DOMContentLoaded", () =>{
    let option = document.getElementById("option");

    option.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            playRound();
        }
    })
})

option.addEventListener("enter", playRound);

function getHumanChoice(){
    let humanChoice = document.getElementById("option").value;
    let message = document.getElementById('message');
        
    humanChoice = humanChoice.trim().toLowerCase();

    return humanChoice;
  
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let scoreNotice = document.getElementById('message');
    console.log(computerChoice);
    console.log(humanChoice);

    if(humanChoice.trim() === ""){
        message.innerText = "Not a valid option, dude";
        return null;
    };

    if ((humanChoice!=="rock") && (humanChoice !=="paper") && (humanChoice !== "scissors")){
        message.innerText = "Choose Rock, Paper or Scissors!"
        return null;
    };

    
    if((humanChoice=='rock' && computerChoice=='scissors') || (humanChoice=='scissors' && computerChoice=='paper') || (humanChoice == 'paper' && computerChoice == 'scissors')){
            round++;
            humanScore++;
            scoreNotice.innerText = `Round ${round}: YOU WIN! Score: ${humanScore} - ${computerScore}`;
        } else if (humanChoice==computerChoice){
            scoreNotice.innerText = `Round ${round}: TIE! Score: ${humanScore} - ${computerScore}`;
        } else {
            round ++;
            computerScore ++;
            scoreNotice.innerText = `Round ${round}: COMPUTER WINS! Score: ${humanScore} - ${computerScore}`;
        }
        
        if(round == 5){
            if(humanScore > computerScore){
                scoreNotice.innerText = `GAME OVER, YOU WIN! Score: ${humanScore} - ${computerScore}`
            } else {
                scoreNotice.innerText = `GAME OVER, YOU LOSE! Score: ${humanScore} - ${computerScore}`
            };
            
            round = 0;
            humanScore = 0;
            computerScore = 0;
            
        }
   
    
};