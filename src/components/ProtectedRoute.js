import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../service/auth";

export default ({ component: Component, ...rest }) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props)
        if(isAuthenticated()) return <Component {...props} />
        return <Redirect to="/" />
      }}
    />
  );
};
