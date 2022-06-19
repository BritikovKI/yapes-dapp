import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [walAddress, setWalAddress] = useState("Connect");

  const requestAccount = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalAddress(accounts[0]);
      } catch {
        console.log("Connection error...");
      }
    } else {
      alert("MetaMask not detected...");
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-block">
          <div className="nav__logo">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo_2.png`}
              alt="logo"
              width="88px"
              height="88px"
            />
          </div>

          <div
            className={menuIsOpen ? "change nav__burger" : "nav__burger"}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <div className="nav__burger-line_uno"></div>
            <div className="nav__burger-line_due"></div>
            <div className="nav__burger-line_tre"></div>
          </div>
        </div>
        <div
          className={
            menuIsOpen
              ? "nav__menu-block nav__menu-block_open"
              : "nav__menu-block"
          }
        >
          <ul className="nav__menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/faq">How It Works</NavLink>
            </li>
          </ul>
          <div className="nav__button-block">
            <div className="nav__button-info">
              <nobr>10.20 yapes | 1 eth</nobr>
            </div>
            <button onClick={requestAccount} className="nav__button">
              {walAddress === "Connect"
                ? "Connect"
                : `${walAddress.slice(0, 4)}.....${walAddress.slice(-4)}`}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
