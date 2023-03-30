const imgMain = document.querySelector("#main > img");

imgMain.addEventListener("mouseover", () => {
    imgMain.src = "img/ara_02.jpg";
});

imgMain.addEventListener("mouseout", () => {
    imgMain.src = "img/ara_01.jpg";
});