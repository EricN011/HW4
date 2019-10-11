// variables
var start = document.getElementById("start");

start.addEventListener("click", startQuiz);
function startQuiz() {
  alert("click!");
}
// array of questions (question~string, choices~array, answer~string, key~number)
var questions = [
  {
    question: "Question 1",
    choices: ["False", "Correct", "False", "False"],
    answer: "Correct"
  },
  {
    question: "Question 2",
    answers: [
      { Text: "False", correct: false },
      { Text: "False", correct: false },
      { Text: "Correct", correct: true },
      { Text: "False", correct: false }
    ]
  },
  {
    question: "Question 3",
    answers: [
      { Text: "False", correct: false },
      { Text: "False", correct: false },
      { Text: "False", correct: false },
      { Text: "Correct", correct: true }
    ]
  },
  {
    question: "Question 4",
    answers: [
      { Text: "Correct", correct: true },
      { Text: "False", correct: false },
      { Text: "False", correct: false },
      { Text: "False", correct: false }
    ]
  }
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
