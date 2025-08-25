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
const totalboxes = 40;

const scoreEl = document.getElementById("score");
const boxes = document.querySelectorAll(".box");
const boxtrap1 = document.getElementById("boxtrap1");
const boxtrap2 = document.getElementById("boxtrap2");
const boxtrap3 = document.getElementById("boxtrap3");
const boxtrap4 = document.getElementById("boxtrap4");
const diceEl = document.querySelectorAll(".dice");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const rollbtn = document.getElementById("rollbtn");
const circle = document.createElement("div");
const resetbtn = document.getElementById("reset");
const circleDiv = document.getElementById("circle");
const customAlert = document.getElementById("customAlert");
const customAlert1 = document.getElementById("customAlert1");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");
const showscore = document.getElementById("showscore");
const Level = document.getElementById("levelscore");
const au = document.getElementById("au");
const bu= document.getElementById("bu");
const cu=document.getElementById("cu");
const du=document.getElementById("du");
const eu=document.getElementById("eu");
const you=document.getElementById("you");
const dexter=document.getElementById("dexter");
const quitbtn=document.getElementById("finishbtn");
const quit=document.getElementById("quit");
const startbtn=document.getElementById("startbtn");
const box7=document.getElementById("box7");
const traps = ["boxtrap1", "boxtrap2", "boxtrap3", "boxtrap4", "boxtrap5", "boxtrap6", "boxtrap7", "boxtrap8","boxtrap9", "boxtrap10","boxtrap11","boxtrap12"];
const diceSound = new Audio("audio/dice-roll.mp3");
const dice0=document.getElementById("dice0");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const boards = document.getElementById("boards");
const board=document.getElementById("ii");
const board2=document.getElementById("oo");
const level=document.getElementById("level");
const total= document.getElementById("total");
const heading= document.getElementById("heading");


  


function resetGame() {
  position = -1;
  game.reset();
  gameStarted = false;
  scoreEl.textContent = "0";
  circleDiv.style.visibility="hidden"
  au.style.visibility="hidden"
  bu.style.visibility="hidden"
  cu.style.visibility="hidden"
  du.style.visibility="hidden"
  eu.style.visibility="hidden"

  for (let i = 0; i < 6; i++) {
    const el = document.getElementById(`dice${i}`);
    if (el) {
      el.style.display = "none";
    }
  }
}
resetbtn.addEventListener("click", resetGame);

rollbtn.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  if (!gameStarted) {
    if (roll === 6 && position === -1) {
      gameStarted = true;
      position = 0;
      game.score = 0;
      scoreEl.textContent = "0";
      circleDiv.style.visibility="visible"
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

  if (boxes[position] && boxes[position].id === "end") {
    showToast("You Win!🎉");
    game.reset();
    gameStarted=false;
    setTimeout(() => {
      scoreEl.textContent = "0";
      Level.style.visibility="hidden"
    }, 2000);
    
  }
  setTimeout(() =>{
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
},2000)
  if (boxes[position]) {
    boxes[position].appendChild(circleDiv);
  }

 
  
});
 
customAlert1.style.display="block";



    startbtn.onclick = () => {
      customAlert1.style.display = "none";
      resetbtn.style.visibility="visible"
      rollbtn.style.visibility="visible"
    dice0.style.visibility="visible"
    p2.style.visibility="visible"
    p3.style.visibility="visible"
    boards.style.visibility="visible"
    board.style.visibility="visible"
    board2.style.visibility="visible"
    total.style.visibility="visible"
    scoreEl.style.visibility="visible"
    level.style.visibility="visible"
    Level.style.visibility="visible"
    quit.style.visibility="visible"
    heading.style.visibility="visible"
    
    
    };

    

     quit.onclick= () => {
       resetGame()
  scoreEl.textContent="0"
  customAlert1.style.display="block";
  resetbtn.style.visibility="hidden"      
  rollbtn.style.visibility="hidden"
    
    p2.style.visibility="hidden"
    p3.style.visibility="hidden"
    boards.style.visibility="hidden"
    board.style.visibility="hidden"
    board2.style.visibility="hidden"
    total.style.visibility="hidden"
    scoreEl.style.visibility="hidden"
    level.style.visibility="hidden"
    Level.style.visibility="hidden"
    quit.style.visibility="hidden"
    heading.style.visibility="hidden"
    

     }