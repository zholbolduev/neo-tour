import React, { useState } from "react";
import Modal from "react-modal";
import closeModal from "../../../shared/assets/FeedbackModal/closeModal.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import userImg from "../../../shared/assets/FeedbackModal/user.svg";
import { submitFeedback } from "./FeedBackModalAction";
import "./FeedbackModal.scss";

interface FeedbackModalProps {
  onClose: () => void;
}

Modal.setAppElement("#root");

const FeedbackModal: React.FC<FeedbackModalProps> = ({ onClose }) => {
  const [phone_number, setPhoneNumber] = useState("");
  const [number_of_people, setPeopleCount] = useState(1);
  const [comments, setComment] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const decreasePeopleCount = () => {
    if (number_of_people > 1) {
      setPeopleCount((prevCount) => prevCount - 1);
    }
  };

  const increasePeopleCount = () => {
    if (number_of_people < 6) {
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

    if (phone_number.trim() > "4" && comments.trim() == "") {
      return alert("Заполните все поля!");
    }

    try {
      await submitFeedback({
        phone_number,
        number_of_people,
        comments,
      });
      setSubmitStatus("Your trip has been booked!");
    } catch (error) {
      setSubmitStatus("The tour can’t be booked");
    }

    setModalIsOpen(true);
  };

  return (
    <>
      {!modalIsOpen && (
        <div className="feedbackModal">
          <form className="feedbackModal__modal" onSubmit={handleSubmit}>
            <div className="feedbackModal__modal__head">
              <h1>Info</h1>
              <button onClick={onClose}>
                <img src={closeModal} alt="Close img" />
              </button>
            </div>
            <p className="feedbackModal__modal__rule">
              To submit an application for a tour reservation, you need to fill
              in your information and select the number of people for the
              reservation
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
                  value={phone_number}
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
                  value={comments}
                  onChange={handleOnChangeComment}
                />
              </div>

              <div className="feedbackModal__modal__inputsBlock__people">
                <span>Number of people</span>

                <div className="feedbackModal__modal__inputsBlock__people__choise">
                  <div className="feedbackModal__modal__inputsBlock__people__choise__count">
                    <button
                      className={1 == number_of_people ? "endPerson" : ""}
                      type="button"
                      onClick={decreasePeopleCount}
                    >
                      -
                    </button>
                    <p>{number_of_people}</p>
                    <button
                      type="button"
                      onClick={increasePeopleCount}
                      className={6 == number_of_people ? "endPerson" : ""}
                    >
                      +
                    </button>
                  </div>

                  <img src={userImg} alt="User Img" />
                  <p>
                    {number_of_people} Person{number_of_people !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <button
                className={comments.trim() == "" ? "emptyBtn" : "fullBtn"}
                type="submit"
              >
                Submit
              </button>
            </section>
          </form>{" "}
        </div>
      )}

      <Modal
        shouldCloseOnEsc
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Booking Status"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "400px",
            height: "200px",
            borderRadius: "48px",
            margin: "auto",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "20px ",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <h2 className="alertText">{submitStatus}</h2>
        <button className="alertBtn" onClick={onClose}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default FeedbackModal;
