import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import {getLoadingState,getCompletedTodos, getInCompletedTodos} from '../store/selectors';
import {connect} from 'react-redux';
import {loadTodos} from '../store/thunks';
//

import './TodoList.css';

export function TodoList({completedTodos, incompletedTodos, onLoadTodos, isLoading}) {
    useEffect(() => {
        onLoadTodos();
    }, []);
    const  content = isLoading?
    <div>Loading Todos....</div> :
    (
        <div className="todos-wrapper">
                <h3>Incompleted:</h3>
                {incompletedTodos.map((todo) => <TodoListItem key={todo.id} todo = {todo}/>)}     
                <hr/>
                <h3>Completed:</h3>
                {completedTodos.map((todo) => <TodoListItem key={todo.id} todo = {todo}/>)}     
        </div>
    )
    ;
    
    return content;
}

const mapStateToProps = state => {
    return {
        completedTodos : getCompletedTodos(state),
        incompletedTodos : getInCompletedTodos(state),
        isLoading: getLoadingState(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLoadTodos : () => dispatch(loadTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
