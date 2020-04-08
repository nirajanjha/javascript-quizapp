const startbtn = document.getElementById("start");
const nextbtn = document.getElementById("nextbtn");
const questionblock = document.getElementById("question-block");

const questionelement = document.getElementById("questionelement");
const answerelement = document.getElementById("answerelement");

let suffledquestion, currentquestionindex;

startbtn.addEventListener("click", startgame);
nextbtn.addEventListener("click", () => {
  currentquestionindex++;
  setnextquestion();
});

function startgame() {
  startbtn.classList.add("hide");
  suffledquestion = question.sort(() => Math.random() - 0.5);
  currentquestionindex = 0;
  questionblock.classList.remove("hide");
  setnextquestion();
}

function setnextquestion() {
  resetstate();
  showquestion(suffledquestion[currentquestionindex]);
}

function resetstate() {
  nextbtn.classList.add("hide");
  while (answerelement.firstChild) {
    answerelement.removeChild(answerelement.firstChild);
  }
}

function showquestion(question) {
  questionelement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
    answerelement.appendChild(button);
  });
}

function selectanswer(e) {
  const selectbtn = e.target;
  const correct = selectbtn.dataset.correct;
  //   console.log(correct);
  setstatusclass(document.body, correct);

  Array.from(answerelement.children).forEach(button => {
    setstatusclass(button, button.dataset.correct);
    // console.log(button.dataset.correct);
  });
  if (suffledquestion.length > currentquestionindex + 1) {
    nextbtn.classList.remove("hide");
  } else {
    startbtn.innerText = "restart";
    startbtn.classList.remove("hide");
  }
}

function setstatusclass(element, correct) {
  clearstatusclass(element);
  console.log(correct);
  if (correct) {
    // console.log("correct");
    element.classList.add("correct");
  } else {
    // console.log("incorrect");
    element.classList.add("wrong");
  }
}

function clearstatusclass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const question = [
  {
    question: "what is 2+2?",
    answer: [
      { text: "4", correct: true },
      { text: "6", correct: false }
    ]
  },
  {
    question: "what is 4+4?",
    answer: [
      { text: "8", correct: true },
      { text: "6", correct: false }
    ]
  },
  {
    question: "what is 6+2?",
    answer: [
      { text: "8", correct: true },
      { text: "6", correct: false }
    ]
  },
  {
    question: "what is 2-2?",
    answer: [
      { text: "0", correct: true },
      { text: "6", correct: false }
    ]
  }
];
