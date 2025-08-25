// ... (código existente, no lo modifiques) ...
const allQuestions = {
    matematicas: {
        // ... (preguntas de matematicas) ...
    },
    programacion: {
        // ... (preguntas de programacion) ...
    },
    logica: {
        // ... (preguntas de logica) ...
    },
    "ciencias-computacion": {
        // ... (preguntas de ciencias de la computacion) ...
    }
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let selectedDifficulty = "facil";

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
const feedbackMessage = document.getElementById("feedback-message"); // Nuevo elemento

// ... (eventos existentes, no los modifiques) ...
startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
        welcomePage.style.display = "none";
        gameContainer.style.display = "flex";
        welcomeTitle.textContent = `¡Hola, ${userName}!`;
        document.querySelector(`.difficulty-btn[data-difficulty="${selectedDifficulty}"]`).classList.add("active");
    } else {
        alert("Por favor, ingresa tu nombre para comenzar.");
    }
});

difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        difficultyButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        selectedDifficulty = button.dataset.difficulty;
    });
});

playButton.addEventListener("click", () => {
    const selectedTheme = themeSelector.value;
    currentQuestions = allQuestions[selectedTheme][selectedDifficulty];
    
    if (currentQuestions && currentQuestions.length > 0) {
        document.getElementById("quiz-container").style.display = "none";
        quizGame.style.display = "flex";
        currentQuestionIndex = 0;
        score = 0;
        scoreEl.textContent = "Puntaje: 0";
        showQuestion();
    } else {
        alert("No hay preguntas para este tema o dificultad.");
    }
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

// Función para mostrar la retroalimentación en la página
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

    // Ocultar el mensaje después de 1.5 segundos
    setTimeout(() => {
        feedbackMessage.style.display = "none";
    }, 1500);
}

function checkAnswer(selected) {
    if (selected === currentQuestions[currentQuestionIndex].answer) {
        score++;
        showFeedback(true); // Llamar a la nueva función para acierto
    } else {
        showFeedback(false); // Llamar a la nueva función para error
    }
    
    // Retrasar el cambio de pregunta para que el usuario vea la retroalimentación
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            alert(`Juego terminado. Tu puntaje es ${score} de ${currentQuestions.length}`);
            quizGame.style.display = "none";
            document.getElementById("quiz-container").style.display = "flex";
        }
        scoreEl.textContent = `Puntaje: ${score}`;
    }, 1500); // 1.5 segundos de retraso
}
