import React from 'react'
import './dropdown.css'

const DropDown = (info) => {
    return (

        <select
            {...info}
            onChange={info.onChange}
            style={info.backgroundColor}

            // onClick={info.onClick}
            className='dropdown'
            defaultValue={2}



        >
            <option value="todo" >
                To Do</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
            <option value="approved">Approved</option>

        </select >

    )
}
export default DropDown