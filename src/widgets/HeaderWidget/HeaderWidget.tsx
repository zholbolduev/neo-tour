import React from "react";
import "./HeaderWidget.scss";
import Person from "../../shared/assets/HeaderEntity/personMountain.svg";

const HeaderWidget = () => {
  return (
    <div className="headerWidget">
      <div className="headerWidget__textBlock">
        <h1>
          Winter <br /> Vacation Trips
        </h1>
        <p>
          Enjoy your winter vacations with warmth and amazing sightseeing on the
          mountains. Enjoy the best experience with us!
        </p>
        <button>Let’s Go!</button>
      </div>

      <div className="headerWidget__imgBlock">
        <img src={Person} alt="Person" />
      </div>
    </div>
  );
};

export default HeaderWidget;
