import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import { showRegister } from '../redux/actions';
import profilePic from '../assets/profile.jpg'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch({ username, password });

    }

    return (
        <div className="form-box">
        <img src={profilePic} alt="Profile" className="avatar" />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                  placeholder="Username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                   required />
                <input type="password"
                 placeholder="Password" 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 required />
                <button type="submit">Login</button>
                <small>Don't have an account? <a onClick={() => dispatch(showRegister())}>Register</a></small>
            </form>
        </div>
    );
};

export default LoginForm;