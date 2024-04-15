import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import Header from "../pages/shared/Header";
import LeftSideNav from "../pages/shared/LeftSideNav";
import Navbar from "../pages/shared/Navbar";
import RightSideNav from "../pages/shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import Footer from "../Components/Footer";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-12">
        <div className="">
          <LeftSideNav />
        </div>

        {/* News container */}
        <div className="col-span-2">
          {news.map((anews) => (
            <NewsCard key={anews._id} anews={anews}></NewsCard>
          ))}
        </div>
        {/* News container */}
        <div className="">
          <RightSideNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
