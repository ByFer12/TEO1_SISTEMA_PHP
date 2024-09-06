<?php include 'layouts/header.php'; ?>
<main>
    <form action="index.php?page=convert_number" method="POST">
        <label for="number">Ingrese un número:</label>
        <input type="number" id="number" name="number" required>
        <button type="submit">Convertir</button>
    </form>

    <?php if (isset($mayaRepresentation)): ?>
        <div class="maya">
            <h3>Representación Maya de: <?php echo $_POST['number'];?></h3>
            <!-- Aquí se mostraría la representación del número en el sistema maya -->
            
            <div class="maya1">
            <p><?php echo $mayaRepresentation; ?></p>
            </div>
        </div>
    <?php endif; ?>
</main>
<?php include 'layouts/footer.php'; ?>
