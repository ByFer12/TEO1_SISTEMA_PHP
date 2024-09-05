<?php


// Ruta absoluta para el modelo User.php
$root = dirname(__DIR__, 2); // Subimos dos niveles para llegar al directorio raíz del proyecto

require_once $root . '/app/Models/User.php'; // Ruta absoluta a User.php
//require_once $root . 'app/Models/Score.php';



class GameController {
    public function index() {
        include __DIR__ . '/../Views/game.php';

    }

    public function verifyAnswer() {
        // Lógica para verificar la respuesta y asignar puntaje

        if($_SERVER['REQUEST_METHOD']==='POST'&&isset($_POST['score'])){
            $score=intval($_POST['score']);
            $scoreNew=new Score();
            $user=$_SESSION['user'];
            $scoreNew->save($user,$score);
            echo $score;
        }
    }

    public function endGame() {
        $scores = (new Score())->getAllScores();
        include __DIR__ . '/../Views/game.php';
    }
}
?>
