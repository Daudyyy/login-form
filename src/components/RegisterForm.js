import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { register, showLogin } from '../redux/actions';

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
       // dispatch the login action with username and password
       dispatch(register (username, email, password ));

       // Show success message
    alert('Registered successfully');

    // Clear input fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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

export default RegisterForm;