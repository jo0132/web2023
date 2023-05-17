$(function(){
    //메뉴 : 하나씩 나오기
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(400);
        $("#header .container").addclass("on");

    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#header .container").addclass("on");
    });

    //슬라이드
let currentIndex = 0;
const $sliderWrap = $(".slider__wrap"); //이미지 부모 : 움직이는 영역
const $slider =$(".slider");
const $sliderWidth = $slider.width();
$sliderWrap.append($slider.first().clone(true));
setInterval(function(){
    currentIndex++;
    $sliderWrap.animate({marginLeft: -$sliderWidth * currentIndex},600);
    if(currentIndex === $slider.length){
        setTimeout(function(){
            $sliderWrap.animate({marginLeft:0},0)
            currentIndex = 0;
        },700);
    }
},3000)
}
    






)