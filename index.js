var readlineSync = require("readline-sync")
var score = 0;
var name = readlineSync.question("What is your name? ");
console.log("Welcome "+ name + " to QuizManish? ");
console.log("\n");

function play(questions,answers)
{
  var userAnswer = readlineSync.question(questions);
  if(userAnswer.toUpperCase() === answers.toUpperCase())
  {
    console.log("Correct Answer!");
    score = score + 1;
  } else {
    console.log("Incorrect Answer!");
    score = score - 1;
  }

  console.log("Your Current Score is: ", score);
  console.log("--------");
}

var questionOne = "what is manish's fav color?";
var answerOne = "Black"; 
var question2 = "what is his fav food?";
var answer2 = "Momos";
var question3 = "what is his age?";
var answer3 = "21";
var question4 = "where do he live?";
var answer4 = "Jammu";
var question5 = "Manish's current Graduation year?";
var answer5 = "3rd";
play(questionOne,answerOne);
play(question2,answer2);
play(question3,answer3);
play(question4,answer4);
play(question5,answer5);
console.log("yay! You Score", score, "out of 5");

