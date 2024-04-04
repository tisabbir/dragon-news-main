import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold text-[#403F3F] text-center">
        {" "}
        All Category
      </h1>
      {categories.map((category) => (
        <NavLink key={category.id} className="btn btn-ghost w-full">
          {category.name}
        </NavLink>
      ))}

      <div className="mt-6 space-y-6">
        <div>
          <img src={img1} />
          <p className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="text-black flex items-center gap-4">
              Sports
              <span className="flex items-center gap-4">
                <FaCalendar /> Jan 24 2025
              </span>
            </p>
          </div>
        </div>

        <div>
          <img src={img2} />
          <p className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="text-black flex items-center gap-4">
              Sports
              <span className="flex items-center gap-4">
                <FaCalendar /> Jan 24 2025
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src={img3} />
          <p className="text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="text-black flex items-center gap-4">
              Sports
              <span className="flex items-center gap-4">
                <FaCalendar /> Jan 24 2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
