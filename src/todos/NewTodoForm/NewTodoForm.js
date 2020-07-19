import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import './NewTodoForm.css';

export function NewTodoForm({todos, onCreateNewTodo}) {
    const [todoText, setTodoText] = useState('');
    const [alreadyExist, setAlreadyExist] =  useState(false);
    useEffect(() => {
        console.log(todos);
    }, []);
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
        todos : state.todos.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewTodo : (text) => dispatch(actions.createNewTodo(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);
