import React from "react";
import "./Card.css";

const Card = ({ id, tier, tax, rewards, image }) => {
  const handleClaimClick = () => {
    alert("Hey, do something with this shit!");
  };

  return (
    <div className="altcard">
      <div
        className="altcard__picture"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/${image})`,
        }}
      ></div>
      <div className="altcard__info-block">
        <div className="altcard__info">
          <div className="altcard__info-tier">
            <span>Tier {tier}</span>
          </div>
          <p className="altcard__info-title">Yung Ape #{id}</p>
          <p>Applicable Tax Rate: {tax}%</p>
          <p>Rewards: {rewards} $YAPES</p>
        </div>
        <div className="altcard__button">
          <button onClick={handleClaimClick} className="altcard__info-button">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
