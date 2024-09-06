<?php include 'layouts/header.php'; ?>
<main>
    <!-- Lógica para el juego -->
    <div>
        <h2>Es un juego que consiste en preguntas con opcion multiple, <br>si quieres ver la puntuacion tuya como el de los anteriores jugadores presiona ver punteo</h2>
    </div>

    <div id="game">
        <form id="questionForm" method="POST" action="index.php?page=verify_answer">
            <h3 id="question"></h3>
            <div id="imagen" style="font-size: 30px;"></div>
            <div id="answers"></div>
            <br><br>
            <button id="send">Enviar</button>
        </form>
    </div>
    <br><br>
    <button id="endGame">Terminar</button>
    <button id="points">Ver Punteos</button>
    <div id="scoreBoard" style="display:none;">
        <h3>Tabla de clasificación</h3>
        <table id="scoreTable">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <!-- Los datos se llenarán mediante JavaScript -->
            </tbody>
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