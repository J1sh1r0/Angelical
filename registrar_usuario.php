<?php
file_put_contents('debug_log.txt', print_r($_POST, true), FILE_APPEND);
header("Content-Type: application/json"); // Asegurar que se devuelve JSON
include 'db.php'; // Incluir la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $pais = $_POST['pais'];
    $provincia = $_POST['provincia'];
    $codigo_postal = $_POST['codigo_postal'];

    // Verificar si el usuario ya existe
    $check_user = "SELECT id_usuario FROM usuarios WHERE email=?";
    $stmt = $conn->prepare($check_user);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Usuario ya registrado, actualizar visitas y última visita
        $row = $result->fetch_assoc();
        $id_usuario = $row['id_usuario'];
        $update_visit = "UPDATE usuarios SET visitas = visitas + 1, ultima_visita = NOW() WHERE id_usuario = ?";
        $stmt_update = $conn->prepare($update_visit);
        $stmt_update->bind_param("i", $id_usuario);
        if ($stmt_update->execute()) {
            echo json_encode(["success" => true, "message" => "Bienvenido de nuevo"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al actualizar visitas"]);
        }
    } else {
        // Usuario nuevo, insertar en la base de datos
        $insert_user = "INSERT INTO usuarios (nombre, email, telefono, pais, provincia, codigo_postal, visitas, ultima_visita) 
                        VALUES (?, ?, ?, ?, ?, ?, 1, NOW())";
        $stmt_insert = $conn->prepare($insert_user);
        $stmt_insert->bind_param("ssssss", $nombre, $email, $telefono, $pais, $provincia, $codigo_postal);
        if ($stmt_insert->execute()) {
            echo json_encode(["success" => true, "message" => "Registro guardado correctamente"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al registrar usuario"]);
        }
    }

    $conn->close();
    exit();
}
?>