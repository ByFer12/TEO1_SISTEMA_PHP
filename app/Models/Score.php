<?php
$root = dirname(__DIR__, 2); // Subimos dos niveles para llegar a la raíz del proyecto
require_once $root . '/database/db.php';

class Score
{
    private $db;

    public function __construct()
    {
        global $pdo;
        $this->db = $pdo;
    }

    public function save($userId, $score)
    {
        $stmt = $this->db->prepare("INSERT INTO scores (user_id, score) VALUES (:user_id, :score)");
        $stmt->execute(['user_id' => $userId, 'score' => $score]);
    }

    public function getAllScores(){
        $stmt = $this->db->query("SELECT users.username, scores.score 
                                  FROM scores 
                                  JOIN users ON scores.user_id = users.id 
                                  ORDER BY score DESC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function getIdUser($userName){
        $stmt = $this->db->prepare('SELECT id FROM users WHERE username = :username LIMIT 1');
    
        // Vincular el parámetro de la consulta
        $stmt->bindParam(':username', $userName);
    
        // Ejecutar la consulta
        $stmt->execute();
    
        // Obtener el resultado
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // Retornar el ID si se encuentra el usuario, de lo contrario, null
        return $user ? $user['id'] : null;
    }
}
