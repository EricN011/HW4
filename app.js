// variables
var startQ = document.getElementById("start");
var score = document.getElementById("scoreBtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choices = document.getElementById("answers");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var next = document.getElementById("next");

// array of questions (question~string, choices~array, answer~string, key~number)
let questions = [
  {
    question: "Question 1",
    choiceA: "False",
    choiceB: "Correct",
    choiceC: "False",
    choiceD: "False",
    correct: "B"
  },
  {
    question: "Question 2",
    choiceA: "Correct",
    choiceB: "False",
    choiceC: "False",
    choiceD: "False",
    correct: "A"
  },
  {
    question: "Question 3",
    choiceA: "False",
    choiceB: "False",
    choiceC: "Correct",
    choiceD: "False",
    correct: "C"
  },
  {
    question: "Question 4",
    choiceA: "False",
    choiceB: "False",
    choiceC: "False",
    choiceD: "Correct",
    correct: "D"
  }
];

start.addEventListener("click", startQuiz);
function startQuiz() {
  startQ.classList.add("hide");
  question.classList.remove("hide");
  choices.classList.remove("hide");
  showQuestion();
}
var finalQuestion = questions.length - 1;
var contQuestion = 0;

function showQuestion() {
  var q = questions[contQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
  } else {
  }
}

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
