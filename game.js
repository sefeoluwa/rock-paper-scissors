//create function to display computer and player choice.
let compChoice = document.getElementById('computerChoice');
let possibleChoice = document.querySelectorAll('button');
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
   compChoice;
}))

//creates a function for the full game round

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
         
        // function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('#mvsLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                 
              //randomly generate computer choice
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


    // Function to decide and display winner
    const winner = (player,computer) => {
    const result = document.querySelector('.results');
    const playerScoreBoard = document.querySelector('#playerScore');
    const computerScoreBoard = document.querySelector('#computerScore');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = "It's a tie!"
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'You won, yay!!!'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Wins';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You won, yay!!!';
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
            result.textContent = 'You won, yay!!!';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
             }
         }
     }

     // Function to run when game is over
    const gameOver = (playerOptions,mvsLeft) => {
 
        const chooseMove = document.querySelector('.moves');
        const result = document.querySelector('#results');
        const reloadBtn = document.querySelector('#reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        mvsLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game!'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game!';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = "It's a tie!";
            result.style.color = 'grey'
        }
        //click restarts the game
        reloadBtn.innerText = 'Restart';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
}
game();