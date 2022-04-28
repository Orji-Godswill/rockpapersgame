
// alert("Connected")

function multiplier(number) {
    console.log(number * 2);
}

function displayResult() {
    // onclick="alert('rock')"
    const gameComputer = document.getElementByClassName('element');
    document.getElementById("result").innerHTML = "You played rock!";
}

// const element = document.getElementsByClassName("element");
// const randomElement = element[Math.floor(Math.random() * element.length)];
// console.log(randomElement);

function playRock() {
    const x = document.getElementById("rock");
    const y = document.getElementById('result').innerHTML = 'rock';
}

function playPaper() {
    const x = document.getElementById("paper");
    const y = document.getElementById('result').innerHTML = 'paper';
}

function playScissors() {
    const x = document.getElementById("scissors");
    const y = document.getElementById('result').innerHTML = 'scissors';
}


function computerPlay() {
    const myGame = ['rock', 'paper', 'scissors'];
    const randomGame = myGame[(Math.random() * myGame.length) | 0];
    const game = document.getElementById("computergame").innerHTML = randomGame;
    // console.log(randomGame)
}

function winner() {
    const myScore = document.getElementById('result').innerHTML;
    const computerScore = document.getElementById("computergame").innerHTML;
    const displayScore = document.getElementById("subwinner");
    if (myScore === "rock" && computerScore === "paper") {
        displayScore.innerHTML = "Paper wins Rock - Computer won";
    } else if (myScore === "rock" && computerScore === "scissors") {
        displayScore.innerHTML = "Rock wins Scissors - You won";
    } else if (myScore === "paper" && computerScore === "scissors") {
        displayScore.innerHTML = "Scissors wins Paper - Computer won";
    } else if (myScore === "paper" && computerScore === "rock") {
        displayScore.innerHTML = "Paper wins Rock - You won";
    } else if (myScore === "scissors" && computerScore === "paper") {
        displayScore.innerHTML = "Scissors wins Paper - You won";
    } else if (myScore === "scissors" && computerScore === "rock") {
        displayScore.innerHTML = "Rock wins Scissors - Computer won";
    } else (displayScore.innerHTML = "Tie - No winner")
}


// const refreshButton = document.querySelector('.refresh-btn');
// const refreshPage = () => {
//     location.reload();
// }
// refreshButton.addEventListener('click', refreshPage)


let myinitialScore = 1;
let computerinitialScore = 1;
function currentScore() {
    const myGoal = document.getElementById("myscore");
    computerGoal = document.getElementById("computerscore");
    const displayedResult = document.getElementById("subwinner").innerHTML;
    if (displayedResult.includes("You won")) {
        myGoal.innerHTML = myinitialScore++;
    } else if (displayedResult.includes("Computer won")) {
        computerGoal.innerHTML = computerinitialScore++;
    } else (console.log("No winner"))
}