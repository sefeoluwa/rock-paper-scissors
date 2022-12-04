/*//declare objects rock,paper,scissors and attach them to their respective buttons
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
*/

let compChoice = document.getElementById('computerChoice');
let possibleChoice = document.querySelectorAll('button');
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
   compChoice;
}))

const game = () =>{
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const playGame = () => {
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');
        const playerOptions = [rockBtn,paperBtn,scissorsBtn];
        const computerOptions = ['rock','paper','scissors']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('#mvsLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                compChoice.innerHTML = computerChoice;

 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 5){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
    }


    // Function to decide winner
    const winner = (player,computer) => {
    const result = document.querySelector('.results');
    const playerScoreBoard = document.querySelector('#playerScore');
    const computerScoreBoard = document.querySelector('#computerScore');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
             }
         }
     }

     // Function to run when game is over
    const gameOver = (playerOptions,mvsLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('#results');
        const reloadBtn = document.querySelector('#reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        mvsLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
}

game();