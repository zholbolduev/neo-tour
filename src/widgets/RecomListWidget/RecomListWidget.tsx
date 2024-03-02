import { useEffect, useState } from "react";
import RecomCardEntity from "../../entities/RecomCardEntity/RecomCardEntity";
import "./RecomListWidget.scss";
import { fetchRecCards } from "./RecomListWidgetAction";
import { RecCard } from "../../entities/types";

const RecomListWidget: React.FC = () => {
  const [cards, setCards] = useState<RecCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cardsData = await fetchRecCards();
      setCards(cardsData.slice(0, 12));
    };

    fetchData();
  }, []);

  return (
    <div className="recomListWidget">
      <h1>Recommended</h1>

      <div className="recomListWidget__list">
        {cards.map((card) => (
          <RecomCardEntity
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

export default RecomListWidget;
