$(function(){
let content = $('.content');
let userId = $('.userid');
let psw = $('.password');
let repeatPsw = $('.password2');
let hint = $('.hint');
let listR = $('.list-r');
let condition1 = false;

//账号正则模式
let userIdPattern = /^[1][3,4,5,7,8][0-9]{9}$/;
content.on('change',function(e){
    let target = e.target;
    if(target.className === 'userid'){
        condition1 = userIdPattern.test(target.value)
        if(condition1){
            listR.eq(0).css({
                'visibility':'visible',
                'background-position': '-50px -225px'
            });
            hint.eq(0).css('visibility','hidden')
        }else{
            listR.eq(0).css({
                'visibility':'visible',
                'background-position': '-100px -225px'
            });
            hint.eq(0).css('visibility','visible');
        }
    }
})

let finish = $('.finish');
finish.on('click',function(){
    if(condition1){
        signIn();
    }
})

function signIn(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:666/api/login.php',
        data:`userid=${userId.val()}&password=${psw.val()}`,    
        success:function(result){
            if(result*1 === 0){
                alert('账号或密码错误');
            }
            if(result*1 === 1){
                location.href = 'http://localhost:666';
            }
            if(result*1 === 2){
                alert('用户名不存在');
            }
        }
    })
}



})