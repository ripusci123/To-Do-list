import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'



function Add(props) {

    const navigate = useNavigate();
    const [task,updateTask] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        props.setTasks(old =>{
            return [task,...old]
        })
        navigate("/");
    }
    return (
        <>
            <h1>Add Task</h1>

            <div className='container'>
                <Link to='/' className='new-btn'>Back to Home</Link>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="task" className="label">Task info</label>
                        <input type="text" onChange={(e)=>{updateTask(e.target.value)}}className="input" id="task" required autoFocus autoComplete='on'/>
                        
                    </div>
                    <div className="group">
                        <button type="submit" className='new-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add