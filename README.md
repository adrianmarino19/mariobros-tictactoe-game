<p align="center">
  <p align="center">
  <img src="https://cdn.pixabay.com/photo/2021/02/11/15/40/mario-6005703_1280.png", width = "15%">
<h3 align="center">Super Mario  Tic Tac Toe</h3>
<p align="center"><b>By:</b> Adrian Marino</p>
<p align="center"><b>Supervisors:</b> Professor Carlos Izquierdo</b></p>


<h1>Mario's Nerdy Tic Tac Toe Game!</h1>
        <p>This project consists of a Mario esque Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game is only playable between two people (unfortunately!) and displays a random programming joke when a player wins. If the game is drawn, as a punishment Mario will not tell you a joke :).</p>
        <p>This project gave me the chance to get my feet wet with JavaScript (but not going down the rabbit hole) while focusing on HTML and CSS as well.</p>
        
## Link to the Project
Used Netlify: [https://mario-tic-tac-toe.netlify.app](https://mario-tic-tac-toe.netlify.app)

## Technical Details

I divided the project into three different files: `index.html`, `style.css`, and `game_logic.js`.

### index.html

The HTML file provides the overall structure and layout for the project. It includes a game board, a header displaying the current player or game status, a restart button, and a hidden area for displaying a joke when a player wins.

### style.css

The CSS file provides the styling for the project. It uses custom CSS properties for color, implements a retro-themed font, and uses a Mario background image. It also includes CSS animations for blinking text and responsive layout adjustments.

### game_logic.js

The file includes functions to handle user clicks on the board, update the board with X's or O's, check for a winner, and reset the game when it's over. The JavaScript file contains the following functions that handle the game logic, user interactions, and fetching jokes from an external API:

- Initialize variables to target HTML elements, player indicators (X and O), and an array representing the game board.
- `startGame` function to add event listeners to each box in the game board.
- `boxClicked` function to handle user clicks, checking for win or draw conditions, and displaying a joke.
- `playerHasWon` function to check for winning conditions.
- `restart` function to reset the game state, triggered by the restart button.
- `getProgrammingJoke` async function to fetch a programming joke from an API.
- `startGame` function call to initialize the game.

## Improvements for a 2.0 Version

For a 2.0 version, I would consider implementing the following improvements:

- Create an AI that plays tic-tac-toe.
- Include a landing page for selecting player 1 or player 2.
- Implement smoother animations.
- Include a weather API for changing the background based on weather in Madrid.
- Allow players to play multiple rounds in single and multiplayer.
- Add a feature to track scores between players over multiple rounds.
- Add more animations and game-like features.

Bugs:
- Even after a player wins, you can continue putting Xs and Os.
- Jokes can be too long for the page.
