const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("");

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(board) {
    for (let [a, b, c] of winningLines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (squares[index] || gameOver) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);

    const winner = calculateWinner(nextSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setGameOver(true);
    } else if (!nextSquares.includes(null)) {
      setStatus("Draw");
      setGameOver(true);
    } else {
      setIsXNext(!isXNext);
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setStatus("");
  }

  return (
    <div className="game">
      <div className="board">
        {squares.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="status">{status}</div>

      <button id="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}
