import { useLoaderData } from "react-router-dom";

const Author = () => {
  const authors = useLoaderData();
  console.log(authors);
  return (
    <div className="my-10 grid lg:grid-cols-3 gap-4 ">
      {authors.map((author, index) => (
        <div
          key={index}
          className="min-h-[calc(100vh-350px)] border rounded-2xl p-10 transition hover:scale-105 hover:border-[#23BE0A] border-opacity-30 "
        >
          <h1 className="text-[#006400] text-xl font-bold mb-7 text-center">
            {author.author}
          </h1>
          <p className="text-[#131313CC] text-base font-medium">
            <span className="text-[#131313] font-bold text-base leading-7">
              Birthplace :
            </span>
            {author.birthplace}
          </p>
          <p className="my-2 text-[#131313CC] text-base font-medium">
            <span className="text-[#131313] font-bold text-base leading-7">
              Birth Date :
            </span>
            {author.birthdate}
          </p>
          <p className="my-2 text-[#131313CC] text-base font-medium">
            <span className="text-[#131313] font-bold text-base leading-7">
              Died-Date :
            </span>
            {author.diedDate}
          </p>
          <p className="text-[#131313CC] text-base font-medium">
            <span className="text-[#131313] font-bold text-base leading-7">
              Education :
            </span>
            {author.education}
          </p>
          <p className="mt-5 text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Description :
            </span>
            {author.description.slice(0, 100)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Author;
