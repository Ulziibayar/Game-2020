var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var scores = [0, 0]; // 2 тоглогчийн оноог массив хэлбэрээр зарлав.
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Event listener
document.querySelector(".btn-roll").addEventListener("click", shooShid);
document.querySelector(".btn-new").addEventListener("click", beginStart);
document.querySelector(".btn-hold").addEventListener("click", storeNumber);

function shooShid(){

    var diceNumber = Math.floor(Math.random()*6) + 1;
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    // 
    if (diceNumber !== 1){
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {
        document.getElementById("current-" + activePlayer).textContent = 0;
        roundScore = 0;
        swap();
    }
    }
function storeNumber(){
    scores[activePlayer] += roundScore;
    if (scores[activePlayer] <= 100) {
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    document.getElementById("current-" + activePlayer).textContent = 0;
    roundScore = 0;
    swap();
    }
    else{
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    }

   function swap(){
    if (activePlayer === 1 ) {
        document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
        activePlayer = 0;
        document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
        //document.querySelector(".dice").style.display = "none";
        }
    else {
        document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
        activePlayer = 1;
        document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");
        //document.querySelector(".dice").style.display = "none";
    }
   }

   function beginStart(){
    activePlayer = 1
    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
    scores = [0, 0]; // 2 тоглогчийн оноог массив хэлбэрээр зарлав.
    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

// document.querySelector('#score-0').textContent = diceNumber;
// Prepare the start
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
document.querySelector(".dice").style.display = "none";

document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
console.log("jkj");
   }
