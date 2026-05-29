import React from 'react'
import './description.css'

const Description = (props) => {
    return (
        <textarea {...props} placeholder='Description...' type='text' className='description_input' onChange={(e) => (e.target.value)} />
    )
}

export default Description