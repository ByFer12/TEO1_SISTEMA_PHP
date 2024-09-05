<?php include 'layouts/header.php'; ?>
<main>
    <form action="index.php?page=store_user" method="POST">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Guardar</button>
    </form>
</main>
<?php include 'layouts/footer.php'; ?>
