# Pig_game

- This is a simple dice game implemented in JavaScript. The game consists of two players, each taking turns to roll a dice and accumulate points. The first player to reach a predefined score threshold wins the game.

# How to play
1 - Open index.html in your web browser. <br>
2 - Enter the score threshold for winning the game in the input field. <br>
3 - Click the "New Game" button to start a new game. <br> 
4 - Players take turns to roll the dice by clicking the "Roll Dice" button. <br>
5 - Each roll accumulates the corresponding number of points for the current player. <br> 
6 - If the player rolls a 1, their turn ends and they lose all the points accumulated in that turn. <br>
7 - The player can choose to hold their current score by clicking the "Hold" button. Their turn ends, and their current score is added to their total score. <br>
8 - The first player to reach the score threshold wins the game. <br>
# Implementation details
- The game is implemented using HTML, CSS, and JavaScript.<br>
-  The game logic is implemented in the app.js file, which is linked to the index.html file. <br>
-  The game uses event listeners to detect when the user clicks the buttons, and updates the game state accordingly. <br>
-  The game state is stored in variables such as currentPlayerScore and turnPlayerOne, which are updated throughout the game.

