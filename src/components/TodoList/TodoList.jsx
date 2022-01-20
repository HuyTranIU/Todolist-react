import Todo from './Todo';
import React from 'react';
TodoList.propTypes = {

};

function TodoList(props) {

    const { todoList } = props;

    return (
        <div className="main">
            <input className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {todoList.map((todo, index) => <Todo key={todo.id} {...{ todo }} {...props} index={index} />)}
            </ul>
        </div>
    );
}

export default TodoList;