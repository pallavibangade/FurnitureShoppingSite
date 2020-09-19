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
$firstName = $data->firstName;
$lastName = $data->lastName;
$phoneNo = $data->phoneNo;
$email = $data->email;
$password = $data->password;
$state = $data->state;
$city = $data->city;
$landMark = $data->landMark;
$pincode = $data->pincode; 
$sql ="insert into custreg (fisrt_name, last_name, phone_no, email, password, state, city, land_mark, pincode)
 values ('$firstName','$lastName',$phoneNo,'$email','$password','$state','$city','$landMark',$pincode)";
//echo $sql;
// $data = json_decode(file_get_contents("php://input"));
// var_dump($data);
if(mysqli_query($conn,$sql))
{
    echo json_encode("New user created successfully")
}
// $_SESSION["sname"] = $uname;

// header('Location: http://localhost/infoway20/profile.php?msg=user details updated successfully');

// mysqli_close($conn);







?>
