import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Display extends React.Component {
  hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
  
  render() {
    return(
      <div className='Display'>
        <p>{this.hiragana[Math.floor(Math.random() * this.hiragana.length)]}</p>
      </div>)
  }
}

class Input extends React.Component {
  state = {
    answer: ''
  }

  answerHandler = (event) => {
    this.setState({answer: event.value})
  }

  render() {
    return(
      <div className='Input'>
        <input placeholder='enter your answer'></input>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Display />
      <Input />
    </div>
  );
}

export default App;
