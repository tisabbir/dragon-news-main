import moment from "moment";
import logo from "../../../logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("LLLL")}</p>
    </div>
  );
};

export default Header;
