var scrollAddClass = (function() {

    var s = {};

    var initWaypoints = function() {

        var waypoint = new Waypoint({
            element: document.getElementsByClassName('section-white'),
            handler: function(direction) {
                if (direction === "down") {
                    $('.header').addClass('black');
                } else {
                    $('.header').removeClass('black');
                }
            },
            offset: '50'
        });

    };

    var init = function(config) {
        s = config;

        initWaypoints();

    };

    return {
        init: init
    };

})();
