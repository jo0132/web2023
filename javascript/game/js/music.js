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
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgresscurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");

let musicIndex = 1;     //현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}`;  //뮤직 파일
}
// 재생 버튼
const playMusic = () =>{
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title","정지");
    musicPlay.setAttribute("class","stop");
    musicAudio.play();
}

// 일시정지 버튼
const pauseMusic = () =>{
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title","재생");
    musicPlay.setAttribute("class","play");
    musicAudio.pause();
}

// 이전곡 듣기
const prevMusic = () => {
    musicIndex == 0 ? musicIndex = allMusic.length : musicIndex--;

    loadMusic(musicIndex);
    playMusic();
}

// 다음곡 듣기
const nextMusic = () => {
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;

    loadMusic(musicIndex);
    playMusic();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate",e => {
    console.log(e);
    const currentTime = e.target.currentTime;   // 현재 재생되는 시간
    const duration = e.target.duration;         // 오디오의 총길이
    let progressWidth = (currentTime/duration)*100;                       // 전체 기이에서 현재 진행되는 시간을 백분이 단우리ㅗ 나누기
    
    musicProgressBar.style.width = `${progressWidth}%`;

    musicAudio.addEventListener("loadeddata",() => {
        let audioration = musicAudio.duration;
        let totalmin =  Math.floor(audioration / 60);
        let totalsec =  Math.floor(audioration % 60);
        if(totalsec < 10) totalsec = `0${totalsec}`;
        musicProgressDuration.innerHTML = `${totalmin}:${totalsec}`;
    });

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentsec = Math.floor(currentTime % 60);
    if(currentsec < 10) currentsec = `0${currentsec}`;
    musicProgresscurrent.innerText = `${currentMin}:${currentsec}`;
});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;  // 진행바의 전체길이
    let clickedOffsetX = e.offsetX;                 // 진행바를 기준으로 측정되는 X좌표값
    let songDuration = musicAudio.duration;         // 오디오 전체 길이

    // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    console.log(songDuration);
});

// 플레이 버튼 클릭
musicPlay.addEventListener("click",() =>{
    const isMusicPaused = musicWrap.classList.contains("paused"); //음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});



// 이전곡 버튼 클릭
musicPrevBtn.addEventListener("click",() =>{
    prevMusic();
})

// 다음곡 버튼 클릭
musicNextBtn.addEventListener("click",() =>{
    nextMusic();
})

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    // musicAudio.play();
})