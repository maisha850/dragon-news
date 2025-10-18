import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
   
  } = news;

  const publishedDate = new Date(author?.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="bg-white shadow-md rounded-2xl  border border-gray-100 hover:shadow-lg transition duration-300">
      {/* Author & Share */}
      <div className="flex items-center justify-between rounded-t-2xl p-4 bg-base-200 mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {author?.name}
            </h3>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
     <div className="flex gap-1">
        <FaRegBookmark  className="text-gray-500 cursor-pointer" ></FaRegBookmark>
           <FaShareAlt className="text-gray-500 cursor-pointer hover:text-blue-500" />
     </div>
      </div>

      {/* Title */}
      <h2 className="p-4 text-lg font-bold text-gray-900 leading-snug mb-2">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="news thumbnail"
        className="w-full p-4 h-52 object-cover rounded-lg mb-3"
      />

      {/* Details */}
      <p className="text-accent p-4 text-sm mb-2">
        {details.slice(0, 200)}...
        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
          {" "}
    Read more
        </span>
      </p>
      <div className="divider p-4"></div>

      {/* Footer Info */}
      <div className="flex p-4 items-center justify-between mt-3  pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="text-gray-800 font-semibold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
