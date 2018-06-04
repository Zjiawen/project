<?php
require ('connect.php');
$type = isset($_GET['type']) ? $_GET['type'] : 'a';//获取商品类型
$qty = isset($_GET['qty']) ? $_GET['qty'] : 20;
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$param =$_GET['param'];
$sortRule = $_GET['sortRule'];
$sql;
if($sortRule){
    $sql = "SELECT * FROM `goodsdata` WHERE type='$type' ORDER BY nowprice $sortRule";
}else{
    $sql = "SELECT * FROM `goodsdata` WHERE type='$type'";
}

$result = $conn -> query($sql);
$arr = $result -> fetch_all(MYSQLI_ASSOC);

$allGoodsNum = count($arr);
$totalPages = ceil($allGoodsNum/$qty);
if($page > $totalPages || $param*1 === 3){
    $page = $totalPages;
};


$returnData = array_slice($arr,($page-1)*$qty,$qty);

$res = array(
    'data' => $returnData,
    'page' => $page,
    'totalPages' => $totalPages,
    'allGoodsNum' => $allGoodsNum
    );
echo json_encode($res);

$result -> close();
$conn -> close();
?>