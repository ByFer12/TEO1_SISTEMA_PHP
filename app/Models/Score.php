<?php
require_once 'database/db.php';

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

    public function getAllScores()
    {
        $stmt = $this->db->query("SELECT users.username, scores.score 
                                  FROM scores 
                                  JOIN users ON scores.user_id = users.id 
                                  ORDER BY score DESC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getIdUser($userName){
        $stmt=$this->db->prepare('"SELECT id FROM users WHERE username = :username LIMIT 1"');

    }
}
