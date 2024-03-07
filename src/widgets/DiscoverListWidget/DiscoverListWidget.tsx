import DiscoverCardEntity from "../../entities/DiscoverCardEntity/DiscoverCardEntity";
import "./DiscoverListWidget.scss";
import leftBtn from "../../shared/assets/DiscoverListWidget/leftBtn.svg";
import rightBtn from "../../shared/assets/DiscoverListWidget/rightBtn.svg";
import { RecCard } from "../../entities/types";
import { useEffect, useState } from "react";
import { fetchDisCards } from "./DiscoverListWidgetAction";

const DiscoverListWidget: React.FC = () => {
  const [cards, setCards] = useState<RecCard[]>([]);
  const [activeTab, setActiveTab] = useState<string>("Popular");

  useEffect(() => {
    const fetchData = async () => {
      const cardsData = await fetchDisCards();
      setCards(cardsData);
    };

    fetchData();

    setActiveTab("Popular");
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="discoverListWidget" id="scroll">
      <div className="discoverListWidget__head">
        <h2>Discover</h2>
        <div className="discoverListWidget__head__btnBlock">
          <button>
            <img src={leftBtn} alt="Left" />
          </button>
          <button>
            <img src={rightBtn} alt="Right" />
          </button>
        </div>
      </div>

      <div className="discoverListWidget__list">
        <ul>
          <li className={activeTab === "Popular" ? "active" : ""}>
            <a onClick={() => handleTabClick("Popular")}>Popular</a>
            {activeTab === "Popular" && <p></p>}
          </li>
          <li className={activeTab === "Featured" ? "active" : ""}>
            <a onClick={() => handleTabClick("Featured")}>Featured</a>
            {activeTab === "Featured" && <p></p>}
          </li>
          <li className={activeTab === "Most Visited" ? "active" : ""}>
            <a onClick={() => handleTabClick("Most Visited")}>Most Visited</a>
            {activeTab === "Most Visited" && <p></p>}
          </li>
          <li className={activeTab === "Europe" ? "active" : ""}>
            <a onClick={() => handleTabClick("Europe")}>Europe</a>
            {activeTab === "Europe" && <p></p>}
          </li>
          <li className={activeTab === "Asia" ? "active" : ""}>
            <a onClick={() => handleTabClick("Asia")}>Asia</a>
            {activeTab === "Asia" && <p></p>}
          </li>
        </ul>
      </div>

      <div className="cardList">
        {cards.map((card) => (
          <DiscoverCardEntity
            key={card.id}
            id={card.id}
            name={card.name}
            photo={card.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverListWidget;
