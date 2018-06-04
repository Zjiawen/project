$(function(){
    //吸顶效果
    let topLogo = $('.top-logo');
    let topPic = $('.top-pic');
    $(window).on('scroll',()=>{
        if(window.scrollY >= 150){
            topLogo.css({'position':'fixed','top':0,'left':0,'right':0,'z-index':100,'background':'rgba(51,51,51,0.8)'});
            topPic.css({'margin-bottom':'90px'})
        }else{
            topLogo.css({'position':'relative','top':0,'left':0,'z-index':1,'background':'#e0e0e0'});
            topPic.css({'margin-bottom':'0px'})
        }
    })
    //购物车部分
    //鼠标移入购物车显示下拉列表
    let logoRight = $('.logo-right');
    let hiddenBox = $('.hidden-box');
    logoRight.hover(
        function(){
            // hiddenBox.show();
            hiddenBox.slideDown(100);
        },
        function(){
            // hiddenBox.hide();
            hiddenBox.slideUp(200);
        }
    )



    //nav导航条部分
    //鼠标移入出现下拉列表，移出隐藏
    let allSort = $('.all-sort');
    let allSortList = $('.all-sort-list');
    allSort.hover(
        function(){
            allSortList.slideDown(100);
        },
        function(){
            allSortList.slideUp(200);
        }
    )
    //点击收起下拉列表
    let concealList = $('.conceal-list');
    concealList.on('click',function(){
        allSortList.css({'display':'none'});
    })
    //下拉列表背景图片定位设置
    let listIcon = $('.list-icon');
    $.each(listIcon,function(i){
        listIcon[i].style.backgroundPosition = -50*i + 'px 6px';
    })




    // 右侧快速导航栏部分
    //自适应高度与显示返回顶部按钮
    let rightLink = $('.r-quick-link');
    let goTop = $('.go-top');

    rightLink.css({'height':window.innerHeight});
    showBtn();
        
    $(window).on('resize scroll',function(){
        rightLink.css({'height':window.innerHeight});
        showBtn();
    })
    function showBtn(){
        if(window.scrollY > 150){
            goTop.css('display','block');
        }else{
            goTop.css('display','none');
        }
    }
    //点击按钮返回顶部
    goTop.on('click',function(){
        let topTimer = setInterval(function(){
            // 获取滚动条滚动过的距离
            let scrollY = window.scrollY;
            let speed = Math.ceil(scrollY/8);//缓冲动画
            scrollBy(0,-speed);
            console.log(window.scrollY);
            if(window.scrollY<=0 || speed < 2){
                clearInterval(topTimer);
                // 重置
                scrollBy(0,0);
                scrollTo(0,0);
            }
        },25)   
    })

    //点击加入购物车
    let addCarBtn = $('.main');
    let selectNum = $('#select-num');
    let shopList = $('.shop-list');
    let goodsNum = $('.goods-num');
    let totalPrice = $('.total-price');
    let goCalculate = $('.go-calculate');
    let qty=1;
    if(selectNum == true){
        qty = selectNum.val();
    }


    //初始状态
    updateCar().then(delGoods);

    let num = 1;
    //点击更新
    addCarBtn.on('click',function(e){
        if(e.target.className === 'add-car-btn'){
            let addGoodsId = $(e.target).parent().attr('data-id');
            updateCar(addGoodsId).then(delGoods);
        }
    //详情页点击加减商品数量
        if(e.target.className === 'add'){
            num++;
            qty = num; 
            selectNum.val(num);
        }
        if(e.target.className === 'subtract'){
            num--;
            if(num < 1){
                num = 1;
            }
            qty = num; 
            selectNum.val(num);
        }
        
    //购物车页面点击加减商品数量
        //数量加1
        if(e.target.className === 'add-one'){
            let addGoodsId = $(e.target).parent().parent().attr('data-id');
            updateCar(addGoodsId).then(delGoods);
        }
        // 数量减一
        if(e.target.className === 'delete-one'){
            let addGoodsId = $(e.target).parent().parent().attr('data-id');
            if($(e.target).next().text()*1 > 1){
                let nums = $(e.target).next().text() - 1;
                console.log(addGoodsId,nums)
                deleteOne(addGoodsId,nums);
            }
        }
    })
    addCarBtn.on('change',function(e){
        if(e.target.id === 'select-num'){
            let a = selectNum.val()*1;
            if(!isNaN(a)&&a>=1&&Math.round(a)===a){
                qty = a; 
                num = a;
                selectNum.val(num);
            }else if(a === ''){
                num = 1;
                selectNum.val(num);                
            }else{
                alert('请输入大于1的整数');
                selectNum.val(num);                
            }
        }
    })




    

    let has = $('#check-all')[0];

    function updateCar(curId){
        return new Promise(function(resolve, reject){
            curId = curId ? curId:'';
            $.ajax({
                url:'http://localhost:666/api/addcar.php?id=' + curId + '&qty=' + qty,
                success:function(result){
                    let dataArr = JSON.parse(result);
                    create(dataArr);
                    console.log(dataArr)
                    if(has){
                        if(cartCreate){
                            cartCreate(dataArr);
                        }
                    }
                    resolve();
                }
            })
        })
    }

    //删除购物车商品
    function delGoods(){
        let deleteGoods = $('.delete-list');
        $.each(deleteGoods,function(i){
            deleteGoods.eq(i).on('click',function(e){
                console.log(333)
                let curDelId = $(e.target).parent().parent().attr('data-id');
                $.ajax({
                    url:'http://localhost:666/api/deletegoods.php?id=' + curDelId,
                    success:function(result){
                        let haveDeletedArr = JSON.parse(result);
                        create(haveDeletedArr).then(delGoods);
                        if(cartCreate){
                            cartCreate(haveDeletedArr);
                        }
                    }
                })
            })
        })
    }


    //根据数据生成列表的函数
    function create(dataArr){
        return new Promise(function(resolve, reject){
            let totalGoodsNum = 0;
            let totalGoodsPrice = 0;
            shopList.html('');
            //购物车为空时的下拉列表
            if(dataArr.length === 0){
                let li = $('<li></li>');
                li.addClass('car-k');
                li.html(`
                    <div>
                        <img src="http://localhost:666/img/common/car-k.png" />
                    </div>
                    <p>你的购物车空空的，赶紧选购吧！</p>
                    `);
                shopList.html(li);
                goCalculate.css('display','none');
            }else{//购物车不为空时的下拉列表
                $.each(dataArr,function(i){
                    //计算总商品数
                    totalGoodsNum += dataArr[i]['qty']*1;
                    //计算所有商品总价
                    totalGoodsPrice += dataArr[i]['nowprice'] * dataArr[i]['qty'];
                    //生成购物车下拉列表
                    let li = $('<li></li>');
                    li.attr('data-id',dataArr[i].goodsid);
                    li.html(`
                        <a href="#"><img src="${dataArr[i].imgurl.split(',')[0]}" alt="" /></a>
                        <a href="#" class="goods-name" data-id="${dataArr[i].goodsid}">${dataArr[i].goodsname}</a>
                        <div class="list-right fr">
                            <p>
                                &yen; <span class="price">${dataArr[i].nowprice}</span> &times; <span class="quantity">${dataArr[i].qty}</span>
                            </p>
                            <span class="delete-list fr">删除</span>
                        </div>
                    `);
                    shopList.append(li);
                    if(dataArr.length > 4){
                        shopList.css({
                            'height':'312px',
                            'overflow-y':'scroll'
                        });
                    }else{
                        shopList.css({
                            'height':'auto',
                            'overflow-y':'viseble'
                        });
                    }
                })
                goCalculate.css('display','block');
            }
            goodsNum.text(totalGoodsNum);
            totalPrice.text(totalGoodsPrice.toFixed(2));
            resolve();
        })
    }


    //购物车商品减一
    function deleteOne(id,curNum){
        $.ajax({
            url:'http://localhost:666/api/deleteone.php?id=' + id + '&qty=' + curNum,
            success:function(result){
                let dataArr = JSON.parse(result);
                create(dataArr).then(delGoods);
                if(cartCreate){
                    cartCreate(dataArr);
                }
            }
        })
    }


    


})









