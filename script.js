console.log("Welcome to Spotify.");

//initialize variables
let songIndex = 1;
let audioElement = new Audio('Assets/Songs/Zero_After_Zero.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let title = document.getElementsByClassName('songName')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName:"10 Pe 10", filepath: "Assets/Songs/10_Pe_10.mp3", coverPath : 'Assets/covers/1.jpg'},
    {songName:"Hola Amigo", filepath: "Assets/Songs/Hola_Amigo.mp3", coverPath : 'Assets/covers/2.jpg'},
    {songName:"I Guess", filepath: "Assets/Songs/I_Guess.mp3", coverPath : 'Assets/covers/3.jpg'},
    {songName:"Paisa on my mind", filepath: "Assets/Songs/Paisa_on_my_mind.mp3", coverPath : 'Assets/covers/4.jpg'},
    {songName:"Woh Raat", filepath: "Assets/Songs/Woh_Raat.mp3", coverPath : 'Assets/covers/5.jpg'},
    {songName:"Prarthna", filepath: "Assets/Songs/Prarthna.mp3", coverPath : 'Assets/covers/6.jpg'},
    {songName:"Joota Japani", filepath: "Assets/Songs/Joota_Japani.mp3", coverPath : 'Assets/covers/7.jpg'},
    {songName:"Machayenge 4", filepath: "Assets/Songs/Machayenge_4.mp3", coverPath : 'Assets/covers/8.jpg'},
    {songName:"No Cap", filepath: "Assets/Songs/No_Cap.mp3", coverPath : 'Assets/covers/1.jpg'},
    {songName:"Zero After Zero", filepath: "Assets/Songs/Zero_After_Zero.mp3", coverPath : 'Assets/covers/10.jpg'}
]

songItems.forEach((Element , i) =>{
    // console.log(Element , i);
    Element.querySelectorAll('.song_img')[0].src = songs[i].coverPath;
    Element.querySelectorAll('.songName')[0].innerHTML = songs[i].songName
})


//Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.setAttribute('src', 'Assets/pause-solid.svg')
    }else{
        audioElement.pause()
        masterPlay.setAttribute('src', 'Assets/play-solid.svg')
        gif.style.opacity = 0;
    }
} , false)

//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= parseInt((myProgressBar.value*audioElement.duration)/100)
})

const makeallPlays= ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element ) => {
    Element.addEventListener(('click'), (e)=>{
        let songPath = e.target.id
        let pathAccess = e.target;
        console.log(pathAccess.getAttribute('itemid'));
        songIndex=  parseInt(pathAccess.getAttribute('itemid'))
        // console.log(songIndex);
        makeallPlays()
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Assets/songs/${songPath}.mp3`
        audioElement.currentTime= 0;
        
        if (audioElement.paused || audioElement.currentTime <= 0) {
            masterPlay.setAttribute('src', 'Assets/pause-solid.svg')
            gif.style.opacity = 1
            audioElement.play()
        }else{
            audioElement.pause()
            masterPlay.setAttribute('src', 'Assets/play-solid.svg')
            gif.style.opacity = 0
        }

        let name = e.target.id
        name = name.replaceAll("_" , " ")
        console.log(name);
        masterSongName.innerText = name 
    })
});

document.querySelector('.next').addEventListener('click',()=>{
   if (songIndex >= 10) {
        songIndex = 1
    }else{
        songIndex += 1
    }
    audioElement.currentTime= 0;
    sngidx = document.getElementsByClassName(`${songIndex}`);
    audioElement.src = `Assets/Songs/${sngidx[0].id}.mp3`
    if (audioElement.paused || audioElement.currentTime <= 0) {
        masterPlay.setAttribute('src', 'Assets/pause-solid.svg')
        gif.style.opacity = 1
        audioElement.play()
    }else{
        audioElement.pause()
        masterPlay.setAttribute('src', 'Assets/play-solid.svg')
        gif.style.opacity = 0
    } 
})

document.querySelector('.previous').addEventListener('click',()=>{
    if (songIndex >= 10) {
         songIndex = 1
         console.log(songIndex);
     }else{
         songIndex -= 1
         console.log(songIndex);
     }
     audioElement.currentTime= 0;
     
     sngidx = document.getElementsByClassName(`${songIndex}`);
     console.log(sngidx[0].id);
     audioElement.src = `Assets/songs/${sngidx[0].id}.mp3`
     console.log(audioElement.src);
     if (audioElement.paused || audioElement.currentTime <= 0) {
         masterPlay.setAttribute('src', 'Assets/pause-solid.svg')
         gif.style.opacity = 1
         audioElement.play()
     }else{
         audioElement.pause()
         masterPlay.setAttribute('src', 'Assets/play-solid.svg')
         gif.style.opacity = 0
     } 
 })

