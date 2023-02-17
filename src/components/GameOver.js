import { React, useContext } from 'react'
import { AppContext } from '../App'


function GameOver() {
    const {gameOver, setGameOver, correctWord, currAttempt} = useContext(AppContext);
  return (
    <div class="gameOver">
        <h3>
            {gameOver.guessedWord ? "You Correctly Guessed the word!" : "You failed ;("}
        </h3>
        <h1>The correct word was: {correctWord} </h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts.</h3>)}
    </div>
  )
}

export default GameOver