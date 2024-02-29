import React from 'react'

const ScoreBoard = ({ player1Tally, player2Tally }) => {
  return (
    <>
    <div className='score-board'>
        <p>player 1 wins: {player1Tally} player 2 wins: {player2Tally}</p>
    </div>
    </>
  )
}

export default ScoreBoard