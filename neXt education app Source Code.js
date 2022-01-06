//CREATED BY: YUBI MAMIYA
//Code and Design are the property of neXt and Yubi Mamiya


//Level One: pre-k and kindergarten
//Level Two: 1st and 2nd grade
//Level Three: 3rd and 4th grade
//Level Four: 5th and 6th grade


//main variables
var grade;
var subject;
var activityArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var selectExercise;
var answerSelection;


//tictactoe variables
var tictactoePlayerOneScore = 0;
var tictactoePlayerTwoScore = 0;
var tictactoePlayerTracker = 1;


//seesaw variables
var seesawScore = 0;
var correctAnswerOne;
var correctAnswerTwo;
var correctAnswerOnly;
var additionalShapeOnly;
var seesawCoinFlip;
var seesawUserAnswerSelection;
var seesawScoreAdditiveTracker = 0;
var seesawPerformance;
var imgSelector;


//math variables
var answerSelection;
var answerChoices = ["inches", "feet", "yards", "miles"];


//hanoi variables
var firstStand = [4, 3, 2, 1];
var secondStand = [];
var thirdStand = [];
var selectedDisk;
var xPosFirstDisk;
var yPosFirstDisk;
var xPosSecondDisk;
var yPosSecondDisk;
var xPosThirdDisk;
var yPosThirdDisk;
var xPosFourthDisk;
var yPosFourthDisk;
var moveTracker = 0;
var mouseX;
var mouseY;
var originalStand;
var selectedStand;


//sudoku variables
var sudokuConfirmation = 0;


//flashcard variables
var isNewCard = false; 
var allCards = [];    
var currentCard = -1; 
var practiceCard = -1;
var flashcards;


//video variables
var videos;
var allVideos = [];
var scienceVideoArrayTracker = [];


//english variables
var currentEnglishPage;
var englishAnalysisTextTracker;
var englishQuestionTracker;
var visitEnglishQuestion = 0;
var initialEnglishAnalysisSetUpComplete = 0;
var levelThreeTextsArray = [];
var levelFourTextsArray = [];
var levelThreeEnglishQuestionsArray = [];
var levelFourEnglishQuestionsArray = [];
var englishCorrectAnswerAssignment;
var englishWordAssignment;
var englishExerciseFinder;
// 1 = level one sight words practice
// 2 = level one spelling practice
// 3 = level two sight words practice
// 4 = level two spelling practice
var shownEnglishAnswerOptions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var englishWrongAnswer;
var englishLevelOneSpellingWords = ["said", "little", "gave", "plant", "only", "does", "where", "their", "enough", "pair"];
var englishLevelOneSightWords = ["and", "of", "to", "is", "was", "you", "stop", "the", "are", "have"];
var and = ["add", "ann", "ad", "an", "ade", "ane", "apple", "ape", "act", "mad", "sad"];
var of = ["fo", "off", "o", "f", "foo", "ffo", "oof", "ofe", "oaf", "eof"];
var to = ["ot", "t", "o", "too", "two", "toe", "through", "teal", "tow", "toad"];
var is = ["si", "i", "s", "ise", "ies", "ias", "iis", "iss", "it", "ice"];
var was = ["as", "wa", "ws", "wes", "wase", "weas", "whas", "were", "why", "what"];
var you = ["ou", "yo", "yu", "u", "ouy", "yuck", "yolk", "yes", "through", "shoe"];
var stop = ["sop", "stp", "top", "sought", "see", "stand", "stall", "stope", "staup", "strop"];
var the = ["he", "te", "tee", "thee", "there", "their", "time", "that", "tehe", "tthe"];
var are = ["re", "ae", "ar", "our", "air", "aare", "arre", "aree", "iear", "art"];
var have = ["ave", "hve", "hae", "hav", "hear", "here", "he", "happy", "havve", "havee"];
var englishLevelTwoSpellingWords = ["country", "change", "bright", "paint", "answer", "search", "acceptable", "attention", "dream", "pentagon"];
var englishLevelTwoSightWords = ["because", "about", "learn", "should", "yours", "again", "before", "people", "great", "which"];
var because = ["becus", "becas", "beautiful", "being", "becuz", "beekus", "busy", "barrier", "birthday", "biscuit"];
var about = ["aboot", "abuot", "abowt", "abawt", "abaut", "able", "absent", "aboute", "abroot", "account"];
var learn = ["lurn", "laern", "llearn", "lern", "lable", "last", "leave", "lament", "lecture", "least"];
var should = ["shout", "could", "would", "shine", "shuld", "shoold", "shold", "shall", "share", "smile"];
var yours = ["yurs", "yoors", "yeors", "yourz", "yellow", "yodel", "yolk", "yesterday", "ours", "course"];
var again = ["agen", "agan", "agian", "egen", "age", "apple", "agitate", "agast", "gain", "grain"];
var before = ["beef", "beefore", "beefor", "beefour", "benefit", "best", "believe", "begin", "bifor", "bafour"];
var people = ["poeple", "peoplle", "peeple", "peepel", "personal", "peony", "penalty", "purpose", "peaceful", "protect"];
var great = ["grate", "graet", "greet", "gray", "greatt", "glad", "grin", "grimace", "greate", "grow"];
var which = ["witch", "wich", "whech", "whitch", "where", "when", "why", "whistle", "wonder", "world"];
var englishLevelThreeSpellingWords = ["laugh", "noise", "Wednesday", "against", "engine", "disappear", "groceries", "simple", "lived", "office"];
var englishLevelFourSpellingWords = ["accidentally", "consonant", "daughter", "surprise", "cooperation", "encouragement", "medicine", "rehearse", "thoughtful", "usually"];




//project variables
var projectExploreResourcesArray = [];
var projectExploreResourceTracker = 1;




setScreen("welcomeScreen");


onEvent("startBtn", "click", function() {
 subject = getText("subjectDropdown");
 grade = getText("gradeDropdown");
 chooseSubject();
});


function chooseSubject() {
  if (subject == "Logic") {
   setScreen("logicScreen");
   chooseLogicGrade();
 } else if (subject == "Math") {
   setScreen("mathScreen");
   var instructions = prompt("All math exercises will be multiple choice. Please select your answer by checking the box next to the number or word. Once you receive the answer, please uncheck the box before clicking the Next button to proceed. You may have to write down some of the questions in order to solve them. Type 'OK' and press the OK button once you have read these instructions.");
   //variable 'instructions' will not be called in this program
   chooseMathGrade();
 } else if (subject == "English") {
   setScreen("englishScreen");
   if (grade == "Pre-K" || grade == "Kindergarten" || grade == "1st Grade" || grade == "2nd Grade") {
     var instructions = prompt("All english exercises will be multiple choice. Press on the button to display the answer options once you have read the question. Please select your answer by checking the box next to the number or word. Once you receive the answer, please uncheck the box before clicking the Next button to proceed. Type 'OK' and press the OK button once you have read these instructions.");
    //variable 'instructions' will not be called in this program
   } else if (grade == "3rd Grade" || grade == "4th Grade" || grade == "5th Grade" || grade == "6th Grade") {
     var instructions = prompt("All english exercises will be multiple choice or free response. For spelling problems, press the button to display the answer options. Please select your answer by checking the box next to the number or word. Once you receive the answer, please uncheck the box before clicking the Next button to proceed. For free response problems, use the arrows to read the text. Then, navigating to the next page using the button where an analysis prompt will be displayed. This response will not be checked, so be sure to write in complete sentences. You can revisit the text at any time to cite specific evidence. Type 'OK' and press the OK button once you have read these instructions.");
    //variable 'instructions' will not be called in this program
   }
   chooseEnglishGrade();
 } else if (subject == "Science") {
    if (grade == "Pre-K" || grade == "Kindergarten" || grade == "1st Grade" || grade == "2nd Grade") {
     var instructions = prompt("Science videos are provided. Copy the provided URL's into your device's search engine. Watch this video and reflect on one piece of new information you learned from it. Type 'OK' and press the OK button once you have read these instructions.");
    //variable 'instructions' will not be called in this program
   } else if (grade == "3rd Grade" || grade == "4th Grade" || grade == "5th Grade" || grade == "6th Grade") {
     var instructions = prompt("Science flashcards are provided. View all of the flashcards before practicing them. If you have a science question and answer, you can add that flashcard. Make sure that your added flashcard is grammatically correct, neat, and correctly spelled. You can also delete or edit a flashcard if you know for sure that the information isn't corrent. Type 'OK' and press the OK button once you have read these instructions.");
    //variable 'instructions' will not be called in this program
   }
   chooseScienceGrade();
 } else if (subject == "Global Project") {
    setScreen("projectScreen");
 } else {
    var reminder = prompt("Please select a subject and grade in the two dropdown menus displayed on the screen. Type 'OK' and press the 'OK' button to proceed.");
    //variable 'reminder' will not be called in this program
 }
}


