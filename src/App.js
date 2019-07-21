import React from 'react';
import './App.css';

import Display from './components/Display/Display';
import Input from './components/Input/Input';

class App extends React.Component {
  state = {
    kana: Math.floor(Math.random() * 46),
    answer: '',
    correct: false
  }

  hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろやゆよわをん'
  katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモラリルレロヤユヨワヲン'
  romaji = ['a',  'i',   'u',   'e',  'o',
            'ka', 'ki',  'ku',  'ke', 'ko',
            'sa', 'shi', 'su',  'se', 'so',
            'ta', 'chi', 'tsu', 'te', 'to',
            'na', 'ni',  'nu',  'ne', 'no',
            'ha', 'hi',  'hu',  'he', 'ho',
            'ma', 'mi',  'mu',  'me', 'mo',
            'ra', 'ri',  'ru',  're', 'ro',
            'ya', 'yu',  'yo',  'wa', 'wo',
            'n' ]

  answerHandler = (event) => {
    this.setState({answer: event.target.value})
  }

  render() {
    if (this.state.answer === this.romaji[this.state.kana]) {
      console.log('you did it');
      this.setState({
        kana: Math.floor(Math.random() * 46),
        answer: '',
      })
    }

    return (
      <div>
        <Display correct={this.state.correct} randomKana={this.hiragana[this.state.kana]}/>
        <Input changed={this.answerHandler} value={this.state.answer}/>
      </div>
    );
  }
}

export default App;
