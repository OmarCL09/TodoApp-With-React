import React from "react";
import './TodoEmpty.css';
import emptyImage from '../../assets/preview.png'

const TodoEmpty = () => {
    return(
        <>
            <img className="searchingTodosImg" src={emptyImage} alt="empty" />
        </>
    );
}

export default TodoEmpty;