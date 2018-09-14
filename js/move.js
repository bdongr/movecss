$( document ).ready(function(){
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