import { NavLink, useParams, useLocation, Outlet } from "react-router-dom";

export default () => {
  let location = useLocation();
  return (
    <section>
      <h1>Courses</h1>
      <ul>
        <li>
          <NavLink to="js">JS</NavLink>
        </li>
        <li>
          <NavLink to="html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="css">CSS</NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
