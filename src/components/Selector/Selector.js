import React from 'react';

// あ
// か
// さ
// た
// な
// は
// ま
// ら
// や・わ
// ん



const selector = (props) => {
  return (
    <form className='Selector'>
      <label><input type='checkbox'/>あ</label>
      <label><input type='checkbox'/>か</label>
      <label><input type='checkbox'/>さ</label>
      <label><input type='checkbox'/>た</label>
      <label><input type='checkbox'/>な</label>
      <label><input type='checkbox'/>は</label>
      <label><input type='checkbox'/>ま</label>
      <label><input type='checkbox'/>ら</label>
      <label><input type='checkbox'/>や・わ</label>
      <label><input type='checkbox'/>ん</label>
    </form>
  )

}

export default selector;