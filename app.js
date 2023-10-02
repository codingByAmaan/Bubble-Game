function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bubbdiv").innerHTML = clutter;
}

//CHATGPT CODE

var timer = 6;
var timeInt;

function setTime() {
  if (timeInt) {
    clearInterval(timeInt);
  }

  var num = 1 ;
  timer = 6 ;  

  timeInt = setInterval(function () {
    if (timer > 0) {
      timer-- ;
      document.querySelector("#forTimer").textContent = timer;
    } else if(num == 1){
      lost.play() ;
      document.querySelector("#bubbdiv").innerHTML = `<h1>Game Over</h1>`;
      document.body.appendChild(playAgain) ;
      num = 2
    }else{
      lost.pause() ;
    }
  }, 1000);
}

// MY CODE

/*  var timer = 20 ;
function setTime(){
    var timeInt = setInterval(function(){
        if(timer > 0 ){
         timer-- ;
         document.querySelector("#forTimer").textContent = timer ;
        } else {
          clearInterval(timeInt) ;
          document.querySelector("#bubbdiv").innerHTML = `<h1>Game Over</h1>` ;
          }
        }, 1000) ;
}  */

var hitRn;
function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#newHit").textContent = hitRn;
}

var score = 0;
function increaseScore() {
  score += 1;
  document.querySelector("#forScore").textContent = score;
}


var playAgain = document.createElement("button");
playAgain.innerHTML = "PLAY AGAIN";
playAgain.addEventListener("click", function(){
  window.location.reload() ;
})


var bubClick = new Audio('click.wav') ;
var lost = new Audio('game-over.mp3') ;

document.querySelector("#bubbdiv").addEventListener("click", function (detail) {
  var hitScore = Number(detail.target.textContent);
  if (hitRn == hitScore) {
    bubClick.play() ;
    increaseScore();
    makeBubble();
    getNewHit();
    setTime();
  } else if (hitRn !== hitScore) {
    lost.play() ;
    clearInterval(timeInt);
    document.body.appendChild(playAgain) ;
    document.querySelector("#bubbdiv").innerHTML = `<h1>Game Over</h1>`;
  } 
});
getNewHit();
setTime();
makeBubble();



