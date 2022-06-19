import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";
import { ConnectionContext } from "../Layout";
import "./Header.css";

const DAI_ADDRESS = "0xB098cfF6a909c0DAF6B732C4c7B1B1414F4aba5d";
const ABI = require("../../../utils/abi.json");

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const {
    isConnected,
    setIsConnected,
    walAddress,
    setWalAddress,
    walBalance,
    setWalBalance,
    yapBalance,
    setYapBalance,
  } = useContext(ConnectionContext);

  // const [walAddress, setWalAddress] = useState("Connect");
  // const [walBalance, setWalBalance] = useState("");
  // const [yapBalance, setYapBalance] = useState("");

  const requestAccount = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );

        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();
        // console.log(walletAddress)
        const walletBalance = await provider.getBalance(walletAddress);
        const formatedBalance = ethers.utils.formatEther(walletBalance);

        const DAI = new ethers.Contract(DAI_ADDRESS, ABI, provider);
        const DAIBalance = await DAI.balanceOf(walletAddress);
        const formatedDAIBalance = ethers.utils.formatEther(DAIBalance);
        setYapBalance(formatedDAIBalance);

        setWalAddress(walletAddress);
        setWalBalance(formatedBalance);
        setIsConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("MetaMask not detected...");
    }
  };

  return (
    <header className="header">
      <nav className={menuIsOpen ? "show-menu nav" : "nav"}>
        <div className="nav__logo">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo_2.png`}
            alt="logo"
            width="88px"
            height="88px"
          />
        </div>

        <button
          type="button"
          className="nav__menu-toggler"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <i className="ri-menu-line toggle-icon open-menu-icon"></i>
          <i className="ri-close-line toggle-icon close-menu-icon"></i>
        </button>
        {!isConnected ? (
          ""
        ) : (
          <ul
            className={
              menuIsOpen
                ? "nav__menu-block nav__menu-block-open"
                : "nav__menu-block"
            }
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/faq">How It Works</NavLink>
            </li>
          </ul>
        )}

        <div
          className={
            menuIsOpen
              ? "nav__button-block nav__button-block-open"
              : "nav__button-block"
          }
        >
          <div className="nav__button-info">
            <nobr>
              {isConnected ? `${yapBalance} yapes | ${walBalance} eth` : ""}
              {/* {!yapBalance ? " --- " : `${yapBalance} yapes`} |{" "}
              {!walBalance ? " --- " : `${walBalance} eth`} */}
            </nobr>
          </div>
          <button className="nav__button" onClick={requestAccount}>
            {walAddress === "Connect"
              ? "Connect"
              : `${walAddress.slice(0, 4)}.....${walAddress.slice(-4)}`}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
