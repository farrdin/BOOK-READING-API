import Banner from "./Banner";
import Books from "./Books";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto">
        <Header></Header>
        <Banner></Banner>
        <Books></Books>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
