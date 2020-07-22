import React from 'react';
import {connect} from 'react-redux';
import {removeTodoReq, completedTodoReq} from '../../store/thunks';
import {getTodos} from '../../store/selectors';
import './TodoListItem.css';

export function TodoListItem({ todo, onRemoveTodo, onMarkAsCompleted, todos }) {
    const isCompleted =  todo => {
        const found = todos.find(t => todo.text === t.text);
        if(found){
            if(found.isCompleted === true) return true;
        }
        return false;
    }
    return (
        <div className="todo-wrapper">
            <h3 className="todo-text">{todo.text}</h3>
            <div className = "btns-container">
                {!isCompleted(todo)? 
                <button className="completed-btn" onClick = {() => onMarkAsCompleted(todo.id)}>Completed?</button> 
                :<button className="incompleted-btn" >Incompleted?</button>
                }
                <button className="remove-btn" onClick = {() => onRemoveTodo(todo.id)}>Remove</button>
            </div>
        </div>
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
