function toggleMenu() {
  const menu = document.querySelector('.menu-links ');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// GO BACK TO TOP BUTTON

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ROCK, PAPER, SCISSORS GAME
function startGame() {
  // Display the game choices
  document.querySelector('.game-btn-container').innerHTML = `
    <button class="btn btn-color-2" onclick="playGame('rock')">Rock</button>
    <button class="btn btn-color-2" onclick="playGame('paper')">Paper</button>
    <button class="btn btn-color-2" onclick="playGame('scissors')">Scissors</button>
    <p id="result"></p>
  `;
}

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  document.getElementById("result").innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. <br> ${result}`;
}
