import { Route, Redirect, useLocation, NavLink } from "react-router-dom";
import { isAuthenticated } from "../service/auth";

const ProtectedRoute = (props) => {
  const location = useLocation();
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       console.log(props);
  //       if (isAuthenticated()) return <Component {...props} />;
  //       return <Redirect to="/" />;
  //     }}
  //   />
  // );

  if (isAuthenticated())
    return (
      <>
        <header>
          LOGO
          <nav>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Log out</NavLink>
            </li>
          </nav>
        </header>
        <main>
          <Route {...props} />
        </main>
      </>
    );

  return <Redirect to="/" from={location} />;
};

export default ProtectedRoute;
