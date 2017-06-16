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

        var values = $(this).serialize();

        $.ajax({
            url: 'mail.php',
            type: "POST",
            data: values
        }).done(function(data){
            //alert("OK");
            if (data == "ok") {
                s.$form.addClass('form--ok');
            } else {
                s.$form.addClass('form--error');
            }
        }).fail(function() {
            //alert("Blad");
            s.$form.addClass('form--error');
            //s.$form.addClass('form--ok');
        });        

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

    var textarea = document.querySelector('textarea');


             
    var autosize = function() {
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height: auto; padding: 12px; border: 0;';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    };

    var back = function(e) {
        e.preventDefault();
        s.$form.removeClass();
        s.$form[0].reset();
        s.$inputs.removeClass("input--active");
    };

    var init = function(config) {
        s = config;

        s.$inputs.on('blur', addActive);
        s.$form.on('submit', submit);
        s.$back.on('click', back);
        s.$textarea.on('keydown', autosize);
    };

    return {
        init: init
    };

})();
