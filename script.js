const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const restartBtn = document.querySelector('.restart-btn');
let turn = 'X'; // Starting player

function handleCellClick(event) {
  const cell = event.target;
  const cellValue = cell.textContent;

  if (cellValue === '') {
    cell.textContent = turn;
    checkWinner();
    switchTurn();
  } else {
    message.textContent = 'This cell is already filled!';
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cell1 = cells[condition[0]].textContent;
    const cell2 = cells[condition[1]].textContent;
    const cell3 = cells[condition[2]].textContent;

    if (cell1 === cell2 && cell2 === cell3 && cell1 !== '') {
      message.textContent = `${cell1
                               
