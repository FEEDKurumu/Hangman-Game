var gameStats = {
  wins: 0,
  losses: 0,
  guessesLeft: 10
}

var wordList = ["words"];
var letters;
var currWord;
var currWordBlank = [];
var incorrectGuesses = [];

function updateBlank() {
  document.getElementById("currWordBlank").innerHTML = currWordBlank.join(" ");
}

function updateWinLoss() {
  document.getElementById("wins").innerHTML = gameStats.wins;
  document.getElementById("losses").innerHTML = gameStats.losses;
}

function updateGuesses() {
  document.getElementById("guessesLeft").innerHTML = gameStats.guessesLeft;
  document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses.join(" ");
}

function resetGame() {
  gameStats.guessesLeft = 10;
  letters = "qwertyuiopasdfghjklzxvbnm".split("");
  currWordBlank = [];
  incorrectGuesses = [];
  updateGuesses();
  currWord = wordList[Math.floor(Math.random() * wordList.length)]

  for (var i = 0; i < currWord.length; i++) {
    currWordBlank.push("_");
  }
  updateBlank();
}

document.onkeyup = function(event) {
  var guess = event.key;
  if (letters.indexOf(guess) >= 0) {
    letters.splice(letters.indexOf(guess), 1)

    if (currWord.indexOf(guess) >= 0) {
      for (var i = 0; i < currWord.length; i++) {
        if (guess === currWord[i]) {
          currWordBlank[i] = currWord[i];
          updateBlank();
        }
      }
    }
    else {  
      incorrectGuesses.push(guess);
      gameStats.guessesLeft--;
      updateGuesses();
    }
    console.log(letters);
    console.log(incorrectGuesses);
    console.log(gameStats.guessesLeft);

    if (gameStats.guessesLeft === 0) {
      resetGame();
      gameStats.losses++
      updateWinLoss();
    }

    if (currWordBlank.indexOf("_") < 0) {
      gameStats.wins++;
      updateWinLoss();
      resetGame();
    }
  }
}

resetGame();

// var wordList list of words
// var currWord = list[Math.floor(Math.random() * list.length)] for random
// var currWordBlank = [];
// for (var i = 0; i < wordList.length; i++) {
//  currWordBlank.push("_")
// }
// evals to ["_", "_", etc]
// wordList.join(" ")
// evals to _ _ _ _ _  display this
// on key press:
// var guess = input
// if guess in letters array -> remove letter from letters array 
// if guess is incorrect -> add to already guessed list
// if guess is correct
// for (var i = 0; i < currWord; i++) {
//  if (guess === currWord[i]) {
//    currWordBlank[i] = guess  
//  }  
// }
// guesses left -1. if guesses left = 0, then losses+1 and reset game
// when no more _ are left, then wins+1 and reset game
// 