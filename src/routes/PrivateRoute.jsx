import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import {Navigate, useLocation} from "react-router-dom";




const PrivateRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation()
  console.log(location.pathname);
  // console.log(user);

  if(loading) {
    return ( <div className="">
      <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
    </div> )
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;