function chooseMathGrade() {
  if (grade == "Pre-K" || grade == "Kindergarten") {
    mathLevelOne();
    activityArray[0] = 1;
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    mathLevelTwo();
    activityArray[1] = 1;
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    mathLevelThree();
    activityArray[2] = 1;
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    mathLevelFour();
    activityArray[3] = 1;
  } else {
    var reminder = prompt("Please select a subject and grade in the two dropdown menus displayed on the screen. Type 'OK' and press the 'OK' button to proceed.");
    //variable 'reminder' will not be called in this program
  }
}


function chooseLogicGrade() {
  if (grade == "Pre-K" || grade == "Kindergarten") {
    logicLevelOne();
    activityArray[4] = 1;
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    logicLevelTwo();
    activityArray[5] = 1;
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    logicLevelThree();
    activityArray[6] = 1;
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    logicLevelFour();
    activityArray[7] = 1;
  } else {
    var reminder = prompt("Please select a subject and grade in the two dropdown menus displayed on the screen. Type 'OK' and press the 'OK' button to proceed.");
    //variable 'reminder' will not be called in this program
  }
}


function chooseEnglishGrade() {
  if (grade == "Pre-K" || grade == "Kindergarten") {
    englishLevelOne();
    activityArray[8] = 1;
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    englishLevelTwo();
    activityArray[9] = 1;
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    englishLevelThree();
    activityArray[10] = 1;
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    englishLevelFour();
    activityArray[11] = 1;
  } else {
    var reminder = prompt("Please select a subject and grade in the two dropdown menus displayed on the screen. Type 'OK' and press the 'OK' button to proceed.");
    //variable 'reminder' will not be called in this program
  }
}


function mathLevelOne() {
  clearImgs();
  selectExercise = randomNumber(0, 2);
  if (selectExercise == 0) {
    levelOneCounting();
    setText("answerDisplay", "");
  } else if (selectExercise == 1) {
    levelOneAddition();
    setText("answerDisplay", "");
  } else if (selectExercise == 2) {
    levelOneSubtraction();
    setText("answerDisplay", "");
  }
}


function levelOneCounting() {
  var countingNumber = randomNumber(1, 90);
  setText("mathQuestion", "Please count up from: " + countingNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", (countingNumber + 1) + ", " + (countingNumber + 2) + ", " + (countingNumber + 3));
    setText("secondAnswer", (countingNumber - 3) + ", " + (countingNumber - 2) + ", " + countingNumber);
  } else {
    setText("secondAnswer", (countingNumber + 1) + ", " + (countingNumber + 2) + ", " + (countingNumber + 3));
    setText("firstAnswer", (countingNumber - 3) + ", " + (countingNumber - 2) + ", " + countingNumber);
  }
}


function levelOneAddition() {
  var levelOneFirstAdditionNumber = randomNumber(1, 7);
  var levelOneSum = randomNumber((levelOneFirstAdditionNumber + 1), 10);
  var levelOneSecondAdditionNumber = (levelOneSum - levelOneFirstAdditionNumber);
  setText("mathQuestion", "Please calculate: " + levelOneFirstAdditionNumber + " + " + levelOneSecondAdditionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelOneSum);
    setText("secondAnswer", (levelOneSum - 1));
  } else {
    setText("secondAnswer", levelOneSum);
    setText("firstAnswer", (levelOneSum - 1));
  }
}


function levelOneSubtraction() {
  var levelOneFirstSubtractionNumber = randomNumber(3, 10);
  var levelOneDifference = randomNumber(1, (levelOneFirstSubtractionNumber - 1));
  var levelOneSecondSubtractionNumber = (levelOneFirstSubtractionNumber - levelOneDifference);
  setText("mathQuestion", "Please calculate: " + levelOneFirstSubtractionNumber + " - " + levelOneSecondSubtractionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelOneDifference);
    setText("secondAnswer", (levelOneDifference + 2));
  } else {
    setText("secondAnswer", levelOneDifference);
    setText("firstAnswer", (levelOneDifference + 2));
  }
}


function mathLevelTwo() {
  clearImgs();
  selectExercise = randomNumber(0, 2);
  if (selectExercise == 0) {
    levelTwoAddition();
  } else if (selectExercise == 1) {
    levelTwoSubtraction();
  } else if (selectExercise == 2) {
    levelTwoMeasurement();
  }
}


function levelTwoAddition() {
  console.log("Level Two Addition");
  var levelTwoFirstAdditionNumber = randomNumber(1, 48);
  var levelTwoSum = randomNumber((levelTwoFirstAdditionNumber + 1), 50);
  var levelTwoSecondAdditionNumber = (levelTwoSum - levelTwoFirstAdditionNumber);
  setText("mathQuestion", "Please calculate: " + levelTwoFirstAdditionNumber + " + " + levelTwoSecondAdditionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelTwoSum);
    setText("secondAnswer", (levelTwoSum - 1));
  } else {
    setText("secondAnswer", levelTwoSum);
    setText("firstAnswer", (levelTwoSum - 1));
  }
}


function levelTwoSubtraction() {
  console.log("Level Two Subtraction");
  var levelTwoFirstSubtractionNumber = randomNumber(3, 50);
  var levelTwoDifference = randomNumber(1, (levelTwoFirstSubtractionNumber - 1));
  var levelTwoSecondSubtractionNumber = (levelTwoFirstSubtractionNumber - levelTwoDifference);
  setText("mathQuestion", "Please calculate: " + levelTwoFirstSubtractionNumber + " - " + levelTwoSecondSubtractionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelTwoDifference);
    setText("secondAnswer", (levelTwoDifference + 2));
  } else {
    setText("secondAnswer", levelTwoDifference);
    setText("firstAnswer", (levelTwoDifference + 2));
  }
}


//moon = 1, car = 2, plane = 3, camera = 4, card = 5, plant = 6, light = 7, cup = 8
function levelTwoMeasurement() {
  console.log("Level Two Measurement");
  clearImgs();
  findImg();
  askMeasurementQuestion();
  setAnswerOptions();
}


function findImg() {
  imgSelector = randomNumber(1, 8);
  if (imgSelector == 1) {
    showImg("moonImg");
  } else if (imgSelector == 2) {
    showImg("carImg");
  } else if (imgSelector == 3) {
    showImg("planeImg");
  } else if (imgSelector == 4) {
    showImg("cameraImg");
  } else if (imgSelector == 5) {
    showImg("cardImg");
  } else if (imgSelector == 6) {
    showImg("plantImg");
  } else if (imgSelector == 7) {
    showImg("lightImg");
  } else if (imgSelector == 8) {
    showImg("cupImg");
  }
}




function showImg(img) {
  showElement(img);
}


function askMeasurementQuestion() {
  setText("mathQuestion", "What unit is used to measure this object?");
}


function setAnswerOptions() {
  answerSelection = randomNumber(1, 2);
  if (imgSelector == 1) {
    setMeasurementAnswers("miles");
  } else if (imgSelector == 2) {
    setMeasurementAnswers("yards");
  } else if (imgSelector == 3) {
    setMeasurementAnswers("yards");
  } else if (imgSelector == 4) {
    setMeasurementAnswers("inches");
  } else if (imgSelector == 5) {
    setMeasurementAnswers("inches");
  } else if (imgSelector == 6) {
    setMeasurementAnswers("feet");
  } else if (imgSelector == 7) {
    setMeasurementAnswers("inches");
  } else if (imgSelector == 8) {
    setMeasurementAnswers("inches");
  }
  console.log(answerSelection);
}


function setMeasurementAnswers(correctMeasurementAnswer) {
  if (answerSelection == 1) {
    setText("firstAnswer", correctMeasurementAnswer);
    var tempOne = randomNumber(0, 3);
    while (answerChoices[tempOne] == correctMeasurementAnswer) {
      tempOne = randomNumber(0, 3);
    }
    setText("secondAnswer", answerChoices[tempOne]);
  } else if (answerSelection == 2) {
    setText("secondAnswer", correctMeasurementAnswer);
    var tempTwo = randomNumber(0, 3);
    while (answerChoices[tempTwo] == correctMeasurementAnswer) {
      tempTwo = randomNumber(0, 3);
    }
    setText("firstAnswer", answerChoices[tempTwo]);
  }
}


function clearImgs() {
  hideElement("moonImg");
  hideElement("carImg");
  hideElement("planeImg");
  hideElement("cameraImg");
  hideElement("cardImg");
  hideElement("plantImg");
  hideElement("lightImg");
  hideElement("cupImg");
}


function mathLevelThree() {
  clearImgs();
  selectExercise = randomNumber(0, 2);
  if (selectExercise == 0) {
    levelThreeMultiplication();
  } else if (selectExercise == 1) {
    levelThreeDivision();
  } else if (selectExercise == 2) {
    levelThreeFractions();
  }
}


function levelThreeMultiplication() {
  console.log("Level Three Multiplication");
  var levelThreeFirstMultiplicationNumber = randomNumber(1, 10);
  var levelThreeSecondMultiplicationNumber = randomNumber(1, 10);
  var levelThreeProduct = (levelThreeFirstMultiplicationNumber * levelThreeSecondMultiplicationNumber);
  setText("mathQuestion", "Please calculate: " + levelThreeFirstMultiplicationNumber + " x " + levelThreeSecondMultiplicationNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelThreeProduct);
    setText("secondAnswer", (levelThreeProduct - 2));
  } else {
    setText("secondAnswer", levelThreeProduct);
    setText("firstAnswer", (levelThreeProduct + 1));
  }
}


