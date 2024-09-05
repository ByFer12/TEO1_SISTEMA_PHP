<?php include 'layouts/header.php'; ?>
<main>
    <!-- Lógica para el juego -->

    <div id="game">
        <h2>Pregunta del Juego</h2>
        <form id="questionForm" method="POST" action="index.php?page=verify_answer">
            <p id="question"></p>
            <div id="answers"></div>
            <button id="send">Enviar</button>
        </form>
    </div>

    <button id="endGame">Terminar</button>
    <h1>hola</h1>
    <div id="scoreBoard" style="display:none;">
        <h3>Tabla de clasificación</h3>
        <table>
            <tr>
                <th>Usuario</th>
                <th>Puntuación</th>
            </tr>
            <?php foreach ($score as $scores): ?>
                <tr>
                    <td><?php echo $score['username']; ?></td>
                    <td><?php echo $score['score']; ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>

    <!-- Modal -->
<div id="resultModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000;">
    <div style="position: relative; margin: 15% auto; padding: 20px; width: 80%; max-width: 500px; background: white; border-radius: 5px;">
        <h2 id="modalTitle">Título</h2>
        <p id="modalMessage">Mensaje</p>
        <button id="closeModal" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>
    </div>
</div>
                
</main>
<?php include 'layouts/footer.php'; ?>