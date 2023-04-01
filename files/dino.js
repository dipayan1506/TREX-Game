const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var cross = true;
var score =0;
var interval= null;


//change background color

function setbackground(){

    window.setTimeout("setbackground()",8000);
    var i = 1;
    var colorvalue  ;
    var i = Math.floor(Math.random()*3);
    if(i == 0 ){
         colorvalue = "00FFFF";
    }
    if(i == 1 ){
        colorvalue = "#89CFF0";
   }
    if(i == 2){
        colorvalue = "#89CFF0";

    }
    if(i == 3){
        colorvalue = "00FFFF";

    }
        document.getElementById("game").style.backgroundColor = '#' + colorvalue;



    }
    





window.onload = function(){
   
    setbackground();
    
}

// background music

audiogo = new Audio('gameover.mp3');
audio = new Audio('dinoBGM.mp3')
setTimeout(() => {
    audio.play();
}, 2000);



// jump function
 
document.addEventListener("keydown",function(e){
    if(e.key == ' '){
     jump();
    }
 }) 
 
function jump(){
    if(dino.classList != "jump"){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump");
    },700);
}
}





// game logic


let isAlive = setInterval(function(){
    //get dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get cactus  X position 
    let cactusLeft= parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

   


    // detect collosion

    if(cactusLeft < 50 && cactusLeft>0 && dinoTop>= 205){
        //alert("Game Over");
        gameOver.style.visibility = 'visible';
        Restartbutton.style.visibility = 'visible';
        cactus.classList.remove('cactusAnimate');
        bird.classList.remove('birdAnimation');
        road.classList.remove('roadAnimate');
         document.getElementById("cld1").classList.remove('cloudAnimate');
         document.getElementById("cld2").classList.remove('cloudanimate');

        clearInterval();
        score = 0;

        audiogo.play();
        audio.pause();

        setTimeout(() => {
            audiogo.pause();
        }, 2000);

    }

else if(cross) {
     score+=1;
    interval = setInterval(updateScore(score),200);
    if(score > highscoreval){
        highscoreval = score;
        localStorage.setItem("highscore",JSON.stringify(highscoreval));
        let highscore = localStorage.getItem("highscore");
        highscoreBox.innerHTML = "Highest Score: " + highscore;
    }
    cross = false;
    setTimeout(() => {
                cross = true;
             }, 1000);

    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(cactus,null).getPropertyValue("animation-duration"))
        newDur = aniDur - 0.01;
        cactus.style.animationDuration = newDur + 's';
    }, 500);
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(bird,null).getPropertyValue("animation-duration"))
        newDur = aniDur - 0.008;
        bird.style.animationDuration = newDur + 's';
    }, 500);
  
    

}

},10);








// high score

let highscore = localStorage.getItem("highscore");
if(highscore === null){
    highscoreval = 0;
    localStorage.setItem("highscore",JSON.stringify(highscoreval))
}
else{
    highscoreval = JSON.parse(highscore);
    var highscorelabel = document.getElementById("highscore");

    highscorelabel.innerHTML = "Highest Score: " + highscore;
}



// score

function updateScore(score) {
    var scorelabel = document.getElementById("scoreCont");
    scorelabel.innerHTML =" Your Score: " + score;
}
