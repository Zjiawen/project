<?php
    require ('connect.php');
    $id = $_GET['id'];
    $qty = $_GET['qty']*1;
    $del = "UPDATE `buycargoods` SET `qty`='$qty' WHERE goodsid= '$id'";
    $conn->query($del);

    $get = "SELECT * FROM `buycargoods` WHERE 1";

    $result = $conn->query($get);
    $return = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($return);

    $result -> close();
    $conn -> close();
?>