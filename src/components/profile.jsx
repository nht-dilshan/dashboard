import ProfileHeader from "./profileHeader"
import'../styles/profile.css'
import Userimage from '../assets/image1.png'
import { BiBook } from "react-icons/bi"

const courses =[
  {
    title: 'Html CSS',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'JAVA',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'react',
    duration: '2 hours',
    icon: <BiBook />,
  },
];
const profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user-profile">
        <div className="user-detail">
          <img src={Userimage} alt="User" />
          <h3 className="username">John Doe</h3>
          <span className="profession">Teacher</span>
        </div>
        <div className="user-courses">
          {courses.map((course, index) => (
            <div key={index} className="course">
              <div className="course-detail">
                <div className="course-cover">
                  {course.icon}
                </div>
                <div className="course-name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
                </div>
              </div>
              <div className="action"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default profile
