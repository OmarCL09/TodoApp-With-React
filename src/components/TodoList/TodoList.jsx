import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({children}) => {
    return (
        <div className='your-tasks-container'>
            {children}
        </div>
    );
}
export default TodoList;