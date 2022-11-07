//Declare objects rock, paper, and scissors
const choices = ['rock', 'paper', 'scissors'];


//Create function to return a random choice between rock, paper, and scissors
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)] 
}

//create function that validates the winner of a game round

    function playRound(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
            return ("It's a tie!!!")
        } 
    
       else if ((playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
        (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") || 
        (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper")){
            return ("You win!!!")
        }
        
        else {
            return ("You lose! Paper beats rock")
        }
    }

  //Create function for one game round.

function game(){
    //Use prompt to get user input
    const getPlayerChoice = prompt("Choose rock, paper, or scissors" , "rock");

    let playerChoice = getPlayerChoice;
    let computerChoice = getComputerChoice();
      console.log("You chose " + playerChoice);
      console.log(`Computer played ${computerChoice}`);
      console.log(playRound(playerChoice, computerChoice));
      console.log("***********************************");
      
}


//Create a new function that loops the game-round-function 5 times and logs results in console
 function gameRound(){
    for (let i = 0; i < 5; i++){
       game();
    }
 }

 //initiate game round with he click of a button
 const btn = document.querySelector("#button")

btn.addEventListener ('click' , game);

 
 