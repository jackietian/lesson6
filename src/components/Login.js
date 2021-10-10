import { useEffect } from "react";
import { login, isAuthenticated } from "../service/auth";
import { Link } from 'react-router-dom';

export default ({ history }) => {
  useEffect(() => {
    if (isAuthenticated()) history.replace("/home");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    history.replace("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <section>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" name="name" />
      </section>
      <section>
        <label htmlFor="name">Password</label>
        <input type="password" name="password" id="password" name="password" />
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
