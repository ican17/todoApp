import {createSelector} from 'reselect';

export const getTodos = state => state.todosModule.todos;
export const getLoadingState = state => state.todosModule.isLoading;

// it's a pure function that incorporate the principle of memo for performance
// that's why we would use createSelector instead of our own defined functions
export const getInCompletedTodos =  createSelector(
    getTodos, // all todos
    (todos) => todos.filter(todo => !todo.isCompleted),// the function to run - always at the end
);

export const getCompletedTodos =  createSelector(
    getTodos, // all todos
    (todos) => todos.filter(todo => todo.isCompleted),// the function to run - always at the end
);