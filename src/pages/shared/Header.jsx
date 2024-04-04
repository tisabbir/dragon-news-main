import moment from "moment";
import logo from "../../../logo.png";
const Header = () => {
  return (
    <div className="text-center space-y-4 mt-12">
      <img className="mx-auto" src={logo} />
      <p className="text-xl text-gray-600">Journalism Without Fear or Favour</p>
      <p className="text-xl text-gray-400">{moment().format("LLLL")}</p>
    </div>
  );
};

export default Header;
