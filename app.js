// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч - 0, хоёрдугаар тоглогч - 1
function beginStart(){}
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var scores = [0, 0]; // 2 тоглогчийн оноог массив хэлбэрээр зарлав.
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1 - 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = diceNumber;


// Prepare the start

document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
document.querySelector(".dice").style.display = "none";

// 
// document.getElementById('score-0').textContent = "0";
// document.getElementById('score-1').textContent = "0";
// document.getElementById('current-0').textContent = "0";
// document.getElementById('current-1').textContent = "0";
// document.querySelector(".dice").style.display = "none";
// roundScore = 0;
// }

// Event listener
document.querySelector(".btn-roll").addEventListener("click", shooShid);
document.querySelector(".btn-new").addEventListener("click", beginStart);
document.querySelector(".btn-hold").addEventListener("click", storeNumber);

var i = 0;
function shooShid(){

    var diceNumber = Math.floor(Math.random()*6) + 1;
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    
    // 
    if (diceNumber !== 1){
        roundScore += diceNumber;
        //document.getElementById("current-1").textContent = roundScore;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {
        document.getElementById("current-" + activePlayer).textContent = 0;
        document.getElementById("score-" + activePlayer).textContent = 0;
        roundScore = 0;
        // document.querySelector(".dice").style.display = "none";
        swap();
    }
        // alert("Шоо " + diceNumber + " талаараа буулаа.");

}
function storeNumber(){
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    swap();
    }

   function swap(){
    if (activePlayer === 1 ) {
       
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        activePlayer = 0;
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
        }
    else {
        
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
        activePlayer = 1;
        
    }
   }
