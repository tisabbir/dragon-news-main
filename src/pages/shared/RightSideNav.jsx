import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 border border-gray-400 rounded-lg">
        <h1 className="text-2xl font-bold">Log in with</h1>

        <button className="btn border border-gray-600 w-full">
          <FaGoogle /> Google
        </button>
        <button className="btn border border-gray-600 w-full">
          <FaGithub /> Github
        </button>
      </div>

      <div className="p-4 mt-6 space-y-4 border border-gray-400 rounded-lg">
        <h1 className="text-2xl font-bold">Find Us On</h1>

        <button className="btn border border-gray-600 w-full">
          <FaFacebook /> Facebook
        </button>
        <button className="btn border border-gray-600 w-full">
          <FaTwitter /> Twitter
        </button>
        <button className="btn border border-gray-600 w-full">
          <FaInstagram /> Instagram
        </button>
      </div>

      <div className="p-4 mt-6 space-y-4 border bg-gray-100 mb-12 rounded-lg">
        <h1 className="text-2xl font-bold">Qzone</h1>
        <img src={qZone1} />
        <img src={qZone2} />
        <img src={qZone3} />
      </div>
    </div>
  );
};

export default RightSideNav;
