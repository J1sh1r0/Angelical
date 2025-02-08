<?php
include 'db.php'; // Asegura que tienes conexión a la base de datos

$data = json_decode(file_get_contents("php://input"), true);

if(isset($data['email'])) {
    $email = $conexion->real_escape_string($data['email']);
    $query = "UPDATE usuarios SET estado_transaccion='compra realizada' WHERE email='$email'";
    if ($conexion->query($query)) {
        echo json_encode(["status" => "success", "message" => "Estado actualizado"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al actualizar"]);
    }
}
?>
