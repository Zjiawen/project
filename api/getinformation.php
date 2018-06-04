<?php
require ('connect.php');

$id = $_GET['id'];

$sql = "SELECT * FROM `goodsdata` WHERE goodsid='$id'";

$result = $conn -> query($sql);
$arr = $result -> fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);

$result -> close();
$conn -> close();
?>