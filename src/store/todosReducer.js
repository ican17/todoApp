import * as actionTypes from './actions';

const initialState = {
    todos : [],
    isLoading: false,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_TODO:{
            const todos = [...state.todos];
            const {todo} = action.payload;
            todos.push(todo);
            return {
                ...state,
                todos : todos
            }
        }
        case actionTypes.REMOVE_TODO:{
            const {todo : removedTodo} = action.payload;
            const todos = state.todos.filter( todo => todo.id !== removedTodo.id);
            return {
                ...state,
                todos : todos
            }
        }
        case actionTypes.COMPLETED_TODO:{
            const {todo : completedTodo} = action.payload;
            const index = state.todos.findIndex( todo => todo.id === completedTodo.id);
            const todos = [...state.todos];
            todos[index].isCompleted = true;
            
            return {
                ...state,
                todos : todos
            }
        }
        case actionTypes.LOAD_TODOS_INPROGRESS :{
            return{
                ...state,
                isLoading: true,
            }
        }
        case actionTypes.LOAD_TODOS_SUCCESS :{
            const {todos} = action.payload
            return{
                ...state,
                todos : todos,
                isLoading: false,
            }
        }
        case actionTypes.LOAD_TODOS_FAILURE :{
            return{
                ...state,
                isLoading: false,
            }
        }
                
        default:
            return state;
    }
}

export default reducer;