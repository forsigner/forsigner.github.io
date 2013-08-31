/*
 * by forsigner
*/
var Forsigner = (function (fs) {

    /** 私有属性
     * ----------------------------------------------------*/

    /** 私有方法
     * ----------------------------------------------------*/

    /** 公有方法&属性
     -----------------------------------------------------------------*/
    /**
     * =init 页面初始化
     */

    fs.init = function() {
        var $ctrl = $('#ctrl'),
            $nav = $('#blog-nav .dib'),
            $backToTop = $('#back-to-top'),
            pathname = window.location.pathname;

        $(window).bind("scroll", function(){

            // 获取网页文档对象滚动条的垂直偏移
            var scrollTopNum = $(document).scrollTop();

            // 滚动条的垂直偏移大于 0 时显示，反之隐藏
            (scrollTopNum > 100) ? $backToTop.fadeIn("fast") : $backToTop.fadeOut("fast");
        });

        // 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
        $backToTop.click(function() {
            $("html, body").animate({ scrollTop: 0 }, 100);
        });

        switch (pathname) {
            case '/':
                $nav.removeClass('active');
                $nav.eq(0).addClass('active');
                break;

            case '/blog/':
                $nav.removeClass('active');
                $nav.eq(1).addClass('active');
                break;

            case '/tags/':
                $nav.removeClass('active');
                $nav.eq(2).addClass('active');
                break;

            case '/about/':
                $nav.removeClass('active');
                $nav.eq(3).addClass('active');
                break;

            default:
                break;
        }
    };
    return fs;
} (Forsigner||{}));
