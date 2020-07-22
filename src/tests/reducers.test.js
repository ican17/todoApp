import { expect } from 'chai';
import todos from '../store/todosReducer';

describe('The todos reducer test', () => {
    it('Add new todo when CREATE_NEW_TODO is fired', () => {
        const fakeTodo = { text: 'text', isCompleted : false};
        const fakeAction = {
            type: 'CREATE_NEW_TODO',
            payload: {
                todo: fakeTodo,
            }
        };
        const originalState = {
            todos:[], 
            isLoading: false
        };

        const excpected = {
            todos:[fakeTodo],
            isLoading: false,
        };

        const actual = todos(originalState, fakeAction);
        expect(actual).to.deep.equal(excpected);
    })
})