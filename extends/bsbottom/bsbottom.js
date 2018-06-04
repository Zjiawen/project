//先引入jquery,并且定义一个bsheader模块
define(['jquery'], function($) {
    return $.fn.extend({
        bsbottom: function(option) {
            var html = `
    <div class="bottom">
        <div class="bottom-top">
            <div class="container">
                <ul class="promise clearfix">
                    <li>
                        <div class="align-center clearfix">
                            <img class="fl" src="http://localhost:666/img/common/index-bottom-dao.png" alt="" />
                            <div class="center-right fl">
                                <p class="top-txt">次日到达</p>
                                <p>当天16点前下单第二天送达</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="align-center clearfix">
                            <img class="fl" src="http://localhost:666/img/common/index-bottom-dai.png" alt="" />
                            <div class="center-right fl">
                                <p class="top-txt">货到付款</p>
                                <p>货到网银多种支付方式</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="align-center clearfix">
                            <img class="fl" src="http://localhost:666/img/common/index-bottom-song.png" alt="" />
                            <div class="center-right fl">
                                <p class="top-txt">冷链配送</p>
                                <p>基地到餐桌全程冷链</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="align-center clearfix">
                            <img class="fl" src="http://localhost:666/img/common/index-bottom-tui.png" alt="" />
                            <div class="center-right fl">
                                <p class="top-txt">24小时退换货</p>
                                <p>专业解答 为您解惑</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="align-center clearfix">
                            <img class="fl" src="http://localhost:666/img/common/index-bottom-xuan.png" alt="" />
                            <div class="center-right fl">
                                <p class="top-txt">基地优选食材</p>
                                <p>依谷更懂您的需求</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="news clearfix">
                <div class="news-l fl">
                    <h2>依谷有话说</h2>
                    <div class="news-con clearfix">
                        <a class="news-img fl" href="#">
                            <img src="http://localhost:666/img/common/news-img.jpg" alt="" />
                        </a>
                        <ul class="news-list fr">
                            <li>
                                <h3><a href="#">关于系统升级客户热线、物流配送暂停服务公告</a></h3>
                                <p><a href="#">尊敬的客户： 您好！为了能给客户带来更好的服务，依谷网将于3月11日—3月13日对网站系统进行设备检修和升级，期间客服热线、在线咨询及物流配送暂不提供服务，3月14日起恢复正常咨询及物流配送。给您带来不便敬请谅解，感谢您对依谷网的支持！</a></p>
                            </li>
                            <li>
                                <h3><a href="#">关于客户热线4001100755暂停服务的通知</a></h3>
                                <p><a href="#">尊敬的依谷网客户：您好，值此新春佳节来临之际，为了不影响您正常购物，现将春节期间客服电话服务和放假时间事项公告如下：1、由于中国移动的基站设备故障正在维修，现4001100755客服电话暂时无法正常使用。2、放假时间：2月15日—2月23日。如有不便，敬请谅解。依谷网在此感谢您长久以来对我们的信任与支持。</a></p>
                            </li>
                            <li>
                                <h3><a href="#">春节期间依谷网快递停发通知！</a></h3>
                                <p><a href="#">亲爱的谷东们：您好！由于临近年关以及大雪天气原因，快递已经开始停发部分省份的收件业务！我们将于2月5日停止广东省外的快递发货，2月10日停止广东省内的快递发货，2月15日停止深圳市的订单，超时订单将协调至年后配送2月23日恢复正常发货。</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul class="news-r fr">
                    <li><a href="#"><img src="http://localhost:666/img/common/index-about.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:666/img/common/index-commonweal.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:666/img/common/index-statement.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:666/img/common/index-job.jpg" alt="" /></a></li>
                </ul>
            </div>
            <div class="bottom-middle clearfix">
                <div class="help-list fl">
                    <ul class="fl">
                        <li class="list-t"><span>购物指南</span></li>
                        <li><a href="#">会员注册</a></li>
                        <li><a href="#">套餐卡使用方法</a></li>
                        <li><a href="#">谷穗卡使用方法</a></li>
                        <li><a href="#">积分兑换</a></li>
                    </ul>
                    <ul class="fl">
                        <li class="list-t"><span>购物指南</span></li>
                        <li><a href="#">会员注册</a></li>
                        <li><a href="#">套餐卡使用方法</a></li>
                        <li><a href="#">谷穗卡使用方法</a></li>
                        <li><a href="#">积分兑换</a></li>
                    </ul>
                    <ul class="fl">
                        <li class="list-t"><span>购物指南</span></li>
                        <li><a href="#">会员注册</a></li>
                        <li><a href="#">套餐卡使用方法</a></li>
                        <li><a href="#">谷穗卡使用方法</a></li>
                        <li><a href="#">积分兑换</a></li>
                    </ul>
                    <ul class="fl">
                        <li class="list-t"><span>购物指南</span></li>
                        <li><a href="#">会员注册</a></li>
                        <li><a href="#">套餐卡使用方法</a></li>
                        <li><a href="#">谷穗卡使用方法</a></li>
                        <li><a href="#">积分兑换</a></li>
                    </ul>
                </div>
                <ul class="QR-code fr clearfix">
                    <li class="fl">
                        <p>依谷微信</p>
                        <img src="http://localhost:666/img/common/index-bottom-ygw-wx.jpg" alt="" />
                    </li>
                    <li class="fr">
                        <p>依谷App</p>
                        <img src="http://localhost:666/img/common/index-bottom-ygw-app.jpg" alt="" />
                    </li>
                </ul>
            </div>
            <div class="bottom-b">
                <ul class="btm-tab clearfix">
                    <li><a href="#">关于依谷</a></li>
                    <li><a href="#">加入依谷</a></li>
                    <li><a href="#">联系依谷</a></li>
                    <li><a href="#">免责声明</a></li>
                    <li><a href="#">友情链接</a></li>
                    <li><a href="#">依谷资讯</a></li>
                    <li><a href="#">网站地图</a></li>
                    <li class="last-li"><a href="#">客服在线</a></li>
                </ul>
                <ul class="btm-tab2 clearfix">
                    <li><a href="#"></a></li>
                    <li><a href="#" style="background-position: -180px 0"></a></li>
                    <li><a href="#" style="background-position: -360px 0"></a></li>
                    <li class="little"><a href="#" style="background-position: 0px -100px"></a></li>
                    <li><a href="#" style="background-position: -180px -99px"></a></li>
                    <li><a href="#" style="background-position: -360px -99px"></a></li>
                    <li><a href="#" style="background-position: 0px -200px"></a></li>
                </ul>
                <p>Copyright &copy; 2010-2018 所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
                <p><a class="pre-a" href="#">粤ICP备11016505号-9</a>All Rights Reserved 深圳依谷网版权所有 网络实名： <a href="#"> 依谷网</a></p>
            </div>
        </div>
    </div>
    <div class="r-quick-link">
        <ul class="user-link">
            <li>
                <a class="user-center" href="#">
                    <i class="icon-big"></i>
                </a>
                <p class="r-slide">个人中心<i class="triangle"></i></p>
            </li>
            <div class="two">
                <a class="shopCar" href="http://localhost:666/html/cart.html">
                    <i class="icon-car"></i>
                    <p>购物车</p>
                    <p class="goods-num">0</p>
                </a>
            </div>
            <li>
                <a class="footprint" href="#">
                    <i class="icon-little"></i>
                </a>
                <p class="r-slide">我的足迹<i class="triangle"></i></p>
            </li>
            <li>
                <a class="footprint" href="#">
                    <i class="icon-big" style="background-position: 5px -76px"></i>
                </a>
                <p class="r-slide">我的收藏<i class="triangle"></i></p>
            </li>
        </ul>
        <ul class="user-link r-link2">
            <li>
                <a class="user-center" href="#">
                    <i class="icon-big" style="background-position: 3px -327px"></i>
                </a>
                <p class="r-slide">在线客服<i class="triangle"></i></p>
            </li>
            <li>
                <a class="footprint" href="#">
                    <i class="icon-big" style="background-position: 4px -168px"></i>
                </a>
                <p class="r-slide">客服热线<i class="triangle"></i></p>
            </li>
            <li>
                <a class="footprint" href="#">
                    <i class="icon-big" style="background-position: 6px -296px"></i>
                </a>
                <div class="r-slide QR-code">
                    <img src="http://localhost:666/img/common/wx.jpg" alt="" />
                    <i class="triangle"></i>
                </div>
            </li>
            <li>
                <a class="go-top">
                    <i class="icon-big" style="background-position: 6px -194px"></i>
                </a>
            </li>
        </ul>
    </div>
    `;
            return this.each(function() {
                $(this).html(html);
            })
        }
    })
})