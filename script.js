console.log("Musixon_Avishkar");

let songIndex = 0;
let audioelement = new Audio('1.mp3');
// audioelement.play();
let masterplay = document.getElementById('masterPlay');
let musicBar = document.getElementsById('musicBar');
let songs = [
    {songname: "Phenomenon", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    {songname: "Phenomenon", filePath: "songs/2.mp3", coverPath: "cover/1.jpg"},
    {songname: "Phenomenon", filePath: "songs/3.mp3", coverPath: "cover/1.jpg"},

]

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-solid fa-play');
        masterplay.classList.add('fa-solid fa-pause');
    }
} )