import { BiNotification, BiSearch } from 'react-icons/bi';
import '../styles/content.css';

const ContentHeader = () => {
  return (
    <div>
      <div className='contend-header'>
        <h1 className='heder-title'>Dashboard</h1>
        <div className='header-activity'>
          <div className='seach-box'>
            <input type='text' placeholder='Search for something' />
            <BiSearch className='s-icon' />
          </div>
          <div className='notify'>
            <BiNotification className='n-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
