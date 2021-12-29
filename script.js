/*--selecting--elements--*/
var 
 musimg= document.getElementById("song-img");
 songnam = document.getElementById("txt-ani");
const main= document.querySelector(".main");
music = document.getElementById("main-audio");
 playpaused = document.getElementById("start");
 prevSong = document.querySelector("#last-s");
 nextSong = document.querySelector("#next-s");
 muslist = document.querySelector("list-btn");
 progrssbar =document.querySelector(".half-prog");
 progressarea = document.querySelector(".progress");
 discani = document.getElementById("s-l-btn");
 showlist = document.querySelector("#list-btn");
 songli = document.querySelector(".songs-op");
/*--onloading--of--webpage--*/


let muiscIndex = 0;

window.addEventListener("load" , ()=> {
    onload(muiscIndex);
})

function onload(indexnum){
    songnam.innerHTML =allSongs[indexnum].name;
    musimg.src = `${allSongs[indexnum].img}.jpg`;
    music.src= `${allSongs[indexnum].src}.mp3`;
    
}

/*--on-play-paused-next-prev--functions--*/



function playsong(){
    main.classList.add("paused");
    music.play();
    playpaused.innerHTML="pause";
    discani.style.animation = "rmix 1s infinite linear"

    
    
}
function pausesong (){
    main.classList.remove("paused");
    music.pause();
    playpaused.innerHTML="play_arrow";
    discani.style.animation = "none"
    
}
function nextMusic(){
    muiscIndex ++ ;
    muiscIndex > allSongs.length ? muiscIndex = 0 : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();
    

}
function prevMusic(){
    muiscIndex -- ;
    muiscIndex < 0 ? muiscIndex = allSongs.length : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();
    

}
/*--play-pause events--*/
playpaused.addEventListener("click" , ()=> {
    const songPaused = main.classList.contains("paused");
    songPaused ? pausesong() : playsong();

    
});
/*--next-songs-- events*/
nextSong.addEventListener("click" , ()=>{
    nextMusic();
});
/*--prev songs-- events*/
prevSong.addEventListener("click" , ()=>{
    prevMusic();
});
/*-getting-timeand-duration-increase-in-width-of
progress bar---*/
progressarea.addEventListener("click" , (e)=>{
    let progwidthVal =  progressarea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songduration = music.duration;
    music.currentTime = (clickedOffsetX / progwidthVal) *songduration;
    playsong();

})


music.addEventListener("timeupdate",(e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progwidth = (currentTime/duration)*100;
    progrssbar.style.width = `${progwidth}%`; 


    let muscurrentTime = document.querySelector(".current"),
    musDuration = document.querySelector(".duration");

    music.addEventListener("loadeddata",()=>{
        
         let audioDuration = music.duration;
         let totalMin = Math.floor(audioDuration / 60); 
         let totalSec  =  Math.floor(audioDuration % 60);
         if (totalSec < 10){
             totalSec = `0${totalSec}`;
         }

         musDuration.innerHTML =`${totalMin} : ${totalSec}`;
        });

         
         let currentMin = Math.floor(currentTime / 60); 
         let currentSec  =  Math.floor(currentTime % 60);
         if (currentSec < 10){
             currentSec = `0${currentSec}`;
         }

        muscurrentTime.innerHTML =`${currentMin} : ${currentSec}`;
        
});
/*--after-song-ends--*/
music.addEventListener("ended", ()=>{
    muiscIndex ++ ;
    muiscIndex > allSongs.length ? muiscIndex = 0 : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();


});

/*--Change Theame--*/
document.getElementById("thm1").onclick=function(){
    document.body.style.backgroundImage = "url(galaxy.jpg)"
    document.getElementById("th1-txt").innerHTML="Galaxy #"
    document.getElementById("th2-txt").innerHTML="Rain "
    document.getElementById("th3-txt").innerHTML="Snow Tree "
    progrssbar.style.background = "cyan";

}
document.getElementById("thm2").onclick=function(){
    document.body.style.backgroundImage = "url(rain.jpg)"
    document.getElementById("th2-txt").innerHTML="Rain #"
    document.getElementById("th3-txt").innerHTML=" Snow Tree "
    document.getElementById("th1-txt").innerHTML="Galaxy "
    progrssbar.style.background = "yellowgreen";

}
document.getElementById("thm3").onclick=function(){
    document.body.style.backgroundImage = "url(tree.jpg)"
    document.getElementById("th3-txt").innerHTML=" Snow Tree #"
    document.getElementById("th1-txt").innerHTML="Galaxy "
    document.getElementById("th2-txt").innerHTML="Rain "
    progrssbar.style.background = "tomato";


}





