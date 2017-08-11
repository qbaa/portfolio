var loader = (function() {

    var load = function() {

        var n = 0;
        var c = 0;
        jQuery('img').each(function() {
            n++;
            var tmpImg = new Image();
            tmpImg.src = jQuery(this).attr('src');
            jQuery(tmpImg).load(function() {
                c++;
            }).error(function() {
                n = n - 1;
            });
        });


        var interval = setInterval(function() {
            percent = n / 100;
            loaded = Math.round(c / percent);

            jQuery(".loader__progress").html(loaded + "%");
            jQuery(".loader__line").css({"width": loaded + "%", "opacity": loaded / 100});

            if (loaded > 99 || n == c) {
                setTimeout(function() {
                    jQuery(".loader").fadeOut();
                    clearInterval(interval);
                }, 500);
            }

        }, 1);
    }

    var init = function() {

        load();

    };

    return {
        init: init
    };

})();
