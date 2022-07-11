$("document").ready(function(){
    $(".fullpage .section  >.text").hide();
    $(".fullpage .section  .scroll").hide();
    let page = new fullpage(".fullpage",{        // scrollBar:true,
        sectionsColor:["white","#f290bd","#53bc79","#53bc79","#efed6e","#efed6e","#efed6e","#efed6e","#faac63","#77b3f7"],
        anchors:["home", "about", "portfolio","etc","contact"],
        // 위치 이동할때 주소
        navigation:true,
        navigationPosition:"left",
        // 네비게이션 왼쪽이동
        navigationTooltips:["홈","소개","작업물","연락처"],
        // 네비게이션 호버하면 나오는 글자
        slidesNavigation:true,
        onLeave:function(origin,destination,direction){
            if(origin.index >= 0 && direction=="down"){
                $(".nav").fadeIn()
            }else if(origin.index ==1 && direction=="up"){
                $(".nav").fadeOut()

        

            }
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        
        afterSlideLoad:function(section,origin,destination){
            let params={
                section:section,
                origin:origin,
                destination:destination
            }
            if(destination.index==1){
                alert("슬라이드가 완료되고 나서 이벤트 실행")
            }
        },
        
        afterLoad:function(origin,destination){
            if(destination.index==0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
                setTimeout(function(){
        
                    if($(".fullpage .section.portfolio_01 .title p").text()=="Hello"){
                                $(".fullpage .section.portfolio_01 .title p").text("Well come to my Portfoilo")
                                
                            }
                            
                        },1500)
                        setTimeout(function(){
                            $(".fullpage .section.portfolio_01 .title p").css("color","white")
                            $(".fullpage .section.portfolio_01").css("background-color","#f290bd")
                            $(".nav ul li a").css("color","white")
                            $(".fullpage .section.portfolio_01 .scroll").slideDown();
                            $(".fullpage .section.portfolio_01  .text").slideDown();
                            
                            
                            
                            
                        },3000)
            
                        
                        
            }
            if(destination.index==1){
                $(".nav ul li a").css("color","#fff")

                
                setTimeout(function(){
                    $(".fullpage .section.portfolio_02").css("background-color","#53bc79")
                    $(".fullpage .section.portfolio_02 .scroll").slideDown();
                    $(".fullpage .section.portfolio_02 .text").slideDown();
       
            },1500)

            }
            if(destination.index==2){
                $(".fullpage .section.portfolio_03 .about").addClass("up")

                
           
            }
            if(destination.index==3){
                setTimeout(function(){
                    $(".fullpage .section.portfolio_04").css("background-color","#efed6e")
                    $(".fullpage .section.portfolio_04 .scroll").slideDown();
                    $(".fullpage .section.portfolio_04 .text").slideDown();
       
            },1500)
                
           
            }
            if(destination.index==4){
                $(".fullpage .section.portfolio_05 .left").addClass("on")
                $(".fullpage .section.portfolio_05 .right").css("opacity","1")
                

                
           
            }
            if(destination.index==5){
                $(".fullpage .section.portfolio_06 .right").addClass("on")
                $(".fullpage .section.portfolio_06 .left").css("opacity","1")
                $(".nav ul li a").css("color","#000")
                

                
           
            }
            if(destination.index==6){
                $(".fullpage .section.portfolio_07 .left").addClass("on")
                $(".fullpage .section.portfolio_07 .right").css("opacity","1")
                $(".nav ul li a").css("color","#fff")
                

                
           
            }
            if(destination.index==7){
                
                setTimeout(function(){
                    $(".fullpage .section.portfolio_08").css("background-color","#faac63")
                    $(".fullpage .section.portfolio_08 .scroll").slideDown();
                    $(".fullpage .section.portfolio_08 .text").slideDown();
       
            },1500)


            }
            if(destination.index==8){
                
              
                $(".fullpage .section.portfolio_09 .small").eq(0).css("left","-100%").stop().animate({
                    left:"0%",
                    opacity:1,
                    zindex:"2"
                })
        


            }
        },

        
        
        
    })


    $(".fullpage .section.portfolio_03 .about .right .cover").eq(0).mouseover(function(){
        $(".fullpage .section.portfolio_03 .about .right .cover").eq(0).addClass("up");
        $(".fullpage .section.portfolio_03 .about .right .text").eq(0).slideDown();

    })
    $(".fullpage .section.portfolio_03 .about .right .cover").eq(1).mouseover(function(){
       
        $(".fullpage .section.portfolio_03 .about .right .cover").eq(1).addClass("up");
        $(".fullpage .section.portfolio_03 .about .right .text").eq(1).slideDown();
    })
    $(".fullpage .section.portfolio_03 .about .right .cover").eq(2).mouseover(function(){
       
        $(".fullpage .section.portfolio_03 .about .right .cover").eq(2).addClass("up");
        $(".fullpage .section.portfolio_03 .about .right .text").eq(2).slideDown();
    })
    $(".fullpage .section.portfolio_03 .about .right .cover").eq(3).mouseover(function(){
       
        $(".fullpage .section.portfolio_03 .about .right .cover").eq(3).addClass("up");
        $(".fullpage .section.portfolio_03 .about .right .text").eq(3).slideDown();
    })


    $(".fullpage .section.portfolio_09 .big .swiper").eq(0).show();
    $(".fullpage .section.portfolio_09 .menu ul li").eq(0).addClass("left")
    $(".fullpage .section.portfolio_09 .menu ul li a").eq(0).addClass("left")



    const swiper = new Swiper(".main-content",{
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        },
        slidesPerView:1,
        
        
        slidesPerGroup:1
    })

    let slide_num = 0;


    $(".fullpage .section.portfolio_09 .menu ul li").click(function(){
        $(".fullpage .section.portfolio_09 .small").eq(slide_num).stop().animate({
            left:"-100%",
            opacity:0,
            zindex:"-1"


        })

        $(".fullpage .section.portfolio_09 .big .swiper").eq(slide_num).hide();
       

        slide_num = $(this).index();

        $(".fullpage .section.portfolio_09 .small").eq(slide_num).css("left","-100%").stop().animate({
            left:"0%",
            opacity:1,
            zindex:"2"
        })

        $(".fullpage .section.portfolio_09 .big .swiper").eq(slide_num).show();

        $(".fullpage .section.portfolio_09 .menu ul li").removeClass("left").eq(slide_num).addClass("left")

        $(".fullpage .section.portfolio_09 .menu ul li a").removeClass("left").eq(slide_num).addClass("left")
        
    
            
            
    })  

    const small = $(".fullpage .section.portfolio_09 .small .small-box ul li");
    const big = $(".fullpage .section.portfolio_09 .big .swiper .swiper-wrapper .swiper-slide");


    let content_img1=[
        "http://via.placeholder.com/500/dae",
        "http://via.placeholder.com/500/f18",
        "http://via.placeholder.com/500/3f2",
        "http://via.placeholder.com/500/9s1"

    ]



    $small.click(function(){

        let list_index = $(this).index();

        $big.eq(list_index).show();






    })
   


})