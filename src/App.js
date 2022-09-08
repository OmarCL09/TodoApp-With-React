import React from "react";
import Header  from "./components/header/Header";
import NewTodo from './components/newTodo/NewTodo';
import SearchTodo from "./components/searchTodo/SearchTodo";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";

const defaultTodos=[
  {text:'Hacer ejercicio para estar mamao', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar porque no me pajeo en septiembre', completed:false},
  {text:'A pi ru pa puii da poi dep', completed:false},
  {text:'pppprruummm turip, ip, ip', completed:false},
  {text:'Me quedo grande muchachos', completed:false},
  {text:'que bendicion las menores ve que bendicion', completed:false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <Header></Header>
      <section className="todo-main-container">
        <NewTodo />
        <SearchTodo>
          <TodoCounter total={totalTodos} completed={completedTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>
          <TodoList>
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

export default App;
  