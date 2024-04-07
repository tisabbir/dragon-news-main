import { useParams } from "react-router-dom";
import Header from "./../pages/shared/Header";
import Navbar from "./../pages/shared/Navbar";
const News = () => {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div>
          <h2 className="col-span-3">News Details {id}</h2>
        </div>
      </div>
    </div>
  );
};

export default News;
