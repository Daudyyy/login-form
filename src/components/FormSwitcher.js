import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const FormSwitcher = () => {
    const currentForm = useSelector((state) => state.currentForm);

    return (
        <div className="container">
            {currentForm === 'login' && <LoginForm />}
            {currentForm === 'register' && <RegisterForm />}
        </div>
    );
};

export default FormSwitcher;