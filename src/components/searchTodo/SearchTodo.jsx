import './SearchTodo.css';

const SearchTodo = ({ children }) => {
    return (
        <div className='searchTodo-container'>
            <h1 className='tasks-title'>Your tasks</h1>
            { children }
        </div>
    );
}
export default SearchTodo;