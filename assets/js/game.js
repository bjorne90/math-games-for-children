// Declare global variables for the current operation, current question, and score
let currentOperation = "";
let currentQuestion = {};
let score = 0;

// Starts a new game with the specified operation
function startGame(operation) {
    currentOperation = operation;
    generateQuestion();
}

// Generates a math question with two random numbers and multiple choice answers based on the current operation
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

// Generates three incorrect answers based on a correct answer
function generateIncorrectAnswers(correctAnswer) {
    let incorrectAnswers = [];

    while (incorrectAnswers.length < 3) {
        let randomAnswer = correctAnswer + Math.floor(Math.random() * 5) - 2;

        if (randomAnswer !== correctAnswer && !incorrectAnswers.includes(randomAnswer)) {
            incorrectAnswers.push(randomAnswer);
        }
    }

    return incorrectAnswers;
}

// Displays the current math question and multiple choice options in the DOM
function displayQuestion () {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    questionElement.innerHTML = `What is ${currentQuestion.num1} ${currentOperation === 'add' ? '+' : currentOperation === 'subtract' ? '-' : currentOperation === 'multiply' ? '×' : '÷'} ${currentQuestion.num2}?`;

    let allAnswers = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5);

    for (let answer of allAnswers) {
        let button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer);
        optionsElement.appendChild(button);
    }
}