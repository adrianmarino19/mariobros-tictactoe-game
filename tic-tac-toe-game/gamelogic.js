// DOM elements
let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

// Get the --winning-blocks CSS variable
let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

// Player symbols
const O_TEXT = "O";
const X_TEXT = "X";

// Game state
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

// Attach event listeners to start the game
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

// Handle box click event
async function boxClicked(e) {
  const id = e.target.id;

  // Check if the box is empty
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    // Check for a win
    if (playerHasWon() !== false) {
      playerText.innerHTML = `${currentPlayer} has won!`;
      playerText.classList.add("blink");
      let winning_blocks = playerHasWon();

      // Highlight the winning blocks
      winning_blocks.map(
        (box) => (boxes[box].style.backgroundColor = winnerIndicator)
      );

      // Show Mario image and the joke
      document.getElementById("marioImage").style.display = "block";
      const factText = document.getElementById("factText");
      const marioTextBubble = document.getElementById("marioTextBubble");
      factText.innerText = await getProgrammingJoke();
      marioTextBubble.style.display = "block";
      return;
    } else if (spaces.every((space) => space !== null)) {
      // Check for a draw
      playerText.innerHTML = "DRAW!";
      playerText.classList.add("blink");
      document.getElementById("marioImage").style.display = "block";
      const factText = document.getElementById("factText");
      const marioTextBubble = document.getElementById("marioTextBubble");
      factText.innerText = "Only winners get jokes...";
      marioTextBubble.style.display = "block";
    } else {
      // Change the current player
      currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
  }
}

// Winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Function to check if a player has won the game
function playerHasWon() {
  // Loop through the winning combinations
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    // Check if the current combination has the same player mark
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c]; // Return the winning combination
    }
  }
  return false; // Return false if no winning combination is found
}

// Add an event listener for the restart button
restartBtn.addEventListener("click", restart);

// Function to restart the game
function restart() {
  spaces.fill(null); // Clear the spaces array

  // Clear the content and background color of each box
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  // Remove the blink effect and reset the player text
  playerText.classList.remove("blink");
  playerText.innerHTML = "Mario's Nerdy Tic-Tac-Toe";
  currentPlayer = X_TEXT; // Reset the current player
  // Hide the Mario image and text bubble
  document.getElementById("marioImage").style.display = "none";
  document.getElementById("marioTextBubble").style.display = "none";
}


// Async function to get a programming joke from an API
async function getProgrammingJoke() {
  try {
    // Fetch a joke from the API
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    // Parse the response as JSON
    const jokeData = await response.json();

    // Check if the joke type is a single-liner or a two-part joke
    if (jokeData.type === "single") {
      // Return the single-liner joke
      return jokeData.joke;
    } else {
      // Return the two-part joke, combining the setup and delivery
      return `${jokeData.setup} ${jokeData.delivery}`;
    }
  } catch (error) {
    // Log the error and return a custom error message
    console.error("Error fetching joke:", error);
    return "Oops, something went wrong. Please try again!";
  }
}

// Call the startGame function to initialize the game
startGame();