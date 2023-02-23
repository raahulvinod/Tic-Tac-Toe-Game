function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player name for both players!');
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName !== 'LI') {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = +selectedField.dataset.col - 1;
    const selectedrow = +selectedField.dataset.row -1;
    
    if (gameData[selectedrow][selectedColumn] > 0) {
        alert('Please select an empty field!');
        return;
    }

    selectedField.textContent = players[activePlayer].Symbol;
    selectedField.classList.add('disabled');

    

    gameData[selectedrow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}