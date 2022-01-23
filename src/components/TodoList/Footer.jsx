import React from 'react';


function Footer(props) {
    const { status, handleStatusChange, clearCompleted, numOfTodos, numOfTodosLeft } = props;
    
    const filterBtns = [
        {
            title: 'All',
            isActive: status === 'All',
            link: '',
            
        },
        {
            title: 'Active',
            isActive: status === 'Active',
            link: 'active',
            
        },
        {
            title: 'Completed',
            isActive: status === 'Completed',
            link: 'completed',
            
        },
    ]

    return (
        <div className="footer">
            <span className="todo-count">
                <strong>{numOfTodos} </strong>
                <span></span>
                <span>items </span>
                <span>left</span>
            </span>
            <ul className="filters">
                {filterBtns.map((btn, indx) => (
                    <FillerBtn 
                    key={indx} 
                    {...btn} 
                    onClick={() => handleStatusChange(btn.title)}
                    />
                ))}
            </ul>
            {numOfTodos > numOfTodosLeft && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>}
        </div>
    );
}

function FillerBtn(props) {
    const { title, onClick, link, isActive } = props;

    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActive ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    )
}
export default Footer;