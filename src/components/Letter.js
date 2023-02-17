import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App';


// for each letter
function Letter({letterPos, attemptVal}) {
    const { board, correctWord, currAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];


    const correct = correctWord[letterPos] === letter.toLowerCase(); 

    // might need to change to lower case
    const almost = !correct && letter !== "" && correctWord.toLowerCase().includes(letter.toLowerCase());
    
    const letterState = 
        (currAttempt.attempt > attemptVal) && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {   
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        } 
    }, [currAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    )
}

export default Letter