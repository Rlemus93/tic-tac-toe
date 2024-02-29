import React from 'react'

const ScoreBoard = ({ player1Tally, player2Tally }) => {
  return (
    <>
    <div className='score-board'>
        <p>SCOREBOARD</p>
        <div className='tally-wrapper'>
            <div className='tally'>
                <p>Player 1 wins: <span style={{ color: "#51B5FE"}}>{player1Tally}</span></p>
            </div>
             <div className='tally'>
                <p>Player 2 wins: <span style={{ color: "#C1111F"}}>{player2Tally}</span></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ScoreBoard