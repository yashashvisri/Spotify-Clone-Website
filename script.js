console.log("welcome to spotify");


let songIndex = 0;
let audioElement = new Audio('music.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = [
    {songname: "apna bna le", filePath: "template/music.mp3"},
]


masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
  

        audioElement.play();
    
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        
    }
})

audioElement.addEventListener('timeupdate', ()=>{
   
    //update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})