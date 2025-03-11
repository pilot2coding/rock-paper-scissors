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

document.addEventListener("DOMContentLoaded", () => {
    let options = document.querySelectorAll(".option");

    options.forEach(option => {
        option.addEventListener("click", (event) => {
            let humanChoice = getHumanChoice(event.target.id);
            playRound(humanChoice);
            return humanChoice;
        });
    });
});




function getHumanChoice(choice){
    let humanChoice = choice;
    return humanChoice;

    
};

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice){
    
    let computerChoice = getComputerChoice();
    let roundNotice = document.getElementById('message');
    let scoreNotice = document.getElementById('score');
    let gameCondition = document.getElementById('gameCondition');
    let whoWhon = document.getElementById('who-won');
    let robotText = document.getElementById("robot");
    let humanText = document.getElementById("human");
    let robotEmoji = document.getElementById("robot-text");
    let humanEmoji = document.getElementById("human-text");
    let emojiDictionary = {rock:"🪨", paper:"🧻", scissors:"✂️"};
    console.log(computerChoice);
    console.log(humanChoice);

   

    
    if((humanChoice=='rock' && computerChoice=='scissors') || (humanChoice=='scissors' && computerChoice=='paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
            round++;
            humanScore++;
            roundNotice.innerText = `Round ${round}`;
            whoWhon.innerText = "YOU WIN!"
            scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
            robotText.innerText = emojiDictionary[computerChoice];
            humanText.innerText = emojiDictionary[humanChoice];
            robotEmoji.innerText = "🤖";
            humanEmoji.innerText = "🧍🏽‍♂️";
        } else if (humanChoice==computerChoice){
            if(round>0){
                roundNotice.innerText = `Round ${round}`;
                whoWhon.innerText = "IT'S A TIE!";
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
                robotText.innerText = emojiDictionary[computerChoice];
                humanText.innerText = emojiDictionary[humanChoice];
                robotEmoji.innerText = "🤖";
                humanEmoji.innerText = "🧍🏽‍♂️";
            
            } else {
                roundNotice.innerText = "Continue Playing...";
                whoWhon.innerText = "IT'S A TIE!";
                scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
                robotText.innerText = emojiDictionary[computerChoice];
                humanText.innerText = emojiDictionary[humanChoice];
                robotEmoji.innerText = "🤖";
                humanEmoji.innerText = "🧍🏽‍♂️";
            
            }
            
        } else {
            round ++;
            computerScore ++;
            roundNotice.innerText = `Round ${round}`;
            whoWhon.innerText = "COMPUTER WINS!"
            scoreNotice.innerText = `Score: ${humanScore} - ${computerScore}`;
            robotText.innerText = emojiDictionary[computerChoice];
            humanText.innerText = emojiDictionary[humanChoice];
            robotEmoji.innerText = "🤖";
            humanEmoji.innerText = "🧍🏽‍♂️";
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
            let options = document.querySelectorAll(".option");
            options.forEach(option => {
                option.addEventListener("click", resetGame, {once: true});
            })
            
        }

        
   
    
};



function resetGame(){
    round = 0;
    humanScore = 0;
    computerScore = 0;
    document.getElementById("gameCondition").innerText = "";
    document.getElementById("message").innerText = "Welcome. Let's Play.";
    document.getElementById("score").innerText = "";
    document.getElementById("who-won").innerText = "";
    document.getElementById("robot-text").innerText = "";
    document.getElementById("human-text").innerText = "";
    document.getElementById("robot").innerText = "";
    document.getElementById("human").innerText = "";
    
    let options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.removeEventListener("click", resetGame);
    })

}