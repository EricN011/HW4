// variables
var header = document.getElementById("header");
var scoreBtn = document.getElementById("scoreBtn");
var timer = document.getElementById("timer");
var container = document.getElementById("container");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var highScore = document.getElementById("highScores");

start.addEventListener("click", function();
function startQuiz() {
  alert = "click!";
}
// array of questions (question~string, choices~array, answer~string, key~number)
var questions = [
  {
    question: "Question 1",
    answers: [
      { Text: "False", correct: false },
      { Text: "Correct", correct: true },
      { Text: "False", correct: false }
    ]
  },
  {
    question:
      "Question 2",
    answers: [
      { Text: "False", correct: false },
      { Text: "False", correct: false },
      { Text: "Correct", correct: true }
    ]
  },
  {
    question:
    "Question 2",
  answers: [
    { Text: "False", correct: false },
    { Text: "Correct", correct: true },
    { Text: "False", correct: false }
  },
  {
    question:
    "Question 2",
  answers: [
    { Text: "Correct", correct: true },
    { Text: "False", correct: false },
    { Text: "False", correct: false }
  },
];

// score
// helper functions
function renderQuestion(index) {
  return questions[index].title;
}
// helper functions

// events

// click highscore link
// find object in local storage
// parse object for screen
// display parsed object in html

// clear highscores
// go back
// start quiz

// choose answer
// enter initials and submit score, go to highscore event

// init
// none
