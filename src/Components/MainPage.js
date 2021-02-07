import styles from "./MainPage.module.css"
import {Link} from "react-router-dom"


const level = ["easy" , "medium" , "hard"]
function MainPage({data , setValue , setIndex , value , index}) {

  if(!data) {
    return "loading...."
  }
       
    return (
     
      <div className={styles.container}>
        
   <h1 >Quiz app</h1>
   <div className={styles.category}>
      <label for="category">Choose category</label>
      <select id="category" onChange={e => setIndex(e.target.value)}>
        <option selected disabled>Select</option>
        {data.map((item , idx) => <option key = {idx} value={item.id}>{item.name}</option> )}
      </select>
   </div>
   <div className={styles.level}>
      <label for="level">Choose category</label>
      <select id="level" onChange={e=>setValue(e.target.value)}>
        <option selected disabled>Select</option>
        {level.map((item , idx) => <option  key = {idx} value={item}>{item}</option> )}
      </select>
   </div>
   {value==="" || index===0 ? <button  className={styles.button}>Start Quiz</button> : <Link to="/test">
        <button  className={styles.button}>Start Quiz</button>
      </Link>}
      
      
  </div>

    );
  }

export default MainPage;