import React from 'react'
import './taskbutton.css'

const TaskButton = (props) => {
    return (
        <div>
            <button {...props} className='addbtn'>
                <span>Add</span>
            </button>
        </div>
    )
}
export default TaskButton