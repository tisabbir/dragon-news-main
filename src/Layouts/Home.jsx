import Header from "../pages/shared/Header";
import LeftSideNav from "../pages/shared/LeftSideNav";
import Navbar from "../pages/shared/Navbar";
import RightSideNav from "../pages/shared/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews />
      <Navbar />
      <h1 className="text-bold font-poppins ">This is Home</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="col-span-2 border"> News coming soon</div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
