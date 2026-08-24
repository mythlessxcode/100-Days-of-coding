import React from 'react'
import {useRef, useState} from 'react'
import './App.css'

function App() {
  const inputRef = useRef();

  function focusOnInput (){
    inputRef.current.focus();
  }
  return (
    <div>
      Sign UP
      <input ref={inputRef} type={"text"}></input> <br />
      <button onClick={focusOnInput}>Submit</button>
      
    </div>
  )
}

export default App
