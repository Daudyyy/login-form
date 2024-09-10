import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { showLogin } from '../redux/actions';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        dispatch({ username, email, password });
      };
    
    return (
        <div className="form-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="Username"
                  value={username}
                 onChange={(e) => setUsername(e.target.value)} 
                 required 
                />
                <input type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                  required
                 />
                <input type="password"
                 placeholder="Password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <input type="password"
                 placeholder="Confirm Password"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 required 
                />
                <button type="submit">Register</button>
                <small>Already have an account? <a onClick={() => dispatch(showLogin())}>Login</a></small>
            </form>
        </div>
    );
};

export default RegisterForm;