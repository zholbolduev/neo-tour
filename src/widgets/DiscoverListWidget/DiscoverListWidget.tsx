import DiscoverCardEntity from "../../entities/DiscoverCardEntity/DiscoverCardEntity";
import "./DiscoverListWidget.scss";
import leftBtn from "../../shared/assets/DiscoverListWidget/leftBtn.svg";
import rightBtn from "../../shared/assets/DiscoverListWidget/rightBtn.svg";
import { RecCard } from "../../entities/types";
import { useEffect, useState } from "react";
import { fetchDisCards } from "./DiscoverListWidgetAction";

const DiscoverListWidget: React.FC = () => {
  const [cards, setCards] = useState<RecCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cardsData = await fetchDisCards();
      setCards(cardsData);
    };

    fetchData();
  }, []);

  return (
    <div className="discoverListWidget">
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
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Featured</a>
          </li>
          <li>
            <a>Most Visited</a>
          </li>
          <li>
            <a>Europe</a>
          </li>
          <li>
            <a>Asia</a>
          </li>
        </ul>
      </div>

      {cards.map((card) => (
        <DiscoverCardEntity
          key={card.id}
          id={card.id}
          name={card.name}
          photo={card.photo}
        />
      ))}
    </div>
  );
};

export default DiscoverListWidget;
