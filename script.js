let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let count = 0;
let turnX = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(count);
    // !! insites make Game look good
    if (turnX) {
      box.innerHTML = "X";
      box.classList.add("X")
      turnX = false;
    } else {
      box.innerHTML = "O";
      box.classList.add("O")
      turnX = true;
    }
    // To get a sticker

    if (count == 8) {
      msg.innerHTML = "Draw";
      msgContainer.classList.remove("hide");
      resetBtn.innerText = "New Game";
    }

    count = count + 1;
    box.disabled = true;
    checkWinner();
  });
}); // <---- {double bracket} to Here

const resetGame = () => {
  turnX = true;
  count = 0;
  enableBtn();
  resetBtn.innerText = "Reset Game";
  msgContainer.classList.add("hide"); // <<---- to here
};

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    // msgContainer.classList.add("hide");  // <<---- from here
  }
};

const showWinner = (winner, end) => {
  msg.innerText = `${winner} Won`;
  msgContainer.classList.remove("hide");
  resetBtn.innerText = "New Game"; // also add ths line to set the button to new Game after a player wins
  disableBtn();
};

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log(pos1);
        showWinner(pos1, count);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
//});   // <---- {double bracket} form here