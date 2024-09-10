import { SHOW_LOGIN, SHOW_REGISTER } from './actions';

const initialState = {
    currentForm: 'login', // Default to login form
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN:
            return { ...state, currentForm: 'login' };
        case SHOW_REGISTER:
            return { ...state, currentForm: 'register' };
        default:
            return state;
    }
};