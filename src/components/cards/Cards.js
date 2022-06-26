import React from "react";
import Card from "./Card";

const Cards = ({ yapes = [] }) => {
  return (
    <div className="wrapper">
      <h1 className="section__title">Young Apes</h1>
      {yapes ? yapes['nfts'].map((yape) => (
        <Card key={yape.id} {...yape} />
      )) : null}
    </div>
  );
};

export default Cards;
