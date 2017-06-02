var menu = (function() {

    var s = {};

    var toggleClass = function() {
        s.$menuButton.toggleClass('menu-button--active');
        s.$menu.toggleClass('navigation--active');
        s.$header.toggleClass('header--navigation-active');
    };

    var init = function(config) {
        s = config;

        s.$menuButton.on('click', toggleClass);
    };

    return {
        init: init
    };

})();
