<?php include 'layouts/header.php'; ?>
<main>
    <form action="index.php?page=store_user" method="POST">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Guardar</button>
    </form>
    <div style="margin-left: 75px;">
    <div id="cero" class="tarjeta">
        <img src="img/num2.png"" alt="Símbolo de Cero" class="imagen">
        <h2>Cero</h2>
        <p>El símbolo maya para cero es una concha de mar, que representa la ausencia de valor.</p>
        <p>En la numeración maya, el cero es crucial para la representación de números grandes y complejos.</p>
    </div>

    <div id="uno" class="tarjeta">
        <img src="img/uno.png" alt="Símbolo de Uno" class="imagen">
        <h2>Uno</h2>
        <p>El símbolo maya para uno es un punto, utilizado para contar unidades individuales.</p>
        <p>Es el elemento más básico en el sistema de numeración maya.</p>
    </div>

    <div id="cinco" class="tarjeta">
        <img src="img/cinco.png" alt="Símbolo de Cinco" class="imagen">
        <h2>Cinco</h2>
        <p>El símbolo maya para cinco es una barra horizontal, que representa cinco unidades.</p>
        <p>Las barras se usan en combinación con puntos para formar números mayores.</p>
    </div>

    </div>

</main>
<?php include 'layouts/footer.php'; ?>
