const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return computerChoice.toLowerCase();
}

function getPlayerInput() {
  let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return computerChoice.toLowerCase();
  //commented for speed rounds
  let playerChoice = prompt("Please select Rock, Paper or Scissors");
  while (!isValid(playerChoice)) {
    playerChoice = prompt(
      "OOPS, invalid. \nPlease select Rock, Paper or Scissors"
    );
  }
  return playerChoice.toLowerCase();
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

function playRound(playerChoice, computerChoice) {
  console.log(
    `player - ${playerChoice} 
computer - ${computerChoice}`
  );
  switch (playerChoice) {
    case "rock":
      if (computerChoice == "paper") {
        return "you lose, paper beats rock";
      } else if (computerChoice == "scissors") {
        return "You win! Rock beats scissors.";
      } else {
        return "tie: rock and rock";
      }
    case "paper":
      if (computerChoice == "scissors") {
        return "You lose! Scissors beats paper.";
      } else if (computerChoice == "rock") {
        return "You win! Paper beats rock.";
      } else {
        return "tie: paper and paper";
      }
    case "scissors":
      if (computerChoice == "rock") {
        return "You lose! Rock beats scissors.";
      } else if (computerChoice == "paper") {
        return "You win! Scissors beats paper.";
      } else {
        return "tie: scissors and scissors";
      }
  }
}

function game() {
  let i = 0;
  let playerScore = 0;
  let computerScore = 0;
  while (i < 5) {
    let result = playRound(getPlayerInput(), getComputerChoice());
    console.log(result);
    if (result.includes("lose")) {
      computerScore++;
    } else if (result.includes("win")) {
      playerScore++;
    }
    i++;
  }
  console.log(
    `You ${
      playerScore > computerScore ? "win" : "lose"
    }! You had a score of: ${playerScore}. The computer had: ${computerScore}`
  );
}

game();
