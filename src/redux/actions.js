export const SHOW_LOGIN = 'SHOW_LOGIN';
export const SHOW_REGISTER = 'SHOW_REGISTER';
export const LOGIN ='LOGIN';
export const REGISTER='REGISTER'

export const showLogin = () => ({
    type: 'SHOW_LOGIN',
});

export const showRegister = () => ({
    type: 'SHOW_REGISTER',
});
export const login =(username, password) =>({
    type:LOGIN,
    payload:{username, password}
});

export const register =(username, password) =>({
    type:REGISTER,
    payload:{username, password}
});