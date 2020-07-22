import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getTodos} from '../../store/selectors';
import {createNewTodoReq} from '../../store/thunks';

import './NewTodoForm.css';

export function NewTodoForm({todos, onCreateNewTodo}) {
    const [todoText, setTodoText] = useState('');
    const [alreadyExist, setAlreadyExist] =  useState(false);

    const onTodoTextInputChangedHandler = (e) => {
        if(alreadyExist) setAlreadyExist(false);
        setTodoText(e.target.value);
    }
    const onAddNewTodoHandler = () => {
        const isDublicate = todos.some( todo => todo.text === todoText);
        if(!isDublicate && todoText){
            onCreateNewTodo(todoText);
            setTodoText('');
        }else {
            setAlreadyExist(true);
        }
        
    }
    return (
        <div className="new-todo-form-wrapper">
            {alreadyExist? <h3>Item Already existing</h3> : null}
            <input className="add-todo-input" type="text" 
            value={todoText} 
            onChange={onTodoTextInputChangedHandler}
            placeholder = "Add your new todo item here...."/>
            <button className="add-todo-btn" onClick = {onAddNewTodoHandler}>Add</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        todos : getTodos(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewTodo : (text) => dispatch(createNewTodoReq(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