function levelThreeDivision() {
  console.log("Level Three Division");
  var levelThreeFirstDivisionNumber = randomNumber(20, 100);
  var levelThreeSecondDivisionNumber = randomNumber(1, 10);
  while (levelThreeFirstDivisionNumber % levelThreeSecondDivisionNumber >= 1) {
    levelThreeSecondDivisionNumber = randomNumber(1, 10);
  }
  var levelThreeQuotient = (levelThreeFirstDivisionNumber / levelThreeSecondDivisionNumber);
  setText("mathQuestion", "Please calculate: " + levelThreeFirstDivisionNumber + " / " + levelThreeSecondDivisionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelThreeQuotient);
    setText("secondAnswer", (levelThreeQuotient - 2));
  } else {
    setText("secondAnswer", levelThreeQuotient);
    setText("firstAnswer", (levelThreeQuotient + 1));
  }
}


function levelThreeFractions() {
  console.log("Level Three Fractions");
  var levelThreeFirstFractionNumerator = randomNumber(1, 10);
  var levelThreeFirstFractionDenominator = randomNumber(1, 10);
  var levelThreeSecondFractionNumerator = randomNumber(1, 10);
  var levelThreeSecondFractionDenominator = randomNumber(1, 10);
  while ((levelThreeFirstFractionNumerator/levelThreeFirstFractionDenominator) == (levelThreeSecondFractionNumerator/levelThreeSecondFractionDenominator)) {
    levelThreeFirstFractionNumerator = randomNumber(1, 10);
    levelThreeFirstFractionDenominator = randomNumber(1, 10);
    levelThreeSecondFractionNumerator = randomNumber(1, 10);
    levelThreeSecondFractionDenominator = randomNumber(1, 10);
  }
  if ((levelThreeFirstFractionNumerator/levelThreeFirstFractionDenominator) > (levelThreeSecondFractionNumerator/levelThreeSecondFractionDenominator)) {
    answerSelection = 1;
  } else if ((levelThreeFirstFractionNumerator/levelThreeFirstFractionDenominator) < (levelThreeSecondFractionNumerator/levelThreeSecondFractionDenominator)) {
    answerSelection = 2;
  }
  setText("mathQuestion", "Which sign: " + levelThreeFirstFractionNumerator + "/" + levelThreeFirstFractionDenominator + " ___ " + levelThreeSecondFractionNumerator + "/" + levelThreeSecondFractionDenominator);
  console.log(answerSelection);
  setText("firstAnswer", ">");
  setText("secondAnswer", "<");
}


function mathLevelFour() {
  clearImgs();
  selectExercise = randomNumber(0, 2);
  if (selectExercise == 0) {
    levelFourDecimals();
  } else if (selectExercise == 1) {
    levelFourMultiplication();
  } else if (selectExercise == 2) {
    levelFourDivision();
  }
}


function levelFourDecimals() {
  console.log("Level Four Decimals");
  var levelThreeFirstDecimal = (randomNumber(1, 50) * '.01');
  var levelThreeSecondDecimal = (randomNumber(1, 50) * '.01');
  while (levelThreeFirstDecimal == levelThreeSecondDecimal) {
    levelThreeFirstDecimal = (randomNumber(1, 50) * '.01');
    levelThreeSecondDecimal = (randomNumber(1, 50) * '.01');
  }
  if (levelThreeFirstDecimal > levelThreeSecondDecimal) {
    answerSelection = 1;
  } else if (levelThreeFirstDecimal < levelThreeSecondDecimal) {
    answerSelection = 2;
  }
  setText("mathQuestion", "Which sign: " + levelThreeFirstDecimal + " ___ " + levelThreeSecondDecimal);
  console.log(answerSelection);
  setText("firstAnswer", ">");
  setText("secondAnswer", "<");
}


function levelFourMultiplication() {
  console.log("Level Four Multiplication");
  var levelFourFirstMultiplicationNumber = randomNumber(10, 99);
  var levelFourSecondMultiplicationNumber = randomNumber(10, 99);
  var levelFourProduct = (levelFourFirstMultiplicationNumber * levelFourSecondMultiplicationNumber);
  setText("mathQuestion", "Please calculate: " + levelFourFirstMultiplicationNumber + " x " + levelFourSecondMultiplicationNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelFourProduct);
    setText("secondAnswer", (levelFourProduct - 2));
  } else {
    setText("secondAnswer", levelFourProduct);
    setText("firstAnswer", (levelFourProduct + 1));
  }
}


function levelFourDivision() {
  console.log("Level Four Division");
  var levelFourFirstDivisionNumber = randomNumber(500, 2000);
  var levelFourSecondDivisionNumber = randomNumber(1, 100);
  while (levelFourFirstDivisionNumber % levelFourSecondDivisionNumber >= 1) {
    levelFourSecondDivisionNumber = randomNumber(1, 10);
  }
  var levelFourQuotient = (levelFourFirstDivisionNumber / levelFourSecondDivisionNumber);
  setText("mathQuestion", "Please calculate: " + levelFourFirstDivisionNumber + " / " + levelFourSecondDivisionNumber);
  answerSelection = randomNumber(1, 2);
  console.log(answerSelection);
  if (answerSelection == 1) {
    setText("firstAnswer", levelFourQuotient);
    setText("secondAnswer", (levelFourQuotient - 2));
  } else {
    setText("secondAnswer", levelFourQuotient);
    setText("firstAnswer", (levelFourQuotient + 1));
  }
}


onEvent("firstCheck", "click", function() {
  if (answerSelection == 1) {
    setText("answerDisplay", "correct");
  } else {
    setText("answerDisplay", "incorrect");
  }
});


onEvent("secondCheck", "click", function() {
  if (answerSelection == 2) {
    setText("answerDisplay", "correct");
  } else {
    setText("answerDisplay", "incorrect");
  }
});


onEvent("mathNextBtn", "click", function() {
  setText("answerDisplay", "");
  var i = 0;
  while (activityArray[i] == 0) {
    i++;
  }
  if (i == 0) {
    mathLevelOne();
  } else if (i == 1) {
    mathLevelTwo();
  } else if (i == 2) {
    mathLevelThree();
  } else if (i == 3) {
    mathLevelFour();
  }
});


function logicLevelOne() {
  setUpTictactoe();
}


function logicLevelTwo() {
  startSeesawGame();
}


function logicLevelThree() {
  startHanoiGame();
}


function logicLevelFour() {
  setUpSudoku();
}


function setUpTictactoe() {
  if ((tictactoePlayerOneScore == 5) || (tictactoePlayerTwoScore == 5)) {
    setScreen("gameOverScreen");
  } else {
    setScreen("tictactoeScreen");
    var instructions = prompt("This is a two player game. Player One goes will go first and is the circle. Player Two will go second and is the cross. After either player wins, press the corresponding button with their name in order to increase their score. Then, press the 'Play' button in order to proceed. The game is over when either player scores 5 points. Type 'OK' and press the OK button once you have read these instructions.");
    //variable 'instructions' will not be called in this program
    setText("playerOneScoreLabel", "Score: 0");
    setText("playerTwoScoreLabel", "Score: 0");
    clearTictactoeBoard();
  }
}


onEvent("tictactoePlayBtn", "click", function() {
  clearTictactoeBoard();
});


function clearTictactoeBoard() {
  hideElement("circleOne");
  hideElement("circleTwo");
  hideElement("circleThree");
  hideElement("circleFour");
  hideElement("circleFive");
  hideElement("circleSix");
  hideElement("circleSeven");
  hideElement("circleEight");
  hideElement("circleNine");
  hideElement("crossOne");
  hideElement("crossTwo");
  hideElement("crossThree");
  hideElement("crossFour");
  hideElement("crossFive");
  hideElement("crossSix");
  hideElement("crossSeven");
  hideElement("crossEight");
  hideElement("crossNine");
  tictactoePlayerTracker = 1;
}


onEvent("tictactoeGrid", "click", function(event) {
  if (((event.x >= 20) && (event.x <= 90)) && ((event.y >= 120) && (event.y <= 190))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleOne");
    } else {
      showElement("crossOne");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 125) && (event.x <= 195)) && ((event.y >= 120) && (event.y <= 190))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleTwo");
    } else {
      showElement("crossTwo");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 230) && (event.x <= 300)) && ((event.y >= 120) && (event.y <= 190))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleThree");
    } else {
      showElement("crossThree");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 20) && (event.x <= 90)) && ((event.y >= 205) && (event.y <= 275))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleFour");
    } else {
      showElement("crossFour");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 125) && (event.x <= 195)) && ((event.y >= 205) && (event.y <= 275))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleFive");
    } else {
      showElement("crossFive");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 230) && (event.x <= 300)) && ((event.y >= 205) && (event.y <= 275))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleSix");
    } else {
      showElement("crossSix");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 20) && (event.x <= 90)) && ((event.y >= 290) && (event.y <= 360))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleSeven");
    } else {
      showElement("crossSeven");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 125) && (event.x <= 195)) && ((event.y >= 290) && (event.y <= 360))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleEight");
    } else {
      showElement("crossEight");
    }
    tictactoePlayerTracker++;
  } else if (((event.x >= 230) && (event.x <= 300)) && ((event.y >= 290) && (event.y <= 360))) {
    if (tictactoePlayerTracker % 2 !== 0) {
      showElement("circleNine");
    } else {
      showElement("crossNine");
    }
    tictactoePlayerTracker++;
  }
});


