const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Roma", "Berlín"],
    answer: 1
  },
  {
    question: "¿Cuál es 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "¿Qué lenguaje usamos para estructurar páginas web?",
    options: ["Python", "JavaScript", "HTML", "CSS"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  questionEl.textContent = questions[currentQuestion].question;

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
    alert("¡Correcto!");
  } else {
    alert("Incorrecto");
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert(`Juego terminado. Tu puntaje es ${score} de ${questions.length}`);
  }
  document.getElementById("score").textContent = `Puntaje: ${score}`;
}

// Iniciar el juego mostrando la primera pregunta
showQuestion();
