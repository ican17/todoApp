import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import * as actions from '../store/actions';
import {connect} from 'react-redux';


import './TodoList.css';

function TodoList({todos = []}) {
    return (
        <div className="todos-wrapper">
            {todos.map((todo,i) => <TodoListItem key={i} todo = {todo}/>)}            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos : state.todos.todos
    }
}

export default connect(mapStateToProps, null)(TodoList);
