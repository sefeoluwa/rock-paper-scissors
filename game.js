//Declare objects rock, paper, and scissors
const choices = ['rock', 'paper', 'scissors'];


//Create function to return a random choice between rock, paper, and scissors
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)] 
}

//Use prompt to get user input
const getPlayerChoice = prompt("Choose rock, paper, or scissors" , "rock");

//Create function for one game round. The function should return a string that declares a winner. 
function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return ("It's a tie!!!")
    } 

   else if (playerChoice.toLowerCase() === "rock"){
        return ("You win!!!")
     }
     else if (playerChoice === "scissors"){
            return ("You win!!!")
        }
    
    else {
        return ("You lose! Paper beats rock")
    }
}

let playerChoice = getPlayerChoice;
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
console.log("You chose " + playerChoice);

//Create a new function that loops the game-round-function 5 times and logs results in console
  var newRound = confirm("Play another round");

 