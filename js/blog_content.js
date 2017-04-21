var flog_click = 0;
$(".topic_close").click(function () {
        $mainbody = $('.main_body');
        $topicbody = $('.topic_body');
        flog_click = flog_click + 1;
        if (flog_click%2 == 1){
            $mainbody.removeClass('col-md-9');
            $topicbody.hide();
            $(this).children().addClass('fa-address-card-o');
            $(this).children().removeClass('fa-close');
        }else {
            $mainbody.addClass('col-md-9');
            $topicbody.show();
            $(this).children().addClass('fa-close');
            $(this).children().removeClass('fa-address-card-o');
        }
        return false;
});