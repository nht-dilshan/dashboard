
import { NavLink } from 'react-router-dom';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = () => {
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
            activeClassName="active"
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
