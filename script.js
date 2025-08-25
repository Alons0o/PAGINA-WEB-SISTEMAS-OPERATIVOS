// ... (código existente, no lo modifiques) ...
const allQuestions = {
    // ... (preguntas) ...
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let userAnswers = []; // Nuevo array para guardar las respuestas del usuario

// Elementos del DOM
const welcomePage = document.getElementById("welcome-page");
const gameContainer = document.getElementById("game-container");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-button");
const welcomeTitle = document.getElementById("welcome-title");
const themeSelector = document.getElementById("theme-selector");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const playButton = document.getElementById("play-button");
const quizGame = document.getElementById("quiz-game");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const feedbackMessage = document.getElementById("feedback-message");
const resultScreen = document.getElementById("result-screen"); // Nuevo elemento
const resultTitle = document.getElementById("result-title");
const finalScore = document.getElementById("final-score");
const questionResults = document.getElementById("question-results");
const restartButton = document.getElementById("restart-button");

// Evento para el botón de inicio
startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
        welcomePage.style.display = "none";
        gameContainer.style.display = "flex";
        welcomeTitle.textContent = `¡Hola, ${userName}!`;
        document.querySelector(`.difficulty-btn[data-difficulty="facil"]`).classList.add("active");
    } else {
        alert("Por favor, ingresa tu nombre para comenzar.");
    }
});

// Eventos para los botones de dificultad
difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        difficultyButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Evento para el botón de jugar
playButton.addEventListener("click", () => {
    const selectedTheme = themeSelector.value;
    const selectedDifficultyBtn = document.querySelector(".difficulty-btn.active");
    if (!selectedDifficultyBtn) {
        alert("Por favor, elige una dificultad.");
        return;
    }
    const selectedDifficulty = selectedDifficultyBtn.dataset.difficulty;
    
    currentQuestions = allQuestions[selectedTheme][selectedDifficulty];
    
    if (currentQuestions && currentQuestions.length > 0) {
        document.getElementById("quiz-container").style.display = "none";
        quizGame.style.display = "flex";
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = []; // Reinicia el array de respuestas
        scoreEl.textContent = "Puntaje: 0";
        showQuestion();
    } else {
        alert("No hay preguntas para este tema o dificultad.");
    }
});

// Evento para el botón de reiniciar
restartButton.addEventListener("click", () => {
    resultScreen.style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";
});


function showQuestion() {
    optionsEl.innerHTML = "";
    questionEl.textContent = currentQuestions[currentQuestionIndex].question;

    currentQuestions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function showFeedback(isCorrect) {
    feedbackMessage.style.display = "block";
    feedbackMessage.classList.remove("correct", "incorrect");
    feedbackMessage.innerHTML = "";

    if (isCorrect) {
        feedbackMessage.classList.add("correct");
        feedbackMessage.innerHTML = '<i class="fa-solid fa-check"></i> ¡Correcto!';
    } else {
        feedbackMessage.classList.add("incorrect");
        feedbackMessage.innerHTML = '<i class="fa-solid fa-xmark"></i> Incorrecto';
    }

    setTimeout(() => {
        feedbackMessage.style.display = "none";
    }, 1500);
}

function showResults() {
    quizGame.style.display = "none";
    resultScreen.style.display = "flex";
    resultTitle.textContent = `Juego Terminado, ${userName}!`;
    finalScore.textContent = `Tu puntaje final es ${score} de ${currentQuestions.length}`;
    
    questionResults.innerHTML = "";
    userAnswers.forEach(answer => {
        const item = document.createElement("div");
        item.className = "question-result-item";
        
        const questionText = document.createElement("p");
        questionText.textContent = `Pregunta: ${answer.question}`;
        
        const yourAnswer = document.createElement("p");
        yourAnswer.textContent = `Tu respuesta: ${answer.userAnswer}`;
        
        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = `Respuesta correcta: ${answer.correctAnswer}`;
        
        if (answer.isCorrect) {
            yourAnswer.classList.add("correct-answer");
            correctAnswer.classList.add("correct-answer");
            item.innerHTML += '<i class="fa-solid fa-check correct-answer"></i> ';
        } else {
            yourAnswer.classList.add("incorrect-answer");
            correctAnswer.classList.add("incorrect-answer");
            item.innerHTML += '<i class="fa-solid fa-xmark incorrect-answer"></i> ';
        }

        item.appendChild(questionText);
        item.appendChild(yourAnswer);
        item.appendChild(correctAnswer);
        questionResults.appendChild(item);
    });
}


function checkAnswer(selected) {
    const isCorrect = (selected === currentQuestions[currentQuestionIndex].answer);
    showFeedback(isCorrect);
    
    userAnswers.push({
        question: currentQuestions[currentQuestionIndex].question,
        userAnswer: currentQuestions[currentQuestionIndex].options[selected],
        correctAnswer: currentQuestions[currentQuestionIndex].options[currentQuestions[currentQuestionIndex].answer],
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        score++;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResults(); // Llama a la nueva función de resultados
        }
        scoreEl.textContent = `Puntaje: ${score}`;
    }, 1500);
}
