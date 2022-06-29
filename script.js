playerWin = 0
computerWin = 0

function computerPlay(){
    let rps = ['Rock', 'Paper', 'Scissor'];
    return rps[Math.floor(Math.random()*rps.length)];
}
// take in user choice and computer choice and return who won while incrementind the counter
function playRound(userChoice, compChoice){
    if((userChoice === 'Rock') && (compChoice === 'Scissor')){
        playerWin++;
        return 'You Win!' + userChoice +' beats ' + compChoice;
    }
    else if ((userChoice === 'Paper') && (compChoice === 'Rock')){
        playerWin++;
        return 'You Win! '+ userChoice + ' beats '+ compChoice;
    }
    else if ((userChoice === 'Scissor') && (compChoice === 'Rock')){
        playerWin++;
        return 'You Win! '+ userChoice + ' beats '+ compChoice;
    }
    else if( userChoice === compChoice){
        return("It's a tie! " + 'You chose ' +userChoice + ' and the computer chose '+ compChoice);
    }
    else{
        computerWin++;
        return ('You Lose! '+ compChoice + ' beats ' + userChoice);
    }
}

//check who has won 5 games then display the winner
function checkWinner(){
    if (playerWin === 5){
        // disable the buttons so that the user cannot continue playing
        let btn = document.querySelectorAll('button');
        btn.forEach(butt => {
        butt.disabled = true;
        })
        return "Congratulations! You beat the computer five times!"
    }
     if(computerWin === 5){
        let btn = document.querySelectorAll('button');
        btn.forEach(butt => {
        butt.disabled = true;
        })
        return "You Lose! The computer beat you five times!"
    }

}

function startGame(){
    let playerChoice;
    let computerChoice = computerPlay();

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            playerChoice = button.className;
            computerChoice = computerPlay()
            roundWinner.textContent = playRound(playerChoice, computerChoice);
            playerText.textContent = ("Player Win Total: " + playerWin);
            computerText.textContent = ("Computer Win Total: " + computerWin);
            gameWinner.textContent = checkWinner()
        })

    })
}
// select the main container of the body & create a new div to place below the container 
let mainContainer = document.querySelector('.container');
let resultsContainer = document.createElement('div');
mainContainer.appendChild(resultsContainer);

// create paragraphs and text to display running score 
let playerScore = document.createElement('p');
let computerScore = document.createElement('p');

let playerText = document.createTextNode("Player Win Total: " + playerWin);
let computerText = document.createTextNode("Computer Win Total: " + computerWin);
// append text to the score paragaph, and score paragraph to the results container
playerScore.appendChild(playerText);
computerScore.appendChild(computerText);
resultsContainer.appendChild(playerScore);
resultsContainer.appendChild(computerScore);

// display results of a given round - This will be passed data in the startGame() by playRound() passsed to it
let roundWinner = document.createElement('p');
resultsContainer.appendChild(roundWinner);

// display the winner of the 5 games
let gameWinner = document.createElement('p');
resultsContainer.appendChild(gameWinner);




startGame();