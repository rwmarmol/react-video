import useInitialState from '../../../hooks/useInitialState';

describe('useInitialState Hook', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Fetch Movies to initialState', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '1233'}))
        
        useInitialState("https://google.com")
            .then((response) => {
                expect(response.data).toEqual('1233');
            });
    })

});

