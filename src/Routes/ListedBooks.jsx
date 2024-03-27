import { CiLocationOn } from "react-icons/ci";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBooks, getWishBooks } from "../Utilities/LocalStorage";

const ListedBooks = () => {
  const Listedbooks = useLoaderData();

  const [readedbook, setreadedbook] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  useEffect(() => {
    const savedBooks = getReadBooks();
    if (Listedbooks.length > 0) {
      const readedBooks = Listedbooks.filter((book) =>
        savedBooks.includes(book.bookId)
      );
      setreadedbook(readedBooks);
    }
  }, [Listedbooks]);

  useEffect(() => {
    const savedWBooks = getWishBooks();
    if (Listedbooks.length > 0) {
      const wishedBooks = Listedbooks.filter((book) =>
        savedWBooks.includes(book.bookId)
      );
      setWishBook(wishedBooks);
      console.log(wishedBooks);
    }
  }, [Listedbooks]);
  return (
    <div>
      <div className="rounded-2xl bg-[#1313130D] py-8 text-center">
        <h2 className="text-[#131313] text-3xl font-bold ">Books</h2>
      </div>
      <div className="text-center my-5">
        <select className="select bg-[#23BE0A] text-white">
          <option disabled selected className="bg-white text-black">
            Sort By
          </option>
          <option className="bg-white text-black">Rating</option>
          <option className="bg-white text-black">Number of pages</option>
          <option className="bg-white text-black">Published year</option>
        </select>
      </div>
      <div className="BooksSection my-5">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-5"
          >
            {readedbook.map((book) => (
              <div
                key={book.bookId}
                className="border rounded-2xl p-10   lg:flex gap-10"
              >
                <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                  <img src={book.image} className="h-52" />
                </div>
                <div className="w-full space-y-5">
                  <div>
                    <h1 className="text-[#131313] text-2xl font-bold">
                      {book.bookName}
                    </h1>
                    <p className="text-[#131313CC] text-base font-medium">
                      By : {book.author}
                    </p>
                  </div>
                  <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                    <span className="text-black">Tag: </span>
                    <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                      #{book.tags[0]}
                    </span>
                    <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                      #{book.tags[1]}
                    </span>
                    <div className=" inline-block">
                      <div className="flex items-center text-black">
                        <CiLocationOn />
                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                      </div>
                    </div>
                    <div className="text-black flex gap-3">
                      <span className="flex items-center gap-1">
                        <GoPeople /> Publisher: {book.publisher}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdOutlineInsertPageBreak /> Page: {book.totalPages}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className=" flex gap-2 ">
                    <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full items-center flex">
                      Category: {book.category}
                    </span>
                    <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal items-center flex">
                      Rating: {book.rating}
                    </span>
                    <Link to={`/Book/${book.bookId}`}>
                      <button className="btn px-4 rounded-full bg-[#23BE0A] text-[white] text-base font-medium hover:text-black">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {wishBook.map((book) => (
              <div
                key={book.bookId}
                className="border rounded-2xl p-10   lg:flex gap-10"
              >
                <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                  <img src={book.image} className="h-52" />
                </div>
                <div className="w-full space-y-5">
                  <div>
                    <h1 className="text-[#131313] text-2xl font-bold">
                      {book.bookName}
                    </h1>
                    <p className="text-[#131313CC] text-base font-medium">
                      By : {book.author}
                    </p>
                  </div>
                  <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                    <span className="text-black">Tag: </span>
                    <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                      #{book.tags[0]}
                    </span>
                    <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                      #{book.tags[1]}
                    </span>
                    <div className=" inline-block">
                      <div className="flex items-center text-black">
                        <CiLocationOn />{" "}
                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                      </div>
                    </div>
                    <div className="text-black flex gap-3">
                      <span className="flex items-center gap-1">
                        <GoPeople /> Publisher: {book.publisher}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdOutlineInsertPageBreak /> Page {book.totalPages}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className=" flex gap-2 ">
                    <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full items-center flex">
                      Category: {book.category}
                    </span>
                    <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal items-center flex">
                      Rating: {book.rating}
                    </span>
                    <Link to={`/Book/${book.bookId}`}>
                      <button className="btn px-4 rounded-full bg-[#23BE0A] text-[white] text-base font-medium hover:text-black">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