onEvent("playerOneBtn", "click", function() {
  tictactoePlayerOneScore++;
  setText("playerOneScoreLabel", "Score: " + tictactoePlayerOneScore);
  if (tictactoePlayerOneScore == 5) {
    setScreen("logicEndScreen");
  }
});


onEvent("playerTwoBtn", "click", function() {
  tictactoePlayerTwoScore++;
  setText("playerTwoScoreLabel", "Score: " + tictactoePlayerTwoScore);
  if (tictactoePlayerTwoScore == 5) {
    setScreen("logicEndScreen");
  }
});






onEvent("seesawPlayBtn", "click", function() {
  setText("seesawScoreLabel", ("Score: " + seesawScore));
  clearSeesaw();
  setSeesaw();
  setText("seesawAnswerLabel", "");
});


function startSeesawGame() {
  setScreen("seesawScreen");
  setSeesaw();
  var instructions = prompt("This is a game of seesaw. For each scenario, check the box next to the shapes that is the heaviest. If both shapes weigh the same, then either shape will lead to a correct answer. The shapes represent abstract weights that are subject to change for each scenario. Please uncheck the box after you receive your answer and before you move onto the next scenario. For every correct answer, your score will increase by one and for every incorrect answer, your score will decrease by three. The game is over when your score reaches 20. Type 'OK' and press the OK button once you have read these instructions.");
  //variable 'instructions' will not be called in this program
  setText("seesawScoreLabel", ("Score: " + seesawScore));
  clearSeesaw();
  setSeesaw();
  setText("seesawAnswerLabel", "");
}


function setSeesaw() {
  correctAnswerOne = randomNumber(1, 4);
  correctAnswerTwo = randomNumber(1, 4);
  while (correctAnswerTwo == correctAnswerOne) {
    correctAnswerTwo = randomNumber(1, 4);
  }
  additionalShapeOnly = randomNumber(0, 4);
  while ((additionalShapeOnly == correctAnswerOne) || (additionalShapeOnly == correctAnswerTwo)) {
    additionalShapeOnly = randomNumber(0, 4);
  }
  //1 = halfCircle, 2 = star, 3 = heart, 4 = cube, 5 = nothing
  console.log("correctAnswerOne is " + correctAnswerOne);
  console.log("correctAnswerTwo is " + correctAnswerTwo);
  console.log("additionalShapeOnly: " + additionalShapeOnly);
  if (additionalShapeOnly == 0) {
    setSpaceOne();
    setSpaceThree();
  } else {
    setSpaceOne();
    setSpaceThree();
    setAdditionalSpace();
  }
}


function setSpaceOne() {
  if (correctAnswerOne == 1) {
    showElement("halfCircleSpaceOne");
  } else if (correctAnswerOne == 2) {
    showElement("starSpaceOne");
  } else if (correctAnswerOne == 3) {
    showElement("heartSpaceOne");
  } else {
    showElement("cubeSpaceOne");
  }
}


function setSpaceThree() {
  if (correctAnswerTwo == 1) {
    showElement("halfCircleSpaceThree");
  } else if (correctAnswerTwo == 2) {
    showElement("starSpaceThree");
  } else if (correctAnswerTwo == 3) {
    showElement("heartSpaceThree");
  } else {
    showElement("cubeSpaceThree");
  }
}


function setAdditionalSpace() {
  seesawCoinFlip = randomNumber(1, 2);
  if (seesawCoinFlip == 1) {
    setSpaceTwo();
  } else {
    setSpaceFour();
  }
}


function setSpaceTwo() {
  if (additionalShapeOnly == 1) {
    showElement("halfCircleSpaceTwo");
  } else if (additionalShapeOnly == 2) {
    showElement("starSpaceTwo");
  } else if (additionalShapeOnly == 3) {
    showElement("heartSpaceTwo");
  } else if (additionalShapeOnly == 4) {
    showElement("cubeSpaceTwo");
  }
}


function setSpaceFour() {
  if (additionalShapeOnly == 1) {
    showElement("halfCircleSpaceFour");
  } else if (additionalShapeOnly == 2) {
    showElement("starSpaceFour");
  } else if (additionalShapeOnly == 3) {
    showElement("heartSpaceFour");
  } else if (additionalShapeOnly == 4) {
    showElement("cubeSpaceFour");
  }
}


onEvent("halfCircleCheck", "click", function() {
  seesawUserAnswerSelection = 1;
  checkSeesawAnswer();
});


onEvent("starCheck", "click", function() {
  seesawUserAnswerSelection = 2;
  checkSeesawAnswer();
});


onEvent("heartCheck", "click", function() {
  seesawUserAnswerSelection = 3;
  checkSeesawAnswer();
});


onEvent("cubeCheck", "click", function() {
  seesawUserAnswerSelection = 4;
  checkSeesawAnswer();
});


function checkSeesawAnswer() {
  if (additionalShapeOnly > 0) {
    checkForOneAnwer();
  } else {
    checkForTwoAnswers();
  }
}


function checkForOneAnwer() {
  if (seesawCoinFlip == 1) {
    correctAnswerOnly = correctAnswerTwo;
  } else {
    correctAnswerOnly = correctAnswerOne;
  }
  if (seesawUserAnswerSelection == correctAnswerOnly) {
    setText("seesawAnswerLabel", "correct");
    seesawPerformance = 1;
  } else {
    setText("seesawAnswerLabel", "incorrect");
    seesawPerformance = 0;
  }
  changeSeesawScoreAdditiveTracker();
}


function checkForTwoAnswers() {
  if ((seesawUserAnswerSelection == correctAnswerOne) || (seesawUserAnswerSelection == correctAnswerTwo)) {
    setText("seesawAnswerLabel", "correct");
    seesawPerformance = 1;
  } else {
    setText("seesawAnswerLabel", "incorrect");
    seesawPerformance = 0;
  }
  changeSeesawScoreAdditiveTracker();
}


function changeSeesawScoreAdditiveTracker() {
  if (seesawScoreAdditiveTracker == 0) {
    seesawScoreAdditiveTracker++;
  } else {
    seesawScoreAdditiveTracker--;
  }
  if ((seesawScoreAdditiveTracker == 1) && (seesawPerformance == 1)) {
    seesawScore++;
  } else if ((seesawScoreAdditiveTracker == 1) && (seesawPerformance == 0)) {
    seesawScore = (seesawScore - 3);
  }
  setText("seesawScoreLabel", ("Score: " + seesawScore));
  if (seesawScore == 20) {
    setScreen("logicEndScreen");
  }
}


function clearSeesaw() {
  hideElement("halfCircleSpaceOne");
  hideElement("halfCircleSpaceTwo");
  hideElement("halfCircleSpaceThree");
  hideElement("halfCircleSpaceFour");
  hideElement("starSpaceOne");
  hideElement("starSpaceTwo");
  hideElement("starSpaceThree");
  hideElement("starSpaceFour");
  hideElement("heartSpaceOne");
  hideElement("heartSpaceTwo");
  hideElement("heartSpaceThree");
  hideElement("heartSpaceFour");
  hideElement("cubeSpaceOne");
  hideElement("cubeSpaceTwo");
  hideElement("cubeSpaceThree");
  hideElement("cubeSpaceFour");
}




function startHanoiGame() {
  setScreen("hanoiScreen");
  var instructions = prompt("Please think before you make every move. You can only move the disk at the top of each stand. In addition, you can only place a disk on a stand if all the other disks already on that stand are larger than the disk you want to place on the stand. In order to select a disk, click first on the disk. Then, click the stand in which you want to move that disk. The goal is to move all of the disks in ascending order, just like they are arranged right now, but to the right-most stand. Click the 'Finished' button when you have completed this goal. Type 'OK' and press the OK button once you have read these instructions.");
  //variable 'instructions' will not be called in this program
}


onEvent("hanoiFinishedBtn", "click", function() {
  setScreen("logicEndScreen");
});


