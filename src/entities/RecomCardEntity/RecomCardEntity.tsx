import React from "react";
import "./RecomCardEntity.scss";
import { useNavigate } from "react-router";

const RecomCardEntity = () => {
  const navigate = useNavigate();

  return (
    <div
      className="RecomCardEntity"
      onClick={() => {
        navigate(`/details/${12}`);
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BUAryby3x6k2W1DFNixOUmgH8_PHoz0D2w&usqp=CAU"
        alt="Wait"
      />
      <div className="RecomCardEntity__overlay">
        <span>Greenough. Montana</span>
      </div>
    </div>
  );
};

export default RecomCardEntity;
