<?php
// Configuración de la conexión
$host = 'localhost';
$user = 'root'; // Cambia a tu usuario de base de datos si es diferente
$password = ''; // Si tienes una contraseña, colócala aquí
$database = 'servicios_angelicales'; // Nombre de tu base de datos

// Conexión a la base de datos
$conn = new mysqli($host, $user, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener los datos de la tabla 'usuarios' con estado de transacción
$sql = "SELECT nombre, email, telefono, visitas, ultima_visita, estado_transaccion FROM usuarios";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Devolver los datos como JSON
header('Content-Type: application/json');
echo json_encode($users);

$conn->close();
?>
