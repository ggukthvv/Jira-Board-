import './taskitem.css'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useState } from 'react';

const TaskItem = ({ id, title, description, onClick, onDetailsClick, setPopUp }) => {
    // console.log('info', id)

    const dndAttr = useSortable({ id });

    const style = {

        transform: CSS.Transform.toString(dndAttr.transform),
        transition: dndAttr.transition,
    }

    // const taskRemove = (idRemove) => {}
    // }

    return (
        <div
            ref={dndAttr.setNodeRef}
            {...dndAttr.attributes}
            // {...dndAttr.listeners}/
            //library i xndir unenq , erb vor petq lini karox enq bacel (drag and drop i hamar)
            style={style}
            className="task">
            <div className='taskitem_btns'>
                <div className='taskitem_btn'>
                    <button onClick={onClick} className='delbtn'> X </button>
                    {title}
                </div>

                <button className='view_btn'
                    onClick={() => {
                        onDetailsClick({ description, title });
                        setPopUp(val => !val);
                    }}
                >
                    <svg width="30px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_200)">
                            <circle cx="12" cy="13" r="2" stroke="#000000" stroke-linejoin="round" />
                            <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        </g>

                    </svg>

                </button>

            </div>

        </div>
    )
}

export default TaskItem