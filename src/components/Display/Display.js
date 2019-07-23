import React from 'react'

const display = (props) => (
    <div className='Display'>
      <p>Highest Streak: {props.highScore}</p>
      <p>Streak: {props.counter}</p>
      <div className='Kana'>
        <p>{props.randomKana}</p>
      </div>
    </div>
)

export default display;