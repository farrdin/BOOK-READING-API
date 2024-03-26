import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link
      to={`/Book/${bookId}`}
      className="border rounded-2xl p-10 space-y-5 transition hover:scale-105 hover:border-[#23BE0A] border-opacity-30"
    >
      <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
        <img src={image} className="h-52" />
      </div>
      <div className=" space-x-2 text-[#23BE0A] text-base font-medium">
        <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">#{tags[0]}</span>
        <span className="bg-[#23BE0A0D] p-2 rounded-2xl">#{tags[1]}</span>
      </div>
      <div className="space-y-4">
        <h1 className="text-[#131313] text-2xl font-bold">{bookName}</h1>
        <p className="text-[#131313CC] text-base font-medium">By : {author}</p>
      </div>
      <hr />
      <div className="text-[#131313CC] text-base font-medium flex justify-between">
        <span>{category}</span>
        <span className="flex items-center gap-1">
          {rating}
          <CiStar />
        </span>
      </div>
    </Link>
  );
};
Books.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Books;
