// variables
var startQ = document.getElementById("start");
var scoreBtn = document.getElementById("scoreBtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choices = document.getElementById("answers");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var finQuiz = document.getElementById("finishQuiz");
var quizPage = document.getElementById("quizPage");
var submit = document.getElementById("submit");
var highScores = document.getElementById("highScores");
var restart = document.getElementById("restart");
var clear = document.getElementById("clear");
var score = document.getElementById("score");
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
// timer
var secondsLeft = 59;
var countDown = secondsLeft;

// Events

// set timer funtion
function startTimer() {
  var countDown = setInterval(function() {
    timer.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft > 0) {
      secondsLeft--;
    } else {
      clearInterval(countDown);
      score.textContent = secondsLeft;
      completeQuiz();
    }
  }, 1000);
}

function completeQuiz() {
  quizPage.classList.add("hide");
  finQuiz.classList.remove("hide");
}

scoreBtn.addEventListener("click", scorePage);
function scorePage() {
  quizPage.classList.add("hide");
  highScores.classList.remove("hide");
}

// start quiz
start.addEventListener("click", startQuiz);
function startQuiz() {
  startQ.classList.add("hide");
  question.classList.remove("hide");
  choices.classList.remove("hide");
  renderQuestion();
  startTimer();
}

var finalQuestion = questions.length - 1;
var currentQuestion = 0;

function renderQuestion() {
  var q = questions[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correct) {
    currentQuestion++;
  } else {
    alert("wrong");
    secondsLeft -= 15;
  }
  if (currentQuestion <= finalQuestion) {
    renderQuestion();
  } else {
    clearInterval(countDown);
    score.textContent = secondsLeft;
    completeQuiz();
  }
}

submit.addEventListener("click", showScores);
function showScores(btnClick) {
  btnClick.preventDefault();
  finQuiz.classList.add("hide");
  highScores.classList.remove("hide");
}

restart.addEventListener("click", startQuiz);

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

// choose answer
// enter initials and submit score, go to highscore event

// init
// none
