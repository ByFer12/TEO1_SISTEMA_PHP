//indice del arreglo para sacar las preguntas
let currentQuestionIndex = 0;
let score = 0;  //punteo obtenido y acumulado

const questions = [
    {
        id: 1,
        text: "¿Cuál es su equivalente en numero Decimal?",
        imagen: "../public/img/num1.png",
        answers: [
            { id: 1, text: "El numero 19", isCorrect: true },
            { id: 2, text: "El numero 34", isCorrect: false },
            { id: 3, text: "El numero 60", isCorrect: false },
            { id: 4, text: "El numero romano", isCorrect: false },
            { id: 5, text: "El numero 79", isCorrect: false }
        ]
    },
    {
        id: 2,
        text: "¿Que numero es este segun el sistema de numeracion Maya?",
        imagen: "../public/img/num2.png",
        answers: [
            { id: 6, text: "Atlántico", isCorrect: false },
            { id: 7, text: "Numero 0", isCorrect: true },
            { id: 8, text: "Numero Romano", isCorrect: false },
            { id: 9, text: "Numero 90", isCorrect: false },
            { id: 10, text: "Numero Infinito", isCorrect: false }
        ]
    },
    {
        id: 3,
        text: "¿A que numero decimal equivale este numero maya?",
        imagen: "../public/img/num3.png",
        answers: [
            { id: 11, text: "El salmo 91", isCorrect: false },
            { id: 12, text: "El numero 0", isCorrect: false },
            { id: 13, text: "El numero 134", isCorrect: false },
            { id: 14, text: "El numero 399", isCorrect: true },
            { id: 15, text: "El numero 1999", isCorrect: false }
        ]
    },
    {
        id: 4,
        text: "¿A que numero decimal equivale este numero maya?",
        imagen: "../public/img/num4.png",
        answers: [
            { id: 16, text: "El numero 91", isCorrect: false },
            { id: 17, text: "El numero 089", isCorrect: false },
            { id: 18, text: "El numero 134", isCorrect: false },
            { id: 19, text: "El numero 789", isCorrect: false },
            { id: 20, text: "El numero 400", isCorrect: true }
        ]
    },
    {
        id: 5,
        text: "¿A que numero decimal equivale este numero maya?",
        imagen: "../public/img/num5.png",
        answers: [
            { id: 21, text: "El salmo 91", isCorrect: false },
            { id: 22, text: "El numero 60", isCorrect: true },
            { id: 23, text: "El numero 134", isCorrect: false },
            { id: 24, text: "El numero 789", isCorrect: false },
            { id: 25, text: "El numero 012", isCorrect: false }
        ]
    },
    {
        id: 6,
        text: "¿A que numero decimal equivale este numero maya?",
        imagen: "../public/img/num6.png",
        answers: [
            { id: 26, text: "EL numero  -89", isCorrect: false },
            { id: 27, text: "El numero 06", isCorrect: false },
            { id: 28, text: "El numero 134", isCorrect: false },
            { id: 29, text: "El numero 98", isCorrect: true },
            { id: 30, text: "El numero 78", isCorrect: false }
        ]
    },
    {
        id: 7,
        text: "¿Cual es el resultado de efectuar la suma?",
        imagen: "../public/img/num7.png",
        answers: [
            { id: 31, text: "La suma es 78", isCorrect: false },
            { id: 32, text: "La suma es 92", isCorrect: false },
            { id: 33, text: "La suma es 712", isCorrect: false },
            { id: 34, text: "La suma es 13", isCorrect: true },
            { id: 35, text: "La suma de la vida", isCorrect: false }
        ]
    },
    {
        id: 8,
        text: "¿Cual es el resultado de efectuar la suma?",
        imagen: "../public/img/num8.png",
        answers: [
            { id: 36, text: "La suma es 13", isCorrect: false },
            { id: 37, text: "La suma es 65", isCorrect: false },
            { id: 38, text: "La suma es 16", isCorrect: true },
            { id: 39, text: "La suma es 01", isCorrect: false },
            { id: 40, text: "La suma es 91", isCorrect: false }
        ]
    },
    {
        id: 9,
        text: "¿Cual es el resultado de efectuar la resta?",
        imagen: "../public/img/num9.png",
        answers: [
            { id: 41, text: "La resta es 5", isCorrect: true },
            { id: 42, text: "La resta es 12", isCorrect: false },
            { id: 43, text: "La resta es 144", isCorrect: false },
            { id: 44, text: "La resta es 10", isCorrect: false },
            { id: 45, text: "La resta es -5", isCorrect: false }
        ]
    },
    {
        id: 10,
        text: "¿Cual es el resultado de efectuar la resta?",
        imagen: "../public/img/num10.png",
        answers: [
            { id: 46, text: "La resta es 25", isCorrect: false },
            { id: 47, text: "La resta es 9", isCorrect: true },
            { id: 48, text: "La resta es 141", isCorrect: false },
            { id: 49, text: "La resta es 25", isCorrect: false },
            { id: 50, text: "La resta es -17", isCorrect: false }
        ]
    },
    {
        id: 11,
        text: "¿Que civilizacion invento el numero Cero?",
        imagen: "../public/img/num11.png",
        answers: [
            { id: 51, text: "Civilizacion Azteca", isCorrect: false },
            { id: 52, text: "Civilizacion Mesopotamia", isCorrect: false },
            { id: 53, text: "Civilizacion Babilonica", isCorrect: false },
            { id: 54, text: "Civilizacion Maya", isCorrect: true },
            { id: 55, text: "Civilizacion Egipcia", isCorrect: false }
        ]
    },
    {
        id: 12,
        text: "Cuantos simbolos se usan para representar El sistema de numeracion MAYA",
        imagen: "../public/img/num12.png",
        answers: [
            { id: 56, text: "Son 7 simbolos", isCorrect: false },
            { id: 57, text: "Son 3 simbolos", isCorrect: true },
            { id: 58, text: "Son 15 simbolos ", isCorrect: false },
            { id: 59, text: "No tienen simbolos", isCorrect: false },
            { id: 60, text: "Parecida a la numeracion romana", isCorrect: false }
        ]
    },
    
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

    const imageContainer = document.getElementById('imagen');
    imageContainer.innerHTML = '';
    const image=document.createElement('img');
    image.src = question.imagen;
    image.alt = 'Descripción de la imagen'; // Opcional
    image.style.width = '75px'; // Ajusta el tamaño según lo necesites
    image.style.height = 'auto';
    imageContainer.appendChild(image);

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
        label.style.fontSize='20px';



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


}

document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send");
    const endGameButton = document.getElementById("endGame");
    const points = document.getElementById("points");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        checkAnswer();
    });
    points.addEventListener("click", function () {
        document.getElementById("game").style.display="none";
        fetch('index.php?page=end_game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
    
            // Llenar la tabla con los datos
            const tableBody = document.querySelector('#scoreTable tbody');
            tableBody.innerHTML = ''; // Limpiar tabla antes de llenar
    
            data.forEach(score => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${score.username}</td><td>${score.score}</td>`;
                tableBody.appendChild(row);
            });
    
            // Mostrar el tablero de puntuaciones
            document.getElementById('scoreBoard').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));

            //const scoreBoard = document.getElementById("scoreBoard");
        //scoreBoard.style.display = "block";

    });

    endGameButton.addEventListener("click", function () {
        endGame();
    });

    // Cargar la primera pregunta cuando la página se carga
    loadQuestion(currentQuestionIndex);
});
