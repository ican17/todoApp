import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import NewTodoFrom from './todos/NewTodoForm/NewTodoForm'
import './App.css';

function App() {
    return (
        <div className="App">
            <NewTodoFrom />
            <TodoList />
        </div>
    )
}

export default hot(module)(App);
