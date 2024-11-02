// src/components/Login.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Ensure the correct file extension is used

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('tharindu');
  const [password, setPassword] = useState('1234'); // Default password
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would handle authentication logic
    // For now, just call the onLogin prop and redirect to the dashboard
    onLogin();
    navigate('/content');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;