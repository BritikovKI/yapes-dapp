import { Fragment, useState, useEffect, useContext, useCallback } from "react";
import Rewards from "../rewards/Rewards";
import Cards from "../cards/Cards";
import { ConnectionContext } from "../layout/Layout";
import Start from "../layout/start/Start";
import Loader from "../layout/loader/Loader";

const Home = () => {
  const rewUrl = "rewards_data.json";
  const yapUrl = "yapes_data.json";

  const { isConnected, yapes, setYapes, rewards, setRewards } =
    useContext(ConnectionContext);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(
    async (dataType, url) => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        if (dataType === "rew") {
          setRewards(data);
        }
        if (dataType === "yap") {
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
