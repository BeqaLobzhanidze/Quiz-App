import React from 'react'

function Button({shufflingArray , shuffledArray}) {
  if(!shuffledArray) {
    return "loading..."
  }
  return (
    <>
    {shuffledArray.map((item , index) => <button key={index} onClick = {() => shufflingArray(item)} dangerouslySetInnerHTML={{__html:item}} />)}
    </>
      
    
  )
}

export default Button
