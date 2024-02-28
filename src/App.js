import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)

  const handleGamePlay = (index) => {
    const updatedBoard = [...squares]
    if (squares[index] === null) {
      if(counter % 2 === 0) {
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
  }
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        {squares.map((nullSquare, index) => {
          return <Square handleGamePlay={handleGamePlay} index={index} key={index} nullSquare={nullSquare} />
        })}
      </div>
    </>
  )
}

export default App