import { NavLink, useNavigate } from 'react-router-dom';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
  BiLogOut,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import '../styles/sidebar.css';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Update authentication state
    navigate('/login'); // Redirect to login page
  };

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <BiHome /> },
    { path: "/assignment", label: "Assignment", icon: <BiMessage /> },
    { path: "/report", label: "Report", icon: <BiSolidReport /> },
    { path: "/stats", label: "Stats", icon: <BiStats /> },
    { path: "/tasks", label: "Tasks", icon: <BiTask /> },
    { path: "/help", label: "Help", icon: <BiHelpCircle /> },
  ];

  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h1>EDU</h1>
      </div>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="item"
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
        <button className="item logout" onClick={handleLogout} >
          <BiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Sidebar;
