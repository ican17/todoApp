
export const CREATE_NEW_TODO = "CREATE_NEW_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

//actions creators
export const createNewTodo =  todo => {
    return {
        type : CREATE_NEW_TODO,
        payload : {todo},
    }
}

export const removeTodo =  todo => {
    return {
        type : REMOVE_TODO,
        payload : {todo},
    }
}

export const completedTodo =  todo => {
    return {
        type : COMPLETED_TODO,
        payload : {todo},
    }
}

export const LOAD_TODOS_INPROGRESS = "LOAD_TODOS_INPROGRESS";
export const loadTodosInProgress = () => {
    return {
        type: LOAD_TODOS_INPROGRESS,
    }
}

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {todos},
    }
}
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => {
    return {
        type: LOAD_TODOS_FAILURE,
    }
}