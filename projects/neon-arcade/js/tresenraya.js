// TRES EN RAYA - Juego clásico
let ticBoard = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;
let scoreX = 0;
let scoreO = 0;

function makeMove(index) {
  if (ticBoard[index] === "" && gameActive) {
    sounds.beep();
    ticBoard[index] = currentPlayer;
    const cell = document.querySelectorAll(".tic-cell")[index];
    cell.textContent = currentPlayer;
    // Aplicar colores diferentes según el jugador
    if (currentPlayer === "X") {
      cell.style.color = "#ff00ff"; // Magenta para X
      cell.style.textShadow = "0 0 10px #ff00ff, 0 0 20px #ff00ff";
    } else {
      cell.style.color = "#00ffff"; // Cyan para O
      cell.style.textShadow = "0 0 10px #00ffff, 0 0 20px #00ffff";
    }
    cell.style.transform = "scale(1.1)";

    setTimeout(() => {
      cell.style.transform = "scale(1)";
    }, 200);

    if (checkWinner()) {
      sounds.win();
      document.getElementById(
        "tic-status"
      ).textContent = `¡JUGADOR ${currentPlayer} DOMINA LA MATRIX!`;
      if (currentPlayer === "X") {
        scoreX++;
        document.getElementById("score-x").textContent = scoreX;
      } else {
        scoreO++;
        document.getElementById("score-o").textContent = scoreO;
      }
      gameActive = false;
      highlightWinner();
    } else if (ticBoard.every((cell) => cell !== "")) {
      sounds.error();
      document.getElementById("tic-status").textContent =
        "¡EMPATE CIBERNÉTICO!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById(
        "tic-status"
      ).textContent = `TURNO DEL JUGADOR ${currentPlayer}`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return (
      ticBoard[a] && ticBoard[a] === ticBoard[b] && ticBoard[a] === ticBoard[c]
    );
  });
}

function highlightWinner() {
  const cells = document.querySelectorAll(".tic-cell");
  cells.forEach((cell) => {
    if (cell.textContent === currentPlayer) {
      cell.classList.add("winner-animation");
    }
  });
}

function resetTicTacToe() {
  sounds.click();
  ticBoard = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;

  document.querySelectorAll(".tic-cell").forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "";
    cell.style.textShadow = "";
    cell.classList.remove("winner-animation");
    cell.style.transform = "scale(0.8)";
    setTimeout(() => {
      cell.style.transform = "scale(1)";
    }, Math.random() * 200);
  });

  document.getElementById("tic-status").textContent = "TURNO DEL JUGADOR X";
}
