import "./RecomCardEntity.scss";
import { useNavigate } from "react-router";
import { FC } from "react";
import { RecCard } from "../types";

const RecomCardEntity: FC<RecCard> = ({ id, name, photo }: RecCard) => {
  const navigate = useNavigate();

  return (
    <div
      className="RecomCardEntity"
      onClick={() => {
        navigate(`/details/${id}`);
      }}
    >
      <img src={photo} alt="Wait" />
      <div className="RecomCardEntity__overlay">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default RecomCardEntity;
