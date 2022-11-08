console.log("Musixon_Avishkar");

let songIndex = 0;
let audioelement = new Audio('1.mp3');

let masterplay = document.getElementById('masterPlay');
let gif  = document.getElementById('gif');
// let musicBar = document.getElementsById('musicBar');
let songs = [
    {songname: "Phenomenon", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    {songname: "Phenomenon", filePath: "2.mp3", coverPath: "cover/1.jpg"},
    {songname: "Phenomenon", filePath: "3.mp3", coverPath: "cover/1.jpg"},

]

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
} )




