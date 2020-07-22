import 'node-fetch';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';
import sinon, { fake } from 'sinon';
import {loadTodos} from '../store/thunks';

describe('Testing thunks', () => {
    it('loadTodos thunk - Success scenario, dispatching the correct actions', async () => {
        // create a fake dispatch function 
        const fakeDispatch =  sinon.spy();

        // create fakeTodos & a fake fetching call
        const fakeTodos = [{text:'a'}, {text:'b'}];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        //create expected actions dispatched
        const firstExpectedAction = {
            type: 'LOAD_TODOS_INPROGRESS'
        }; 
        const secondExpectedAction = {
            type : 'LOAD_TODOS_SUCCESS',
            payload :{
                todos : fakeTodos, 
            }
        }

        // Run the thunk
        await loadTodos()(fakeDispatch);

        //test
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(firstExpectedAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(secondExpectedAction);


        // Reset fetchMock
        fetchMock.reset();

    })
} )