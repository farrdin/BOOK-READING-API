import BannerImg from "../../../assets/images/Banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-2xl mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-10">
        <img src={BannerImg} className="rounded-lg object-contain" />
        <div className="lg:w-1/2 space-y-10 text-center  lg:text-start ">
          <h1 className="text-2xl  lg:text-5xl font-bold text-[#131313] lg:leading-[84px]">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-[#FFFFFF] text-xl font-bold ">
            <Link to="/listedbook">View The List</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
