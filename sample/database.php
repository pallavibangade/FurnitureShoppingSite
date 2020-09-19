<?php
// header("Access-Control-Allow-Origin: *");
// header("content-Type: spplication/json;charset=UTF-8");
// header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE");
// header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");

// $servername = 'localhost';
// $username = 'root';
// $password = '';
// $dbname = 'furnituredb';
// $conn = mysqli_connect($servername,$username,$password,$dbname,'3307');



header("content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type, Accept");

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'furnituredb';
$conn = mysqli_connect($servername,$username,$password,$dbname,'3307');


if (!$conn) {
die("Coonect has problem".mysqli_connect_error());
}
else{
    echo "Successful coonection";
}
?>
