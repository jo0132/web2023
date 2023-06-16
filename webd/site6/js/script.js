$(function(){
    //이미지 슬라이드 
    let currentIndex = 0;   //현재 이미지 설정
    $(".slide__wrap").append($(".slide").first().clone(true));  //첫 번째 이미지를 복사해서 마지막에 추가

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
    $("nav > ul").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $("nav > ul").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });


    $(".contents > ul > li > a").click(function(e){
        
        e.preventDefault();
        var target = $(this).attr("href");
        $(".contents > div").hide();
        $(target).show();
    });

});

function noticeLinkstart(){
    var noticeLinks = document.querySelectorAll(".notice > ul > li > a");
    var modal = document.querySelector(".modal");

    noticeLinks.forEach(function(e) {
        e.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    });
}
noticeLinkstart();