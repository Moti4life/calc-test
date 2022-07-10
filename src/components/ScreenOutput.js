import React from 'react'

const OutputRow = (props) => {
  return (
    <div>
      <input type="text" readOnly value={props.value}></input>
    </div>
  );
};

const ScreenOutput = (props) => {
  return (
    <div id="screenOutput">
      <OutputRow value={props.equation}/>
      <OutputRow value={props.answer} />
    </div>
  );
};

export default ScreenOutput;
