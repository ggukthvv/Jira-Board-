/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import './App.css'
import { TaskButton } from './TaskButton'
import { TaskInput } from './TaskInput'
import { DropDown } from './DropDown';
import ToDo from './Todo/ToDo';
// import { DndContext, closestCorners } from '@dnd-kit/core';
// import { arrayMove } from '@dnd-kit/sortable';

import { v4 as uuidv4 } from "uuid";
import { Description } from './Description';
import { TaskItem } from './TaskItems';



function App() {
    interface data {
        id: number;
        title: string;
        color: string;
    }
    const data = [{
        type: 'todo',
        title: 'TO DO',
        color: '',
        borderColor: ''
    },
    {
        type: 'in progress',
        title: 'IN PROGRESS',
        color: 'rgb(225, 180, 0)',
        borderColor: 'rgb(225, 180, 0)'
    },
    {
        type: 'done',
        title: 'DONE',
        color: 'rgb(120, 0, 225)',
        borderColor: 'rgb(120, 0, 225)'
    },
    {
        type: 'approved',
        title: 'APPROVED',
        color: 'rgb(39, 120, 50)',
        borderColor: 'rgb(39, 120, 50)',

    }];



    // const del = data.slice(0, 2)
    const [taskName, setTaskName] = useState('');//update 
    const [tasks, setTasks] = useState([]);//datark array vor mejy lcnenq
    const [option, setOption] = useState('todo');
    const [showPopUp, setShowPopUp] = useState(false);
    const [description, setDescription] = useState('');
    const [insideTexts, setInsideTexts] = useState({});

    const [popUp, setPopUp] = useState(false);
    console.log(insideTexts)


    return (
        <>
            <div>


                {
                    showPopUp &&
                    <div className='position'>
                        <div className='popup'>
                            <div className='popup_text'>
                                {/* <textarea className='popup_textarea' placeholder='Task Title...' ></textarea> */}
                                <TaskInput onInput={val => setTaskName(val.target.value)} value={taskName} />
                            </div>
                            <button onClick={() => setShowPopUp(false)} className='close_btn' >X</button>

                            <div className='popup_description'>
                                <Description onInput={val => setDescription(val.target.value)} value={description} />
                            </div>
                            <div className='dropdown_popup'>
                                <DropDown
                                    onChange={(val) => {
                                        setOption(val.target.value);
                                    }}
                                    value={option}
                                //style={{ backgroundColor: options }}
                                />
                            </div>
                            <div className='popup_btns'>
                                <button className='cancel_btn' onClick={() => setShowPopUp(false)}>Cancel</button>
                                <button className='addtask_btn' onClick={() => {

                                    if (taskName === '') {
                                        return null
                                    } else {
                                        setTasks([...tasks, { id: uuidv4(), name: taskName, description: description, group: option }]);
                                        setTaskName('');
                                        setDescription('')
                                        setShowPopUp(false)
                                    }

                                }}>Add Task</button>
                            </div>
                        </div>
                    </div>
                }

                {
                    popUp &&
                    <div className='details_popup'>
                        <div className='details'>
                            <div className='details_text'>
                                <div className='edit'>
                                    <div >
                                        <p className='details_text_name'>TaskName: {insideTexts.title} </p>
                                    </div>
                                    <div >✎</div>
                                </div>
                                <div className='edit'>
                                    <div>
                                        <p className='details_text_name'>Description: {insideTexts.description}</p>
                                    </div>
                                    <div  >✎</div>
                                </div>
                            </div>
                            <div className='cancel_button'>
                                <button onClick={() => setPopUp(false)} className='cancel_btn'> Cancel</button>
                            </div>
                        </div>
                    </div>
                }
            </div >
            <div className='header_container'>

                <TaskButton onClick={() => setShowPopUp(true)} />



            </div>



            <div className='tasks'>
                {data.map((todoItem, index) => (
                    <ToDo
                        type={todoItem.type}
                        key={index}
                        title={todoItem.title}
                        // taskDescription={todoItem.taskDescription}
                        color={todoItem.color}
                        selected={option}
                        ezragciGuyn={todoItem.borderColor}
                        setTasks={setTasks}
                        setDescription={setDescription}
                        setPopUp={setPopUp}

                        todos={tasks.filter(task => task.group === todoItem.type).map((task, i) => {
                            return {
                                index: i,
                                ...task,
                                setPopUp,
                                onDetailsClick: (value) => {
                                    setInsideTexts(value);
                                },
                                onTaskRemoveItemClick:
                                    (removeTask) => {
                                        const updatedTask = tasks.map(remove => {
                                            if (remove.id !== removeTask) {
                                                setTasks(updatedTask);
                                            } else {

                                                return null
                                            }
                                        }
                                        )
                                    }

                            }
                        }



                        )}
                    />
                ))}

            </div>




        </>
    )
}

export default App