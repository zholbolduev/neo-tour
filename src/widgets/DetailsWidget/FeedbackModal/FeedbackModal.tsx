import React, { useState } from "react";
import closeModal from "../../../shared/assets/FeedbackModal/closeModal.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import userImg from "../../../shared/assets/FeedbackModal/user.svg";
import { submitFeedback } from "./FeedBackModalAction";
import "./FeedbackModal.scss";

interface FeedbackModalProps {
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [comment, setComment] = useState("");

  const decreasePeopleCount = () => {
    if (peopleCount > 1) {
      setPeopleCount((prevCount) => prevCount - 1);
    }
  };

  const increasePeopleCount = () => {
    if (peopleCount < 6) {
      setPeopleCount((prevCount) => prevCount + 1);
    }
  };

  const handleOnChangePhone = (value: string) => {
    setPhoneNumber(value);
  };

  const handleOnChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitFeedback({ phoneNumber, peopleCount, comment });
      console.log("Feedback submitted successfully");
      onClose();
    } catch (error) {
      //   console.error("Error submitting feedback:", error.message);
    }
  };

  return (
    <div className="feedbackModal">
      <form className="feedbackModal__modal" onSubmit={handleSubmit}>
        <div className="feedbackModal__modal__head">
          <h1>Info</h1>
          <button onClick={onClose}>
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
            <PhoneInput
              inputStyle={{
                marginTop: "4px",
                display: "flex",
                height: "64px",
                width: "100%",
                padding: "10px 0px 10px 60px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                border: "1px solid var(--Input-gray, #636363)",
                color: "var(--Black, #141414)",
                fontFamily: "Manrope",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
              country={"kg"}
              value={phoneNumber}
              onChange={handleOnChangePhone}
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />
          </div>

          <div className="feedbackModal__modal__inputsBlock__comment">
            <span>Commentaries to trip</span>
            <input
              type="text"
              placeholder="Write your wishes to trip..."
              value={comment}
              onChange={handleOnChangeComment}
            />
          </div>

          <div className="feedbackModal__modal__inputsBlock__people">
            <span>Number of people</span>

            <div className="feedbackModal__modal__inputsBlock__people__choise">
              <div className="feedbackModal__modal__inputsBlock__people__choise__count">
                <button type="button" onClick={decreasePeopleCount}>
                  -
                </button>
                <p>{peopleCount}</p>
                <button type="button" onClick={increasePeopleCount}>
                  +
                </button>
              </div>

              <img src={userImg} alt="User Img" />
              <p>
                {peopleCount} Person{peopleCount !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  );
};

export default FeedbackModal;
