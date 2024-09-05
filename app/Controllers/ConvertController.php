<?php
$root = dirname(__DIR__, 2); // Subimos dos niveles para llegar al directorio raíz del proyecto

require_once $root . '/app/Models/MayaNumber.php';

class ConvertController {
    public function index() {
        include __DIR__ . '/../Views/convert.php';

    }

    public function convert() {
        if (isset($_POST['number'])) {
            $number = intval($_POST['number']);
            $mayaNumber = new MayaNumber($number);
            $mayaRepresentation = $mayaNumber->convertToMaya();
            include __DIR__ . '/../Views/convert.php';

        }
    }
}
?>
