(function($) {
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    var resizeIntro = function() {
        var windowH = $(window).height() - 80;
        var introH = $('#intro').height();
        if (windowH > introH) {
            $('#intro').css("height", windowH);
        }
    };
    $(window).resize(function() {
        resizeIntro();
    });
    resizeIntro();
})(jQuery);
