import React from 'react';
import './App.css';

import Display from './components/Display/Display';
import Input from './components/Input/Input';
import Selector from './components/Selector/Selector';

const hiragana = 'あいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもらりるれろやゆよわをん'
const katakana = 'アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモラリルレロヤユヨワヲン'
const romaji = [
          'a',  'i',   'u',   'e',  'o',
          'ka', 'ki',  'ku',  'ke', 'ko',
          'ga', 'gi',  'gu',  'ge', 'go',
          'sa', 'shi', 'su',  'se', 'so',
          'za', 'ji',  'zu',  'ze', 'zo',
          'ta', 'chi', 'tsu', 'te', 'to',
          'da', 'di',  'du',  'de', 'do',
          'na', 'ni',  'nu',  'ne', 'no',
          'ha', 'hi',  'hu',  'he', 'ho',
          'ba', 'bi',  'bu',  'be', 'bo',
          'pa', 'pi',  'pu',  'pe', 'po',
          'ma', 'mi',  'mu',  'me', 'mo',
          'ra', 'ri',  'ru',  're', 'ro',
          'ya', 'yu',  'yo',  'wa', 'wo',
          'n' ]

class App extends React.Component {
  state = {
    kana: Math.floor(Math.random() * 71),
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

//  Debugger console log for the kana strings and the romaji array
//   componentDidMount() {
//     for( let i=0; i<hiragana.length; i++) {
//       console.log(`hiragana: ${hiragana[i]}
// katakana: ${katakana[i]}
//   romaji: ${romaji[i]}`);
//     }
//   }

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
          <button onClick={this.toggleHiraganaHandler} >{this.state.hiragana ? 'katakana' : 'hiragana'}</button>
        </div>
        <Selector className='Selector'/>
      </div>
    );
  }
}

export default App;
