import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ProtectedLayout from "./components/ProtectedLayout";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<Course />} />
          </Route>
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h1>path not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
