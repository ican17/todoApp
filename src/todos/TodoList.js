import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import {getLoadingState,getCompletedTodos, getInCompletedTodos} from '../store/selectors';
import {connect} from 'react-redux';
import {loadTodos} from '../store/thunks';
import styled from 'styled-components'
//

const TodosWrapper = styled.div`
    
    padding: 2px;
`;


export function TodoList({completedTodos, incompletedTodos, onLoadTodos, isLoading}) {
    useEffect(() => {
        onLoadTodos();
    }, []);
    const  content = isLoading?
    <div>Loading Todos....</div> :
    (
        <TodosWrapper>

                <h3>Incompleted:</h3>
                    {incompletedTodos.map((todo) => <TodoListItem key={todo.id} todo = {todo}/>)}
                     
                <h3>Completed:</h3>
                    {completedTodos.map((todo) => <TodoListItem key={todo.id} todo = {todo}/>)}
                     
        </TodosWrapper>
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
