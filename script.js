console.log("Musixon_Avishkar");


let songIndex = 0;
let bar = document.getElementById('musicBar');

let audioelement = new Audio('songs/1.mp3');

let masterplay = document.getElementById('masterPlay');

let gif = document.getElementById('gif');

let masterSong=document.getElementById('mastersong');

let songItems = Array.from(document.getElementsByClassName('SongsItem'));
let songs = [
  
    { songname: "Sage -Ritviz", filePath: "songs/1.mp3", coverPath: "cover/2.jpg" },
    { songname: "Phenomenon -NCS", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songname: "Aaj Na -Ritivz", filePath: "songs/3.mp3", coverPath: "cover/2.jpg" },
    { songname: "Dirty-Palm-Oblivion-Ft-Micah-Martin-ncs", filePath: "songs/4.mp3", coverPath: "cover/2.jpg" },
    { songname: "Elektronomia-Vitality-NCS-Release", filePath: "songs/5.mp3", coverPath: "cover/2.jpg" },
    { songname: "Jim-Yosef-Arrow-NCS-Release", filePath: "songs/6.mp3", coverPath: "cover/2.jpg" },
    { songname: "Tobu-Hope-NCS-Release", filePath: "songs/7.mp3", coverPath: "cover/2.jpg" },
    { songname: "Unison-Aperture-NCS-Release", filePath: "songs/8.mp3", coverPath: "cover/2.jpg" },
    { songname: "Tobu-Good-Times-NCS-Release", filePath: "songs/9.mp3", coverPath: "cover/32.jpg" },


]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;


})

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// listning to the events

audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //music bar updating 

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    // console.log(progress);

    bar.value = progress;
})

bar.addEventListener('change', () => {

    audioelement.currentTime = bar.value * audioelement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('PLAY')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('PLAY')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        
        audioelement.src = `songs/${songIndex}.mp3`;
        masterSong.innerHTML=songs[songIndex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else
    {   
        songIndex=songIndex+1;
     
        audioelement.src = `songs/${songIndex+1}.mp3`;
        masterSong.innerHTML=songs[songIndex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    }
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {   
        songIndex=songIndex-1;
        masterSong.innerHTML=songs[songIndex].songname;

        audioelement.src = `songs/${songIndex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    }
})

