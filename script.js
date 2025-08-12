let quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperlink Machine Language",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
];

let questionE1 = document.getElementById("question");
let answerEls = document.querySelectorAll(".answer");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");
let quizBox = document.getElementById("quiz");

let currentquiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  let currentData = quizData[currentquiz];
  questionE1.innerHTML = currentData.question;
  a_text.innerHTML = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function deselectAnswers() {
  answerEls.forEach((el) => el.checked = false);
}

function getselected() {
  let selectAnswers = null;
  answerEls.forEach((el) => {
    if(el.checked) {
      selectAnswers = el.id;
    }
  });
  return selectAnswers;
}

submitBtn.addEventListener("click", function() {
  let userAnswer = getselected();

  if(userAnswer) {
    if(userAnswer === quizData[currentquiz].correct) {
      score++
    }
    currentquiz++;

    if(currentquiz < quizData.length) {
      loadQuiz();
    } else {
      quizBox.innerHTML = `<h2> you answered ${score} out of ${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Play again</button>`;
    }
  }
});
