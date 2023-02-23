import React, { useState, useEffect } from 'react';
import './typing.css';

const Typing = ({text, speed, fontSize, color}) => {
  Typing.defaultProps = {
    fontSize: '1em', //기본값
    color: 'black'//기본값
  }
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : 100;//기본값
    const interval = setInterval(() => {
        setText((Text)=>{
          let updated = Text;
          if(typingText[Count] !== ' ')
          {
            updated = Text + typingText[Count];
          }
          else
          {
            updated = Text + '\n';
          }
          return updated;
        });
        setCount(Count + 1); 
    }, typingSpeed);
    Count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
})
  return (
    <div className = "typer" style={{fontSize:`${fontSize}`, color:`${color}`}} >{ Text }</div>
  )
};

export default Typing;