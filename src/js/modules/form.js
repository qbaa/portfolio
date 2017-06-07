var form = (function() {

    var s = {};

    var addActive = function() {
        $.each(s.$inputs, function(){
            if ($.trim(this.value)) {
                $(this).addClass("input--active");
            } else {
                $(this).removeClass("input--active");
            }
        }); 
    };

    var submit = function(e) {
        e.preventDefault();

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        var v = true;

        var inputs = ['name', 'email', 'message'];

        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i],
                $input = $('#'+input);

            if (input == 'email') { 

                if (!re.test($('#email').val())) {
                    $('#email').addClass('input--error');
                    v = false;
                } else {
                    $('#email').removeClass('input--error');
                }

                $('#email').focusout(function() {   
                    if (!re.test($('#email').val())) {
                        $('#email').addClass('input--error');
                        v = false;
                    } else {
                        $('#email').removeClass('input--error');
                    }
                });                           

            } else {

                if ($input.val().length < 3) {
                    $input.addClass('input--error');
                    v = false;
                } else {
                    $input.removeClass('input--error');
                }

                $input.focusout(function() {
                    if ($input.val().length < 3) {
                        $input.addClass('input--error');
                        v = false;
                    } else {
                        $input.removeClass('input--error');
                    }
                });  

            }

        };

        if (!v) return false;

        s.$form.addClass('form--send');

        /*if ($name.val().length < 1) {
            $name.addClass('input--error');
            v = false;
        } else {
            $name.removeClass('input--error');
        }        

        if (!re.test($email.val())) {
            $email.addClass('input--error');
            v = false;
        } else {
            $email.removeClass('input--error');
        }        

        if ($name,.val().length < 1) {
            $name,.addClass('input--error');
            v = false;
        } else {
            $name.removeClass('input--error');
        }*/  

        //alert("g");
    };

    var init = function(config) {
        s = config;

        s.$inputs.on('blur', addActive);
        s.$form.on('submit', submit);
    };

    return {
        init: init
    };

})();
