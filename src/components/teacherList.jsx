import '../styles/teacherList.css';
import image1 from '../assets/image1.png';

const teachers = [
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: image1,
    name: 'Jone',
    duration: '20 hours lesson',
    cost: '100',
  },
];

const TeacherList = () => {
  return (
    <div className="teacher-list">
      <div className="list-header">
        <h2 className="listh2">Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="math">Math</option>
        </select>
      </div>
      <div className="list-container">
        {teachers.map((teacher, index) => (
          <div key={index} className="list">
            <div className="teacher-detail">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}hr.</span>
            <span className="teacher-todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
