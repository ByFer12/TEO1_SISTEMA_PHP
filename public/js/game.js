//indice del arreglo para sacar las preguntas
let currentQuestionIndex = 0;
let score = 0;  //punteo obtenido y acumulado

const questions = [
    {
        id: 1,
        text: "¿Cuál es la capital de Francia?",
        answers: [
            { id: 1, text: "París", isCorrect: true },
            { id: 2, text: "Londres", isCorrect: false },
            { id: 3, text: "Berlín", isCorrect: false },
            { id: 4, text: "Madrid", isCorrect: false },
            { id: 5, text: "Roma", isCorrect: false }
        ]
    },
    {
        id: 2,
        text: "¿Cuál es el océano más grande?",
        answers: [
            { id: 6, text: "Atlántico", isCorrect: false },
            { id: 7, text: "Pacífico", isCorrect: true },
            { id: 8, text: "Índico", isCorrect: false },
            { id: 9, text: "Ártico", isCorrect: false },
            { id: 10, text: "Antártico", isCorrect: false }
        ]
    }
];

//Funcion que carga las preguntas
function loadQuestion(questionIndex) {
    if (questionIndex >= questions.length) {
        endGame();
        return;
    }
    //Obtenemos la pregunta segun el indice
    const question = questions[questionIndex];
    document.getElementById('question').textContent = question.text;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = ''; // Limpiar respuestas anteriores del div

    //agregar radiobutons para cada respuesta posible dentro del arreglo de respuestas
    question.answers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.style.display = 'flex';
        answerDiv.style.alignItems = 'center';

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `answer-${answer.id}`;
        radioInput.name = 'radioGroup';
        radioInput.value = answer.id;
        radioInput.style.marginRight = '12px';

        const label = document.createElement('label');
        label.htmlFor = `answer-${answer.id}`;
        label.textContent = answer.text;
        label.style.marginTop = '14px';

        answerDiv.appendChild(radioInput);
        answerDiv.appendChild(label);
        answersContainer.appendChild(answerDiv);
    });
}

//mostrar modal
function showModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('resultModal').style.display = 'block';
}
//ocultar modal
function hideModal() {
    document.getElementById('resultModal').style.display = 'none';
}


//verifica si la opcion seleccionada es la correcta
function checkAnswer() {
    //obtiene el valor del radio seleccionado
    const selectedAnswer = document.querySelector('input[name="radioGroup"]:checked');
    if (!selectedAnswer) {
        //("Error", "Por favor, selecciona una respuesta");
        alert("Porfavor seleccione una opcion");
        return;
    }

    const question = questions[currentQuestionIndex];
    const selectedAnswerId = parseInt(selectedAnswer.value, 10);
    const correctAnswer = question.answers.find(answer => answer.isCorrect);

    if (selectedAnswerId === correctAnswer.id) {
        score += 10; // Incrementar 10 puntos por respuesta correcta
        showModal("¡Correcto!", "¡Tu respuesta correcta!");
    } else {
        score -= 8; // Restar 8 puntos por respuesta incorrecta
        showModal("Respuesta Incorrecta", `Respuesta incorrecta. La respuesta correcta era: ${correctAnswer.text}`);
    }

    currentQuestionIndex++;
    setTimeout(() => {
        hideModal();
        loadQuestion(currentQuestionIndex);
    }, 1000); // Esperar 2 segundos antes de cargar la siguiente pregunta
}

function endGame() {
   // scoreBoard.innerHTML = `<h2>Juego terminado</h2><p>Tu puntuación final es: ${score} de ${questions.length * 10}</p>`;
    //AQUI LE ENVIO LOS DATOS AL SERVIDOR

    fetch('index.php?page=verify_answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}`
    })
    .then(response => response.text())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes añadir aquí lógica adicional después de enviar el score
    })
    .catch((error) => {
        console.error('Error al enviar el score:', error);
    });

    
    document.getElementById("game").style.display = "none";
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send");
    const endGameButton = document.getElementById("endGame");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        checkAnswer();
    });

    endGameButton.addEventListener("click", function () {
        endGame();
    });

    // Cargar la primera pregunta cuando la página se carga
    loadQuestion(currentQuestionIndex);
});
