import "./Rewards.css";

const Rewards = ({ rewards }) => {
  const handleClaimClick = () => {
    alert("Hey, do something with this shit!");
  };

  return (
    <div className="wrapper start-wrapper">
      <h1 className="section__title">You Rewards</h1>
      <div className="rewards">
        <div className="rewards__info">
          <p>Staking Rewards: {rewards.balance.toFixed(2)} $YAPES</p>
          <p>Redistributed Tax: {rewards.tax.toFixed(2)} $YAPES</p>
          <hr />
          <p className="bold">
            Total Claimable: {(rewards.balance + rewards.tax).toFixed(2)} $YAPES
          </p>
        </div>
        <div className="rewards__claim">
          <p className="rewards__claim-title">Claimable $YAPES</p>
          <p className="rewards__claim-total">
            {(rewards.balance + rewards.tax).toFixed(2)} $YAPES
          </p>
          <p onClick={handleClaimClick} className="rewards__claim-button">
            Claim All Rewards
          </p>
        </div>
      </div>
      <div className="note">
        <p className="note__title">Accumulation Initiated</p>
        <p className="note__text">
          Please note that you do not have to pay gas fees to start earning.
          {"\n"} You are already accumulating rewards by holding your NFTs.
        </p>
      </div>
    </div>
  );
};

export default Rewards;
