<?php 

include "../config/config.php";

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT email, senha FROM acesso WHERE email = '$email'";

$result = $conn->query($sql);

$row = $result->fetch_assoc();

$response = array();

if(password_verify($senha, $row['senha'])) {
    $response['status'] = 'ok';
    echo json_encode($response);
} else {
    $response['status'] = 'Login ou senha incorretos';
    echo json_encode($response);
}

$conn->close();