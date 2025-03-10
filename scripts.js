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
    let roundNotice = document.getElementById('message');
    let scoreNotice = document.getElementById('score');
    let gameCondition = document.getElementById('gameCondition');
    let whoWhon = document.getElementById('who-won');
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
            roundNotice.innerText = `Round ${round}`;
            whoWhon.innerText = "YOU WIN!"
            scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
        } else if (humanChoice==computerChoice){
            if(round>0){
                roundNotice.innerText = `Round ${round}`;
                whoWhon.innerText = "IT'S A TIE!";
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
            } else {
                roundNotice.innerText = "Continue Playing...";
                whoWhon.innerText = "IT'S A TIE!";
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
            }
            
        } else {
            round ++;
            computerScore ++;
            roundNotice.innerText = `Round ${round}`;
            whoWhon.innerText = "COMPUTER WINS!"
            scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
        }
        
        if(round === 5){
            if(humanScore > computerScore){
                gameCondition.innerText = "GAME OVER"
                roundNotice.innerText = `YOU WIN!`
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`
                whoWhon.innerText = "";
            } else {
                gameCondition.innerText = "GAME OVER"
                roundNotice.innerText = `YOU LOSE!`
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`
                whoWhon.innerText = "";
            };
            document.getElementById('option').addEventListener("keydown", resetClick);
            
        }

        
   
    
};

function resetClick(event){
    if(event.key === "Enter"){
        resetGame();
        document.getElementById('option').removeEventListener('keydown', resetClick);
    }
};

function resetGame(){
    round = 0;
    humanScore = 0;
    computerScore = 0;
    document.getElementById("gameCondition").innerText = "";
    document.getElementById("message").innerText = "Welcome. Let's Play.";
    document.getElementById("score").innerText = "";
    document.getElementById("option").value = "";
    document.getElementById("who-won").innerText = ""; 
    

}