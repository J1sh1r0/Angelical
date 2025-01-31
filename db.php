<?php
$servername = "localhost"; // Cambia esto si usas un servidor remoto
$username = "root"; // Usuario de MySQL
$password = ""; // Contraseña de MySQL
$database = "servicios_angelicales";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
