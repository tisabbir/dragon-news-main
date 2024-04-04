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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-12">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="col-span-2 border"> News coming soon</div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
