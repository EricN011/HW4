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
var initialsInput = document.querySelector("#initials");
var userInitialsSpan = document.querySelector("#user-initials");
var msgDiv = document.getElementById("msg");
var userScore = document.getElementById("finalScore");

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

// High Score Button
scoreBtn.addEventListener("click", scorePage);
function scorePage() {
  quizPage.classList.add("hide");
  highScores.classList.remove("hide");
}

// timer
var secondsLeft = 59;
var countDown = secondsLeft;

// Events

// start timer
function startTimer() {
  countDown = setInterval(function() {
    timer.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft > 0) {
      secondsLeft--;
    } else {
      clearInterval(countDown);
      secondsLeft = 0;
      completeQuiz();
    }
  }, 1000);
}

//end of quiz
function completeQuiz() {
  quizPage.classList.add("hide");
  finQuiz.classList.remove("hide");
  var finalScore = secondsLeft;
  //display score
  score.style.display = "block";
  score.innerHTML += "<p>" + finalScore + "</p>";
  var inputCount = 0;
  // submit score
  submit.addEventListener("click", function(btnClick) {
    btnClick.preventDefault();
    finQuiz.classList.add("hide");
    highScores.classList.remove("hide");
    // store score in local storage
    var user = initialsInput.value;
    localStorage.setItem("user#" + inputCount, user);

    var lastUser = localStorage.getItem("initialsInput");
    userInitialsSpan.textContent = lastUser.initials;
    console.log(lastUser);
    // combine the initials and the score
    var x = user;
    var y = finalScore;
    var z = user + " = " + finalScore;
    console.log(z);
    // post the score in the high scores page
    userScore.innerHTML = "<p>" + z + "</p>";
    userScore++;
  });
}

// determine the number of questions
var finalQuestion = questions.length - 1;
var currentQuestion = 0;

// start quiz
start.addEventListener("click", startQuiz);
function startQuiz() {
  startQ.classList.add("hide");
  question.classList.remove("hide");
  choices.classList.remove("hide");
  renderQuestion();
  startTimer();
}

// render the question list
function renderQuestion() {
  var q = questions[currentQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
// confirm the answer
function checkAnswer(answer) {
  // correct answer
  if (answer == questions[currentQuestion].correct) {
    currentQuestion++;
    msgDiv.style.display = "block";
    msgDiv.innerHTML = "<p>" + " " + "</p>";
    // incorrect answer
  } else {
    // punish them with time penalty
    secondsLeft -= 15;
    // tell them they're wrong
    function displayMessage() {
      msgDiv.style.display = "block";
      msgDiv.innerHTML = "<p>" + "Wrong" + "</p>";
    }
    displayMessage();
  }
  // continue funneling through questions
  if (currentQuestion <= finalQuestion) {
    renderQuestion();
  } else {
    // stop the quiz
    clearInterval(countDown);
    completeQuiz();
    secondsLeft = 0;
  }
}

//restart button
restart.addEventListener("click", restartQuiz);
function restartQuiz() {
  quizPage.classList.remove("hide");
  highScores.classList.add("hide");
  start.classList.remove("hide");
  question.classList.add("hide");
  choices.classList.add("hide");
  currentQuestion = 0;
  secondsLeft = 60;
  renderQuestion();
  startTimer();
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

// choose answer
// enter initials and submit score, go to highscore event

// init
// none
