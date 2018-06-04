<?php
    require("connect.php");
    $id = $_GET['id'];
    $qty = $_GET['qty'];
    
    if($id){
        $find = "SELECT * FROM `buycargoods` WHERE goodsid = '$id'";
        $has = $conn->query($find);
        $arr = $has->fetch_all(MYSQLI_ASSOC);
        if($arr){
            $newqty = $arr[0]['qty']*1 + $qty*1;
            $set = "UPDATE `buycargoods` SET `qty`='$newqty' WHERE goodsid = '$id'";
            $conn->query($set);
        }else{
            $selectCurId = "SELECT * FROM `goodsdata` WHERE goodsid = '$id'";
            $curId = $conn->query($selectCurId);
            $curIdArr = $curId->fetch_all(MYSQLI_ASSOC);
            $curIdObj = $curIdArr[0];
            $goodsName = $curIdObj['goodsname'];
            $nowPrice = $curIdObj['nowprice'];
            $oldPrice = $curIdObj['oldprice'];
            $imgUrl = $curIdObj['imgurl'];
            $set = "INSERT INTO `buycargoods`(`goodsid`, `goodsname`, `nowprice`, `oldprice`, `imgurl`, `qty`) VALUES ('$id','$goodsName','$nowPrice','$oldPrice','$imgUrl','$qty')";
            $conn->query($set);
        }
    }
    $get = "SELECT * FROM `buycargoods` WHERE 1";

    $result = $conn->query($get);
    $return = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($return);

    $result -> close();
    $conn -> close();
?>