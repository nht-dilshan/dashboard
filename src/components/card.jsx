
import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';
import '../styles/content.css';
const course = [
    {
        title: "Web development",
        icon: <BiLogoHtml5 />,
    },
    {
        title: "App development",
        icon: <BiLogoAndroid />,
    },
    {
        title: "ui/ux development",
        icon: <BiBuilding />,
    },
];

const Card = () => {
  return (
    <div className='card-container'>
      {course.map((item, index) => (
        <div key={index}>
          <div className='card'>
            <div className='card-cover'>{item.icon}</div>
            <div className='card-title'>
              <h2>{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;