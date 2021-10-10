import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import home from "./components/Home";
import Courses from "./components/Courses";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './components/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <ProtectedRoute path="/home" component={home} />
        <ProtectedRoute path="/courses" component={Courses} />
        <Route path="/logout" component={Logout} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
