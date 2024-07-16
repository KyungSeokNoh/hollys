$(function(){
    // 메뉴
    $(".main > li , .sub_bg").hover(function(){
        $(".sub").stop().show(500);
        $(".sub_bg").stop().slideDown("fast");
    },function(){
        $(".sub").stop().hide();
        $(".sub, .sub_bg").stop().slideUp("fast");
    }) //hover

    //slick

    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true
    })

    //팝업
    $(".close").click(function(){
        $(".popup").hide();
    })


})