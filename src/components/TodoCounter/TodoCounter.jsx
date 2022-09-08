import TodoCounterCss from './TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
    return(
        <p className='count-tasks'>Completed {completed} of {total}</p>
    );
}
export default TodoCounter;