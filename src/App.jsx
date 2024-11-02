import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/content';
import Profile from './components/profile';
import Assignment from './components/assignment';
import Report from './components/report';
import Stats from './components/stats';
import Tasks from './components/tasks';
import Help from './components/help';
import './App.css';

function App() {
  return (
    <Router>
      <div className='dashboard'>
        <Sidebar />
        <Profile />
        <div className='dashboard-content'>
          <Routes>
            <Route path="/" element={<Content />} />
            
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/report" element={<Report />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;