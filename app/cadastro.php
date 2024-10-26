<?php

include '../config/config.php';

$nome = $_POST['nome'];
$quantidade = intval($_POST['quantidade']);
$preco = floatval($_POST['preco']);

$sql = "INSERT INTO produtos(nome, quantidade, preco) VALUES ('$nome', '$quantidade', $preco)";

$response = array();

if($conn->query($sql)) {
    $response['status'] = 'ok';
    $response['message'] = 'Cadastro realizado com sucesso!';
    echo json_encode($response);
} else {
    $response['status'] = 'error';
    $response['message'] = 'Houve um erro ao inserir os dados!';
    echo json_encode($response);
}

$conn->close();