/**
 * [生成任意范围内的随机整数(不含最大数)]
 * @param  {[Number]} max [最大数]
 * @param  {[Number]} min [最小数]
 * @return {[Number]}     [随机整数]
 */
function randomNumber(min,max){
    return parseInt(Math.random() * (max - min) + min);
}

/**
 * [生成随机颜色]
 * @return {[String]} [16进制的随机颜色]
 */
function randomColor(){
    var color = '#';
    var str = '0123456789abcdef';
    for(var i = 0;i < 6;i++){
        var c = str[randomNumber(0,16)];
        color += c;
    }
    return color;
}

//元素对象
var Element = {


    /**
     * [兼容IE8-的通过类名获取元素]
     * @param  {[String]} name [想要获取的元素的类名]
     * @return {[Array]}      [获取到的元素数组]
     */
    getElementsByClassName:function(name){
        var wantEle = [];
        //通过标签名获取所有元素
        var ele = document.getElementsByTagName('*');  
        //遍历ele,用空格拆分所有类名，得到一个包含所有类名的数组
        for(var i = 0;i < ele.length;i++){
            var className = ele[i].className.split(' ');
            for(var j = 0;j < className.length;j++){
                if(className[j] === name){
                    wantEle.push(ele[i]); 
                }
            }
        }
        return wantEle;
    }
}

