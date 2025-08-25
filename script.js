// Preguntas organizadas por tema
const allQuestions = {
    matematicas: [
        {
            question: "¿Cuál es la raíz cuadrada de 64?",
            options: ["6", "7", "8", "9"],
            answer: 2
        },
        {
            question: "¿Qué número es el siguiente en la secuencia: 1, 1, 2, 3, 5, 8...?",
            options: ["11", "12", "13", "14"],
            answer: 2
        },
        {
            question: "¿Cuánto es 7 * 8?",
            options: ["54", "56", "64", "72"],
            answer: 1
        }
    ],
    programacion: [
        {
            question: "¿Qué lenguaje usamos para dar estilos a las páginas web?",
            options: ["Python", "JavaScript", "HTML", "CSS"],
            answer: 3
        },
        {
            question: "¿Qué significa 'DOM' en el contexto de JavaScript?",
            options: ["Data Object Model", "Document Object Model", "Design Object Markup", "Dynamic Operation Method"],
            answer: 1
        },
        {
            question: "¿Qué es un 'array'?",
            options: ["Un tipo de bucle", "Una función", "Una estructura de datos", "Un método"],
            answer: 2
        }
    ],
    logica: [
        {
            question: "Si todos los A son B, y todos los B son C, ¿qué puedes concluir?",
            options: ["Todos los C son A", "Algunos A son C", "Todos los A son C", "Ninguna de las anteriores"],
            answer: 2
        },
        {
            question: "Un pato, un perro y una vaca están en un pasto. El pato camina, el perro corre. ¿Qué hace la vaca?",
            options: ["Come", "Corre", "Camina", "Nada"],
            answer: 0
        },
        {
            question: "Soy un número de 3 dígitos. Mi segundo dígito es cuatro veces más grande que el tercer dígito. Mi primer dígito es tres menos que mi segundo dígito. ¿Qué número soy?",
            options: ["141", "252", "363", "482"],
            answer: 0
        }
    ],
    "ciencias-computacion": [
        {
            question: "¿Qué es un 'bit'?",
            options: ["Una unidad de memoria", "La unidad más pequeña de datos", "Un tipo de archivo", "Una instrucción de CPU"],
            answer: 1
        },
        {
            question: "¿Qué es un 'algoritmo'?",
            options: ["Un tipo de programa", "Una secuencia de pasos para resolver un problema", "Un error de código", "Un lenguaje de programación"],
            answer: 1
        },
        {
            question: "¿Qué significa 'URL'?",
            options: ["Uniform Resource Link", "Universal Resource Locator", "Unified Resource Link", "Uniform Resource Locator"],
            answer: 3
        }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";

// Elementos del DOM
const welcomePage = document.getElementById("welcome-page");
const gameContainer = document.getElementById("game-container");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-button");
const welcomeTitle = document.getElementById("welcome-title");
const themeSelector = document.getElementById("theme-selector");
const playButton = document.getElementById("play-button");
const quizGame = document.getElementById("quiz-game");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

// Evento para el botón de inicio
startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
        welcomePage.style.display = "none";
        gameContainer.style.display = "flex";
        welcomeTitle.textContent = `¡Hola, ${userName}!`;
    } else {
        alert("Por favor, ingresa tu nombre para comenzar.");
    }
});

// Evento para el botón de jugar
playButton.addEventListener("click", () => {
    const selectedTheme = themeSelector.value;
    currentQuestions = allQuestions[selectedTheme];
    
    if (currentQuestions.length > 0) {
        document.getElementById("quiz-container").style.display = "none";
        quizGame.style.display = "flex";
        currentQuestionIndex = 0;
        score = 0;
        scoreEl.textContent = "Puntaje: 0";
        showQuestion();
    } else {
        alert("No hay preguntas para este tema.");
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

function checkAnswer(selected) {
    if (selected === currentQuestions[currentQuestionIndex].answer) {
        score++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        alert(`Juego terminado. Tu puntaje es ${score} de ${currentQuestions.length}`);
        // Ocultar el juego y mostrar el menú de nuevo
        quizGame.style.display = "none";
        document.getElementById("quiz-container").style.display = "flex";
    }
    scoreEl.textContent = `Puntaje: ${score}`;
}
