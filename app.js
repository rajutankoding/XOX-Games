const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const formInput = document.querySelector("#form-input");
const itemList = document.querySelector("#list-item");
const tabelList = document.querySelector("#table-item");
const lapangan = document.querySelector("#toe-field");
const clearToe = document.querySelector("#clear-toe");

formInput.addEventListener("submit", addFunction);
lapangan.addEventListener("click", swipeButton);
clearToe.addEventListener("click", clearField);

function addFunction(e) {
  e.preventDefault();
  const Tr = document.createElement("tr");
  const Th = document.createElement("th");
  Th.appendChild(document.createTextNode(input1.value));
  Tr.appendChild(Th);

  tabelList.appendChild(Tr);
}

let player = 0; // Atau sesuaikan nilai awal player

function swipeButton(e) {
  const x = "X";
  const o = "O";

  e.preventDefault();
  if (e.target.classList.contains("tac-toe")) {
    if (player === 0) {
      e.target.textContent = x;
      player = 1;
    } else {
      e.target.textContent = o;
      player = 0;
    }
    // console.log(checkWinner());
    checkWinner();
    console.log(e.target);
  }
}

function clearField(e) {
  e.preventDefault();
  const elements = document.querySelectorAll(".tac-toe");
  elements.forEach((element) => {
    element.textContent = "";
  });
}

function checkWinner() {
  const elements = document.querySelectorAll(".tac-toe");
  const values = [...elements].map((element) => element.textContent);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Baris
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Kolom
    [0, 4, 8],
    [2, 4, 6], // Diagonal
  ];

  let winner = null;
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo;
    const combination = values[a] + values[b] + values[c];

    switch (combination) {
      case "XXX":
        winner = alert("X Winner");
        break;
      case "OOO":
        winner = alert("O Winner");
        break;
      default:
        break;
    }
  });

  // return winner;
}

// function checkWinner() {
//   const elements = document.querySelectorAll(".tac-toe");

//   // Kombinasi pemenang pada papan permainan tic-tac-toe
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8], // baris
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8], // kolom
//     [0, 4, 8],
//     [2, 4, 6], // diagonal
//   ];

//   for (const combo of winningCombos) {
//     const [a, b, c] = combo;
//     if (
//       elements[a].textContent !== "" &&
//       elements[a].textContent === elements[b].textContent &&
//       elements[a].textContent === elements[c].textContent
//     ) {
//       return elements[a].textContent; // Mengembalikan nilai pemenang ('X' atau 'O')
//     }
//   }
//   return null; // Mengembalikan null jika tidak ada pemenang
// }
