import { useEffect, useState } from "react";
import "./DetailsWidget.scss";
import location from "../../shared/assets/DetailsWidget/location.svg";
import arrowLeft from "../../shared/assets/DetailsWidget/arrowLeft.svg";
import { useNavigate } from "react-router";
import FeedbackModal from "./FeedbackModal/FeedbackModal";
import { getOneCard } from "./DetailsWidgetAction";
import { useParams } from "react-router-dom";

export interface Card {
  id: number;
  name: string;
  description: string;
  location: string;
  photo: string;
  category: number;
}

const DetailsWidget: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const fetchOneCard = async () => {
      if (!id) {
        console.error("ID is not defined");
        return;
      }

      try {
        const oneCard = await getOneCard(id);
        setCard(oneCard);
      } catch (error) {
        console.error("Error fetching card:", error);
      }
    };
    fetchOneCard();
  }, [id]);

  // ------------MODAL WINDOW Start-----------

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="detailsWidget">
      <header>
        {card ? (
          <img src={card.photo} alt="background" />
        ) : (
          <div>Loading...</div>
        )}
        <button onClick={() => navigate("/")}>
          {" "}
          <img src={arrowLeft} alt="ArrowLeft" className="arrowLeft" />
          Go Back
        </button>
      </header>

      <main className="detailsWidget__main">
        {card ? (
          <div className="detailsWidget__main__info">
            <div className="detailsWidget__main__info__head">
              <h1>{card.name}</h1>
              <span>
                <img src={location} alt="location" />
                {card.location}{" "}
              </span>
            </div>

            <div className="detailsWidget__main__info__description">
              <h2>Description</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="detailsWidget__main__comment">
          <h2>Reviews</h2>

          <p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAiVwjUWYgmyoHPGZ4KNesZOkD-c-lfQqig&usqp=CAU"
              alt="Avatar"
            />
            <span className="name">Anonymous</span>

            <span className="commentText">
              That was such a nice place. The most beautiful place I’ve ever
              seen. My advice to everyone not to forget to take warm coat
            </span>
          </p>
        </div>
        <button onClick={openModal} className="detailsWidget__main--btnBook">
          Book now
        </button>
      </main>

      {isModalOpen && <FeedbackModal onClose={closeModal} />}
    </div>
  );
};

export default DetailsWidget;
