import React from 'react';

import './start-page.css';
import icon from './bull.png';

const StartPage = ({ onStartPage }) => {
  return (
    <div className="start-page">
      <h1>Bulls and Cows</h1>
      <img src={ icon } alt="icon"/>
      <div>
          <button
            className="btn btn-warning btn-lg btn-circle"
            onClick={ () => onStartPage() }>
            Start Game
          </button>
      </div>
    </div>
  );
};

export default StartPage;