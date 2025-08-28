class Dice {
  score = 0;
  getScore() {
    return this.score;
  }
}

class Game extends Dice {
  constructor() {
    super();
  }
  reset() {
    this.score = 0;
  }
}

const game = new Game();
let position = -1;
let gameStarted = false;
let score = 0;
const totalboxes = 42;
let boxIndex=0;
let boxSize=10;


const rollBtn = document.getElementById("rollbtn");
const boxes = document.querySelectorAll(".box");
const scoreEl=document.getElementById("score");
const circleDiv=document.getElementById("circle");
const resetbtn = document.getElementById("reset");
const Level = document.getElementById("levelscore");
const customAlert1 = document.getElementById("customAlert1");
const customAlert = document.getElementById("customAlert");
const btn = document.getElementById("btn");
const totalscore=document.getElementById("totalscore");
const dice0=document.getElementById("dice0");
const board = document.getElementById("ii");
const quit = document.getElementById("quit");

customAlert1.style.display="block"

startBtn.onclick=()=>{
customAlert1.style.display="none";
btn.style.filter="none";
totalscore.style.filter="none";
dice0.style.filter="none";
board.style.filter="none";



}

quit.onclick=()=>{
 customAlert1.style.display="block";
 btn.style.filter="blur(5px)";
totalscore.style.filter="blur(5px)";
dice0.style.filter="blur(5px)";
board.style.filter="blur(5px)";
}


startBtn.onclick=()=>{
customAlert1.style.display="none";
btn.style.filter="none";
totalscore.style.filter="none";
dice0.style.filter="none";
board.style.filter="none";




}

function showBoxes(position) {
  container.innerHTML = '';

  let maxIndex;
  if (position <= 10) maxIndex = 11;
  else if (position <= 20) maxIndex = 31;
  else if (position <= 30) maxIndex = 41;
  else maxIndex = 41;

  
  for (let i = position; i < position + maxIndex && i < allBoxes.length; i++) {
    container.appendChild(allBoxes[i]);
  }
}




















function resetGame() {
  position = -1;
  game.reset();
  gameStarted = false;
  scoreEl.textContent = "0";
  

}
resetbtn.addEventListener("click", resetGame);

rollBtn.addEventListener("click",()=>{
const roll = Math.floor(Math.random() * 6) + 1;
  if (!gameStarted) {
    if (roll === 6 && position === -1) {
      gameStarted = true;
      position = 0;
      scoreEl.textContent = "0";
      Level.textContent="1";
      circleDiv.style.display="block";

      
    } else {
      for (let j = 0; j < 6; j++) {
        const el = document.getElementById(`dice${j}`);
        if (el) {
          el.style.display = j === roll - 1 ? "block" : "none";
        }
      }
    }
    } else {
    position += roll;
    game.score += roll;
    scoreEl.textContent = game.score;
  }
  if (position >= boxes.length) {
    position = boxes.length - 1 ;
    showToast("Game Over!☠️");
    customAlert.style.display = "none";
    scoreEl.textContent = "0";
    game.reset();
    resetGame();

setTimeout(() => {
      customAlert.style.display = "block";
    }, 2000);

    okBtn.onclick = () => {
      customAlert.style.display = "none";
      resetGame();
    };

    cancelBtn.onclick = () => {
      customAlert.style.display = "none";
    };
  }
  function showToast(message) {
    const x = document.getElementById("snackbar");
    x.textContent = message;
    x.classList.add("show");
    setTimeout(() => {
      x.classList.remove("show");
    }, 3000);
  }


    okBtn.onclick = () => {
      customAlert.style.display = "none";
      resetGame();
    };

    cancelBtn.onclick = () => {
      customAlert.style.display = "none";
    };
  

  if(position===10){
  Level.textContent="2"

  }else{
  scoreEl.textContent="0"
  Level.innerHTML=""
  }
  if(position===21 ){
  Level.textContent="3"
  
  }
  if(position===30){
  Level.textContent="4"

  }
  if(position === 41){
  Level.textContent="5"

  }

  if (boxes[position] && totalboxes > boxes[position]) {
    showToast("You Win!🎉");
    game.reset();
    gameStarted=false;
    setTimeout(() => {
      scoreEl.textContent = "0";
      document.getElementById("levelscore").disabled="true"
    }, 2000); 
  }

  for (let i = 0; i < 6; i++) {
    const el = document.getElementById(`dice${i}`);
    if (el) {
      el.style.display = i === roll - 1 ? "block" : "none";
    }
  }
  
 
  if (boxes[position]) {
    boxes[position].appendChild(circleDiv);
  }
  
})

