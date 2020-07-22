import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import {connect} from 'react-redux';
import {loadTodos} from '../store/thunks';
//

import './TodoList.css';

export function TodoList({todos = [], onLoadTodos, isLoading}) {
    useEffect(() => {
        onLoadTodos();
    }, []);
    const  content = isLoading?
    <div>Loading Todos....</div> :
    (
        <div className="todos-wrapper">
                {todos.map((todo) => <TodoListItem key={todo.id} todo = {todo}/>)}     
        </div>
    )
    ;
    
    return content;
}

const mapStateToProps = state => {
    return {
        todos : state.todos.todos,
        isLoading: state.todos.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLoadTodos : () => dispatch(loadTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
