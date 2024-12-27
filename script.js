const boxes = document.querySelectorAll(".box");
const btn = document.querySelector("#reset");
const win = document.querySelector("#result");

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const showWinner = (player) => {
  win.innerText = `Winner: ${player}`;
  boxes.forEach((box) => (box.disabled = true));
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      showWinner(boxes[a].innerText);
      return true;
    }
  }
  return false;
};

const checkDraw = () => {
  if (Array.from(boxes).every((box) => box.innerText)) {
    win.innerText = "It's a Draw!";
    return true;
  }
  return false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!box.innerText) {
      box.innerText = turnO ? "O" : "X";
      if (!checkWinner() && !checkDraw()) {
        turnO = !turnO;
      }
    }
  });
});

const resetBoard = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  win.innerText = "Winner: None";
  turnO = true;
};

btn.addEventListener("click", resetBoard);