/**
 * [兼容任何浏览器的获取css样式方法]
 * @param  {[Element]} ele [获取样式的元素]
 * @param  {[String]} key [获取的元素属性]
 * @return {[String]}     [返回key所对应的css属性]
 */
function getCss(ele,key){
    //判断支持何种方法
    if(window.getComputedStyle){
        //标准浏览器
        return getComputedStyle(ele)[key];
    }else if(ele.currentStyle){
        //IE8-
        return ele.currentStyle[key];
    }else{
        //返回内联样式
        return ele.style[key];
    }
}



/**
 * [显示倒计时]
 * @param  {[String]}   end      [倒计时结束时间]
 * @param  {Function} callback [时间到时改变样式的函数]
 * @param  {[String]}   timename [计时器的名称]
 * @return {[String]}            [显示的倒计时]
 */
function showTime(end,callback,timename){
    //将设置的时间减去当前时间，然后判断offset是否<=0,判断是否倒计时完毕
    var offset = Date.parse(end) - Date.now();
    //毫秒转成秒
    offset = parseInt(offset / 1000);

    // 判断时间差
    if(offset <= 0){
        //时间到则停止计时器
        clearInterval(timename);
        // 显示购买链接
        if(typeof callback === 'function'){
            callback();
        }
    }
    var seconds = offset % 60;  //获取剩余秒数
    var minutes = parseInt(offset / 60) % 60;  //获取剩余分钟
    var hours = parseInt(offset / 3600) % 24;   //获取剩余小时
    var days = parseInt(offset / 3600 / 24);  //获取剩余天数
    //补零
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    return days + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒';
}
/**
 * [计算日期date的n天后的日期]
 * @param  {[String]} date [起始日期]
 * @param  {[Number]} n    [天数]
 * @return {[String]}      [计算后的日期]
 */
function afterDate(date,n){
    var time = Date.parse(date);
    var days = n * 24 * 3600 * 1000;
    var add = new Date(time + days);
    return add.toLocaleDateString();
}

