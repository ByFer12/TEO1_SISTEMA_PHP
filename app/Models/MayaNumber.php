<?php
class MayaNumber
{
    private $number;

    public function __construct($number)
    {
        $this->number = $number;
    }

    public function convertToMaya()
    {
        $number = $this->number;
        $other=$number;
        if ($number < 0 ) {
            return "No se permiten numeros negativos (-).";
        }

        $representation = '<div class="maya-number">';
        
        // Dividimos el número en niveles (base 20)
        $level = 0;
        $colors = ['#00BFFF', '#FFA500'];
        while ($number > 0 || $level === 0) { // Continuar mientras queden dígitos
            $current_level_value = $number % 20; // Obtener el valor en la posición actual
            $number = floor($number / 20);       // Reducir el número para el siguiente nivel
            $color = $colors[$level % 2]; 
            $representation = '<div class="maya-level" style="background-color:' . $color . ';">' . $this->convertSingleMayaNumber($current_level_value) . '</div>' . $representation;
            $level++;
        }

        $representation .= '</div>';

        return  $representation;
    }

    // Función auxiliar para convertir un solo número en su representación maya (0-19)
    private function convertSingleMayaNumber($number) {
        if ($number === 0) {
            return '<div class="maya-zero">🌀</div>'; // Emoji de una concha para el 0
        }

        $bars = floor($number / 5);  // Número de barras (cada barra = 5)
        $dots = $number % 5;         // Número de puntos (restante)

        $representation = '<div class="dots">';
        for ($i = 0; $i < $dots; $i++) {
            $representation .= '• ';  // Punto en HTML
        }
        $representation .= '</div>';

        $representation .= '<div class="bars">';
        for ($i = 0; $i < $bars; $i++) {
            $representation .= '<div class="bar">_____</div>'; // Barra acostada
        }
        $representation .= '</div>';

        return $representation;
    }

}
