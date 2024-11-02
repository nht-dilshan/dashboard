// src/components/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the function
import '../styles/signup.css';

const Signup = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
