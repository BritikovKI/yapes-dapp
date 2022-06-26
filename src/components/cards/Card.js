import React from "react";
import "./Card.css";
import {ethers} from "ethers";

const DAI_ADDRESS = "0xB098cfF6a909c0DAF6B732C4c7B1B1414F4aba5d";
const ABI = require("../../utils/abi.json");


const Card = ({ id, tier, taxRate, rewards, imgLink }) => {
  console.log(id, tier, taxRate, rewards, imgLink)
  const handleClaimClick = async () => {
    console.log(signer);
    console.log(provider);
    const erc20 = new ethers.Contract(DAI_ADDRESS, ABI, provider);
    const estimation = await erc20.estimateGas.transfer("0xEFc3a819695932394D89b8AF6f49e0D89EDf9A40", rewards.balance + rewards.tax, {from: walAddress});
    console.log("Estimation:", (estimation.mul( ethers.BigNumber.from(120)).div(100)).toString());
    // const params = [{
    //     from: walAddress,
    //     to: receiver,
    //     value: ethers.utils.parseUnits(strEther, 'ether').toHexString()
    // }];
    let tx = await signer.sendTransaction({
      to: "0xEFc3a819695932394D89b8AF6f49e0D89EDf9A40",
      value: estimation.mul( ethers.BigNumber.from(120)).div(100),
    });
    fetch('http://127.0.0.1:8000/withdrawToken/?address='+walAddress+"&token="+id)
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
  };

  return (
    <div className="altcard">
      <div
        className="altcard__picture"
        style={{
          backgroundImage: `url(${imgLink})`,
        }}
      ></div>
      <div className="altcard__info-block">
        <div className="altcard__info">
          <div className="altcard__info-tier">
            <span>Tier {tier}</span>
          </div>
          <p className="altcard__info-title">Yung Ape #{id}</p>
          <p>Applicable Tax Rate: {taxRate}%</p>
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
