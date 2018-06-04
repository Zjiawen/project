//先引入jquery,并且定义一个bsheader模块
define(['jquery'], function($) {
    return $.fn.extend({
        bsbanner: function(option) {
            var html = `
    <div class="banner">
        <ul class="banner-list">
            <li><a href="#"><img src="http://localhost:666/img/banner/0.jpg" alt="" /></a></li>
            <li><a href="#"><img src="http://localhost:666/img/banner/1.jpg" alt="" /></a></li>
            <li><a href="#"><img src="http://localhost:666/img/banner/2.png" alt="" /></a></li>
            <li><a href="#"><img src="http://localhost:666/img/banner/3.jpg" alt="" /></a></li>
            <li><a href="#"><img src="http://localhost:666/img/banner/4.png" alt="" /></a></li>
        </ul>
        <div class="banner-btn">
        </div>
    </div>
    `;
            return this.each(function() {
                $(this).html(html);
            })
        }
    })
})