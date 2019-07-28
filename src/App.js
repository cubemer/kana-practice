import React from 'react';
import './App.css';

import Display from './components/Display/Display';
import Input from './components/Input/Input';
import Checkbox from './components/Checkbox/Checkbox';

const HIRAGANA = 'あいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもらりるれろやゆよわをん'
const KATAKANA = 'アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモラリルレロヤユヨワヲン'
const ROMAJI = [
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
const OPTIONS = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'ら', 'や', 'わ', 'ん'];

class App extends React.Component {
  state = {
    kana: Math.floor(Math.random() * 71),
    answer: '',
    correct: false,
    hiragana: true,
    counter: 0,
    max: 0,
    checkboxes: OPTIONS.reduce((options, option) => ({
      ...options,
      [option]: false
    }), {})
  }

  componentDidUpdate() {
    if (this.state.answer.length === ROMAJI[this.state.kana].length && this.state.answer !== ROMAJI[this.state.kana]) {
      this.setState({
        counter: 0,
        answer: ''
      })
    }
    if (this.state.answer === ROMAJI[this.state.kana]) {
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
      HIRAGANA: !prevState.HIRAGANA,
      counter: 0,
    }))
  }

  checkboxChangedHandler = event => {
    const kana = event.target.name;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [kana]: !prevState.checkboxes[kana]
      }
    }))
  }

  createCheckbox = option => (
    <Checkbox
      kana={option}
      isSelected={this.state.checkboxes[option]}
      checkboxChanged={this.checkboxChangedHandler}
      key={option}
    />
  )

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
        { this.state.hiragana
          ? <Display randomKana={HIRAGANA[this.state.kana]} counter={this.state.counter} highScore={this.state.max}/>
          : <Display randomKana={KATAKANA[this.state.kana]} counter={this.state.counter} highScore={this.state.max}/>
        }
        <Input changed={this.answerHandler} value={this.state.answer} />
        <div className='Button'>
          <button onClick={this.toggleHiraganaHandler} >{this.state.hiragana ? 'katakana' : 'hiragana'}</button>
        </div>
        <div className='Checkboxes'>
          {this.createCheckboxes()}
        </div>
      </div>
    );
  }
}

export default App;
