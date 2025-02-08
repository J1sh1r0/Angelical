<?php
include 'db.php';

$sql = "SELECT u.nombre, u.email, v.ultima_visita 
        FROM usuarios u
        LEFT JOIN visitas v ON u.id_usuario = v.id_usuario
        ORDER BY v.ultima_visita DESC";
$result = $conn->query($sql);

echo "<table border='1'>
<tr>
<th>Nombre</th>
<th>Email</th>
<th>Última Visita</th>
</tr>";

while($row = $result->fetch_assoc()) {
    echo "<tr>
    <td>".$row["nombre"]."</td>
    <td>".$row["email"]."</td>
    <td>".$row["ultima_visita"]."</td>
    </tr>";
}

echo "</table>";
$conn->close();
?>
