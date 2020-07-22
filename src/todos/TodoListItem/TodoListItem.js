import React from 'react';
import {connect} from 'react-redux';
import {removeTodoReq, completedTodoReq} from '../../store/thunks';
import {getTodos} from '../../store/selectors';
import styled from 'styled-components';


const TodoWrapper = styled.div`
    border: 1px solid grey;
    margin-bottom : 2px;
    padding: 1px;
    box-sizing: border-box;
    
`;

// extending the style
// use it only for incompleted items
// red background if they have been created more than 1 hour ago
const TodoWrapperWithWarning = styled(TodoWrapper)`
background-color:${props => new Date(props.createdAt) > (new Date(Date.now() - 60000 * 60))?'grey':'red'};
`;
export function TodoListItem({ todo, onRemoveTodo, onMarkAsCompleted, todos }) {
    const isCompleted =  todo => {
        const found = todos.find(t => todo.text === t.text);
        if(found){
            if(found.isCompleted === true) return true;
        }
        return false;
    }

    const Wrapper = todo.isCompleted? TodoWrapper : TodoWrapperWithWarning;
    return (
        <Wrapper createdAt ={todo.createdAt}>
            <h3 className="todo-text">{todo.text}</h3>
            <p>Created at: {new Date(todo.createdAt).toLocaleString()}</p>
            <div className = "btns-container">
                {!isCompleted(todo)? 
                <button className="completed-btn" onClick = {() => onMarkAsCompleted(todo.id)}>Completed?</button> 
                :<button className="incompleted-btn" >Incompleted?</button>
                }
                <button className="remove-btn" onClick = {() => onRemoveTodo(todo.id)}>Remove</button>
            </div>
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {
        todos : getTodos(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTodo : (id) => dispatch(removeTodoReq(id)),
        onMarkAsCompleted : (id) => dispatch(completedTodoReq(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
