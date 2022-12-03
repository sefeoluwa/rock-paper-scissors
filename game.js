//Declare objects rock, paper, and scissors and assign them to buttons
let rock = document.getElementById('buttonR');
let paper = document.getElementById('buttonP');
let scissors = document.getElementById('buttonS');


//Create function to return a random choice between rock, paper, and scissors
const computerChoice = function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)] 
}


//let playerchoice;

    function playerSelection(){
        let playerChoice;
        if(document.getElementById('buttonP').clicked == true){
        return playerChoice = "paper"
        }
        else if(document.getElementById('buttonR').clicked == true){
            return playerChoice = "rock"
        }
        else if(document.getElementById('buttonS').clicked == true){
            return playerChoice = "scissors"
        }
        else{
            return ("Choose Your Game");
        }
    }



//create function that validates the winner of a game round

    function playRound(){
        if (playerSelection === computerChoice){
            return ("It's a tie!!!")
        } 

        else if (playerSelection === null){
            return ('Choose Your move')
        }
    
       else if ((playerSelection == "rock" && computerChoice == "scissors") ||
        (playerSelection == "paper" && computerChoice == "rock") || 
        (playerSelection == "scissors" && computerChoice == "paper")){
            return ("You win!!!")
        }
        
        else {
            return ("You lose! Paper beats rock")
        }     
    }

    
  //Create function for one game round.

function game(){
    //Use prompt to get user input
    //const getPlayerChoice = prompt("Choose rock, paper, or scissors" , "rock");

    //let playerChoice = getPlayerChoice;
    playRound();
      console.log("You chose " + playerSelection);
      console.log("Computer played" + computerChoice);
      console.log("***********************************");

      
}


//Create a new function that loops the game-round-function 5 times and logs results in console
 function gameRound(){
    for (let i = 0; i < 5; i++){
       game();
    }
 }

 //initiate game round with he click of a button
  

rock.addEventListener ('click' , game);
paper.addEventListener ('click' , game);
scissors.addEventListener ('click' , game);
 
 