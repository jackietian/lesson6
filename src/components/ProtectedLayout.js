import { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../service/auth";

const ProtectedLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) navigate("/login", { replace: true });
  }, []);

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
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
