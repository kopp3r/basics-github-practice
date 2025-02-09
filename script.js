var winCount = 0;

var guessOptions = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  if (randomInteger == 0) {
    return "banana";
  } else if (randomInteger == 1) {
    return "chisel";
  } else if (randomInteger == 2) {
    return "faucet";
  }
};

var prevWord = "whatever";

var noRepeatGuessOptions = function () {
  word1 = prevWord;
  while (word1 == prevWord) {
    word1 = guessOptions();
  }
  prevWord = word1;
  return word1;
};

var correctsToWin = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return 2;
  } else if (randomInteger == 1) {
    return 3;
  } else if (randomInteger == 2) {
    return 4;
  }
};

var staticCorrectsToWin = 1;

var isGuessCorrect = function (guess, guessed) {
  if (guess == guessed) {
    winCount += 1;
  }
  if (guess != guessed) {
    winCount = 0;
  }
};

var secretWord = function (input) {
  var word = noRepeatGuessOptions();
  console.log("word");
  console.log(word);
  console.log("input");
  console.log(input);
  isGuessCorrect(input, word);

  if (staticCorrectsToWin == 1) {
    staticCorrectsToWin = correctsToWin();
  }

  console.log("winCount");
  console.log(winCount);
  console.log("staticCorrectsToWin");
  console.log(staticCorrectsToWin);

  var myOutputValue =
    "The secret word is " +
    word +
    ". You guessed " +
    input +
    ".<br> You need " +
    (staticCorrectsToWin - winCount) +
    " more correct guesses to win.";
  if (winCount == staticCorrectsToWin) {
    myOutputValue =
      "The secret word is " +
      word +
      ". You guessed " +
      input +
      ".<br> You have guessed " +
      staticCorrectsToWin +
      " times correctly. You win!";
    staticCorrectsToWin = correctsToWin();
    winCount = 0;
  }
  return myOutputValue;
};

// start code for 4D

var rollDice = function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

var roll4D = function () {
  var fourNumber = Math.floor(Math.random() * 10000);
  return fourNumber;
};

var start4D = false;

var withinNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var prevWithinNumber = 0;

var checkIfWin = function (guess, roll, within) {
  if (guess <= roll + within && guess >= roll - within) {
    return true;
  }
  return false;
};

var score = 0;

var main = function (input) {
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var number4D = roll4D();

  // No repeat Within number
  var inNumber1 = function () {
    if (prevWithinNumber == 0) {
      return withinNumber();
    }
    return prevWithinNumber;
  };
  var inNumber = inNumber1();
  var checkWin1 = checkIfWin(input, diceRoll1, inNumber);
  var checkWin2 = checkIfWin(input, diceRoll2, inNumber);
  console.log("input");
  console.log(input);
  console.log("diceRoll");
  console.log(diceRoll1);
  console.log(diceRoll2);
  console.log("inNumber");
  console.log(inNumber);
  console.log("checkWin");
  console.log(checkWin1);
  console.log(checkWin2);
  console.log("start4D");
  console.log(start4D);

  var myOutputValue;
  if (start4D == false && (checkWin1 == true || checkWin2 == true)) {
    console.log("Executed win");
    myOutputValue =
      "You won. You guessed " +
      input +
      ". You rolled " +
      diceRoll1 +
      " and " +
      diceRoll2 +
      ". Your guess is within the buffer of " +
      inNumber +
      ".";
    prevWithinNumber = withinNumber();
    if (score < 2) {
      score += 1;
      if (score > 1) {
        start4D = true;
        myOutputValue =
          "You won. You guessed " +
          input +
          ". You rolled " +
          diceRoll1 +
          " and " +
          diceRoll2 +
          ". Your guess is within the buffer of " +
          inNumber +
          ". Now you'll enter the 4D round!";
      }
    } else if (score == 2) {
      score = 1;
    }

    console.log("score");
    console.log(score);
  } else if (start4D == true && input == number4D) {
    start4D = false;
    score = 0;
    myOutputValue =
      "You won. You guessed " +
      input +
      ". Your 4D roll is " +
      number4D +
      ". Now you'll return to normal dice round!";
  } else if (start4D == true && input != number4D) {
    start4D = false;
    score = 0;
    myOutputValue =
      "You lost. You guessed " +
      input +
      ". Your 4D roll is " +
      number4D +
      ". Now you'll return to normal dice round!";
  } else {
    score = 0;
    console.log("score");
    console.log(score);
    myOutputValue =
      "You lost. You guessed " +
      input +
      ". You rolled " +
      diceRoll1 +
      " and " +
      diceRoll2;
  }

  return myOutputValue;
};
