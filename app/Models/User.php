<?php
$root = dirname(__DIR__, 2); // Subimos dos niveles, desde 'Models' hacia el directorio raíz del proyecto

require_once $root . '/database/db.php';

class User {
    private $db;

    public function __construct() {
        global $pdo;
        $this->db = $pdo;
    }

    public function save($username) {
        $stmt = $this->db->prepare("INSERT INTO users (username) VALUES (:username)");
        $stmt->execute(['username' => $username]);
    }

    public function getAllUsers() {
        $stmt = $this->db->query("SELECT * FROM users ORDER BY created_at DESC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
