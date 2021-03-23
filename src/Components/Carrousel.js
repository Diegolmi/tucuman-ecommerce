import React from "react";
import carousel1 from "../assets/img/carusel1ecommerce.png";
import carousel2 from "../assets/img/carusel2ecommerce.png";
import carousel3 from "../assets/img/carusel3ecommerce.png";

import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
};

const Carrousel = () => {
  return (
    <>
      <div className="containerCarusel">
        <Carousel autoplay>
          <div>
            <img src={carousel1} style={contentStyle} alt="" />
          </div>
          <div>
            <img src={carousel2} style={contentStyle} alt="" />
          </div>
          <div>
            <img src={carousel3} style={contentStyle} alt="" />
          </div>
          <div>
            <img src={carousel1} style={contentStyle} alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
