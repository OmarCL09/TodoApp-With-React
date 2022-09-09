import NewTodocss from './NewTodo.css';
import imageTodo from '../../assets/list.png'
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

const NewTodo = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return (
        <div className='newTodo-container'>
            <form onSubmit={onSubmit} className='information-container'>
                <h1>Add a new Task!</h1>
                <div className='newTask-container'>
                    <label>Task name</label>
                    <input 
                    value={newTodoValue} 
                    placeholder='Do exercise in the morning' 
                    onChange={onChange}/>
                    <button type="submit" className='button-add-task'>Submit</button>
                </div>
                <img src={ imageTodo } alt="image" className='newTodo-container-image'/>
            </form>
        </div>
    );
}
export default NewTodo;