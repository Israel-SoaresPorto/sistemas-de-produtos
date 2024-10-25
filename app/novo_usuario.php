<?php 

include "../config/config.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$senha_cripto = password_hash($senha, PASSWORD_DEFAULT);

$sql = "INSERT INTO acesso (nome, email, senha) VALUES ('$nome', '$email', '$senha_cripto')";

$response = array();

if($conn->query($sql)) {
    $response['status'] = 'ok';
    echo json_encode($response);
} else {
    $response['status'] = 'Houve um erro ao cadastrar novo usuário';
    echo json_encode($response);
}

$conn->close();