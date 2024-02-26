import HeaderWidget from "../../widgets/HeaderWidget/HeaderWidget";
import "./HomePage.scss";
import DiscoverListWidget from "../../widgets/DiscoverListWidget/DiscoverListWidget";
import RecomListWidget from "../../widgets/RecomListWidget/RecomListWidget";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeaderWidget />
      <DiscoverListWidget />
      <RecomListWidget />
    </div>
  );
};

export default HomePage;
