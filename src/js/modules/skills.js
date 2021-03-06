var skills = (function() {

    var s = {};

    var toggleActive = function() {
        var data = $(this).attr('data-item');
        s.$desc.find('.'+data).addClass('active').siblings('div:not(.skill__desc)').removeClass('active');
    };

    var remove = function() {
        s.$desc.find('span').removeClass('active');
    }

    var init = function(config) {
        s = config;

        s.$items.on('mouseenter', toggleActive);
        s.$items.on('mouseleave', remove);
    };

    return {
        init: init
    };

})();