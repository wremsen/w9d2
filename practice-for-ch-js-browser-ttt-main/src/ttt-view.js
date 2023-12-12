class View {
  constructor(game, el) {
    this.game = game
    this.el = el

    setupBoard();
  }
  
  setupBoard() {
    const board = document.createElement('ul');

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cell = document.createElement('li');
        li.dataset.row = row
        li.dataset.col = col

        board.appendChild(cell);
      }
    }
    this.el.appendChild(board);
  }
  
  handleClick(e) {
    // e.addEventListener("click", Game.prototype.playMove)
    this.game.playMove(e.target.dataset())

  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;

