import React from 'react'

const ScoreBoard = ({ player1Tally, player2Tally }) => {
  return (
    <>
    <div className='score-board'>
        <p>SCOREBOARD</p>
        <div className='tally-wrapper'>
            <div className='tally'>
                <p>Player 1 wins: {player1Tally}</p>
            </div>
             <div className='tally'>
                <p>Player 2 wins: {player2Tally}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ScoreBoard