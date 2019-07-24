import React from 'react'

const display = (props) => (
    <div className='Display'>
      <p className='Score'>Streak: {props.counter}</p>
      <p className='Score'>Highest Streak: {props.highScore}</p>
      <div className='Kana'>
        <p>{props.randomKana}</p>
      </div>
    </div>
)

export default display;