$( document ).ready(function(){
    $('.mv-button').each(function (index, element ) {
        var width = $(element).innerWidth();
        var height = $(element).innerHeight();
        $(element).css({"width": width, "height": height});
    })

    $('.submit[type="submit"]').each(function (index, element) {
        $(element).click(function() {
            $(element).text('');
            $(element).css({
                paddingRight: '0px',
                paddingLeft: '0px',
                width: $(element).innerHeight(),
            }, 2000, function() {
            });
            $(element).append("<object><embed class='okay' style='width:25px' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQoNCjxzdHlsZT4NCgkudGlja3sNCgkJc3Ryb2tlLWRhc2hhcnJheTogMTAwMDsNCgkJc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7DQoJICAJYW5pbWF0aW9uOiBkYXNoIDVzIGxpbmVhciBhbHRlcm5hdGUgaW5maW5pdGU7DQoJfQ0KDQoJQGtleWZyYW1lcyBkYXNoIHsNCgkJZnJvbSB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMTAwMDsNCgkJfQ0KCQl0byB7DQoJCQlzdHJva2UtZGFzaG9mZnNldDogMDsNCgkJfQ0KCX0NCg0KCS5wZW4gew0KCQlzdHJva2Utd2lkdGg6IDIwOw0KCQlzdHJva2UtbGluZWNhcDogcm91bmQ7DQoJCWNsaXAtcGF0aDogdXJsKCNsb2dvKTsNCg0KCQlzdHJva2UtZGFzaGFycmF5OiAzMDA7DQoJCXN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7DQoJCWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7DQoJCWFuaW1hdGlvbi1uYW1lOiBkcmF3Ow0KCQlhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsNCgkJYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOw0KCQlhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7DQoJfQ0KDQoJQGtleWZyYW1lcyBkcmF3IHsNCgkJZnJvbSB7DQoJCXN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7DQoJCX0NCg0KCQl0byB7DQoJCXN0cm9rZS1kYXNob2Zmc2V0OiAtMzAwOw0KCQl9DQoJfQ0KCQ0KPC9zdHlsZT4NCg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImxvZ28iPg0KCSAgPHBhdGggZD0iTTEzLjg5OSw1My42MDljOS4yOTIsOC40MjEsMTguNTgzLDE2Ljg0MiwyNy44NzQsMjUuMjYyYzEuOTM0LDEuNzUyLDQuNDEzLDEuMjI3LDUuODktMC43NTkNCgkJYzEzLjAwOC0xNy40NzksMjYuMDE2LTM0Ljk1OSwzOS4wMjUtNTIuNDM5YzIuODkxLTMuODg1LTMuNjI0LTcuNjE4LTYuNDc3LTMuNzg1QzY3LjIwMywzOS4zNjcsNTYuOTA0LDUzLjIwNyw0My44OTYsNzAuNjg3bDAsMA0KCQljLTkuMjkyLTguNDIxLTE1LjQwMy0xMy45Ni0yNC42OTQtMjIuMzhDMTUuNjI4LDQ1LjA2NywxMC4zMDgsNTAuMzU1LDEzLjg5OSw1My42MDlMMTMuODk5LDUzLjYwOXoiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIA0KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIGNsYXNzPSJwZW4iIGQ9Ik0xMy44OTksNTMuNjA5YzkuMjkyLDguNDIxLDE4LjU4MywxNi44NDIsMjcuODc0LDI1LjI2MmMxLjkzNCwxLjc1Miw0LjQxMywxLjIyNyw1Ljg5LTAuNzU5DQoJCWMxMy4wMDgtMTcuNDc5LDI2LjAxNi0zNC45NTksMzkuMDI1LTUyLjQzOWMyLjg5MS0zLjg4NS0zLjYyNC03LjYxOC02LjQ3Ny0zLjc4NWMtMTMuMDA4LDE3LjQ3OS0yNi4wMTYsMzQuOTYtMzkuMDI0LDUyLjQzOQ0KCQljMS45NjMtMC4yNTMsMy45MjYtMC41MDYsNS44OS0wLjc1OWMtOS4yOTItOC40MjEtMTguNTgzLTE2Ljg0Mi0yNy44NzQtMjUuMjYyQzE1LjYyOCw0NS4wNjcsMTAuMzA4LDUwLjM1NSwxMy44OTksNTMuNjA5DQoJCUwxMy44OTksNTMuNjA5eiIvPg0KPC9zdmc+DQo='></object>")
        })
    })
})