<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $pais = $_POST['pais'];
    $provincia = $_POST['provincia'];
    $codigo_postal = $_POST['codigo_postal'];

    // Verificar si el usuario ya existe
    $check_user = "SELECT id_usuario FROM usuarios WHERE email='$email'";
    $result = $conn->query($check_user);

    if ($result->num_rows > 0) {
        // Si ya existe, actualizar la última visita
        $row = $result->fetch_assoc();
        $id_usuario = $row['id_usuario'];
        $update_visit = "INSERT INTO visitas (id_usuario) VALUES ($id_usuario)";
        $conn->query($update_visit);
    } else {
        // Si no existe, registrar usuario y visita
        $insert_user = "INSERT INTO usuarios (nombre, email, telefono, pais, provincia, codigo_postal)
                        VALUES ('$nombre', '$email', '$telefono', '$pais', '$provincia', '$codigo_postal')";
        if ($conn->query($insert_user) === TRUE) {
            $id_usuario = $conn->insert_id;
            $insert_visit = "INSERT INTO visitas (id_usuario) VALUES ($id_usuario)";
            $conn->query($insert_visit);
        }
    }
    
    $conn->close();
    echo "Registro exitoso";
    exit();
}
?>
