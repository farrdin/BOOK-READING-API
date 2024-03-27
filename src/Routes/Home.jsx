import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
