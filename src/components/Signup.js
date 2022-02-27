import { useEffect } from "react";
import { login, isAuthenticated } from "../service/auth";
import { Link } from "react-router-dom";

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
      <h1>Sign Up</h1>
      <section>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </section>
      <section>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
      </section>
      <section className="actions">
        <button type="reset">cancel</button>
        <button type="submit">Submit</button>
      </section>

      <section>
        <p>
          Already have an account? <Link to="/">Sign in here</Link>
        </p>
      </section>
    </form>
  );
};
