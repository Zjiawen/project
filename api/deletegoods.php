<?php
    require ('connect.php');

    $id = $_GET['id'];

    $del = "DELETE FROM `buycargoods` WHERE goodsid = '$id'";

    $conn->query($del);

    $get = "SELECT * FROM `buycargoods` WHERE 1";


    $result = $conn->query($get);
    $return = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($return);

    
    $result -> close();
    $conn -> close();
?>