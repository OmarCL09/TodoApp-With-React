import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <p className='count-tasks'>Completed {completedTodos} of {totalTodos}</p>
    );
}
export default TodoCounter;