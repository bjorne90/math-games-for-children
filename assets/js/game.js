let currentOperation = "";
let currentQuestion = {};
let score = 0;

function startGame(operation) {
    currentOperation = operation;
    generateQuestion();
}

function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = 0;

    switch (currentOperation) {
        case "add":
            correctAnswer = num1 + num2;
            break;
        case "subtract":
            correctAnswer = num1 - num2;
            break;
        case "multiply":
            correctAnswer = num1 * num2;
            break;
        case "divide":
            correctAnswer = parseFloat((num1 / num2).toFixed(2));
            break;           
    }

    let incorrectAnswers = generateIncorrectAnswers(correctAnswer);

    currentQuestion = {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers,
    };

    displayQuestion();
}

