<?php


// Ruta absoluta para el modelo User.php
$root = dirname(__DIR__, 2); // Subimos dos niveles para llegar al directorio raíz del proyecto

require_once $root . '/app/Models/User.php'; // Ruta absoluta a User.php
require_once $root . '/app/Models/Score.php';



class GameController
{
    public function index()
    {
        include __DIR__ . '/../Views/game.php';
    }

    public function verifyAnswer()
    {
        // Lógica para verificar la respuesta y asignar puntaje

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['score'])) {
            $score = intval($_POST['score']);
            $scoreModel = new Score();
            $user = $_SESSION['user'];

            echo 'Usuario ' . $user . ' Score: ' . $score;
            $userID = $scoreModel->getIdUser($user);
            echo 'ID: ' . $userID . ' Usuario ' . $user . ' Score: ' . $score;
            $scoreModel->save($userID, $score);
            //header('Location: index.php?page=home');

        }
    }

    public function endGame()
    {
        $score = new Score();
        $scores = $score->getAllScores();
    
        // Devolver los datos como JSON
        header('Content-Type: application/json');
        echo json_encode($scores);
    }
    
}
/*
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['score'])) {
    $score = intval($_POST['score']);
    
    // Aquí puedes implementar la lógica para guardar el score
    // Por ejemplo, guardarlo en una base de datos
    // $this->saveScoreToDatabase($score);
    
    // Por ahora, solo devolveremos un mensaje de confirmación
    echo "Score recibido y procesado: " . $score;
} else {
    // Si no se recibió un score válido, devolver un error
    header("HTTP/1.1 400 Bad Request");
    echo "Error: No se recibió un score válido";
}
*/