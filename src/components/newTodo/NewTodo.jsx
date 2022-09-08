import NewTodocss from './NewTodo.css';
import imageTodo from '../../assets/list.png'

const NewTodo = () => {
    return (
        <div className='newTodo-container'>
            <div className='information-container'>
                <h1>Add a new Task!</h1>
                <div className='newTask-container'>
                    <label>Task name</label>
                    <input placeholder='Do exercise in the morning' />
                    <button className='button-add-task'>Submit</button>
                </div>
                <img src={ imageTodo } alt="image" className='newTodo-container-image'/>
            </div>
        </div>
    );
}
export default NewTodo;