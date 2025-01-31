<?php
$servername = "localhost"; // Servidor (ajusta si es necesario)
$username = "root"; // Usuario de la base de datos
$password = ""; // Contraseña (déjala vacía si no tienes)
$database = "servicios_angelicales"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

?>
