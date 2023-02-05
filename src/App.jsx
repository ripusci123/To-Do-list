import {useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './component/Add'
import Home from './component/Home'
function App() {

    const [tasks,setTasks] = useState([])

  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/add' element={<Add setTasks={setTasks}/>}></Route>
            <Route path='/' exact element={<Home tasks={tasks}/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App