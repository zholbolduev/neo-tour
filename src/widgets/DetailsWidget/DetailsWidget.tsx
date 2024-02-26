import React, { useState } from "react";
import "./DetailsWidget.scss";
import background from "../../shared/assets/DetailsWidget/background.svg";
import location from "../../shared/assets/DetailsWidget/location.svg";
import arrowLeft from "../../shared//assets/DetailsWidget/ArrowLeft.svg";
import { useNavigate } from "react-router";
import FeedbackModal from "./FeedbackModal/FeedbackModal";

const DetailsWidget = () => {
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
        <img src={background} alt="background" />
        <button onClick={() => navigate("/")}>
          {" "}
          <img src={arrowLeft} alt="ArrowLeft" className="arrowLeft" />
          Go Back
        </button>
      </header>

      <main className="detailsWidget__main">
        <div className="detailsWidget__main__info">
          <div className="detailsWidget__main__info__head">
            <h1>Mount Fuji</h1>
            <span>
              <img src={location} alt="location" />
              Honshu, Japan
            </span>
          </div>

          <div className="detailsWidget__main__info__description">
            <h2>Description</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ea veniam. Aut, labore tempore? Facere ullam dolor deserunt minus
              molestias.
            </p>
          </div>
        </div>

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

      {isModalOpen && <FeedbackModal closeModal={closeModal} />}
    </div>
  );
};

export default DetailsWidget;
