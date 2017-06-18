var animations = (function() {

    var init = function() {

        AOS.init({
          duration: 1000,
          once: true,
          disable: 'mobile'
        });

    };

    return {
        init: init
    };

})();
