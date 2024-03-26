import { useLoaderData } from "react-router-dom";
import BookImg from "../../assets/images/Book.png";

const SingleBook = () => {
  const singleBook = useLoaderData();
  console.log(singleBook);
  return (
    <div className="my-5 lg:flex justify-between ">
      <div className="img mb-10 lg:mb-0 lg:w-[53%] border rounded flex justify-center bg-[#1313130D]">
        <img src={BookImg} className="min-h-[calc(100vh-100px)] p-20" />
      </div>
      <div className="content lg:w-[45%] flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#131313] text-4xl font-bold">
            The Catcher in the Rye
          </h1>
          <p className="text-[#131313CC] text-xl font-medium">
            By : Awlad Hossain
          </p>
        </div>
        <hr />
        <div>
          <span className="text-xl font text-[#131313CC] font-medium">
            Fiction
          </span>
          <hr className="my-3" />
          <p className="text-[#131313B2] font-normal text-base leading-7">
            <span className="text-[#131313] font-bold text-base leading-7">
              Review :
            </span>{" "}
            Sit amet consectetur. Interdum porta pulvinar non sit aliquam.
            Aenean pulvinar blandit vel non enim elementum penatibus
            pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi
            elementum a auctor erat diam tellus. Fermentum faucibus nulla enim
            ornare. Id neque neque pretium enim platea urna non dictum. Faucibus
            dignissim ridiculus nibh tristique massa non.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-[#131313] text-base font-bold leading-7">
            Tag :
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Young Adult
          </span>
          <span className="text-base text-[#23BE0A] font-medium bg-[#23BE0A0D] p-1">
            #Identity
          </span>
        </div>
        <hr />
        <div className="lg:p-6">
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Number of Pages:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              281
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Publisher:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              J.B Lippincott & Co.
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Year of Publishing:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              1960
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-base text-[#131313B2] font-normal leading-6">
              Rating:
            </span>
            <span className="text-[#131313] text-base font-semibold leading-7">
              4.8
            </span>
          </div>
        </div>
        <div className="flex-grow flex gap-3">
          <button className="btn hover:bg-[#23BE0A] hover:text-white">
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white text-lg font-semibold hover:text-black">
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
