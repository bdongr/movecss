$( document ).ready(function(){
    $('.mv-button').each(function (index, element ) {
        var width = $(element).innerWidth();
        var height = $(element).innerHeight();
        $(element).css({"width": width, "height": height});
    })
})