onEvent("hanoiScreen", "click", function(event) {
  xPosFirstDisk = (getXPosition("firstDisk") + 10);
  yPosFirstDisk = (getYPosition("firstDisk") +25);
  xPosSecondDisk = (getXPosition("secondDisk") + 8);
  yPosSecondDisk = (getYPosition("secondDisk") + 30);
  xPosThirdDisk = (getXPosition("thirdDisk") + 10);
  yPosThirdDisk = (getYPosition("thirdDisk") + 40);
  xPosFourthDisk = (getXPosition("fourthDisk") + 16);
  yPosFourthDisk = (getYPosition("fourthDisk") + 45);
  mouseX = event.x;
  mouseY = event.y;
  if (moveTracker == 0) {
    findOriginalStand();
    findSelectedDisk();
    moveTracker++;
  } else if (moveTracker == 1) {
    findSelectedStand();
    checkStand();
    addDisk();
    moveTracker--;
  }
});


function findOriginalStand() {
  if ((mouseX >= 25) && (mouseX <= 95)) {
    originalStand = firstStand;
  } else if ((mouseX >= 125) && (mouseX <= 195)) {
    originalStand = secondStand;
  } else if ((mouseX >= 225) && (mouseX <= 295)) {
    originalStand = thirdStand;
  } else {
    console.log("couldn't find original stand");
  }
}


function findSelectedDisk() {
  if ((mouseX >= xPosFirstDisk) && (mouseX <= (xPosFirstDisk + 40) && (mouseY >= yPosFirstDisk) && (mouseY <= (yPosFirstDisk + 15)))) {
    setProperty("firstDisk", "icon-color", "white");
    console.log("first disk");
    selectedDisk = 1;
  } else if ((mouseX >= xPosSecondDisk) && (mouseX <= (xPosSecondDisk + 60)) && (mouseY >= yPosSecondDisk) && (mouseY <= (yPosSecondDisk + 20))) {
    setProperty("secondDisk", "icon-color", "white");
    selectedDisk = 2;
    console.log("second disk");
  } else if ((mouseX >= xPosThirdDisk) && (mouseX <= (xPosThirdDisk + 80)) && (mouseY >= yPosThirdDisk) && (mouseY <= (yPosThirdDisk + 20))) {
    setProperty("thirdDisk", "icon-color", "white");
    selectedDisk = 3;
    console.log("third disk");
  } else if ((mouseX >= xPosFourthDisk) && (mouseX <= (xPosFourthDisk + 83)) && (mouseY >= yPosFourthDisk) && (mouseY <= (yPosFourthDisk + 25))) {
    setProperty("fourthDisk", "icon-color", "white");
    selectedDisk = 4;
    console.log("fourth disk");
  } else {
    console.log("couldn't find selected disk");
  }
}


function findSelectedStand() {
  if ((mouseX >= 25) && (mouseX <= 95)) {
    selectedStand = firstStand;
  } else if ((mouseX >= 125) && (mouseX <= 195)) {
    selectedStand = secondStand;
  } else if ((mouseX >= 225) && (mouseX <= 295)) {
    selectedStand = thirdStand;
  } else {
    console.log("couldn't find selected stand");
  }
}


function checkStand(){
  if ((selectedStand.length == 0) || (selectedDisk < (selectedStand[selectedStand.length - 1]))) {
    appendItem(selectedStand, selectedDisk);
    removeItem(originalStand, (originalStand.length - 1));
    console.log("Top disk of Selected Stand: " + selectedStand[selectedStand.length - 1]);
    console.log("First Stand: " + firstStand);
    console.log("Second Stand: " + secondStand);
    console.log("Third Stand: " + thirdStand);
  } else {
    var warning = prompt("Your disk is larger than the disk on top of that stand. Please pick another stand. Type 'OK' and press the OK button to proceed.");
    //variable 'warning' will not be called in this program
  }
}


function addDisk() {
  var placementHeightDisk;
  var standXPos;
  if (selectedStand == firstStand) {
    standXPos = 25;
  } else if (selectedStand == secondStand) {
    standXPos = 125;
  } else if (selectedStand == thirdStand) {
    standXPos = 225;
  }
  if (selectedDisk == 1) {
    placementHeightDisk = ((selectedStand.length - 1) * 30);
    setProperty("firstDisk", "x", standXPos);
    setProperty("firstDisk", "y", (235 - placementHeightDisk));
    setProperty("firstDisk", "icon-color", "#000000");
  } else if (selectedDisk == 2) {
    placementHeightDisk = ((selectedStand.length - 1) * 30);
    setProperty("secondDisk", "x", standXPos);
    setProperty("secondDisk", "y", (235 - placementHeightDisk));
    setProperty("secondDisk", "icon-color", "#000000");
  } else if (selectedDisk == 3) {
    placementHeightDisk = ((selectedStand.length - 1) * 30);
    setProperty("thirdDisk", "x", standXPos);
    setProperty("thirdDisk", "y", (235 - placementHeightDisk));
    setProperty("thirdDisk", "icon-color", "#000000");
  } else if (selectedDisk == 4) {
    placementHeightDisk = ((selectedStand.length - 1) * 30);
    setProperty("fourthDisk", "x", standXPos);
    setProperty("fourthDisk", "y", (235 - placementHeightDisk));
    setProperty("fourthDisk", "icon-color", "#000000");
  } else {
    console.log("couldn't add disk");
  }
}




function setUpSudoku() {
  setScreen("sudokuScreen");
  var instructions = prompt("Solve the Sudoku puzzle so that each row has all numbers 1-9, each column has all numbers 1-9, and each box has all numbers 1-9. Fill in a number into each gray box by clicking on the box and typing in a number. Type 'OK' and press the OK button once you have read these instructions.");
  //variable 'instructions' will not be called in this program
}


onEvent("checkBtn", "click", function() {
  checkSudoku();
});


function checkSudoku() {
  checkGrids();
  if (sudokuConfirmation == 51) {
    setScreen("logicEndScreen");
  } else {
    var warning = prompt("Your sudoku wasn't correctly filled out. Please check your answers again. Type 'OK' and press the OK button to proceed.");
    //variable 'warning' will not be called in this program
  }
}


function checkGrids() {
  if (getText("grid13") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid14") == 6) {
    sudokuConfirmation++;
  }
  if (getText("grid16") == 8) {
    sudokuConfirmation++;
  }
  if (getText("grid17") == 9) {
    sudokuConfirmation++;
  }
  if (getText("grid18") == 1) {
    sudokuConfirmation++;
  }
  if (getText("grid19") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid22") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid23") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid27") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid28") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid29") == 8) {
    sudokuConfirmation++;
  }
  if (getText("grid31") == 1) {
    sudokuConfirmation++;
  }
  if (getText("grid34") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid35") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid36") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid37") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid39") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid42") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid43") == 9) {
    sudokuConfirmation++;
  }
  if (getText("grid44") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid46") == 1) {
    sudokuConfirmation++;
  }
  if (getText("grid47") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid48") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid52") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid53") == 6) {
    sudokuConfirmation++;
  }
  if (getText("grid55") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid57") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid58") == 9) {
    sudokuConfirmation++;
  }
  if (getText("grid62") == 1) {
    sudokuConfirmation++;
  }
  if (getText("grid63") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid64") == 9) {
    sudokuConfirmation++;
  }
  if (getText("grid66") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid67") == 8) {
    sudokuConfirmation++;
  }
  if (getText("grid68") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid71") == 9) {
    sudokuConfirmation++;
  }
  if (getText("grid73") == 1) {
    sudokuConfirmation++;
  }
  if (getText("grid74") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid75") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid76") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid79") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid81") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid82") == 8) {
    sudokuConfirmation++;
  }
  if (getText("grid83") == 7) {
    sudokuConfirmation++;
  }
  if (getText("grid87") == 6) {
    sudokuConfirmation++;
  }
  if (getText("grid88") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid91") == 3) {
    sudokuConfirmation++;
  }
  if (getText("grid92") == 4) {
    sudokuConfirmation++;
  }
  if (getText("grid93") == 5) {
    sudokuConfirmation++;
  }
  if (getText("grid94") == 2) {
    sudokuConfirmation++;
  }
  if (getText("grid96") == 6) {
    sudokuConfirmation++;
  }
  if (getText("grid97") == 1) {
    sudokuConfirmation++;
  }
}


function englishLevelOne() {
  englishExerciseFinder = randomNumber(1, 2);
  if (englishExerciseFinder == 1) {
    englishSighting();
    console.log("sight words");
  } else if (englishExerciseFinder == 2) {
    englishSpelling();
    console.log("spelling");
  }
}


function englishSighting() {
  setScreen("englishScreen");
  findLevelOneWord();
  if (grade == "Pre-K" || grade == "Kindergarten") {
    setEnglishQuestion(englishLevelOneSightWords);
    console.log("level one sight words");
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    setEnglishQuestion(englishLevelTwoSightWords);
    console.log("level two sight words");
  }
  console.log(englishCorrectAnswerAssignment);
  console.log(englishWordAssignment);
}


function englishSpelling() {
  findLevelOneWord();
  if (grade == "Pre-K" || grade == "Kindergarten") {
    setEnglishQuestion(englishLevelOneSpellingWords);
    console.log("level one spelling words");
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    setEnglishQuestion(englishLevelTwoSpellingWords);
    console.log("level two spelling words");
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    setEnglishQuestion(englishLevelThreeSpellingWords);
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    setEnglishQuestion(englishLevelFourSpellingWords);
  }
  console.log(englishCorrectAnswerAssignment);
  console.log(englishWordAssignment);
}


