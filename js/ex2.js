$("document").ready(function(){
    $(".side-nav > ul li.menu").addClass("on")
    $(".side-nav > ul li.menu").click(function(){
        $(".side-nav ul").toggleClass("on")
        $(".side-nav .nav-wrap").toggleClass("on")
        $(".side-nav > ul li.menu").toggleClass("on")
        $(".side-nav ul .menu i").toggleClass("fa-times fa-bars")
    })


})