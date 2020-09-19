<?php include "database.php" ?>
<?php
// header("Access-Control-Allow-Origin: *");
header("content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type, Accept");

define('MYSQL_ASSOC',MYSQLI_ASSOC);


$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'furnituredb';
$conn = mysqli_connect($servername,$username,$password,$dbname,'3307');


$sql ="select * from custreg";
$result = $conn->query($sql);

$rs = array();

$rs=$result->fetch_all(MYSQLI_ASSOC);

echo json_encode($rs);
// mysqli_close($conn);
?>
