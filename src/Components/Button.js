import React from 'react'

function Button({shufflingArray , shuffledArray}) {
  if(!shuffledArray) {
    return "loading..."
  }
  return (
    <>
    <button onClick={() => shufflingArray(shuffledArray[0])}>{shuffledArray[0]}</button>
    <button onClick={() => shufflingArray(shuffledArray[1])}>{shuffledArray[1]}</button>
    <button onClick={() => shufflingArray(shuffledArray[2])}>{shuffledArray[2]}</button>
    <button onClick={() => shufflingArray(shuffledArray[3])}>{shuffledArray[3]}</button>
    </>
      
    
  )
}

export default Button
