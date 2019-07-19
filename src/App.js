import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Display extends React.Component {
  render() {
    return(
      <div className='Display'>
        <p>む</p>
      </div>)
  }
}

class Input extends React.Component {
  render() {
    return(
      <div className='Input'>
        <input placeholder='ロマジ'></input>
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
