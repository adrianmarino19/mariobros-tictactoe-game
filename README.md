<p align="center">
  <p align="center">
  <img src="https://cdn.pixabay.com/photo/2021/02/11/15/40/mario-6005703_1280.png", width = "15%">
<h3 align="center">Super Mario  Tic Tac Toe</h3>
<p align="center"><b>By:</b> Adrian Marino</p>
<p align="center"><b>Supervisors:</b> Professor Carlos Izquierdo</b></p>



<body>
    <h1>Mario's Nerdy Tic Tac Toe Game!</h1>
        <p>This project consists of a Mario esque Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game is only playable between two people (unfortunately!) and displays a random programming joke when a player wins. If the game is drawn, as a punishment Mario will not tell you a joke :).</p>
        <p>This project gave me the chance to get my feet wet with JavaScript (but not going down the rabbit hole) while focusing on HTML and CSS as well.</p>
    
    <h2>Link to the project</h2>
        <p>Used Netlify: <a href="https://mario-tic-tac-toe.netlify.app"> https://mario-tic-tac-toe.netlify.app</a> </p>
   
    <h2>Technical Details</h2>
        <p>I divided the project into three different files: index.html, style.css, and game_logic.js. </p>

    <h3>index.html</h3>
        <p> 
            The HTML file provides the overall structure and layout for the project. It includes a game board, a header displaying the current player or game status, a restart button, and a hidden area for displaying a joke when a player wins.
        </p>
            
    <h3>style.css</h3>
        <p>
            The CSS file provides the styling for the project. It uses custom CSS properties for color, implements a retro-themed font, and uses a Mario background image. It also includes CSS animations for blinking text and responsive layout adjustments.
        </p>

    <h3>game_logic.js</h3>
        <p>
            The file includes functions to handle user clicks on the board, update the board with X's or O's, check for a winner, and reset the game when it's over. The functions are called when the user clicks on the board. The JavaScript file contains the following functions that handle the game logic, user interactions, and fetching jokes from an external API:
        </p>
        <ul>
            <li>Initialize variables to target HTML elements, player indicators (X and O), and an array representing the game board.</li>
            <li>startGame function to add event listeners to each box in the game board.</li>
            <li>boxClicked function to handle the following:
                <ul>
                    <li>Check if the clicked box is empty.</li>
                    <li>Add the current player's symbol to the box.</li>
                    <li>Check for a win or draw.</li>
                    <li>Display a joke when a player wins.</li>
                </ul>
            </li>
            <li>playerHasWon function to check for winning conditions.</li>
            <li>restart function to reset the game state, triggered by the restart button.</li>
            <li>getProgrammingJoke async function to fetch a programming joke from an API.</li>
            <li>startGame function call to initialize the game.</li>
        </ul>

    <br>
    <h2>Improvements for a 2.0 Version</h2>
        <p>For a 2.0 version, I would consider implementing the following improvements:</p>
    <ul>
        <li><strong>Create an AI </strong>that plays tic-tac-toe!</li>
        <li>Include a <strong>landing page</strong> initially, where you would select player 1 or player 2 (like this <a href="https://www.youtube.com/watch?v=Na3yfvl40PI"> link</a>, first 20 seconds). Then if player 1 was chosen, the player would play against an AI.</li>
            <ul>
                <li>I wanted the landing page to be as smooth, responsive as the one of the actual 1985 game (check link).</li>
                <li> If the AI were to beat you, thought about displaying a sinister quote about machines taking over the world.</li></li>
            </ul>
        <li><strong>Smoother animation</strong> when Mario appears and says something.</li>
        <li>Include a weather API where the background would change based on the weather in Madrid (including sunny, cloudy, raining, and temperature displayed in another corner), yet it was too complex to find a relevant background or do this in a smooth way.</li></li>
        <ul>
            <li>Include sounds depending on the weather.</li>
        </ul>
        <li>Allow players to play multiple rounds. Both in single and multiplayer.</li>
        <li>Add a feature to track the score between players over multiple rounds.</li>
        <li>More, more, more animations. It needs to be more alive. More game-like. </li>
        <br>
            </ul>

        <p>Bugs:
            <ul>
                <li>Even after a player wins, you can continue putting Xs and Os, getting different quotes each time.</li>
                <li>Jokes can be too long for page. </li>
            </ul>
    </body>
</html>
