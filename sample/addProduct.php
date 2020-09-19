<?php include "database.php" ?>
<?php
// header("Access-Control-Allow-Origin: *");
header("content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type, Accept");

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'furnituredb';
$conn = mysqli_connect($servername,$username,$password,$dbname,'3307');


$data = json_decode(file_get_contents("php://input"));
$prodName = $data->prod_name;
$prodCategory = $data->prod_category;
$prodQuantity = $data->prod_quantity;
$prodPrice = $data->prod_price;
$prodSize = $data->prod_size;
$prodPhoto = $data->prod_photo;
$prodDesc = $data->prod_desc;

$sql ="insert into product(prod_name, prod_category, prod_quantity, prod_price, prod_size, image, prod_description) 
values ('$prodName','$prodCategory',$prodQuantity,$prodPrice,$prodSize,'$prodSize','$prodDesc')";

if(mysqli_query($conn,$sql))
{
    echo json_encode("New user created successfully");
}

?>
