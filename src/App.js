import React from 'react';
import './App.css';

import Display from './components/Display/Display';
import Input from './components/Input/Input';

const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろやゆよわをん'
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモラリルレロヤユヨワヲン'
const romaji = ['a',  'i',   'u',   'e',  'o',
          'ka', 'ki',  'ku',  'ke', 'ko',
          'sa', 'shi', 'su',  'se', 'so',
          'ta', 'chi', 'tsu', 'te', 'to',
          'na', 'ni',  'nu',  'ne', 'no',
          'ha', 'hi',  'hu',  'he', 'ho',
          'ma', 'mi',  'mu',  'me', 'mo',
          'ra', 'ri',  'ru',  're', 'ro',
          'ya', 'yu',  'yo',  'wa', 'wo',
          'n' ]

class App extends React.Component {
  state = {
    kana: Math.floor(Math.random() * 46),
    answer: '',
    correct: false,
    hiragana: true,
    counter: 0,
    max: 0
  }

  // _handleKeyPress = (e) => {
  //   console.log(e.key);
  //   if (e.key === ' ') {
  //     if (this.state.answer.length === romaji[this.state.kana].length && this.state.answer !== romaji[this.state.kana]) {
  //       this.setState({
  //         counter: 0,
  //         answer: ''
  //       })
  //     }
  //     if (this.state.answer === romaji[this.state.kana]) {
  //       this.setState((prevState) => ({
  //         kana: Math.floor(Math.random() * 46),
  //         answer: '',
  //         counter: prevState.counter + 1
  //       }))
  //     }
  //   }
  // }

  componentDidUpdate() {
    if (this.state.answer.length === romaji[this.state.kana].length && this.state.answer !== romaji[this.state.kana]) {
      this.setState({
        counter: 0,
        answer: ''
      })
    }
    if (this.state.answer === romaji[this.state.kana]) {
      this.setState((prevState) => ({
        kana: Math.floor(Math.random() * 46),
        answer: '',
        counter: prevState.counter + 1
      }))
      if (this.state.counter >= this.state.max) {
        this.setState((prevState) => ({
          max: prevState.counter
        }))
      }
    }
  }

  answerHandler = (event) => {
    this.setState({answer: event.target.value})
  }

  toggleHiraganaHandler = () => {
    this.setState((prevState) => ({
      kana: Math.floor(Math.random() * 46),
      hiragana: !prevState.hiragana,
      counter: 0,
    }))
  }

  render() {
    return (
      <div>
        { this.state.hiragana
          ? <Display randomKana={hiragana[this.state.kana]} counter={this.state.counter} highScore={this.state.max}/>
          : <Display randomKana={katakana[this.state.kana]} counter={this.state.counter} highScore={this.state.max}/>
        }
        <Input changed={this.answerHandler} value={this.state.answer} />
        <div className='Button'>
          <button className="pure-button" onClick={this.toggleHiraganaHandler} >{this.state.hiragana ? 'katakana' : 'hiragana'}</button>
        </div>
      </div>
    );
  }
}

export default App;
