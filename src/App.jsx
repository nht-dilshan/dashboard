import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/content';
import Profile from './components/profile';
import Assignment from './components/assignment';
import Report from './components/report';
import Stats from './components/stats';
import Tasks from './components/tasks';
import Help from './components/help';
import Login from './components/login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="dashboard">
        {isAuthenticated && <Sidebar onLogout={handleLogout} />}
        <div className="dashboard-content">
          <Routes>
            {/* Public Routes - Only accessible when not authenticated */}
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                {/* Redirect all other paths to login */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                {/* Authenticated Routes */}
                <Route path="/" element={<div><Content /><Profile /></div>} />
                
                <Route path="/assignment" element={<div><Assignment /><Profile /></div>} />
                <Route path="/report" element={<div><Report /><Profile /></div>} />
                <Route path="/stats" element={<div><Stats /><Profile /></div>} />
                <Route path="/tasks" element={<div><Tasks /><Profile /></div>} />
                <Route path="/help" element={<div><Help /><Profile /></div>} />
                {/* Redirect all other paths to the dashboard */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
