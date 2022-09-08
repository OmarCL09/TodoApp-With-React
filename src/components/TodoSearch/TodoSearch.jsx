import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    return (
        <div className='search-a-todo'>
            <input 
                placeholder='Do exercise in the morning' 
                onChange={onSearchValueChange}
                value={searchValue}/>
        </div>
    );
}
export default TodoSearch;