import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Navbar from "../pages/shared/Navbar";

const Career = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <h1>This is Career Page for {name}</h1>
    </div>
  );
};

export default Career;
