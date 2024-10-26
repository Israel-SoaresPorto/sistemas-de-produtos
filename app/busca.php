<?php
include '../config/config.php';

$buscar_por = $_POST['buscar-por'];
$param = $_POST['param'];

switch ($buscar_por) {
    case 'nome':
        $sql = "SELECT * FROM produtos WHERE nome like '%$param%'";
        break;
    case 'quantidade':
        $quant_valor = intval($param); 
        $sql = "SELECT * FROM produtos WHERE quantidade = $quant_valor";
        break;
    case 'preco':
        $preco_valor = floatval($param);
        $sql = "SELECT * FROM produtos WHERE preco = $preco_valor";
        break;
}

$result = $conn->query($sql);

if ($result) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $map = array(
            "id" => $row['id'],
            "nome" => $row['nome'],
            "quantidade" => intval($row['quantidade']),
            "preco" => floatval($row['preco']),
        );

        array_push($data, $map);
    }

    echo json_encode($data);
}

$conn->close();
