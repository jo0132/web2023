$(function(){
    //이미지 슬라이드 
    let currentIndex = 0;   //현재 이미지 설정
    $(".slide__wrap").append($(".slider").first().clone(true));  //첫 번째 이미지를 복사해서 마지막에 추가

    setInterval(() => {
        currentIndex++;     //현재 이미지를 1씩 증가
        $(".slide__wrap").animate({marginTop: -400 * currentIndex + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(() => {
                $(".slide__wrap").animate({marginTop: 0}, 0);    //애니메이션 정지
                currentIndex = 0;       //현재 이미지 초기화
            }, 700)
        }
    }, 3000);

    // 메뉴
    $("nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $("nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
});