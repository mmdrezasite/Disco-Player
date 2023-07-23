var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var MusiPlayer = document.getElementById("MusiPlayer");
var PlayPause = document.getElementById("PlayPause");
var likeBTN = document.getElementById("likeBTN");
var coverSong = document.querySelector(".cover-song");
let flagMusic = false;
var coverSongflag = false;
//<!-------- Start musicPlayer -------->//
function PlayMusic(musicID) {
    MusiPlayer.pause();
    PlayPause.src = "./img/Icons/play.svg";
    var musicPlay = dataMusics.findIndex(MyProduct => { return MyProduct.id == musicID });
    MusiPlayer.src = "./Diagram-Musics/" + dataMusics[musicPlay].musicSrc;
    flagMusic = false;
    coverSongflag = true;
    coverSong.style.background = "url(./img/playList/" + dataMusics[musicPlay].image + ")no-repeat 50% 50% ";
    coverSong.addEventListener("click", () => { showSinglePage(musicID) });
    coverSong.style.backgroundSize = "cover";
    songName.innerHTML = dataMusics[musicPlay].title;
    artistName.innerHTML = dataMusics[musicPlay].artist;
}
//<!-------- End musicPlayer -------->//
//<!-------- Start Play Button -------->//

function playButton() {
    if (coverSongflag == false) {
        alert('pleas Choose one song');
        console.log("pleas Choose one song!");
        coverSongflag = falsel
    }
    if (coverSongflag == true) {
        if (flagMusic == true) {
            flagMusic = false;
            MusiPlayer.pause();
            PlayPause.src = "./img/Icons/play.svg";
            playSong()
        } else
        if (flagMusic == false) {
                flagMusic = true;
                MusiPlayer.play();
                PlayPause.src = "./img/Icons/pause.svg";
                console.log("play");
                pauseSong()
        }
        coverSongflag =false;
    }
}