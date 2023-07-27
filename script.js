console.log("welcome to spotify");


let Index = 0;
let audioElement = new Audio('music.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = [
    {songname: "apna bna le", filePath: "music.mp3"},
    {songname: "RANJHNA", filePath: "music.mp3"},
    {songname: "SANAM RE", filePath: "music.mp3"},
    {songname: "BARISH", filePath: "music.mp3"},
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

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-pause')
        Element.classList.add('fa-play')
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        makeAllPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${Index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');    
    })

})

