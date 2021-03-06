$( document ).ready(function(){
    
    var svgEye = '<svg viewBox="-20 -200 320 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="cursor:pointer" class="eye-close" id="eye"> <style> #eye { /* set these to blink faster/slower */ --duration-blink: .2s; --duration-lashes: .2s; /* calculated and fixed vars */ --delay-lashes: var(--duration-blink); --duration-pupil: .1s; --delay-pupil: calc(var(--duration-blink)*2/3); } #eye-bottom, #eye-top { stroke-linecap: round; } #eye-top, #eye-lashes { transition: var(--duration-blink) ease-in; } #eye-pupil { opacity: 0; transition: opacity var(--duration-pupil) var(--delay-pupil) ease; } /* open state */ .eye-open #eye-top, .eye-open #eye-lashes { transform: rotateX(.5turn); animation: scaleUp var(--duration-lashes) var(--delay-lashes) ease-in-out; } .eye-open #eye-pupil { opacity: 1; } /* close state */ .eye-close #eye-lashes { animation: scaleDown var(--duration-lashes) var(--duration-blink) ease-in-out; } .eye-close #eye-pupil { opacity: 0; } /* keyfranes */ @keyframes scaleUp { 50% { transform: rotateX(.5turn) scaleY(1.15); } to { transform: rotateX(.5turn) scaleY(1); } } @keyframes scaleDown { 50% { transform: scaleY(1.15); } to { transform: scaleY(1); } } </style> <g stroke-width="25" fill="none"> <!-- CHANGE EYE-LASHES COLOR ON THE STROKE PROPERTY --> <g id="eye-lashes" stroke="#7c7e7f"> <line x1="140" x2="140" y1="90" y2="180" /> <line x1="70" x2="10" y1="60" y2="140" /> <line x1="210" x2="270" y1="60" y2="140" /> </g> <!-- CHANGE EYE-BOTTOM AND EYE-TOP COLOR ON THE STROKE PROPERTY --> <path id="eye-bottom" d="m0,0q140,190 280,0" stroke="#7c7e7f" /> <path id="eye-top" d="m0,0q140,190 280,0" stroke="#7c7e7f" /> <!-- CHANGE PUPIL COLOR ON THE FILL PROPERTY --> <circle id="eye-pupil" cx="140" cy="0" r="40" fill="#7c7e7f" stroke="none" /> </g></svg>'

    var svgTick = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" style="width: auto; height: 100%"> <style> .tick{ stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: dash 5s linear normal; } @keyframes dash { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } } .pen { stroke-width: 20; stroke-linecap: round; clip-path: url(#logo); stroke-dasharray: 300; stroke-dashoffset: 300; } .pen-animation{ stroke-dasharray: 300; stroke-dashoffset: 0; animation-duration: 2s; animation-name: draw; animation-iteration-count: 1; animation-direction: normal; animation-timing-function: ease-in-out; } @keyframes draw { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } } </style> <defs> <clipPath id="logo"> <path d="M13.899,53.609c9.292,8.421,18.583,16.842,27.874,25.262c1.934,1.752,4.413,1.227,5.89-0.759 c13.008-17.479,26.016-34.959,39.025-52.439c2.891-3.885-3.624-7.618-6.477-3.785C67.203,39.367,56.904,53.207,43.896,70.687l0,0 c-9.292-8.421-15.403-13.96-24.694-22.38C15.628,45.067,10.308,50.355,13.899,53.609L13.899,53.609z"/> </clipPath> </defs> <path fill="none" class="pen pen-animation" stroke="#3DA8F0" d="M13.899,53.609c9.292,8.421,18.583,16.842,27.874,25.262c1.934,1.752,4.413,1.227,5.89-0.759 c13.008-17.479,26.016-34.959,39.025-52.439c2.891-3.885-3.624-7.618-6.477-3.785c-13.008,17.479-26.016,34.96-39.024,52.439 c1.963-0.253,3.926-0.506,5.89-0.759c-9.292-8.421-18.583-16.842-27.874-25.262C15.628,45.067,10.308,50.355,13.899,53.609 L13.899,53.609z"/> </svg>'

    $('.mv-input[type="password"]').each(function (index, element) {
        if(element.dataset.reveal === "true"){
            $('<div class="mv-password-reveal">'+svgEye+'</div>')
                .insertAfter($("#"+element.id).siblings()[0])
        }
    })

    $(document).on('click', '.mv-password-reveal',function () {
        toggleEye($(this).children()[0])
        if($($(this).siblings()[0]).attr('type')==='password'){
            $($(this).siblings()[0]).attr('type', 'text')
        } else{
            $($(this).siblings()[0]).attr('type', 'password')
        }
    })

    function toggleEye(svgElement) { 
        if($(svgElement)[0].classList.contains('eye-open') === false){
            $(svgElement).removeClass('eye-close');
            $(svgElement).addClass('eye-open');
        } else{
            $(svgElement).removeClass('eye-open');
            $(svgElement).addClass('eye-close');
        }
    }   

    $('.mv-label').each(function (index, element) {
        if(element.dataset.label === 'checkbox'){
            $(element).click(function(){
                if(element.children.length>0){
                    $(element).children(".tick-checkbox").addClass('tick-checkbox-hide');
                    setTimeout(() => {
                        $(element).children(".tick-checkbox").remove();
                    }, 200);
                } else{
                    $(element).prepend('<div class="tick-checkbox">'+svgTick+'</div>');
                }
            })
        }
    })

    $('.mv-input[type="radio"]').change(function() {
        var name=this.name;
        var value=this.value;
        if (this.checked) {
            $('.mv-input[type="radio"]').each(function (index, element) {
                if(element.name === name){
                    if(element.value === value){
                        $(element).next().prepend('<div class="dot-radio"></div>');
                    } else{
                        $(element).next().children(".dot-radio").addClass('dot-radio-hide');
                        setTimeout(() => {
                            $(element).next().children(".dot-radio").remove();
                        }, 200);
                    }
                }
            })
        }
    })
    
    $('.mv-button').each(function (index, element ) {
        var width = $(element).innerWidth();
        var height = $(element).innerHeight();
        $(element).css({"width": width, "height": height});
    })

    $('.submit').bind("submitting", function() {
        $(this).addClass('is-submitting');
        $(this).append("<div class='mv-loading' style='display: none'></div>");
        setTimeout(() => {
            $(this).children('.mv-loading').css('display', 'block');
        }, 300);
    })
    
    $('.submit').bind("submitedSuccess", function() {
        $(this).addClass('is-submited-success');
        $(this).children('.mv-loading').remove();
        setTimeout(() => {
            $(this).removeClass('is-submited-success');
            $(this).removeClass('is-submitting');
        }, 5000);
    })

    $('.submit').bind("submitedError", function() {
        $(this).addClass('is-submited-error');
        $(this).children('.mv-loading').remove();
        setTimeout(() => {
            $(this).removeClass('is-submited-error');
            $(this).removeClass('is-submitting');
        }, 5000);
    })
})