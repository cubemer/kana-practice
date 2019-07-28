import React from 'react';

const selector = (props) => {
  return (
    <div className='Checkbox'>
      <label><input type='checkbox' checked={props.isSelected} onChange={props.checkboxChanged} name={props.kana}/>{props.kana}</label>
    </div>
  )

}

export default selector;