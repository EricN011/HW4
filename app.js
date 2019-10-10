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

start.addEventListener("click", startQuiz);
function startQuiz() {
  alert = "click!";
}
// array of questions (question~string, choices~array, answer~string, key~number)
var questions = [
  {
    question: "Who was the first queen to ever sashay away?",
    choiceA: "Akashia",
    choiceB: "Porkchop",
    choiceC: "Bebe Zahara Benet",
    correct: "B"
  },
  {
    question:
      "During the season 4 workroom argument betwwen Phi Phi O’Hara and Sharon Needles, what does Phi Phi scream at Sharon?",
    choiceA: "I will whoop your ass! Bitch, I am from Chicago!",
    choiceB: "Check your lipstick before you come for me!",
    choiceC: "Go back to party city where you belong!",
    correct: "C"
  },
  {
    question:
      "Mimi Imfurst became famous, or should I say infamous, for lifting which fellow drag race contestant during their “Lip Sync For Your Life” performance?",
    choiceA: "Raja Gemini",
    choiceB: "India Ferrah",
    choiceC: "Delta Work",
    correct: "B"
  },
  {
    question:
      "Who are only four queens who have won the crown without needing to lip sync for their lives?",
    choiceA: "Tyra Sanchez, Bianca Del Rio, Violet Chachki, Sasha Velour",
    choiceB: "Raja, Jinkx Monsoon, Alaska, Bob the Drag Queen",
    choiceC:
      "BeBe Zehara Benet, Sharon Needles, Bianca Del Rio, Violet Chachki",
    correct: "A"
  }
];

// score
// helper functions

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
