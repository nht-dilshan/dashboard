// src/components/Login.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the function
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"

          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
             placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="signup-button">Login</button>
        <p>
          Don&apos;t have an account? Please{' '}
          <Link to="/signup">register</Link>.
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
