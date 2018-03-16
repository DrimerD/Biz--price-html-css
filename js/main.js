
$(document).ready(function(){
    function heightDetect() {
        $("main").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $('.eclipse-block').show(500);

    $('.click-button').on('click', function () {
        $('.eclipse-block').fadeIn(500);
    });

    $('.close-eclipse').on('click', function () {
        $('.eclipse-block').fadeOut(500);
    })
});
