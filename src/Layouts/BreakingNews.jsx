import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex items-center mt-6">
      <button className="btn btn-secondary">Breaking News</button>
      <div>
        <Marquee speed={150}>
          <span className="mr-12">
            I can be a React component, multiple React components, or just some
            text.{" "}
          </span>
          <span className="mr-12">
            I can be a React component, multiple React components, or just some
            text.{" "}
          </span>
          <span className="mr-12">
            I can be a React component, multiple React components, or just some
            text.{" "}
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
