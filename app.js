const CHOICES = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll(".choice");
const playerScoreLabel = document.querySelector(".player-score");
const computerScoreLabel = document.querySelector(".computer-score");
const resLabel = document.querySelector(".result");
const finalResultLabel = document.querySelector(".final-res");
const playAgainBtns = document.querySelectorAll(".play-again");

buttons.forEach((button) => button.addEventListener("click", playRound));
playAgainBtns.forEach((button) => button.addEventListener("click", newGame));

let playerScore = 0;
let computerScore = 0;

function newGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreLabel.textContent = 0;
  computerScoreLabel.textContent = 0;
  playAgainBtns.forEach((button) => (button.hidden = true));
  buttons.forEach((button) => (button.disabled = false));
  finalResultLabel.textContent = null;
  resLabel.textContent = null;
}

function playRound() {
  let playerChoice = this.textContent.toLowerCase();
  let computerChoice = getComputerChoice();
  console.log(`player- ${playerChoice}  computer- ${computerChoice}`);
  let res = determinRes(playerChoice, computerChoice);

  if (res == 1) {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (res == 0) {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  }

  if (playerScore == 5 || computerScore == 5) {
    finalResultLabel.textContent =
      playerScore == 5
        ? "You win, would you like to play again?"
        : "You lose, would you like to play again?";

    buttons.forEach((button) => (button.disabled = true));
    playAgainBtns.forEach((button) => (button.hidden = false));
  }
}

function getComputerChoice() {
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return computerChoice.toLowerCase();
}

function isValid(playerChoice) {
  if (
    playerChoice.match(/rock/i) ||
    playerChoice.match(/paper/i) ||
    playerChoice.match(/scissors/i)
  ) {
    return true;
  }
  return false;
}
function determinRes(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice == "paper") {
        resLabel.textContent = "you lose, paper beats rock";
        return 0;
      } else if (computerChoice == "scissors") {
        resLabel.textContent = "You win! Rock beats scissors.";
        return 1;
      } else {
        resLabel.textContent = "tie: rock and rock";
        return 2;
      }
    case "paper":
      if (computerChoice == "scissors") {
        resLabel.textContent = "You lose! Scissors beats paper.";
        return 0;
      } else if (computerChoice == "rock") {
        resLabel.textContent = "You win! Paper beats rock.";
        return 1;
      } else {
        resLabel.textContent = "tie: paper and paper";
        return 2;
      }
    case "scissors":
      if (computerChoice == "rock") {
        resLabel.textContent = "You lose! Rock beats scissors.";
        return 0;
      } else if (computerChoice == "paper") {
        resLabel.textContent = "You win! Scissors beats paper.";
        return 1;
      } else {
        resLabel.textContent = "tie: scissors and scissors";
        return 2;
      }
  }
}

// function game() {
//   let i = 0;
//   let playerScore = 0;
//   let computerScore = 0;
//   let res = "Tie";
//   while (i < 5) {
//     let roundRes = playRound(getPlayerInput(), getComputerChoice());
//     console.log(roundRes);
//     if (roundRes.includes("lose")) {
//       computerScore++;
//     } else if (roundRes.includes("win")) {
//       playerScore++;
//     }
//     i++;
//   }

//   if (playerScore > computerScore) {
//     res = "Win";
//   } else if (playerScore < computerScore) {
//     res = "Lose";
//   }
//   console.log(
//     res != "Tie"
//       ? `You ${res}! You had a score of: ${playerScore}. The computer had: ${computerScore}`
//       : `It was a ${res}! You had a score of: ${playerScore}. The computer had: ${computerScore}`
//   );
// }

//game();
