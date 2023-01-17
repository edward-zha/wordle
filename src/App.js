import React from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {boardDefault} from './components/Words';
import { createContext, useState } from 'react';


export const AppContext = createContext();

function App() {
  // different states used for the project
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      
      <AppContext.Provider value={{board, setBoard}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
