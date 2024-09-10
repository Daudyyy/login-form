import { LOGIN, REGISTER, SHOW_LOGIN, SHOW_REGISTER } from './actions';

const initialState = {
    currentForm: 'login', // Default to login form
    userData:{} //for storing login and register data
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN:
        return { 
            ...state,
            currentForm: 'login'
        };

        case SHOW_REGISTER:
        return { 
            ...state,
            currentForm: 'register'
        };
    case LOGIN:
        return{
            ...state,
         userData:{username:action.payload.username,
          password:action.payload.password},
          currentForm:'login' 
        };
        case REGISTER:
        return{
            ...state,
           userData:{
            username:action.payload.username,
            email: action.payload.email,
             password:action.payload.password
            },
          currentForm:'register'
        };
default:
    return state}};