import { Fragment, useState, useEffect, useContext, useCallback } from "react";
import Rewards from "../rewards/Rewards";
import Cards from "../cards/Cards";
import { ConnectionContext } from "../layout/Layout";
import Start from "../layout/start/Start";
import Loader from "../layout/loader/Loader";

const Home = () => {
  const { isConnected, yapes, setYapes, walAddress, rewards, setRewards } =
      useContext(ConnectionContext);

  const rewUrl = "http://127.0.0.1:8000/balance/?address="+walAddress;
  const yapUrl = "http://127.0.0.1:8000/nfts/?address="+walAddress;

  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(
    async (dataType, url) => {
      try {
        let response = {};
        let data = {};
        if(walAddress === "Connect"){
          console.log(walAddress)
          response = await fetch(url);
          data = await response.json();
        }
        if (dataType === "rew") {
          console.log(data);
          setRewards(data);
        }
        if (dataType === "yap") {
          console.log(data);
          setYapes(data);
        }
        // console.log(data);
        setIsLoading(false);
      } catch (err) {
        alert(err);
      }
    },
    [setRewards, setYapes]
  );

  useEffect(() => {
    setIsLoading(true);
    getData("rew", rewUrl);
    getData("yap", yapUrl);
  }, [isConnected, getData]);

  if (!isConnected) {
    return <Start />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isConnected && rewards && yapes && !isLoading) {
    return (
      <Fragment>
        <Rewards rewards={rewards} />
        <Cards yapes={yapes} />
      </Fragment>
    );
  }
};

export default Home;
