import {useState , useEffect} from "react"
import './App.css';
import MainPage from './Components/MainPage';
import Quiz from './Components/Quiz';
import axios from "axios"
import {BrowserRouter , Route} from "react-router-dom"

function App() {

  const [data , setData] = useState([])
  const [index , setIndex] = useState(0)
  const [value , setValue] = useState("")


  useEffect(()=> {
    axios.get("https://opentdb.com/api_category.php")
         .then(res => setData(res.data.trivia_categories))
         .catch(err => console.log(err))
  } , [])


  return (
    
    <div className="App">
         <BrowserRouter>
       
         <Route path="/" exact>
           <MainPage data={data} setValue={setValue} setIndex={setIndex} value={value} index={index}/>
         </Route>
         <Route path="/test" exact>
           <Quiz index={index} value={value} setValue={setValue} setIndex={setIndex}/>
         </Route>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
