import { expect } from 'chai';
import { getCompletedTodos } from '../store/selectors';

describe('Testing selectors', () => {
    it('Testing that getCompletedTodos returns only completed todos', () => {
        // create fakeTodos
        const fakeTodos = [{ text: 'a', isCompleted: true },
        { text: 'b', isCompleted: false },
        { text: 'c', isCompleted: false },
        ];

        //create the expected 
        const expected = [{ text: 'a', isCompleted: true }];

        //create the actual
        const actual = getCompletedTodos.resultFunc(fakeTodos); // resultFunc returns a ref to the function used in the selector

        //run the test 
        expect(expected).to.deep.equal(actual);
    })
})