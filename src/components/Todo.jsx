import React , {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import '../App.css';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState ({
        id: null,
        value: ''
    })

    //funcion para subir el editable de la tarea 

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null,
            value: ''
        })
    }

    //Si al editar la tarea es verdadera, regresa el todo de form , on submit event sera la funcion de editar la neuva tarea
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        //Funcion que revisa si la tarea fue completada o no, si es real, completa, si es false se coloca oscuro el color
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}
        >
        {/* //texto donde aparece la tarea */}
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'/>
                <TiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'/>
            </div>
            
        </div>
    ))
    
}

export default Todo