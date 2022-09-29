const startBtnQuiz = document.getElementById("start-btn");
const questionConEl = document.getElementById("question-container");


startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    console.log("working");
    startBtnQuiz.classList.add("hide");
    questionConEl.classList.remove("hide");
    nextQuestion();
}

function nextQuestion () {}

function selectAnswer () {}

const questions = [
    {
        question: "What is 2 + 2?",
        answer: [
            {
                text: "4", correct: true
            },
            {
                text: "22", correct: false
            }
        ]
    }
]