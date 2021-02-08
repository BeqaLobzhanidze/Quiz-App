import styles from "./MainPage.module.css"
import {Link} from "react-router-dom"


const level = ["easy" , "medium" , "hard"]
function MainPage({data , setValue , setIndex , value , index}) {

  if(!data) {
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
       
    return (
     
      <div className={styles.container}>
        
   <h1 >Quiz app</h1>
   <div className={styles.category}>
      <label >Choose category</label>
      <select defaultValue="Select" id="category" onChange={e => setIndex(e.target.value)}>
        <option  disabled >Select</option>
        {data.map((item , idx) => <option key = {idx} value={item.id}>{item.name}</option> )}
      </select>
   </div>
   <div className={styles.level}>
      <label >Choose difficulty</label>
      <select defaultValue="Select" id="level" onChange={e=>setValue(e.target.value)}>
        <option  disabled >Select</option>
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