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


  return (
    <Router>
      <div className="dashboard">
        {isAuthenticated && <Sidebar />}
        <div className="dashboard-content">
          <Routes>
            {/* Redirect to login if user is not authenticated */}
            {!isAuthenticated ? (
              <>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                {/* Redirect any other path to login */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                {/* Authenticated routes */}
                <Route path="/" element={<><Content /><Profile /></>} />
                
                <Route path="/assignment" element={<><Assignment /><Profile /></>} />
                <Route path="/report" element={<><Report /><Profile /></>} />
                <Route path="/stats" element={<><Stats /><Profile /></>} />
                <Route path="/tasks" element={<><Tasks /><Profile /></>} />
                <Route path="/help" element={<><Help /><Profile /></>} />
                {/* Redirect any other path to dashboard */}
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
