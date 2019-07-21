import React from 'react';

const input = (props) => (
  <div className='Input'>
    <input
      type='text'
      onChange={props.changed}
      value={props.value}
      autoFocus />
    <p>{props.value}</p>
  </div>
)

export default input;