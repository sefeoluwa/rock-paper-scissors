//declare objects rock,paper,scissors and attach them to their respective buttons
var player;
let computerChoice = document.getElementById('computerChoice');

let possibleChoice = document.querySelectorAll('button');
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
   computerChoice;
}))

//Create function to return a random choice between rock, paper, and scissors
computerChoice = getComputerChoice();

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random()*choices.length)] 
}
//console.log(computerChoice)
computerChoice.innerHTML = computerChoice;

function game(){
    player;
    getComputerChoice();
}

computerChoice = getComputerChoice();

function gameRound(){
    while (document.querySelectorAll('button') == true) {
         getComputerChoice()
    }
}




//declare a function to log scores 
let scores = document.getElementById('scores');

function gameRound(){
    if (playerChoice === computerChoice){
        return ("It's a tie!!!")
    } 

    else if (playerChoice === null){
        return ('Choose Your move')
    }

   else if ((playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") || 
    (playerChoice == "scissors" && computerChoice == "paper")){
        return ("You win!!!")
    }
    
    else {
        return ("You lose! Paper beats rock")
    }  
}

scores.innerHTML = gameRound();
