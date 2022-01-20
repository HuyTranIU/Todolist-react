import React, { useState } from 'react';

function Header(props) {
    const { addTodo } = props
    const [title, setTitle] = useState('')

    const onAddtodo = e => {
        if (e.key === 'Enter' && title) {
            addTodo(
                {
                    id: new Date().valueOf(),
                    title,
                    completed: false,
                }
            )
            setTitle('')
        }
    }

    return (
        <div>
            <header className='header'>
                <h1>Todo</h1>
                <input className='new-todo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={e => onAddtodo(e)}
                />
            </header>
        </div>
    );
}

export default Header;