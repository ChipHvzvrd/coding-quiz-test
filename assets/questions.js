var questionEl = document.getElementById("question-column");
var answerEl = document.querySelector("#answer-column");


var questionOne = function() {
    var choiceEl = document.createElement("li");
    questionEl.innerHTML = "What programming language do we use?";
    choiceEl.className = "choice";
    choiceEl.textContent = "Javascript";
    answerEl.appendChild(choiceEl);
}

startBtn.addEventListener("click", questionOne);