import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.css'
import ScoreBoard from './components/ScoreBoard'
import leftphoto from './images/leftphoto.webp'
import rightphoto from './images/rightphoto.png'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [showAlerts, setShowAlerts] = useState(true)
  const [player1Marker, setPlayer1Marker] = useState("❌")
  const [player2Marker, setPlayer2Marker] = useState("⭕️")
  const [player1Tally, setPlayer1Tally] = useState(0)
  const [player2Tally, setPlayer2Tally] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [whoseTurn, setWhoseTurn] = useState(`It's Player 1's turn`)

  // useEffect is checking for changes in squares and showAlerts (useStates)
  //conditional for cat's game
  // setTimeout for asyncronous
  useEffect(() => {
    const isItNull = squares.find(value => value === null)
    if (isItNull !== null && showAlerts === true) {
      setTimeout(() => {
        alert("Cat's game!")
         restart()
       }, "200");
    }
  }, [squares, showAlerts]);

  // fed the index of square clicked
  // shallow copy of the board
  // logic determining who made the move/what their marker was/switching turn to other player
  // checking for winner every move
const handleGamePlay = (index) => {
  const updatedBoard = [...squares]
  if (squares[index] === null) {
    const marker = currentPlayer === 1 ? player1Marker : player2Marker
    updatedBoard[index] = marker
    setSquares(updatedBoard)
    setWhoseTurn(currentPlayer === 1 ? `It's Player 2's turn` : `It's Player 1's turn`)
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
  } else {
    alert("Already occupied!")
  }
  winningSquares(updatedBoard)
}

  const markers = [
    "❌", "⭕️", "🌟", "💥", "🔥", "🎉", "👑", "🚀", "🎈", "💣", "🍕", "🍔", "🍟", "🍦", "🍰", "🍭", "🍉", "🍌",
    "🍓", "🍒", "🍇", "🥝", "🍑", "🍍", "🥥", "🍋", "🍊", "🍏", "🍎", "🥕", "🍆", "🥔", "🌽", "🌶", "🥒", "🥬", "🥦", "🍄", "🥜",
    "🌰", "🍞", "🥐", "🥖", "🥨", "🧀", "🥚", "🍳", "🥓", "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🌮", "🌯", "🥙", "🧆",
    "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤",
    "🍥", "🥮", "🍡", "🥟", "🥠", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼"
  ]

  // after every click, board is passed
  // lines is destructured to compare board squares
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
        setWhoseTurn("")
        setShowAlerts(false)
        setTimeout(() => {
          const winner = currentPlayer === 1 ? "Player 1" : "Player 2";
          const winnerMarker = currentPlayer === 1 ? player1Marker : player2Marker
          alert(`${winner}${winnerMarker} has won`)
          currentPlayer === 1 ? setPlayer1Tally(player1Tally + 1) : setPlayer2Tally(player2Tally + 1)
          restart()
        }, "200")
      }
      return null;
    })
  }

  const restart = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer(1)
    setWhoseTurn(`It's player 1's turn`)
    setPlayer1Marker("❌")
    setPlayer2Marker("⭕️")
  }

  return (
    <>
      <div className='center'>
        <img className='leftphoto' src={leftphoto} />
        <img className='rightphoto' src={rightphoto} />
        <h1 className='game-name'>Tic Tac Techies</h1>
        <div className='marker-options'>
          <div className='markerbox'>

          <p>Player 1, select your marker:</p>
          {markers.map((value, index) => {
            return <button className='playerbutton' key={index} onClick={() => setPlayer1Marker(value)}>{value}</button>
          })}
          </div>
          <div className='markerbox'>
          <p>Player 2, select your marker:</p>
          {markers.map((value, index) => {
            return <button className='playerbutton' key={index} onClick={() => setPlayer2Marker(value)}>{value}</button>
          })}
          </div>
        </div>
        
          <div className='whose-turn'>{whoseTurn}</div>
        <ScoreBoard player1Tally={player1Tally} player2Tally={player2Tally} />
          <div className='centerbutton'>
            <button className= 'restartbutton' onClick={restart}>Restart</button>
          </div>
        <div className='boardwrapper'>
          <div className='board'>
            {squares.map((nullSquare, index) => {
              return <Square handleGamePlay={handleGamePlay} index={index} key={index} nullSquare={nullSquare} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App