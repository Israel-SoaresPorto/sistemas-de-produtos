<?php

include '../config/config.php';

$nome = $_POST['nome'];
$escolaridade = $_POST['escolaridade'];
$serie = intval($_POST['serie']);

$sql = "INSERT INTO estudantes(nome, escolaridade, serie) VALUES ('$nome', '$escolaridade', $serie)";

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
