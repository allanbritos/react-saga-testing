import { runSaga } from 'redux-saga';
import axios from 'axios';
import { getIdentitySaga } from './saga';

jest.mock('axios');

describe('getIdentitySaga', () => {
    it('should call api and dispatch success action', async () => {
        const dispatchedActions = [];
        const mockResponse = {
            data: {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
        };

        axios.get.mockResolvedValue(mockResponse);

        const fakeStore = {
            dispatch: action => dispatchedActions.push(action)
        };

        await runSaga(fakeStore, getIdentitySaga).done;

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        expect(dispatchedActions).toContainEqual({
            type: 'app/SET_IDENTITY',
            identity: mockResponse.data
        });
    });

    it('should call api and dispatch failure action on error', async () => {
        const dispatchedActions = [];
        const mockError = new Error('Network Error');

        axios.get.mockRejectedValue(mockError);

        const fakeStore = {
            dispatch: action => dispatchedActions.push(action)
        };

        await runSaga(fakeStore, getIdentitySaga).done;

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        expect(dispatchedActions).toContainEqual({
            type: 'app/SET_IDENTITY_ERROR',
            error: mockError.message
        });
    });
});