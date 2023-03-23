let currentOperation = "";
let currentQuestion = {};
let score = 0;

function startGame(operation) {
    currentOperation = operation;
    generateQuestion();
}