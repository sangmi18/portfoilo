$("document").ready(function(){


    const swiper = new Swiper(".main-content",{
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        slidesPerView: 1,
        centeredSlides: true,
        // autoplay: {
        //     delay: 3000
        // },
        spaceBetween: 50,
      
    })

    const swiper2 = new Swiper(".main-slide",{
        loop: true,
        autoplay: {
            delay: 1000
        },
        speed: 2000
    })
    $(window).resize(function(){
        $(".slide-wrap").css("transform","translateX(-"+(count+1)*16.667+"%").css("transition","0s")
    })

    
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
       
        if(pos>=$(".forth").eq(0).offset().top-10){
            $(".forth .forth-wrap .forth-item .image ").fadeIn();
            let content_img=[
                "images/rd/4티비.png"
            ]
            let content_img2=[
                "images/rd/4스마트폰화면.png"
        
            ]
        
            setTimeout(function(){
                if( $(".forth .forth-wrap .forth-item .image .timer p").text()=="1Min"){
                    $(".forth .forth-wrap .forth-item .image .timer p").text("2Min")
                }
                
            },2000)
            setTimeout(function(){
                if( $(".forth .forth-wrap .forth-item .image .timer p").text()=="2Min"){
                    $(".forth .forth-wrap .forth-item .image .timer p").text("3Min")
                }
                
            },3000)
            setTimeout(function(){
                if( $(".forth .forth-wrap .forth-item .image .timer p").text()=="3Min"){
                    $(".forth .forth-wrap .forth-item .image .timer p").text("4Min")
                }
                
            },4000)
            
            setTimeout(function(){
                $(".forth .forth-wrap .forth-item .image .left img").attr("src","images/rd/4티비.png");
                $(".forth .forth-wrap .forth-item .image .right img").attr("src","images/rd/4스마트폰화면.png");
                if( $(".forth .forth-wrap .forth-item .image .timer p").text()=="4Min"){
                    $(".forth .forth-wrap .forth-item .image .timer p").text("5Min")
                    }
                    
        
            },5000)

            
        }
       

        
        else{
            $(".forth .forth-wrap .forth-item .image").fadeOut();
            $(".forth .forth-wrap .forth-item .image .left img").attr("src","images/rd/4티비화면.png");
            $(".forth .forth-wrap .forth-item .image .right img").attr("src","images/rd/4폰.png ");
            $(".forth .forth-wrap .forth-item .image .timer p").text("1Min")
        }
            
    
    })
    $(".fifth .fifth-wrap .fifth-item .bottom ul li p.q").click(function(){
        let a =$(this).index();
        $(this).next().slideToggle().siblings("p.a").slideUp();
        
    })
    $(".fifth .fifth-wrap .fifth-item .bottom ul li").click(function(){
        let a =$(this).index();
        $(".fifth .fifth-wrap .fifth-item .bottom ul li").eq(a).toggleClass("m");
        
    })



})