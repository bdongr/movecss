$( document ).ready(function(){
    $('.mv-button').each(function (index, element ) {
        var width = $(element).innerWidth();
        var height = $(element).innerHeight();
        $(element).css({"width": width, "height": height});
    })

    // $('#error').click(function() {
    //     $(this).addClass('is-submited-error').trigger('submitedError');
    // })

    $('.submit').bind('submitting', function () {
        $(this).addClass('is-submitting');
        $(this).text('');
        $(this).css({
            width: $(this).innerHeight(),
        });
        setTimeout(() => {
            $(this).append("<div class='mv-loading'></div>");
        }, 300);
    })
    
    $('.submit').bind("submitedSuccess", function() {
        $(this).addClass('is-submited-success');
        $(this).text('');
        $(this).css({
            width: $(this).innerHeight(),
        });
        $(this).append("<object><embed class='okay' style='width:25px' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoNCjxzdHlsZT4NCgkudGlja3sNCgkJc3Ryb2tlLWRhc2hhcnJheTogMTAwMDsNCgkJc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7DQoJICAJYW5pbWF0aW9uOiBkYXNoIDVzIGxpbmVhciBub3JtYWw7DQoJfQ0KDQoJQGtleWZyYW1lcyBkYXNoIHsNCgkJZnJvbSB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMTAwMDsNCgkJfQ0KCQl0byB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMDsNCgkJfQ0KCX0NCg0KCS5wZW4gew0KCQlzdHJva2Utd2lkdGg6IDIwOw0KCQlzdHJva2UtbGluZWNhcDogcm91bmQ7DQoJCWNsaXAtcGF0aDogdXJsKCNsb2dvKTsNCg0KCQlzdHJva2UtZGFzaGFycmF5OiAzMDA7DQoJCXN0cm9rZS1kYXNob2Zmc2V0OiAwOw0KCQlhbmltYXRpb24tZHVyYXRpb246IDJzOw0KCQlhbmltYXRpb24tbmFtZTogZHJhdzsNCgkJYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsNCgkJYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsOw0KCQlhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsNCgl9DQoNCglAa2V5ZnJhbWVzIGRyYXcgew0KCQlmcm9tIHsNCgkJc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMDsNCgkJfQ0KDQoJCXRvIHsNCgkJc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7DQoJCX0NCgl9DQoJDQo8L3N0eWxlPg0KDQogIDxkZWZzPg0KICAgIDxjbGlwUGF0aCBpZD0ibG9nbyI+DQoJICA8cGF0aCBkPSJNMTMuODk5LDUzLjYwOWM5LjI5Miw4LjQyMSwxOC41ODMsMTYuODQyLDI3Ljg3NCwyNS4yNjJjMS45MzQsMS43NTIsNC40MTMsMS4yMjcsNS44OS0wLjc1OQ0KCQljMTMuMDA4LTE3LjQ3OSwyNi4wMTYtMzQuOTU5LDM5LjAyNS01Mi40MzljMi44OTEtMy44ODUtMy42MjQtNy42MTgtNi40NzctMy43ODVDNjcuMjAzLDM5LjM2Nyw1Ni45MDQsNTMuMjA3LDQzLjg5Niw3MC42ODdsMCwwDQoJCWMtOS4yOTItOC40MjEtMTUuNDAzLTEzLjk2LTI0LjY5NC0yMi4zOEMxNS42MjgsNDUuMDY3LDEwLjMwOCw1MC4zNTUsMTMuODk5LDUzLjYwOUwxMy44OTksNTMuNjA5eiIvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCiAgDQogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgY2xhc3M9InBlbiIgZD0iTTEzLjg5OSw1My42MDljOS4yOTIsOC40MjEsMTguNTgzLDE2Ljg0MiwyNy44NzQsMjUuMjYyYzEuOTM0LDEuNzUyLDQuNDEzLDEuMjI3LDUuODktMC43NTkNCgkJYzEzLjAwOC0xNy40NzksMjYuMDE2LTM0Ljk1OSwzOS4wMjUtNTIuNDM5YzIuODkxLTMuODg1LTMuNjI0LTcuNjE4LTYuNDc3LTMuNzg1Yy0xMy4wMDgsMTcuNDc5LTI2LjAxNiwzNC45Ni0zOS4wMjQsNTIuNDM5DQoJCWMxLjk2My0wLjI1MywzLjkyNi0wLjUwNiw1Ljg5LTAuNzU5Yy05LjI5Mi04LjQyMS0xOC41ODMtMTYuODQyLTI3Ljg3NC0yNS4yNjJDMTUuNjI4LDQ1LjA2NywxMC4zMDgsNTAuMzU1LDEzLjg5OSw1My42MDkNCgkJTDEzLjg5OSw1My42MDl6Ii8+DQo8L3N2Zz4NCg=='></object>")
    })

    $('.submit').bind("submitedError", function() {
        $(this).addClass('is-submited-error');
        $(this).text('');
        $(this).css({
            width: $(this).innerHeight(),
        });
        $(this).append("<object><embed class='okay' style='width:25px' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoNCjxzdHlsZT4NCgkudGlja3sNCgkJc3Ryb2tlLWRhc2hhcnJheTogMTAwMDsNCgkJc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7DQoJICAJYW5pbWF0aW9uOiBkYXNoIDVzIGxpbmVhciBub3JtYWw7DQoJfQ0KDQoJQGtleWZyYW1lcyBkYXNoIHsNCgkJZnJvbSB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMTAwMDsNCgkJfQ0KCQl0byB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMDsNCgkJfQ0KCX0NCg0KCS5lcnJvcnsNCgkJdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyOw0KCQlhbmltYXRpb24tZHVyYXRpb246IDAuNnM7DQoJCWFuaW1hdGlvbi1uYW1lOiBkcmF3Ow0KCQlhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOw0KCQlhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7DQoJCWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47DQoJfQ0KDQoJQGtleWZyYW1lcyBkcmF3IHsNCgkJZnJvbSB7DQoJCQl0cmFuc2Zvcm06IHNjYWxlKDAuMDAwMSk7DQoJCX0NCg0KCQl0byB7DQoJCQl0cmFuc2Zvcm06IHNjYWxlKDEpOw0KCQl9DQoJfQ0KCQ0KPC9zdHlsZT4NCgkgIDxwYXRoIGNsYXNzPSJlcnJvciIgZmlsbD0iI2ZmZiIgZD0iTTU1LjMwMyw1MGM3LjcwOS03LjcwOSwxNS40MTgtMTUuNDE3LDIzLjEyNy0yMy4xMjZjMy40MjMtMy40MjMtMS44OC04LjcyNi01LjMwMy01LjMwNA0KCQlDNjUuNDE4LDI5LjI3OSw1Ny43MDksMzYuOTg4LDUwLDQ0LjY5N2MtNy43MDktNy43MDktMTUuNDE3LTE1LjQxOC0yMy4xMjYtMjMuMTI3Yy0zLjQyMy0zLjQyMi04LjcyNiwxLjg4MS01LjMwNCw1LjMwNA0KCQlDMjkuMjc5LDM0LjU4MywzNi45ODgsNDIuMjkxLDQ0LjY5Nyw1MGMtNy43MDksNy43MDktMTUuNDE4LDE1LjQxOC0yMy4xMjcsMjMuMTI3Yy0zLjQyMiwzLjQyMywxLjg4MSw4LjcyNiw1LjMwNCw1LjMwMw0KCQlDMzQuNTgzLDcwLjcyMSw0Mi4yOTEsNjMuMDEyLDUwLDU1LjMwM2M3LjcwOSw3LjcwOSwxNS40MTgsMTUuNDE4LDIzLjEyNywyMy4xMjdjMy40MjMsMy40MjMsOC43MjYtMS44OCw1LjMwMy01LjMwMw0KCQlDNzAuNzIxLDY1LjQxOCw2My4wMTIsNTcuNzA5LDU1LjMwMyw1MHoiLz4NCjwvc3ZnPg0K'></object>")
    })
})