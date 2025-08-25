// Preguntas organizadas por tema y dificultad
const allQuestions = {
    matematicas: {
        facil: [
            {
                question: "¿Cuál es la raíz cuadrada de 64?",
                options: ["6", "7", "8", "9"],
                answer: 2
            },
            {
                question: "¿Cuánto es 2 + 2?",
                options: ["3", "4", "5", "6"],
                answer: 1
            },
            {
                question: "¿Cuánto es 10 dividido por 2?",
                options: ["3", "4", "5", "6"],
                answer: 2
            }
        ],
        medio: [
            {
                question: "¿Qué número es el siguiente en la secuencia: 1, 1, 2, 3, 5, 8...?",
                options: ["11", "12", "13", "14"],
                answer: 2
            },
            {
                question: "¿Cuánto es 7 * 8?",
                options: ["54", "56", "64", "72"],
                answer: 1
            },
            {
                question: "¿Cuál es el área de un cuadrado con un lado de 5cm?",
                options: ["10cm²", "15cm²", "20cm²", "25cm²"],
                answer: 3
            }
        ],
        dificil: [
            {
                question: "¿Cuál es el valor de Pi (π) con dos decimales?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                answer: 1
            },
            {
                question: "¿Cuánto es la integral de 2x dx?",
                options: ["2", "x² + C", "x²", "2x"],
                answer: 1
            },
            {
                question: "Si $f(x) = 2x + 1$ y $g(x) = x^2$, ¿cuál es el valor de $g(f(2))$?",
                options: ["10", "15", "20", "25"],
                answer: 3
            }
        ]
    },
    programacion: {
        facil: [
            {
                question: "¿Qué lenguaje usamos para dar estilos a las páginas web?",
                options: ["Python", "JavaScript", "HTML", "CSS"],
                answer: 3
            },
            {
                question: "¿Qué es un 'array'?",
                options: ["Un tipo de bucle", "Una estructura de datos", "Una función", "Un método"],
                answer: 1
            },
            {
                question: "¿Qué etiqueta HTML se usa para un encabezado de primer nivel?",
                options: ["<h1>", "<header>", "<head>", "<title>"],
                answer: 0
            }
        ],
        medio: [
            {
                question: "¿Qué significa 'DOM' en el contexto de JavaScript?",
                options: ["Data Object Model", "Document Object Model", "Design Object Markup", "Dynamic Operation Method"],
                answer: 1
            },
            {
                question: "¿Qué bucle se ejecuta al menos una vez, incluso si la condición es falsa?",
                options: ["for", "while", "do-while", "if"],
                answer: 2
            },
            {
                question: "¿Qué método se usa para añadir un elemento al final de un array en JavaScript?",
                options: ["pop()", "push()", "shift()", "unshift()"],
                answer: 1
            }
        ],
        dificil: [
            {
                question: "¿Qué es un 'paradigma de programación funcional'?",
                options: ["Un estilo de programación basado en objetos", "Un enfoque que evita el estado mutable", "Un tipo de base de datos", "Un método para depurar código"],
                answer: 1
            },
            {
                question: "¿Qué es un 'deadlock' en la programación concurrente?",
                options: ["Un error de sintaxis", "Una situación donde dos o más procesos se bloquean mutuamente", "Un tipo de ataque informático", "Una optimización de memoria"],
                answer: 1
            },
            {
                question: "¿Qué algoritmo de ordenamiento tiene la complejidad de O(n log n) en el caso promedio?",
                options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
                answer: 2
            }
        ]
    },
    logica: {
        facil: [
            {
                question: "Si un gallo pone un huevo en la cima de una casa inclinada, ¿hacia dónde rodará?",
                options: ["Hacia la izquierda", "Hacia la derecha", "Hacia atrás", "Los gallos no ponen huevos"],
                answer: 3
            },
            {
                question: "Tienes 5 manzanas y te quitan 2. ¿Cuántas manzanas te quedan?",
                options: ["2", "3", "5", "7"],
                answer: 1
            },
            {
                question: "Un pato, un perro y una vaca están en un pasto. El pato camina, el perro corre. ¿Qué hace la vaca?",
                options: ["Come", "Corre", "Camina", "Nada"],
                answer: 0
            }
        ],
        medio: [
            {
                question: "Un autobús llega a una parada, bajan 5 personas y suben 3. ¿Cuántas personas hay ahora?",
                options: ["Depende del número inicial", "3", "5", "8"],
                answer: 0
            },
            {
                question: "Soy un número de 3 dígitos. Mi segundo dígito es cuatro veces más grande que el tercer dígito. Mi primer dígito es tres menos que mi segundo dígito. ¿Qué número soy?",
                options: ["141", "252", "363", "482"],
                answer: 0
            },
            {
                question: "Un ciego perdió su perro. ¿Cómo lo encontró?",
                options: ["Con un bastón", "Preguntando a la gente", "Llamándolo", "No lo encontró"],
                answer: 2
            }
        ],
        dificil: [
            {
                question: "Si todos los A son B, y todos los B son C, ¿qué puedes concluir?",
                options: ["Todos los C son A", "Algunos A son C", "Todos los A son C", "Ninguna de las anteriores"],
                answer: 2
            },
            {
                question: "Si en un cajón tienes 10 calcetines blancos y 10 negros, ¿cuántos debes sacar para asegurarte de tener un par del mismo color?",
                options: ["2", "3", "11", "20"],
                answer: 1
            },
            {
                question: "Un hombre está en una habitación. Tiene un fósforo, una vela y una chimenea. ¿Qué enciende primero?",
                options: ["La vela", "La chimenea", "El fósforo", "La habitación"],
                answer: 2
            }
        ]
    },
    "ciencias-computacion": {
        facil: [
            {
                question: "¿Qué es un 'bit'?",
                options: ["Una unidad de memoria", "La unidad más pequeña de datos", "Un tipo de archivo", "Una instrucción de CPU"],
                answer: 1
            },
            {
                question: "¿Qué significa 'URL'?",
                options: ["Uniform Resource Link", "Universal Resource Locator", "Unified Resource Link", "Uniform Resource Locator"],
                answer: 3
            },
            {
                question: "¿Qué parte de la computadora es el 'cerebro'?",
                options: ["Disco Duro", "Memoria RAM", "CPU", "Tarjeta de Video"],
                answer: 2
            }
        ],
        medio: [
            {
                question: "¿Qué protocolo se usa para enviar correos electrónicos?",
                options: ["FTP", "HTTP", "SMTP", "TCP"],
                answer: 2
            },
            {
                question: "¿Qué significa 'RAM'?",
                options: ["Random Access Memory", "Read Access Memory", "Remote Access Module", "Real-time Application Management"],
                answer: 0
            },
            {
                question: "¿Qué es un 'algoritmo'?",
                options: ["Un tipo de programa", "Una secuencia de pasos para resolver un problema", "Un error de código", "Un lenguaje de programación"],
                answer: 1
            }
        ],
        dificil: [
            {
                question: "¿Qué es un 'árbol de búsqueda binario balanceado'?",
                options: ["Un tipo de base de datos", "Una estructura de datos de árbol donde la altura de los dos subárboles de cualquier nodo difiere en no más de uno", "Un algoritmo de compresión", "Un tipo de red neuronal"],
                answer: 1
            },
            {
                question: "¿Qué es un 'sistema operativo de tiempo real' (RTOS)?",
                options: ["Un sistema que se actualiza constantemente", "Un sistema que garantiza la respuesta dentro de un plazo de tiempo específico", "Un sistema que solo se usa para videojuegos", "Un sistema que no requiere internet"],
                answer: 1
            },
            {
                question: "¿Qué es la 'complejidad de tiempo' de un algoritmo?",
                options: ["La cantidad de memoria que usa", "El tiempo que tarda en ejecutarse el algoritmo", "Una medida de la eficiencia del algoritmo en función del tamaño de la entrada", "El número de líneas de código"],
                answer: 2
            }
        ]
    }
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
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const playButton = document.getElementById("play-button");
const quizGame = document.getElementById("quiz-game");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const feedbackMessage = document.getElementById("feedback-message");

// Evento para el botón de inicio
startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
        welcomePage.style.display = "none";
        gameContainer.style.display = "flex";
        welcomeTitle.textContent = `¡Hola, ${userName}!`;
        // Asegura que la dificultad 'facil' esté activa al cargar la página de inicio
        document.querySelector(`.difficulty-btn[data-difficulty="facil"]`).classList.add("active");
    } else {
        alert("Por favor, ingresa tu nombre para comenzar.");
    }
});

// Eventos para los botones de dificultad
difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remover la clase 'active' de todos los botones
        difficultyButtons.forEach(btn => btn.classList.remove("active"));
        // Añadir la clase 'active' al botón clickeado
        button.classList.add("active");
    });
});

// Evento para el botón de jugar
playButton.addEventListener("click", () => {
    const selectedTheme = themeSelector.value;
    // Obtener la dificultad seleccionada buscando el botón activo
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
