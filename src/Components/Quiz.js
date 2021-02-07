import React , {useEffect , useState} from 'react'
import styles from "./Quiz.module.css"
import axios from "axios"
import Button from './Button';
import {Link} from 'react-router-dom'
import App from '../App';



function Quiz({index , value , setValue , setIndex}) {
  
  const [test , setData] = useState([])
  const [count , setCounter] = useState(0)
  const [score , setScore] = useState(0)
  const [gameend , setGameEnd] = useState(true)

  useEffect(()=>{
    axios.get(`https://opentdb.com/api.php?amount=10&category=${index}&difficulty=${value}&fbclid=IwAR0qxjASbave_JeKnNhSC3ZTZM9dMyxkOX_B-cLEtn5oc5fZfIXhbCvbu2c&type=multiple`)
         .then(res => setData(res.data.results))
         .catch(err => console.log(err))
  } , [index])
   if(test.length === 0 ) {
     return "loading..."
   }
   let shuffledArray = [] ; 
   if(gameend) {
     shuffledArray = [test[count].correct_answer , test[count].incorrect_answers[0] , test[count].incorrect_answers[1] , test[count].incorrect_answers[2]].sort(() => Math.floor(Math.random() - 0.5)) ; 
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
       (
        <div dangerouslySetInnerHTML= {{__html: test[count].question}} className={styles.question} />
        
      <div className={styles.answers}>
        {console.log(shuffledArray)}
        <Button shufflingArray={shufflingArray} shuffledArray={shuffledArray} />
      </div>
      )
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
