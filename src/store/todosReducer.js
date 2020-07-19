import * as actionTypes from './actions';

const initialState = {
    todos : [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_TODO:{
            const todos = [...state.todos];
            const {text} = action.payload;
            todos.push({
                text, 
                isCompleted : false
            });
            return {
                ...state,
                todos : todos
            }
        }
        case actionTypes.REMOVE_TODO:{
            const {text} = action.payload;
            const todos = state.todos.filter( todo => todo.text !== text);
            return {
                ...state,
                todos : todos
            }
        }
        case actionTypes.COMPLETED_TODO:{
            const {text} = action.payload;
            const index = state.todos.findIndex( todo => todo.text === text);
            const todos = [...state.todos];
            todos[index].isCompleted = true;
            
            return {
                ...state,
                todos : todos
            }
        }
                
        default:
            return state;
    }
}

export default reducer;