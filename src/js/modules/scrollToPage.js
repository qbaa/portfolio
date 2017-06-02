var scrollToPage = (function() {

    var s = {};

    var preventDefault = function(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }    

    var disableScroll = function() {
        $('body').bind('mousewheel', function () {
            preventDefault();
        });
    }

    var enableScroll = function() {
        $('body').unbind('mousewheel');
    }    

    var scroll = function(e) {
        e.preventDefault();
        var t = $(this),
            h = t.attr("href"),
            n = $('.navigation'),
            header = $('.header'),
            m = $('.menu-button'),
            timeout;
            //console.log(h);

        n.removeClass("navigation--active");
        header.removeClass("header--navigation-active");
        m.removeClass("menu-button--active");

        if (t.hasClass("no-timeout")) {
            timout = 0;
        } else {
            timout = 300;
        }

        disableScroll();
        setTimeout(function(){
            $('html, body').animate({scrollTop: $(h).offset().top}, 1000, function () {
                enableScroll();
            });  
        }, timout);          

    };

    var init = function(config) {
        s = config;

        s.$scroll.on('click', scroll);

    };

    return {
        init: init
    };

})();
