<?php

include '../config/config.php';

$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

if ($result) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $map = array(
            "id" => $row['id'],
            "nome" => $row['nome'],
            "quantidade" => $row['quantidade'],
            "preco" => $row['preco'],
        );
        
        array_push($data, $map);
    }

    echo json_encode($data);
}

$conn->close();
         

