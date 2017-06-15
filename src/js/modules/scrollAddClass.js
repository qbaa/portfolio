var scrollAddClass = (function() {

    var s = {};

    var initWaypoints = function() {

        /*var waypoint = new Waypoint({
            element: document.getElementsByClassName('about'),
            handler: function(direction) {
                //alert('You have scrolled to a thing')
                $('.about').addClass('active');
            },
            offset: '50%'
        });        

        var waypoint = new Waypoint({
            element: document.getElementsByClassName('portfolio'),
            handler: function(direction) {
                //alert('You have scrolled to a thing')
                $('.portfolio').addClass('active');
            },
            offset: '50%'
        });        

        var waypoint = new Waypoint({
            element: document.getElementsByClassName('contact'),
            handler: function(direction) {
                //alert('You have scrolled to a thing')
                $('.contact').addClass('active');
            },
            offset: '50%'
        });*/

        var waypoint = new Waypoint({
            element: document.getElementsByClassName('section-white'),
            handler: function(direction) {
                //alert('You have scrolled to a thing')
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
