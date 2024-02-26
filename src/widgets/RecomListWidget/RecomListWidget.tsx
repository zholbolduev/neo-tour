import React from "react";
import RecomCardEntity from "../../entities/RecomCardEntity/RecomCardEntity";
import "./RecomListWidget.scss";

const RecomListWidget = () => {
  return (
    <div className="recomListWidget">
      <h1>Recommended</h1>

      <div className="recomListWidget__list">
        <RecomCardEntity />
      </div>
    </div>
  );
};

export default RecomListWidget;
