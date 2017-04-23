//    回到顶部按钮的功能
    $(".to-top").click(function () {
        $('body,html').animate({scrollTop: 0}, 500, 'swing');
        return false;
    });
//    进入浮起特效
    $(document).ready(function () {
        window.sr = ScrollReveal();
        sr.reveal('.sr-icons', {
            duration: 1000,
            scale: 0.3,
            distance: '0px'
        }, 400);
        sr.reveal('.sr-button', {
            duration: 1000,
            delay: 200
        });
    });
//    窗口滑动到一定位置
    $(window).scroll(function () {
        $top = $(".to-top");
        var code = $top.offset().top;
           // 窗口滑动到一定位置开始显示回到顶部按钮
        if (code > 1000) {
            $top.addClass('top-show');
        } else {
            $top.removeClass('top-show');
        }
    });
// 提示框初始化
    $(function () {
       $('[data-toggle="tooltip"]').tooltip();
    });


