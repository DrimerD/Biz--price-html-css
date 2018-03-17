
$(document).ready(function(){
    function heightDetect() {
        $("main").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(this).keydown(function(e){
            if(e.keyCode == 27){
                $('.eclipse-block').fadeOut(500);
            }
        });

    $('.click-button').on('click', function () {
        $('.eclipse-block').fadeIn(500);
    });

    $('.close-eclipse').on('click', function () {
        $('.eclipse-block').fadeOut(500);
    });
});
