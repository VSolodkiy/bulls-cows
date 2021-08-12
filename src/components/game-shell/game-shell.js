import React from 'react';

import './game-shell.css';

import GameForm from '../game-form/game-form';

const GameShell = ( {addDigitItem, secretNumber, onStartPage} ) => {
  return(
    <div className = "game-shell rounded">
      <div id = 'button'>
      <h6><b>Enter the digit number</b></h6>
        <p>but remember - a digit should only contain four <b>unique</b> digits. <b>Good luck!</b></p>
        <GameForm addDigitItem = { addDigitItem } 
                  secretNumber = { secretNumber }
                  onStartPage = { onStartPage }/>
        </div>
    </div>
  )
};
export default GameShell;