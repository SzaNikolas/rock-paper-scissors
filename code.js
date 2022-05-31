let gameTitle = document.createElement("div");
gameTitle.classList.add("title");
gameTitle.textContent = "Rock Paper Scissors";
document.body.appendChild(gameTitle);

let playerScore = 0;
let computerScore = 0;

const score = document.createElement("div");
score.textContent = "YOU " + playerScore + " X " + computerScore + " COM";
score.classList.add("score");
document.body.appendChild(score);

const divOne = document.createElement("div");
divOne.classList.add("result");
divOne.textContent = "Choose your weapon !";
document.body.appendChild(divOne);

function update() {
    score.textContent = "YOU " + playerScore + " X " + computerScore + " COM";
    if (playerScore == 5) {
        alert("Congratulations, you won !");
        location.reload();
    } else if (computerScore ==5) {
        alert("You lost! Maybe next time ?");
        location.reload();
    }
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random() *3 + 1);

    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection === computerPlay()) {
        divOne.textContent = "Match!";
    } else if (playerSelection === "rock" && computerPlay() === "paper") {
        divOne.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        update ();
    } else if (playerSelection === "rock" && computerPlay() === "scissors") {
        divOne.textContent = "You Won! Rock beats Scissors";
        playerScore++;
        update ();
    } else if (playerSelection === "paper" && computerPlay() === "rock") {
        divOne.textContent = "You Won! Paper beats Rock";
        playerScore++;
        update ();
    } else if (playerSelection === "paper" && computerPlay() === "scissors") {
        divOne.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
        update ();
    } else if (playerSelection === "scissors" && computerPlay() === "rock") {
        divOne.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        update ();
    } else if (playerSelection === "scissors" && computerPlay() === "paper") {
        divOne.textContent = "You Won! Scissors beats Paper";
        playerScore++;
        update ();
    } 
  }


let allBtn = document.createElement("div");
allBtn.classList.add("allBtn");
document.body.appendChild(allBtn);

let btnOne = document.createElement("button");
btnOne.classList.add("btn");
btnOne.innerHTML = "✊";
btnOne.addEventListener("click", function() {playRound("rock",computerPlay); });
allBtn.appendChild(btnOne);
  
let btnTwo = document.createElement("button");
btnTwo.classList.add("btn");
btnTwo.innerHTML = "🤚";
btnTwo.addEventListener("click", function() {playRound("paper",computerPlay); });
allBtn.appendChild(btnTwo);
  
let btnThree = document.createElement("button");
btnThree.classList.add("btn");
btnThree.innerHTML = "✌️";
btnThree.addEventListener("click", function() {playRound("scissors",computerPlay); });
allBtn.appendChild(btnThree);
