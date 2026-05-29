import React, { useState } from 'react'
import './taskinput.css'

const TaskInput = (props) => {

    return (
        <input {...props} className='taskinput' placeholder='Task Name' type='text' onChange={(e) => e.target.value} />
    )
}
export default TaskInput