import { useLoaderData, useParams } from "react-router-dom";
import { readBook, wishBook } from "../Utilities/LocalStorage";

const SingleBook = () => {
  const singleBook = useLoaderData();
  const { bookId } = useParams();
  const bookIdint = parseInt(bookId);
  const book = singleBook.find((book) => book.bookId === bookIdint);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const readList = () => {
    readBook(bookIdint);
  };
  const wishList = () => {
    wishBook(bookIdint);
  };

  return (
    <div className="my-10 lg:flex justify-between ">
      <div className="img mb-10 lg:mb-0 lg:w-[53%] border rounded flex justify-center bg-[#1313130D]">
        <img src={image} className="min-h-[calc(100vh-100px)] p-20" />
      </div>
      <div className="content lg:w-[45%] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#131313] text-4xl font-bold">{bookName}</h1>
          <p className="text-[#131313CC] text-xl font-medium">By : {author}</p>
        </div>
        <hr />
        <div>
          <span className="text-xl font text-[#131313CC] font-medium">
            {category}
          </span>
          <hr className="my-3" />
          <p className="text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Review :
            </span>
            {review}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-[#131313] text-base font-bold leading-7">
            Tag :
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #{tags[0]}
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #{tags[1]}
          </span>
        </div>
        <hr />
        <div className="lg:p-6">
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Number of Pages:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              {totalPages}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Publisher:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              {publisher}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Year of Publishing:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              {yearOfPublishing}
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Rating:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex-grow flex gap-3">
          <button
            onClick={readList}
            className="btn hover:bg-[#23BE0A] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={wishList}
            className="btn bg-[#50B1C9] text-white text-lg font-semibold hover:text-black"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;

// read and wish list button click show a toast "BookS Added to READ list Or Wishlist"

//  ekbar read add korle wish list e add hobe na "You have Already Read this Books"
//  ekbar wishlist add korar por readlist e click korle read list e add hobe"Books added to read list"

//  also add read and wish list items to local storage
