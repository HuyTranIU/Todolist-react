import React from 'react';
import { useState } from 'react'

Todo.propTypes = {

};

function Todo(props) {
    const { todo, markComplete, removeTodo, getTodoEditingId, todoEditingId, onEditTodo, index } = props;
    const [title, setTitle] = useState(todo.title)
    const isEditing = todoEditingId === todo.id;  
    const editTodo = () => {
        onEditTodo({
            ...todo,
            title,
        }, index)
    }

    return (
        <li className={`${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>

            {!isEditing ? <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.completed}
                    onChange={() => markComplete(todo.id)}
                />

                <label
                    onDoubleClick={() => getTodoEditingId(todo.id)}
                >
                    {todo.title}
                </label>

                <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
            </div> :
                <input
                    type="text"
                    className="edit"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={editTodo}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            editTodo()
                        }
                    }}
                />}

        </li>
    );
}

export default Todo;