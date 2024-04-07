import { Link } from "react-router-dom";
const NewsCard = ({ anews }) => {
  const { _id, title, thumbnail_url, image_url, details } = anews;
  return (
    <div>
      <a
        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          src={image_url}
          alt=""
          className="object-cover w-full h-64 rounded sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2 ">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">February 19, 2021</span>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)} <br />
              <Link to={`/news/${_id}`} className="btn">
                Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
