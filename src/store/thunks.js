import {loadTodosFailure, loadTodosInProgress, loadTodosSuccess, createNewTodo, removeTodo, completedTodo} from './actions';

export const loadTodos = () => async(dispatch) =>{
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const data = await response.json();
        dispatch(loadTodosSuccess(data));
    } catch (error) {
        dispatch(loadTodosFailure());
        console.log(error);
    }
    
} 

export const createNewTodoReq = (text) => async(dispatch, getState) =>{
    try {
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos', {
            headers : {
                'Content-Type' : 'application/json' 
            },
            method : 'post',
            body : body,

        });
        const todo = await response.json();
        dispatch(createNewTodo(todo));
    } catch (error) {
        console.log(error);
    }
    
} 

export const removeTodoReq = (id) => async(dispatch, getState) =>{
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method : 'delete',
        });
        const todo = await response.json();
        dispatch(removeTodo(todo));
    } catch (error) {
        console.log(error);
    }
    
} 

export const completedTodoReq = (id) => async(dispatch, getState) =>{
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method : 'post',
        });
        const todo = await response.json();
        dispatch(completedTodo(todo));
    } catch (error) {
        console.log(error);
    }
    
} 