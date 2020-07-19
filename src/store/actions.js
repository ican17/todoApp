import { createStoreHook } from "react-redux";

export const CREATE_NEW_TODO = "CREATE_NEW_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

//actions creators
export const createNewTodo =  text => {
    return {
        type : CREATE_NEW_TODO,
        payload : {text},
    }
}

export const removeTodo =  text => {
    return {
        type : REMOVE_TODO,
        payload : {text},
    }
}

export const completedTodo =  text => {
    return {
        type : COMPLETED_TODO,
        payload : {text},
    }
}