function findLevelOneWord() {
  englishCorrectAnswerAssignment = randomNumber(1, 4);
  englishWordAssignment = randomNumber(0, 9);
}


function setEnglishQuestion(array) {
  if ((englishExerciseFinder == 1) || (englishExerciseFinder == 3)) {
    setText("englishQuestion", ("Your Word: " + array[englishWordAssignment]));
  } else {
    setScreen("spellingEnglishScreen");
    setText("spellingLabel", ("Your Word: " + array[englishWordAssignment]));
  }
}


onEvent("displayEnglishAnswersBtn", "click", function() {
  setText("englishQuestion", "Find the correct word or description.");
  setEnglishAnswerOptions();
});


onEvent("practiceSpellingBtn", "click", function() {
  setText("spellingLabel", "Type the correct spelling");
  showElement("studentSpellingAnswer");
  showElement("getSpellingBtn");
});


onEvent("studentSpellingAnswer", "input", function() {
  var studentSpelling = getText("studentSpellingAnswer");
  if (grade == "Pre-K" || grade == "Kindergarten") {
    if (studentSpelling == englishLevelOneSpellingWords[englishWordAssignment]) {
      setText("spellingAnswerDisplay", "correct");
      showElement("spellingNextBtn");
    } else {
      setText("spellingAnswerDisplay", "incorrect");
    }
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    if (studentSpelling == englishLevelTwoSpellingWords[englishWordAssignment]) {
      setText("spellingAnswerDisplay", "correct");
      showElement("spellingNextBtn");
    } else {
      setText("spellingAnswerDisplay", "incorrect");
    }
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    if (studentSpelling == englishLevelThreeSpellingWords[englishWordAssignment]) {
      setText("spellingAnswerDisplay", "correct");
      showElement("spellingNextBtn");
    } else {
      setText("spellingAnswerDisplay", "incorrect");
    }
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    if (studentSpelling == englishLevelFourSpellingWords[englishWordAssignment]) {
      setText("spellingAnswerDisplay", "correct");
      showElement("spellingNextBtn");
    } else {
      setText("spellingAnswerDisplay", "incorrect");
    }
  }
});


onEvent("getSpellingBtn", "click", function() {
  showElement("spellingNextBtn");
  if (grade == "Pre-K" || grade == "Kindergarten") {
    setText("spellingAnswerDisplay", englishLevelOneSpellingWords[englishWordAssignment]);
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    setText("spellingAnswerDisplay", englishLevelTwoSpellingWords[englishWordAssignment]); 
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    setText("spellingAnswerDisplay", englishLevelThreeSpellingWords[englishWordAssignment]); 
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    setText("spellingAnswerDisplay", englishLevelFourSpellingWords[englishWordAssignment]); 
  }
});


onEvent("spellingNextBtn", "click", function() {
  shownEnglishAnswerOptions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  setText("studentSpellingAnswer", "");
  setText("spellingAnswerDisplay", "");
  hideElement("studentSpellingAnswer");
  hideElement("getSpellingBtn");
  hideElement("spellingNextBtn");
  if (grade == "Pre-K" || grade == "Kindergarten") {
    englishLevelOne();
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    englishLevelTwo();
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    englishLevelThree();
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    englishLevelFour();
  }
});


function setEnglishAnswerOptions() {
  if ((englishExerciseFinder == 1) || (englishExerciseFinder == 3)) {
      setSightWordsAnswerOptions();
  }
}


