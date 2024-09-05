<?php
session_start();

// Crear la variable global

require_once dirname(__DIR__, 2) . '/app/Models/User.php';

class HomeController {
    public function index() {
       // include 'app/Views/home.php';
                // Ruta absoluta para la vista home.php
                $root = dirname(__DIR__, 2); // Subimos dos niveles para llegar al directorio raíz del proyecto
                include $root . '/app/Views/home.php'; // Incluimos la vista home.php
       // echo 'Hola mundooo';
    }

    public function storeUser() {
        if (isset($_POST['username'])) {
            $username = $_POST['username'];
            $_SESSION['user']=$username;
            $user = new User();
            $user->save($username);
            header('Location: index.php?page=convert');
        }
    }
}
?>
