define(['jquery'], function($) {
    return function(){
        // 轮播图
        //获取元素
        let banner = $('.banner');
        let bannerLi = $('.banner-list>li');
        let bannerBtn = $('.banner-btn');
        let len = bannerLi.length;
        let index = 0;
        //生成轮播图按钮
        for(let i =0;i < len;i++){
            let banSpan = $('<span></span>');
            bannerBtn.append(banSpan);
        }
        let picBtn = $('.banner-btn span');
        //轮播图初始状态
        carousel();
        //定时器设置自动轮播
        let banTimer = setInterval(autoCarousel,4000);
        //鼠标移入停止自动轮播，移出重新开始轮播
        banner.hover(
            function(){
                clearInterval(banTimer);
            },
            function(){
                banTimer = setInterval(autoCarousel,4000);
            }
        );
        //点击下方按钮切换图片
        bannerBtn.on('click','span',function(e){
            index = picBtn.index(e.target);
            carousel();
        });

        //函数封装
        function autoCarousel(){
            index++;
            carousel();
        }
        function carousel(){
            if(index >= len){
                index = 0;
            }
            $.each(bannerLi,function(i,n){
                if(i === index){
                    n.className = 'active';
                    picBtn.eq(i).css('background','#fd7400');
                }else{
                    n.className = '';
                    picBtn.eq(i).css('background','none');
                }
            })
        }
    }
})