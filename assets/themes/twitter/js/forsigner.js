/*
 * by forsigner
*/
var Forsigner = (function (fs) {

    /** 私有属性
     * ----------------------------------------------------*/
    var _sliding = false,//侧滑的状态
        _surprise = false,//侧滑的状态
        _cat = false;//侧滑的状态

    /** 私有方法
     * ----------------------------------------------------*/

    /** 公有方法&属性
     -----------------------------------------------------------------*/
    /**
     * =init 页面初始化
     */

    fs.init = function() {
        $(function($){
            var $ctrl = $('#ctrl'),
                $contactme = $('#contactme'),
                $backToTop = $('#back-to-top');

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

            $('.menu-item').each(function (){
                $(this).hover(
                    function () {
                    $(this).offset().left;
                    
                        $(this).animate({
                            left: '0'
                        }, 100);
                    },
                    function () {
                        $(this).animate({
                           left: '-90px'
                        }, 100);
                    }
                );
            });


        });

        };
        return fs;
        } (Forsigner||{}));



/*
 * 调用方法
*/
Forsigner.init();
