import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Books from "./Books";

const Home = () => {
  const books = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="BookSection mt-10 lg:mt-24">
        <h1 className="text-center text-[#131313] text-4xl font-bold">Books</h1>
        <div className="grid  lg:grid-cols-3 gap-4 my-8">
          {books.map((book) => (
            <Books key={book.bookId} book={book}></Books>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
