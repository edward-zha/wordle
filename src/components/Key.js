import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useContext } from 'react'
import { AppContext } from '../App'
import Board from './Board'

// for each key within the keyboard
function Key({keyVal, bigKey, disabled}) {

    const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

    // when selecting a letter on the keyboard
    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    }
    return (
        <div className='key' id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key