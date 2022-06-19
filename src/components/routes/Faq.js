import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="wrapper start-wrapper">
      <h1 className="section__title">FAQ Section</h1>
      <div className="faq-block">
        <div className="faq-image">
          <img
            src={`${process.env.PUBLIC_URL}/img/faq_ape_01.png`}
            alt="ape_image"
          />
        </div>
        <div className="faq-info">
          <p className="faq-info__title">FAQ Section 1</p>
          <p className="faq-info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            exercitationem, voluptatibus quas culpa laborum quam. Doloribus est
            nesciunt eveniet ipsum, deserunt ad! Optio sit minima incidunt
            veniam nemo harum possimus ipsum facilis dolores soluta atque quidem
            excepturi alias aliquam sint a officia minus, animi doloribus
            temporibus saepe similique, ab dignissimos. Dolores soluta atque
            quidem excepturi alias aliquam sint a officia minus, animi doloribus
            temporibus saepe similique, ab dignissimos. Doloribus est nesciunt
            eveniet ipsum, deserunt ad!
          </p>
        </div>
      </div>

      <div className="faq-block">
        <div className="faq-info faq-info-2">
          <p className="faq-info__title">FAQ Section 2</p>
          <p className="faq-info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            exercitationem, voluptatibus quas culpa laborum quam. Doloribus est
            nesciunt eveniet ipsum, deserunt ad! Optio sit minima incidunt
            veniam nemo harum possimus ipsum facilis dolores soluta atque quidem
            excepturi alias aliquam sint a officia minus, animi doloribus
            temporibus saepe similique, ab dignissimos. Dolores soluta atque
            quidem excepturi alias aliquam sint a officia minus, animi doloribus
            temporibus saepe similique, ab dignissimos. Doloribus est nesciunt
            eveniet ipsum, deserunt ad!
          </p>
        </div>
        <div className="faq-image-2">
          <img
            src={`${process.env.PUBLIC_URL}/img/faq_ape_02.png`}
            alt="ape_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
