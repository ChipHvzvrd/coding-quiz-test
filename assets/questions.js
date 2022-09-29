const startTime = 3;
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const countdownEl = document.getElementById('countdown');
let time = startTime * 60;


function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};

startBtn.addEventListener("click", () => {
    document.getElementById('startBtn').style.visibility = 'hidden';
    document.getElementById('stopBtn').style.visibility = 'visible';
    myInterval = setInterval(timer, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(myInterval);   
});



const startBtnQuiz = document.getElementById("start-btn");
const nxtBtn = document.getElementById("next-btn");
const questionConEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-button");

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    startBtnQuiz.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionConEl.classList.remove("hide");
    nextQuestion();
}

function nextQuestion () {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    })
}

function resetState() {
    nxtBtn.classList.add("hide");
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    } 
}

function selectAnswer (e) {
     const selectedBtn = e.target;
     const correct = selectedBtn.dataset.correct;
     setStatusClass(document.body, correct);
     Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
     });
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    }else {
        element.classList.add("wrong");
        time --;
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {
                text: "4", correct: true
            },
            {
                text: "22", correct: false
            }
        ]
    }
]