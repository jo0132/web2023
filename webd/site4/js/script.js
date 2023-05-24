// $(function(){
//     //메뉴 : 하나씩 나오기
//     $(".nav > ul > li").mouseover(function(){
//         $(".nav > ul > li > ul").stop().fadeIn(400);
//         $("#header .container").addclass("on");

//     });
//     $(".nav > ul > li").mouseout(function(){
//         $(".nav > ul > li > ul").stop().fadeOut(100);
//         $("#header .container").addclass("on");
//     });

//     //슬라이드
// let currentIndex = 0;
// const $sliderWrap = $(".slide__wrap");
// const $slider =$(".slider");
// const $sliderWidth = $slider.width();
// $sliderWrap.append($slider.first().clone(true));
// setInterval(function(){
//     currentIndex++;
//     $sliderWrap.animate({marginLeft: -$sliderWidth * currentIndex},600);
//     if(currentIndex === $slider.length){
//         setTimeout(function(){
//             $sliderWrap.animate({marginLeft:0},0)
//             currentIndex = 0;
//         },700);
//     }
// },3000)
// })

$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%" }, 600);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});

// $(function(){
//     let currentIndex = 0;
//     $(".sliderWrap").append($(".slder").first().clone(true));

//     setInterval(function(){
//         currentIndex++;
// $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);

// if(currentIndex == 3){
// setTimeout(function(){
// $(".sliderWrap").animate({marginLeft: 0}, 0);
// currentIndex = 0;
// }, 700);
// }
// }, 3000)
// });

$(".nav > ul > li").mouseover(function(){
$(this).find(".submenu").stop().slideDown();

})
$(".nav > ul > li").mouseout(function(){
$(this).find(".submenu").stop().slideUp();

})

// 팝업

$(".popup__btn").click(function(){
    $(".popup-view").show();
});

$(".popup__close").click(function(){
    $(".popup-view").hide();
});