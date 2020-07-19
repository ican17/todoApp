import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import './TodoListItem.css';

export function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <div className="todo-wrapper">
            <h3 className="todo-text">{todo.text}</h3>
            <div className = "btns-container">
                <button className="completed-btn">Completed</button>
                <button className="remove-btn" onClick = {() => onRemoveTodo(todo.text)}>Remove</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTodo : (text) => dispatch(actions.removeTodo(text))
    }
}
export default connect(null, mapDispatchToProps)(TodoListItem);
