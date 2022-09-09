import React from "react";
import {TodoContext} from "../TodoContext/TodoContext";
import Header  from "../header/Header";
import NewTodo from '../newTodo/NewTodo';
import SearchTodo from "../searchTodo/SearchTodo";
import TodoCounter from "../TodoCounter/TodoCounter";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import TodoEmpty from "../TodoEmpty/TodoEmpty";
import TodoLoading from "../TodosLoading/TodosLoading";

function AppUI(){
    const {
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);
    
    return (
    <>
        <Header></Header>
        <section className="todo-main-container">
            <NewTodo />
            <SearchTodo>
            <TodoCounter/>
            <TodoSearch ></TodoSearch>
            <TodoList>
                {loading && <TodoLoading></TodoLoading>}
                {(!loading && !searchedTodos.length) && <TodoEmpty></TodoEmpty>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList>
            </SearchTodo>
        </section>
    </>
    );
}

export default AppUI;