function setSightWordsAnswerOptions() {
  if (grade == "Pre-K" || grade == "Kindergarten") {
    if (englishWordAssignment == 0) {
      setEnglishFirstAnswerOption(and, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(and, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(and, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(and, englishLevelOneSightWords);
    } else if (englishWordAssignment == 1) {
      setEnglishFirstAnswerOption(of, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(of, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(of, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(of, englishLevelOneSightWords);
    } else if (englishWordAssignment == 2) {
      setEnglishFirstAnswerOption(to, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(to, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(to, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(to, englishLevelOneSightWords);
    } else if (englishWordAssignment == 3) {
      setEnglishFirstAnswerOption(is, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(is, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(is, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(is, englishLevelOneSightWords);
    } else if (englishWordAssignment == 4) {
      setEnglishFirstAnswerOption(was, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(was, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(was, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(was, englishLevelOneSightWords);
    } else if (englishWordAssignment == 5) {
      setEnglishFirstAnswerOption(you, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(you, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(you, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(you, englishLevelOneSightWords);
    } else if (englishWordAssignment == 6) {
      setEnglishFirstAnswerOption(stop, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(stop, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(stop, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(stop, englishLevelOneSightWords);
    } else if (englishWordAssignment == 7) {
      setEnglishFirstAnswerOption(the, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(the, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(the, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(the, englishLevelOneSightWords);
    } else if (englishWordAssignment == 8) {
      setEnglishFirstAnswerOption(are, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(are, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(are, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(are, englishLevelOneSightWords);
    } else if (englishWordAssignment == 9) {
      setEnglishFirstAnswerOption(have, englishLevelOneSightWords);
      setEnglishSecondAnswerOption(have, englishLevelOneSightWords);
      setEnglishThirdAnswerOption(have, englishLevelOneSightWords);
      setEnglishFourthAnswerOption(have, englishLevelOneSightWords);
    }
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    if (englishWordAssignment == 0) {
      setEnglishFirstAnswerOption(because, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(because, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(because, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(because, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 1) {
      setEnglishFirstAnswerOption(about, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(about, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(about, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(about, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 2) {
      setEnglishFirstAnswerOption(learn, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(learn, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(learn, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(learn, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 3) {
      setEnglishFirstAnswerOption(should, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(should, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(should, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(should, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 4) {
      setEnglishFirstAnswerOption(yours, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(yours, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(yours, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(yours, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 5) {
      setEnglishFirstAnswerOption(again, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(again, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(again, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(again, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 6) {
      setEnglishFirstAnswerOption(before, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(before, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(before, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(before, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 7) {
      setEnglishFirstAnswerOption(people, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(people, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(people, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(people, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 8) {
      setEnglishFirstAnswerOption(great, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(great, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(great, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(great, englishLevelTwoSightWords);
    } else if (englishWordAssignment == 9) {
      setEnglishFirstAnswerOption(which, englishLevelTwoSightWords);
      setEnglishSecondAnswerOption(which, englishLevelTwoSightWords);
      setEnglishThirdAnswerOption(which, englishLevelTwoSightWords);
      setEnglishFourthAnswerOption(which, englishLevelTwoSightWords);
    }
  }
}


function setEnglishFirstAnswerOption(spellingWord, wordSet) {
  if (englishCorrectAnswerAssignment == 1) {
    setText("englishFirstAnswerOption", wordSet[englishWordAssignment]);
  } else {
    englishWrongAnswer = randomNumber(0, 9);
    checkForMatchingAnswers();
    setText("englishFirstAnswerOption", spellingWord[englishWrongAnswer]);
  }
} 


function setEnglishSecondAnswerOption(spellingWord, wordSet) {
  if (englishCorrectAnswerAssignment == 2) {
    setText("englishSecondAnswerOption", wordSet[englishWordAssignment]);
  } else {
    englishWrongAnswer = randomNumber(0, 9);
    checkForMatchingAnswers();
    setText("englishSecondAnswerOption", spellingWord[englishWrongAnswer]);
  }
} 


function setEnglishThirdAnswerOption(spellingWord, wordSet) {
  if (englishCorrectAnswerAssignment == 3) {
    setText("englishThirdAnswerOption", wordSet[englishWordAssignment]);
  } else {
    englishWrongAnswer = randomNumber(0, 9);
    checkForMatchingAnswers();
    setText("englishThirdAnswerOption", spellingWord[englishWrongAnswer]);
  }
} 


function setEnglishFourthAnswerOption(spellingWord, wordSet) {
  if (englishCorrectAnswerAssignment == 4) {
    setText("englishFourthAnswerOption", wordSet[englishWordAssignment]);
  } else {
    englishWrongAnswer = randomNumber(0, 9);
    checkForMatchingAnswers();
    setText("englishFourthAnswerOption", spellingWord[englishWrongAnswer]);
  }
}


function checkForMatchingAnswers() {
  while (shownEnglishAnswerOptions[englishWrongAnswer] == 1) {
    englishWrongAnswer = randomNumber(0, 9);
  }
  shownEnglishAnswerOptions[englishWrongAnswer] = 1;
}


function englishLevelTwo() {
  englishExerciseFinder = randomNumber(3, 4);
  if (englishExerciseFinder == 3) {
    englishSighting();
    console.log("sight words");
  } else if (englishExerciseFinder == 4) {
    englishSpelling();
    console.log("spelling");
  }
}


function englishLevelThree() {
  englishExerciseFinder = randomNumber(5, 6);
  if (englishExerciseFinder == 5) {
    initialPrepEnglishTextAnalysis();
  } else if (englishExerciseFinder == 6) {
    englishSpelling();
    console.log("practice spelling");
  }
}


function englishLevelFour() {
  englishExerciseFinder = randomNumber(7, 8);
  if (englishExerciseFinder == 7) {
    checkingEnglishInitialPrep();
  } else if (englishExerciseFinder == 8) {
    englishSpelling();
    console.log("practice spelling");
  }
}


function checkingEnglishInitialPrep() {
  if (initialEnglishAnalysisSetUpComplete == 0) {
    initialPrepEnglishTextAnalysis();
  } else {
    setUpEnglishTextAnalysis();
  }
}


onEvent("englishCheckOne", "click", function() {
  if (englishCorrectAnswerAssignment == 1) {
    setText("englishAnswerDisplay", "correct");
  } else {
    setText("englishAnswerDisplay", "incorrect");
  }
});


onEvent("englishCheckTwo", "click", function() {
  if (englishCorrectAnswerAssignment == 2) {
    setText("englishAnswerDisplay", "correct");
  } else {
    setText("englishAnswerDisplay", "incorrect");
  }
});


onEvent("englishCheckThree", "click", function() {
  if (englishCorrectAnswerAssignment == 3) {
    setText("englishAnswerDisplay", "correct");
  } else {
    setText("englishAnswerDisplay", "incorrect");
  }
});


onEvent("englishCheckFour", "click", function() {
  if (englishCorrectAnswerAssignment == 4) {
    setText("englishAnswerDisplay", "correct");
  } else {
    setText("englishAnswerDisplay", "incorrect");
  }
});


onEvent("englishNextBtn", "click", function() {
  shownEnglishAnswerOptions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  setText("englishFirstAnswerOption", "");
  setText("englishSecondAnswerOption", "");
  setText("englishThirdAnswerOption", "");
  setText("englishFourthAnswerOption", "");
  setText("englishAnswerDisplay", "");
   if (grade == "Pre-K" || grade == "Kindergarten") {
    englishLevelOne();
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    englishLevelTwo();
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    englishLevelThree();
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    englishLevelFour();
  }
});


function initialPrepEnglishTextAnalysis() {
  setScreen("englishAnalysisTextScreen");
  readRecords("levelThreeQuestions", {}, function(records) {
    levelThreeEnglishQuestionsArray = records;
    readRecords("levelFourQuestions", {}, function(records) {
      levelFourEnglishQuestionsArray = records;
      readRecords("levelThreeTexts", {}, function(records) {
        levelThreeTextsArray = records;
        readRecords("levelFourTexts", {}, function(records) {
          levelFourTextsArray = records;
          initialEnglishAnalysisSetUpComplete = 1;
          setUpEnglishTextAnalysis();
        });
      });
    });
  });
}


function setUpEnglishTextAnalysis() {
  setScreen("englishAnalysisTextScreen");
  englishAnalysisTextTracker = randomNumber(1, 20);
  currentEnglishPage = 1;
  setEnglishAnalysisText();
}


function setEnglishAnalysisText() {
  if ((grade == "3rd Grade") || (grade == "4th Grade")) {
    if (currentEnglishPage == 1) {
      setText("englishAnalysisText", levelThreeTextsArray[englishAnalysisTextTracker - 1].pageOne);
    } else if (currentEnglishPage == 2) {
      setText("englishAnalysisText", levelThreeTextsArray[englishAnalysisTextTracker - 1].pageTwo);
    } else if (currentEnglishPage == 3) {
      setText("englishAnalysisText", levelThreeTextsArray[englishAnalysisTextTracker - 1].pageThree);
    } else if (currentEnglishPage == 4) {
      setText("englishAnalysisText", levelThreeTextsArray[englishAnalysisTextTracker - 1].pageFour);
    }
  } else if ((grade == "5th Grade") || (grade == "6th Grade")) {
    if (currentEnglishPage == 1) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageOne);
    } else if (currentEnglishPage == 2) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageTwo);
    } else if (currentEnglishPage == 3) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageThree);
    } else if (currentEnglishPage == 4) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageFour);
    } else if (currentEnglishPage == 5) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageFive);
    } else if (currentEnglishPage == 6) {
      setText("englishAnalysisText", levelFourTextsArray[englishAnalysisTextTracker - 1].pageSix);
    }
  }
  console.log("englishAnalysisTextTracker: " + englishAnalysisTextTracker);
  console.log("currentEnglishPage: " + currentEnglishPage);
}


onEvent("englishAnalysisAnswerBtn", "click", function() {
  setScreen("englishAnalysisAnswerScreen");
  if (visitEnglishQuestion == 0) {
    englishQuestionTracker = randomNumber(1, 4);
    setEnglishAnalysisQuestion();
  } else {
    setEnglishAnalysisQuestion();
  }
});


function setEnglishAnalysisQuestion() {
  console.log("function setEnglishAnalysisQuestion called");
  visitEnglishQuestion++;
  if ((grade == "3rd Grade") || (grade == "4th Grade")) {
    if (englishQuestionTracker == 1) {
      setText("englishAnalysisQuestion", levelThreeEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionOne);
    } else if (englishQuestionTracker == 2) {
      setText("englishAnalysisQuestion", levelThreeEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionTwo);
    } else if (englishQuestionTracker == 3) {
      setText("englishAnalysisQuestion", levelThreeEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionThree);
    } else if (englishQuestionTracker == 4) {
      setText("englishAnalysisQuestion", levelThreeEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionFour);
    }
  } else if ((grade == "5th Grade") || (grade == "6th Grade")) {
    if (englishQuestionTracker == 1) {
      setText("englishAnalysisQuestion", levelFourEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionOne);
    } else if (englishQuestionTracker == 2) {
      setText("englishAnalysisQuestion", levelFourEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionTwo);
    } else if (englishQuestionTracker == 3) {
      setText("englishAnalysisQuestion", levelFourEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionThree);
    } else if (englishQuestionTracker == 4) {
      setText("englishAnalysisQuestion", levelFourEnglishQuestionsArray[englishAnalysisTextTracker - 1].questionFour);
    }
  }
}


onEvent("englishReturnTextBtn", "click", function() {
  currentEnglishPage = 1;
  setScreen("englishAnalysisTextScreen");
  setEnglishAnalysisText();
});


onEvent("englishAnalysisNextBtn", "click", function() {
  visitEnglishQuestion = 0;
  setText("englishAnalysisAnswer", "");
  if ((grade == "3rd Grade") || (grade == "4th Grade")) {
    englishLevelThree();
  } else if ((grade == "5th Grade") || (grade == "6th Grade")) {
    englishLevelFour();
  }
});


onEvent("analysisTextPrevious", "click", function() {
  currentEnglishPage--;
  if ((grade == "3rd Grade") || (grade == "4th Grade")) {
    currentEnglishPage = wrap(currentEnglishPage, 1, 4);
  } else if ((grade == "5th Grade") || (grade == "6th Grade")) {
    currentEnglishPage = wrap(currentEnglishPage, 1, 6);
  }
  setEnglishAnalysisText();
});


onEvent("analysisTextNext", "click", function() {
  currentEnglishPage++;
  if ((grade == "3rd Grade") || (grade == "4th Grade")) {
    currentEnglishPage = wrap(currentEnglishPage, 1, 4);
  } else if ((grade == "5th Grade") || (grade == "6th Grade")) {
    currentEnglishPage = wrap(currentEnglishPage, 1, 6);
  }
  setEnglishAnalysisText();
});


function wrap(val, low, high){
  var output;
  if(val < low){
    output = high;
  } else if (val > high){
    output = low;
  } else {
    output = val;
  }
  return output;
}


function chooseScienceGrade() {
  if (grade == "Pre-K" || grade == "Kindergarten") {
    videos = "levelOneVideos";
    setUpScienceVideos();
    activityArray[12] = 1;
  } else if (grade == "1st Grade" || grade == "2nd Grade") {
    videos = "levelTwoVideos";
    setUpScienceVideos();
    activityArray[13] = 1;
  } else if (grade == "3rd Grade" || grade == "4th Grade") {
    flashcards = "levelThreeFlashcards";
    setScreen("flashcardsHomeScreen");
    activityArray[14] = 1;
  } else if (grade == "5th Grade" || grade == "6th Grade") {
    flashcards = "levelFourFlashcards";
    setScreen("flashcardsHomeScreen");
    activityArray[15] = 1;
  } else {
    var reminder = prompt("Please select a subject and grade in the two dropdown menus displayed on the screen. Type 'OK' and press the 'OK' button to proceed.");
    //variable 'reminder' will not be called in this program
  }
}




onEvent("practiceFlashcardsBtn", "click", function(event) {
  readRecords(flashcards, {}, function(records) {
    if (records.length == 0) {
      // If there are no flashcards in the database, go to emptyDeck screen
      setScreen("noFlashcardsScreen");
    }
    else {
      allCards = records;
      choosePracticeCard();
      setScreen("practiceScreen");
    }
  });
});


onEvent("allFlashcardsBtn", "click", function(event) {
  readRecords(flashcards, {}, function(records) {
    if (records.length == 0) {
      setScreen("noFlashcardsScreen");
    }
    else {
      allCards = records;
      currentCard = 0;
      loadCardDetails(currentCard);
      setScreen("allFlashcardsScreen");
    }
  });
});


onEvent("addFlashcardBtn", "click", function(event) {
  isNewCard = true;
  setText("newCardTitle", "Add a New Card");
  clearNewCardScreen();
  setScreen("newCardScreen");
});


onEvent("flipFlashcardBtn", "click", function(event) {
  setText("flashcardText", allCards[practiceCard].answer);
  setProperty("flipFlashcardBtn", "hidden", true);
  setProperty("nextFlashcardBtn", "hidden", false);
});


onEvent("nextFlashcardBtn", "click", function(event) {
  choosePracticeCard();
  setProperty("flipFlashcardBtn", "hidden", false);
  setProperty("nextFlashcardBtn", "hidden", true);
});


onEvent("homeFromPracticeBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
  setProperty("flipFlashcardBtn", "hidden", false);
  setProperty("nextFlashcardBtn", "hidden", true);
});


onEvent("allFlashcardsScreen", "keydown", function(event) {
  if (event.key == "Right") {
    loadCardDetails(currentCard + 1);
  }
  else if (event.key == "Left") {
    loadCardDetails(currentCard - 1);
  }
});


onEvent("nextFlashcardArrow", "click", function(event) {
  loadCardDetails(currentCard + 1);
});


onEvent("previousFlashcardArrow", "click", function(event) {
  loadCardDetails(currentCard - 1);
});


onEvent("editFlashcardBtn", "click", function(event) {
  isNewCard = false;
  setText("newCardTitle", "Edit Card Details");
  setText("inputNewQuestion", allCards[currentCard].question);
  setText("inputNewAnswer", allCards[currentCard].answer);
  setText("errorNewCardLabel", "");
  setScreen("newCardScreen");
});


onEvent("deleteFlashcardBtn", "click", function(event) {
  deleteRecord(flashcards, allCards[currentCard], function(success) {
    if (success) {
      setScreen("successfulDeleteScreen");
    }
    else {
      setScreen("errorScreen");
      setText("errorLabel", "Something went wrong! (Inside deleteRecord)");
    }
  });


});
onEvent("backHomeBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
});


onEvent("submitNewCardBtn", "click", function(event) {
  var question = getText("inputNewQuestion");
  var answer = getText("inputNewAnswer");
  if (question == "" || answer == "") {
    setText("errorNewCardLabel", "Both sides of the card must be filled out. Please try again.");
  }
  else if (isNewCard) {
    createRecord(flashcards, {question:question, answer:answer}, function(record) {
      setScreen("successfulNewCardScreen");
      clearNewCardScreen();
    });
  }
  else {
    var cardToUpdate = allCards[currentCard];
    cardToUpdate.question = question;
    cardToUpdate.answer = answer;
    updateRecord(flashcards, cardToUpdate, function(record, success) {
      if (success) {
        allCards[currentCard] = record;
        loadCardDetails(currentCard);
        setScreen("allFlashcardsScreen");
        clearNewCardScreen();
      }
      else {
        setScreen("errorScreen");
        setText("errorLabel", "Something went wrong! (Inside updateRecord)");
      }
    });
  }
});


onEvent("flashcardBackBtn", "click", function(event) {
  if (isNewCard) {
    setScreen("flashcardsHomeScreen");
  }
  else {
    setScreen("allFlashcardsScreen");
  }
  clearNewCardScreen();
});


onEvent("homeFromAddFlashcardBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
});


onEvent("addAnotherFlashcardBtn", "click", function(event) {
  setScreen("newCardScreen");
});


onEvent("homeFromNoFlashcardsBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
});


onEvent("homeFromDeleteBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
});


onEvent("returnHomeBtn", "click", function(event) {
  setScreen("flashcardsHomeScreen");
});


function clearNewCardScreen() {
  setText("inputNewQuestion", "");
  setText("inputNewAnswer", "");
  setText("errorNewCardLabel", "");
}


function choosePracticeCard() {
  practiceCard = randomNumber(0, allCards.length - 1);
  setText("flashcardText", allCards[practiceCard].question);
}


function loadCardDetails(index) {
  if (index == -1) {
    index = allCards.length - 1;
  }
  else if (index == allCards.length) {
    index = 0;
  }
  currentCard = index;
  setText("flashcardQuestions", allCards[currentCard].question);
  setText("flashcardAnswers", allCards[currentCard].answer);
}


function setUpScienceVideos() {
  setScreen("scienceVideosScreen");
  readRecords(videos, {}, function(records) {
    allVideos = records;
    chooseScienceVideo();
  });
}


function chooseScienceVideo() {
  var scienceVideoTracker = randomNumber(1, 20);
  while (scienceVideoTracker == scienceVideoArrayTracker[scienceVideoArrayTracker.length - 1]) {
    scienceVideoTracker = randomNumber(1, 20);
  }
  appendItem(scienceVideoArrayTracker, scienceVideoTracker);
  setText("scienceVideoTitle", allVideos[scienceVideoTracker - 1].title);
  setText("scienceVideoURL", allVideos[scienceVideoTracker - 1].url);
}


onEvent("scienceVideosNextBtn", "click", function() {
  chooseScienceVideo();
});


onEvent("projectInstructionsBtn", "click", function() {
  setScreen("projectInstructionsScreen");
});


onEvent("projectExploreBtn", "click", function() {
  setScreen("projectExploreScreen");
  setProjectExplore();
});


onEvent("projectExploreFromInstructionsBtn", "click", function() {
  setScreen("projectExploreScreen");
  setProjectExplore();
});


function setProjectExplore() {
  if(grade == "Pre-K" || grade == "Kindergarten" || grade == "1st Grade" || grade == "2nd Grade") {
    projectExploreEasy();
  } else if  (grade == "3rd Grade" || grade == "4th Grade" || grade == "5th Grade" || grade == "6th Grade") {
    projectExploreHard();
  }
}


function projectExploreEasy() {
  readRecords("projectExploreEasyResources", {}, function(records) {
    projectExploreResourcesArray = records;
    console.log("projectExploreResourcesArray complete");
    setText("projectExploreTitle", projectExploreResourcesArray[projectExploreResourceTracker - 1].title);
    setText("projectExploreURL", projectExploreResourcesArray[projectExploreResourceTracker - 1].url);
    setImageURL("projectExploreTopicImg", projectExploreResourcesArray[projectExploreResourceTracker - 1].image);
    if (projectExploreResourcesArray[projectExploreResourceTracker - 1].medium == "video") {
      setImageURL("projectExploreMediumImg", "icon://fa-video-camera");
    } else if (projectExploreResourcesArray[projectExploreResourceTracker - 1].medium == "article") {
      setImageURL("projectExploreMediumImg", "icon://fa-file-text");
    }
  });
}


function projectExploreHard() {
  readRecords("projectExploreHardResources", {}, function(records) {
    projectExploreResourcesArray = records;
    console.log("projectExploreResourcesArray complete");
    setText("projectExploreTitle", projectExploreResourcesArray[projectExploreResourceTracker - 1].title);
    setText("projectExploreURL", projectExploreResourcesArray[projectExploreResourceTracker - 1].url);
    setImageURL("projectExploreTopicImg", projectExploreResourcesArray[projectExploreResourceTracker - 1].image);
    if (projectExploreResourcesArray[projectExploreResourceTracker - 1].medium == "video") {
      setImageURL("projectExploreMediumImg", "icon://fa-video-camera");
    } else if (projectExploreResourcesArray[projectExploreResourceTracker - 1].medium == "article") {
      setImageURL("projectExploreMediumImg", "icon://fa-file-text");
    }
  });
}


onEvent("projectRightArrowImg", "click", function() {
  projectExploreResourceTracker++;
  if ((grade == "Pre-K") || (grade == "Kindergarten") || grade == "1st Grade" || grade == "2nd Grade") {
    projectExploreResourceTracker = wrap(projectExploreResourceTracker, 1, 5);
    projectExploreEasy();
  } else if (grade == "3rd Grade" || grade == "4th Grade" || (grade == "5th Grade") || (grade == "6th Grade")) {
    projectExploreResourceTracker = wrap(projectExploreResourceTracker, 1, 6);
    projectExploreHard();
  }
});


onEvent("projectLeftArrowImg", "click", function() {
  projectExploreResourceTracker--;
  if ((grade == "Pre-K") || (grade == "Kindergarten") || grade == "1st Grade" || grade == "2nd Grade") {
    projectExploreResourceTracker = wrap(projectExploreResourceTracker, 1, 5);
    projectExploreEasy();
  } else if (grade == "3rd Grade" || grade == "4th Grade" || (grade == "5th Grade") || (grade == "6th Grade")) {
    projectExploreResourceTracker = wrap(projectExploreResourceTracker, 1, 6);
    projectExploreHard();
  }
});
