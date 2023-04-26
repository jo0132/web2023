const allMusic = [
    {
        name : "1.aaaa",
        artist : "aaa",
        img : "music_image01",
        audio : "1.wav"
    },{
        name : "2.aaaa",
        artist : "aaa",
        img : "music_image02",
        audio : "2.wav"
    },{
        name : "3.aaaa",
        artist : "aaa",
        img : "music_image03",
        audio : "3.wav"
    },{
        name : "4.aaaa",
        artist : "aaa",
        img : "music_image04",
        audio : "4.mp3"
    },{
        name : "5.aaaa",
        artist : "aaa",
        img : "music_image05",
        audio : "5.mp3"
    },{
        name : "6.aaaa",
        artist : "aaa",
        img : "music_image06",
        audio : "6.mp3"
    },{
        name : "7.aaaa",
        artist : "aaa",
        img : "music_image07",
        audio : "7.mp3"
    },{
        name : "8.aaaa",
        artist : "aaa",
        img : "music_image08",
        audio : "8.mp3"
    },{
        name : "9.aaaa",
        artist : "aaa",
        img : "music_image09",
        audio : "9.mp3"
    },{
        name : "10.aaaa",
        artist : "aaa",
        img : "music_image010",
        audio : "10.mp3"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .images img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector(".control .play");

let musicIndex = 6;     //현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}`;  //뮤직 파일
}

// 플레이 버튼 클릭
musicPlay.addEventListener("click",() =>{

})

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
})