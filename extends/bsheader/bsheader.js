//先引入jquery,并且定义一个bsheader模块
define(['jquery'], function($) {
    return $.fn.extend({
        bsheader: function(option) {
            var html = `
    <div class="top">
        <div class="container clearfix">
            <ul class="left fl clearfix">
                <li class="welcom">欢迎光临依谷网!</li>
                <li class="store-up"><i class="star"></i>收藏依谷网</li>
            </ul>
            <ul class="right fr clearfix">
                <li><a href="http://localhost:666/html/login.html">登录<span></span></a></li>
                <li><a href="http://localhost:666/html/register.html">免费注册<span></span></a></li>
                <li><a href="http://localhost:666/html/cart.html">购物车<span></span></a></li>
                <li class="attention">
                    <i class="code"></i>关注依谷网
                    <img src="http://localhost:666/img/common/wx.jpg" alt="" />
                </li>
            </ul>
        </div>
    </div>
    <div class="top-pic"></div>
    <div class="top-logo">
        <div class="container clearfix">
            <h1 class="logo fl"><a href="http://localhost:666">依谷网</a></h1>
            <div class="top-search fl">
                <div class="int">
                    <input class="keyword" type="text" placeholder="新西兰佳沛阳光金奇异果" /><button class="sub">搜索</button>
                </div>
                <ul class="recommend clearfix">
                    <li><a href="#">粽子礼盒</a></li>
                    <li><a href="#">甘美西瓜</a></li>
                    <li><a href="#">健康油</a></li>
                </ul>
            </div>
            <div class="logo-right fr">
                <a class="shop-car" href="http://localhost:666/html/cart.html">
                    <span class="car-pic"><i class="goods-num"></i></span>
                    <span class="go-count fr">立即去结算<i class="arrow"></i></span>
                </a>
                <div class="hidden-box">
                    <p>最新加入的商品</p>
                    <ul class="shop-list">
                        <!-- <li>
                            <a href="#"><img src="http://localhost:666/img/goodsimg/fruit/1-1.jpg" alt="" /></a>
                            <a href="#" class="goods-name">美国无籽红提1kg</a>
                            <div class="list-right fr">
                                <p>
                                    &yen; <span class="price">59.80</span> &times; <span class="quantity">5</span>
                                </p>
                                <span class="delete-list fr">删除</span>
                            </div>
                        </li> -->
                    </ul>
                    <div class="list-information">共<span class="goods-num"></span>件商品 共计 &yen; <span class="total-price">0.00</span><a href="http://localhost:666/html/cart.html" class="go-calculate fr">去结算</a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav">
        <div class="container clearfix">
            <div class="all-sort fl">
                <h2>全部商品分类<i class="triangle"></i></h2>
                <ul class="all-sort-list">
                    <li>
                        <a class="sort-list" href="http://localhost:666/html/goodslist.html?a">
                            <span class="list-icon"></span><span>水果蔬菜</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="http://localhost:666/html/goodslist.html?b">
                            <span class="list-icon"></span><span>肉禽蛋奶</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="#">
                            <span class="list-icon"></span><span>粮油副食</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="#">
                            <span class="list-icon"></span><span>零食酒饮</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="#">
                            <span class="list-icon"></span><span>主题场景</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="#">
                            <span class="list-icon"></span><span>这箱有礼</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="sort-list" href="#">
                            <span class="list-icon"></span><span>生活用品</span>
                        </a>
                        <div class="sort-details">
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">国产水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">进口水果</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                            <div class="details-row clearfix">
                                <div class="row-header fl">
                                    <a class="row-title" href="#">新鲜蔬菜</a>
                                </div>
                                <div class="row-content fl">
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                    <a href="#">苹果</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="conceal-list">
                            <img src="http://localhost:666/img/common/menu_arrow_top.png" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="all-page clearfix">
                <li><a class="index" href="http://localhost:666">首页</a></li>
                <li><a href="#">礼品卡券</a></li>
                <li><a href="#">安心宅配</a></li>
                <li><a href="#">产地特色预定</a></li>
                <li><a href="#">企业定制</a></li>
                <li><a href="#">活动专区</a></li>
                <li><a href="#">食尚资讯</a></li>
                <li><a href="#">依谷扶贫</a></li>
            </ul>
        </div>
    </div>
    `;
            return this.each(function() {
                $(this).html(html);
            })
        }
    })
})