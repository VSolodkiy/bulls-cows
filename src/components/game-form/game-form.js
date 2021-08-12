import React, { Component } from 'react';

import './game-form.css';
import { win } from '../../random-number';

class GameForm extends Component {

  state = {
    digit: '',
    secretNumber: this.props.secretNumber(),
    help: false,
    endGame: false,
    compare: false,
  };
  // установка значения из поля
  onDigitChange = (e) => {
    this.setState({
                           // запрет на ввод букв
      digit: e.target.value.replace(/[^\d]/g,'')
    });
  };
  // GO
  onSubmit = (e) => {
    e.preventDefault();
    // вызов функции поиска и отображения победы
    if(win(this.state.secretNumber, this.state.digit)) {
      this.setState({
        compare: true
      })
    };
    // добавление элементов в массив digitData
    this.props.addDigitItem(this.state.digit, this.state.secretNumber);
    this.setState({
      digit: ''
    });
  };
  // вывод загаданного числа
  onHelp = () => {
    this.setState({
      help: true
    });
    console.log(this.state.secretNumber);
  };
  // конец игры
  onEndGame = () => {
    this.setState({
      endGame: true,
      help: false
    });
    // перезапуск страницы или игры
    // setTimeout(() => window.location.reload(), 3000);
    setTimeout(() => this.props.onStartPage(), 3000);
  };

  render () {
    const { secretNumber, help, endGame, compare } = this.state;
    const endMessage = <b>{'Game was finished! The page will reload in 3 seconds.'}</b>;

    const displayDigit = help ? <b>{ secretNumber }</b> : null;
    const displayEndGame = endGame ? endMessage : null;
    const compareResult = compare ? <b>{`You Won! Congratulations!`}</b> : null;

    return (
      <div>
        { displayDigit }
        { displayEndGame }
        <form className = "" 
              onSubmit = { this.onSubmit }>
        <button type = "button" 
              className = "btn btn-info"
              onClick = { this.onHelp }> 
              Help 
        </button>
        <button type = "button" 
              className = "btn btn-danger"
              onClick = { this.onEndGame }> 
              End Game 
        </button>
        <input type="text" maxLength="4" size="35" 
              className = "align-digit " 
              placeholder = 'type digit'
              onChange = { this.onDigitChange }
              value = { this.state.digit } />
        <button type = "button" 
                className = "btn btn-success" 
                onClick = { this.onSubmit }>
              GO
        </button>
        <div>{ compareResult }</div>
      </form>
      </div>
    );
  };
};

export default GameForm;