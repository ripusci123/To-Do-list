import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
    return (
        <>
            <h1>ToDo</h1>

            <div className='container'>
                <Link to='/add' className='new-btn'>New Task</Link>
                {props.tasks.map((item, key) => {
                    return (<div key={key} className='task'>{item}</div>)
                })}
            </div>
        </>
    )
}

export default Home