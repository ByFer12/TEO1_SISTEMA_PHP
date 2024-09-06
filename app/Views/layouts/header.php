<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maya Game</title>
    <link rel="stylesheet" href="css/styles.css">

</head>
<body>
    <nav>
        <a href="index.php?page=home">Inicio</a>
        <a href="index.php?page=convert">Convertir</a>
        <a href="index.php?page=game">Juego</a>
    </nav>
    <header>
        <h1>Bienvenido <?php echo $_SESSION['user'] ?> al Maya Game</h1>
    </header>
