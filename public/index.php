<?php

// Obtener la ruta absoluta al directorio raíz del proyecto
$root = dirname(__DIR__);

// Incluir los controladores con rutas absolutas
require_once $root . '/app/Controllers/HomeController.php';
require_once $root . '/app/Controllers/ConvertController.php';
require_once $root . '/app/Controllers/GameController.php';

// Obtener la página solicitada o establecer 'home' como valor predeterminado
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Enrutamiento de páginas según el valor de $page
switch ($page) {
    case 'home':
        $controller = new HomeController();
        $controller->index();
        break;
    case 'store_user':
        $controller = new HomeController();
        $controller->storeUser();
        break;
    case 'convert':
        $controller = new ConvertController();
        $controller->index();
        break;
    case 'convert_number':
        $controller = new ConvertController();
        $controller->convert();
        break;
    case 'game':
        $controller = new GameController();
        $controller->index();
        break;
    case 'verify_answer':
        $controller = new GameController();
        $controller->verifyAnswer();
        break;
    case 'end_game':
        $controller = new GameController();
        $controller->endGame();
        break;
    default:
        $controller = new HomeController();
        $controller->index();
        break;
}
