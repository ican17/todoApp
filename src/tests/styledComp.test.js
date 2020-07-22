import { expect } from 'chai';
import {getStyleForTodoWarning} from '../todos/TodoListItem/TodoListItem';

describe('Styled components test', () => {
    it('TodoListItem - background gets RED if the todo has been created before MORE than the specefied duration in millisc', () => {
        const expected = 'red';
        const actual = getStyleForTodoWarning(Date.now() - 60000 * 60 - 10000, 60000 * 60 );
        expect(expected).to.deep.equal(actual);
    });

    it('TodoListItem - background gets GREY if the todo has been created before LESS than the specefied duration in millisc', () => {
        const expected = 'grey';
        const actual = getStyleForTodoWarning(Date.now() - 60000 * 50, 60000 * 60 );
        expect(expected).to.deep.equal(actual);
    })
})