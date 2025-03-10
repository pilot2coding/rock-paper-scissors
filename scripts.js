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

