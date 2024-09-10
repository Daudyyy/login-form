import React from 'react';
import { useDispatch } from 'react-redux';
import { showLogin } from '../redux/actions';

const RegisterForm = () => {
    const dispatch = useDispatch();

    return (
        <div className="form-box">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
                <small>Already have an account? <a onClick={() => dispatch(showLogin())}>Login</a></small>
            </form>
        </div>
    );
};

export default RegisterForm;