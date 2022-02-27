import { useEffect } from "react";
import { login, isAuthenticated } from "../service/auth";
import { Link, useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) navigate("/home", { replace: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/home", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <section>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </section>
      <section>
        <label htmlFor="name">Password</label>
        <input type="password" name="password" id="password" />
      </section>
      <section className="actions">
        <button type="reset">cancel</button>
        <button type="submit">Submit</button>
      </section>

      <section>
        <p>
          Dont have an account? <Link to="/signup">Sign Up here</Link>
        </p>
      </section>
    </form>
  );
};

// const browserHistoryQueue = ['signin']
// browserHistoryQueue.push('home')
// // ['signin', 'home']

// browserHistoryQueue.replace('home')
// // ['home']
