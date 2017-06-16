var footer = (function() {

    var s = {};

    var toggleActive = function() {
        $(this).removeClass('hide').addClass('active').siblings().removeClass('active').addClass('hide');
        var data = $(this).attr('data-item');
        s.$desc.find('.'+data).addClass('active').siblings().removeClass('active');
    };

    var remove = function() {
        s.$items.removeClass();
        s.$desc.find('span').removeClass('active');
    };

    var init = function(config) {
        s = config;

        s.$items.on('mouseenter', toggleActive);
        s.$items.on('mouseleave', remove);
    };

    return {
        init: init
    };

})();
