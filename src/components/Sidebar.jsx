import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt className='logo-icon' />
        <h1>EDU</h1>
      </div>
      <div className='menu-list'>
        <NavLink to="/" className='item' activeClassName='active'>
          <BiHome className='icon' />
          Dashboard
        </NavLink>
        <NavLink to="/assignment" className='item' activeClassName='active'>
          <BiMessage className='icon' />
          Assignment
        </NavLink>
        <NavLink to="/report" className='item' activeClassName='active'>
          <BiSolidReport className='icon' />
          Report
        </NavLink>
        <NavLink to="/stats" className='item' activeClassName='active'>
          <BiStats className='icon' />
          Stats
        </NavLink>
        <NavLink to="/tasks" className='item' activeClassName='active'>
          <BiTask className='icon' />
          Tasks
        </NavLink>
        <NavLink to="/help" className='item' activeClassName='active'>
          <BiHelpCircle className='icon' />
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;