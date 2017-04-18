//    轮播图变化时应用动画
    $('.carousel').on('slide.bs.carousel', function () {
        $('.carousel-words').removeClass('carousel-show');
    }).on('slid.bs.carousel', function () {
        $('.carousel-words').addClass('carousel-show');
    });