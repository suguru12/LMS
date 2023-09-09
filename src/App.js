
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Announcement from './components/Table/Announcement';
import Attendance from './components/Attendance';
import Course from './components/Table/Course';
import Exam from './components/Table/Exam';
import Faculty from './components/Table/Faculty';
import Result from './components/Table/Result';
import Support from './components/Form/Support';
import Home from './components/home';
import Homepage from './components/Homepage';
import Branch from './components/Table/Branch';
import BranchForm from './components/Form/BranchForm';
import FacultyForm from './components/Form/FacultyForm';
import Login from './components/login';
import Student from './components/Table/Student';
import StudentForm from './components/Form/StudentForm';
import Batch from './components/Table/Batch';
import BatchForm from './components/Form/BatchForm';
import CourseForm from './components/Form/CourseForm';
import ResultForm from './components/Form/ResultForm';
import AnnouncementForm from './components/Form/AnnouncementForm';
import ExamForm from './components/Form/ExamForm';


function App() {
  return (
    <div className="h-full w-full bg-white">
   
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="homepage" element={<Homepage />} >
      <Route path="/homepage/home" element={<Home/>}/>
      <Route path="/homepage/branch" element={<Branch/>} />
      <Route path="/homepage/faculty" element={<Faculty />}/>
      <Route path="/homepage/student" element={<Student/>} />
      <Route path='/homepage/course' element={<Course/>}/>
      <Route path="/homepage/batch" element={<Batch/>} />
      <Route path="/homepage/exam" element={<Exam />} />
      <Route path="/homepage/result" element={<Result/>} />
      <Route path="/homepage/attendance" element={<Attendance/>} />
      <Route path="/homepage/announcement" element={<Announcement/>} />
      <Route path="/homepage/admin" element={<Admin/>} />
      <Route path="/homepage/support" element={<Support/>} />
      <Route path="/homepage/branch/addbranch" element={<BranchForm/>}/>
      <Route path="/homepage/faculty/addfaculty" element={<FacultyForm/>}/>
      <Route path="/homepage/student/addstudent" element={<StudentForm/>}/>
      <Route path="/homepage/batch/addbatch" element={<BatchForm/>}/>
      <Route path="/homepage/course/addcourse" element={<CourseForm/>}/>
      <Route path="/homepage/exam/addexam" element={<ExamForm/>}/>
      <Route path="/homepage/result/uploadresult" element={<ResultForm/>}/>
      <Route path="/homepage/announcement/addannouncement" element={<AnnouncementForm/>}/>

      </Route>
    </Routes>
    </div>
  );
}

export default App;
