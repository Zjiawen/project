<?php
    require ('connect.php');

    $userId = $_POST['userid'];
    $password = $_POST['password'];

    $select = "SELECT * FROM `users` WHERE username='$userId'";
    $res = $conn->query($select);
    $has = $res->fetch_all(MYSQLI_ASSOC);

    if($has){
        if($has[0]['password'] === $password){
            echo 1;
        }else{
            echo 0; 
        }
    }else{
        $int = "INSERT INTO `users`(`username`, `password`) VALUES ($userId,$password)";
        $conn->query($int);
        echo 1;
    }
    

    $conn -> close();
?>