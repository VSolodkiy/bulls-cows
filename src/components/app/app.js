import React, { Component } from 'react';

import AppHeader from '../app-header';
import GameShell from '../game-shell';
import ResultTable from '../result-table';
import StartPage from '../start-page';
import { getRandomNumber, bullsCows } from '../../random-number';

import './app.css';

class App extends Component {

  maxId = 1;

  state = {
    digitData: [],
    startPage: true
  }

  addDigitItem = (digit, secretNumber) => {
    // вызов функции поиска быков и коров
    const objBullsCows = bullsCows(digit, secretNumber);
    console.log(`addDigitItem: ${digit}`);
    // добавление элементов в массив
    const newDigitItem = {
      id: this.maxId++,
      digit,
      bulls: objBullsCows.bulls,
      cows: objBullsCows.cows
    }
    // обновление существующего массива
    this.setState(({ digitData }) => {
      const newArr = [
        ...digitData,
        newDigitItem
      ];

      return {
        digitData: newArr
      }
    });
  };
  // стартовая страница игры
  onStartPage = () => {
    this.setState((state) => {
      return {
        startPage: !state.startPage
      }
    });
  };

  render() {
    const { startPage } = this.state;

    const go = startPage ? <StartPage onStartPage = { this.onStartPage } /> : null;

    const content = !startPage ? 
          <AppView secretNumber = { getRandomNumber } 
                   addDigitItem = { this.addDigitItem }
                   digitData = { this.state.digitData }
                   onStartPage = { this.onStartPage }/> : null;
    return (
      <div className = "app">
        { go }
        { content }
      </div>
      )
  };
};

export default App;

const AppView = ({addDigitItem, secretNumber, digitData, onStartPage}) => {
  return (
    <React.Fragment>
        <AppHeader />
        <GameShell addDigitItem = { addDigitItem } 
                   secretNumber = { secretNumber }
                   onStartPage = { onStartPage }/>
        <ResultTable digitData = { digitData }/>
    </React.Fragment>
  )
}