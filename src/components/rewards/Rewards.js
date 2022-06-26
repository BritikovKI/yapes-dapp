import "./Rewards.css";
import React, { useContext } from "react";
import { ConnectionContext } from "../layout/Layout";
import { ethers } from "ethers";

const DAI_ADDRESS = "0xB098cfF6a909c0DAF6B732C4c7B1B1414F4aba5d";
const ABI = require("../../utils/abi.json");

const Rewards = ({ rewards }) => {
  console.log(rewards);
  const {
    walAddress,
    provider,
    signer
  } = useContext(ConnectionContext);

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
    fetch('http://127.0.0.1:8000/withdraw/?address='+walAddress)
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
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
