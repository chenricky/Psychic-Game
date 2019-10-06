
var userWins = 0;
var computerWins = 0;
var ties = 0;
var userGuessChar;
var characters = "abcdefghijklmnopqrstuvwxyz";
var computerGuess;


var userGuess = document.getElementById("userGuess-display");
var computerRandom = document.getElementById("computerGuess-display");
var somethingUserWinsCount = document.getElementById("usersWinsCounts-display");
var somethingComputerWinsCounts = document.getElementById("computerWinsCounts-display");
var somethingtieCounts = document.getElementById("tieCounts-display");


document.onkeyup = function(event) {
    userGuessChar = event.key;
    userGuess.innerHTML = "your guess of letter is: " + userGuessChar;
    console.log(userGuess);
    console.log("User typed the character: " + userGuessChar);

    computerGuess = characters[Math.floor(Math.random()*characters.length)];
    computerRandom.innerHTML = "Computer's guess of letter is: " + computerGuess;
    console.log(computerRandom);
    console.log("computer character is: " + computerGuess);

    if (userGuessChar === computerGuess) {
        userWins = userWins + 1;
    }
    
    else if (userGuessChar != computerGuess) {
        computerWins = computerWins +1;
    }
    
    else {
        ties = ties + 1;
    }

    somethingUserWinsCount.innerHTML = "User wins count is: " + userWins;
    somethingComputerWinsCounts.innerHTML = "Computer wins count is: " + computerWins;
    somethingtieCounts.innerHTML = "Ties count is: " + ties;
        
    console.log("user wins count is: " + userWins);
    console.log("computer wins count is: " + computerWins);
    console.log("ties count is: " + ties);
}




