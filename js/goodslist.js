
// 获取商品类型
let type = location.search.slice(1);
//定义每页显示的商品数
let showLists = 20;
let pagenum = 1;

// 获取元素节点
let goodsUl = $('.goodslist');
let totalPages = $('.total-page');
let allGoodsNum = $('.goodsnum-sum');
let curPage = $('.cur-page');
let sortBtn = $('.sort-btn');
let sortBtnIcon = $('.sort-btn-bgicon');
let param = '';//用于尾页按钮的变量
let sortRule = ''; //用于价格排序的变量
let sortNum = 1;//用于价格排序的变量


//页面加载时生成商品列表
goodsListShow();

//上/下一页功能
let listFilter = $('.list-filter');
let prePage = $('.pre-page');
let nextPage = $('.next-page');
let firstPage = $('.first-page');
let lastPage = $('.last-page');
$.each(listFilter,function(i){
    listFilter.eq(i).on('click',function(e){
        let target = e.target;
        //
        // if(target.className === 'page fr'){
        //     console.log(111);
        //     addCarBtn = $('.add-car-btn');
        // }
        //下一页
        if(target.className === 'next-page same0'){
            param = '';
            pagenum++;
            goodsListShow();
        }
        //上一页
        if(target.className === 'pre-page same0'){
            param = '';
            pagenum--;
            if(pagenum < 1){
                pagenum = 1;
            }
            goodsListShow();
        }
        //跳至首页
        if(target.className === 'first-page same0'){
            param = '';
            pagenum = 1;
            goodsListShow();
        }
        //跳至尾页
        if(target.className === 'last-page same0'){
            param = 3;
            goodsListShow();
        }
        //价格排序
        if(target.className === 'sort-btn'){
            sortNum++;
            if(sortNum > 3){
                sortNum = 1;
            }
            //初始排序
            if(sortNum === 1){
                sortRule = '';
                sortBtn.css('background','#ccc');
                sortBtnIcon.css('background-position','0px -2px');
            }
            //升序
            if(sortNum === 2){
                sortRule = 'ASC';
                sortBtn.css('background','#fd7400');
            }
            // 降序
            if(sortNum === 3){
                sortRule = 'DESC';
                sortBtnIcon.css('background-position','0px -35px');
            }
            goodsListShow();
        }

    })
})




//ajax请求及生成商品列表函数
function goodsListShow(){
    $.ajax({
        type:'get',
        url:'../api/search.php?type=' + type + '&qty=' + showLists + '&page=' + pagenum + '&param=' + param + '&sortRule=' + sortRule,
        success:function(result){
            let goodsarr = JSON.parse(result);
            //总页码数
            totalPages.text(goodsarr.totalPages);
            //总商品数
            allGoodsNum.text(goodsarr.allGoodsNum);
            //当前页码数
            if(pagenum > goodsarr.totalPages || param === 3){
                pagenum = goodsarr.totalPages;
            }
            curPage.text(pagenum);


            let goodsData = goodsarr.data;
            //清空商品列表
            goodsUl.html('');
            //遍历返回的商品数组，生成商品列表
            $.each(goodsData,function(i){
                let li = $('<li></li>');
                let imgurlarr = goodsData[i].imgurl.split(',');
                li.attr('data-id',goodsData[i].goodsid);
                li.html(`
                <a class="go-detail">
                    <img class="imgurl" src="${imgurlarr[0]}" alt="" />
                    <p class="goods-information">
                        <span class="goodsname">${goodsData[i].goodsname}</span><span class="goodstitle">${goodsData[i].goodstitle}</span>
                    </p>
                </a>
                <div class="down clearfix">
                    <p class="goodsprice fl">&yen; <span class="nowprice"> ${goodsData[i].nowprice}</span></p>
                    <p class="buy-times fr">已有<span>314+</span>人购买</p>
                </div>
                <div class="add-car-btn">
                    加入购物车&#187;
                </div>`);
                goodsUl.append(li);
            })
            let goDetail = document.querySelectorAll('.go-detail');
            $.each(goDetail,function(i){
                goDetail[i].onclick = function(){
                    console.log(this)
                    console.log(this.parent)
                    location.href = 'http://localhost:666/html/detail.html?' + this.parentNode.getAttribute('data-id');
                }
            })
        }
    })
}

