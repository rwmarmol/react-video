const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            console.log("STATE", state);
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        default:
            return state
    }
};

export default reducer;
