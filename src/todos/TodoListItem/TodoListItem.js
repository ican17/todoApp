import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
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
                <button className="completed-btn" onClick = {() => onMarkAsCompleted(todo.text)}>Completed?</button> 
                :null}
                <button className="remove-btn" onClick = {() => onRemoveTodo(todo.text)}>Remove</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos : state.todos.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTodo : (text) => dispatch(actions.removeTodo(text)),
        onMarkAsCompleted : (text) => dispatch(actions.completedTodo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
