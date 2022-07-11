$("document").ready(function(){
    const notice = new Swiper(".best",{
        direction:"vertical",
        loop:true,
        navigation:{
            nextEl : ".btn-next",
            prevEl : ".btn-prev"
        },
        autoplay:{
            delay:1500
        }
    })
    $(".best").mouseover(function(){
        notice.autoplay.stop();

    }).mouseout(function(){
        notice.autoplay.start();

    })

    $(".nav .nav-wrap .hamburger").click(function(){
        $(".nav .nav-wrap .all-menu").fadeToggle();

    })

    const main_slide = new Swiper(".main-slide",{
        loop:true,
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"

        },
      
        autoplay:{
            delay:4000
        }
    })

    $(".main-slide").mouseover(function(){
        main_slide.autoplay.stop();

    }).mouseout(function(){
        main_slide.autoplay.start();

    })

    const recommend_slide = new Swiper(".recommend-swiper",{
        
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"

        },

    
        slidesPerView:4,
        spaceBetween:20,
   
    })

    $(".recommend-product .line-list p").eq(0).addClass("on");
    $(".recommend-product .product-wrap .recommend-swiper").eq(0).show();

    $(".recommend-product .line-list p").click(function(){
        let slide = $(this).index();
        $(".recommend-product .product-wrap .recommend-swiper").hide().eq(slide).show();
        $(".recommend-product .line-list p").removeClass("on").eq(slide).addClass("on");

    })

    $(".best-product .product-wrap .left .product-item").eq(0).show();
    $(".best-product .product-wrap .right .text-content").eq(0).addClass("click")
    

    

    

    let idx=0;

    $(".best-product .product-wrap .right .text-content").mouseover(function(){

        idx=$(this).index();
        $(".best-product .product-wrap .left .product-item").hide().eq(idx).show();

        $(".best-product .product-wrap .right .text-content").removeClass("click").eq(idx).addClass("click")


    })


    let timer = setInterval(function(){

        idx++;

        if(idx>$(".best-product .product-wrap .right .text-content").length-1){
            idx=0;
        }
        $(".best-product .product-wrap .left .product-item").hide().eq(idx).show();

     $(".best-product .product-wrap .right .text-content").removeClass("click").eq(idx).addClass("click")
        
    },3000)

    $(".best-product .product-wrap .right .text-content, .best-product .product-wrap .left .product-item").mouseout(function(){
        clearInterval(timer)
    }).mouseout(function(){
        timer = setInterval(function(){

            idx++;
    
            if(idx>$(".best-product .product-wrap .right .text-content").length-1){
                idx=0;
            }
            $(".best-product .product-wrap .left .product-item").hide().eq(idx).show();
    
         $(".best-product .product-wrap .right .text-content").removeClass("click").eq(idx).addClass("click")
            
        },3000)

    })

    const review_slide = new Swiper(".review-slide",{
        loop:true,
        
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"

        },

    
        slidesPerView:3,
        spaceBetween:19,
   
    })


 

    


    



})