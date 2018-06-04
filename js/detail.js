
//获取商品id
let goodsId = location.search.slice(1,);

//获取元素节点
let goodsPaths = $('.paths');
let categoryList = $('.category-list');
let bigPic = $('.big-pic');
let curImg = $('#curImg');
console.log(bigPic[0])
let smallPics = $('.small-pics');
let goodsName = $('.goodsname');
let goodsTitle = $('.goodstitle');
let oldPrice = $('.oldprice');
let nowPrice = $('.nowprice');
let addBtnParent = $('.add-btn-parent');
let changeNum = $('.adjust');


//ajax请求并生成商品信息
$.ajax({
   type: "get",
   url: "../api/getinformation.php?id=" + goodsId,
   success: function(result){
        //获取返回数据
        let curData = JSON.parse(result)[0];
        console.log(curData)
        //获取商品分类信息
        let goodsSort = curData.goodssort.split(' ');
        //生成商品路径及相关分类部分
        for(let i = 0;i <= goodsSort.length;i++){
            if(i < goodsSort.length){
                let li = $('<li></li>');
                li.html(`<a href="#">${goodsSort[i]} </a>&#62; `);
                categoryList.append(li);
            }
            if(i < goodsSort.length){
                let li = $('<li></li>');
                li.html(`<a href="#">${goodsSort[i]} </a>&#62; `);
                goodsPaths.append(li);
            }else if(i = goodsSort.length){
                let li = $('<li></li>');
                li.html(`<span class="li-last" href="#">${curData.goodsname} </span>`);
                goodsPaths.append(li);
            }
        }

        //获取商品图片路径
        let curImgurls = curData.imgurl.split(',');
        //生成商品图片栏
        $.each(curImgurls,function(i){
            let li = $('<li></li>');
            li.html(`<img src="${curImgurls[i]}" alt="" />`);
            smallPics.append(li);
        });
        let smallPicList = $('.small-pics li');
        $.each(smallPicList,function(i){
            if(i === 0){
                curImg.attr('src',curImgurls[i]);
            }else{
            }
            smallPicList.eq(i).hover(
                function(){
                    curImg.attr('src',curImgurls[i]);
                }
            )

        })
        //生成商品名称
        goodsName.text(curData.goodsname);
        //生成商品标题
        goodsTitle.text(curData.goodstitle);
        //生成市场价格
        oldPrice.text((curData.oldprice*1).toFixed(2));
        //生成商城价格
        nowPrice.text((curData.nowprice*1).toFixed(2));
        //
        addBtnParent.attr('data-id',goodsId);
        changeNum.attr('data-id',goodsId);
   }
});

//生成预计送达日期
let time = $('.time');

let now = new Date();
let mon = now.getMonth() + 1;
mon = mon > 10 ? mon: '0' + mon;
let tomorrow = now.getDate() + 1;
tomorrow = tomorrow > 10 ? tomorrow: '0' + (tomorrow);
time.text(mon + '-' + tomorrow);



//商品服务、售后服务、评价点击切换效果
let rightList = $('.right-list');
let cutBtn = $('.right-list li');
let curShow = $('.list-information li');
//初始状态
cutBtn[0].className = 'li-active';
curShow.eq(0).css('display','block');
// 点击切换
rightList.on('click','li',function(e){
     $.each(cutBtn,function(i){
        if($(e.target).index() === i){
            cutBtn[i].className = 'li-active';
            curShow.eq(i).css('display','block');
        }else{
            cutBtn[i].className = '';
            curShow.eq(i).css('display','none');
        }
    })
})

//放大镜
curImg.hover(
    function(){
      curImg.ezPlus({
        zoomWindowHeight: 487,
        zoomWindowWidth: 487
        });  
    }
)
    
    


   