import "./FeedbackModal.scss";
import closeModal from "../../../shared/assets/FeedbackModal/closeModal.svg";
import flagKg from "../../../shared/assets/FeedbackModal/flagKg.svg";

const FeedbackModal = () => {
  return (
    <div className="feedbackModal">
      <form className="feedbackModal__modal">
        <div className="feedbackModal__modal__head">
          <h1>Info</h1>
          <button>
            <img src={closeModal} alt="Close img" />
          </button>
        </div>

        <p className="feedbackModal__modal__rule">
          To submit an application for a tour reservation, you need to fill in
          your information and select the number of people for the reservation
        </p>

        <section className="feedbackModal__modal__inputsBlock">
          <div className="feedbackModal__modal__inputsBlock__numBlock">
            <span>Phone number</span>
            <input type="number" />

            <div className="feedbackModal__modal__inputsBlock__numBlock__select">
              <img src={flagKg} alt="Flag" />

              <select>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kg">KG</option>
              </select>
            </div>
          </div>

          <div>
            <span>Commentaries to trip</span>
            <input type="text" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default FeedbackModal;
