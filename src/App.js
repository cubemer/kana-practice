import React from 'react';
import './App.css';

import Display from './components/Display/Display';
import Input from './components/Input/Input';
import Checkbox from './components/Checkbox/Checkbox';

const HIRAGANA = ['あいうえお', 'かきくけこ', 'がぎぐげご', 'さしすせそ', 'ざじずぜぞ', 'たちつてと', 'だぢづでど', 'なにぬねの', 'はひふへほ', 'ばびぶべぼ', 'ぱぴぷぺぽ', 'まみむめも', 'らりるれろ', 'やゆよ', 'わを', 'ん']
const KATAKANA = ['アイウエオ', 'カキクケコ', 'ガギグゲゴ', 'サシスセソ', 'ザジズゼゾ', 'タチツテト', 'ダヂヅデド', 'ナニヌネノ', 'ハヒフヘホ', 'バビブベボ', 'パピプペポ', 'マミムメモ', 'ラリルレロ', 'ヤユヨ', 'ワヲ', 'ン']
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
    kanaIndex: 0,
    answer: '',
    correct: false,
    hiragana: true,
    counter: 0,
    max: 0,
    checkboxes: OPTIONS.reduce((options, option) => ({
      ...options,
      [option]: true
    }), {}),
    kana: ''
  }

  componentDidMount() {
    // Set the kanaIndex and kana when the app loads
    this.setState({
      kana: HIRAGANA.reduce((accumulator, current) => (
        accumulator += current
      ))
    })
    this.setState({
      kanaIndex: Math.floor(Math.random() * this.state.kana.length)
    })
  }

  componentDidUpdate() {
    // Check to see if the answer is correct, if it is load a new kana
    if (this.state.answer.length === ROMAJI[this.state.kanaIndex].length && this.state.answer !== ROMAJI[this.state.kanaIndex]) {
      this.setState({
        counter: 0,
        answer: ''
      })
    }
    if (this.state.answer === ROMAJI[this.state.kanaIndex]) {
      this.setState((prevState) => ({
        kanaIndex: Math.floor(Math.random() * 46),
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
    // this has to be set in order to check the answer in the app
    this.setState({answer: event.target.value})
  }

  toggleHiraganaHandler = () => {
    // Holds the logic for switching between hiragana and katakana
    this.setState((prevState) => ({
      kana: Math.floor(Math.random() * 46),
      HIRAGANA: !prevState.HIRAGANA,
      counter: 0,
    }))
  }

  checkboxChangedHandler = event => {
    // Add or remove kana groups from the available
    const kana = event.target.name;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [kana]: !prevState.checkboxes[kana]
      }
    }))
  }

  createCheckbox = option => (
    // This function is used to make the checkboxes
    <Checkbox
      kana={option}
      isSelected={this.state.checkboxes[option]}
      checkboxChanged={this.checkboxChangedHandler}
      key={option}
    />
  )

  // Execute the checkbox function with the appropriate 
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
        { this.state.hiragana
          ? <Display randomKana={this.state.kana[this.state.kanaIndex]} counter={this.state.counter} highScore={this.state.max}/>
          : <Display randomKana={this.state.kana[this.state.kanaIndex]} counter={this.state.counter} highScore={this.state.max}/>
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
