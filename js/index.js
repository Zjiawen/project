// $(function(){
    /*本周爆品轮播图*/
    let bigPic = $('.big-pic');
    let bigImg = $('.big-pic img')
    let curName = $('.current-name');
    let smallPics = $('.small-pics');
                
    let smallLis = $('.small-pics li');
    let smallImgs = $('.small-pics li img');
    let idx = 0;

    show();
    let proTimer = setInterval(autoShow,3000);
    bigPic.hover(
        function(){
            clearInterval(proTimer);
        },
        function(){
            proTimer = setInterval(autoShow,3000);
        }
    );
    $.each(smallLis,function(i){
        smallLis.eq(i).hover(
            function(){
                idx = smallLis.index(smallLis.eq(i));
                show();
            }
        )
    })
    function autoShow(){
        idx++;
        show();
    }
    function show(){
        if(idx >= smallLis.length){
            idx = 0;
        }
        $.each(smallLis,function(i,n){
            if(i === idx){
                n.className = 'hover';
                bigImg.attr({src:smallImgs[i].src})
                curName.text(smallImgs[i].title)
            }else{
                n.className = '';
            }
        })
    }

    //main左侧分类标题背景
    let conLeftTitle = $('.con-left-title');
    $.each(conLeftTitle,function(i){
        conLeftTitle[i].style.backgroundPosition = '0 ' + -100 * i + 'px';
        conLeftTitle.eq(i).hover(
            function(){
                conLeftTitle[i].style.backgroundPosition = '-385px ' + -100 * i + 'px';
            },
            function(){
                conLeftTitle[i].style.backgroundPosition = '0 ' + -100 * i + 'px';
            }
        )
    })
// })