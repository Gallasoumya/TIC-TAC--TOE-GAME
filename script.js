const gameBoard = document.getElementById('game-board');
const cells = document.querySelectorAll('td');
let currentPlayer = 'X';
let gameWon = false;

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    if (!gameWon && !event.target.textContent) {
      event.target.textContent = currentPlayer;
      checkForWin();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombinations.forEach((combination) => {
    if (getCellValue(combination[0]) === getCellValue(combination[1]) && getCellValue(combination[1]) === getCellValue(combination[2]) && getCellValue(combination[0]) !== '') {
      gameWon = true;
      alert(`Player ${currentPlayer} wins!`);
    }
  });
}

function getCellValue(index) {
  return cells[index].textContent;
}