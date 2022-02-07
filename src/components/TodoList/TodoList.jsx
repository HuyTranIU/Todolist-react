import Todo from './Todo';
import React from 'react';

function TodoList(props) {

    const { todoList, handleIsCheckAll } = props;

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"  />
            <label htmlFor="toggle-all" onClick={handleIsCheckAll}></label>
            <ul className="todo-list">
                {todoList.map((todo, index) => <Todo key={todo.id} {...{ todo }} {...props} index={index} />)}
            </ul>
        </div>
    );
}

export default TodoList;