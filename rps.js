let playerScore = 0;
let computerScore = 0;
let games = 0;

function computerWin() {
  computerScore++;
}

function playerWin() {
  playerScore++;
}

function computerPlay() {
  let computerSelection = Math.floor(Math.random(100) * 3);
  switch (computerSelection) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "paper"
      break;
    case 2:
      computerSelection = "scissors"
      break;
  }
  return computerSelection;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', userPlay));

function userPlay(choice) {
  let playerSelection = (choice.target.id);
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  games++;
  console.log(games);
  if (games == 5) {
    if (playerScore == computerScore) {
      console.log(`It's a tie! You both earned ${playerScore} points.`)
    } else {
    playerScore > computerScore ? console.log(`Congratulations, you win with a score of ${playerScore} compared to ${computerScore}!`) : console.log(`Sorry, you lose with a score of ${playerScore} compared to ${computerScore}.`);
    }
    games++;
  }
  
}

function playRound(playerSelection, computerSelection) {
  const winningMessage = `You win! You picked ${playerSelection} and computer picked ${computerSelection}.`
  const losingMessage = `You lose, You picked ${playerSelection} and computer picked ${computerSelection}.`
  const container = document.querySelector('.item');
  const para = document.createElement('p');

  if (playerSelection == computerSelection) {
    container.appendChild(para).textContent = `Tie game. You both picked ${playerSelection}.`
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "paper") {
          computerWin()
          container.appendChild(para).textContent = losingMessage;
        } else {
          container.appendChild(para).textContent = winningMessage;
          playerWin()
        }
      break;
      case "paper":
        if (computerSelection == "rock") {
          container.appendChild(para).textContent = winningMessage;
          playerWin()
        } else {
          container.appendChild(para).textContent = losingMessage;
          computerWin()
        }
      break;
      case "scissors":
        if (computerSelection == "rock") {
          container.appendChild(para).textContent = winningMessage;
          playerWin()
        } else {
          container.appendChild(para).textContent = losingMessage;
          computerWin()
        }
      break;
    }
  }
}
