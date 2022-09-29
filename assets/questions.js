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
nxtBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion(); 
})

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
    clearStatusClass(document.body);
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
     if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nxtBtn.classList.remove('hide');
     }else {
        startBtn.innerText = "Restart";
        startBtn.style.visibility = "visible";
        stopBtn.style.visibility = "visible";
        startBtn.onclick = function() {
            document.location.reload();
        }
     }
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
        question: "What is the server side language of JavaScript called?",
        answers: [
            {
                text: "Python", correct: false
            },
            {
                text: "Node.js", correct: true
            },
            {
                text: "HTML 5", correct: false
            },
            {
                text: "C++", correct: false
            },            
        ]
    },
    {
        question: "What is JavaScripts techinical name?",
        answers: [
            {
                text: "TypeScript", correct: false
            },
            {
                text: "Java", correct: false
            },
            {
                text: "EcmaScript", correct: true
            },
            {
                text: "coffeeScript", correct: false
            },            
        ]
    },
    {
        question: "Who invented JavaScript?",
        answers: [
            {
                text: "Brendan Eich", correct: true
            },
            {
                text: "Gavin Wood", correct: false
            },
            {
                text: "James Gosling", correct: false
            },
            {
                text: "Robert Gentleman", correct: false
            },            
        ]
    },
    {
        question: "What is the naming convention for the JavaScript file extension?",
        answers: [
            {
                text: ".js", correct: true
            },
            {
                text: ".css", correct: false
            },
            {
                text: ".html", correct: false
            },
            {
                text: ".py", correct: false
            },            
        ]
    },
    {
        question: "What is a tool to clean up JavaScript code?",
        answers: [
            {
                text: "ESLint", correct: true
            },
            {
                text: "CleanMon", correct: false
            },
            {
                text: "Linty", correct: false
            },
            {
                text: "Broom", correct: false
            },            
        ]
    },
    {
        question: "How long did it take to develop JavaScript?",
        answers: [
            {
                text: "1 year", correct: false
            },      
            {
                text: "5 years", correct: false
            },
            {
                text: "10 days", correct: true
            },
            {
                text: "3 months", correct: false
            },            
        ]
    },
]

const userScore = document.getElementById("highScore");
const leaderBoard = document.getElementById("leaderboard");
const saveBtn = document.getElementById("save-score");

stopBtn.addEventListener("click", storeScore);
saveBtn.addEventListener("click", saveScore);
leaderBoard.addEventListener("load", saveScore);

function saveScore() {
const newScore = document.createElement("li");
const quizScore = localStorage.getItem(`score`);
let newScoreString = JSON.stringify(quizScore);
newScore.innerHTML = newScoreString;
leaderBoard.appendChild(newScore);
}

function storeScore() {
let time_serial = JSON.stringify(time);
localStorage.setItem(`score`, time_serial);
document.getElementById("highScore").innerHTML = JSON.parse(localStorage.getItem(`score`)) + "/180";
saveBtn.style.visibility = "visible";
}

function scores() {
    
}