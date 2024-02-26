import leftBtn from "../../shared/assets/DiscoverCardEntity/leftBtn.svg";
import rightBtn from "../../shared/assets/DiscoverCardEntity/rightBtn.svg";
import "./DiscoverCardEntity.scss";
import { useNavigate } from "react-router";

const DiscoverCardEntity = () => {
  const navigate = useNavigate();

  return (
    <div className="discoverCardEntity">
      <div className="discoverCardEntity__head">
        <h2>Discover</h2>
        <div className="discoverCardEntity__head__btnBlock">
          <button>
            <img src={leftBtn} alt="Left" />
          </button>
          <button>
            <img src={rightBtn} alt="Right" />
          </button>
        </div>
      </div>

      <div className="discoverCardEntity__list">
        <ul>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Featured</a>
          </li>
          <li>
            <a>Most Visited</a>
          </li>
          <li>
            <a>Europe</a>
          </li>
          <li>
            <a>Asia</a>
          </li>
        </ul>
      </div>

      <div
        className="discoverCardEntity__card"
        onClick={() => {
          navigate(`/details/${9}`);
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BUAryby3x6k2W1DFNixOUmgH8_PHoz0D2w&usqp=CAU"
          alt="Wait"
        />
        <div className="discoverCardEntity__card__textOverlay">
          <span>Mount Fuji</span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCardEntity;
