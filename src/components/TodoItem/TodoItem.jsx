import './TodoItem.css';
import CompletedIcon from '../../assets/like.png';
import DeleteIcon from '../../assets/close.png';

const TodoItem = ({text, completed, onComplete, onDelete}) => {
    return (
        <div className={`single-task-container ${completed && 'single-task-container--completed'}`}>
            <button className='complete-task-button' onClick={onComplete}>
                <img src={CompletedIcon}/>
            </button>
            <p>{text}</p>
            <button className='delete-task-button' onClick={onDelete}>
                <img src={DeleteIcon}/>
            </button>
        </div>
    );
}

export default TodoItem;