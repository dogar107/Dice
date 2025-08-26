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
//const totalboxes = 40;
const boxSize=11;
const boxindex=0;
const rollBtn = document.getElementById("rollbtn");
const boxes = document.querySelectorAll(".box");
const scoreEl=document.getElementById("score");
const traps = ["boxtrap1", "boxtrap2", "boxtrap3", "boxtrap4", "boxtrap5", "boxtrap6", "boxtrap7", "boxtrap8","boxtrap9", "boxtrap10","boxtrap11","boxtrap12"];
const circleDiv=document.getElementById("circle");
const resetbtn = document.getElementById("reset");

function resetGame() {
  position = -1;
  game.reset();
  gameStarted = false;
  scoreEl.textContent = "0";

  for (let i = 0; i < 6; i++) {
    const el = document.getElementById(`dice${i}`);
    if (el) {
      el.style.display = "none";
    }
  }
}
resetbtn.addEventListener("click", resetGame);



rollBtn.addEventListener("click",()=>{
const total=boxSize + boxindex;
for(let i =0; i<total&& i<boxes.length;i++){
const roll = Math.floor(Math.random() * 6) + 1;
  if (!gameStarted) {
    if (roll === 6 && position === -1) {
      gameStarted = true;
      position = 0;
      game.score = 0;
      scoreEl.textContent = "0";
      
    } else {
      for (let i = 0; i < 6; i++) {
        const el = document.getElementById(`dice${i}`);
        if (el) {
          el.style.display = i === roll - 1 ? "block" : "none";
          el.style.transition = "transform 0.1s ease";

          el.style.transform = "translateX(-5px)";
          setTimeout(() => {
            el.style.transform = "translateX(5px)";
          }, 100);
          setTimeout(() => {
            el.style.transform = "translateX(-5px)";
          }, 200);
          setTimeout(() => {
            el.style.transform = "translateX(5px)";
          }, 300);
          setTimeout(() => {
            el.style.transform = "translateX(0)";
          }, 400);
        }
      }
    }
  } else {
    position += roll;
    game.score += roll;
    scoreEl.textContent = game.score;
  }
   const totalboxes = boxes.length;
  if (position >= totalboxes) {
    position = totalboxes - 1;
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
   if (boxes[position] && traps.includes(boxes[position].id)) {
    showToast("Oh no! You hit a trap!💀");
    customAlert.style.display = "none";
    setTimeout(() => {
      resetGame();
      game.reset();
      scoreEl.textContent = "0";
      customAlert.style.display = "block";
      Level.textContent="1"
      dice0.style.visibility="visible"
    }, 2000);

    okBtn.onclick = () => {
      customAlert.style.display = "none";
      resetGame();
    };

    cancelBtn.onclick = () => {
      customAlert.style.display = "none";
    };
  }

  if(position===11 || position>11){
  Level.textContent="2"
  Level.style.visibility="visible"
  au.style.visibility="visible"
  bu.style.visibility="visible"
  

  }
  if(position===21 || position>21){
  Level.textContent="3"
  Level.style.visibility="visible"
  cu.style.visibility="visible"
  du.style.visibility="visible"
  }
  if(position===30 || position>30){
  Level.textContent="4"
  Level.style.visibility="visible"
  eu.style.visibility="visible"
  }
  if(position === 41){
  Level.textContent="5"
  Level.style.visibility="visible"

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

 
  

 

    

     
}
})
