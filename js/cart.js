

let cartShopList = $('.cart-shop-list');
let allNums = $('.all-nums');
let allPrices = $('.all-prices');
let allSave = $('.all-save');
let cartqty = 1;

$.ajax({
    url:'http://localhost:666/api/addcar.php?id=' + '' + '&qty=' + cartqty,
    success:function(result){
        let cartData = JSON.parse(result);
        console.log(cartData);
        cartCreate(cartData);

    }
})
function cartCreate(dataArr){
    return new Promise(function(resolve, reject){
        let totalGoodsNum = 0;
        let totalGoodsPrice = 0;
        let totalSave = 0;
        cartShopList.html('');
        if(dataArr.length === 0){
            console.log(32233)
            let li = $('<li></li>');
            li.addClass('car-k');
            li.html(`
                <div>
                    <img src="http://localhost:666/img/common/car-k.png" />
                </div>
                <p>你的购物车空空的，赶紧选购吧！</p>
                `);
            cartShopList.html(li);
        }else{
            $.each(dataArr,function(i){
                //计算总商品数
                totalGoodsNum += dataArr[i]['qty']*1;
                //计算所有商品总价
                totalGoodsPrice += dataArr[i]['nowprice'] * dataArr[i]['qty'];
                //计算节省总价
                totalSave += (dataArr[i]['oldprice'] - dataArr[i]['nowprice']) * dataArr[i]['qty'];
                //生成购物车下拉列表
                let li = $('<li></li>');
                li.addClass('clearfix');
                li.attr('data-id',dataArr[i].goodsid);
                li.html(`
                    <div class="left-ipt fl">
                        <input class="checkgoods" type="checkbox" />
                    </div>
                    <div class="img-name fl">
                        <img src="${dataArr[i].imgurl.split(',')[0]}" alt="" />
                        <a href="#">${dataArr[i].goodsname}</a>
                    </div>
                    <div class="unit-price text-center fl">&yen; ${(dataArr[i].nowprice*1).toFixed(2)}</div>
                    <div class="cart-num fl">
                    <span class="delete-one">-</span><div class="cur-goods-num">${dataArr[i].qty}</div><span class="add-one">+</span>
                    </div>
                    <div class="unit-total text-center fl">&yen; ${(dataArr[i].nowprice * dataArr[i].qty).toFixed(2)}</div>
                    <div class="weight text-center fl">${parseInt(Math.random() * (30 - 1) + 1)}kg</div>
                    <div class="sc-delete text-center fl">
                        <p>移入收藏</p>
                        <p class="delete-list">删除</p>
                    </div>
                `);
                cartShopList.append(li);
            })
        }
        allNums.text(totalGoodsNum);
        allPrices.text('￥' + totalGoodsPrice.toFixed(2));
        allSave.text( totalSave.toFixed(2));
        resolve();
    })
}



// function cartDel(){
//     let deleteGoods = $('.delete-list');
//     $.each(deleteGoods,function(i){
//         deleteGoods.eq(i).on('click',function(e){
//             let curDelId = $(e.target).parent().prev().attr('data-id');
//             $.ajax({
//                 url:'http://localhost:666/api/deletegoods.php?id=' + curDelId,
//                 success:function(result){
//                     let haveDeletedArr = JSON.parse(result);
//                     create(haveDeletedArr).then(delGoods);
//                 }
//             })
//         })
//     })
// }