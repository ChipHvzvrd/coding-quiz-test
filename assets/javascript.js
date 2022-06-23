function codeQuiz(questions, quizContainer, resultsContainer, submitButton){

    function generateQuestion(questions, quizContainer){
        var output = [];
        var answers;

        for(var i = 0; i < questions.length; i++){
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i +'" value="'+ letters +'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    +'</label>'
                );
            }

                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class = "answers">' + answers.join('') + '</div>'
                );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
//
    }
};


var quizQuestions = [
    {
        question: "What is 10/2?",
        answers: {
            a:'3',
            b:'5',
            c:'115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a:'3',
            b:'5',
            c:'10'
        },
        correctAnswer: 'c'
    }
];





