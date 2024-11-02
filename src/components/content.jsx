import ContentHeader from "./contentHeader";
import "../styles/content.css";
import Card from "../components/card";
import TeacherList from "../components/teacherList";

const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <TeacherList />
        </div>
    );
};

export default Content;
