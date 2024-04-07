import { useContext } from "react";

import { Navigate } from "react-router-dom";
import AuthContext from "./../Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
