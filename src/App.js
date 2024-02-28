import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)

  const handleGamePlay = (index) => {
    const updatedBoard = [...squares]
    if (squares[index] === null) {
      if (counter % 2 === 0) {
        updatedBoard[index] = "X"
        setSquares(updatedBoard)

      } else if (!counter % 2 === 0) {
        updatedBoard[index] = "O"
        setSquares(updatedBoard)
      }
      let updatedCounter = counter
      updatedCounter++
      setCounter(updatedCounter)
    } else {
      alert("Already occupied!")
    }
    winningSquares(updatedBoard)
  }

  const winningSquares = (squares) => {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    lines.forEach((value, index) => {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setTimeout(() => {
         alert(`${squares[a]} has won`)
          restart()
        }, "500");
      }
      return null;
    })

  }

  const restart = () => {
    setCounter(0)
    setSquares(Array(9).fill(null))

  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((nullSquare, index) => {
          return <Square handleGamePlay={handleGamePlay} index={index} key={index} nullSquare={nullSquare} />
        })}
      </div>
      <button onClick={restart}>Restart</button>
    </>
  )
}

export default App