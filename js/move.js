$( document ).ready(function(){
    $.fn.getSVG = function (selector) {
		var svgDoc = this[0].contentDocument;
		return $(svgDoc);
    };
    
    window.onload = function() {
        var svg = $("#revealPass").getSVG();
        var pass = $("#pass");
        svg.click(function () {
            if(pass.attr('type')==='password'){
                pass.attr('type', 'text')
            } else{
                pass.attr('type', 'password')
            }
        })
        var svg2 = $("#revealPass2").getSVG();
        var pass2 = $("#pass2");
        svg2.click(function () {
            if(pass2.attr('type')==='password'){
                pass2.attr('type', 'text')
            } else{
                pass2.attr('type', 'password')
            }
        })
    }

    $('.mv-button').each(function (index, element ) {
        var width = $(element).innerWidth();
        var height = $(element).innerHeight();
        $(element).css({"width": width, "height": height});
    })

    $('.submit').bind("submitting", function() {
        $(this).addClass('is-submitting');
        setTimeout(() => {
            $(this).append("<div class='mv-loading'></div>");
        }, 300);
    })
    
    $('.submit').bind("submitedSuccess", function() {
        $(this).addClass('is-submited-success');
        $('.mv-loading').remove();
        setTimeout(() => {
            $(this).removeClass('is-submited-success');
            $(this).removeClass('is-submitting');
        }, 5000);
    })

    $('.submit').bind("submitedError", function() {
        $(this).addClass('is-submited-error');
        $('.mv-loading').remove();
        setTimeout(() => {
            $(this).removeClass('is-submited-error');
            $(this).removeClass('is-submitting');
        }, 5000);
    })
})