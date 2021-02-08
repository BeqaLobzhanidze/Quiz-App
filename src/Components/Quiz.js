import React , {useEffect , useState} from 'react'
import styles from "./Quiz.module.css"
import axios from "axios"
import Button from './Button';
import {Link} from 'react-router-dom'



function Quiz({index , value , setValue , setIndex}) {
  
  const [test , setData] = useState([])
  const [count , setCounter] = useState(0)
  const [score , setScore] = useState(0)
  const [gameend , setGameEnd] = useState(true)

  useEffect(()=>{
    axios.get(`https://opentdb.com/api.php?amount=10&category=${index}&difficulty=${value}&fbclid=IwAR0qxjASbave_JeKnNhSC3ZTZM9dMyxkOX_B-cLEtn5oc5fZfIXhbCvbu2c&type=multiple`)
         .then(res => setData(res.data.results))
         .catch(err => console.log(err))
  } , [index , value])
   if(test.length === 0 ) {
     return <section>
       <div className={styles.loader}>
      <span style={{"--i":"1"}}></span>
      <span style={{"--i":"2"}}></span>
      <span style={{"--i":"3"}}></span>
      <span style={{"--i":"4"}}></span>
      <span style={{"--i":"5"}}></span>
      <span style={{"--i":"6"}}></span>
      <span style={{"--i":"7"}}></span>
      <span style={{"--i":"8"}}></span>
      <span style={{"--i":"9"}}></span>
      <span style={{"--i":"10"}}></span>
      <span style={{"--i":"11"}}></span>
      <span style={{"--i":"12"}}></span>
      <span style={{"--i":"13"}}></span>
      <span style={{"--i":"14"}}></span>
      <span style={{"--i":"15"}}></span>
      <span style={{"--i":"16"}}></span>
      <span style={{"--i":"17"}}></span>
      <span style={{"--i":"18"}}></span>
      <span style={{"--i":"19"}}></span>
      <span style={{"--i":"20"}}></span>

    </div>
     </section>
   }
   let shuffledArray = []; 
   if(gameend) {
     shuffledArray = [test[count].correct_answer , test[count].incorrect_answers[0] , test[count].incorrect_answers[1] , test[count].incorrect_answers[2]].sort(() => Math.floor(Math.random() - 0.5)); 
   }
   
   const shufflingArray = item => {
     setCounter(count+1)
   

     if(item === test[count].correct_answer) {
       setScore(score+1)
     }
     if(count+1 >= test.length){
       setGameEnd(false)
     } 

   }
   const restart = () => {
     setGameEnd(true)
     setScore(0)
     setCounter(0)
   }
   const update = () => {
     setValue("")
     setIndex(0)
   }

  return (
    <div className={styles.container}>
      {gameend ? 
      <>
        <div dangerouslySetInnerHTML= {{__html: test[count].question}} className={styles.question} />
        <div className={styles.answers}>
          <Button shufflingArray={shufflingArray} shuffledArray={shuffledArray} />
        </div>
      </> : 
      <>
        <div className = {styles.score}>Your Score is {score}</div>
        <div className={styles.flex}>
          <button className={styles.reset} onClick = {restart}>Restart</button>
          <Link to="/">
            <button className={styles.new} onClick = {update}>New Quiz</button>
          </Link>
        </div>
      </>
      } 
    </div>
  )
}

export default Quiz
