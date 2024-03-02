import { FC } from "react";
import "./DiscoverCardEntity.scss";
import { useNavigate } from "react-router";
import { RecCard } from "../types";

const DiscoverCardEntity: FC<RecCard> = ({ id, name, photo }: RecCard) => {
  const navigate = useNavigate();

  return (
    <div
      className="discoverCardEntity"
      onClick={() => {
        navigate(`/details/${id}`);
      }}
    >
      <img src={photo} alt="Wait" />
      <div className="discoverCardEntity__textOverlay">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default DiscoverCardEntity;
