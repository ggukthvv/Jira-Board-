import React, { useEffect, useLayoutEffect, useState } from 'react'
import './todo.css'
import { TaskItem } from '../TaskItems';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { DndContext, closestCorners } from '@dnd-kit/core';
// import { Task } from '../Task/Task'

const ToDo = (props) => {
    // console.log('props todo', props)


    const deleteTask = (removeTask) => {
        console.log('deleteTask', removeTask)

        const updatedTask = props.todos.filter(remove => remove.id !== removeTask);

        props.setTasks(updatedTask)


    }

    const selectedColors = (options) => {
        switch (options) {
            case 'todo': return 'blue';
            case 'in progress': return 'yellow';
            case 'done': return 'purple';
            case 'approved': return 'green';
        }
    }


    // const [tasksss,setTaskss] = useState()
    const getTaskPos = id => {
        // console.log('getTaskPos', id, props.todos)
        return props.todos.findIndex(task => {
            // console.log('taskkkkkkk', task.id, id)
            return task.id === id
        })
    }


    const handleDragEnd = event => {
        const { active, over } = event;
        // console.log('hhhh', active.id, over.id, getTaskPos(over.id))

        if (active.id === over.id) return;

        props.setTasks(tasks => {
            const originalPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id)

            return arrayMove(tasks, originalPos, newPos)
        })
    }
    const color = props.type === props.selected ? selectedColors(props.selected) : props.color;
    // const taskList = [...props.todos];
    return (
        <div >
            <div style={{ backgroundColor: color }} className='container_title'>
                <span className='title'>{props.title}</span>
            </div>
            <div key={props.id} style={{ borderColor: props.ezragciGuyn }} className='container_Todo'>
                {!props.todos[0] ? 'empty' : ''}
                <DndContext key={props.id} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <SortableContext items={props.todos}  >
                        <div className='column'>
                            {props?.todos.map((task, index) => {

                                return <TaskItem
                                    setPopUp={task.setPopUp}
                                    onDetailsClick={task.onDetailsClick}
                                    description={task.description}
                                    id={task.id}
                                    title={task.name}
                                    key={index}
                                    onClick={() => deleteTask(task.id)} />
                            })}
                        </div>
                    </SortableContext>
                </DndContext>

            </div>
        </div>
    )
}
export default ToDo
