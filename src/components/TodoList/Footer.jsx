import React from 'react';


function Footer(props) {
    const filterBtns = [
        {
            title: 'All',
            isActive: true,
            link: '',
        },
        {
            title: 'Active',
            isActive: false,
            link: 'active',
        },
        {
            title: 'Completed',
            isActive: false,
            link: 'completed',
        },
    ]

    return (
        <div className="footer">
            <span className="todo-count">
                <strong>1 item</strong>
                <span></span>
                <span></span>
                <span>left</span>
            </span>
            <ul className="filters">
                {filterBtns.map((btn, indx) => (
                    <FillerBtn key={indx} {...btn} />
                ))}
            </ul>
            <button className="clear-completed">Clear completed</button>
        </div>
    );
}

function FillerBtn(props) {
    const {title, onClick, link, isActive} = props;

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