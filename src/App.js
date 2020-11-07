import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import home from './components/Home'
import Courses from './components/Courses'
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <ProtectedRoute path="/home" component={home} />
      <ProtectedRoute path="/courses" component={Courses} />
      <ProtectedRoute path="/logout" component={Logout} />
    </Router>
  );
}

export default App;
