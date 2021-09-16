function computerPlay() {
    let rand3 = Math.floor(Math.random()*3)
    if (rand3 === 0) {
        return "rock";
   } else if (rand3 === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ["The round is drawn!", 0, 0];
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ["You lose! Paper beats rock.", 0, 1];
        } else { 
            return ["You win! Rock beats scissors.", 1, 0];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return ["You win! Paper beats rock.", 1, 0];
        } else {
            return ["You lose! Scissors beats paper.", 0, 1];
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ["You lose! Rock beats scissors.", 0, 1];
        } else {
            return ["You win! Scissors beats paper.", 1, 0];
        }
    }
}

let playerScoreNumber = 0;
let computerScoreNumber = 0;
const declaration = document.querySelector(".declaration");
const playerScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
playerScore.textContent = playerScoreNumber;
computerScore.textContent = computerScoreNumber;

function addText([string, a, b]) {
    playerScoreNumber += a;
    computerScoreNumber += b;
    declaration.textContent = string;
    playerScore.textContent = playerScoreNumber;
    computerScore.textContent = computerScoreNumber;
}

const rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
    addText(playRound('rock', computerPlay()));
});

const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    addText(playRound('paper', computerPlay()));
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    addText(playRound('scissors', computerPlay()));
});


/*     
function game() {
    let ps1 = prompt("Round 1: Rock, paper, or scissors?", '').toLowerCase();
    let cs1 = computerPlay();
    let declaration1 = playRound(ps1, cs1).slice(0,1);
    let pScore1 = playRound(ps1, cs1).slice(1);
    alert(declaration1 + " The score is " + pScore1 + " to " + (1 - pScore1) + ".");
            
    let ps2 = prompt("Round 2: Rock, paper, or scissors?", '').toLowerCase();
    let cs2 = computerPlay();
    let declaration2 = playRound(ps2, cs2).slice(0,1);
    let pScore2 = -( -pScore1 - playRound(ps2, cs2).slice(1));
    alert(declaration2 + " The score is " + pScore2 + " to " + (2 - pScore2) + ".");

    let ps3 = prompt("Round 3: Rock, paper, or scissors?", '').toLowerCase();
    let cs3 = computerPlay();
    let declaration3 = playRound(ps3, cs3).slice(0,1);
    let pScore3 = -( -pScore2 - playRound(ps3, cs3).slice(1));
    alert(declaration3 + " The score is " + pScore3 + " to " + (3 - pScore3) + ".");
            
    let ps4 = prompt("Round 4: Rock, paper, or scissors?", '').toLowerCase();
    let cs4 = computerPlay();
    let declaration4 = playRound(ps4, cs4).slice(0,1);
    let pScore4 = -( -pScore3 - playRound(ps4, cs4).slice(1));
    alert(declaration4 + " The score is " + pScore4 + " to " + (4 - pScore4) + ".");
            
    let ps5 = prompt("Final round: Rock, paper, or scissors?", '').toLowerCase();
    let cs5 = computerPlay();
    let declaration5 = playRound(ps5, cs5).slice(0,1);
    let pScore5 = -( -pScore4 - playRound(ps5, cs5).slice(1));
    alert(declaration5); 

    if (pScore5 > 2.5) {
        alert("Congratulations! You win with a score of " + pScore5 + " to " + (5 - pScore5) + ".");
    } else if (pScore5 == 2.5) {
        alert("The game is drawn 2.5 to 2.5.");
    } else {
        alert("Too bad :( you have lost " + pScore5 + " to " + (5 - pScore5) + ".")
    }
}
*/
