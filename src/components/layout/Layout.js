import React, { Fragment, createContext, useState } from "react";
import Header from "./header/Header";

export const ConnectionContext = createContext();

const Layout = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walAddress, setWalAddress] = useState("Connect");
  const [walBalance, setWalBalance] = useState("");
  const [yapBalance, setYapBalance] = useState("");
  const [yapes, setYapes] = useState(null);
  const [rewards, setRewards] = useState(null);

  return (
    <Fragment>
      <ConnectionContext.Provider
        value={{
          isConnected,
          setIsConnected,
          walAddress,
          setWalAddress,
          walBalance,
          setWalBalance,
          yapBalance,
          setYapBalance,
          yapes,
          setYapes,
          rewards,
          setRewards,
        }}
      >
        <Header />
        <div>{children}</div>
      </ConnectionContext.Provider>
    </Fragment>
  );
};

export default Layout;
