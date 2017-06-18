var background = (function() {

    var scroll = function() {
        var scrollTop = $(window).scrollTop();
        $(".background-image").css('transform', 'translateY(' + parseInt(scrollTop / 2) + 'px)');
    }

    var init = function() {

        $(window).on('scroll', scroll);

    };

    return {
        init: init
    };

})();
