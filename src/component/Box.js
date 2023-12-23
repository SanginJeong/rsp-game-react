import React from 'react'

const Box = (props) => {
  let result = '';
  if(props.name === 'computer' && props.isWin !== "DRAW" && props.isWin !== ''){
    result = props.isWin === 'WIN' ? 'LOSE' : 'WIN';
  }
  else{
    result = props.isWin
  }
  return (
    <div className = {`box ${result}`}>
      <h3>{props.name}</h3>
      <img src={props.img} alt="" />
      <h3>{result}</h3>
    </div>
  )
}

export default Box