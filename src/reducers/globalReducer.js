import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST } from '../types/globalTypes';
import initialState from '../../initialState';

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            console.log("STATE", state);
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case LOGIN_REQUEST:
            console.log("PAYLOAD", action.payload)
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                wilcho: "NUEVO WILCHO",
            }
        default:
            return state
    }
};

export default globalReducer;