//cookie对象方法
var Cookie = {


    /**
     * [获取名为name的cookie值]
     * @param  {[String]} name [cookie名]
     * @return {[String]}      [cookie值]
     */
    get:function(name){
        var cookies = document.cookie.split('; ');
        for(var i = 0;i < cookies.length;i++){
            var arr = cookies[i].split('=');
            if(arr[0] === name){
                return arr[1];
            }
        }
    },

    /**
     * [设置cookie]
     * @param {[String]} name  [cookie名]
     * @param {[String]} value [cookie值]
     * @param {[Object]} param [cookie参数]  
     *expires:xxx,path:yyy,domain:zzz,secure;
     */
    set:function(name,value,param){
        //param = {expires,path,domain,secure}
        var cookie = name + '=' + value;
        if(param){
            //时间
            if(param.expires){
                cookie += '; expires=' + param.expires.toUTCString();
            }
            //保存路径
            if(param.path){
                cookie += '; path=' + param.path;
            }
            //域名
            if(param.domain){
                cookie += '; domain=' + param.domain;
            }
            //安全
            if(param.secure){
                cookie += '; secure';
            }
        }
        document.cookie = cookie;
    },

    /**
     * [删除名为name的cookie]
     * @param  {[String]} name [cookie名]
     * @param  {[String]} path [cookie路径]
     */
    remove:function(name,path){
        //原理：通过设置过期时间删除cookie
        var now = new Date();
        now.setDate(now.getDate() - 1);
        // document.cookie = 'name=' + null + '; expires=' + now + '; path=' + path;   可简写为下
        this.set(name,null,{expires:now,path:path});
    }
}

/**
 * [单一属性动画方法]
 * @param  {Element}   ele      [设置动画的元素]
 * @param  {String}   attr     [改变的css属性]
 * @param  {Number}   target   [目标值]
 * @param  {Number}   time     [变化的时间]
 * @param  {Function} callback [动画完成时执行的回调函数（可选）]
 */
function animation(ele,attr,target,time,callback){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var currentAttr = getCss(ele,attr)  //获得带单位的attr属性值,String类型

        var unit = currentAttr.match(/[a-z]*$/);  //获取当前属性值的单位,String类型

        var currentAttr = parseFloat(currentAttr);  //提取不带单位的属性值,Number类型

        var speed = (target - currentAttr) / 10;    //计算缓冲速度

        if(attr === 'opacity'){
            speed = speed < 0 ? -0.05:0.05;
        }else{
            speed = speed < 0 ? Math.floor(speed):Math.ceil(speed);
        }
        currentAttr += speed;
        if(currentAttr === target || speed === 0){
            clearInterval(ele.timer)
            currentAttr = target;
            if(typeof callback === 'function'){
                callback();
            }
        }
        ele.style[attr] = currentAttr + unit;
    },time)
}


function diyAnimate(ele,obj,callback){
    ele.timerLength = 0;
    for(var attr in obj){
        ele.timerLength++;
        (function(attr){
            var timerName = attr + 'name';
            var target = obj[attr];
            clearInterval(ele[timerName])
            ele[timerName] = setInterval(()=>{
                var currentAttr = getCss(ele,attr)  //获得带单位的attr属性值,String类型

                var unit = currentAttr.match(/[a-z]*$/);  //获取当前属性值的单位,String类型

                var currentAttr = parseFloat(currentAttr);  //提取不带单位的属性值,Number类型

                var speed = (target - currentAttr) / 7;    //计算缓冲速度

                if(attr === 'opacity'){
                    speed = speed < 0 ? -0.05:0.05;
                }else{
                    speed = speed < 0 ? Math.floor(speed):Math.ceil(speed);
                }
                currentAttr += speed;
                if(currentAttr === target || speed === 0){
                    clearInterval(ele[timerName])
                    currentAttr = target;
                    ele.timerLength--;
                    //判断是否传入callback，并且所有动画结束后执行
                    if(typeof callback === 'function' && ele.timerLength ===0){
                        callback();
                    }
                }
                ele.style[attr] = currentAttr + unit;
            },30)
        })(attr);
    }
}
















