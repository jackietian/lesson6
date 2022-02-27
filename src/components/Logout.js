import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../service/auth";

const Logout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/login", { replace: true });
  }, []);
  return <h1>Logout</h1>;
};

export default Logout;
